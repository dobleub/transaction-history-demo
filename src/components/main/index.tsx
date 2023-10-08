import React from "react";

import {
    StarOfLifeIcon,
    CreditCardIcon,
    WalletIcon,
    MoneyBillIcon,
    ArrowRightIcon,
} from "@icons";

export const Main: React.FC = () => {
    return (
        <main className="container mx-w-6xl mx-auto py-4">
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
                                        Derol's Account
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
                                    <span className="md:text-xl">$</span>
                                    92,817.45
                                </h2>
                            </div>
                            <div className="flex gap-2 md:gap-4">
                                <a
                                    href="#"
                                    className="bg-blue-50 px-5 py-3 w-full text-center md:w-auto rounded-lg text-blue-600 text-xs tracking-wider font-semibold hover:bg-blue-600 hover:text-white"
                                >
                                    Transfer Money
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Summary Transactions */}
                    <div className="md:col-span-2 xl:col-span-4 p-6 rounded-2xl bg-white flex flex-col justify-between border border-gray-100">
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
                                            $ 818
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
                                            $ 8,918
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
                                            $ 1,223
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
                                            $ 5,918
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
                </div>
                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 px-4 xl:p-0 gap-y-4 md:gap-6">
                    {/* Transactions History */}
                    <div className="col-span-1 md:col-span-4 xl:col-span-6 p-6 rounded-2xl bg-white flex flex-col justify-between border border-gray-100">
                        <div className="flex justify-between items-center">
                            <h2 className="text-sm text-gray-600 font-bold tracking-wide">
                                Latest Transactions
                            </h2>
                            {/* TODO: Show last 10 transactions and all transactions list */}
                            <a
                                href="#"
                                className="px-4 py-2 text-xs bg-blue-100 text-blue-500 rounded uppercase tracking-wider font-semibold hover:bg-blue-300"
                            >
                                More
                            </a>
                        </div>
                        <ul className="divide-y-2 divide-gray-100 overflow-x-auto w-full">
                            <li className="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                                <p className="px-4 font-semibold">Today</p>
                                <p className="px-4 text-gray-600">McDonald</p>
                                <p className="px-4 tracking-wider">Cash</p>
                                <p className="px-4 text-blue-600">Food</p>
                                <p className="md:text-base text-gray-800 flex items-center gap-2">
                                    16.90
                                </p>
                            </li>
                            <li className="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                                <p className="px-4 font-semibold">Today</p>
                                <p className="px-4 text-gray-600">McDonald</p>
                                <p className="px-4 tracking-wider">Cash</p>
                                <p className="px-4 text-blue-600">Food</p>
                                <p className="md:text-base text-gray-800 flex items-center gap-2">
                                    16.90
                                </p>
                            </li>
                            <li className="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                                <p className="px-4 font-semibold">Today</p>
                                <p className="px-4 text-gray-600">McDonald</p>
                                <p className="px-4 tracking-wider">Cash</p>
                                <p className="px-4 text-blue-600">Food</p>
                                <p className="md:text-base text-gray-800 flex items-center gap-2">
                                    16.90
                                </p>
                            </li>
                            <li className="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                                <p className="px-4 font-semibold">Today</p>
                                <p className="px-4 text-gray-600">McDonald</p>
                                <p className="px-4 tracking-wider">Cash</p>
                                <p className="px-4 text-blue-600">Food</p>
                                <p className="md:text-base text-gray-800 flex items-center gap-2">
                                    16.90
                                </p>
                            </li>
                            <li className="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                                <p className="px-4 font-semibold">Today</p>
                                <p className="px-4 text-gray-600">McDonald</p>
                                <p className="px-4 tracking-wider">Cash</p>
                                <p className="px-4 text-blue-600">Food</p>
                                <p className="md:text-base text-gray-800 flex items-center gap-2">
                                    16.90
                                </p>
                            </li>
                            <li className="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                                <p className="px-4 font-semibold">Today</p>
                                <p className="px-4 text-gray-600">McDonald</p>
                                <p className="px-4 tracking-wider">Cash</p>
                                <p className="px-4 text-blue-600">Food</p>
                                <p className="md:text-base text-gray-800 flex items-center gap-2">
                                    16.90
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};
