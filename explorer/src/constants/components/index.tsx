import { t } from "i18next";

import TwitterXIcon from "@/assets/socials/twitter-x.svg?react";
import { Info } from "@/components/NavigationList/components/Info";
import { IInfoListItem, NavigationProps, SearchElementProps } from "@/interfaces/components";
import { APP_ROUTES } from "@/routes/constants";

export const DEFAULT_ROUTES: Array<NavigationProps> = [
  {
    name: t("common.routes.attestations"),
    route: APP_ROUTES.ATTESTATIONS,
  },
  {
    name: t("common.routes.schemas"),
    route: APP_ROUTES.SCHEMAS,
  },
  {
    name: t("common.routes.modules"),
    route: APP_ROUTES.MODULES,
  },
  {
    name: t("common.routes.info.title"),
    submenu: <Info />,
  },
];

export const INFO_LIST: IInfoListItem[] = [
  {
    title: t("common.routes.info.about"),
    logo: () => (
      <img
        style={{ width: 20, height: 12, filter: "grayscale(100%)" }}
        src={
          "https://trustgo.trustalabs.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1%402x.1efe7907.webp&w=64&q=75"
        }
      ></img>
    ),
    url: "https://trustalabs.ai/",
  },
  {
    title: t("common.routes.info.twitter"),
    logo: TwitterXIcon,
    url: "https://x.com/TrustaLabs",
  },
];

export const DEFAULT_SEARCH_ELEMENTS: SearchElementProps = {
  attestation: { count: 0, loaded: false },
  schema: { count: 0, loaded: false },
  module: { count: 0, loaded: false },
  //todo add SearchPortal
  portal: { count: 0, loaded: true },
};
