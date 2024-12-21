import { Conf, SDKMode } from "@verax-attestation-registry/verax-sdk";
import { getDefaultConfig } from "connectkit";
import { Chain, createConfig, mainnet } from "wagmi";

import veraxColoredIcon from "@/assets/logo/verax-colored-icon.svg";
import { INetwork } from "@/interfaces/config";

const hashkeyChainTestnet = {
  id: 133,
  name: "Hashkey chain Testnet",
  nativeCurrency: { name: "HashKey EcoPoints", symbol: "HSK", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://hashkeychain-testnet.alt.technology"],
    },
    public: {
      http: ["https://hashkeychain-testnet.alt.technology"],
    },
  },
  testnet: true,
  network: "hashkey-chain-testnet",
} as const satisfies Chain;

const HASHKEY_TESTNET_FRONTEND: Conf = {
  chain: hashkeyChainTestnet,
  mode: SDKMode.FRONTEND,
  subgraphUrl: "http://47.236.19.172:8000/subgraphs/name/trustalabs/verax_v2",
  portalRegistryAddress: "0x6ad68fC3A8276CE5FAD8D1545AAc19659CA292a4",
  moduleRegistryAddress: "0x32C10e8f48a0dDb11dADD752AFAa01012923433F",
  schemaRegistryAddress: "0xAD60b34E07261B5d27C49fA5835A5c0379763e1C",
  attestationRegistryAddress: "0x0638B972f39847B4f67c327A6D51B58341c5e44F",
};

const chains: INetwork[] = [
  {
    name: "Hashkey chain Testnet",
    chain: hashkeyChainTestnet,
    veraxEnv: HASHKEY_TESTNET_FRONTEND,
    img: (
      <img
        style={{ width: "24px", height: "24px" }}
        src="https://hashkeychain-testnet-explorer.alt.technology/assets/configs/network_icon.png"
      />
    ),
    imgDark: (
      <img
        style={{ width: "24px", height: "24px" }}
        src="https://hashkeychain-testnet-explorer.alt.technology/assets/configs/network_icon.png"
      />
    ),
    network: "linea",
    prefix: "0x0000",
  },
];

const config = createConfig(
  getDefaultConfig({
    autoConnect: true,
    // infuraId: import.meta.env.VITE_INFURA_API_KEY,
    walletConnectProjectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || "",
    chains: [...chains.map((el) => el.chain), mainnet],
    appName: "Verax | Explorer",
    appIcon: veraxColoredIcon,
  }),
);

const defaultChain = chains[0];

export { hashkeyChainTestnet, chains, config, defaultChain };
