import { t } from "i18next";
import { Notes, Settings, UserCircle } from "neetoicons";

import { PLURAL } from "constants";

export const APP_NAME = "Wheel";

export const PASSWORD_PATH = "/my/password/edit";
export const PROFILE_PATH = "/my/profile";
export const LOGOUT_PATH = "/logout";

export const SIDENAV_LINKS = [
  {
    label: t("common.note", PLURAL),
    to: "/notes",
    icon: Notes,
  },
  {
    label: t("common.contact", PLURAL),
    to: "/contacts",
    icon: UserCircle,
  },
  {
    label: t("common.settings", PLURAL),
    to: "/settings",
    icon: Settings,
  },
];
