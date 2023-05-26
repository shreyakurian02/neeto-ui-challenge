import React from "react";

import { Typography } from "neetoui";

import Footer from "./Footer";
import Header from "./Header";

const Card = ({ note }) => {
  const { description, title } = note;

  return (
    <div className="neeto-ui-shadow-xs w-full rounded-sm border border-gray-300 p-4">
      <Header title={title} />
      <Typography className="text-gray-500" style="body2">
        {description}
      </Typography>
      <hr className="my-3" />
      <Footer />
    </div>
  );
};

export default Card;
