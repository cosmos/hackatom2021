<template>
  <section class="tm-section section pb0">
    <div class="tm-section-container tm-container">
      <div class="card">
        <div class="card__graphics">
          <div class="icon">
            <icon-discord />
          </div>
          <graphics-cta-developer-chat class="graphics" />
        </div>
        <div class="card__info">
          <h2 class="tm-title tm-lh-title tm-rf2 tm-bold">
            Chat with a Mentor
          </h2>
          <p
            class="mt-5 tm-lh-copy tm-rf0 tm-normal tm-muted tm-measure-narrow"
          >
            Join the community of Cosmonaut Hackers on&nbsp;Discord.
          </p>
          <div class="mt-5">
            <tm-button
              to-link="external"
              href="https://discord.gg/cosmosnetwork"
            >
              Join Developer Chat<span class="icon__external">↗️</span>
            </tm-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconDiscord from '~/components/icons/IconDiscord.vue'
import GraphicsCtaDeveloperChat from '~/components/graphics/GraphicsCtaDeveloperChat.vue'

export default {
  components: {
    IconDiscord,
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
.card
  overflow hidden
  position relative
  padding 9.5rem var(--spacing-5) var(--spacing-5)
  background: #171717
  border-radius var(--spacing-4)
  @media $breakpoint-medium
    display flex
    flex-direction: row-reverse
    padding var(--spacing-9) var(--spacing-10)
  &__graphics
  &__info
    position relative
    z-index 1
    width 100%
    @media $breakpoint-xl
      width 50%

.icon
  position relative
  z-index 1
  display inline-block
  margin-bottom var(--spacing-10)
  @media $breakpoint-medium
    margin-bottom 0
  &:after
    content: ''
    position absolute
    top 0
    left 100%
    width 16rem
    height 1px
    margin-left var(--spacing-3)
    background-color: var(--white)

.graphics
  position absolute
  z-index 0
  top 0
  right 85%
  transform: translate(50%, -50%)
  @media $breakpoint-medium
    top 60%
    right 0
    transform: translate(50%, -50%)
  @media $breakpoint-large
    transform: translate(35%, -50%)
  @media $breakpoint-xl
    transform: translate(15%, -50%)
</style>
