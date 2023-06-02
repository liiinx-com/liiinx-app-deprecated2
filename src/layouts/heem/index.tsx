import { BlockFactory } from "@/blocks/block-factory";
import { LayoutData, ThemeDto } from "@/services/types";
import { FC, ReactNode } from "react";
import styles from "./index.module.css";

interface HeemLayoutProps {
  children: ReactNode;
  theme: ThemeDto;
  layoutData: LayoutData;
}
const variants = {
  titlebar: "titlebar1",
  header: "header1",
  footer: "footer1",
};
export const HeemLayout: FC<HeemLayoutProps> = ({
  children,
  theme,
  layoutData: { settings },
}) => {
  return (
    <div className={`container mx-auto sm:px-4 ${styles.layoutWrapper}`}>
      {settings.sidebar?.isActive && (
        <nav className={styles.sidebar}>Sidebar</nav>
      )}
      <div className={styles.mainWrapper}>
        {settings.header?.isActive && (
          <header className={styles.header}>
            <BlockFactory
              variant={variants.header}
              props={{ className: "bg-transparent" }}
              type="header"
            />
          </header>
        )}
        <main className={styles.mainContent}>
          {/* {settings.content?.leftBar?.isActive && (
            <aside className={styles.leftBar}>left-bar</aside>
          )} */}
          <article className={styles.content}>{children}</article>
          {/* {settings.main?.rightBar?.isActive && (
            <aside className={styles.rightBar}>Aside</aside>
          )} */}
        </main>
        {settings.footer?.isActive && (
          <footer className={styles.footer}>
            <BlockFactory
              props={{ className: "bg-transparent" }}
              variant={variants.footer}
              type="footer"
            />
          </footer>
        )}
      </div>
    </div>
  );
};
