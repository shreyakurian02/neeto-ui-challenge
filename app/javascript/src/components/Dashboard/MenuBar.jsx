import React from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar as NeetoUIMenuBar } from "neetoui/layouts";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";

import { PLURAL } from "constants";

const MenuBar = ({
  showMenu,
  title,
  commonBlocks = [],
  segmentBlocks = [],
  tagBlocks = [],
}) => {
  const { t } = useTranslation();

  return (
    <NeetoUIMenuBar showMenu={showMenu} title={title}>
      {commonBlocks.map(({ label, count = 0, isActive = false }) => (
        <NeetoUIMenuBar.Block
          active={isActive}
          count={count}
          key={uuid()}
          label={label}
        />
      ))}
      <NeetoUIMenuBar.SubTitle iconProps={[{ icon: Search }]}>
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          {t("menu.segments")}
        </Typography>
      </NeetoUIMenuBar.SubTitle>
      <NeetoUIMenuBar.Search collapse />
      {segmentBlocks.map(({ label, count }) => (
        <NeetoUIMenuBar.Block count={count} key={uuid()} label={label} />
      ))}
      <NeetoUIMenuBar.SubTitle
        iconProps={[{ icon: Search }, { icon: Settings }, { icon: Plus }]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          {t("common.tag", PLURAL)}
        </Typography>
      </NeetoUIMenuBar.SubTitle>
      {tagBlocks.map(({ label, count }) => (
        <NeetoUIMenuBar.Block count={count} key={uuid()} label={label} />
      ))}
    </NeetoUIMenuBar>
  );
};

export default MenuBar;
