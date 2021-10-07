<template>
  <nav class="nav tm-text-center">
    <span class="logo">
      <logo-cosmos class="logo__svg" />
      <span class="sr-only">Cosmos</span>
    </span>
  </nav>
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
  justify-content center
  padding-top var(--spacing-10)
  @media $breakpoint-medium
    padding-top 4rem
  @media $breakpoint-large
    padding-top var(--spacing-9)

.logo
  transform rotate(90deg) translate(37.5%, 13.5%)
  &__svg
    width 4rem
    @media $breakpoint-medium
      width 6rem
</style>
