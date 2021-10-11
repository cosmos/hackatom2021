<template>
  <section class="tm-section pb0">
    <div class="tm-section-container tm-container">
      <div class="tm-grid-base">
        <div class="sponsors">
          <div v-for="group in sponsors" :key="group.name" class="sponsor mt-7">
            <div class="name tm-overline tm-rf-1 tm-lh-title tm-muted">
              <span>{{ group.name }}</span>
            </div>
            <div class="logos" :class="group.items.length > 1 && 'animation'">
              <div
                class="logos__row"
                :class="group.items.length > 1 && 'animation'"
              >
                <div
                  v-for="item in group.items"
                  :key="item"
                  class="logos__item"
                >
                  <img
                    :src="
                      require(`~/assets/images/logos/logo-bounds-${item}.svg`)
                    "
                    :alt="item"
                    class="logo-item"
                  />
                </div>
              </div>
              <div class="logos__row animation" v-if="group.items.length > 1">
                <div
                  v-for="item in group.items"
                  :key="item"
                  class="logos__item"
                >
                  <img
                    :src="
                      require(`~/assets/images/logos/logo-bounds-${item}.svg`)
                    "
                    :alt="item"
                    class="logo-item"
                  />
                </div>
              </div>
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
      sponsors: [
        {
          name: 'Gold Sponsors',
          items: ['pylons', 'sifchain'],
        },
        {
          name: 'Silver Sponsors',
          items: ['archway', 'kava', 'bitsong', 'stake', 'injective'],
        },
        {
          name: 'Other Sponsors',
          items: ['umee'],
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.sponsors
  grid-column 1 / -1
  @media $breakpoint-xl
    grid-column 2 / span 10

.sponsor
  @media $breakpoint-medium
    display flex
    gap var(--spacing-7)
  &:first-child
    margin-top 0
  &:last-child
    .logos
      opacity .3

.name
  display flex
  align-items center
  height 4rem
  white-space nowrap
  flex-shrink 0

.logos
  position relative
  overflow: hidden
  white-space: nowrap
  &:hover
    .logos
      &__row
        animation-play-state: paused
  &.animation
    margin-left calc(-1 * var(--wrap-gap))
    margin-right calc(-1 * var(--wrap-gap))
    padding-left var(--wrap-gap)
    padding-right var(--wrap-gap)
    @media $breakpoint-medium
      margin-left 0
      margin-right 0
      padding-left 0
      padding-right 0
  &__row
    display: inline-block
    &.animation
      animation: marquee 20s linear infinite
      @media $breakpoint-medium
        animation none
    @media $breakpoint-medium
      display none
    &:first-child
      @media $breakpoint-medium
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
