import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FC, ReactNode } from "react";
import styles from "./index.module.css";

interface ElasticLayoutProps {
  children: ReactNode;
  // app: App;
  // config: LayoutConfig;
}

export const ElasticLayout: FC<ElasticLayoutProps> = ({ children }) => {
  return (
    <div className={styles.app_wrapper}>
      <header className={styles.header}>
        <Header />
      </header>

      <main className={styles.main}>
        <aside className={styles.left}>left</aside>
        <section className={styles.content}>{children}</section>
        <aside className={styles.right}>right</aside>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};
