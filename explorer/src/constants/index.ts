import { hashkeyChainTestnet } from "@/config";

export const EMPTY_STRING = "";
export const EMPTY_0X_STRING = "0x";
export const SPACE_STRING = " ";
export const COMMA_STRING = ",";
export const DASH = "-";
export const ZERO_STRING = "0";
export const TEN = 10;
export const ZERO = 0;
export const ITEMS_PER_PAGE_DEFAULT = 10;
export const ITEMS_SEARCHED_DEFAULT = 100;
export const CURRENT_PAGE_DEFAULT = 1;
export const THOUSAND = 1e3;
export const BILLION = 1e9;

export const links: Record<number, { trx?: string; address: string }> = {
  [hashkeyChainTestnet.id]: {
    address: "https://hashkeychain-testnet-explorer.alt.technology/",
  },
};

export const veraxLink = "https://ver.ax";
