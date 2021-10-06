<template>
  <section class="tm-section pb0">
    <div class="tm-section-container tm-container">
      <div class="tm-overline tm-rf0 tm-lh-title tm-medium tm-text-center">
        Sponsored by
      </div>
    </div>
    <div class="logos mt-7">
      <div class="logos__row">
        <div v-for="item in sponsors" :key="item.name" class="logos__item">
          <img
            :src="require(`~/assets/images/logos/${item.img}.svg`)"
            :alt="item.name"
            class="logo-item"
          />
        </div>
      </div>
      <div class="logos__row">
        <div v-for="item in sponsors" :key="item.name" class="logos__item">
          <img
            :src="require(`~/assets/images/logos/${item.img}.svg`)"
            :alt="item.name"
            class="logo-item"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sponsors: [
        {
          name: 'figment',
          img: 'figment',
        },
        {
          name: 'stake fish',
          img: 'stake-fish',
        },
        {
          name: 'inqlusion',
          img: 'inqlusion',
        },
        {
          name: 'chainflow',
          img: 'chainflow',
        },
        {
          name: 'interchain',
          img: 'interchain',
        },
        {
          name: 'tendermint',
          img: 'tendermint',
        },
        {
          name: 'cosmos',
          img: 'cosmos',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.logos
  position relative
  overflow: hidden
  white-space: nowrap
  &:hover
    .logos
      &__row
        animation-play-state: paused
  &__row
    animation: marquee 20s linear infinite
    display: inline-block
  &__item
    display: inline-flex
    align-items center
    justify-content center
    width 10.5625rem
    height 4rem
    margin-right 2rem
    opacity .3

@keyframes marquee
  from
    transform: translateX(0)
  to
    transform: translateX(-100%)
</style>
