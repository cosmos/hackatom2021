<template>
  <div class="tm-container tm-section-container">
    <nav class="nav tm-text-center">
      <span class="logo">
        <logo-cosmos class="logo__svg" />
        <span class="sr-only">Cosmos</span>
      </span>
      <span class="info tm-text tm-normal tablet">
        <span>Virtual Hackathon open to everyone</span>
        <tm-tooltip
          text="Some restrictions may apply.<br/>Click to learn more."
          position="top-center"
          :isIcon="true"
        >
          <icon-info />
        </tm-tooltip>
      </span>
      <span class="info tm-text tm-normal mobile">
        <span>Virtual Hackathon</span>
        <tm-tooltip
          text="Some restrictions may apply.<br/>Click to learn more."
          position="top-center"
          :isIcon="true"
        >
          <icon-info />
        </tm-tooltip>
      </span>
    </nav>
  </div>
</template>

<script>
import LogoCosmos from '~/components/logos/LogoCosmos.vue'
import IconInfo from '~/components/icons/IconInfo.vue'

export default {
  components: {
    LogoCosmos,
    IconInfo,
  },
}
</script>

<style lang="stylus" scoped>
.nav
  position relative
  z-index 2
  display flex
  flex-direction row
  align-items center
  justify-content space-between
  padding-top var(--spacing-7)
  @media $breakpoint-medium
    padding-top var(--spacing-6)
  @media $breakpoint-large
    padding-top var(--spacing-8)
  .info
    > *
      vertical-align middle
    &.tablet
      display none
      @media $breakpoint-medium
        display block
    &.mobile
      @media $breakpoint-medium
        display none

.logo
  font-size 0
  &__svg
    width 4rem
    @media $breakpoint-medium
      width 6rem
</style>
