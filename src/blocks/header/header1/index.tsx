"use client";
import { TitleBar1 } from "@/blocks/titlebar/titlebar1";
import { IconMenu } from "@/components/icons";
import { RootState } from "@/store";
import Link from "next/link";
import { useState } from "react";
import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { HeaderProps } from "..";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const Header1 = ({
  dir,
  shadow,
  className = "",
  style = {},
  menu,
}: HeaderProps) => {
  const {
    profile: { headerLogo },
  } = useAppSelector((state) => state.webpage.config);

  const [isOpen, setOpen] = useState(false);

  return (
    <nav
      dir={dir}
      className={`relative ${
        shadow ? "shadow" : ""
      } dark:bg-gray-800 ${className}`}
      style={style}
    >
      <div className="container px-4 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <a href="#">
              <TitleBar1 className="mt-2" title={headerLogo.textLogo} />
            </a>

            <div className="flex lg:hidden">
              <button
                onClick={() => setOpen((prev) => !prev)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <IconMenu />
              </button>
            </div>
          </div>

          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              {menu?.items &&
                menu.items.map(({ url, id, target, title }) => (
                  <Link
                    key={id}
                    href={url}
                    target={target}
                    className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {title}
                  </Link>
                ))}
            </div>

            {/* <div className="flex items-center mt-4 lg:mt-0">
              <button
                className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                aria-label="show notifications"
              >
                button2
              </button>

              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar">
                </div>

                <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                  Khatab wedaa
                </h3>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
