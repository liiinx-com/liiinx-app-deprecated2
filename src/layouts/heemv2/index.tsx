import { BlockFactory } from "@/blocks/block-factory";
import { Section } from "@/components/section";
import { store } from "@/store";
import { FC, ReactNode } from "react";
import styles from "./index.module.css";

interface HeemLayoutProps {
  children: ReactNode;
}
const variants = {
  titlebar: "titlebar1",
};

export const HeemLayout: FC<HeemLayoutProps> = ({ children }) => {
  const {
    theme,
    layout: {
      layoutConfig,
      menus: { headerPrimary, footerPrimary },
    },
  } = store.getState().webpage.config;

  return (
    <div className={`${styles["app-wrapper"]}`}>
      {layoutConfig.topBar?.isActive && (
        <Section
          id="top-bar-wrapper"
          contained={layoutConfig?.topBar?.wrapperContained}
          className={`${layoutConfig?.topBar?.wrapperClassName} bg-lime-700`}
          style={layoutConfig?.topBar?.wrapperStyle}
        >
          <Section
            id="top-bar"
            contained={layoutConfig?.topBar?.blockContained}
            style={layoutConfig?.topBar?.blockStyle}
            className={`${layoutConfig?.topBar?.blockClassName} bg-lime-300`}
          >
            top-bar
          </Section>
        </Section>
      )}

      {layoutConfig.header?.isActive && (
        <Section
          id="header-wrapper"
          contained={layoutConfig?.header?.wrapperContained}
          className={`${layoutConfig?.header?.wrapperClassName}`}
          style={{
            backgroundColor: theme.body.bgColor,
            ...layoutConfig?.header?.wrapperStyle,
          }}
        >
          <Section
            id="header"
            contained={layoutConfig?.header?.blockContained}
            className={`${layoutConfig?.header?.blockClassName} bg-blue-300`}
            style={layoutConfig?.header?.blockStyle}
          >
            <BlockFactory
              variant={layoutConfig.header.blockVariant}
              props={{
                menu: headerPrimary,
                ...layoutConfig.header.blockProps,
              }}
              type="header"
            />
          </Section>
        </Section>
      )}

      {/* {layoutConfig.hero?.isActive && (
        <Section
          id="hero-wrapper"
          contained={layoutConfig?.hero?.wrapper.contained}
          className={`${layoutConfig?.hero?.wrapper.className} bg-amber-700`}
          style={{
            backgroundColor: theme.body.bgColor,
            ...layoutConfig?.hero?.wrapper.style,
          }}
        >
          <Section
            id="hero"
            contained={layoutConfig?.hero?.contained}
            className={`${layoutConfig?.hero?.className} bg-amber-300`}
            style={layoutConfig?.hero?.style}
          >
            hero
          </Section>
        </Section>
      )} */}
      {layoutConfig.content?.isActive && (
        <Section
          id="content-wrapper"
          contained={layoutConfig?.content?.wrapperContained}
          className={`${layoutConfig?.content?.wrapperClassName} bg-sky-700`}
          style={{
            backgroundColor: theme.body.bgColor,
            ...layoutConfig?.content?.wrapperStyle,
          }}
        >
          <Section
            contained={layoutConfig?.content?.blockContained}
            className={`${layoutConfig?.content?.blockClassName} bg-sky-300`}
            style={layoutConfig?.content?.blockStyle}
          >
            {false && <aside className={styles["left-bar"]}>left-bar</aside>}
            <article className={styles["content"]}>{children}</article>
            {false && <aside className={styles["right-bar"]}>Aside</aside>}
          </Section>
        </Section>
      )}

      {layoutConfig.footer?.isActive && (
        <Section
          id="footer-wrapper"
          contained={layoutConfig?.footer?.wrapperContained}
          className={`${layoutConfig?.footer?.wrapperClassName} bg-purple-700`}
          style={{
            backgroundColor: theme.body.bgColor,
            ...layoutConfig?.footer?.wrapperStyle,
          }}
        >
          <Section
            id="footer"
            contained={layoutConfig?.footer?.blockContained}
            className={`${layoutConfig?.footer?.blockClassName} bg-purple-300`}
            style={layoutConfig?.footer?.blockStyle}
          >
            <BlockFactory
              variant={layoutConfig.footer.blockVariant}
              props={{ className: "bg-transparent", menu: footerPrimary }}
              type="footer"
            />
          </Section>
        </Section>
      )}

      {layoutConfig.footerBar?.isActive && (
        <Section
          id="footer-bar-wrapper"
          contained={layoutConfig?.footerBar?.wrapperContained}
          className={`${layoutConfig?.footerBar?.wrapperClassName} bg-slate-700`}
          style={layoutConfig?.footerBar?.wrapperStyle}
        >
          <Section
            id="footer-bar"
            contained={layoutConfig?.footerBar?.blockContained}
            className={`${layoutConfig?.footerBar?.blockClassName} bg-slate-300`}
            style={layoutConfig?.footerBar?.blockStyle}
          >
            footer-bar
          </Section>
        </Section>
      )}
    </div>
  );
};
