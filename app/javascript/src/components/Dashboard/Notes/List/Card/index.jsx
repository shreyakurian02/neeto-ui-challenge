import React from "react";

import { Typography } from "neetoui";

import Footer from "./Footer";
import Header from "./Header";

const Card = ({ note, setIsDeleteAlertOpen }) => {
  const { description, title, created_at: createdAt } = note;

  return (
    <div className="neeto-ui-shadow-xs neeto-ui-border-gray-300 w-full rounded-sm border p-4">
      <Header setIsDeleteAlertOpen={setIsDeleteAlertOpen} title={title} />
      <Typography className="neeto-ui-text-gray-600" style="body2">
        {description}
      </Typography>
      <hr className="my-3" />
      <Footer createdAt={createdAt} />
    </div>
  );
};

export default Card;
