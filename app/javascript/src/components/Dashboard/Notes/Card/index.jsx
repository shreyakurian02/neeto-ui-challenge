import React from "react";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Card = ({ note }) => {
  const { description, title } = note;

  return (
    <div className="neeto-ui-shadow-xs mb-4 w-full rounded-sm border border-gray-300 p-4">
      <Header title={title} />
      <Body description={description} />
      <Footer />
    </div>
  );
};

export default Card;
