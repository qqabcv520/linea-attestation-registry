<h1 align="center">
  <br>
  <a href="https://docs.ver.ax/"><img src="https://raw.githubusercontent.com/Consensys/linea-attestation-registry/dev/doc/verax-logo-circle.png" alt="Verax"></a>
  <br>
  Verax Attestation Registry
  <br>
</h1>

<h4 align="center"><a href="https://docs.ver.ax/">Verax</a> is a shared registry for storing attestations of
public interest on EVM
chains, designed to enhance data discoverability and consumption for dApps across
the network.</h4>

<p align="center">
  <a href="#links">Links</a> •
  <a href="#repository-organisation">Repo Organisation</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#contracts-addresses">Contracts Addresses</a> •
  <a href="#subgraphs-addresses">Subgraphs Addresses</a> •
  <a href="#linking-attestations">Linking Attestations</a> •
  <a href="#off-chain-attestations">Off-chain Attestations</a> •
  <a href="#license">License</a>
</p>

## Links

📚 [Documentation](https://docs.ver.ax/)  
🔍 [Subgraphs](#subgraphs-addresses)  
🧱 [Verax SDK](https://www.npmjs.com/package/@verax-attestation-registry/verax-sdk)  
🌍 [Explorer](https://explorer.ver.ax)

## Repository Organisation

```
.
├── contracts   # All smart contracts needed to run Verax
├── explorer    # Explorer frontend to discover the main objects
├── sdk         # An SDK to easily interact with the contracts and the subgraphs
├── snap        # A MetaMask Snap to leverage the attestions in transactions
├── subgraph    # The subgraph indexing all the data generated by the contracts
├── website     # Verax landing page and
```

Each package has its own README file for more details and installation process description.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (>= 18)

### Global setup

```bash
pnpm i
```

## Contributing

Verax Attestation Registry is a community-lead initiative, with developers from various companies and different
backgrounds. While we are more than happy to get help from multiple sources, we need to rely on strong Ways of Working.

Don't hesitate to check our [Contribution Guide](./CONTRIBUTING.md) before pushing your first code to the repo!

## Contracts Addresses

The main contracts (i.e. the "registries") and the helpers contracts are deployed on:

- Linea Testnet
- Linea Mainnet
- Arbitrum Testnet
- Arbitrum Mainnet
- Arbitrum Nova

Here are the addresses on those networks:

<details>
  <summary>Linea Goerli</summary>

- Router =
  [0x736c78b2f2cBf4F921E8551b2acB6A5Edc9177D5](https://goerli.lineascan.build/address/0x736c78b2f2cBf4F921E8551b2acB6A5Edc9177D5)
- AttestationRegistry =
  [0xC765F28096F6121C2F2b82D35A4346280164428b](https://goerli.lineascan.build/address/0xC765F28096F6121C2F2b82D35A4346280164428b)
- ModuleRegistry =
  [0x1a20b2CFA134686306436D2c9f778D7eC6c43A43](https://goerli.lineascan.build/address/0x1a20b2CFA134686306436D2c9f778D7eC6c43A43)
- PortalRegistry =
  [0x506f88a5Ca8D5F001f2909b029738A40042e42a6](https://goerli.lineascan.build/address/0x506f88a5Ca8D5F001f2909b029738A40042e42a6)
- SchemaRegistry =
  [0xB2c4Da1f8F08A0CA25862509E5431289BE2b598B](https://goerli.lineascan.build/address/0xB2c4Da1f8F08A0CA25862509E5431289BE2b598B)
- AttestationReader =
  [0x65c8294C7aF0f0bDDe51eF92AF850613bb629fc6](https://goerli.lineascan.build/address/0x65c8294C7aF0f0bDDe51eF92AF850613bb629fc6)

</details>

<details>
  <summary>Linea Sepolia</summary>

- Router =
  [0xAfA952790492DDeB474012cEA12ba34B788ab39F](https://sepolia.lineascan.build/address/0xAfA952790492DDeB474012cEA12ba34B788ab39F)
- AttestationRegistry =
  [0xDaf3C3632327343f7df0Baad2dc9144fa4e1001F](https://sepolia.lineascan.build/address/0xDaf3C3632327343f7df0Baad2dc9144fa4e1001F)
- ModuleRegistry =
  [0x3C443B9f0c8ed3A3270De7A4815487BA3223C2Fa](https://sepolia.lineascan.build/address/0x3C443B9f0c8ed3A3270De7A4815487BA3223C2Fa)
- PortalRegistry =
  [0x506f88a5Ca8D5F001f2909b029738A40042e42a6](https://sepolia.lineascan.build/address/0x506f88a5Ca8D5F001f2909b029738A40042e42a6)
- SchemaRegistry =
  [0x90b8542d7288a83EC887229A7C727989C3b56209](https://sepolia.lineascan.build/address/0x90b8542d7288a83EC887229A7C727989C3b56209)

</details>

<details>
  <summary>Linea Mainnet</summary>

- Router =
  [0x4d3a380A03f3a18A5dC44b01119839D8674a552E](https://lineascan.build/address/0x4d3a380A03f3a18A5dC44b01119839D8674a552E)
- AttestationRegistry =
  [0x3de3893aa4Cdea029e84e75223a152FD08315138](https://lineascan.build/address/0x3de3893aa4Cdea029e84e75223a152FD08315138)
- ModuleRegistry =
  [0xf851513A732996F22542226341748f3C9978438f](https://lineascan.build/address/0xf851513A732996F22542226341748f3C9978438f)
- PortalRegistry =
  [0xd5d61e4ECDf6d46A63BfdC262af92544DFc19083](https://lineascan.build/address/0xd5d61e4ECDf6d46A63BfdC262af92544DFc19083)
- SchemaRegistry =
  [0x0f95dCec4c7a93F2637eb13b655F2223ea036B59](https://lineascan.build/address/0x0f95dCec4c7a93F2637eb13b655F2223ea036B59)
- AttestationReader =
  [0x40871e247CF6b8fd8794c9c56bB5c2b8a4FA3B6c](https://lineascan.build/address/0x40871e247CF6b8fd8794c9c56bB5c2b8a4FA3B6c)

</details>

<details>
  <summary>Arbitrum Testnet</summary>

- Router =
  [0x746390cB11913d8F93BDF8a974cFEC724039B3Cc](https://goerli.arbiscan.io/address/0x746390cB11913d8F93BDF8a974cFEC724039B3Cc)
- AttestationRegistry =
  [0xCD839595FdA5A8111d5E03D42d9D9af60ee67B66](https://goerli.arbiscan.io/address/0xCD839595FdA5A8111d5E03D42d9D9af60ee67B66)
- ModuleRegistry =
  [0x58EE79284bE65b217Db408A0991314f9Ae84348A](https://goerli.arbiscan.io/address/0x58EE79284bE65b217Db408A0991314f9Ae84348A)
- PortalRegistry =
  [0x7d6a914C1e33C141CB4a5e0095c1075E5649aFB2](https://goerli.arbiscan.io/address/0x7d6a914C1e33C141CB4a5e0095c1075E5649aFB2)
- SchemaRegistry =
  [0x129043e80e0B4C7da61a622df0912c31D3414AA7](https://goerli.arbiscan.io/address/0x129043e80e0B4C7da61a622df0912c31D3414AA7)
- AttestationReader =
  [0x055E7d488eCACf9f1B0B42659c331C037505D4a1](https://goerli.arbiscan.io/address/0x055E7d488eCACf9f1B0B42659c331C037505D4a1)

</details>

<details>
  <summary>Arbitrum Sepolia</summary>

- Router =
  [0x374B686137eC0DB442a8d833451f8C12cD4B5De4](https://sepolia.arbiscan.io/address/0x374B686137eC0DB442a8d833451f8C12cD4B5De4)
- AttestationRegistry =
  [0xee5e23492bf49C1F4CF0676b3bF49d78A6dD61c5](https://sepolia.arbiscan.io/address/0xee5e23492bf49C1F4CF0676b3bF49d78A6dD61c5)
- ModuleRegistry =
  [0xEC572277d4E87a64DcfA774ED219Dd4E69E4BDc6](https://sepolia.arbiscan.io/address/0xEC572277d4E87a64DcfA774ED219Dd4E69E4BDc6)
- PortalRegistry =
  [0x1ceb52584B6C45C7049dc7fDC476bC138E4beaDE](https://sepolia.arbiscan.io/address/0x1ceb52584B6C45C7049dc7fDC476bC138E4beaDE)
- SchemaRegistry =
  [0x025531b655D9EE335B8E6cc4C118b313f26ACc8F](https://sepolia.arbiscan.io/address/0x025531b655D9EE335B8E6cc4C118b313f26ACc8F)
- AttestationReader =
  [0xBdC45324AB9A7e82Ae15324a3d8352b513Ee2788](https://sepolia.arbiscan.io/address/0xBdC45324AB9A7e82Ae15324a3d8352b513Ee2788)

</details>

<details>
  <summary>Arbitrum Mainnet</summary>

- Router =
  [0xa77196867bB03D04786EF636cDdD82f37A1248a9](https://arbiscan.io/address/0xa77196867bB03D04786EF636cDdD82f37A1248a9)
- AttestationRegistry =
  [0x335E9719e8eFE2a19A92E07BC4836160fC31cd7C](https://arbiscan.io/address/0x335E9719e8eFE2a19A92E07BC4836160fC31cd7C)
- ModuleRegistry =
  [0x3acF4daAB6cbc01546Dd4a96c9665B398d48A4ba](https://arbiscan.io/address/0x3acF4daAB6cbc01546Dd4a96c9665B398d48A4ba)
- PortalRegistry =
  [0x4042D0A54f997EE3a1b0F51e4813654199BFd8bD](https://arbiscan.io/address/0x4042D0A54f997EE3a1b0F51e4813654199BFd8bD)
- SchemaRegistry =
  [0xE96072F46EA0e42e538762dDc0aFa4ED8AE6Ec27](https://arbiscan.io/address/0xE96072F46EA0e42e538762dDc0aFa4ED8AE6Ec27)
- AttestationReader =
  [0x324C060A26444c3fB9B93e03d31e8cfF4b1715C1](https://arbiscan.io/address/0x324C060A26444c3fB9B93e03d31e8cfF4b1715C1)

</details>

<details>
  <summary>Arbitrum Nova</summary>

- Router =
  [0xC81B5149D9Cd49195D00EFb16FED89f3Ba78E03B](https://nova.arbiscan.io/address/0xc81b5149d9cd49195d00efb16fed89f3ba78e03b)
- AttestationRegistry =
  [0xB9Cf26ED827Eb4A7079e8dedB0ea93D932A2e3e8](https://nova.arbiscan.io/address/0xB9Cf26ED827Eb4A7079e8dedB0ea93D932A2e3e8)
- ModuleRegistry =
  [0x46F7471cd2C1d69Cb5e62c1a34F3fCAf81304Fc3](https://nova.arbiscan.io/address/0x46F7471cd2C1d69Cb5e62c1a34F3fCAf81304Fc3)
- PortalRegistry =
  [0xADc8da3d3388dEe74C7134fC4AEe1cF866Da5d38](https://nova.arbiscan.io/address/0xADc8da3d3388dEe74C7134fC4AEe1cF866Da5d38)
- SchemaRegistry =
  [0x9b5BABcEbf0E8550da1eCDe5674783179B6557FB](https://nova.arbiscan.io/address/0x9b5BABcEbf0E8550da1eCDe5674783179B6557FB)
- AttestationReader =
  [0x7A22D0Fba31a4d5b5E4F5263379B4dbf3707b48c](https://nova.arbiscan.io/address/0x7A22D0Fba31a4d5b5E4F5263379B4dbf3707b48c)

</details>
<details>
  <summary>Arbitrum Nova</summary>

- Router =
  [0xC81B5149D9Cd49195D00EFb16FED89f3Ba78E03B](https://nova.arbiscan.io/address/0xc81b5149d9cd49195d00efb16fed89f3ba78e03b)
- AttestationRegistry =
  [0xB9Cf26ED827Eb4A7079e8dedB0ea93D932A2e3e8](https://nova.arbiscan.io/address/0xB9Cf26ED827Eb4A7079e8dedB0ea93D932A2e3e8)
- ModuleRegistry =
  [0x46F7471cd2C1d69Cb5e62c1a34F3fCAf81304Fc3](https://nova.arbiscan.io/address/0x46F7471cd2C1d69Cb5e62c1a34F3fCAf81304Fc3)
- PortalRegistry =
  [0xADc8da3d3388dEe74C7134fC4AEe1cF866Da5d38](https://nova.arbiscan.io/address/0xADc8da3d3388dEe74C7134fC4AEe1cF866Da5d38)
- SchemaRegistry =
  [0x9b5BABcEbf0E8550da1eCDe5674783179B6557FB](https://nova.arbiscan.io/address/0x9b5BABcEbf0E8550da1eCDe5674783179B6557FB)
- AttestationReader =
  [0x7A22D0Fba31a4d5b5E4F5263379B4dbf3707b48c](https://nova.arbiscan.io/address/0x7A22D0Fba31a4d5b5E4F5263379B4dbf3707b48c)

</details>

<details>
  <summary>Base Sepolia</summary>

- Router =
  [0xE235826514945186227918325D3E5b5f873861A6](https://sepolia.basescan.org/address/0xE235826514945186227918325D3E5b5f873861A6)
- AttestationRegistry =
  [0x374B686137eC0DB442a8d833451f8C12cD4B5De4](https://sepolia.basescan.org/address/0x374B686137eC0DB442a8d833451f8C12cD4B5De4)
- ModuleRegistry =
  [0xEC572277d4E87a64DcfA774ED219Dd4E69E4BDc6](https://sepolia.basescan.org/address/0xEC572277d4E87a64DcfA774ED219Dd4E69E4BDc6)
- PortalRegistry =
  [0x025531b655D9EE335B8E6cc4C118b313f26ACc8F](https://sepolia.basescan.org/address/0x025531b655D9EE335B8E6cc4C118b313f26ACc8F)
- SchemaRegistry =
  [0x66D2F3DCc970343b83a6263E20832184fa71CFe7](https://sepolia.basescan.org/address/0x66D2F3DCc970343b83a6263E20832184fa71CFe7)

</details>

## Subgraphs Addresses

- [Linea Goerli](https://api.goldsky.com/api/public/project_clqghnrbp9nx201wtgylv8748/subgraphs/verax/subgraph-testnet/gn)
- [Linea Sepolia](https://api.studio.thegraph.com/query/67946/verax-v1-linea-sepolia/v0.0.1)
- [Linea Mainnet](https://graph-query.linea.build/subgraphs/name/Consensys/linea-attestation-registry/graphql)
- [Arbitrum Goerli](https://api.thegraph.com/subgraphs/name/cliqueofficial/verax-arbitrum-goerli)
- [Arbitrum Mainnet](https://api.thegraph.com/subgraphs/name/cliqueofficial/verax-arbitrum)
- [Arbitrum Nova](https://api.goldsky.com/api/public/project_clr9aj9alwgwg01q7ci1rh781/subgraphs/verax-arbitrum-nova/0.0.5/gn)
- [Base Sepolia](https://api.studio.thegraph.com/query/67946/verax-v1-base-sepolia/v0.0.1)

## License

[MIT](./LICENSE)
