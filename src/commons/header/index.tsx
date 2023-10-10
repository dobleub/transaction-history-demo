import React, { useState, useRef } from "react";

import {
    ArrowRightFromBracketIcon,
    BellIcon,
    ChevronRightIcon,
    CrossIcon,
    DesktopIcon,
    EnvelopeIcon,
    GearIcon,
    JustifyTextIcon,
} from "@icons/index";
import useOutsideClick from "@hooks/useOutsideClick";
import { useRouter } from "next/router";

export const Header: React.FC = () => {
    const path = useRouter().pathname;
    const activeClass = "bg-blue-200";

    const mobileMenuRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useOutsideClick(mobileMenuRef, () => setIsMenuOpen(false));

    return (
        <>
            <header className="flex flex-row justify-between items-center py-4">
                <nav className="p-4 md:py-8 xl:px-0 md:container md:mx-w-6xl md:mx-auto w-full">
                    {/* Desktop menu */}
                    <div className="hidden lg:flex lg:justify-between lg:items-center">
                        <a href="/" className="flex items-start gap-2 group">
                            <div className="bg-blue-600 text-white p-2 rounded-md group-hover:bg-blue-800">
                                <DesktopIcon height="1.5em" />
                            </div>
                            <p className="text-sm font-light uppercase">
                                Dashboard
                                <span className="text-base block font-bold tracking-widest">
                                    Atom
                                </span>
                            </p>
                        </a>
                        <ul className="flex items-center space-x-4 text-sm font-semibold">
                            <li>
                                <a
                                    href="/"
                                    className={`px-2 xl:px-4 py-2 text-gray-800 rounded-md hover:bg-gray-200 ${
                                        path === "/" ? activeClass : ""
                                    }`}
                                >
                                    Accounts
                                </a>
                            </li>
                            <li className="relative" x-data="{ open: false }">
                                <a
                                    href="#"
                                    className="px-2 xl:px-4 py-2 text-gray-800 rounded-md hover:bg-gray-200 flex gap-2 items-center"
                                >
                                    Transactions
                                </a>
                            </li>
                        </ul>
                        <ul className="flex space-x-2 xl:space-x-4 text-sm font-semibold">
                            <li>
                                <a href="#">
                                    <div className="p-2 rounded hover:bg-gray-200">
                                        <GearIcon height="1.5em" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="p-2 rounded hover:bg-gray-200">
                                        <EnvelopeIcon height="1.5em" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="p-2 rounded hover:bg-gray-200">
                                        <BellIcon height="1.5em" />
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul className="flex items-center gap-6">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-sans text-gray-800 font-semibold tracking-wider"
                                >
                                    Demo
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="p-2 rounded hover:bg-gray-200">
                                        <ArrowRightFromBracketIcon height="1.4em" />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Mobile menu */}
                    <div className="lg:hidden relative flex justify-between w-full">
                        <a href="/" className="flex items-start gap-2 group">
                            <div className="bg-blue-600 text-white p-3 rounded-md group-hover:bg-blue-800">
                                <DesktopIcon height="1.5em" />
                            </div>
                            <p className="text-sm font-light uppercase">
                                Dashboard
                                <span className="text-base block font-bold tracking-widest">
                                    Atom
                                </span>
                            </p>
                        </a>
                        <button
                            type="button"
                            className="bg-gray-200 p-3 rounded-md"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <CrossIcon height="1.5em" />
                            ) : (
                                <JustifyTextIcon height="1.5em" />
                            )}
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-14 left-0 right-0 w-full bg-white rounded-md border">
                                <ul ref={mobileMenuRef} className="p-4">
                                    <li className="px-4 py-2 rounded hover:bg-gray-200">
                                        <a
                                            href="/"
                                            className={`px-2 xl:px-4 py-2 text-gray-800 rounded-md hover:bg-gray-200 ${
                                                path === "/" ? activeClass : ""
                                            }`}
                                        >
                                            <ChevronRightIcon height="0.5em" />
                                            Accounts
                                        </a>
                                    </li>
                                    <li className="px-4 py-2 rounded hover:bg-gray-200">
                                        <a
                                            href="#"
                                            className="flex items-center gap-4"
                                        >
                                            <ChevronRightIcon height="0.5em" />
                                            Transactions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
            </header>
        </>
    );
};
