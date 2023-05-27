import React from "react";

import { Typography } from "neetoui";

import Footer from "./Footer";
import Header from "./Header";

const Card = ({ note }) => {
  const { description, title, created_at: createdAt } = note;

  return (
    <div className="neeto-ui-shadow-xs w-full rounded-sm border border-gray-300 p-4">
      <Header title={title} />
      <Typography className="text-gray-500" style="body2">
        {description}
      </Typography>
      <hr className="my-3" />
      <Footer createdAt={createdAt} />
    </div>
  );
};

export default Card;
