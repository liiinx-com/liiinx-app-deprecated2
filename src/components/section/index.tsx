import { CSSProperties, FC, ReactNode } from "react";
import styles from "./index.module.css";

interface SectionProps {
  contained?: boolean;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  id?: string;
}

export const Section: FC<SectionProps> = ({
  id,
  children,
  contained = false,
  className = "",
  style = {},
}) => {
  const componentClassName = [
    styles.wrapper,
    contained ? "container" : "w-full",
    className,
  ].join(" ");

  return (
    <section
      {...(id ? { id } : {})}
      className={componentClassName}
      style={style}
    >
      {children}
    </section>
  );
};
