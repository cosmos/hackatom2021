<template>
  <section class="tm-section section pb0">
    <div class="tm-section-container tm-container">
      <div class="schedule">
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
                  <div class="mt-4 tm-grid-base">
                    <div class="info tm-muted">
                      {{ category.info }}
                    </div>
                    <div class="prize tm-title tm-lh-title tm-rf1 tm-medium">
                      {{ category.prize }}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p class="tm-muted">
                  {{ category.details }}
                </p>
                <div v-if="category.challenges" class="mt-8 tm-grid-base">
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
                        Challenge #{{ count + 1 }}
                      </div>
                      <div class="tm-lh-copy tm-rf-1 tm-normal tm-muted">
                        <div v-if="challenge.info">
                          <p v-for="info in challenge.info" :key="info">
                            {{ info }}
                          </p>
                        </div>
                        <ul v-else>
                          <li v-for="info in challenge.challenge" :key="info">
                            {{ info }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!-- <div class="mt-8">
                      <tm-button
                        variant="text"
                        background-color="transparent"
                        color="var(--white)"
                        @click.native="open(challenge)"
                      >
                        More details <span class="icon__right">&rarr;</span>
                      </tm-button>
                    </div> -->
                  </div>
                </div>
              </div>
            </tm-collapse-item>
          </div>
        </tm-collapse>
      </div>
    </div>
    <!-- <modal-challenge :visible="showModal" /> -->
  </section>
</template>

<script>
// import TmButton from './TmButton.vue'
// import ModalChallenge from './ModalChallenge.vue'
import IconChallenge from '~/components/icons/IconChallenge.vue'

export default {
  components: {
    // TmButton,
    // ModalChallenge,
    IconChallenge,
  },
  data() {
    return {
      showModal: false,
      currentItem: null,
      categories: [
        {
          title: 'Ethereum on Cosmos',
          info: 'Ethereum projects on Cosmos SDK',
          prize: 'Constellation Prize',
          details:
            'On blockchains, the goal of smart contracts is to simplify transactions between both anonymous and identified parties. Smart contracts are executed when predetermined conditions are met, such as the fulfillment of an agreement or completion of a task. Smart contracts are typically used to automate the execution of an agreement so that all participants can be certain of the outcome, without depending on any intermediary involvement. Smart contracts that currently live on the Ethereum Virtual Machine (EVM) are written in Solidity. Developers will explore among others rewriting an existing Solidity project as a Cosmos SDK blockchain that automates transactions on the blockchain or any other dedicated solution that could bridge the two ecosystems.',
          challenges: [
            {
              challenge: [
                'Rewrite an existing Solidity project as a Cosmos SDK blockchain that automates transactions on the blockchain.',
                'Take an existing Smart Contract and rewrite the same logic in a Cosmos SDK module in Golang.',
              ],
              requirements: [
                'The participating developer must be the principal owner of the project or if the participant is not the owner, the project license must permit the participant to use new code in order to own the project for the purpose of the HackAtom. Participant has the sole responsibility to verify that the requirements are fulfilled in advance of participation.',
                'The project is not already built with the Cosmos SDK.',
              ],
              sources: {
                'cosmos-sdk': 'https://github.com/cosmos/cosmos-sdk/',
                starport: 'https://github.com/tendermint/starport ',
                ibc: 'https://github.com/cosmos/ibc',
                'tutorials.cosmos':
                  'https://tutorials.cosmos.network/connecting-to-testnet/',
                'cosmos.network': 'https://v1.cosmos.network/tools',
              },
            },
          ],
        },
        {
          title: 'Starport',
          info: 'Blockchains built using Starport',
          prize: 'Starport Prize',
          details:
            'Starport is the all-in-one platform to build, launch, and maintain any crypto application on a sovereign and secured blockchain. Starport CLI is a powerful developer tool for scaffolding blockchains, generating code, running a node in development, and much more. Builders will need to implement new scaffolding functionality or improve the functionality, reliability, or flexibility of Starport CLI or introduce new functionality that is useful for a large number of developers.',
          challenges: [
            {
              challenge: [
                'Improve the functionality, reliability, or flexibility of Starport CLI.',
                'Implement new scaffolding functionality.',
                'Introduce new functionality that is useful for a large number of developers.',
                'Do not duplicate functionality of an existing module. For example, don’t add a command to scaffold a DEX.',
                'Improve code generation both in terms of underlying logic and output.',
                'Enhance the process of running a blockchain node in development.',
                'Come with other creative ways of making Starport CLI even more awesome!',
              ],
              requirements: [
                'Avoid duplicating existing functionality where the only difference is using a different library/framework. For example, Starport already comes with a Vue web template, please, do not implement a template using React or any other framework.',
              ],
              sources: {
                starport: 'https://github.com/tendermint/starport ',
                'docs.starport.network': 'https://docs.starport.network',
                'cosmos-sdk': 'https://github.com/cosmos/cosmos-sdk/',
                ibc: 'https://github.com/cosmos/ibc',
              },
            },
          ],
        },
        {
          title: 'Interoperability',
          info: 'IBC use cases',
          prize: 'Interstellar Prize',
          details:
            'Alongside the Tendermint high-performance Byzantine fault-tolerant (BFT) consensus engine, one of the main innovations of the Cosmos Network is the robust and secure Inter-Blockchain Communication protocol (IBC), the Cosmos standard for interoperability. This protocol enables communication and digital asset transfers across an ever-expanding network of interconnected blockchains. Developers will need to create new, innovative ways to highlight the possibilities of blockchain interoperability using the IBC protocol such as viable implementations, use cases, data formats or others.',
          challenges: [
            {
              challenge: [
                'To find viable implementations and use cases using IBC',
                'Build new innovative ways to highlight the possibilities of blockchain interoperability using the IBC protocol.',
                'To explore new data formats that can be used with IBC',
                'To build interoperable: ',
                'smart contract execution',
                'interchain accounts ',
                'interchain staking',
                'interchain security',
              ],
              requirements: [
                'Participants are welcome to build and improve an existing proof of concept or to build a new proof of concept from scratch.',
                'Have or build a Cosmos SDK blockchain with IBC enabled',
              ],
              sources: {
                'cosmos-sdk': 'https://github.com/cosmos/cosmos-sdk/',
                starport: 'https://github.com/tendermint/starport ',
                ibc: 'https://github.com/cosmos/ibc',
                'connecting-to-testnet':
                  'https://tutorials.cosmos.network/connecting-to-testnet/ ',
                ibcprotocol: 'https://ibcprotocol.org/faq/',
                cosmwasm:
                  'https://medium.com/cosmwasm/a-peek-at-multi-chain-contracts-93cde6875cf5',
                chainapsis:
                  'https://medium.com/chainapsis/why-interchain-accounts-change-everything-for-cosmos-interoperability-59c19032bf11',
                chjango:
                  'https://chjango.medium.com/the-future-of-staking-is-going-into-hyperdrive-b8c84b97108',
                'Interchain Security is coming to the Cosmos hub':
                  'https://blog.cosmos.network/interchain-security-is-coming-to-the-cosmos-hub-f144c45fb035',
              },
            },
          ],
        },
        {
          title: 'End-User Apps',
          info: 'Create an End-User App',
          prize: 'Solar Prize',
          details:
            'Accessibility is a primary driver to entering the blockchain ecosystem, yet one of the most challenging tasks in blockchain is to make cryptocurrency and digital asset ownership accessible to end-users. Applications should manage keys in a secure manner allowing users to access their assets in an easy way and improving the overall user experience for beginners and advanced users. Developers are expected to build applications that make features more accessible or provide a more intuitive experience for an end-user.',
          challenges: [
            {
              type: 'Wallet UX using WebAuthn',
              info: [
                'Implementing support for WebAuthn can dramatically improve the user experience using web wallets. End-users for the most part don’t know much about the underlying technology and very often cannot be relied on to keep private keys secure and make proper backup of mnemonics. This is where WebAuthn comes in. A cutting edge web browser API allows apps to sign data (such as blockchain transactions, for example) using a built-in authenticator.',
              ],
            },
            {
              type: 'An App that makes blockchain features accessible',
              info: [
                'Many tools on the blockchain, for example IBC, Multisignatures, more complex authentication methods or a unique combination of features still did not make it to a good front end or application for anyone to use.',
                'Develop an App that allows users to use these tools with a good user experience.',
              ],
              challenge: [
                'Build a wallet implementation that broadcasts transactions that are signed using the WebAuthn browser API.',
                'Optional: Implement a module that allows a user to sign transactions using WebAuthn from more than one device (such as a laptop and a mobile phone) as a single user/account (from blockchain’s point of view). Map public keys of both devices to a single account on-chain.',
                'Use biometric transaction signing.',
              ],
              requirements: [
                'Implementation of Cosmos SDK transaction signing using WebAuthn',
                'Key management',
                'User interface in a mobile app or a web browser',
              ],
              sources: {
                'cosmos-sdk': 'https://github.com/cosmos/cosmos-sdk/',
                starport: 'https://github.com/tendermint/starport',
                ibc: 'https://github.com/cosmos/ibc',
                'connecting-to-testnet':
                  'https://tutorials.cosmos.network/connecting-to-testnet/',
                wallets: 'https://cosmos.network/ecosystem/wallets/',
                'cosmos-wallet': 'https://www.ledger.com/cosmos-wallet',
                'developers.ledger.com': 'https://developers.ledger.com/',
                'webauthn.guide': 'https://webauthn.guide/',
                'Web Authentication API':
                  'https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API',
                webauthn: 'https://www.w3.org/TR/webauthn-2/',
              },
            },
          ],
        },
        {
          title: 'DeFi',
          info: 'DeFi app or module with the Cosmos SDK',
          prize: 'Galaxy Prize',
          details:
            'DeFi is a blockchain-based alternative financial system to the legacy system of banks, exchanges, insurance companies, mortgage providers, etc., but reimagined from the ground up with no intermediaries in the middle. Unlike traditional finance, with no gatekeepers to turn down your application, DeFi lowers the barrier to entry, allowing more people to access financial services, take out a collateralized loan, or earn a yield on their assets. Help expand the capabilities of DeFi by building an app or module with the Cosmos SDK.',
          challenges: [
            {
              challenge: [
                'To build a general tool for loan or insurance modules',
                'Collateral-less loan (Flash Loan)',
                'Non-custodial asset borrowing (earn interest on deposit)',
                'Examples for inspiration are Cosmos SDK Loan or Insurance Module',
                'Use Gravity DEX and the Cosmos SDK to build a new loan or insurance module.',
              ],
              requirements: [
                'Any prerequisite knowledge',
                'Using Gravity DEX is mandatory for this challenge',
              ],
              sources: {
                'cosmos-sdk': 'https://github.com/cosmos/cosmos-sdk/',
                starport: 'https://github.com/tendermint/starport',
                ibc: 'https://github.com/cosmos/ibc',
                'connecting-to-testnet':
                  'https://tutorials.cosmos.network/connecting-to-testnet/',
                'gravity-dex': 'https://cosmos.network/gravity-dex/',
                DeFi: 'https://blog.cosmos.network/bringing-defi-to-cosmos-the-gravity-dex-protocol-is-live-a0c5857d6267',
              },
            },
          ],
        },
        {
          title: 'Gaming',
          info: 'Gaming apps on Cosmos SDK',
          prize: 'Starship Prize',
          details:
            'Blockchain has the potential to completely restructure the gaming industry. Blockchain gaming uses true item ownership from the same technology that lies at the core of cryptocurrencies. Be the game developer that unlocks the potential of gaming with Cosmos. Build the future of gaming with the Cosmos SDK. Builders will explore ideas using the Cosmos tech like creating a game with meaningful gameplay behavior mediated through state changes, a decentralized virtual world or others.',
          challenges: [
            {
              challenge: [
                'Build a game with meaningful gameplay behavior mediated through state changes using the Cosmos SDK blockchain framework.',
                'Build a decentralized virtual world with Cosmos Network.',
                'Build a bridge to a smart contracting zone to play chess',
                'Implement secure poker',
                'Build an IBC Module',
              ],
            },
            {
              info: ['Build an auction system using Pylon'],
            },
            {
              info: [
                'Create an NFT recipe that burns Regen when minted for carbon offset',
              ],
              reward: [
                'NFT using Pylons',
                'Collectables',
                'Support transferable assets',
                'Support exchangeable assets',
                'Optional: Support in-app purchases',
              ],
              requirements: [
                'Mobile or web client',
                'Relatively unobtrusive chain interaction',
                'Chain state is saved on chain and updated in real time with gameplay',
              ],
              sources: {
                'cosmos-sdk': 'https://github.com/cosmos/cosmos-sdk/',
                starport: 'https://github.com/tendermint/starport',
                ibc: 'https://github.com/cosmos/ibc',
                'connecting-to-testnet':
                  'https://tutorials.cosmos.network/connecting-to-testnet/',
                wallets: 'https://v1.cosmos.network/ecosystem/wallets',
              },
              workshops: [
                'How to use the recipe system, Alex Johnson',
                'How to use the flutter SDK, Michael Soafer and Jewad',
                'IBC: Advanced recipe for doing games',
                'State machine, how to connect, and how to use IBC to bring in tokens for payment',
              ],
            },
          ],
        },
        {
          title: 'Earth',
          info: 'Earth Sustainability and Ecological Regeneration on Cosmos SDK',
          prize: 'Earth Prize',
          details:
            'The ultimate purpose of the Internet of Blockchains is to empower people everywhere with digital technologies that enable communities to prosper, regenerate the planet, and respond more effectively to the climate crisis. Change the state of the planet by building modules, accessible apps and integrations for local currencies, self-sovereign identity, non-fungible impact tokens, verification oracles, decentralised impact exchanges, and earth intelligence data. This is the Interchain Earth Mission!',
        },
      ],
    }
  },
  computed: {},
  methods: {
    open(info) {
      this.currentItem = info
      this.showModal = true
    },
  },
}
</script>

<style lang="stylus" scoped>
.section
  @media $breakpoint-medium
    padding-top var(--spacing-6)

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

.challenge
  grid-column 1 / -1
  display flex
  flex-direction column
  justify-content space-between
  padding var(--spacing-7)
  border-radius var(--spacing-4)
  background-color #171717
  @media $breakpoint-medium
    grid-column span 3
  @media $breakpoint-large
    grid-column span 4
</style>
