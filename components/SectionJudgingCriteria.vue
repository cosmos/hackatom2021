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
          <p class="mt-5 tm-lh-title tm-muted tm-rf0">
            {{ item.info }}
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
      criteria: [
        {
          name: 'Technicality',
          icon: 'terminal',
          info: 'How are the chops on your team? Did your team demonstrate 10x capabilities? Did you execute clean code applying new or difficult techniques across a well-thought-out stack? This rating is for how much this challenge got the nerd in you to really geek out!',
        },
        {
          name: 'Originality',
          icon: 'bulb',
          info: 'Have we seen your project before? Is this the same old project from the last hackathon in a new package? Is this something that you have not thought about or imagined before? This category is about evaluating new and amazing ideas.',
        },
        {
          name: 'UX / UI',
          icon: 'layout',
          info: 'Who cares what it does—how does it feel? Is there a `wow` factor? Does it click into place? Are the judges surprised by how easy something was? This score is for a tight execution and user experience—rather than the substance, it`s the packaging around the project.',
        },
        {
          name: 'Utility / Competitiveness',
          icon: 'world',
          info: 'Does your project solve the existing problem? Is the market aware of this problem? Is your product able to compete with similar products on the market? This category is for the product side of your project.',
        },
        {
          name: 'Presentation',
          icon: 'users',
          info: 'Quality often speaks for itself but sometimes help is needed. Is the team able to present their work in a clear and engaging way? Is the code well packaged? Is the README legible? This is an assessment of the demo video submitted with the project and how well a project is presented.',
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
  top -5rem
  left 44%
  z-index -1

.sponsor-card
  grid-column 1 / -1
  @media $breakpoint-large
    grid-column span 4
</style>
