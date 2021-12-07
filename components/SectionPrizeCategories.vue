<template>
  <section class="tm-section section">
    <div class="tm-section-container tm-container">
      <div class="header tm-text-center">
        <div class="tm-overline tm-rf0 tm-lh-title tm-medium tm-muted">
          Winners
        </div>
        <h2
          class="
            mt-3
            tm-title tm-rf5 tm-rf6-m-up tm-rf5-l-up tm-lh-title tm-bold
          "
        >
          Hall of fame
        </h2>
      </div>

      <div class="schedule mt-8">
        <div class="tm-grid-base rewards mb-6">
          <div
            v-for="category in prize"
            :key="category.title"
            class="prize-item"
          >
            <graphics-coins v-if="category.graphics" class="graphics" />
            <div>
              <icon-challenge />
              <div class="mt-4 tm-title tm-lh-titlle tm-rf2 tm-bold">
                {{ category.title }}
              </div>
              <p class="description mt-5 tm-lh-copy tm-rf-1 tm-muted">
                {{ category.description }}
              </p>
            </div>
            <div class="mt-8 prizes-list">
              <div v-if="category.winner" class="prizes-list__item">
                <div class="tm-overline tm-lh-copy tm-rf-1 tm-muted">Team</div>
                <div class="tm-bold tm-rf1 tm-title tm-lh-title">
                  {{ category.winner }}
                </div>
              </div>
              <div class="prizes-list__item">
                <div class="tm-overline tm-lh-copy tm-rf-1 tm-muted">
                  Reward
                </div>
                <div class="tm-bold tm-rf1 tm-title tm-lh-title">
                  {{ category.prize }}
                </div>
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
                    <div
                      class="
                        title
                        tm-overline tm-rf0 tm-lh-title tm-medium tm-muted
                      "
                    >
                      {{ category.title }}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div v-if="category.challenges" class="challenges tm-grid-base">
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
                    </div>
                    <div
                      v-if="challenge.winners"
                      class="mt-8 tm-lh-copy tm-rf1 tm-normal tm-muted"
                    >
                      <ul class="links">
                        <li
                          v-for="winner in challenge.winners"
                          :key="`${challenge.type}_${winner.team}`"
                          class="links__item tm-rf0"
                        >
                          <div
                            class="
                              tm-overline tm-rf-1 tm-lh-title tm-medium tm-muted
                            "
                          >
                            {{ winner.title }}
                          </div>
                          <div class="links__row">
                            <tm-link
                              v-if="winner.link"
                              :href="winner.link"
                              class="
                                tm-link-external tm-title tm-lh-title tm-bold
                              "
                            >
                              {{ winner.team }}
                            </tm-link>
                            <div class="tm-title tm-lh-title tm-bold">
                              {{ winner.prize }}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </tm-collapse-item>
          </div>
        </tm-collapse>
      </div>
    </div>
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
      prize: [
        {
          title: 'Grand Prize',
          prize: '$25K',
          graphics: true,
          description:
            'The Grand Prix Prize went to the project that successfully combined at least two different challenges.',
          winner: 'Team Name',
        },
        {
          title: 'Community Award Prize',
          prize: '$10K',
          description:
            'The Community Choice award went to the project with the most hearts on DevPost.',
          winner: 'Team Name',
        },
      ],
      categories: [
        {
          title: 'Ethereum on Cosmos',
          challenges: [
            {
              type: 'Bitsong',
              title: 'Bitsong Challenge',
              preview: `Bitsong's HackAtom VI challenge proposes the migration of smart contracts on the popular OpenSea NFT marketplace to Cosmos SDK.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
            {
              type: 'Evmos',
              title: 'Evmos Challenge',
              preview: `Evmos aims to be the EVM Hub of Cosmos, making it easy for smart contracts to deploy and communicate within the Cosmos ecosystem.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
          ],
        },
        {
          title: 'Starport',
          challenges: [
            {
              type: 'Starport',
              title: 'Code Scaffolding Challenge',
              preview: `Currently, Starport depends on string placeholders being present in modules’ files. Placeholders work, but if another solution (likely, based on code analysis) is found, this could improve Starport's reliability even further.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
            {
              type: 'Starport',
              title: 'Local Testnet Challenge',
              preview: `Starport chain serve is the most convenient way to start a blockchain node for development purposes. Currently, this command sets up a single node testnet with automatic code reloading. Enhance this functionality of Starport, for example, to support multi-node local testnets.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
            {
              type: 'Starport',
              title: 'Build Process and Configuration Challenge',
              preview: `Starport uses an advanced build process to compile the source code of a chain into a binary. It’s both sophisticated and easy to use, but there is always room for improvement. To win this challenge, enhance the build process so that it’s more flexible, yet can be used even by beginner developers.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
            {
              type: 'Starport',
              title: 'A Plugin System Challenge',
              preview: `A program like Starport can definitely benefit from a flexible plugin system that will allow developers to add functionality to Starport on the fly. Your challenge is to build one!`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
          ],
        },
        {
          title: 'Interoperability',
          challenges: [
            {
              type: 'Akash',
              title: 'Akash Challenge',
              preview: `Akash's HackAtom VI challenge asks participants to develop the container images, SDL files, and readme.dm documentation needed to run chain nodes from Cosmos chains that are not currently in the repository. `,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
            {
              type: 'Sentinel',
              title: 'Sentinel Challenge',
              preview: `Sentinel's IBC challenge is a tough one to tackle but could help to solve an important problem in the wider Cosmos ecosystem. Participants must build a fast, reliable, and unbiased randomness generator which could ideally be used for validator selection.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
            {
              type: 'Sifchain',
              title: 'Sifchain Challenge',
              preview: `Developers will need to create new, innovative ways to highlight the possibilities of blockchain interoperability using the IBC protocol such as viable implementations, use cases, data formats or others.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
            {
              type: 'Pylons',
              title: 'Pylons Challenge',
              preview: `For this challenge, Pylons wants you to build new, innovative ways to highlight the possibilities of blockchain interoperability using the IBC protocol—such as viable implementation, use cases, and data formats—using the Cosmos SDK.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
            {
              type: 'Agoric',
              title: 'Cross Chain Liquidity Mining Challenge',
              preview: `Agoric's hackathon challenge is to build a set of Agoric smart contracts on Agoric that provide flexible liquidity mining options to Cosmos projects based on an Osmosis LP token.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
          ],
        },
        {
          title: 'End-User Apps',
          challenges: [
            {
              type: 'Nym',
              title: 'NYM Challenge',
              preview: `The challenge is to create a Nym service provider (application) which offers cloud file storage, and a GUI where users interact with the service provider, all via the Nym mixnet.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
            {
              type: 'Injective',
              title: 'Injective Challenge',
              preview: `Injective's HackAtom VI challenge is to build a new simple single-page application trading interface for trading spot and perpetual markets. The purpose of this is to provide mass market users (not pro traders) an accessible, user-friendly interface for trading (Like Matcha on Ethereum, for example).`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
            {
              type: 'LikeCoin',
              title: 'Likecoin Challenge',
              preview: `In this challenge, LikeCoin is seeking developers who can develop a wallet interface to allow users to manage their ISCN records.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
            {
              type: 'Archway',
              title: 'Archway Challenge',
              preview: `Archway's HackAtom VI challenge is to create a base NFT marketplace on Archway’s testnet. This entails the marketplace smart contracts as well as front-end that will allow users to buy, sell, and trade CW721 tokens in exchange for CW20 tokens.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
          ],
        },
        {
          title: 'DeFi',
          challenges: [
            {
              type: 'Kava',
              title: 'Kava Challenge',
              preview: `Kava's HackAtom VI challenge asks you to build a fully autonomous options protocol as a Cosmos SDK module. You can assume that you have access to a price oracle.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
            {
              type: 'Tendermint',
              title: 'Tendermint Challenge',
              preview: `Build a general tool for Loan or Insurance modules using the gravity dex.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
            {
              type: 'Ki Foundation',
              title: 'Ki Foundation Challenge',
              // preview: `Build a general tool for Loan or Insurance modules using the gravity dex.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
            {
              type: 'Osmosis',
              title: 'Osmosis Challenge',
              preview: `Build something cool with Osmosis. Bonus points if you incorporate ION.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
          ],
        },
        {
          title: 'Gaming',
          challenges: [
            {
              type: 'Pylons',
              title: 'Pylons Challenge',
              preview: `Build a game with meaningful gameplay behavior mediated through state changes using the Cosmos SDK blockchain framework, or build a decentralized virtual world with Cosmos network — utilizing the Cosmos SDK + Pylons SDK.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
            {
              type: 'Secret Network',
              title: 'Secret Network Challenge',
              preview: `Secret’s challenge is to build a game on Secret Network using CosmWasm, Secret NFTs, and on-chain randomness.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
          ],
        },
        {
          title: 'Earth',
          challenges: [
            {
              type: 'Regen',
              title: 'Regen Network Challenge',
              preview: `Regen Network's challenge for HackAtom VI under the EARTH category is to bridge ecocredits into the interchain ecosystem—by implementing an IBC application that allows users to move these new types of ecological assets across different blockchains.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
            {
              type: 'Pylons',
              title: 'Grant.fish and Juno',
              preview: `For this important challenge, Juno and grant.fish are teaming up to ask you to change the state of the planet by building modules, accessible apps, and integrations for local currencies, self-sovereign identity, non-fungible impact tokens, verification oracles, decentralized impact exchanges, and earth intelligence data.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
            {
              type: 'ixo Foundation',
              title: 'The Earth Crisis Challenge',
              preview: `Your challenge is to build and demonstrate applications using the Internet of Impact, or software components that add capabilities to The Impact Stack, for preventing and responding to specific types of real-world Earth Crisis events.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
            {
              type: 'IXO',
              title: 'The Earth Tokens Challenge',
              preview: `For this challenge “Earth Tokens” are defined as classes of tokens that are created and used for the purpose of sustainable socio-economic development, climate action, and ecological regeneration.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Team Name',
                  link: 'https://',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Team Name',
                  link: 'https://',
                },
              ],
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.section
  @media $breakpoint-medium
    padding-top var(--spacing-6)

.rewards
  gap var(--grid-gap-x)

.description
  max-width 19.375rem

.graphics
  position absolute
  top -3rem
  right -3rem
  width 13rem
  height 13rem
  @media $breakpoint-large
    right -1rem
  @media $breakpoint-xl
    top -0.5rem
    right 1.5rem
    width 15rem
    height 15rem

.prize-item
  position relative
  grid-column 1 / -1
  display flex
  flex-direction column
  justify-content space-between
  background: #171717
  padding var(--spacing-7)
  border-radius var(--spacing-4)
  @media $breakpoint-medium
    grid-column span 4
  @media $breakpoint-xl
    grid-column span 6

.event-header
  .title
    grid-column 1 / -1
    @media $breakpoint-xl
      grid-column span 6

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

.links
  list-style none
  padding 0
  &__item
    padding var(--spacing-5) 0
    list-style none
    border-bottom 1px solid var(--border)
    &:last-child
      border-bottom 0
  &__row
    display flex
    justify-content space-between

.prizes-list
  display flex
  &__item
    margin-left var(--spacing-7)
    .tm-title
      font-weight var(--font-weight-medium-2)
    &:first-child
      margin-left 0
      .tm-title
        font-weight var(--font-weight-bold-2)
        letter-spacing var(--letter-spacing-bold-2)
</style>
