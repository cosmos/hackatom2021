<template>
  <main>
    <kinesis-container :perspective="1000">
      <section-hero />
      <section-competition />
    </kinesis-container>
    <section-schedule />
    <section-judges />
    <section-judging-criteria />
    <section-chat />
    <section-updates />
    <section-prize-pool />
    <section-prize-categories />
    <section-sponsored />
    <!-- <section-participate /> -->
    <section-incoming-transmissions />
    <section-faq />
    <promo-signal-card />
  </main>
</template>

<script>
import PromoSignalCard from '../components/PromoSignalCard.vue'
export default {
  components: { PromoSignalCard },
}
</script>

<style lang="stylus" scoped></style>
