import { Menu } from "@/components/menu";
import { MenuItem } from "@/components/menu/menu-item";
import { store } from "@/store";
import Link from "next/link";
import { FC } from "react";
import { FooterProps } from "..";

export const Footer1: FC<FooterProps> = ({ className = "", style = {} }) => {
  const {
    profile: { copyrightText },
    layout: {
      menus: { footerSecondary, footerPrimary },
    },
  } = store.getState().webpage.config;

  return (
    <footer className={` dark:bg-gray-900 ${className} `} style={style}>
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="#">
            {/* <img className="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt=""> */}
          </a>

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            {footerPrimary?.items &&
              footerPrimary.items.map(({ url, id, target, title }) => (
                <Link
                  key={id}
                  href={url}
                  target={target}
                  className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  {title}
                </Link>
              ))}
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {copyrightText}
          </p>

          <div className="flex -mx-2">
            {footerSecondary?.items && (
              <Menu>
                {footerSecondary.items.map((i) => (
                  <MenuItem key={i.id} {...i} />
                ))}
              </Menu>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
