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
            <div
              v-if="category.winners"
              class="mt-8 tm-lh-copy tm-rf1 tm-normal tm-muted"
            >
              <ul class="links">
                <li
                  v-for="winner in category.winners"
                  :key="winner.team"
                  class="links__item tm-rf0"
                  :class="category.winners.length === 1 && '_border-top'"
                >
                  <div class="links__row">
                    <div>
                      <div
                        class="
                          tm-overline tm-rf-1 tm-lh-title tm-medium tm-muted
                        "
                      >
                        Project
                      </div>
                      <tm-link
                        v-if="winner.link"
                        :href="winner.link"
                        class="tm-link-external tm-title tm-lh-title tm-bold"
                        :class="category.winners.length > 1 ? 'mt-1' : 'tm-rf1'"
                      >
                        {{ winner.team }}
                      </tm-link>
                    </div>
                    <div>
                      <div
                        class="
                          tm-overline tm-rf-1 tm-lh-title tm-medium tm-muted
                        "
                      >
                        Reward
                      </div>
                      <div
                        class="tm-title tm-lh-title tm-bold"
                        :class="category.winners.length > 1 ? 'mt-1' : 'tm-rf1'"
                      >
                        {{ winner.prize }}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
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
                    :class="challenge.isLight && '_light'"
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
                      <div
                        v-if="!challenge.winners"
                        class="mt-5 tm-lh-copy tm-rf0 tm-bold"
                      >
                        Submissions for this challenge did not meet the minimum
                        viable judging criteria
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
                              class="tm-link-external tm-title tm-lh-title"
                              :class="winner.title === '1st' && 'tm-bold'"
                            >
                              {{ winner.team }}
                            </tm-link>
                            <div
                              class="tm-title tm-lh-title"
                              :class="winner.title === '1st' && 'tm-bold'"
                            >
                              {{ winner.prize }}
                            </div>
                          </div>
                        </li>
                        <li
                          v-if="challenge.winners.length < 2"
                          class="links__item tm-rf0"
                        >
                          <div
                            class="
                              links__row
                              tm-title tm-lh-title tm-rf-1 tm-normal
                            "
                          >
                            The Challenge did not have a 2nd winning submission
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
          winners: [
            {
              prize: '$25,000',
              team: 'Geospatial Data oracle for Cosmos',
              link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/M2pBa29CbmVlWGllU2ZHYVdzcmFPSjdrMENrQ01obm5FVi9QMTZEc25jeUN0V0pLVnlYVCtCTVNvTU00YkRvNzZzWXRrR0ErZmxFOUdGbWU3eTBnZCtUTitTWkhUNWNUR1pLd0ZlTU9wUHM9LS1MUlVtbzZRbFRUelM5aGFlR1dUOXpRPT0=--9320db5391fa0d519110052f8ee96e145cd46044',
            },
            {
              prize: '$25,000',
              team: 'Arbiter DAO',
              link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/M2pBa29CbmVlWGllU2ZHYVdzcmFPSjdrMENrQ01obm5FVi9QMTZEc25jeUN0V0pLVnlYVCtCTVNvTU00YkRvNzZzWXRrR0ErZmxFOUdGbWU3eTBnZCtUTitTWkhUNWNUR1pLd0ZlTU9wUHM9LS1MUlVtbzZRbFRUelM5aGFlR1dUOXpRPT0=--9320db5391fa0d519110052f8ee96e145cd46044',
            },
          ],
        },
        {
          title: 'Community Award Prize',
          prize: '$10K',
          description:
            'The Community Choice award went to the project with the most hearts on DevPost.',
          winners: [
            {
              prize: '$10,000',
              team: 'Bookverse',
              link: 'https://cosmos-hackatom-vi.devpost.com/submissions/288064-bookverse',
            },
          ],
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
            },
            {
              type: 'Evmos',
              title: 'Evmos Challenge',
              preview: `Evmos aims to be the EVM Hub of Cosmos, making it easy for smart contracts to deploy and communicate within the Cosmos ecosystem.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Evmos.me',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/S2EzWGFXeHNxRHg1akZicVc0bUNPUjdhVTlsM0I3RzgzRnZIZ2FVanZMODc2bml2ZmpoZUl3ZTVnb1Y3MmxGTU52NlpnOTllQ2ZwU0t4M1g4WW9kR3pOaUFjaFhzV2VINlQ5S3dxMm5TeXc9LS1SVzNDeGovUU1Da2xNM2hlMmVJeDhBPT0=--e19df86c8cdc5e999d82c16198eb9193f1de1b67',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Evmos Balancer',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/OGVNcUJnZitWWE14TmdIWUJKcy9SSSsrK1Z0RUw5d1VHblI4RjdOekpPOTlpc0oyenFhVUxaRWRaK3FzYm5tQ3VobDFNc2hudGNZUnJ6MFFFT0t2azYvYlJKZXpwOW4xRndOZThnbk5VZ3M9LS1kWlo2eWlYTUwxdWtpZjhrZ2QzaENBPT0=--b9837e1a382d35db95e026d85e8f4b94ab2fa56c',
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
                  team: '(AST)Walking around starport',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/aDZQNmVKWlpHVGJTUFR1TlRjbndtUUh0R3pHelR1YUdxQXBBN2N5RTlPTldXNkJpL0gzdjdIWDVyMlVUOVJ5WTU3aEU5dEgxY2FDR3NMOE0yeTFQVk9BMTExUERwaVVFVEhKaXdzQUZrQU09LS1YTHN5dEswaWNlelZoWE5KdWp1d1N3PT0=--60928b878c400b2e196f553f71401eeaa68bedeb',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Code Scaffolding in Starportwith AST Analysis and Mutation',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/WS9CL3pWbzZFd2lKd3UvWWczcmZJU01rU1RqSnNNNE16cFA1bFU0QXkyWkRBNlJ4c0t6clB0S1Fta01XTVd4cFRLT3VzbGdWNStXY3VldnZNcFkrWTYreEJLUHJsUEpoeVFCOWZxNzFNZUE9LS1Vemo2VytTSytJcWxMUWRpUTJRRWRBPT0=--6d7cec00132d7d4a35047fd6f899d89d457e41ca',
                },
              ],
            },
            {
              type: 'Starport',
              title: 'Local Testnet Challenge',
              preview: `Starport chain serve is the most convenient way to start a blockchain node for development purposes. Currently, this command sets up a single node testnet with automatic code reloading. Enhance this functionality of Starport, for example, to support multi-node local testnets.`,
            },
            {
              type: 'Starport',
              title: 'Build Process and Configuration Challenge',
              preview: `Starport uses an advanced build process to compile the source code of a chain into a binary. It’s both sophisticated and easy to use, but there is always room for improvement. To win this challenge, enhance the build process so that it’s more flexible, yet can be used even by beginner developers.`,
            },
            {
              type: 'Starport',
              title: 'A Plugin System Challenge',
              preview: `A program like Starport can definitely benefit from a flexible plugin system that will allow developers to add functionality to Starport on the fly. Your challenge is to build one!`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Starport plugin system',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/TWpZNVJCcVNZcGdSVEpXc1Mya1RDOXhqbDliaFlOVUJadVJmeGlnTEdRR2FTMCs3Zlp0NlAzUGRVSjlDaTBVY0t0MWNGcjk0Qjc5MlM0SEZMTjRBTXZySEVRNEtNbWhLeTVBZVRMS0J6MzQ9LS1wVUVaTjRia3o3T0xvS2xkNkRNRVpBPT0=--4cbea939348c93acfa47f73ba6bf9fcc5d03b8a1',
                },
              ],
            },
            {
              type: 'Starport',
              title: 'Kickstater Prize',
              isLight: true,
              winners: [
                {
                  prize: '$3,000',
                  team: 'Starport Plugin System',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/Z1VqUDBWWE11QkVudHFFQ1gwQlZKZzJzVE9YSGJtK2ZEM0FkaDRoc1k2VUN6SHBzOXpST2UweXg1L0wxOTRoTDhzbU94SjhnUWZ0UmV3Tk4vS0pmejZFcTNLUjQreklQQ29NR2dQeEFvdnc9LS0wNSt5ZWFzZEFxdXE4UUJUdW1uQ29nPT0=--902785df4641bfc1522e46d5b1451a9bc687b7a3',
                },
                {
                  prize: '$3,000',
                  team: 'Starport Plugin Service',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/Vi96Wld3ZkdtRklFelNORCt1UkRLd3JtNkJzYkEzbDFUN2x2YWhRV3EwYlNPaVphTWc1aVVnTGVEOWZkMDBCQkhNbENselNVVE5uRVBjNFFiMWNGbGZHcDBqeENEOThpVG5nN1JOTGgrMzQ9LS0zTk80bEV0Z2NJTU1rOVF0TnUwY0FnPT0=--06e077b4c1532b799d9c2be074fc3b7424477ad2',
                },
                {
                  prize: '$3,000',
                  team: 'Starport - Code Scaffolding Challenge',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/Sk54Umt3ellod1l4YmR0ekJZcm1COE5MYlg0TFplQzRZdzZRcU8vekJvS2hJbTRSNGt5MENZdGVQeVI1ci9KMitpMVZjM2t0cnYwa0NNSHZMMFROQXg1OFgrYlMxQThpQVMwMkZYQ2VYaWM9LS1SMGhlRzBBOW9GNE14SnpScTRiWURnPT0=--54684bf68353b0aba54488dfe6f5b495f74b1851',
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
                  team: 'Cosmos Omnibus: Akash Interoperability',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/RGNkeVhFaVJBZUMvZEJvRzJDbW5EblI1YmsxcFhiQVF2ZTJlZlM0dkZJRjV5cndYT2s2Qy9iWVE0TkxYb1hWUEZVWFJTaEl5c3VxVS81QWkvRkZScStMa1lxeU0xRzNoTzVoUzlVd2QyeFE9LS1xdlUwNEZhMFh6WE10UXZSRWVIZC9RPT0=--7b51e0b2fea2ebab7a5dafed412545038718a5ac',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Akash Cosmos Omnibus evolution',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/cTg3S1VzUTQwM2c4UkpIamtJNTZQYlhuVm1idjFmdytqVVYzZ2lseHcrdXJMN0hTOVVnbDlhaE4welVVODhaYUlDWXhXdEVLODdtb1J1Yk91dFRkYTAyYmUrR0hqSGVuUCt1NEpmbmRhOFE9LS1NakpicW4raXZZVjU0eldDZ0NjcFF3PT0=--de02aaf9cc0d03056d46f41e87e0da31d6f7799d',
                },
              ],
            },
            {
              type: 'Sentinel',
              title: 'Sentinel Challenge',
              preview: `Sentinel's IBC challenge is a tough one to tackle but could help to solve an important problem in the wider Cosmos ecosystem. Participants must build a fast, reliable, and unbiased randomness generator which could ideally be used for validator selection.`,
            },
            {
              type: 'Sifchain',
              title: 'Sifchain Challenge',
              preview: `Developers will need to create new, innovative ways to highlight the possibilities of blockchain interoperability using the IBC protocol such as viable implementations, use cases, data formats or others.`,
            },
            {
              type: 'Pylons',
              title: 'Pylons Challenge',
              preview: `For this challenge, Pylons wants you to build new, innovative ways to highlight the possibilities of blockchain interoperability using the IBC protocol—such as viable implementation, use cases, and data formats—using the Cosmos SDK.`,
            },
            {
              type: 'Agoric',
              title: 'Cross Chain Liquidity Mining Challenge',
              preview: `Agoric's hackathon challenge is to build a set of Agoric smart contracts on Agoric that provide flexible liquidity mining options to Cosmos projects based on an Osmosis LP token.`,
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
                  team: 'NymDrive',
                  link: 'https://github.com/saleel/nymdrive',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Nym, The Eternity Service 2.0',
                  link: 'https://github.com/marius-avram/nym-file-service-provider',
                },
              ],
            },
            {
              type: 'Injective',
              title: 'Injective Challenge',
              preview: `Injective's HackAtom VI challenge is to build a new simple single-page application trading interface for trading spot and perpetual markets. The purpose of this is to provide mass market users (not pro traders) an accessible, user-friendly interface for trading (Like Matcha on Ethereum, for example).`,
            },
            {
              type: 'LikeCoin',
              title: 'Likecoin Challenge',
              preview: `In this challenge, LikeCoin is seeking developers who can develop a wallet interface to allow users to manage their ISCN records.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'ISCN wallet',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/bGxSUEswVlVPdDkwOFhMdDRjNnZNNTZJa0J1MnRwcTJSSDVoUThlaDB2SkpVU2dqK0NBRWZpd2Rra3pTZDJneVAydGhDNVFKWjBDdnpXYnk4ZTM2Uk5HU2lETHBPZ2ZZWkUvbXFuR1VMTEk9LS10RE91aU81S2I2ejg2c20xK01YZjdRPT0=--d938a1c8ef1002ecdb572ce453050bf4fe0ab705',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'SnappBlock',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/cFZibVVHSC9seGdyWHFZOTFyK0VMVUt3dURsT1J0ZjZWeVNmemVHQzFXcDJjQVNzS1EvYWU5azlYWlRiQ3dPKzNwWW1LajUzelBxNStaYmZ1eFRCTVVxV0VvZ2IxVFVhVFRWNzY1WitNSzA9LS1tbXNmNExJV1krV2poNU5hcmFIUkd3PT0=--cef190c148f34c08341ab61f97882211a5271adb',
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
                  team: 'Flea (Archway NFT Market)',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/MmhzbElOQitTbDVnbllCMUNZKy9lcmUvOVpsWDFrWVFST3lQYnhGazVraHV5MHZCMnhWYkhMWlNDaVRrUU5VK0pXYU05VXdvbHVQWjZzbC9uNnR6MG1tMTlFZTV4b3hjRFJlWHhHNU5ZSWM9LS0yU3hCbE04QklWN2lGR055cm5XT2VBPT0=--70cdd6ed545b118ae38c2c5d87a8f0a627f75ed3',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'NFText',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/TFFMQ1M2TjdTenIxOWVBOThMQUc5NXBJMURnWTBmMzBLMFJOZ0pCQnRhSTFiL0JjdGkwUTFZaThWWGp5RG0yR2lLcWprWFlPRzBOSnNmRzJpTStXbUFzcFJlSFJySnl3RFJIMGRUbHBvRWc9LS0xZjVyZlBFdU1zY2twcjV3cldMSXFRPT0=--4a64a05780487de9006aa27027af521dce88c0de',
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
            },
            {
              type: 'Tendermint',
              title: 'Tendermint Challenge',
              preview: `Build a general tool for Loan or Insurance modules using the gravity dex.`,
            },
            {
              type: 'Ki Foundation',
              title: 'Ki Foundation Challenge',
              preview: `Ki Foundation's challenge was to enable cross-chain interoperability with features like delegating, undelegating, sending coins, or operating an application-based action.`,
            },
            {
              type: 'Osmosis',
              title: 'Osmosis Challenge',
              preview: `Build something cool with Osmosis. Bonus points if you incorporate ION.`,
              winners: [
                {
                  title: '1st',
                  prize: '$35,000',
                  team: 'Osmosis (Semi-)Auto Compound',
                  link: 'https://cosmos-hackatom-vi.devpost.com/submissions/288104-osmosis-semi-auto-compound',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Classic Trading',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/RnVpVU1FYVBMbGdWaytRbGZEUCtqQXIxMWFaaWJ4K2N1aDZReTV1WWFnQmp2Qkl1NG1PVE92YUxsRlZpMUhUYWlRSXVJc2l3YjIvejNRZ0ZwY1crVjFOVlk3Qm1ITnV4dnlyVy9VUmsxak09LS1iRm9pQkY3NUxIVElnazBXUkxMeE9nPT0=--133cc05c16cc788c833b77650d26ad7aa12eb1d1',
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
                  team: 'CrowdControl NFT Arena',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/Tm85cUI5UGYyZGhzWUdmemtKTE9UYmJYNHVxTU8yVExyZDJCdVFpWC9TeUNLWXJpcTBYYU5iZDNza2gzb2xpY0xmdi9DanhERUxtWk5lQkpMSG56dFVZMFdUbkRrNDhOY0E5czJ0RFVHWUU9LS1ETXpwdFc4Sk02eVdiaSs1UXJpWVpnPT0=--96b8915d9ba3c79072c3ae9272fca863967f3e16',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'GetCrypto Game',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/WUhxMGd1WmVZbjA4ZzBsWURqUzVoSmJsZDNBMERGck1tdzltWEpXZEw5R2trU3hWNG8yTXZ2Z3loWGUxSjg1eDVtS245c041UExnUHVvcDJaKzhHa0tPYlpVWVkvK3JDazlCMUZleHhNMk09LS03R0Y2b2YxZ21iZWx2L3ZrR0t5WnlRPT0=--36c18175523e8e95204517bf4b5b50026e6bbd20',
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
                  team: 'prisnr.games',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/bEVsbzhXU0xpa1VGZE5FT1orM0ptOTRXYWo1TW0yR2RSb3NYdDJqUnZPdVJEK29meWNFM0dBT09WdDIwa0hFN05peUJ0ZmNnM3A4QlU3ZENvWUQ3K2p2RDdqT2lpRmtDVE4xVlNoUE05M2M9LS1nc05TVWg5QVJNUVN0YUpCSlpTZStBPT0=--a8d1a0ad7a31317a1a291bd6055fae83a755a9ce',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Poker Joker Dao',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/QkNYRFlKQ2VjeEFTMTZ6WUk4OTRpTVdNL3NMQUpoejdieSsyZ2VtcDZQZ21kekJ4TTh6b2MvbU1lY2tEQmprU1V6dkMvcFlMNnpXcFR4YTAvdGZHdDlsZ0dsZ3diV0lFdm1CaTU0R1pTb0k9LS04RWw5N2NNR0JKcW5UZjI4c3dwL0FnPT0=--ee11de1c5b2ba8e2da6537d909503209538b6840',
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
                  team: 'Geospatial Data oracle for Cosmos',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/UlU5YVp1UDEvWnd1MFk5Mnk0QVFiM3NSVEh6UHdra1lubWpnVWtBZVdlV21tVmhPR25wUkh6ZUlzMTk3Z3paSmVGWE8xWjY0Ri8zeFZnRVdmTkxmZGZKNCtLWXpXWjNrbm40ekNOc1l2OHc9LS14ZmtpaGNRSGdsK2dxcUNRUUxidFhnPT0=--a9050ecc77facca6adef3088602d7ea35e50511f',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Allocation Engine / opt.in',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/dktXK3IvYkNFQVRxTGZ3TURocjNSVUtvd3VpT3lYOEdoOHo2VkdLOHltRy9KTm0wUWo4cVZ0Uml6WDJ2bStMUGVHZ2xOWFl6c01KL1V6eE9rSUUyWExURzZYMmNEaFVzbWFla05KVjJJTDg9LS11bisxMDgyZ1VHcVZVQU4xdDM1eDlnPT0=--4d09b27e6402e67ff95083000378947b258ec9d6',
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
                  team: 'Wynd',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/cFhzemdkWXpZL0hPNnE2ejVydGQwTGhZWEtPVGVnSzZPdDZXcUszZXJuaWNDK0o1RFVVOXEvb3FudkN0OHhVNVBrREgwZ2dvY3AxeWwvWkxBcmVRY05IblJrc0xSdjFHWEl1SzRFUG94ZTQ9LS0wbitvSGNtSFBNNWw1R2lFVFZzVVdBPT0=--cefe19f4f5ca7d6516576bb5292fbf43bd892e80',
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
                  team: 'IXO Assistant Playground',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/YUs1Y2haOGtGU3lUbmE3dVE1QUxyRW1TWnd1SEVYUG82bVUyQ3hsbVVlYjVBZllxTkdVSk9HNFBBYk12TjBUUTNjait0eHlxSml5aVp4aGMxblVtNEEzRVMzdURsNmMwd1VrNjUvMGM2UjQ9LS1OSGJYZ2kxRDNuL2FUVjBCaVQxZFF3PT0=--b95bab667517b285ac8af80b20451429014ffe02',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Unremarkable project',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/TDRibWJvQXlSNUxXWjcrazhPRWY2aU5Laks0SzhhbzN0dmtJUlpLNkd5RTZTQWUvRjh2czlnYWNIQ0F2YWxuYTE5UFp4NU03dHY4NVpzVlM4SUhRbmlIUFZlKzYzdHZhTFMvKzFrM0sxSG89LS11SDlLL05HV2VicTc2eEdUUmpjWWJ3PT0=--c6cd0f8c218afb47a269416bfdac5b9801bb005e',
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
                  team: 'Arbiter DAO***',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/M2pBa29CbmVlWGllU2ZHYVdzcmFPSjdrMENrQ01obm5FVi9QMTZEc25jeUN0V0pLVnlYVCtCTVNvTU00YkRvNzZzWXRrR0ErZmxFOUdGbWU3eTBnZCtUTitTWkhUNWNUR1pLd0ZlTU9wUHM9LS1MUlVtbzZRbFRUelM5aGFlR1dUOXpRPT0=--9320db5391fa0d519110052f8ee96e145cd46044',
                },
                {
                  title: '2nd',
                  prize: '$15,000',
                  team: 'Boli Network',
                  link: 'https://cosmos-hackatom-vi.devpost.com/review/submissions/bGVCUjE4MWlpRjF6cmZWVlZWOS9KWlMvdXg2VzRlNTVkNmwrU25VdmNxMmc1UkNTOUJzL3ZMbUxHam0vVGZoZUI1c05jOWtGdk1hTHA2cGJCdmRpTFRkck9RK3hIelRteWFKZlVRZ1Ntenc9LS05WEE3Nlo1TkdSMElJRm1FM1RsaWRRPT0=--9d53927aae8032dad6590c4ebd6c28c4c4c307b4',
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
  &._light
    display block
    border: 1px solid #333
    background-color transparent
    .links__item
      &:first-child
        padding-top 0

.links
  list-style none
  padding 0
  &__item
    padding var(--spacing-5) 0
    list-style none
    border-bottom 1px solid var(--border)
    &:last-child
      border-bottom 0
    &._border-top
      border-top 1px solid var(--border)
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
