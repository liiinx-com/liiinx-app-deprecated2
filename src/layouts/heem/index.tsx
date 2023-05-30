import { LayoutData, ThemeDto } from "@/services/types";
import { FC, ReactNode } from "react";
import styles from "./index.module.css";

interface HeemLayoutProps {
  children: ReactNode;
  theme: ThemeDto;
  layoutData: LayoutData;
}

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
          <header className={styles.header}>Header</header>
        )}
        <main className={styles.mainContent}>
          {settings.main?.leftBar?.isActive && (
            <aside className={styles.leftBar}>left-bar</aside>
          )}
          <article className={styles.content}>{children}</article>
          {settings.main?.rightBar?.isActive && (
            <aside className={styles.rightBar}>Aside</aside>
          )}
        </main>
        {settings.footer?.isActive && (
          <footer className={styles.footer}>Footer</footer>
        )}
      </div>
    </div>
  );
};
