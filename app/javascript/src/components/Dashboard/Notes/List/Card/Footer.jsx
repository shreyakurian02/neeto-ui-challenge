import React from "react";

import { Clock } from "neetoicons";
import { Typography, Tooltip, Avatar, Tag } from "neetoui";
import { useTranslation } from "react-i18next";

import { USER_AVATAR_URL } from "components/Dashboard/Notes/constants";
import {
  getElapsedTime,
  formatDateString,
} from "components/Dashboard/Notes/utils";

const Footer = ({ createdAt }) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between">
      <Tag label={t("common.gettingStarted")} style="secondary" type="solid" />
      <div className="flex space-x-2">
        <Tooltip content={formatDateString(createdAt)} placement="bottom-start">
          <div className="flex items-center space-x-1">
            <Clock color="#87929d" size={16} />
            <Typography className="neeto-ui-text-gray-500" style="body3">
              {t("common.createdAgo", { time: getElapsedTime(createdAt) })}
            </Typography>
          </div>
        </Tooltip>
        <Avatar size="small" user={{ imageUrl: USER_AVATAR_URL }} />
      </div>
    </div>
  );
};

export default Footer;
