import React from "react";

import s from "./style.module.scss";

export const Main: React.FC = ({ children }) => {
    const newClasses = `container mx-w-6xl mx-auto py-4 ${s.mainHeight}`;
    return <main className={newClasses}>{children}</main>;
};
