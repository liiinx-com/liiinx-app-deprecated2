import { BlockFactory } from "@/blocks/block-factory";
import { Section } from "@/components/section";
import { WebpageData } from "@/services/types";
import { FC, ReactNode } from "react";
import styles from "./index.module.css";

interface HeemLayoutProps {
  children: ReactNode;
  webpageData: WebpageData;
}
const variants = {
  titlebar: "titlebar1",
  header: "header1",
  footer: "footer1",
};

export const HeemLayout: FC<HeemLayoutProps> = ({ children, webpageData }) => {
  const {
    theme,
    layout: {
      settings,
      menus: { headerPrimary, footerPrimary },
    },
  } = webpageData;

  return (
    <div className={`${styles["app-wrapper"]}`}>
      {settings.topBar?.isActive && (
        <Section
          id="top-bar-wrapper"
          contained={settings?.topBar?.wrapper.contained}
          className={`${settings?.topBar?.wrapper.className} bg-lime-700`}
          style={settings?.topBar?.wrapper.style}
        >
          <Section
            id="top-bar"
            contained={settings?.topBar?.contained}
            style={settings?.topBar?.style}
            className={`${settings?.topBar?.className} bg-lime-300`}
          >
            top-bar
          </Section>
        </Section>
      )}

      {settings.header?.isActive && (
        <Section
          id="header-wrapper"
          contained={settings?.header?.wrapper.contained}
          className={`${settings?.header?.wrapper.className}`}
          style={{
            backgroundColor: theme.body.bgColor,
            ...settings?.header?.wrapper.style,
          }}
        >
          <Section
            id="header"
            contained={settings?.header?.contained}
            className={`${settings?.header?.className} bg-blue-300`}
            style={settings?.header?.style}
          >
            <BlockFactory
              variant={variants.header}
              props={{ className: "bg-transparent", menu: headerPrimary }}
              type="header"
            />
          </Section>
        </Section>
      )}

      {settings.hero?.isActive && (
        <Section
          id="hero-wrapper"
          contained={settings?.hero?.wrapper.contained}
          className={`${settings?.hero?.wrapper.className} bg-amber-700`}
          style={{
            backgroundColor: theme.body.bgColor,
            ...settings?.hero?.wrapper.style,
          }}
        >
          <Section
            id="hero"
            contained={settings?.hero?.contained}
            className={`${settings?.hero?.className} bg-amber-300`}
            style={settings?.hero?.style}
          >
            hero
          </Section>
        </Section>
      )}
      {settings.content?.isActive && (
        <Section
          id="content-wrapper"
          contained={settings?.content?.wrapper.contained}
          className={`${settings?.content?.wrapper.className} bg-sky-700`}
          style={{
            backgroundColor: theme.body.bgColor,
            ...settings?.content?.wrapper.style,
          }}
        >
          <Section
            contained={settings?.content?.contained}
            className={`${settings?.content?.className} bg-sky-300`}
            style={settings?.content?.style}
          >
            {false && <aside className={styles["left-bar"]}>left-bar</aside>}
            <article className={styles["content"]}>{children}</article>
            {false && <aside className={styles["right-bar"]}>Aside</aside>}
          </Section>
        </Section>
      )}

      {settings.footer?.isActive && (
        <Section
          id="footer-wrapper"
          contained={settings?.footer?.wrapper.contained}
          className={`${settings?.footer?.wrapper.className} bg-purple-700`}
          style={{
            backgroundColor: theme.body.bgColor,
            ...settings?.footer?.wrapper.style,
          }}
        >
          <Section
            id="footer"
            contained={settings?.footer?.contained}
            className={`${settings?.footer?.className} bg-purple-300`}
            style={settings?.footer?.style}
          >
            <BlockFactory
              variant={variants.footer}
              props={{ className: "bg-transparent", menu: footerPrimary }}
              type="footer"
            />
          </Section>
        </Section>
      )}

      {settings.footerBar?.isActive && (
        <Section
          id="footer-bar-wrapper"
          contained={settings?.footerBar?.wrapper.contained}
          className={`${settings?.footerBar?.wrapper.className} bg-slate-700`}
          style={settings?.footerBar?.wrapper.style}
        >
          <Section
            id="footer-bar"
            contained={settings?.footerBar?.contained}
            className={`${settings?.footerBar?.className} bg-slate-300`}
            style={settings?.footerBar?.style}
          >
            footer-bar
          </Section>
        </Section>
      )}
    </div>
  );
};
