<template>
  <section class="tm-section section pb0">
    <div class="tm-section-container tm-container">
      <div class="schedule">
        <div class="tm-grid-base rewards mb-6">
          <div
            v-for="category in prize"
            :key="category.title"
            class="prize-item"
            @click="open(category)"
          >
            <div>
              <icon-challenge />
              <div class="mt-4 tm-title tm-lh-titlle tm-rf2 tm-bold">
                {{ category.title }}
              </div>
            </div>
            <div class="mt-8">
              <div class="tm-overline tm-lh-copy tm-rf-1 tm-muted">Reward</div>
              <div class="tm-bold tm-rf1 tm-title tm-lh-title">
                {{ category.prize }}
              </div>
            </div>
          </div>
        </div>
        <tm-collapse accordion>
          <div v-for="category in categories" :key="category.title">
            <tm-collapse-item :icon-top="true">
              <div slot="header">
                <div class="event-header">
                  <div class="tm-grid-base">
                    <div class="title tm-title tm-lh-title tm-rf3 tm-bold">
                      {{ category.title }}
                    </div>
                  </div>
                  <div class="tm-grid-base">
                    <div class="mt-4 info tm-muted">
                      {{ category.info }}
                    </div>
                    <div
                      class="mt-4 prize tm-title tm-lh-title tm-rf1 tm-medium"
                    >
                      {{ category.prize }}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p class="tm-muted" v-html="category.details" />
                <div
                  v-if="category.challenges"
                  class="challenges mt-8 tm-grid-base"
                >
                  <div
                    v-for="(challenge, count) in category.challenges"
                    :key="`${category.title}_${count}`"
                    class="challenge"
                  >
                    <div>
                      <icon-challenge class="mb-5" />
                      <div
                        v-if="challenge.type"
                        class="
                          tm-overline tm-rf-1 tm-lh-title tm-medium tm-muted
                        "
                      >
                        {{ challenge.type }}
                      </div>
                      <div class="mb-5 tm-title tm-lh-title tm-bold tm-rf2">
                        {{ challenge.title }}
                      </div>
                      <div class="tm-lh-copy tm-rf-1 tm-normal tm-muted">
                        <p
                          v-if="challenge.preview"
                          v-html="challenge.preview"
                        />
                      </div>
                      <div v-if="challenge.prizes" class="mt-9 prizes-list">
                        <div
                          v-for="(prize, key) in challenge.prizes"
                          :key="`${challenge.type}_${key}`"
                          class="prizes-list__item"
                        >
                          <div
                            class="
                              tm-overline tm-rf0 tm-lh-title tm-medium tm-muted
                            "
                          >
                            {{ key }}
                          </div>
                          <div class="tm-title tm-lh-title tm-rf2">
                            {{ prize }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-8">
                      <tm-button
                        variant="text"
                        background-color="transparent"
                        color="var(--white)"
                        @click.native="open(challenge)"
                      >
                        More details <span class="icon__right">&rarr;</span>
                      </tm-button>
                    </div>
                  </div>
                </div>
              </div>
            </tm-collapse-item>
          </div>
        </tm-collapse>
      </div>
    </div>
    <tm-modal
      v-if="currentItem"
      :close-modal="closeModal"
      v-bind="{
        visible,
        side: 'center',
        boxShadow: '0 10px 25px 0 rgba(0,0,0,.15)',
      }"
    >
      <div class="modal">
        <icon-challenge class="mb-6 icon-challenge" />
        <div
          v-if="currentItem.type"
          class="tm-overline tm-rf1 tm-lh-title tm-medium tm-muted"
        >
          {{ currentItem.type }}
        </div>
        <div class="mb-6 tm-title tm-lh-title tm-bold tm-rf4">
          {{ currentItem.title }}
        </div>
        <div
          v-if="currentItem.details"
          class="mb-6 tm-overline tm-rf0 tm-lh-title tm-medium tm-muted"
        >
          {{ currentItem.details }}
        </div>
        <div class="tm-lh-copy tm-rf1 tm-normal tm-muted">
          <div v-if="currentItem.info">
            <p v-for="info in currentItem.info" :key="info" v-html="info" />
          </div>
          <div v-if="currentItem.moreInfo">
            <p v-for="info in currentItem.moreInfo" :key="info" v-html="info" />
          </div>
          <ul v-if="currentItem.challenge" class="mt-5">
            <li
              v-for="info in currentItem.challenge"
              :key="info"
              v-html="info"
            />
          </ul>
        </div>
        <div v-if="currentItem.context" class="mt-9">
          <div class="tm-overline tm-rf1 tm-lhtitle tm-medium tm-muted">
            Context
          </div>
          <div class="mt-5 tm-lh-copy tm-rf1 tm-normal tm-muted">
            <div v-if="currentItem.context">
              <p
                v-for="info in currentItem.context"
                :key="info"
                v-html="info"
              />
            </div>
          </div>
        </div>
        <div v-if="currentItem.prizes" class="mt-9 prizes-list">
          <div
            v-for="(prize, key) in currentItem.prizes"
            :key="`${currentItem.type}_${key}`"
            class="prizes-list__item"
          >
            <div class="tm-overline tm-rf0 tm-lh-title tm-medium tm-muted">
              {{ key }}
            </div>
            <div class="tm-title tm-lh-title tm-rf2">
              {{ prize }}
            </div>
          </div>
        </div>
        <div v-if="currentItem.prize" class="mt-9">
          <div class="tm-overline tm-rf0 tm-lh-title tm-medium tm-muted">
            reward
          </div>
          <div class="tm-title tm-lh-title tm-rf2 tm-bold">
            {{ currentItem.prize }}
          </div>
        </div>
        <div
          v-if="currentItem.requirements || currentItem.requirementsInfo"
          class="mt-9"
        >
          <div class="tm-overline tm-rf1 tm-lhtitle tm-medium tm-muted">
            Requirements
          </div>
          <div class="mt-5 tm-lh-copy tm-rf1 tm-normal tm-muted">
            <p v-if="currentItem.requirementsInfo">
              {{ currentItem.requirementsInfo }}
            </p>
            <ul v-if="currentItem.requirements">
              <li
                v-for="info in currentItem.requirements"
                :key="info"
                v-html="info"
              />
            </ul>
          </div>
        </div>
        <div v-if="currentItem.judgingCriteria" class="mt-9">
          <div class="tm-overline tm-rf1 tm-lhtitle tm-medium tm-muted">
            Judging Criteria
          </div>
          <div class="mt-5 tm-lh-copy tm-rf1 tm-normal tm-muted">
            <ul v-if="currentItem.judgingCriteria">
              <li
                v-for="info in currentItem.judgingCriteria"
                :key="info"
                v-html="info"
              />
            </ul>
          </div>
        </div>
        <div v-if="currentItem.bonusPoints" class="mt-9">
          <div class="tm-overline tm-rf1 tm-lhtitle tm-medium tm-muted">
            Bonus Points
          </div>
          <div class="mt-5 tm-lh-copy tm-rf1 tm-normal tm-muted">
            <ul v-if="currentItem.bonusPoints">
              <li
                v-for="info in currentItem.bonusPoints"
                :key="info"
                v-html="info"
              />
            </ul>
          </div>
        </div>
        <div v-if="currentItem.stage" class="mt-9">
          <div class="tm-overline tm-rf1 tm-lhtitle tm-medium tm-muted">
            Stage of development
          </div>
          <div class="mt-5 tm-lh-copy tm-rf1 tm-normal tm-muted">
            <ul v-if="currentItem.stage">
              <li v-for="info in currentItem.stage" :key="info" v-html="info" />
            </ul>
          </div>
        </div>
        <div v-if="currentItem.testnet" class="mt-9">
          <div class="tm-overline tm-rf1 tm-lhtitle tm-medium tm-muted">
            Testnet resources
          </div>
          <div class="mt-5 tm-lh-copy tm-rf1 tm-normal tm-muted">
            <ul v-if="currentItem.testnet" class="links">
              <li
                v-for="info in currentItem.testnet"
                :key="info.name"
                class="links__item tm-rf0"
              >
                <span v-if="info.name" class="links__label">
                  {{ info.name }}
                </span>
                <tm-link
                  v-if="info.link"
                  :href="info.link"
                  class="tm-link-external"
                >
                  {{ info.shortLink }}
                </tm-link>
                <div v-else class="tm-title" v-html="info.content" />
              </li>
            </ul>
          </div>
        </div>
        <div v-if="currentItem.sources" class="mt-9">
          <div class="tm-overline tm-rf1 tm-lhtitle tm-medium tm-muted">
            Resources
          </div>
          <div class="mt-5 tm-lh-copy tm-rf1 tm-normal tm-muted">
            <ul v-if="currentItem.sources" class="links">
              <li
                v-for="(info, key) in currentItem.sources"
                :key="info"
                class="links__item _sources tm-rf0"
              >
                <a
                  v-if="key === 'email'"
                  :href="`mailto:${info}`"
                  class="tm-link tm-link-external"
                >
                  {{ info }}
                </a>
                <tm-link v-else :href="info" class="tm-link-external">
                  {{ key }}
                </tm-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-9">
          <tm-button
            class="cta-button"
            size="l"
            to-link="external"
            href="https://cosmos-hackatom-vi.devpost.com/"
          >
            Register Now <span class="icon__external">&nearr;</span>
          </tm-button>
        </div>
      </div>
    </tm-modal>
  </section>
</template>

<script>
import IconChallenge from '~/components/icons/IconChallenge.vue'

export default {
  components: {
    IconChallenge,
  },
  data() {
    return {
      visible: false,
      currentItem: null,
      prize: [
        {
          title: 'Grand Prize',
          prize: '$25K',
          details: 'Combine and build at least two challenges into one project',
          info: [
            `The Grand Prize will be awarded to the team or individual who successfully builds an individual project by combining at least two different challenges. The participant(s), going the extra mile, will have the ability to submit the project for the Grand Prize award, in addition to submitting it to the challenge of their choice.`,
            `The most creative and impressive project, that complies with the Judging criteria, will be selected by the Board of Judges to receive the additional Grand Prize reward of $25k.`,
          ],
        },
        {
          title: 'Community Award Prize',
          prize: '$10K',
          details: '',
          info: [
            'Community plays an important role in our Cosmos ecosystem. That is why we want to give everyone a chance to review the submitted projects and vote for their favorite Cosmos one. Every member that has an account on DevPost will have the ability to cast one vote for one project. The project with the most votes collected from the time the voting starts until it ends, will win this prize category.',
          ],
        },
      ],
      categories: [
        {
          title: 'Ethereum on Cosmos',
          info: 'Ethereum projects on Cosmos SDK',
          prize: 'Total Prize pool of $100K',
          details:
            'On blockchains, the goal of smart contracts is to simplify transactions between both anonymous and identified parties. Smart contracts are executed when predetermined conditions are met, such as the fulfillment of an agreement or completion of a task. Smart contracts are typically used to automate the execution of an agreement so that all participants can be certain of the outcome, without depending on any intermediary involvement. Smart contracts that currently live on the Ethereum Virtual Machine (EVM) are written in Solidity. Developers will explore among others rewriting an existing Solidity project as a Cosmos SDK blockchain that automates transactions on the blockchain or any other dedicated solution that could bridge the two ecosystems.',
          challenges: [
            {
              type: 'Bitsong',
              title: 'Bitsong Challenge',
              preview: `Bitsong's HackAtom VI challenge proposes the migration of smart contracts on the popular OpenSea NFT marketplace to Cosmos SDK.`,
              info: [
                `BitSong is a multifunctional blockchain-based ecosystem built to empower the music industry. It unites artists, fans, and distributors in an environment where music, merchandise, and fan loyalty are assets of value. BitSong’s decentralized ecosystem of services provides the global music community with a trustless marketplace for music streaming, Fan Tokens, and NFTs, powered by the BTSG token.`,
                `Bitsong's HackAtom VI challenge proposes the migration of smart contracts on the popular OpenSea (<a href='https://opensea.io/' target='_blank' rel='noopener noreferrer' class='tm-link'>https://opensea.io/</a>) NFT marketplace to Cosmos SDK. The new Module should be developed based on the NFT module released by BitSong, which also contains the introduction of perpetual royalties (the standard for royalties splitting). Specifications can be found <a href='https://github.com/bitsongofficial/chainmodules/tree/master/x/auction/spec' target='_blank' rel='noopener noreferrer' class='tm-link'>here</a>.`,
                `The BitSong Auction Module also has to be taken into consideration for the development. The Auction module is needed for users to buy and sell their NFTs through a marketplace and its specifications can be found <a href='https://opensea.io/' target='_blank' rel='noopener noreferrer' class='tm-link'>here</a>.`,
              ],
              requirements: [
                'The module development must be done using Golang.',
                'Participants must follow the <a href="https://docs.cosmos.network/master/building-modules/" target="_blank" rel="noopener noreferrer" class="tm-link">basic specs</a> as per every Cosmos SDK module development.',
                'The module is expected to be completed during the HackAtom, otherwise at least an MVP with integrated tests and CLI (even without UI) is required.',
                'The module has to be importable to all ecosystem chains.',
                "The NFTs Auction must respect the royalties system present in BitSong's <a href='https://github.com/bitsongofficial/chainmodules/tree/master/x/nft/spec' target='_blank' rel='noopener noreferrer' class='tm-link'>base module</a>.",
              ],
              sources: {
                Github: 'https://github.com/ProjectOpenSea',
                Docs: 'https://docs.opensea.io/',
                "BitSong's Developer Portal": 'https://btsg.dev/ ',
              },
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
            },
            {
              type: 'Evmos',
              title: 'Evmos Challenge',
              preview: `Evmos aims to be the EVM Hub of Cosmos, making it easy for smart contracts to deploy and communicate within the Cosmos ecosystem.`,
              info: [
                'Evmos is an application-agnostic chain that will be interoperable with the Ethereum mainnet, EVM-compatible environments, and other BFT chains via IBC, making it easy for users and developers to interact seamlessly between chains. Evmos aims to be the EVM Hub of Cosmos, making it easy for smart contracts to deploy and communicate within the Cosmos ecosystem.',
              ],
              challenge: [
                `<p>To jumpstart the growth of the Evmos ecosystem, we have created a helpful list of topics that could be eligible for the Evmos prizes during HackAtom VI:</p>,
                  <ul>
                  <li><b>NFT</b>: Build an NFT smart contract project, Marketplace (dApp), or other supportive tooling (e.g. NFT fractionalization, rentals, etc.) to support the burgeoning NFT ecosystem on Evmos. Judges will be looking for projects with a usable UI and broad support for multiple Ethereum NFT standards.</li>
                  <li><b>Wallets</b>: Build an EVM+Cosmos+IBC-compatible wallet that integrates Evmos’ JSON-RPC and gRPC services and is able to display ERC20 tokens, Cosmos coins, and IBC vouchers. Bonus points: Multisig support, WalletConnect V2 support.</li>
                  <li><b>Dashboards and Visualizations</b>: Build a block explorer for displaying Cosmos data alongside EVM data (transactions, blocks, etc.). Judges will be looking for projects that push the envelope on “seamless cross-chain UX."</li>
                  <li><b>EVM DeFi</b>: Port an existing open-source DeFi smart contract project or build and deploy your own DeFi smart contract application onto Evmos. As with the NFT challenge, your smart contracts must have a usable UI. Support integrations with as many other projects as possible for maximum consideration.</li>
                  <li><b>IBC-EVM interoperability</b>: Build an IBC SDK application module to be deployed on Evmos, that is able to handle EVM or smart contract interoperability between two connecting chains that integrate the Ethermint library’s EVM module. The module should be able to process cross-chain contact calls.</li>
                  <li><b>Cross-chain (Ethereum/EVM) challenge</b>: Port or build an EVM bridge and deploy it on Evmos so that Ethereum assets (ERC20, ERC721, ERC1155) can be bridged to the Evmos EVM and vice versa.</li>
                </ul>`,
              ],
              requirements: [
                'Solidity or other smart contract languages (Vyper, Fe, etc.)',
                'Ethereum tools (Hardhat, Truffle, Remix, etc) and libraries (web3, go-ethereum, ethersjs, etc.)',
                'Evmos JSON-RPC and gRPC services',
              ],
              stage: [
                'Evmos is currently in testnet with additional functionality rolling out over time and leveraging the upcoming features of the testnet and incentivized testnet will have an added bonus.',
                'The applications submitted must have had the significant majority of its development done after the date of the initial Evmos Arsia Mons testnet launch (Oct 12) as verified by Github commits. If you used a previous project as a starting off point, you must detail which components you developed during the hackathon (Nov 11-Dec 8).',
                'Projects must be deployed on a <b>live</b> Evmos testnet (Incentivized testnet or Arsia Mons) by the end of the hackathon on December 8, 2021.',
                `<p>The projects <b>MUST</b> follow the following checklist to be eligible for the prizes:</p>
                <ul>
                  <li>Open source, deployed on Github or Gitlab</li>
                  <li>Have a working UI (if applicable)</li>
                  <li>Have a working functionality</li>
                  <li>Clear documentation in the form of a README.md, for how to interact and run the project</li>
                </ul>`,
              ],
              testnet: [
                {
                  name: 'Testnet',
                  link: 'https://evmos.dev/testnet/join.html',
                  shortLink: 'evmos.dev/testnet/join',
                },
              ],
              sources: {
                'Developer Docs': 'http://evmos.dev',
                Discord: 'http://discord.gg/trje9XuAmy',
                Telegram: 'https://t.me/EvmosOrg',
                Medium: 'https://evmos.blog/',
              },
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
            },
          ],
        },
        {
          title: 'Starport',
          info: 'Starport improvements',
          prize: 'Total Prize pool of $200K',
          details:
            'Starport is the all-in-one platform to build, launch, and maintain any crypto application on a sovereign and secured blockchain. Starport CLI is a powerful developer tool for scaffolding blockchains, generating code, running a node in development, and much more. Builders will need to implement new scaffolding functionality or improve the functionality, reliability, or flexibility of Starport CLI or introduce new functionality that is useful for a large number of developers.',
          challenges: [
            {
              type: 'Starport',
              title: 'Code Scaffolding Challenge',
              preview: `Currently, Starport depends on string placeholders being present in modules’ files. Placeholders work, but if another solution (likely, based on code analysis) is found, this could improve Starport's reliability even further.`,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                `One of the core features of Starport is code scaffolding. Starport can scaffold a new blockchain from scratch, create new modules, add messages, queries, packets to modules, and much more. This functionality allows developers to prototype advanced modules with just a few commands. Currently, Starport depends on string placeholders being present in modules’ files. Placeholders work, but if another solution (likely, based on code analysis) is found, this could improve Starport's reliability even further.`,
              ],
              requirements: [
                `Reengineer Starport’s code scaffolding to avoid relying on placeholders as much as possible`,
                `There should be no placeholders in proto files`,
                `The goal is to make Starport more resilient and less fragile`,
                `Solution should gracefully handle if required files are not found`,
                `Use Starport's list as an example command to showcase functionality`,
                `Try keeping backwards compatibility with Starport v0.18`,
              ],
              sources: {
                Github: 'https://github.com/tendermint/starport',
                Docs: 'https://docs.starport.com/',
                Starport: 'https://starport.com ',
              },
            },
            {
              type: 'Starport',
              title: 'Local Testnet Challenge',
              preview: `Starport chain serve is the most convenient way to start a blockchain node for development purposes. Currently, this command sets up a single node testnet with automatic code reloading. Enhance this functionality of Starport, for example, to support multi-node local testnets.`,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                `Starport chain serve is the most convenient way to start a blockchain node for development purposes. Currently, this command sets up a single node testnet with automatic code reloading. Enhance this functionality of Starport, for example, to support multi-node local testnets.`,
              ],
              requirements: [
                `The enhanced version of serve should support existing features of Starport (for instance, code reloading)`,
                `Multi-node testnet is just an example, find other creative ways to improve developer experience`,
                `Command shouldn’t require flags to run, but you can use the config file to customize its behavior`,
                `Try keeping backwards compatibility with Starport v0.18`,
              ],
              sources: {
                Github: 'https://github.com/tendermint/starport',
                Docs: 'https://docs.starport.com/',
                Starport: 'https://starport.com ',
              },
            },
            {
              type: 'Starport',
              title: 'Build Process and Configuration Challenge',
              preview: `Starport uses an advanced build process to compile the source code of a chain into a binary. It’s both sophisticated and easy to use, but there is always room for improvement. To win this challenge, enhance the build process so that it’s more flexible, yet can be used even by beginner developers.`,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                `Starport uses an advanced build process to compile the source code of a chain into a binary. It’s both sophisticated and easy to use, but there is always room for improvement. To win this challenge, enhance the build process so that it’s more flexible, yet can be used even by beginner developers.`,
              ],
              requirements: [
                `Do not rely on Makefiles. Makefiles are very flexible, but this flexibility makes it harder for us to control the build process (for example, we can’t know the name of the binary produced by make). Instead, consider using config.yml to customize the build process. For inspiration: goreleaser, taskfile, etc.`,
                `Add customization options declaratively, like toggling support for Ledger devices, passing flags, etc.`,
                `Think of other config.yml improvements that can enhance the developer experience.`,
              ],
              sources: {
                Github: 'https://github.com/tendermint/starport',
                Docs: 'https://docs.starport.com/',
                Starport: 'https://starport.com ',
              },
            },
            {
              type: 'Starport',
              title: 'A Plugin System Challenge',
              preview: `A program like Starport can definitely benefit from a flexible plugin system that will allow developers to add functionality to Starport on the fly. Your challenge is to build one!`,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                `All of Starport’s functionality right now is implemented in packages within the Starport code repository. From a maintenance perspective this is convenient. But a program like Starport can definitely benefit from a flexible plugin system that will allow developers to add functionality to Starport on-the-fly. Your challenge is to build one!`,
              ],
              requirements: [
                `Each plugin is a Go Plugin, hosted in a repo. There can be multiple plugins inside a single repo.`,
                `Users will need to add their desired plugins to their config.yml in the new plugin section.`,
                `A plugin needs to comply with a certain interface defined by core Starport developers.`,
              ],
              sources: {
                'Github issue':
                  'https://github.com/tendermint/starport/issues/1312',
                Github: 'https://github.com/tendermint/starport',
                Docs: 'https://docs.starport.com/',
                Starport: 'https://starport.com ',
              },
            },
          ],
        },
        {
          title: 'Interoperability',
          info: 'IBC use cases',
          prize: 'Total Prize pool of $250K',
          details:
            'Alongside the Tendermint high-performance Byzantine fault-tolerant (BFT) consensus engine, one of the main innovations of the Cosmos Network is the robust and secure Inter-Blockchain Communication protocol (IBC), the Cosmos standard for interoperability. This protocol enables communication and digital asset transfers across an ever-expanding network of interconnected blockchains. Developers will need to create new, innovative ways to highlight the possibilities of blockchain interoperability using the IBC protocol such as viable implementations, use cases, data formats or others.',
          challenges: [
            {
              type: 'Akash',
              title: 'Akash Challenge',
              preview: `Akash's HackAtom VI challenge asks participants to develop the container images, SDL files, and readme.dm documentation needed to run chain nodes from Cosmos chains that are not currently in the repository. `,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                `Censorship-resistant, permissionless, and self-sovereign, Akash Network is the world's first open source cloud. One of the biggest values that Akash can provide to other blockchains is the ability to run hard-to-deplatform durable blockchain nodes. Removing blockchains' dependence on centralized hosting providers is one of the biggest steps blockchains can take toward further decentralization. To this end, the Akash community and core developer team have put together the following GitHub repo:`,
                `<a href="https://github.com/ovrclk/cosmos-omnibus" target="_blank" rel="noopener noreferrer" class="tm-link">https://github.com/ovrclk/cosmos-omnibus</a>`,
                `This repo contains the deployment scripts and references to working images to deploy nodes on a number of different Cosmos chains in a matter of seconds. Akash's HackAtom VI challenge asks participants to develop the container images, SDL files, and readme.dm documentation needed to run chain nodes from Cosmos chains that are not currently in the repository. Deliverables will be in the form of a PR to the <a href="https://github.com/ovrclk/cosmos-omnibus" target="_blank" rel="noopener noreferrer" class="tm-link">https://github.com/ovrclk/cosmos-omnibus</a> repo.`,
              ],
              requirementsInfo: 'Deliverable must include the following:',
              requirements: [
                'Configured SDL for deployment',
                'Working container image',
                'Complete documentation in the form of the readme.md',
                'Working Github account for the pull requests',
                'Access to the internet for the deployment and testing of the image on the Akash network',
              ],
              sources: {
                'Network website': 'https://akash.network/',
                'Network Discord': 'https://discord.gg/ryMhZpvdYX',
                'Network forum': 'https://forum.akash.network/',
              },
            },
            {
              type: 'Sentinel',
              title: 'Sentinel Challenge',
              preview: `Sentinel's IBC challenge is a tough one to tackle but could help to solve an important problem in the wider Cosmos ecosystem. Participants must build a fast, reliable, and unbiased randomness generator which could ideally be used for validator selection.`,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                `Sentinel is a network of independent dVPN applications, not just a single consumer-facing dVPN. Sentinel's IBC challenge is a tough one to tackle but could help to solve an important problem in the wider Cosmos ecosystem. Participants must build a fast, reliable, and unbiased randomness generator which could ideally be used for validator selection.`,
                `A randomness generator will be very useful for many other applications, from consumer-level apps to DeFi protocols, and Sentinel believes that the Cosmos Hub would benefit heavily if it could provide on-demand randomness through IBC.`,
              ],
              requirements: [
                `Sentinel is a network of independent dVPN applications, not just a single consumer-facing dVPN. Sentinel's IBC challenge is a tough one to tackle but could help to solve an important problem in the wider Cosmos ecosystem. Participants must build a fast, reliable, and unbiased randomness generator which could ideally be used for validator selection.`,
                `A randomness generator will be very useful for many other applications, from consumer-level apps to DeFi protocols, and Sentinel believes that the Cosmos Hub would benefit heavily if it could provide on-demand randomness through IBC.`,
              ],
              sources: {
                dfinity:
                  'https://dfinity.org/pdf-viewer/library/dfinity-consensus.pdf',
                github: 'https://github.com/corestario/tendermint',
                eprint: 'https://eprint.iacr.org/2020/096.pdf',
              },
            },
            {
              type: 'Sifchain',
              title: 'Sifchain Challenge',
              preview: `Sifchain's challenge for the hackathon is to implement IBC token name and service discovery for Cosmos-based tokens.`,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                `Sifchain is the world's first omni-chain decentralized exchange (DEX) for digital assets, unlocking liquidity in various chains to free people from egregious fees and inefficient trades. Sifchain's challenge for the hackathon is to implement IBC token name and service discovery for Cosmos-based tokens.`,
                `When a new token is launched, developers may register their token with a token-listing-discovery endpoint. A DEX like Sifchain would consume the listing, where each token listing provides sufficient knowledge to implement the IBC interface and list the token automatically. Write a full stack backend which lists tokens using Golang and Swagger.`,
              ],
              requirementsInfo:
                'Implement a low-friction integration and operation of a token listing microservice',
              requirements: [
                `<p>Maximize for ease of use</p>
                  <ul>
                    <li>Consuming the API</li>
                    <li>Stateless, functional programming model</li>
                  </ul>
                `,
                `<p>Full stack application</p>
                  <ul>
                    <li>
                      <p>Build, run and test using only Docker</p>
                      <ul>
                        <li>from Alpine or Golang</li>
                      </ul>
                    </li>
                    <li>Golang + Cosmos SDK (.42)</li>
                    <li>Follow 12-factor app guidelines</li>
                  </ul>
                `,
                `<p>Discovery REST API</p>
                  <ul>
                    <li>
                      <p>Implement using swagger.io for listing entities (examples)</p>
                      <ul>
                        <li>list token</li>
                        <li>delist token</li>
                        <li>activate token ( listed, tradeable )</li>
                        <li>deactivate token ( listed, not-tradeable )</li>
                        <li>get/set description</li>
                        <li>upload/update .proto file</li>
                        <li>project summary</li>
                        <li>token endpoint URL</li>
                      </ul>
                    </li>
                    <li>
                      <p>Implement using swagger.io for consuming entities: (examples)</p>
                      <ul>
                        </li>list tokens</li>
                        </li>date token listed</li>
                        </li>date token delisted</li>
                        </li>date token active</li>
                        </li>date token inactive</li>
                        </li>download gRPC “.proto” file</li>
                        </li>BETTER: JIT (just-in-time) generation of .proto endpoints in golang, javascript, or Java</li>
                      </ul>
                    </li>
                  </ul>
                `,
                `
                  <p>Persistence Layer</p>
                  <ul><li>Token listings should be on-chain</li></ul>
                `,
                `<p>Test suite</p>
                  <ul>
                    <li>Should cover both success and failure cases of all APIs</li>
                    <li>Excluding protobuf generated code, code coverage should be at least 50%</li>
                  </ul>`,
                `Document the build, run, and test process in a README.md at the root of your project`,
              ],
              testnet: [
                {
                  name: 'Peers for the testnet:',
                  content: `b4caebe07ab25126e4e6053bf955833198f18ed0@54.216.30.38:26656<br />
                    b6f113a30e7019b034e8b31cd2541aebebaacb60@54.66.212.111:26656<br />
                    ffcc2fab592d512eca7f903fd494d85a93e19cfe@122.248.219.121:26656<br />
                    a2864737f01d3977211e2ea624dd348595dd4f73@3.222.8.87:26656`,
                },
                {
                  name: 'Genesis for the testnet:',
                  link: 'https://github.com/Sifchain/networks/blob/master/testnet/sifchain-testnet/genesis.json',
                  shortLink: 'github.com/Sifchain/networks',
                },
              ],
              sources: {
                'Cosmos SDK documentation': 'https://docs.cosmos.network/',
                'Cosmos SDK on Github': 'https://github.com/cosmos',
                'Cosmos IBC documentation':
                  'https://docs.cosmos.network/master/ibc/overview.html',
                'Design Patterns for Dapps':
                  'https://www.freecodecamp.org/news/how-to-design-a-secure-backend-for-your-decentralized-application-9541b5d8bddb/',
                'Design Patterns for GoLang':
                  'https://refactoring.guru/design-patterns/go',
                'Swagger.io (Self-documenting REST)': 'https;//swaggar.io',
                'Google RPC (gRPC, lightweight HTTP/2)': 'https://grpc.io',
              },
            },
            {
              type: 'Pylons',
              title: 'Pylons Challenge',
              preview: `For this challenge, Pylons wants you to build new, innovative ways to highlight the possibilities of blockchain interoperability using the IBC protocol—such as viable implementation, use cases, and data formats—using the Cosmos SDK.`,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                'Built on Cosmos, Pylons is a fast and interoperable system for brands and creators to build engaging products and with meaningful NFT experiences. For this challenge, Pylons wants you to build new, innovative ways to highlight the possibilities of blockchain interoperability using the IBC protocol—such as viable implementation, use cases, and data formats—using the Cosmos SDK.',
                'Be the developer that unlocks the potential of interoperability for IRL applications—on Cosmos with the Pylons SDK. Reinvent centralized ticketing systems using NFTs.',
              ],
              requirementsInfo: `<p>Build a ticketing experience on the blockchain that promotes authenticity, transparency, and monetization. Integrate administration that allows for significant resale rake that remits more $USD/$ATOM to the artist.</p>
                <p>Utilizing the Cosmos SDK + Pylons SDK, create a ticketing sales and distribution system with the following attributes:</p>`,
              requirements: [
                `Ticket tiers and relevant price categories`,
                `On-chain redemption upon venue entry/check-in`,
                `Distribution of royalties upon execution of secondary sales`,
                `Mobile or web client.`,
                `Relatively unobtrusive chain interaction; chain state is saved on chain and updated with real time venue entry dynamics`,
                `The prize can be paid in either ATOM or Pylons (native token) at a parity according to a fixed day market price set ahead of time.`,
              ],
              testnet: [
                {
                  name: 'Testnet',
                  link: 'http://testnet.pylons.tech',
                  shortLink: 'testnet.pylons.tech',
                },
                {
                  name: 'Block Explorer',
                  link: 'https://wallet.pylons.tech/',
                  shortLink: 'https://wallet.pylons.tech',
                },
                {
                  name: 'User Endpoint',
                  link: 'http://wallet.pylons.tech',
                  shortLink: 'wallet.pylons.tech',
                },
              ],
              sources: {
                'cosmos-sdk': 'https://github.com/cosmos/cosmos-sdk/',
                starport: 'https://github.com/tendermint/starport',
                ibc: 'https://github.com/cosmos/ibc',
                'connecting-to-testnet':
                  'https://tutorials.cosmos.network/connecting-to-testnet/',
                wallets: 'https://v1.cosmos.network/ecosystem/wallets',
                pylons: 'https://www.pylons.tech/',
                Discord: 'https://discord.com/invite/RrSnFVy',
                Telegram: 'https://t.me/pylonstech',
              },
            },
            {
              type: 'Agoric',
              title: 'Cross Chain Liquidity Mining Challenge',
              preview: `Agoric's hackathon challenge is to build a set of Agoric smart contracts on Agoric that provide flexible liquidity mining options to Cosmos projects based on an Osmosis LP token.`,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                `<b>Cross Chain Liquidity Mining</b>`,
                `Agoric is an open-source development company launching an interoperable Proof-of-Stake chain and economy. Agoric's hackathon challenge is to build a set of Agoric smart contracts on Agoric that provide flexible liquidity mining options to Cosmos projects based on an Osmosis LP token. The contracts must at a minimum be able to do the following:`,
                `<ul>
                  <li>Accept an Osmosis LP token</li>
                  <li>Allow an arbitrary number of reward tiers based on lockup time (e.g.,100 tokens per block for no lockup, 200 tokens per block for 1 month lockup, etc.)</li>
                  <li>Allow governance token rewards to be deposited ahead of time and locked subject to distribution rules (i.e., project owners can credibly commit to reward amounts and distribution logic)</li>
                  <li>Optional: include a nifty front end!</li>
                </ul>`,
              ],
              context: [
                `Most Cosmos chains are application-specific blockchains which don’t have generalized smart contract capabilities. As a result, they are unable to natively engage in common network bootstrapping activities like liquidity mining.  `,
                `Liquidity mining is the process of distributing ownership of a protocol as a reward to users who provide assets (“liquidity providers”, LPs) to the protocol or to facilitate trade on a decentralized exchange.  `,
                `The Osmosis chain on Cosmos has enabled this for a limited set of cases. The Osmosis protocol distributes its native token OSMO to LPs of specific AMM pools to bootstrap liquidity and allow trading of those tokens. To receive these distributions, users must lock their liquidity tokens and agree to an unlocking period (Osmosis allows 1 day, 7 days, and 14 days as its unlocking period). `,
                `To further incentivize liquidity for its own tokens, Akash network partnered with Osmosis to *also* distribute Akash tokens to LPs in Akash pools on top of the existing OSMO token reward.  This is an important pattern and will become more so as the Cosmos network grows.`,
                `However, in this partnership, Akash is limited to distributing its token based on the settings that Osmosis allows. For example, if Akash wanted to ask users to lock liquidity for 3 months in order to receive rewards, as protocols in Ethereum have done, this would not be possible.`,
                `The goal of this bounty is to solve this problem more generally and to allow projects to offer liquidity mining rewards to LPs in major Cosmos DEXs (Osmosis and Gravity DEX to start) with flexible structures.`,
              ],
              requirements: [
                `A successful project should demonstrate the capabilities mentioned above in the description`,
                `<p>The contracts must, at a minimum, be able to do the following:</p>
                <ul>
                  <li>Accept an Osmosis LP token transferred over IBC</li>
                  <li>Allow an arbitrary number of reward tiers based on lockup time (e.g., 100 tokens per block for no lockup, 200 tokens per block for 1 month lockup, etc.)</li>
                  <li>Allow governance token rewards to be deposited ahead of time and locked subject to distribution rules (i.e., project owners can credibly commit to reward amounts and distribution logic)</li>
                  <li>Optional: a front end</li>
                  <li>Contract should be written in JavaScript using the Agoric SDK. Testnet deployments are preferred over local.</li>
                </ul>`,
              ],
              sources: {
                'Agoric ERTP Documentation':
                  'https://agoric.com/documentation/ertp/guide/',
                'Agoric Zoe Documentation':
                  'https://agoric.com/documentation/zoe/guide/',
                'IBC Documentation':
                  'https://docs.cosmos.network/master/ibc/overview.html',
              },
            },
          ],
        },
        {
          title: 'End-User Apps',
          info: 'Create an End-User App',
          prize: 'Total Prize pool of $200K',
          details:
            'Accessibility is a primary driver to entering the blockchain ecosystem, yet one of the most challenging tasks in blockchain is to make cryptocurrency and digital asset ownership accessible to end-users. Applications should manage keys in a secure manner allowing users to access their assets in an easy way and improving the overall user experience for beginners and advanced users. Developers are expected to build applications that make features more accessible or provide a more intuitive experience for an end-user.',
          challenges: [
            {
              type: 'Nym',
              title: 'NYM Challenge',
              preview: `The challenge is to create a Nym service provider (application) which offers cloud file storage, and a GUI where users interact with the service provider, all via the Nym mixnet.`,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                `Nym is a privacy platform. The Nym Mixnet provides network-layer privacy for users and applications by hiding the metadata (IP addresses, device types, timings, etc.) of the data packets that are sent through it. Creating a file storage application over the Nym Mixnet will allow users to store files in the cloud in a secure and private manner. The title of Nym's challenge is ‘The Eternity Service 2.0’.`,
              ],
              challenge: [
                `The challenge is to create a Nym service provider (application) which offers cloud file storage, and a GUI where users interact with the service provider, all via the Nym mixnet.`,
                `Users must be able to do the following via the GUI:`,
                `<ul>
                  <li>
                    <p><b>Store an encrypted file on the service provider:</b></p>
                    <ul>
                      <li>Users must be able to encrypt a file and upload it to the service provider’s storage via the Nym mixnet. Whether new keys are generated for this encryption or whether the user can import existing keys is up to the developer. </li>
                      <li>This step will also hash the contents of the file and store the resulting hash in local storage on the user’s machine, and be represented in the GUI.</li>
                    </ul>
                  </li>
                  <li>
                    <p><b>Verify their file has been uploaded and stored:</b></p>
                    <ul>
                      <li>Users must be able to poke the service provider with the hash of the file they uploaded in order to verify that the encrypted file exists with this hash as its identifier.</li>
                      <li>If the service provider answers in the affirmative, users should have the option of having their client-side application overwrite the bytes of their local storage where the file is to remove it.</li>
                    </ul>
                  </li>
                  <li>
                    <p><b>Retrieve their encrypted file from the service provider:</b></p>
                    <ul>
                      <li>Users must be able to request their file from the service provider using the hash as proof of ownership.</li>
                      <li>Users must be able to decrypt the retrieved file locally.</li>
                    </ul>
                  </li>
                  <li>
                    <p><b>Request for the service provider to delete its copy of their encrypted file:</b></p>
                    <ul>
                      <li>Users must be able to ask the service provider to delete the file it is storing, and verify there is no identifier remaining, again using the content-hash of the encrypted file.</li>
                    </ul>
                  </li>
                  <li>
                    <b>[Optional bonus feature 1]</b> Users are able to securely share the hash & decryption key of uploaded encrypted files with friends via the Nym mixnet!
                  </li>
                  <li>
                    <p><b>[Optional bonus feature 2]</b> Users are able to choose between uploading private files or public files for archiving:</p>
                    <ul>
                      <li>Users have the option of also uploading an unencrypted file to the service provider.</li>
                      <li>Users can then upload the hash of the file to the Nym blockchain, with plaintext information about what the file is. How this information is best uploaded and stored in the blockchain is left to the developers to decide.</li>
                      <li>This information is stored in a publicly accessible manner.</li>
                    </ul>
                  </li>
                </ul>`,
                `<i><b>A note regarding Nym testnet development</b>: Nym is likely to upgrade to a new testnet and/or to mainnet release during the time period of the hackathon. New networks will require bandwidth credentials to be created and used by both the client-side Nym client and the service provider’s Nym client in order to send packets through the mixnet. Integrating these updates will involve a small amount of extra work, but Nym will offer support by providing any necessary information!</i>`,
              ],
              requirements: [
                `Submissions must be usable/workable via the Nym testnet, but not necessarily production-ready. `,
                `Submissions must include a working service provider and desktop GUI application.`,
                `No specific language or framework requirements. `,
                `Good security practices will be an integral part of the judging criteria.`,
              ],
              sources: {
                'network overview documentation':
                  'https://nymtech.net/docs/0.11.0/overview/nym-platform',
                documentation:
                  'https://nymtech.net/docs/0.11.0/run-nym-nodes/requester',
                'Nym network':
                  'https://nymtech.net/docs/0.11.0/run-nym-nodes/requester',
                'The Eternity Service':
                  'https://nymtech.net/docs/0.11.0/run-nym-nodes/requester',
              },
            },
            {
              type: 'Injective',
              title: 'Injective Challenge',
              preview: `Injective's HackAtom VI challenge is to build a new simple single-page application trading interface for trading spot and perpetual markets. The purpose of this is to provide mass market users (not pro traders) an accessible, user-friendly interface for trading (Like Matcha on Ethereum, for example).`,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                `Injective Protocol is pioneering a new decentralized economy to create a freer and more inclusive financial system. Injective has created a solution that allows crypto exchanges to become a decentralized public utility, giving users and their community much-needed value-capture in the exchange landscape.`,
                `Injective's HackAtom VI challenge is to build a new simple single-page application trading interface for trading spot and perpetual markets. The purpose of this is to provide mass market users (not pro traders) an accessible, user-friendly interface for trading (Like Matcha on Ethereum, for example). This will allow novice traders to access Injective easily.`,
                `On Injective, such frontend interfaces are referred to as a Relayer. A relayer is essentially a frontend interface that allows users to interact with Injective Protocol. Relayers are able to earn 40% of all trading fees generated. So, if you build a relayer, you can continue to earn fees in perpetuity. Relayers come in all forms. Currently there are a number of different relayers such as <a href="https://injective.exchange/" target="_blank" rel="noopener noreferrer" class="tm-link">Injective Pro</a> and <a href="https://trade.picasso.exchange/" target="_blank" rel="noopener noreferrer" class="tm-link">Picasso Exchange</a>. A relayer can include new features and even be region-specific (for instance, there is currently a relayer being built entirely in Chinese).`,
                `The easiest way to get started without worrying about underlying business logic implementations is to fork our <a href="https://github.com/InjectiveLabs/injective-dex" target="_blank" rel="noopener noreferrer" class="tm-link">injective-dex</a> repo. This repository already contains two of the three components required for the application. It also has a lot of example usage of our <a href="https://github.com/InjectiveLabs/injective-ts" target="_blank" rel="noopener noreferrer" class="tm-link">injective-ts</a> monorepo packages that are used to easily build user interfaces that consume and interact with the Injective Chain.`,
                `You can find tips and more details in <a href="https://injective.notion.site/Injective-HackAtom-VI-Challenge-Additional-Details-3b308d7d78e34fd4b9a2e8422ea3a599" target="_blank" rel="noopener noreferrer" class="tm-link">the following page</a>.`,
              ],
              requirements: [
                'Make a meaningfully unique/better designed product. Submissions that simply restyle a few components will not be awarded.',
                'Proper project structure.',
                'Clean and readable codebase.',
              ],
              sources: {
                'how to use these packages in production':
                  'https://github.com/InjectiveLabs/injective-dex',
                'Monorepo and the packages that it produces to interact with the Injective Chain/Injective Exchange service':
                  'https://github.com/InjectiveLabs/injective-ts',
                'The Injective Chain docs': 'https://chain.injective.network/',
                'The Injective API docs': 'https://api.injective.exchange/',
                injective:
                  'https://injective.notion.site/Injective-HackAtom-VI-Challenge-Additional-Details-3b308d7d78e34fd4b9a2e8422ea3a599',
              },
            },
            {
              type: 'LikeCoin',
              title: 'Likecoin Challenge',
              preview: `In this challenge, LikeCoin is seeking developers who can develop a wallet interface to allow users to manage their ISCN records.`,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                `ISCN is a NFT-like content registry record running on the LikeCoin chain. We allow content creators to register their content metadata on the chain through ISCN transactions.`,
                `<p>Currently, there are three ways for creators to register their content metadata to the LikeCoin chain,</p>
                <ol>
                  <li>register via <a href="https://app.like.co/" target="_blank" rel="noopener noreferrer" class="tm-link">app.like.co</a>,</li>
                  <li>ISCN <a href="https://docs.like.co/developer/international-standard-content-number-iscn/batch-upload-tool" target="_blank" rel="noopener noreferrer" class="tm-link">batch uploader</a>,</li>
                  <li>LikeCoin Wordpress <a href="https://wordpress.org/plugins/likecoin/" target="_blank" rel="noopener noreferrer" class="tm-link">plugin</a>.</li>
                </ol>
                <p>Unlike traditional NFT, ISCN owners might have to view, manage or edit ISCN records in batch, since talented creators can produce creative works quickly, and have a huge collection of series of metadata.</p>`,
                `In this challenge, we hope developers can develop a wallet interface to allow users to manage their pre-NFT credentials (metadata) records. Useful features include visualization of the metadata records, and organizing them into directories or groups; interface for viewing and editing metadata records, and sending and trading of metadata records (change of owner).`,
              ],
              requirements: [
                'Develop a dApp interface for users to view and manage their ISCN records',
                'Visualization of users’ ISCN records, allow users to organize their collection in UI',
                'Editor for ISCN records, figure out a user-friendly way for editing in batch mode',
                'View-only mode to discover contents of a specific address/creator',
                'Global ISCN browsers, preferably with a way to discover groups, series, and relationships between works',
                'Other features that might be useful for content creators to manage their ISCN records',
              ],
              testnet: [
                {
                  name: 'Can use this link for testing:',
                  link: 'https://github.com/likecoin/testnets/tree/master/likecoin-public-testnet-3',
                  shortLink: 'github.com/likecoin/testnets',
                },
                {
                  name: 'Mainnet with actual wallets with iscn records:',
                  link: 'https://github.com/likecoin/mainnet',
                  shortLink: 'github.com/likecoin/mainnet',
                },
              ],
              sources: {
                Documentation: 'https://docs.like.co/',
                'ISCN App': 'https://app.like.co',
                'ISCN batch uploader':
                  'https://github.com/likecoin/iscn-batch-uploader​',
                'LikeCoin WordPress plugin':
                  'https://wordpress.org/plugins/likecoin/',
                'Mainnet LCD': 'https://mainnet-node.like.co/rpc',
                'Mainnet RPC': 'https://mainnet-node.like.co/rpc/',
                'Other useful information about LikeCoin mainnet':
                  'https://github.com/likecoin/mainnet',
                'LikeCoin chain repo':
                  'https://github.com/likecoin/likecoin-chain/releases/tag/fotan-1',
              },
            },
            {
              type: 'Archway',
              title: 'Archway Challenge',
              preview: `Archway's HackAtom VI challenge is to create a base NFT marketplace on Archway’s testnet. This entails the marketplace smart contracts as well as front-end that will allow users to buy, sell, and trade CW721 tokens in exchange for CW20 tokens.`,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                `Archway is an incentivized smart contract chain for Cosmos. The protocol gives developers a simple way to build and launch scalable cross-chain dApps, and get rewarded for the value they contribute to the network — all through the glory of CosmWasm // Rust contracts!`,
                `As dApps generate usage on Archway, they earn a proportional share of transaction fees and inflationary rewards on the network, similar to validators in a typical PoS network.`,
                `For this HackAtom challenge, we’re excited to work with you to start building out some of the pivotal apps that will help bootstrap the ecosystem — NFTs, DeFi, DAOs, token minting, automated rewards distribution...`,
                `<ul>
                  <li>🖼️ <b>NFT marketplace</b> — create a base NFT marketplace on Archway. This entails the marketplace smart contracts and front-end that will allow users to buy, sell, and trade CW721 tokens in exchange for CW20 tokens. Key features to include a generic NFT marketplace smart contract, listing CW721 tokens for sale for any CW20 token, buying CW721 tokens with CW20 tokens, trading any CW721 token with any other CW721, and any additional marketplace capabilities you’re keen to experiment with (auctions, fractionalization, royalties, etc.)</li>
                  <li>💹 <b>DEX</b> — migrate an existing AMM-based DEX or build your own atop Archway’s testnet. The DEX should allow users to swap native CW20 tokens, add / remove liquidity, earn fees for providing liquidity, and other standard DEX features.</li>
                  <li>🏛️ <b>DAOs</b> — build a tool to create a basic DAO that enables community management of a treasury using CW20 tokens. This DAO launcher would allow for the configuration of the token, distribution, proposals, voting duration, threshold to pass, proposal fees, etc. Token holders would then control the treasury by proposing and then voting on transactions.</li>
                  <li>✨ <b>Token minting UI</b> — build a token minting app that allows users to easily define and deploy standard CosmWasm tokens to Archway entirely through a web UI. This will give users a front-end to mint CW20 or CW721 tokens on Archway, including some basic configuration of token type, metadata, and functionality (i.e. name, symbol, desc, supply, properties, etc).</li>
                  <li>💸 <b>Rewards distribution</b> — one of the unique features of Archway is protocol-level rewards for developers, which are automatically deposited to a dapp’s “owner” address based on gas consumed. You can create custom contracts to automatically redistribute such rewards in ways that benefit your community — for example, back to governance token holders, depositing in a ‘pool account’ to sponsor gas payments, contributing to a DAO, boost liquidity incentives, purchase ecocredits, or any other creative way you envision allocating recurring funding streams.</li>
                </ul>`,
                `* Major bonus points for incorporating cross-chain features ⚛️`,
              ],
              requirements: [
                `All projects should be deployed and workable on Archway’s testnet (<a href="https://docs.archway.io/docs/create/getting-started/install/" target="_blank" rel="noopener noreferrer" class="tm-link">https://docs.archway.io/docs/create/getting-started/install/</a>),`,
                `Contracts using CosmWasm`,
                `Adhere to standard token interfaces (CW20, CW721) and <a href="https://cosmos.network/ecosystem/wallets" target="_blank" rel="noopener noreferrer" class="tm-link">wallets</a> for contract deployment and interactions (mint, list, buy, sell, transfer, etc),`,
                `A functional and usable front-end`,
              ],
              sources: {
                'docs.archway.io': 'https://docs.archway.io/',
                'archway getting-started':
                  'https://docs.archway.io/docs/create/getting-started/install/',
                'docs.cosmwasm.com': 'https://docs.cosmwasm.com/docs/0.16/',
                'CosmWasm github': 'https://github.com/CosmWasm/cw-nfts',
                'CosmWasm NFT marketplace (github)':
                  'https://github.com/BlockscapeNetwork/hackatom_v/tree/master/contracts/marketplace',
                'CosmWasm NFT marketplace (blog)':
                  'https://blockscape-network.medium.com/hackatom-v-nft-marketplace-smart-contract-795b743a7738',
                'Reference implementation — token minting app':
                  'https://vittominacori.github.io/erc20-generator/create-token/',
              },
            },
          ],
        },
        {
          title: 'DeFi',
          info: 'DeFi app or module with the Cosmos SDK',
          prize: 'Total Prize pool of $100K',
          details:
            'DeFi is a blockchain-based alternative financial system to the legacy system of banks, exchanges, insurance companies, mortgage providers, etc., but reimagined from the ground up with no intermediaries in the middle. Unlike traditional finance, with no gatekeepers to turn down your application, DeFi lowers the barrier to entry, allowing more people to access financial services, take out a collateralized loan, or earn a yield on their assets. Help expand the capabilities of DeFi by building an app or module with the Cosmos SDK.',
          challenges: [
            {
              type: 'Kava',
              title: 'Kava Challenge',
              preview: `Kava's HackAtom VI challenge asks you to build a fully autonomous options protocol as a Cosmos SDK module. You can assume that you have access to a price oracle.`,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                `Kava is a software protocol that uses multiple cryptocurrencies to allow its users to borrow and lend assets without the need for a traditional financial intermediary. Kava's HackAtom VI challenge asks you to build a fully autonomous options protocol as a Cosmos SDK module. You can assume that you have access to a price oracle.`,
              ],
              requirements: [
                'All projects must be built using the Cosmos SDK, version 0.39+. Submissions should have at least minimum-viable functionality (ie, the main user actions are all supported by the protocol).',
              ],
              sources: {
                'DeFi options':
                  'https://blog.pods.finance/understanding-defi-options-f007a66e5133',
                'Beginners guide':
                  'https://medium.com/opyn/a-beginners-guide-to-defi-options-opyn-v2-4d64f91acc84',
                coinmarketcap:
                  'https://coinmarketcap.com/alexandria/article/alchemix-pulling-back-the-curtain-flipside-crypto',
                medium:
                  'https://medium.com/coinmonks/perpetual-swaps-in-defi-749997209ba3',
                delphidigital:
                  'https://www.delphidigital.io/reports/an-update-on-defi-perps/',
                docs: 'https://docs.perp.fi/',
              },
            },
            {
              type: 'Tendermint',
              title: 'Tendermint Challenge',
              preview: `Build a general tool for Loan or Insurance modules using the gravity dex.`,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                `Tendermint builds and maintains critical state-of-the-art infrastructure for decentralized applications, such as Tendermint Core, Cosmos SDK, Starport, and Emeris. Tendermint is a core contributor to the Cosmos Network and organizer of HackAtom VI. Find the details of Tendermint's DeFi challenge below:`,
              ],
              challenge: [
                `Build a general tool for Loan or Insurance modules `,
                `Collateral-less loan (Flash Loan)`,
                `Non-custodial asset borrowing (earn interest on deposit)`,
                `Examples for inspiration are Cosmos SDK Loan or Insurance Module`,
                `Use Gravity DEX and the Cosmos SDK to build a new Loan or Insurance Module`,
              ],
              requirements: [
                `Using <a href='https://github.com/Gravity-Devs/liquidity/tree/v1.4.0' target='_blank' rel='noopener noreferrer' class='tm-link'>Gravity DEX</a> is mandatory for this challenge`,
              ],
              testnet: [
                {
                  link: 'https://testnet.cosmos.network/',
                  shortLink: 'testnet.cosmos.network',
                },
                {
                  link: 'https://rpc.testnet.cosmos.network/',
                  shortLink: 'rpc.testnet.cosmos.network',
                },
                {
                  link: 'https://api.testnet.cosmos.network/',
                  shortLink: 'api.testnet.cosmos.network',
                },
                {
                  link: 'https://grpc.testnet.cosmos.network/',
                  shortLink: 'grpc.testnet.cosmos.network',
                },
              ],
              sources: {
                'cosmos-sdk': 'https://github.com/cosmos/cosmos-sdk/',
                starport: 'https://github.com/tendermint/starport',
                'starport guide': 'https://docs.starport.com/guide/',
                ibc: 'https://github.com/cosmos/ibc',
                'connecting-to-testnet':
                  'https://tutorials.cosmos.network/connecting-to-testnet/',
                'gravity-dex': 'https://cosmos.network/gravity-dex/',
                blog: 'https://blog.cosmos.network/bringing-defi-to-cosmos-the-gravity-dex-protocol-is-live-a0c5857d6267',
              },
            },
          ],
        },
        {
          title: 'Gaming',
          info: 'Gaming apps on Cosmos SDK',
          prize: 'Total Prize pool of $100K',
          details:
            'Blockchain has the potential to completely restructure the gaming industry. Blockchain gaming uses true item ownership from the same technology that lies at the core of cryptocurrencies. Be the game developer that unlocks the potential of gaming with Cosmos. Build the future of gaming with the Cosmos SDK.',
          challenges: [
            {
              type: 'Pylons',
              title: 'Pylons Challenge',
              preview: `Build a game with meaningful gameplay behavior mediated through state changes using the Cosmos SDK blockchain framework, or build a decentralized virtual world with Cosmos network — utilizing the Cosmos SDK + Pylons SDK.`,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                'Built on Cosmos, Pylons is a fast and interoperable system for brands and creators to build engaging products and with meaningful NFT experiences. For this challenge, Pylons wants you to build a game with meaningful gameplay behavior mediated through state changes using the Cosmos SDK blockchain framework, or build a decentralized virtual world with Cosmos network, utilizing the Cosmos SDK + Pylons SDK.',
              ],
              requirementsInfo:
                'Build a gaming experience on the blockchain that follows the crafting experience of a Strange Clan character. Players should be able to farm, craft, and quest using Cosmos SDK + Pylons SDK. Gamers can create, purchase, and trade with other players as well. Further requirements include:',
              requirements: [
                `Seamless chain integration (check out Pylons cookbooks and recipes)`,
                `Implement farming`,
                `Create direct trading and listing platform (bonus)`,
              ],
              judgingCriteria: [
                `Characters should be able to create their own items/list them on trade for other Strange Clan Holders`,
                `Characters should be able to interact with the 3D Strange Clan environment and develop their Clan/plots of land`,
                `Cosmos SDK/Pylons SDK is used for on-chain implementation of creation and trading`,
                `Purchases should be reflected in-game and on-chain`,
              ],
              testnet: [
                {
                  name: 'Testnet',
                  link: 'http://testnet.pylons.tech',
                  shortLink: 'testnet.pylons.tech',
                },
                {
                  name: 'Block Explorer',
                  link: 'https://wallet.pylons.tech/',
                  shortLink: 'https://wallet.pylons.tech',
                },
                {
                  name: 'User Endpoint',
                  link: 'http://wallet.pylons.tech',
                  shortLink: 'wallet.pylons.tech',
                },
              ],
              sources: {
                Pylons: 'https://www.pylons.tech/',
                'Cosmos SDK': 'https://github.com/cosmos/cosmos-sdk/',
                Starport: 'https://github.com/tendermint/starport',
                IBC: 'https://github.com/cosmos/ibc',
                'connecting-to-testnet':
                  'https://tutorials.cosmos.network/connecting-to-testnet/',
                wallets: 'https://v1.cosmos.network/ecosystem/wallets',
                'Github issue':
                  'https://github.com/Pylons-tech/pylons/issues/432',
                'Strange Clan Website': 'https://strangeclan.com/',
                'Unreal Engine 5 Early Access':
                  'https://www.unrealengine.com/en-US/unreal-engine-5',
                'Pylons Discord': 'https://discord.com/invite/RrSnFVy',
                'The Strange Clan Discord': 'http://discord.gg/strangeclan',
                Telegram: 'https://t.me/pylonstech',
                'Twitter @pylonstech': 'https://twitter.com/pylonstech',
                'Twitter @thestrangeclan': 'https://twitter.com/thestrangeclan',
                email: 'support@pylons.tech',
              },
            },
            {
              type: 'Secret Network',
              title: 'Secret Network Challenge',
              preview: `Secret’s challenge is to build a game on Secret Network using CosmWasm, Secret NFTs, and on-chain randomness.`,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                `Secret Network is an open-source protocol that performs computations on encrypted data, bringing privacy to smart contracts and public blockchains. Secret's challenge is to build a game on Secret Network using CosmWasm, Secret NFTs, and on-chain randomness.`,
                `Blockchain NFT gaming is taking off, even though main components of gaming are non-existent with traditional blockchains, namely private data and randomness. To create Games of Incomplete Information, private data must be utilized, and to create fair games, randomness must be utilized. Randomness can also be utilized to generate unpredictable mazes, puzzles and maps, to roll dice, to shuffle cards and cubes, to create gaming AIs, and to add "chaos" in order to enhance in-game experiences.`,
                `Traditional blockchains like Ethereum don’t have data privacy or on-chain randomness, therefore gaming creators resort to centralized solutions. This makes for less fair and transparent games, and also leads to non-ideal UX at times (getting randomness from off-chain sources takes time).`,
                `On Secret Network, all contract’s data is private by default. Only the contract can read its own state, and only the transaction sender can read the transaction inputs and outputs. By utilizing private state, contracts can store a private entropy pool and from it derive private random numbers instantly and at will.`,
              ],
              requirements: [
                `Implementation of blockchain gaming app on Secret Network`,
                `Write contracts using CosmWasm`,
                `Utilize private data (Game of Incomplete Information)`,
                `Utilize on-chain randomness `,
                `<p>User interface in a mobile app or a web browser</p>
                <ul>
                  <li>Using Keplr is optional</li>
                  <li>May implement a simple local wallet for better UX</li>
                </ul>`,
              ],
              bonusPoints: [
                `Use Secret NFTs (SNIP-721)`,
                `Use query permits`,
                `Don’t use viewing keys`,
              ],
              sources: {
                'Awesome Secret':
                  'https://github.com/SecretFoundation/awesome-secret',
                'Awesome Secret #developer-guides':
                  'https://github.com/SecretFoundation/awesome-secret#developer-guides',
                'Awesome Secret #developer-tools':
                  'https://github.com/SecretFoundation/awesome-secret#developer-tools',
                'Awesome Secret #reference-contracts':
                  'https://github.com/SecretFoundation/awesome-secret#reference-contracts',
                'Awesome Secret #games':
                  'https://github.com/SecretFoundation/awesome-secret#games',
                'Secret NFTs Code':
                  'https://github.com/baedrik/snip721-reference-impl',
                'Secret NFTs Docs':
                  'https://github.com/SecretFoundation/SNIPs/blob/master/SNIP-721.md',
                'Secret NFTs Keplr + query permits example':
                  'https://github.com/enigmampc/snip20-reference-impl/pull/22',
                'Example: Maintaining a private entropy pool and get random numbers at will #1':
                  'https://github.com/enigmampc/SecretSwapAnonEdition/blob/b52f76f/contracts/secretswap_pair/src/state.rs#L21-L51',
                'Example: Maintaining a private entropy pool and get random numbers at will #2':
                  'https://github.com/enigmampc/SecretSwapAnonEdition/blob/b52f76f/contracts/secretswap_pair/src/contract.rs#L173-L175',
                'Example: Shuffling a deck of cards':
                  'https://github.com/enigmampc/SecretHoldEm/blob/57898fdfc55a41a3972c40353dc0df1c42e4cd83/contract/src/contract.rs#L332-L346',
                'Running a local test chain':
                  'https://github.com/enigmampc/snip20-reference-impl/blob/9d8e9d1/Makefile#L71-L76',
                'Compiling a contract':
                  'https://github.com/enigmampc/snip20-reference-impl/blob/9d8e9d1/Makefile#L61-L66',
                'Implementing a simple local wallet for better UX':
                  'https://github.com/enigmampc/SecretHoldEm/blob/57898fd/gui/src/App.js#L80-L116',
              },
            },
          ],
        },
        {
          title: 'Earth',
          info: 'Earth Sustainability and Ecological Regeneration on Cosmos SDK',
          prize: 'Total Prize pool of $200K',
          details:
            'The ultimate purpose of the Internet of Blockchains is to empower people everywhere with digital technologies that enable communities to prosper. When communities prosper, they can regenerate the planet, and respond more effectively to the climate crisis. Change the state of the planet by building modules, accessible apps and integrations for local currencies, self-sovereign identity, non-fungible impact tokens, verification oracles, decentralised impact exchanges, and earth intelligence data. This is the Interchain Earth Mission!',
          challenges: [
            {
              type: 'Regen',
              title: 'Regen Network Challenge',
              preview: `Regen Network's challenge for HackAtom VI under the EARTH category is to bridge ecocredits into the interchain ecosystem—by implementing an IBC application that allows users to move these new types of ecological assets across different blockchains.`,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                `Regen Network is a platform for a thriving planet, that aligns economics with ecology to drive regenerative land management. Regen Network is soon approaching its first mainnet upgrade, which will include the launch of the first module for representing carbon credits (“ecocredits” on Regen Network) as on-chain assets on a Cosmos SDK-based blockchain.`,
                `Regen Network's challenge for HackAtom VI under the EARTH category is to bridge ecocredits into the interchain ecosystem—by implementing an IBC application that allows users to move these new types of ecological assets across different blockchains.`,
                `Ecocredits are more feature rich than other familiar standards such as ERC-20 tokens, and allow for additional ecologically pertinent metadata, as well as the ability for a holder to “retire” these credits—thus claiming the credit as an “offset” in carbon accounting terms. As such, your submission should take into account these nuances and provide for cross-chain access to metadata, as well as cross-chain capabilities for retiring credits.`,
              ],
              requirementsInfo: `The challenge submission should include:`,
              requirements: [
                `The challenge submission should include:A complete IBC application in its own repository`,
                `Documentation of the specification and functionality`,
                `A readme with instructions for use`,
                `A demo showcasing cross-chain ecocredit transfer & retirement using a fork of regen-ledger and a testnet of another IBC ecocredit enabled blockchain.`,
                `Bonus points will be provided for extending this functionality into a dApp where end-users can issue, transfer, and retire ecocredits in a cross-chain capable way.`,
              ],
              testnet: [
                {
                  name: 'Getting Started Tutorial:',
                  link: 'https://docs.regen.network/getting-started/live-networks.html',
                  shortLink: 'docs.regen.network/getting-started',
                },
                {
                  name: 'Redwood Testnet:',
                  content: `<p><b>regen-redwood-1</b> is the chain ID for Redwood Testnet</p>
                  <p>Redwood Testnet launched with the <b>v1.0.0</b> release tag of <b>regen-ledger</b></p>
                  <p>When starting a full node or a validator node from genesis, you will need to start the node with the <b>v1.0.0</b> version (the "genesis binary"). For more information about preparing your node to migrate to the <b>v2.0.0</b> version, see <a href="https://docs.regen.network/migrations/v2.0-upgrade.html" target="_blank" rel="noopener noreferrer" class="tm-link tm-link-underline tm-link-external">Upgrade Guide v2.0</a></p>
                  <p>The following URL is the node address for a full node operated by RND:<br/><a href="http://redwood.regen.network:26657/" target="_blank" rel="noopener noreferrer" class="tm-link tm-link-underline tm-link-external">http://redwood.regen.network:26657/</a></p>`,
                },
              ],
              sources: {
                'Regen Ledger': 'http://github.com/regen-network/regen-ledger',
                'Ecocredit Module Implementation':
                  'https://github.com/regen-network/regen-ledger/tree/release/v2.0.x/x/ecocredit',
                'Ecocredit Module Docs':
                  'https://docs.regen.network/modules/ecocredit/',
                'IBC Custom Application Docs':
                  'https://ibc.cosmos.network/main/ibc/apps.html',
              },
            },
            {
              type: 'Pylons',
              title: 'Grant.fish and Juno Challenge',
              preview: `For this important challenge, Juno and grant.fish are teaming up to ask you to change the state of the planet by building modules, accessible apps, and integrations for local currencies, self-sovereign identity, non-fungible impact tokens, verification oracles, decentralized impact exchanges, and earth intelligence data.`,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                `Juno is an interoperable smart contract network that is highly scalable, robust, secure, and easy to deploy. Grant.fish is a validator operated by stake.fish that has launched with the Cosmos Hub 3 upgrade. Both believe that the ultimate purpose of the Internet of Blockchains is to empower people everywhere with digital technologies that enable communities to prosper. When communities prosper, they can regenerate the planet and respond more effectively to the climate crisis.`,
                `For this important challenge, Juno and grant.fish are teaming up to ask you to change the state of the planet by building modules, accessible apps, and integrations for local currencies, self-sovereign identity, non-fungible impact tokens, verification oracles, decentralized impact exchanges, and earth intelligence data.`,
                `Create something that can leverage the power of the Juno platform and Cosmos IBC functionality that can support carbon emission reduction initiatives. Identifying ways to tie in existing Juno functionality with regenerative-focused networks like Regen Network could be a great opportunity as well.`,
              ],
              requirements: [
                `Use the Juno platform and Cosmos IBC.`,
                `You may find it helpful to use the Regen Network as well for its specific use case in regenerative climate-focused applications.`,
              ],
              sources: {
                'docs Junochain': 'https://docs.junochain.com/',
                'docs Cosmos':
                  'https://docs.cosmos.network/master/ibc/overview.html',
                'docs Regen': 'https://docs.regen.network/',
              },
            },
            {
              type: 'ixo Foundation',
              title: 'The Earth Crisis Challenge',
              preview: `Your challenge is to build and demonstrate applications using the Internet of Impact, or software components that add capabilities to The Impact Stack, for preventing and responding to specific types of real-world Earth Crisis events.`,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                `Humanity is on the brink of a fundamental state-transition into planetary chaos. Erratic weather patterns and natural disasters resulting from flooding, droughts and wild-fires are becoming more frequent each year, as climate-change accelerates. Mass human migrations away from disaster zones are already beginning and we see conflicts and famine. Re-emerging tropical diseases and lethal new infectious agents, such as COVID-19, threaten human and animal life. Natural resources are being depleted at an alarming rate, way beyond the planetary boundaries for sustainability, and imperial wars to control and own these resources have already begun!`,
                `What can we do to avoid mass extinctions of life-forms on Earth and to reverse the threat of losing centuries of human progress?`,
                `We must develop responses to the Earth Crisis using anti-fragile digital technologies and data about the state of the world that is verifiable and increases our intelligence. The ultimate sense-and-response system must become globally distributed and enable intelligent, rapid, effective local coordination, with incentives for people to take action, and to get sufficient resources to flow where these are most needed.`,
                `The ixo-Cosmos Internet of Impact Hub and connected sovereign Impact Zone networks can provide the blockchain infrastructure needed to respond to the Earth Crisis. ixo describes the Internet of Impact as a global digital immune system for humanity.`,
                `Your challenge is to build and demonstrate applications using the Internet of Impact, or software components that add capabilities to The Impact Stack, for preventing and responding to specific types of real-world Earth Crisis events.`,
                `You will collaborate with Problem-owners who have place-based or domain-specific knowledge and expertise about use cases that may range from making earth state observations for early-warning systems, to financing earth state-changes, to enable local citizen action, and to create global change.`,
                `This is an enormous, urgent opportunity space of the highest priority, in which to apply your skills, connect and interoperate with existing systems, integrate the latest AI technologies, and build better alternative decentralized financing and data verification mechanisms.`,
              ],
              requirements: [
                `<b>Demonstrate a solution for a specific real-world use-case</b> that is ideally built in collaboration with a problem-owner who understands an Earth Crisis events domain. For instance, The Red Cross International Disaster Bonds insurance mechanism for rapidly delivering relief financing to communities threatened by natural disasters. The Earth Crisis problem space is rich with opportunities, so we look forward to seeing really interesting use cases that address real needs.`,
                `<b>Build your solution on the Internet of Impact</b> using the ixo-Blockchain SDK. The blockchain base layer can either use the current Go modules and capabilities implemented in the ixo Pandora-4 Testnet (which has the same configuration as the ImpactHub-3 main-net), or you can build and configure new chains that include base ixo-Blockchain modules, with additional modules imported from the Cosmos SDK, or other projects. You may even decide to build your own custom module/s, using the Cosmos SDK framework, or implement smart contracts–for instance, using the CosmWasm module.`,
                `<b>Create entities with specific roles and capabilities</b> in your solution, using ixo Decentralized Identifiers (DIDs) and combinations of the following entity types:
                  <ul>
                    <li><b>Agents</b> that are Individuals or groups with Self-sovereign Digital Identity.</li>
                    <li><b>Projects</b> for managing agents to finance, deliver, claim and verify pre-defined results. </li>
                    <li><b>Investments</b> for forming and distributing capital assets to invest into other entities, using sustainable DeFi mechanisms, such as ixo Alphabonds.</li>
                    <li><b>Oracles</b> that provide trusted information from the real-world, or offer prediction services for proofing and verifying claims, personalising services, prescribing interventions, preventing risks, protecting against threats, and enabling more effective human participation in decision-making. </li>
                    <li><b>Assets</b> that are tokenized using Interchain Identifiers, to represent any digital asset types such as tokenized Carbon Credits or other classes of Impact Tokens, tokenized titles and rights over physical assets, tokenized data assets, etc.</li>
                    <li><b>Templates</b> that encode the claims and data models for the Internet of Impact Linked-data Graph, which enable users to quickly configure new entities from template libraries.</li>
                    <li><b>Cells</b> for coordinating groups of agents with a shared purpose, including through DAOs mechanisms.</li>
                  </ul>
                `,
                `<b>Provide a compelling user interface</b> to demonstrate from the target user’s perspective how the solution works to meet their needs. Using personas and user journey maps would be helpful in your presentation of the solution. You can build your interface using the ixo-Webclient (React, Typescript), with the option to add new features and systems integrations into the current version of the web-client. Alternatively, you can build entirely new client applications, using the ixo-Client SDK and javascript libraries. For instance, an IoT device client that feeds information into the  integrating IoT devices with the ixo system.`,
                `<b>Consider building service integrations</b> that extend the capabilities of the Internet of Impact to receive information and services from other Web3 or Web 2.0 networks, and/or to provide information and services into other networks.`,
              ],
              sources: {
                'The ixo Foundation Github Repo':
                  'https://github.com/ixofoundation',
                'ixo Developer Documentation':
                  'https://docs.ixo.foundation/ixo/',
                'Risk-Adjusted Bonding Curves':
                  'https://github.com/BlockScience/Risk-Adjusted-Bonding-Curves',
                'Pandora Testnet': 'https://testnet.ixo.world',
                'ixo Web Application UAT instance':
                  'https://app-uat.ixo.world/',
                'ixo Discord community ': 'https://discord.gg/mCJue97UZa',
                'ixo Discourse discussion forum': 'https://forum.ixo.world',
                'Developers Slack for HackAtom':
                  'https://join.slack.com/share/enQtMjY2ODY2NzYyMDU3Ni0yMmRjNWNjY2U2ZmQyZDg0YmJhYzkzMWYxMzg3MzM2MWNlMjU1MDhkMTk1ZTQ4NTMxNmJlMGQzZTA2NjMyYjA5',
                'Code with Us workshop on the ixo Bonds Module':
                  'https://www.youtube.com/watch?v=pIpVDJLbKFQ',
                'AI for Good Neural Network':
                  'https://aiforgood.itu.int/neural-network/',
              },
            },
            {
              type: 'IXO',
              title: 'The Earth Tokens Challenge',
              preview: `For this challenge “Earth Tokens” are defined as classes of tokens that are created and used for the purpose of sustainable socio-economic development, climate action, and ecological regeneration.`,
              prizes: {
                '1st': '$35,000',
                '2nd': '$15,000',
              },
              info: [
                `For this challenge, “Earth Tokens” are defined as classes of tokens that are created and used for the purpose of sustainable socio-economic development, climate action, and ecological regeneration.`,
                `Tokenization is transforming how people are incentivized, how decentralized economies and communities are secured and governed, how capital gets formed and allocated, how products and services are financed, and how digital or physical assets are used for financial or non-financial applications.`,
                `Across this wide range of applications, there are many different classes of tokens. Each token class has a unique set of token properties and token behaviors.`,
                `The Interchain Identifier (IID) Specification describes how to configure various classes of tokens, using token templates and standards that are designed to be interoperable across all blockchain networks, and addressable from the web.`,
              ],
              moreInfo: [
                `Consider these 3 use-cases as examples of how different classes of Earth Tokens could be configured:`,
                `<ul>
                  <li><b>Community Currency Tokens</b> enable people to exchange their time, goods, and services to grow a local economy. A token issuer may define a class of fungible, fixed-supply tokens that can only be transacted between identified accounts with verifiable credentials.</li>
                  <li><b>Mutual Credit Tokens</b> enable small businesses to transact with less reliance on external capital and this token class may have more characteristics of non-fungible tokens, when they are linked to verifiable claims about the provenance of goods produced–for instance, in sustainable supply-chains, or if these tokens accord the holder an automated right to be paid for invoices when orders are delivered.</li>
                  <li><b>Renewable Energy Tokens</b> enable independent power producers to sell certified green electricity, or to claim Carbon Credits that can be sold as offsets. Non-fungible Renewable Energy Certificate (REC) tokens may include the right for a token-holder to mint fungible fractional units of the REC tokens, to trade for electricity supply.</li>
                </ul>`,
                `These examples only begin to demonstrate the incredible potential for configuring classes of tokens for different Earth Token use-cases. For this challenge, you will build and demonstrate innovative ways for Earth Tokens to be issued, traded, and used in Sustainable DeFi and Regenerative Finance (ReFi) applications.`,
                `Suggested areas for innovation include (but are not limited to):`,
                `<ul>
                  <li>Great UX for creating and using Token Templates to mint and different classes of Earth Tokens.</li>
                  <li>Decentralized marketplace mechanisms for trading different classes of Earth Tokens. This may include new types of services that enable tokens of different classes to be bought or sold, auctioned, used as collateral, lent or borrowed, used as offsets, etc. </li>
                  <li>Automated market-makers for trading heterogeneous token classes, such as a liquidity mechanism for pooling fungible with non-fungible token classes.</li>
                  <li>Authorization Capabilities (zCaps) to provide secure delegated authorization mechanisms for interacting with token services.</li>
                  <li>Clever ways of using Liquid Staking or other token derivatives, to unlock capital for sustainable development and ecological regeneration.</li>
                  <li>Software tooling or integrations that further enable Earth Token use-cases.</li>
                </ul>`,
              ],
              requirements: [
                `Address a real-world need that is relevant to the Interchain Earth Mission, based on a real or fictitious use-case that has a great user story.`,
                `Implement the Interchain Identifiers (IID) specification and Token Templates.`,
                `Use the standard Cosmos SDK modules, and/or add new features to existing Cosmos modules, and/or create new module/s.`,
                `(Optionally) build on the ixo-Webclient, with the possibility of adding new features and/or integrations. `,
                `(Optionally) contribute new software tooling for implementers of Earth Token applications.`,
              ],
              sources: {
                'Interchain Identifiers and Tokens Specifications':
                  'https://w3id.org/earth/ns',
                'Cosmos SDK Modules':
                  'https://docs.cosmos.network/v0.42/building-modules/intro.html',
                'InterWork Alliance Token Taxonomy Framework':
                  'https://docs.cosmos.network/v0.42/building-modules/intro.html',
                'BlockScience Community Currencies ':
                  'https://github.com/BlockScience/Community_Inclusion_Currencies',
                'The ixo Foundation Github Repo.':
                  'https://github.com/ixofoundation',
                'ixo Developer Documentation':
                  'https://docs.ixo.foundation/ixo/',
                'Risk-Adjusted Bonding Curves':
                  'https://github.com/BlockScience/Risk-Adjusted-Bonding-Curves',
                'ixo Pandora Testnet': 'https://testnet.ixo.world',
                'ixo Web Application UAT': 'https://app-uat.ixo.world/',
                'ixo Discord community': 'https://discord.gg/mCJue97UZa',
                'ixo Discourse discussion forum ': 'https://forum.ixo.world',
                'Developers Slack for HackAtom':
                  'https://join.slack.com/share/enQtMjY2ODY2NzYyMDU3Ni0yMmRjNWNjY2U2ZmQyZDg0YmJhYzkzMWYxMzg3MzM2MWNlMjU1MDhkMTk1ZTQ4NTMxNmJlMGQzZTA2NjMyYjA5',
                'Code with Us workshop on the ixo Bonds Module':
                  'https://www.youtube.com/watch?v=pIpVDJLbKFQ',
                'Peoples Money':
                  'https://unsdg.un.org/resources/peoples-money-harnessing-digitalization-finance-sustainable-future',
              },
            },
          ],
        },
      ],
    }
  },
  computed: {},
  methods: {
    open(info) {
      this.currentItem = info
      this.visible = true
    },
    closeModal() {
      this.visible = false
    },
  },
}
</script>

<style lang="stylus" scoped>
.section
  @media $breakpoint-medium
    padding-top var(--spacing-6)

.rewards
  gap var(--grid-gap-x)

.prize-item
  grid-column 1 / -1
  display flex
  flex-direction column
  justify-content space-between
  background: #171717
  padding var(--spacing-7)
  cursor pointer
  border-radius var(--spacing-4)
  @media $breakpoint-medium
    grid-column span 4
  @media $breakpoint-xl
    grid-column span 6

.event-header
  .title
  .info
    grid-column 1 / -1
    @media $breakpoint-xl
      grid-column span 6
  .prize
    grid-column 1 / -1
    @media $breakpoint-xl
      grid-column span 6
      text-align right

.challenges
  gap var(--grid-gap-x)

.challenge
  grid-column 1 / -1
  display flex
  flex-direction column
  justify-content space-between
  padding var(--spacing-7)
  border-radius var(--spacing-4)
  background-color #171717
  @media $breakpoint-medium
    grid-column span 4

.modal
  padding var(--spacing-7) var(--spacing-5)
  @media $breakpoint-medium
    padding var(--spacing-10) var(--spacing-10)
  .icon-challenge
    width 1.5rem
    height auto
    @media $breakpoint-medium
      width 4rem

.links
  list-style none
  padding 0
  &__item
    padding var(--spacing-5) 0
    list-style none
    border-bottom 1px solid var(--border)
    &._sources
      &:last-child
        border-bottom 0
  &__label
    display inline-block
    margin-right var(--spacing-4)

.prizes-list
  display flex
  &__item
    margin-left var(--spacing-6)
    .tm-title
      font-weight var(--font-weight-medium-2)
    &:first-child
      margin-left 0
      .tm-title
        font-weight var(--font-weight-bold-2)
        letter-spacing var(--letter-spacing-bold-2)
</style>
