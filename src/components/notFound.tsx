import React from "react";

import { Main } from "@commons";

import { TriangleExclamation } from "@icons";

const NotFound: React.FC = () => {
    return (
        <Main>
            <div
                className="flex flex-col items-center justify-center w-full h-full"
                style={{ height: "calc(50vh)" }}
            >
                <TriangleExclamation className="w-16 h-16 text-gray-300" />
                <h1 className="mt-4 text-4xl font-bold text-gray-300">404</h1>
                <h2 className="mt-2 text-2xl font-bold text-gray-300">
                    Not Found
                </h2>
            </div>
        </Main>
    );
};

export default NotFound;
