import React from "react";

export const Footer: React.FC = () => {
    return (
        <footer className="w-full flex justify-center">
            <div className="container pt-4 px-4 xl:px-0">
                <div className="text-center py-5 rounded-t-2xl bg-white text-gray-600">
                    {/* Footer Row */}
                    <div className="flex flex-wrap items-center lg:justify-between px-5">
                        <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                            <div className="leading-normal text-center text-sm text-slate-500 lg:text-left">
                                © {new Date().getFullYear()} - Made by
                                <a
                                    href="https://github.com/dobleub/"
                                    className="font-semibold text-slate-700"
                                    target="_blank"
                                >
                                    &nbsp;Edd Osorio&nbsp;
                                </a>
                                for Stori Challenge
                            </div>
                        </div>
                        <div className="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
                            <ul className="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                                <li className="nav-item">
                                    <a
                                        href="https://www.creative-tim.com"
                                        className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500"
                                        target="_blank"
                                    >
                                        Creative Tim
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="https://www.creative-tim.com/presentation"
                                        className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500"
                                        target="_blank"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="https://creative-tim.com/blog"
                                        className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500"
                                        target="_blank"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="https://www.creative-tim.com/license"
                                        className="block px-4 pt-0 pb-1 pr-0 font-normal transition-colors ease-soft-in-out text-sm text-slate-500"
                                        target="_blank"
                                    >
                                        License
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
