import React from "react";

import { MenuVertical } from "neetoicons";
import { Typography, Dropdown } from "neetoui";

const Header = ({ title }) => (
  <div className="flex justify-between">
    <Typography style="h4">{title}</Typography>
    <Dropdown buttonStyle="text" className="p-4" icon={MenuVertical}>
      <Dropdown.Menu>
        <Dropdown.MenuItem.Button onClick={() => {}}>
          Edit
        </Dropdown.MenuItem.Button>
        <Dropdown.MenuItem.Button onClick={() => {}}>
          Delete
        </Dropdown.MenuItem.Button>
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

export default Header;
