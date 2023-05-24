import { LayoutData } from "@/services/types";
import { FC, ReactNode } from "react";
import styles from "./index.module.css";

interface HeemLayoutProps {
  children: ReactNode;
  layoutData: LayoutData;
}

const layoutConfig = {
  sidebar: { isActive: false },
  header: { isActive: false },
  footer: { isActive: false },
  main: {
    leftBar: { isActive: false },
    rightBar: { isActive: false },
  },
};

export const HeemLayout: FC<HeemLayoutProps> = ({ children }) => {
  return (
    <div className={`container mx-auto sm:px-4 ${styles.layoutWrapper}`}>
      {layoutConfig.sidebar.isActive && (
        <nav className={styles.sidebar}>Sidebar</nav>
      )}
      <div className={styles.mainWrapper}>
        {layoutConfig.header.isActive && (
          <header className={styles.header}>Header</header>
        )}
        <main className={styles.mainContent}>
          {layoutConfig.main.leftBar.isActive && (
            <aside className={styles.leftBar}>left-bar</aside>
          )}
          <article className={styles.content}>{children}</article>
          {layoutConfig.main.rightBar.isActive && (
            <aside className={styles.rightBar}>Aside</aside>
          )}
        </main>
        {layoutConfig.footer.isActive && (
          <footer className={styles.footer}>Footer</footer>
        )}
      </div>
    </div>
  );
};
