export interface ICallback {
    (target: HTMLElement): any;
}

export interface IBasicProps {
    className?: string;
    children?: any;
    data?: any;
}

export interface IErrorResponse {
    code: number;
    msg: string;
}
