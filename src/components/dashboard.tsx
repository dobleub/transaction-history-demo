import React from "react";

import { Main, Bubble } from "@commons";
import { ITransaction, ITransactionResponse } from "@interfaces/transactions";
import { ISummaryResponse } from "@interfaces/summary";
import { IBasicProps } from "@interfaces/common";

import {
    StarOfLifeIcon,
    CreditCardIcon,
    WalletIcon,
    MoneyBillIcon,
    ArrowRightIcon,
    ChevronRightIcon,
    CheckIcon,
    TriangleExclamation,
} from "@icons";
import {
    TRANSACTIONS_URL,
    getCurrencyFormat,
    getDateFormat,
    simpleValidateEmail,
} from "@helpers";
import { useInterval } from "react-use";
import { ESendEmailStatus } from "@interfaces/enums";

interface DashboardProps extends IBasicProps {
    userid: string | string[] | undefined;
    transactionsResponse: ITransactionResponse;
    summaryResponse: ISummaryResponse;
}

const Dashboard: React.FC<DashboardProps> = ({
    userid,
    transactionsResponse,
    summaryResponse,
}) => {
    const { isLoading: isLoadingTransactions, data: transactions } =
        transactionsResponse;
    const { isLoading: isLoadingSummary, data: summary } = summaryResponse;
    const [showBubble, setShowBubble] = React.useState<boolean>(false);
    const [emailSent, setEmailSent] = React.useState<ESendEmailStatus>(
        ESendEmailStatus.NONE,
    );

    const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const isValidEmail = simpleValidateEmail(email);

        if (isValidEmail) {
            setEmailSent(ESendEmailStatus.PENDING);
            const response = await fetch(
                `${TRANSACTIONS_URL}/summary/email/${userid}/to/${email}`,
                {},
            );

            if (response.ok) {
                setEmailSent(ESendEmailStatus.SUCCESS);
            } else {
                setEmailSent(ESendEmailStatus.ERROR);
            }
        } else {
            setEmailSent(ESendEmailStatus.ERROR);
        }
        setShowBubble(true);
    };

    useInterval(() => {
        setShowBubble(false);
    }, 1000 * 6);

    return (
        <Main>
            {showBubble && (
                <Bubble
                    msg={`${
                        emailSent == ESendEmailStatus.SUCCESS
                            ? "Email send"
                            : "Error sending email"
                    }`}
                    icon={
                        emailSent == ESendEmailStatus.SUCCESS ? (
                            <CheckIcon height="1em" />
                        ) : (
                            <TriangleExclamation height="1em" />
                        )
                    }
                />
            )}
            <div className="flex flex-col space-y-8">
                {/* First Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 px-4 xl:p-0 gap-y-4 md:gap-6">
                    {/* Credit/Debit Card */}
                    <div className="md:col-span-2 bg-gradient-to-r from-blue-500 to-blue-800 p-6 rounded-2xl border border-blue-50 text-white">
                        <div className="flex flex-col space-y-6 md:h-full md:justify-between">
                            <div className="flex justify-between">
                                <span className="text-xs text-blue-50 font-semibold uppercase tracking-wider">
                                    Account
                                </span>
                                <span className="text-xs text-blue-50 font-semibold uppercase tracking-wider">
                                    Total Balance
                                </span>
                            </div>
                            <div className="flex flex-row md:flex-col lg:flex-row gap-2 md:gap-4 justify-between items-center">
                                <div className="flex flex-col space-y-4">
                                    <h2 className="text-blue-50 font-bo ld tracking-widest leading-tight">
                                        Jhon's Account
                                    </h2>
                                    <div className="flex items-center gap-4">
                                        <p className="text-lg text-blue-200 tracking-wider flex items-center">
                                            <StarOfLifeIcon height="0.5em" />
                                            <StarOfLifeIcon height="0.5em" />
                                            <StarOfLifeIcon height="0.5em" />
                                            <StarOfLifeIcon height="0.5em" />
                                            &nbsp;
                                            <StarOfLifeIcon height="0.5em" />
                                            <StarOfLifeIcon height="0.5em" />
                                            <StarOfLifeIcon height="0.5em" />
                                            <StarOfLifeIcon height="0.5em" />
                                            &nbsp;
                                            <StarOfLifeIcon height="0.5em" />
                                            <StarOfLifeIcon height="0.5em" />
                                            <StarOfLifeIcon height="0.5em" />
                                            <StarOfLifeIcon height="0.5em" />
                                            &nbsp;1234
                                        </p>
                                        <ArrowRightIcon
                                            height="1em"
                                            className="text-blue-200"
                                        />
                                    </div>
                                </div>
                                <h2 className="text-lg md:text-xl xl:text-3xl text-blue-50 font-black tracking-wider">
                                    {!isLoadingSummary &&
                                        getCurrencyFormat(
                                            summary?.totalBalance,
                                        )}
                                </h2>
                            </div>
                            <div className="flex gap-2 md:gap-4">
                                <a
                                    href="#"
                                    className="bg-blue-50 px-5 py-3 w-full text-center md:w-auto rounded-lg text-blue-600 text-xs tracking-wider font-semibold hover:bg-blue-800 hover:text-white"
                                >
                                    Transfer Money
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Summary Transactions */}
                    <div className="row-span-2 md:col-span-2 xl:col-span-4 p-6 rounded-2xl bg-white flex flex-col justify-between border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 xl:p-0 gap-4 xl:gap-6">
                            <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-between">
                                <h2 className="text-xs md:text-sm text-gray-700 font-bold tracking-wide md:tracking-wider">
                                    Summary Transactions
                                </h2>
                                {/* TODO: send to view this data + transactions per month */}
                                <a
                                    href="#"
                                    className="text-xs text-gray-800 font-semibold uppercase"
                                >
                                    More
                                </a>
                            </div>
                            <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl border border-gray-50">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col">
                                        <p className="text-xs text-gray-600 tracking-wide">
                                            Total Credit
                                        </p>
                                        <h3 className="mt-1 text-lg text-blue-500 font-bold">
                                            {!isLoadingSummary &&
                                                getCurrencyFormat(
                                                    summary?.totalIncome,
                                                )}
                                        </h3>
                                        <span className="hidden xl:block mt-4 text-xs text-gray-500">
                                            Last Transaction 3 Hours ago
                                        </span>
                                    </div>
                                    <div className="bg-blue-500 p-2 md:p-1 xl:p-2 rounded-md text-white">
                                        <CreditCardIcon height="1.5em" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl border border-gray-50">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col">
                                        <p className="text-xs text-gray-600 tracking-wide">
                                            Total Debit
                                        </p>
                                        <h3 className="mt-1 text-lg text-green-500 font-bold">
                                            {!isLoadingSummary &&
                                                getCurrencyFormat(
                                                    summary?.totalExpense,
                                                )}
                                        </h3>
                                        <span className="hidden xl:block mt-4 text-xs text-gray-500">
                                            Last Transaction 3 Days ago
                                        </span>
                                    </div>
                                    <div className="bg-green-500 p-2 md:p-1 xl:p-2 rounded-md text-white">
                                        <WalletIcon height="1.5em" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl border border-gray-50">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col">
                                        <p className="text-xs text-gray-600 tracking-wide">
                                            Average Credit Amount
                                        </p>
                                        <h3 className="mt-1 text-lg text-yellow-500 font-bold">
                                            {!isLoadingSummary &&
                                                getCurrencyFormat(
                                                    summary?.averageCreditAmount,
                                                )}
                                        </h3>
                                        <span className="hidden xl:block mt-4 text-xs text-gray-600">
                                            Last Transaction 4 Days ago
                                        </span>
                                    </div>
                                    <div className="bg-yellow-500 p-2 md:p-1 xl:p-2 rounded-md text-white">
                                        <MoneyBillIcon height="1.5em" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl border border-gray-50">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col">
                                        <p className="text-xs text-gray-600 tracking-wide">
                                            Average Debit Amount
                                        </p>
                                        <h3 className="mt-1 text-lg text-indigo-500 font-bold">
                                            {!isLoadingSummary &&
                                                getCurrencyFormat(
                                                    summary?.averageDebitAmount,
                                                )}
                                        </h3>
                                        <span className="hidden xl:block mt-4 text-xs text-gray-500">
                                            Last Transaction 1 Month ago
                                        </span>
                                    </div>
                                    <div className="bg-indigo-500 p-2 md:p-1 xl:p-2 rounded-md text-white">
                                        <MoneyBillIcon height="1.5em" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Send email with summary report */}
                    <div className="md:col-span-2 p-6 rounded-2xl bg-white flex flex-col justify-between border border-gray-100">
                        <h2 className="text-sm text-gray-600 font-bold tracking-wider">
                            Send Email with Summary Report
                        </h2>
                        <form
                            className="mx-auto w-full pt-5"
                            onSubmit={handleSendEmail}
                        >
                            <div className="flex flex-row gap-4">
                                <input
                                    id="email"
                                    placeholder="Email"
                                    type="email"
                                    className="w-full rounded border border-blue-100 px-4 py-3 font-body text-black bg-gray-50 focus:outline-none focus:border-blue-300"
                                />
                                {emailSent == ESendEmailStatus.PENDING ? (
                                    <button
                                        className="flex items-center justify-center gap-1 bg-blue-50 rounded-lg px-5 py-3 w-1/3 text-center text-xs text-blue-500 tracking-wider font-semibold cursor-not-allowed"
                                        type="submit"
                                        disabled
                                    >
                                        SENDING
                                        <ChevronRightIcon height="1em" />
                                    </button>
                                ) : (
                                    <button
                                        className="flex items-center justify-center gap-1 bg-blue-100 rounded-lg px-5 py-3 w-1/3 text-center text-xs text-blue-600 tracking-wider font-semibold hover:bg-blue-800 hover:text-white"
                                        type="submit"
                                    >
                                        SEND
                                        <ChevronRightIcon height="1em" />
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 px-4 xl:p-0 gap-y-4 md:gap-6">
                    {/* Transactions History */}
                    <div className="col-span-1 md:col-span-4 xl:col-span-6 p-6 rounded-2xl bg-white flex flex-col justify-between border border-gray-100">
                        <div className="flex justify-between items-center">
                            <h2 className="text-sm text-gray-600 font-bold tracking-wide">
                                Latest 10 Transactions
                            </h2>
                            {/* TODO: Show last 10 transactions and all transactions list */}
                            <a
                                href="#"
                                className="px-4 py-2 text-xs bg-blue-100 text-blue-500 rounded uppercase tracking-wider font-semibold hover:bg-blue-300"
                            >
                                More
                            </a>
                        </div>
                        {!isLoadingTransactions ? (
                            <ul className="divide-y-2 divide-gray-100 overflow-x-auto w-full">
                                {transactions
                                    ?.slice(0, 10)
                                    .map((transaction: ITransaction) => (
                                        <li
                                            key={transaction.transactionId}
                                            className="py-3 grid text-sm text-gray-500 font-semibold hover:bg-gray-100 cursor-pointer"
                                        >
                                            <div className="grid grid-cols-3 gap-y-4">
                                                <div className="col-span-1 flex items-center justify-left">
                                                    <p className="px-4 font-semibold">
                                                        {getDateFormat(
                                                            transaction.date,
                                                        )}
                                                    </p>
                                                </div>
                                                <div className="col-span-1 flex items-center justify-center">
                                                    <p className="px-4 text-gray">
                                                        Jhon Doe
                                                    </p>
                                                </div>
                                                <div className="col-span-1 flex items-end justify-end">
                                                    <p className="md:text-base text-gray-800">
                                                        {getCurrencyFormat(
                                                            transaction.transaction,
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                            </ul>
                        ) : (
                            <div className="flex justify-center items-center">
                                <p className="text-gray-500 font-semibold">
                                    Loading...
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Main>
    );
};

export default Dashboard;
