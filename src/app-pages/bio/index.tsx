import { BlockFactory } from "@/blocks/block-factory";
import { Section } from "@/components/section";
import Image from "next/image";
import { FC } from "react";
import { PageProps } from "../page-factory";
import styles from "./index.module.css";

// TODO: hardcode
const variants = {
  titlebar: "titlebar1",
  header: "header1",
  footer: "footer1",
};

export const BioPage: FC<PageProps> = ({ webpageData: { page } }) => {
  return (
    <div className={`container ${styles.wrapper}  w-full max-w-4xl`}>
      <div className={styles.headerWrapper}>
        <BlockFactory
          variant={variants.header}
          props={{ className: "bg-transparent" }}
          type="header"
        />
      </div>
      <section className={`${styles.contentWrapper} -mt-28`}>
        <section className={`${styles.profileImageWrapper} md:pt-5 pt-3`}>
          <Image
            src="https://yt3.googleusercontent.com/qd-3PVa5gu4Q8I4980JqdTIh2Di6P4aDi30dc2ZqQ1VzTXkdE6EG0rHST0ww8QkZiI8vwgDM=s176-c-k-c0x00ffffff-no-rj"
            height={90}
            width={90}
            className={`mx-auto rounded-full ${styles.profileImage}`}
            alt="my photo"
          />
          <Section>
            <BlockFactory
              type="titleBar"
              variant={variants.titlebar}
              props={{ title: "Salamat Trading" }}
            />
          </Section>
        </section>
        <div className={styles.sectionsWrapper}>
          {page.blocks.map((block) => (
            <Section key={block.order}>
              <BlockFactory {...block} />
            </Section>
          ))}
        </div>
      </section>
      <footer className={styles.footerWrapper}>
        <BlockFactory
          props={{ className: "bg-transparent" }}
          variant={variants.footer}
          type="footer"
        />
      </footer>
    </div>
  );
};
