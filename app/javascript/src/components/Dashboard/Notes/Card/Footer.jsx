import React from "react";

import { Clock } from "neetoicons";
import { Typography, Tooltip, Avatar, Tag } from "neetoui";
import { useTranslation } from "react-i18next";

import { USER_AVATAR_URL } from "../constants";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between">
      <Tag
        className="rounded-sm border border-gray-300 bg-gray-100 p-2 text-gray-600"
        label="Getting Started"
        size="small"
        style="primary"
        type="solid"
      />
      <div className="flex">
        <Tooltip content="Wednesday, 10:30 AM" placement="bottom-start">
          <div className="items-cente flex flex-row  px-2">
            <Clock className="m-0.5 mx-1.5" color="#87929d" size={16} />
            <Typography className="neeto-ui-text-gray-500" style="body3">
              {t("common.createdAgo")}
            </Typography>
          </div>
        </Tooltip>
        <Avatar size="small" user={{ imageUrl: USER_AVATAR_URL }} />
      </div>
    </div>
  );
};

export default Footer;
