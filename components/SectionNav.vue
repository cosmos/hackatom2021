<template>
  <div class="tm-container tm-section-container">
    <nav class="nav tm-text-center">
      <span class="logo">
        <logo-cosmos class="logo__svg" />
        <span class="sr-only">Cosmos</span>
      </span>
      <span class="tm-text tm-normal tablet">
        Virtual Hackathon open to everyone
      </span>
      <span class="tm-text tm-normal mobile">Virtual Hackathon</span>
    </nav>
  </div>
</template>

<script>
import LogoCosmos from '~/components/logos/LogoCosmos.vue'

export default {
  components: {
    LogoCosmos,
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
  .tablet
    display none
    @media $breakpoint-medium
      display block
  .mobile
    @media $breakpoint-medium
      display none

.logo
  font-size 0
  &__svg
    width 4rem
    @media $breakpoint-medium
      width 6rem
</style>
