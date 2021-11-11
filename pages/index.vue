<template>
  <main>
    <kinesis-container :perspective="1000">
      <section-hero />
      <section-competition />
    </kinesis-container>
    <section-schedule />
    <section-incoming-transmissions />
    <section-prize-pool />
    <section-prize-categories />
    <section-chat />
    <section-sponsored />
    <section-judging-criteria />
    <section-judges />
    <section-participate />
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
