<template>
  <section class="tm-section section-hero">
    <graphics-hero class="section-hero__graphics" />
    <div class="tm-section-container tm-container">
      <kinesis-element :strength="-20" class="tm-text-center logo-hackatom">
        <h1 class="sr-only">Hackatom</h1>
        <logo-hackatom class="logo-hackatom__svg" />
        <div
          class="
            logo-hackatom__text
            tm-rf-1 tm-rf0-l-up tm-title tm-lh-title tm-medium
          "
        >
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

      <div class="header">
        <div
          class="
            tm-text-center tm-rf2 tm-rf4-m-up tm-rf3-l-up tm-lh-title tm-bold
            countdown
          "
        >
          Register for the Virtual HackAtom
        </div>

        <div class="mt-7 tm-text-center">
          <tm-button
            class="cta-button"
            size="l"
            to-link="external"
            href="https://cosmos-hackatom-vi.devpost.com/"
          >
            Register Now <span class="icon__external">↗️</span>
          </tm-button>
        </div>

        <div
          class="
            mt-7
            bottom
            tm-title tm-rf-1 tm-rf0-m-up tm-lh-copy tm-medium tm-text-center
          "
        >
          In-Person Opening Ceremony, Lisbon - November 11
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment-timezone'
import GraphicsHero from '~/components/graphics/GraphicsHero.vue'
import LogoHackatom from '~/components/logos/LogoHackatom.vue'

export default {
  components: {
    GraphicsHero,
    LogoHackatom,
  },
  data() {
    return {
      moment,
      countdown: {
        now: Math.trunc(new Date(new Date().toUTCString()).getTime() / 1000),
        date: '2021-10-27',
        time: '19:00',
        usage: moment.tz('2021-10-27 19:00', 'CET').format(),
        end: '2021-10-27T19:00:00Z',
      },
    }
  },
  mounted() {
    window.setInterval(() => {
      this.countdown.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  },
  methods: {
    countdownTimer(date, time) {
      return moment.tz(`${date} ${time}`, 'CET').format()
    },
    toTimezone(date, time) {
      return (
        moment
          // set base time with UTC
          // get timezone with i18n API - Intl.DateTimeFormat().resolvedOptions().timeZone
          // usage: 2020-08-04 08:00
          .tz(`${date} ${time}`, 'UTC')
          // use client's locale time zone
          .tz(moment.tz.guess())
      )
    },
  },
}
</script>

<style lang="stylus" scoped>
.section-hero
  position relative
  &__graphics
    position absolute
    z-index 0
    left 50%
    top -40.5vh
    transform translateX(-50%)
    @media $breakpoint-medium
      top -49.6vh
    @media $breakpoint-large
      top -55.7vw

.logo-hackatom
  position relative
  width 98%
  max-width 48.625rem
  margin-left auto
  margin-right auto
  @media $breakpoint-medium
    width 95%
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
    @media $breakpoint-medium
      margin-top 3.2rem
    @media $breakpoint-large
      margin-top 3.7rem
  &__long
    display none
    @media $breakpoint-small
      display block
  &__short
    @media $breakpoint-small
      display none

.header
  .countdown
  .bottom
    center()
    max-width: 12rem
    @media $breakpoint-medium
      max-width: 25rem
    @media $breakpoint-large
      max-width: none

.countdown
  margin-top var(--spacing-4)
  @media $breakpoint-small
    display flex
    align-items baseline
    justify-content center
    margin-top var(--spacing-4)
  @media $breakpoint-large
    margin-top -3.4rem
  &__count
    margin-top var(--spacing-3)
    @media $breakpoint-small
      margin-top 0

.date
  max-width 14rem
  margin-top var(--spacing-6)
  center()
  @media $breakpoint-medium
    max-width none
    margin-top var(--spacing-3)
  @media $breakpoint-large
    margin-top var(--spacing-4)

.wizard
  margin-top var(--spacing-10)
  @media $breakpoint-medium
    margin-top var(--spacing-9)
  @media $breakpoint-large
    margin-top var(--spacing-8)
</style>
