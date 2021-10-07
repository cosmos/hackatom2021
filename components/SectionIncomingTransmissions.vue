<template>
  <section class="tm-section pt11">
    <div class="tm-section-container tm-container">
      <div class="header tm-center">
        <div class="tm-overline tm-rf0 tm-lh-title tm-medium tm-muted">
          Incoming Transmissions
        </div>
        <h2
          class="
            mt-3
            tm-title tm-rf5 tm-rf6-m-up tm-rf5-l-up tm-lh-title tm-bold
          "
        >
          Be the first to know
        </h2>
      </div>
      <div class="tm-measure tm-center mt-8">
        <div class="info tm-lh-copy tm-rf1 tm-normal">
          <p>
            Catch all the latest updates about HackAtom VI including competition
            rules, prize details, sponsors, and special news on our in-person
            events in major cities…
          </p>
        </div>
      </div>

      <email-wizard class="mt-8" />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.header
.info
  @media $breakpoint-medium
    text-align center
</style>
