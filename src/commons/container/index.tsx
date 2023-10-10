import React from "react";

import { IBasicProps } from "@interfaces/common";

export const Container: React.FC<IBasicProps> = ({ children, className }) => {
    const newClasses = `min-h-screen flex flex-col ${className}`;

    return <div className={newClasses}>{children}</div>;
};
