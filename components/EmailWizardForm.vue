<template>
  <div class="wizard">
    <div>
      <div v-show="step === 0">
        <form
          :action="url"
          method="POST"
          target="_blank"
          rel="noreferrer noopener"
          class="wizard__form"
          @submit.prevent="actionSubmitEmail"
        >
          <fieldset class="wizard__form__fieldset">
            <input
              id="field-email"
              v-model="email"
              name="fields[email]"
              class="wizard__form__fieldset__input tm-rf0 tm-lh-copy"
              type="email"
              placeholder="Email address"
              required="required"
            />
            <tm-button
              id="getUpdatesBottom"
              class="btn"
              size="s"
              :disabled="emailInvalid"
              @click="actionSubmitEmail"
            >
              <span>Stay up to date</span>
              <span class="icon__right">&rarr;</span>
            </tm-button>
          </fieldset>

          <p v-if="hasError" class="mt-3 tm-rf-1 tm-lh-copy tm-error">
            Something went wrong
          </p>

          <p class="info tm-rf-1 tm-lh-copy tm-text-center tm-muted">
            You can unsubscribe at any time.
            <tm-link
              href="https://v1.cosmos.network/privacy"
              class="tm-link-external"
            >
              Privacy policy
            </tm-link>
          </p>
        </form>
      </div>

      <div v-show="step === 1" class="wizard__state _success tm-rf0 tm-lh-copy">
        <div class="wizard__title tm-rf0 tm-lh-copy tm-normal">
          Confirmation email sent. Open it and click ‘Confirm your email’ so we
          can keep you updated.
        </div>
        <p class="tm-lh-title tm-rf-1 mt-5">
          Don’t see the confirmation email yet?
        </p>
        <p class="tm-lh-title tm-rf-1 tm-muted mt-3">
          It might be in your spam folder.<br />
          If so, make sure to mark it as “not spam”.
        </p>
      </div>

      <div
        v-show="step === 2"
        class="wizard__state tm-rf0 tm-lh-copy tm-text-center"
      >
        <div class="wizard__title">Something went wrong</div>
        <div class="wizard__state__error">
          Uh oh! Refresh the page and try again.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import querystring from 'querystring'

export default {
  data() {
    return {
      step: 0,
      hasError: false,
      email: null,
      url: 'https://app.mailerlite.com/webforms/submit/n7u4z6',
      formData: {
        callback: 'jQuery183047305683301994716_1633552840862',
        'ml-submit': '1',
        anticsrf: 'true',
        ajax: '1',
        guid: '1d63c252-2b53-e03f-ead3-187f6ea2e9af',
        _: '1633552856209',
      },
    }
  },
  computed: {
    emailInvalid() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return !re.test(String(this.email))
    },
  },
  methods: {
    actionSubmitEmail() {
      const options = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
          'fields[email]': this.email,
          ...this.formData,
        }),
      }
      fetch(this.url, options)
        .then(() => {
          this.step = 1
        })
        .catch(() => {
          this.step = 2
        })
    },
    actionGoForwards() {
      this.transition = 'forwards'
      this.step += 1
    },
    actionGoBackwards() {
      this.transition = 'backwards'
      this.step -= 1
    },
    actionReset() {
      this.transition = 'forwards'
      this.step = 0
    },
  },
}
</script>

<style lang="stylus" scoped>
 .icon__right
   margin-left 0.25em

 // Transition
 .fade-enter-active
   transition all .4s ease-out

 .fade-leave-active
   transition all .2s ease-out

 .fade-enter
   opacity 0
   transform translateY(1rem)

 .fade-enter-to
   opacity 1
   transform translateY(0)

 .fade-leave
   opacity 1
   transform scale(1)

 .fade-leave-to
   opacity 0
   transform scale(.96)

 // Form
 .wizard
   max-width 30.5rem
   center()
   &__state
     &._success
       max-width 20.4375rem
       margin-left auto
       margin-right auto
     &__success
       color var(--success)
     &__error
       color var(--error)
   &__form
     width 100%
     &__fieldset
       display block
       @media $breakpoint-medium
         display flex
         gap var(--spacing-3)
       &__input
         outline none
         width 100%
         height 3rem
         background var(--white-100)
         border none
         border-radius $border-radius-3
         padding var(--spacing-4) var(--spacing-5)
         color var(--white)
         font-size 1rem
         transition color 0.15s ease-out, background 0.15s ease-out
         &::placeholder
           color var(--white-500)
           transition color 0.15s ease-out
         &:hover
           background var(--white-200)
           &:not(:focus)::placeholder
             color var(--white)
         &:focus
           background var(--white-200)

 .btn
   white-space nowrap
   margin-top var(--spacing-3)
   @media $breakpoint-medium
     margin-top 0

.info
   max-width 14rem
   margin-top var(--spacing-8)
   margin-left auto
   margin-right auto
   @media $breakpoint-medium
     max-width none
     margin-top var(--spacing-6)
</style>
