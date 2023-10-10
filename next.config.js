const path = require("path");

const nextConfig = {
    reactStrictMode: true,
    webpack(config, options) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        if (options.isServer) {
            config.externals = ["react", ...config.externals];
        }

        config.resolve.alias["react"] = path.resolve(
            __dirname,
            ".",
            "node_modules",
            "react",
        );

        return config;
    },
    webpackDevMiddleware: (config) => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        };
        return config;
    },
    env: {
        NEXT_PUBLIC_STORI_TRANSACTIONS_API:
            process.env.NEXT_PUBLIC_STORI_TRANSACTIONS_API,
    },
};

module.exports = nextConfig;
