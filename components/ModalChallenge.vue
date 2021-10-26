<template>
  <div>
    <transition name="overlay" appear>
      <div
        v-if="visible && visibleLocal"
        ref="overlay"
        class="overlay"
        @click="close"
      />
    </transition>
    <transition name="modal" appear>
      <div v-if="visible && visibleLocal" ref="modal" class="modal">
        <div ref="content" class="modal__content">
          <slot />
        </div>
        <div class="close" @click="close">
          <svg
            class="close__icon"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4l16 16m0-16L4 20"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visibleLocal: true,
    }
  },
  methods: {
    close() {
      this.visibleLocal = false
    },
  },
}
</script>

<style lang="stylus" scoped>
.overlay
  position: fixed
  top: 0
  left: 0
  z-index: 100000
  height: 100vh
  width: 100vw

.modal
  position: fixed
  overflow-y: hidden
  z-index: 100000

.close
  border-radius: 50%
  stroke: rgba(255, 255, 255, 0.75)
  box-sizing: border-box
  padding: 8px
  width: 48px
  height: 48px
  position: absolute
  top: 0
  right: 0
  margin: 1rem
  cursor: pointer

.close__icon
  display: block

// .modal {
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   width: 100%;
//   max-width: 100%;
//   overflow-y: scroll;
//   -webkit-overflow-scrolling: touch;
//   pointer-events: all;
//   height: 100vh;
// }
// .modal__content {
//   background: white;
//   position: absolute;
//   pointer-events: all;
//   overflow-y: scroll;
//   -webkit-overflow-scrolling: touch;
//   width: 100%;
//   height: 100%;
// }
// .modal__content.modal__content__side__bottom {
//   margin-top: var(--modal-margin-top);
//   overflow-y: hidden;
//   height: auto;
//   box-shadow: var(--modal-box-shadow);
// }
// .modal__content.modal__content__side__center {
//   pointer-events: all;
//   position: absolute;
//   width: var(--modal-width, 600px);
//   max-width: var(--modal-max-width, 90%);
//   height: var(--modal-height, auto);
//   max-height: var(--modal-max-height, none);
//   top: var(--modal-margin-top);
//   transform: translateX(-50%);
//   left: 50%;
//   border-radius: var(--modal-border-radius);
//   box-shadow: var(--modal-box-shadow);
//   margin-bottom: 20px;
//   border-radius: 0.5rem;
// }
// .modal__content.modal__content__side__center.modal__fullscreen__true {
//   top: 0;
//   width: 100%;
//   height: 100%;
//   max-width: 100%;
//   max-height: 100%;
//   margin-bottom: initial;
//   border-radius: 0;
// }
// .overlay-enter-active {
//   transition: all 0.25s ease-out;
// }
// .overlay-enter {
//   opacity: 0;
// }
// .overlay-enter-to {
//   opacity: 1;
// }
// .overlay-leave-active {
//   transition: all 0.25s;
// }
// .overlay-leave {
//   opacity: 1;
// }
// .overlay-leave-to {
//   opacity: 0;
// }
// .modal__left-enter-active,
// .modal__right-enter-active,
// .modal__bottom-enter-active,
// .modal__center-enter-active,
// .modal__left-leave-active,
// .modal__right-leave-active,
// .modal__bottom-leave-active,
// .modal__center-leave-active {
//   transition: all 0.5s;
// }
// .modal__left-enter,
// .modal__left-leave-to {
//   transform: translateX(-100%);
// }
// .modal__right-enter,
// .modal__right-leave-to {
//   transform: translateX(100%);
// }
// .modal__left-enter-to,
// .modal__left-leave .modal__right-enter-to,
// .modal__right-leave {
//   transform: translateX(0);
// }
// .modal__bottom-enter,
// .modal__bottom-leave-to {
//   transform: translateY(100%);
// }
// .modal__bottom-enter-to,
// .modal__bottom-leave {
//   transform: translateY(0);
// }
// .modal__center-enter,
// .modal__center-leave-to {
//   opacity: 0;
//   transform: scale(0.95);
// }
// .modal__center-enter-to,
// .modal__center-leave {
//   opacity: 1;
//   transform: scale(1);
// }
// @media screen and (max-width: 500px) {
//   /* TODO: hotfix for https://github.com/cosmos/cosmos.network/pull/832#pullrequestreview-413650189 */
//   .modal__content.modal__content__side__center {
//     margin-top: 3rem;
//   }
// }
</style>
