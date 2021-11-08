<template>
  <section class="tm-section">
    <div class="tm-section-container tm-container">
      <div class="tm-grid-base">
        <tm-link class="sponsor-card _starport" href="https://starport.com/">
          <div class="tm-overline tm-rf-1 tm-lh-title tm-medium tm-muted">
            Platinum Sponsor
          </div>
          <img
            :src="require(`~/assets/images/logos/logo-starport.svg`)"
            alt="starport"
            class="mt-7 logo-item"
          />
          <p class="mt-7 tm-muted tm-measure-narrower">
            The first complete developer environment for blockchain, Starport
            comes with all the tools you need to build, launch, and run your
            crypto application or product. Accelerate blockchain development so
            you can focus on writing business logic.
          </p>
          <p class="tm-solid tm-rf0 tm-medium">
            Discover <span class="icon__external">&nearr;</span>
          </p>
        </tm-link>

        <div class="sponsor-card _gold">
          <div class="tm-overline tm-rf-1 tm-lh-title tm-medium tm-muted">
            Gold sponsors
          </div>
          <div class="gold-sponsors">
            <tm-link
              v-for="sponsor in goldSponsors"
              :key="sponsor.name"
              :href="sponsor.link"
              class="mt-7 sponsor-item"
            >
              <img
                :src="
                  require(`~/assets/images/logos/logo-bounds-${sponsor.name}.svg`)
                "
                :alt="sponsor.name"
                class="logo-item"
              />
              <p class="mt-5 tm-muted">
                {{ sponsor.info }}
              </p>
            </tm-link>
          </div>
        </div>
      </div>

      <div class="sponsors">
        <div v-for="group in sponsors" :key="group.name" class="sponsor mt-8">
          <div class="name tm-overline tm-rf-1 tm-lh-title tm-muted">
            <span>{{ group.name }}</span>
          </div>
          <div class="logos animation" :class="group.prefix">
            <div class="logos__row animation" :class="group.prefix">
              <tm-link
                v-for="item in group.items"
                :key="item.name"
                class="sponsor-item logos__item"
                :href="item.llink"
              >
                <img
                  :src="
                    require(`~/assets/images/logos/logo-bounds-${item.name}.svg`)
                  "
                  :alt="item.name"
                  class="logo-item"
                />
              </tm-link>
            </div>
            <div class="logos__row animation" :class="group.prefix">
              <tm-link
                v-for="item in group.items"
                :key="item.name"
                class="sponsor-item logos__item"
                :href="item.llink"
              >
                <img
                  :src="
                    require(`~/assets/images/logos/logo-bounds-${item.name}.svg`)
                  "
                  :alt="item.name"
                  class="logo-item"
                />
              </tm-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      goldSponsors: [
        {
          name: 'pylons',
          info: 'Built on Cosmos, Pylons is a fast and interoperable system for brands and creators to build engaging products with meaningful NFT experiences.',
          link: 'https://www.pylons.tech/',
        },
        {
          name: 'ixo',
          info: 'The ixo Protocol is establishing the new standard for making verifiable claims about changes in the state of the world, and to tokenize verified outcome states as NFT Impact Tokens.',
          link: 'https://www.ixo.world/',
        },
      ],
      sponsors: [
        {
          name: 'Silver Sponsors',
          prefix: '_silver',
          items: [
            {
              name: 'archway',
              link: 'https://archway.io/',
            },
            {
              name: 'kava',
              link: 'https://www.kava.io/',
            },
            {
              name: 'bitsong',
              link: 'https://bitsong.io/',
            },
            {
              name: 'stake',
              link: 'https://stake.fish/en/juno/',
            },
            {
              name: 'sentinel',
              link: 'https://sentinel.co/',
            },
            {
              name: 'sifchain',
              link: 'https://sifchain.finance/',
            },
            {
              name: 'likecoin',
              link: 'https://about.like.co/',
            },
            {
              name: 'regen',
              link: 'https://www.regen.network/',
            },
            {
              name: 'akash',
              link: 'https://akash.network/',
            },
            {
              name: 'secret',
              link: 'https://scrt.network/',
            },
            {
              name: 'nym',
              link: 'https://nymtech.net/',
            },
            {
              name: 'evmos',
              link: 'https://evmos.org/',
            },
            {
              name: 'agoric',
              link: 'https://agoric.com/',
            },
            {
              name: 'ki',
              link: 'https://foundation.ki/',
            },
            {
              name: 'osmosis',
              link: 'https://osmosis.zone/',
            },
          ],
        },
        {
          name: 'Other Sponsors',
          prefix: '_other',
          items: [
            {
              name: 'umee',
              link: 'https://umee.cc/',
            },
            {
              name: 'injective',
              link: 'https://injectiveprotocol.com/',
            },
            {
              name: 'vitwit',
              link: 'https://www.vitwit.com/',
            },
            {
              name: 'iris',
              link: 'https://www.irisnet.org/',
            },
            {
              name: 'pers',
              link: 'https://persistence.one/',
            },
            {
              name: 'forte',
              link: 'https://www.forte.io/',
            },
          ],
        },
        {
          name: 'Media Sponsors',
          prefix: '_media',
          items: [
            {
              name: 'omniflix',
              link: 'https://www.omniflix.network/',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.tm-grid-base
  gap var(--grid-gap-x)

.sponsor-card
  overflow hidden
  position relative
  grid-column 1 / -1
  padding: var(--spacing-7)
  border: 1px solid #333
  border-radius: var(--spacing-4)
  @media $breakpoint-large
    grid-column span 4
  @media $breakpoint-xl
    grid-column span 6
  &._gold
    display flex
    flex-direction: column
    justify-content: space-between
  &._starport
    background linear-gradient(90deg, rgba(0, 0, 0, 0.74) 0%, rgba(0, 0, 0, 0.6) 100%)
    &:before
      content: ''
      position absolute
      z-index -1
      top 0
      left 0
      right 0
      bottom 0
      background-image url('~assets/images/bg/starport.jpg')
      background-position-x 45%
      transition: transform .25s $ease-out
      @media $breakpoint-medium
        background-size inherit
        background-position-x 5%
    &:hover,
    &:focus
      &:before
        transform: scale(1.03)

.gold-sponsors
  @media $breakpoint-medium
    display flex
    gap: var(--grid-gap-x)
    margin-top var(--spacing-6)
    > *
      width 50%
  @media $breakpoint-xl
    margin-top 0
  .logo-item
    transform-origin: center left
  .sponsor-item
    display block
    margin-top var(--spacing-8)
    @media $breakpoint-medium
      margin-top 0

.sponsor-item
  .logo-item
    transition: opacity .25s $ease-out, transform .25s $ease-out
  &:hover,
  &:focus
    .logo-item
      opacity .85
      transform: scale(1.1)

.name
  display flex
  align-items center
  height 4rem
  white-space nowrap
  flex-shrink 0

.logos
  position relative
  white-space: nowrap
  &:hover
    .logos
      &__row
        animation-play-state: paused
  &.animation
    overflow: hidden
    margin-left calc(-1 * var(--wrap-gap))
    margin-right calc(-1 * var(--wrap-gap))
    padding-left var(--wrap-gap)
    padding-right var(--wrap-gap)
    &._media
      overflow initial
      margin-left -1.75rem
      margin-right 0
      padding-left 0
      padding-right 0
    @media $breakpoint-xl
      &._other
        margin-left -1.75rem
        margin-right 0
        padding-left 0
        padding-right 0
    @media $breakpoint-xxl
      &._silver
        margin-left calc(-50vw + 43rem - var(--wrap-gap))
        margin-right calc(-50vw + 43rem - var(--wrap-gap))
        padding-left var(--wrap-gap)
        padding-right var(--wrap-gap)
  &__row
    display: inline-block
    &.animation
      animation: marquee 20s linear infinite
    &._media
      display none
      animation none
      &:first-child
        display flex
        flex-wrap wrap
        gap var(--spacing-7)
    &._other
      @media $breakpoint-xl
        display none
        animation none
    &._other
      &:first-child
        @media $breakpoint-xl
          display flex
          flex-wrap wrap
          gap var(--spacing-7)
  &__item
    display: inline-flex
    align-items center
    justify-content center
    width 10.5625rem
    height auto

@keyframes marquee
  from
    transform: translateX(0)
  to
    transform: translateX(-100%)
</style>
