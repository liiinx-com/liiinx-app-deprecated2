import { BlockFactory } from "@/blocks/block-factory";
import { Section } from "@/components/section";
import { store } from "@/store";
import { common } from "@/utils";
import { FC, ReactNode } from "react";
import styles from "./index.module.css";

interface HeemLayoutProps {
  children: ReactNode;
}

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
          className={common.twMerge(
            layoutConfig?.header?.wrapperClassName || "",
            theme.header?.wrapper?.className || ""
          )}
          style={{
            ...(theme.header?.wrapper?.style || {}),
            ...(layoutConfig?.header?.wrapperStyle || {}),
          }}
        >
          <Section
            id="header"
            contained={layoutConfig?.header?.blockContained || true}
            className={common.twMerge(
              layoutConfig?.header?.blockClassName || "",
              theme.header?.className || ""
            )}
            style={layoutConfig?.header?.blockStyle || {}}
          >
            <BlockFactory
              variant={layoutConfig.header.blockVariant}
              props={{
                menu: headerPrimary,
                className: theme?.header?.className || "",
                style: theme?.header?.style || {},
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
          className={common.twMerge(
            layoutConfig?.content?.wrapperClassName || "",
            theme.content?.wrapper?.className || ""
          )}
          style={{
            ...(theme.content?.wrapper?.style || {}),
            ...(layoutConfig?.content?.wrapperStyle || {}),
          }}
        >
          <Section
            contained={layoutConfig?.content?.blockContained}
            className={common.twMerge(
              layoutConfig?.content?.blockClassName || "",
              theme.content?.className || ""
            )}
            style={{
              ...(layoutConfig?.content?.blockStyle || {}),
              ...(theme?.content?.style || {}),
            }}
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
          className={common.twMerge(
            layoutConfig?.footer?.wrapperClassName || "",
            theme.footer?.wrapper?.className || ""
          )}
          style={{
            ...(theme.footer?.wrapper?.style || {}),
            ...layoutConfig?.footer?.wrapperStyle,
          }}
        >
          <Section
            id="footer"
            contained={layoutConfig?.footer?.blockContained}
            className={common.twMerge(
              layoutConfig?.footer?.blockClassName || "",
              theme.footer?.className || ""
            )}
            style={{
              ...(theme?.footer?.style || {}),
              ...(layoutConfig?.footer?.blockStyle || {}),
            }}
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
          className={layoutConfig?.footerBar?.wrapperClassName || ""}
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
