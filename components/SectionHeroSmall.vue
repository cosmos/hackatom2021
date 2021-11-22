<template>
  <section class="tm-section section-hero">
    <graphics-hero :isSmall="true" class="section-hero__graphics" />

    <div class="tm-section-container tm-container">
      <kinesis-element :strength="-20" class="tm-text-center logo-hackatom">
        <h1 class="sr-only">Hackatom</h1>
        <logo-hackatom class="logo-hackatom__svg" />
        <div class="logo-hackatom__text tm-title tm-lh-title tm-medium">
          <div class="logo-hackatom__long tm-overline">
            Platinum Sponsor Starport
          </div>
          <div class="logo-hackatom__short">Platinum - Starport</div>
          <div class="logo-hackatom__long tm-overline">
            November 11 - December 8
          </div>
          <div class="logo-hackatom__short">Nov 11 - Dec 8</div>
        </div>
      </kinesis-element>
    </div>
  </section>
</template>

<script>
import GraphicsHero from '~/components/graphics/GraphicsHero.vue'
import LogoHackatom from '~/components/logos/LogoHackatom.vue'

export default {
  components: {
    GraphicsHero,
    LogoHackatom,
  },
}
</script>

<style lang="stylus" scoped>
.section-hero
  position relative
  padding-top var(--spacing-7)
  padding-bottom 0
  @media $breakpoint-medium
    padding-top var(--spacing-8)
  @media $breakpoint-large
    padding-top var(--spacing-8)
  &__graphics
    position absolute
    z-index 0
    left 50%
    top -33.5vh
    transform translateX(-50%)
    @media $breakpoint-medium
      top -43vh
    @media $breakpoint-large
      top -50vw

.logo-hackatom
  position relative
  display block
  width 75%
  max-width 24.5rem
  margin-left auto
  margin-right auto
  &__svg
    width 100%
    height auto
  &__text
    position absolute
    left 0
    right 0
    top 50%
    display flex
    align-items center
    justify-content space-between
    margin-top 1.5rem
    transform translateY(-50%)
    font-weight: var(--font-weight-medium-0)
    line-height var(--line-height-title-0)
    font-size calc(var(--font-size-0) / 2)
    @media $breakpoint-medium
      margin-top 1.75rem
  &__long
    display none
    @media $breakpoint-small
      display block
  &__short
    @media $breakpoint-small
      display none

.header
  margin-top var(--spacing-4)
  @media $breakpoint-small
    margin-top var(--spacing-4)
  @media $breakpoint-large
    margin-top -2.4rem
  .countdown
  .bottom
    center()
    max-width: 12rem
    @media $breakpoint-medium
      max-width: 25rem
    @media $breakpoint-large
      max-width: none

.countdown
  &__count
    margin-top var(--spacing-3)
    @media $breakpoint-small
      margin-top 0

.wizard
  margin-top var(--spacing-10)
  @media $breakpoint-medium
    margin-top var(--spacing-9)
  @media $breakpoint-large
    margin-top var(--spacing-8)
</style>
