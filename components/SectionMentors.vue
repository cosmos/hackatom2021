<template>
  <section class="tm-section section mx-9">
    <div class="tm-section-container tm-container">
      <div class="header tm-text-center tm-center">
        <div class="tm-overline tm-rf0 tm-lh-title tm-medium tm-muted">
          Mentors
        </div>
        <h2 class="mt-3 tm-title tm-rf5 tm-lh-title tm-bold">
          Schedule a chat<br />with a mentor
        </h2>
      </div>

      <div class="list mt-10">
        <div v-for="item in mentors" :key="item.company" class="mt-8">
          <div class="company tm-title tm-lh-copy tm-rf0 tm-bold mb-6">
            {{ item.company }}
          </div>
          <div class="mentor" v-for="mentor in item.people" :key="mentor.name">
            <div class="mentor__card">
              <img
                :src="require(`~/assets/images/people/${mentor.avatar}.png`)"
                :alt="item.name"
                class="avatar"
              />
              <div class="mentor__info">
                <div class="tm-lh-solid tm-rf0 tm-medium tm-title">
                  {{ mentor.name }}
                </div>
                <div class="tm-lh-title tm-rf-1 tm-normal tm-muted mt-3">
                  {{ mentor.position }}
                </div>
              </div>
            </div>
            <div class="mentor__link">
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
              avatar: 'sonia',
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
              avatar: 'casey',
              name: 'Casey Arrington',
              position: 'Head of Business & Operations',
              link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUZaXzFhT2VSYnJ3fGRlZmF1bHR8OTFlOTdhZmI2ZDhlZTc4NTBhMWQ1OWRkNDIxNjBiNzg',
            },
          ],
        },
        {
          company: 'NYM',
          people: [
            {
              avatar: 'max',
              name: 'Max Hampshire',
              position: 'Technical Writer / DevOps',
              link: 'https://meet.nymte.ch/nymchallengecosmoshack',
            },
          ],
        },
        {
          company: 'Archway',
          people: [
            {
              avatar: 'drew',
              name: 'Drew Taylor',
              position: 'Developer Relation',
              link: 'https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUlJR244OXFaMmExfGRlZmF1bHR8YTA4Njc3MzU0ZjRkMDgwYTcwZDY2MDYxNjZiZTBjZWQ',
            },
            {
              avatar: 'eduardo',
              name: 'Eduardo Diaz',
              position: 'Blockchain Engineer',
              link: 'https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUlJR244OXFaMmExfGRlZmF1bHR8YTA4Njc3MzU0ZjRkMDgwYTcwZDY2MDYxNjZiZTBjZWQ',
            },
            {
              avatar: 'mike',
              name: 'Mike Cullinan',
              position: 'Biz Dev',
              link: 'https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUlJR244OXFaMmExfGRlZmF1bHR8YTA4Njc3MzU0ZjRkMDgwYTcwZDY2MDYxNjZiZTBjZWQ',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.section
  padding-bottom 0

.header,
.list
  max-width: 29.6875rem
  margin-inline: auto

.title
  padding-right 2rem
  @media $breakpoint-medium
    padding-right 3rem

.mentor
  margin-bottom var(--spacing-9)
  @media $breakpoint-medium
    display flex
    align-items center
    margin-bottom var(--spacing-7)
  &__card
    display flex
    align-items center
    width 100%
  &__link
    flex-shrink: 0
    padding-top var(--spacing-6)
    padding-left 4rem
    @media $breakpoint-medium
      padding 0

.company
  margin-bottom var(--spacing-8)
  padding-bottom var(--spacing-5)
  border-bottom 1px solid var(--title)
  @media $breakpoint-medium
    margin-bottom var(--spacing-6)

.avatar
  flex-shrink: 0
  width 3rem
  height 3rem
  margin-right 1rem
  border-radius: 100%
</style>
