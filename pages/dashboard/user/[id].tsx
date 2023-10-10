import React from "react";
import { useRouter } from "next/router";

import { TRANSACTIONS_URL, isNumber } from "@helpers";
import { useFetch } from "@hooks";
import { Dashboard, NotFound } from "@components";
import { ITransactionResponse } from "@interfaces/transactions";
import { ISummaryResponse } from "@interfaces/summary";

const Page: React.FC = () => {
    const { id } = useRouter().query;

    const transactionsResponse: ITransactionResponse = useFetch(
        `${TRANSACTIONS_URL}/transactions/user/${id}`,
        {},
        [id],
    );
    const summaryResponse: ISummaryResponse = useFetch(
        `${TRANSACTIONS_URL}/summary/user/${id}`,
        {},
        [id],
    );

    return (
        <>
            {isNumber(id) &&
            (transactionsResponse.data !== null ||
                summaryResponse.data !== null) ? (
                <Dashboard
                    userid={id}
                    transactionsResponse={transactionsResponse}
                    summaryResponse={summaryResponse}
                />
            ) : (
                <NotFound />
            )}
        </>
    );
};

export default Page;
