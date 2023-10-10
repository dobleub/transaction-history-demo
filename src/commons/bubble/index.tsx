import React from "react";

import { CheckIcon } from "@icons";
import { IBasicProps } from "@interfaces/common";

interface BubbleProps extends IBasicProps {
    msg: string;
    icon?: React.ReactNode;
}

export const Bubble: React.FC<BubbleProps> = ({ msg, icon }) => {
    return (
        <div className="fixed bottom-4 right-4 xl:right-20">
            <div className="transform duration-500 ease-in-out animate-bounce bg-yellow-400 px-4 py-3 font-mono font-semibold rounded-lg shadow hover:shadow-xl flex justify-between items-center gap-4">
                {msg}
                {icon ? icon : <CheckIcon />}
            </div>
        </div>
    );
};
