<template>
  <main>
    <kinesis-container :perspective="1000">
      <section-hero />
      <section-competition />
      <section-prize-pool />
      <section-sponsored />
      <section-schedule />
      <section-incoming-transmissions />
    </kinesis-container>
  </main>
</template>

<script>
import SectionPrizePool from '../components/SectionPrizePool.vue'
export default {
  components: { SectionPrizePool },
}
</script>

<style lang="stylus" scoped></style>
