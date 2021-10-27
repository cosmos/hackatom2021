<template>
  <section class="tm-section section mx-6">
    <div class="tm-section-container tm-container">
      <div class="header tm-center">
        <div class="tm-overline tm-rf0 tm-lh-title tm-medium tm-muted">FAQ</div>
        <h2 class="mt-5 tm-title tm-rf4 tm-lh-title tm-bold">
          Frequently asked questions
        </h2>
      </div>

      <tm-collapse accordion>
        <div class="tm-grid-base mt-10">
          <div class="column">
            <tm-collapse-item v-for="item in faq_left" :key="item.title">
              <div slot="header">
                <div class="title tm-lh-copy tm-rf0 tm-bold tm-title">
                  {{ item.question }}
                </div>
              </div>
              <div class="tm-lh-copy tm-rf0 tm-normal tm-muted">
                {{ item.answer }}
              </div>
            </tm-collapse-item>
          </div>
          <div class="column">
            <tm-collapse-item v-for="item in faq_right" :key="item.title">
              <div slot="header">
                <div class="title tm-lh-copy tm-rf0 tm-bold tm-title">
                  {{ item.question }}
                </div>
              </div>
              <div class="tm-lh-copy tm-rf0 tm-normal tm-muted">
                {{ item.answer }}
              </div>
            </tm-collapse-item>
          </div>
        </div>
      </tm-collapse>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      faq_left: [
        {
          question: 'Cras justo odio, dapibus ac facilisis in eget',
          answer:
            'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
        },
        {
          question: 'Cras justo odio, dapibus ac facilisis in eget',
          answer:
            'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
        },
        {
          question: 'Cras justo odio, dapibus ac facilisis in eget',
          answer:
            'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
        },
      ],
      faq_right: [
        {
          question: 'Cras justo odio, dapibus ac facilisis in eget',
          answer:
            'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
        },
        {
          question: 'Cras justo odio, dapibus ac facilisis in eget',
          answer:
            'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
        },
        {
          question: 'Cras justo odio, dapibus ac facilisis in eget',
          answer:
            'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
        },
      ],
    }
  },
  computed: {},
  methods: {},
}
</script>

<style lang="stylus" scoped>
.header
  @media $breakpoint-medium
    text-align center

.section
  @media $breakpoint-medium
    padding-bottom 0

.column
  grid-column 1 / -1
  @media $breakpoint-medium
    grid-column span 4
  @media $breakpoint-xl
    grid-column 2 / span 5
    &:nth-child(2n)
      grid-column 7 / span 5

.title
  padding-right 2rem
  @media $breakpoint-medium
    padding-right 3rem
</style>
