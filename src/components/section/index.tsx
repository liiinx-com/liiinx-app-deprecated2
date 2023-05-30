import { CSSProperties, FC, ReactNode } from "react";
import styles from "./index.module.css";

interface SectionProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export const Section: FC<SectionProps> = ({
  children,
  className = "",
  style = {},
}) => {
  return (
    <div className={[styles.wrapper, className].join(" ")} style={style}>
      {children}
    </div>
  );
};
