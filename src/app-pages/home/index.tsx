import { BlockFactory } from "@/blocks/block-factory";
import { FC } from "react";
import { PageProps } from "../page-factory";

export const HomePage: FC<PageProps> = ({ webpageData: { page, theme } }) => {
  return (
    <div>
      {page.blocks.map((blk) => (
        <BlockFactory
          key={blk.id}
          variant={blk.blockVariant}
          props={blk.blockProps}
          type={blk.blockType}
        />
      ))}
    </div>
  );
};
