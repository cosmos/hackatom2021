<template>
  <section class="tm-section section pt0 pb0 mt-8">
    <div class="tm-section-container tm-container">
      <div class="tm-grid-base">
        <div class="card">
          <div class="card__graphics _mentors">
            <graphics-cta-mentors class="graphics" />
          </div>
          <div class="card__info">
            <h2 class="tm-title tm-lh-title tm-rf2 tm-bold">
              Conversation with a Mentor
            </h2>
            <p
              class="
                mt-5
                tm-lh-copy tm-rf0 tm-normal tm-muted tm-measure-narrow
              "
            >
              Schedule some time with a mentor to make sure your project hits
              all the right notes.
            </p>
            <div class="mt-5">
              <tm-button id="mentorsLink" to-link="internal" to="/mentors">
                Book Time with a Mentor
                <span class="icon__right">&rarr;</span>
              </tm-button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card__graphics _discord">
            <graphics-cta-developer-chat class="graphics" />
          </div>
          <div class="card__info">
            <h2 class="tm-title tm-lh-title tm-rf2 tm-bold">
              Continue the Chat
            </h2>
            <p
              class="
                mt-5
                tm-lh-copy tm-rf0 tm-normal tm-muted tm-measure-narrow
              "
            >
              Join the community of Cosmonaut Hackers on&nbsp;Discord.
            </p>
            <div class="mt-5">
              <tm-button
                id="joinDeveloperChat"
                to-link="external"
                href="https://discord.gg/cosmosnetwork"
              >
                Join Developer Chat <span class="icon__external">&nearr;</span>
              </tm-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GraphicsCtaDeveloperChat from '~/components/graphics/GraphicsCtaDeveloperChat.vue'

export default {
  components: {
    GraphicsCtaDeveloperChat,
  },
  data() {
    return {
      showModal: false,
      currentItem: null,
    }
  },
  computed: {},
  methods: {},
}
</script>

<style lang="stylus" scoped>
.tm-grid-base
  gap var(--grid-gap-x)

.card
  grid-column 1 / -1
  overflow hidden
  position relative
  padding 9.5rem var(--spacing-5) var(--spacing-5)
  background: #171717
  border-radius var(--spacing-4)
  @media $breakpoint-medium
    display flex
    flex-direction: row-reverse
    padding var(--spacing-9) var(--spacing-8)
  @media $breakpoint-xl
    grid-column span 6
  &__graphics
    position absolute
    z-index 0
    width 100%
    top 0
    right 0
    bottom 0
    @media $breakpoint-xl
      &._mentors
        top 20%
        right -42%
      &._discord
        right -20%
  &__info
    position relative
    z-index 1
    width 100%

.graphics
  position absolute
  z-index 0
  top 0
  right 85%
  transform: translate(50%, -50%)
  @media $breakpoint-medium
    top 60%
    right 0
    transform: translate(35%, -50%)
  @media $breakpoint-large
    transform: translate(35%, -50%)
  @media $breakpoint-xl
    transform: translate(15%, -50%)
</style>
