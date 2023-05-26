import React from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";

const Menubar = ({
  showMenu,
  title,
  commonBlocks = [],
  segmentBlocks = [],
  tagBlocks = [],
}) => {
  const { t } = useTranslation();

  return (
    <MenuBar showMenu={showMenu} title={title}>
      {commonBlocks.map(({ label, count, isActive }) => (
        <MenuBar.Block
          active={isActive}
          count={count}
          key={uuid()}
          label={label}
        />
      ))}
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
          },
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          {t("menu.segments")}
        </Typography>
      </MenuBar.SubTitle>
      <MenuBar.Search collapse />
      {segmentBlocks.map(({ label, count }) => (
        <MenuBar.Block count={count} key={uuid()} label={label} />
      ))}
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
          },
          {
            icon: Settings,
          },
          {
            icon: Plus,
          },
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          {t("menu.tags")}
        </Typography>
      </MenuBar.SubTitle>
      {tagBlocks.map(({ label, count }) => (
        <MenuBar.Block count={count} key={uuid()} label={label} />
      ))}
    </MenuBar>
  );
};

export default Menubar;
