import Trusta from "@/assets/issuers/trusta.svg?react";

import { IIssuer } from "./interface";

export const issuersData: IIssuer[] = [
  {
    name: "Trusta",
    logo: Trusta,
    keywords: ["reputation", "wallet score"],
    description:
      "Connect your wallet to LINEA to view and generate your Trusta's Sybil Score attestation. Your humanity is verified based only on your on-chain data, without needing approval from a central authority, and without any request for your personal info.",
    CTALink:
      "https://trustgo.trustalabs.ai/etrusta/0x085ed975a8b6b860de3c2b871da60a3f9f48a5b8/lineaverax/h?f=linea&chainId=324",
    CTATitle: "Go To Trusta Labs",
    address: "0x9e728394E55e6535BF66f913e911Ae1f572D8db0",
    attestationDefinitions: [
      {
        name: "Reputation attestation",
        logo: Trusta,
        description:
          "Trusta's Sybil Score attestation provides a simple, permissionless, and privacy-preserving way to verify your humanity based on machine-learning algorithm",
        portal: "0xb86b3e16b6b960fd822849fd4b4861d73805879b",
        schema: "0x63c8925414d0bd8e4b943b49867adef6fabf8fb66d9ecefacfa90272623edf9e",
        url: "https://trustgo.trustalabs.ai/etrusta/0x085ed975a8b6b860de3c2b871da60a3f9f48a5b8/lineaverax/m?chainId=324&s=EPR0QD9W52I8",
        chainId: "0xe708",
      },
      {
        name: "Humanity attestation",
        logo: Trusta,
        description:
          "Trusta's MEDIA Score attestation provides a simple, quantifiable and privacy-preserving way to evaluate your reputation based on your on-chain activity",
        portal: "0xb86b3e16b6b960fd822849fd4b4861d73805879b",
        schema: "0x105db2b6a3e9d79739bca3e1d9ddeec6bd68667cf1de8d4248020b91a9a80e46",
        url: "https://trustgo.trustalabs.ai/etrusta/0x085ed975a8b6b860de3c2b871da60a3f9f48a5b8/lineaverax/h?chainId=324&s=EPR0QD9W52I8",
        chainId: "0xe708",
      },
    ],
  },
];
