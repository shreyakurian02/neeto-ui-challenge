import React from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

const Menubar = ({
  showMenu,
  title,
  commonBlocks = [],
  segmentBlocks = [],
  tagBlocks = [],
}) => (
  <MenuBar showMenu={showMenu} title={title}>
    {commonBlocks.map(({ label, count }, index) => (
      <MenuBar.Block
        active={index === 0}
        count={count}
        key={index}
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
        Segments
      </Typography>
    </MenuBar.SubTitle>
    <MenuBar.Search isCollapsed />
    {segmentBlocks.map(({ label, count }, index) => (
      <MenuBar.Block count={count} key={index} label={label} />
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
        Tags
      </Typography>
    </MenuBar.SubTitle>
    {tagBlocks.map(({ label, count }, index) => (
      <MenuBar.Block count={count} key={index} label={label} />
    ))}
  </MenuBar>
);

export default Menubar;
