import React from "react";

import { Typography } from "neetoui";

const Body = ({ description }) => (
  <>
    <Typography className="text-gray-500" style="body2">
      {description}
    </Typography>
    <hr className="my-3" />
  </>
);

export default Body;
