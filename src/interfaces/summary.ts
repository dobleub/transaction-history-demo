import { IErrorResponse } from "./common";

export interface ISummary {
    totalBalance: number;
    totalIncome: number;
    totalExpense: number;
    transactionsPerMonth: {
        [key: string]: {
            amount: number;
            total: number;
        };
    };
    averageCreditAmount: number;
    averageDebitAmount: number;
}

export interface ISummaryResponse {
    isLoading: boolean;
    data: ISummary;
    error: IErrorResponse;
}
