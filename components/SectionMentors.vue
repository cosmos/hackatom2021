<template>
  <section class="tm-section section mx-9">
    <div class="tm-section-container tm-container">
      <div class="header tm-center">
        <div class="tm-overline tm-rf0 tm-lh-title tm-medium tm-muted">
          Mentors
        </div>
        <h2 class="mt-3 tm-title tm-rf5 tm-lh-title tm-bold">
          Schedule a chat with a mentor
        </h2>
      </div>

      <div class="list mt-10">
        <div v-for="item in mentors" :key="item.company" class="mt-8">
          <div class="company tm-title tm-lh-copy tm-rf0 tm-bold mb-6">
            {{ item.company }}
          </div>
          <div
            class="mentor mb-7"
            v-for="mentor in item.people"
            :key="mentor.name"
          >
            <div class="mentor__card">
              <img
                :src="require(`~/assets/images/people/${mentor.avatar}.png`)"
                :alt="item.name"
                class="avatar"
              />
              <div class="mentor__info">
                <div>{{ mentor.name }}</div>
                <div>{{ mentor.position }}</div>
              </div>
            </div>
            <div>
              <tm-link :href="mentor.link" class="tm-link-external">
                Schedule time
              </tm-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mentors: [
        {
          company: 'Tendermint',
          people: [
            {
              avatar: 'avatar',
              name: 'Sonia Singla',
              position: 'Developer Relations Engineer',
              link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUZaXzFhT2VSYnJ3fGRlZmF1bHR8OTFlOTdhZmI2ZDhlZTc4NTBhMWQ1OWRkNDIxNjBiNzg',
            },
          ],
        },
        {
          company: 'Starport',
          people: [
            {
              avatar: 'denis',
              name: 'Denis Fadeev',
              position: 'Director of Developer Experience',
              link: 'https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUhsNlExZzJZWVBvfGRlZmF1bHR8YTMwYTczN2FlMWEyZGVlY2FjMWYyNjkzMmZlNWM1Mzk',
            },
          ],
        },
        {
          company: 'Siffchain',
          people: [
            {
              avatar: 'avatar',
              name: 'Casey Arrington',
              position: 'Head of Business & Operations',
              link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUZaXzFhT2VSYnJ3fGRlZmF1bHR8OTFlOTdhZmI2ZDhlZTc4NTBhMWQ1OWRkNDIxNjBiNzg',
            },
          ],
        },
        {
          company: 'Archway',
          people: [
            {
              avatar: 'avatar',
              name: 'Drew Taylor',
              position: 'Developer Relation',
              link: 'https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUlJR244OXFaMmExfGRlZmF1bHR8YTA4Njc3MzU0ZjRkMDgwYTcwZDY2MDYxNjZiZTBjZWQ',
            },
            {
              avatar: 'avatar',
              name: 'Eduardo Diaz',
              position: 'Blockchain Engineer',
              link: 'https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUlJR244OXFaMmExfGRlZmF1bHR8YTA4Njc3MzU0ZjRkMDgwYTcwZDY2MDYxNjZiZTBjZWQ',
            },
            {
              avatar: 'avatar',
              name: 'Mike Cullinan',
              position: 'Biz Dev',
              link: 'https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUlJR244OXFaMmExfGRlZmF1bHR8YTA4Njc3MzU0ZjRkMDgwYTcwZDY2MDYxNjZiZTBjZWQ',
            },
          ],
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
.title
  padding-right 2rem
  @media $breakpoint-medium
    padding-right 3rem
.company
  padding-bottom var(--spacing-5)
  border-bottom 1px solid var(--title)
</style>
