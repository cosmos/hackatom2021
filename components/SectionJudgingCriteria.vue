<template>
  <section class="tm-section section pb0">
    <div class="tm-section-container tm-container">
      <graphics-criteria class="graphics" />

      <p class="tm-overline tm-rf0 tm-lh-title tm-medium tm-muted">
        Hit all the right notes
      </p>
      <h2 class="mt-3 tm-title tm-lh-title tm-rf5 tm-bold">Judging criteria</h2>

      <div class="mt-10 tm-grid-base">
        <div v-for="item in criteria" :key="item.icon" class="sponsor-card">
          <img
            :src="require(`~/assets/images/icons/icon-${item.icon}.svg`)"
            :alt="item.name"
            class="logo-item"
          />
          <div class="mt-6 tm-title tm-rf2 tm-lh-title tm-bold">
            {{ item.name }}
          </div>
          <ul class="mt-5 tm-lh-title tm-muted tm-rf0">
            <li v-for="text in item.info" :key="text">{{ text }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      criteria: [
        {
          name: 'Execution',
          icon: 'layout',
          info: [
            `CLI commands work `,
            `Frontend works without errors`,
            `The setup is explained well`,
            `Project runs as expected, behavior is reproducible`,
          ],
        },
        {
          name: 'Code Quality',
          icon: 'terminal',
          info: [
            `High-quality code that can be read by a human`,
            `Code is commented throughout`,
            `Variable names are well-chosen`,
            `The code is split into logical functions`,
            `Tests are provided that confirm the business logic`,
            `The project is production-ready`,
          ],
        },
        {
          name: 'Innovation',
          icon: 'bulb',
          info: [
            `The project does something that is innovative`,
            `The project does something new`,
            `The project simplifies something complex`,
            `The project provides a useful contribution to the ecosystem that could be used in the future`,
          ],
        },
        {
          name: 'Technical Documentation and Usability',
          icon: 'users',
          info: [
            `The project has an explanatory README file`,
            `Documentation includes instructions that explain how to use the project`,
            `Conceptual information describes the benefits of the project`,
            `Reference content is provided`,
            `Project is usable and provides a low-friction user experience (UX)`,
            `Project user interface (UI) is easy to follow`,
            `Users can successfully complete the intended task`,
          ],
        },
        {
          name: 'Utility / Competitiveness',
          icon: 'video',
          info: [
            `The video is clear and engaging`,
            `The project value is clearly explained `,
            `The project is demonstrated in the video`,
            `The video is high quality and includes audio and visual`,
            `The video is in English`,
            `The video includes subtitles`,
            `The video is 2 to 5 minutes `,
          ],
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.section
  position relative
  padding-top 20rem
  margin-bottom var(--spacing-9)
  @media $breakpoint-medium
    padding-top var(--spacing-10)
  @media $breakpoint-large
    margin-top var(--spacing-9)
    margin-bottom 0
  .tm-grid-base
    gap var(--spacing-8) var(--grid-gap-x)

.graphics
  position absolute
  top -22rem
  left 55%
  z-index -1
  width 140vw
  transform: translateX(-50%)
  @media $breakpoint-medium
    top -8rem
    left 44%
    width auto
    transform: none
  @media $breakpoint-large
    top -5rem

.sponsor-card
  grid-column 1 / -1
  @media $breakpoint-medium
    grid-column span 4
  @media $breakpoint-large
    grid-column span 4
</style>
