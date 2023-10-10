import { IErrorResponse } from "./common";

export interface ITransaction {
    transactionId: number;
    userId: number;
    date: string;
    transaction: number;
}
export interface ITransactionResponse {
    isLoading: boolean;
    data: ITransaction[];
    error: IErrorResponse;
}
