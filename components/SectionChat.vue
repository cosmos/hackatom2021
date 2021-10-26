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
          <tm-button class="mt-5">
            Join Developer Chat<span class="icon__right">↗️</span>
          </tm-button>
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
  background: #171717
  border-radius var(--spacing-4)
  @media $breakpoint-medium
    display flex
    flex-direction: row-reverse
    padding var(--spacing-9) var(--spacing-10)
  &__graphics
  &__info
    width 100%
    @media $breakpoint-xl
      width 50%

.icon
  position relative
  display inline-block
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
  top 60%
  right 0
  transform: translateY(-50%)
</style>
