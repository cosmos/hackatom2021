<template>
  <div :class="[type]" class="tm-collapse">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    accordion: {
      default: false,
      type: Boolean,
    },
    type: {
      default: 'default',
      type: String,
    },
    openHover: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    emitChange() {
      this.$emit('change')
    },
    closeAllItems(el) {
      const children = this.$children
      children.map((item) => {
        if (item.$el !== el) {
          item.maxHeight = '0px'
        }
        return true
      })
    },
  },
}
</script>

<style lang="stylus">
.tm-collapse
  transition all .3s ease
  -webkit-tap-highlight-color transparent

  &.shadow
    .open-item
      transform: scale(1.01)
      box-shadow: 0px 2px 15px 0px rgba(0,0,0,.05)
      margin-top: 5px
      border-bottom: 0px solid rgba(0,0,0,.0)
      margin-bottom: 10px
      border-radius: 6px
      .tm-collapse-item--icon-header
        propWithDir(transform, null, (-50% -50%), rotate(180deg))
      .con-content-item
        opacity 1

  &.margin
    .tm-collapse-item
      margin-top: 10px
      margin-bottom: 10px
      box-shadow: 0px 2px 15px 0px rgba(0,0,0,.05)
      border-radius: 5px
      border-bottom: 0px solid rgba(0,0,0,.0)
    .open-item
      .con-content-item
        opacity 1
      .tm-collapse-item--icon-header
        propWithDir(transform, null, (-50% -50%), rotate(180deg))

  &.border
    border: 1px solid rgba(0,0,0,.1)
    padding: 0px
    .tm-collapse-item
      border-bottom: 1px solid rgba(0,0,0,.1)
    .open-item
      .con-content-item
        opacity 1
      .tm-collapse-item--icon-header
        propWithDir(transform, null, (-50% -50%), rotate(180deg))


  &.default
    .open-item
      .con-content--item
        opacity 1
      .tm-collapse-item--icon-header
        propWithDir(transform, null, (-50% -50%), rotate(180deg))

.tm-collapse-item
  border-bottom 1px solid var(--border)
  transition: all .25s ease
  &.open-item
    .con-content--item
      opacity 1
    .tm-collapse-item--icon-header
      transform rotate(90deg)
      @media $breakpoint-medium
        transform translateY(-50%) rotate(90deg)
      &:after
        transform scaleY(0)
  &.disabled
    pointer-events: none
    opacity 1
    .tm-collapse-item--icon-header
      display none

.tm-collapse-item--header
  position relative
  display: block
  width 100%
  padding var(--spacing-7) 0
  transition: all .25s ease
  &:hover
  &:focus
    color var(--white)
    .tm-collapse-item--icon-header
      fill var(--secondary)

.tm-collapse-item--icon-header
  position: absolute
  top var(--spacing-12)
  right 0
  width 1.375rem
  height 1.375rem
  font-size 0
  transition: transform .25s $ease-out
  @media $breakpoint-medium
    top 50%
    bottom auto
    right 0.85rem
    transform translateY(-50%)
  &:before
  &:after
    content ''
    position absolute
    top 50%
    left 50%
    width 100%
    height 100%
    transform translate(-50%, -50%)
    background-color var(--link)
    transition: transform .25s $ease-out
  &:before
    width 2px
  &:after
    height 2px

.tm-collapse-item--content
  overflow hidden
  transition: all .2s ease

.con-content--item
  padding-bottom var(--spacing-7)
  opacity .2
  transition: all .25s ease
  @media $breakpoint-medium
    padding-top var(--spacing-7)
  > div
    padding-bottom var(--spacing-7)
</style>
