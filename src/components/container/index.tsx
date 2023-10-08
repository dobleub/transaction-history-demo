import React from "react";

export const Container: React.FC = ({ classes, children }: any) => {
    const newClasses = `min-h-screen flex flex-col ${classes}`;

    return <div className={newClasses}>{children}</div>;
};
