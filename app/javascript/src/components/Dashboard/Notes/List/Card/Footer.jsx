import React from "react";

import { Clock } from "neetoicons";
import { Typography, Tooltip, Avatar, Tag } from "neetoui";
import { useTranslation } from "react-i18next";

import { USER_AVATAR_URL } from "../../constants";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between">
      <Tag
        label={t("common.gettingStarted")}
        size="small"
        style="secondary"
        type="solid"
      />
      <div className="flex space-x-2">
        <Tooltip content="Wednesday, 10:30 AM" placement="bottom-start">
          <div className="flex items-center space-x-1">
            <Clock color="#87929d" size={16} />
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
