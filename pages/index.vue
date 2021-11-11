<template>
  <main>
    <kinesis-container :perspective="1000">
      <section-hero />
      <section-competition />
      <section-prize-pool />
    </kinesis-container>
    <section-prize-categories />
    <section-chat />
    <section-sponsored />
    <section-judging-criteria />
    <section-judges />
    <section-schedule />
    <section-incoming-transmissions />
    <section-participate />
    <promo-signal-card />
    <!-- <section-faq /> -->
  </main>
</template>

<script>
import PromoSignalCard from '../components/PromoSignalCard.vue'
export default {
  components: { PromoSignalCard },
}
</script>

<style lang="stylus" scoped></style>
