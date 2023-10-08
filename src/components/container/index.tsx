// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export const Container = ({ className, children }: any) => {
    const classes = `min-h-screen flex flex-col ${className}`;

    return <div className={classes}>{children}</div>;
};
