import React from "react";

import { Main } from "@commons";
import { IUser } from "@interfaces/user";
import { useFetch } from "@hooks";

import { UserIcon } from "@icons";
import { TRANSACTIONS_URL, getCurrencyFormat } from "@helpers";

const Home: React.FC = () => {
    const { isLoading: isLoadingUsers, data: users } = useFetch(
        `${TRANSACTIONS_URL}/users`,
        {},
    );

    return (
        <Main>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 xl:p-0 gap-4 xl:gap-6">
                <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-between">
                    <h2 className="text-xs md:text-sm text-gray-700 font-bold tracking-wide md:tracking-wider">
                        Accounts
                    </h2>
                    {/* TODO: send to view this data + transactions per month */}
                    <a
                        href="#"
                        className="text-xs text-gray-800 font-semibold uppercase"
                    >
                        More
                    </a>
                </div>
                {!isLoadingUsers &&
                    users?.map((user: IUser) => (
                        <a
                            className="col-span-1 md:col-span-2"
                            key={user.userId}
                            href={`/dashboard/user/${user.userId}`}
                        >
                            <div className="bg-white p-6 rounded-xl border border-gray-50 hover:bg-blue-100">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col">
                                        <p className="text-xs text-gray-600 tracking-wide">
                                            {!isLoadingUsers && user.name}
                                        </p>
                                        <h3 className="mt-1 text-lg text-indigo-500 font-bold">
                                            {!isLoadingUsers &&
                                                getCurrencyFormat(
                                                    user.totalBalance,
                                                )}
                                        </h3>
                                    </div>
                                    <div className="bg-indigo-500 p-2 md:p-1 xl:p-2 rounded-md text-white">
                                        <UserIcon height="1.5em" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
            </div>
        </Main>
    );
};

export default Home;
