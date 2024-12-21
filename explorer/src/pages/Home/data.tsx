import Trusta from "@/assets/issuers/trusta.svg?react";

import { IIssuer } from "./interface";

export const issuersData: IIssuer[] = [
  {
    name: "Trusta",
    logo: Trusta,
    keywords: ["reputation", "wallet score"],
    description:
      "Connect your wallet to Hashkey Chain to view and generate your Trusta's Sybil Score attestation. Your humanity is verified based only on your on-chain data, without needing approval from a central authority, and without any request for your personal info.",
    CTALink:
      "https://dev.trustgo.trustalabs.ai/etrusta/0x085ed975a8b6b860de3c2b871da60a3f9f48a5b8/lineaverax/h?f=linea&chainId=133",
    CTATitle: "Go To Trusta Labs",
    address: "0x7af61082c78798a93566d4759e0a9bb07b041706",
    attestationDefinitions: [
      {
        name: "Reputation attestation",
        logo: Trusta,
        description:
          "Trusta's Sybil Score attestation provides a simple, permissionless, and privacy-preserving way to verify your humanity based on machine-learning algorithm",
        portal: "0x652bd4d1739bcfb5476f818496d3600f09f71d7c",
        schema: "0x105db2b6a3e9d79739bca3e1d9ddeec6bd68667cf1de8d4248020b91a9a80e46",
        url: "https://dev.trustgo.trustalabs.ai/etrusta/0x085ed975a8b6b860de3c2b871da60a3f9f48a5b8/lineaverax/m?chainId=324&s=EPR0QD9W52I8",
        chainId: "0x85",
      },
      {
        name: "Humanity attestation",
        logo: Trusta,
        description:
          "Trusta's MEDIA Score attestation provides a simple, quantifiable and privacy-preserving way to evaluate your reputation based on your on-chain activity",
        portal: "0x652bd4d1739bcfb5476f818496d3600f09f71d7c",
        schema: "0xd391c9ef66e78d211c68ab1ec0c196bb2e001201c2d26b34cb760d486ad4d576",
        url: "https://dev.trustgo.trustalabs.ai/etrusta/0x085ed975a8b6b860de3c2b871da60a3f9f48a5b8/lineaverax/h?chainId=324&s=EPR0QD9W52I8",
        chainId: "0x85",
      },
    ],
  },
];
