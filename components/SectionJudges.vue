<template>
  <section class="tm-section section pb0">
    <div class="tm-section-container tm-container">
      <div class="graphics" />

      <p class="tm-overline tm-rf0 tm-lh-title tm-medium tm-muted">judges</p>
      <h2 class="mt-3 tm-title tm-lh-title tm-rf5 tm-bold">
        Introducing your<br />Judges
      </h2>
      <p class="mt-7 tm-title tm-lh-title tm-rf0 tm-normal tm-muted">
        More judges to be announced.
      </p>

      <div class="mt-9 tm-grid-base">
        <div v-for="item in judges" :key="item.icon" class="judge-card">
          <p
            class="tm-overline tm-rf-1 tm-title tm-lh-title tm-medium tm-muted"
          >
            {{ item.type }}
          </p>
          <div class="mt-5 images">
            <img
              :src="require(`~/assets/images/people/${item.avatar}.png`)"
              :alt="item.name"
              class="avatar"
            />
            <img
              :src="require(`~/assets/images/company/${item.companyLogo}.svg`)"
              :alt="item.name"
              class="company"
            />
          </div>
          <div class="mt-5 tm-title tm-lh-title tm-rf0 tm-bold">
            {{ item.name }}
          </div>
          <p class="mt-2 tm-lh-title tm-title tm-rf-1 tm-normal tm-muted">
            {{ item.company }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      judges: [
        {
          type: 'Board Judge',
          avatar: 'billy',
          name: 'Billy Rennekamp',
          company: 'Interchain Foundation',
          companyLogo: 'icf',
        },
        {
          type: 'Board Judge',
          avatar: 'denis',
          name: 'Denis Fadeev',
          company: 'Tendermint',
          companyLogo: 'tendermint',
        },
        {
          type: 'Board Judge',
          avatar: 'tobias',
          name: 'Tobias Schwarz',
          company: 'Tendermint',
          companyLogo: 'tendermint',
        },
        {
          type: 'Board Judge',
          avatar: 'sam',
          name: 'Sam Hart',
          company: 'Interchain Foundation',
          companyLogo: 'icf',
        },
        {
          type: 'Board Judge',
          avatar: 'peng',
          name: 'Peng Zhong',
          company: 'Tendermint',
          companyLogo: 'tendermint',
        },
        {
          type: 'Board Judge',
          avatar: 'zaki',
          name: 'Zaki Manian',
          company: 'Sommelier Protocol and Iqulsion',
          companyLogo: 'iqlusion',
        },
        {
          type: 'Board Judge',
          avatar: 'michael',
          name: 'Michael Sofaer',
          company: 'Pylons',
          companyLogo: 'pylons',
        },
        {
          type: 'Board Judge',
          avatar: 'shaun',
          name: 'Shaun Conway',
          company: 'IXO Foundation',
          companyLogo: 'ixo',
        },
        {
          type: 'Board Judge',
          avatar: 'ethan',
          name: 'Ethan Buchman',
          company: 'Interchain Foundation and Informal',
          companyLogo: 'informal',
        },
        {
          type: 'Judge',
          avatar: 'dave',
          name: 'Dave Hrycyszyn',
          company: 'NYM',
          companyLogo: 'nym',
        },
        {
          type: 'Judge',
          avatar: 'avatar',
          name: 'Bojan Angjelkoski ',
          company: 'Injective',
          companyLogo: 'injective',
        },
        {
          type: 'Judge',
          avatar: 'avatar',
          name: 'William Chong ',
          company: 'Likecoin',
          companyLogo: 'likecoin',
        },
        {
          type: 'Judge',
          avatar: 'srinivas',
          name: 'Srinivas Baride',
          company: 'Sentinel',
          companyLogo: 'sentinel',
        },
        {
          type: 'Judge',
          avatar: 'cory',
          name: 'Cory Levinson',
          company: 'Regen Network ',
          companyLogo: 'regen',
        },
        {
          type: 'Judge',
          avatar: 'andrea',
          name: 'Andrea Di Michele',
          company: 'Juno + Grant.fish',
          companyLogo: 'grantfish',
        },
        {
          type: 'Judge',
          avatar: 'avatar',
          name: 'Angelo Recca',
          company: 'Bitsong',
          companyLogo: 'bitsong',
        },
        {
          type: 'Judge',
          avatar: 'griffin',
          name: 'Griffin Anderson',
          company: 'Archway',
          companyLogo: 'archway',
        },
        {
          type: 'Judge',
          avatar: 'eric',
          name: 'Eric Zietlow',
          company: 'Akash',
          companyLogo: 'akash',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.section
  position relative
  @media $breakpoint-large
    margin-top var(--spacing-9)
  .tm-grid-base
    gap var(--spacing-8) var(--grid-gap-x)

.graphics
  position absolute
  width 111rem
  height 111rem
  top: 37%
  left: 50%
  background: radial-gradient(50.22% 50.22% at 50.22% 50.22%, #FB6464 0%, rgba(0, 0, 0, 0) 100%)
  filter: blur(42.0853px)
  transform: translate(-105%, -50%)

.judge-card
  grid-column 1 / -1
  @media $breakpoint-large
    grid-column span 3

.images
  position relative
  display: inline-block
  width 4rem
  font-size 0
  img
    border-radius: 100%
  .company
    position absolute
    top 50%
    left 100%
    width 2.5rem
    transform: translate(-.5rem, -50%)
</style>
