<template>
  <section class="tm-section section">
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
        <tm-collapse accordion>
          <div v-for="item in mentors" :key="item.title">
            <tm-collapse-item>
              <div slot="header">
                <span class="tm-title tm-lh-copy tm-rf0 tm-bold">
                  {{ item.company }}
                </span>
              </div>

              <div>
                <div
                  v-for="mentor in item.people"
                  :key="mentor.name"
                  class="mentor"
                >
                  <div class="mentor__card">
                    <img
                      :src="
                        require(`~/assets/images/people/${mentor.avatar}.png`)
                      "
                      :alt="item.name"
                      class="avatar"
                    />
                    <div class="mentor__info">
                      <div class="tm-lh-solid tm-rf0 tm-medium tm-title">
                        {{ mentor.name }}
                      </div>
                      <div
                        v-if="mentor.position"
                        class="tm-lh-title tm-rf-1 tm-normal tm-muted mt-3"
                        v-html="mentor.position"
                      />
                    </div>
                  </div>
                  <div class="mentor__link">
                    <tm-link :href="mentor.link" class="tm-link-external">
                      Schedule time
                    </tm-link>
                  </div>
                </div>
              </div>
            </tm-collapse-item>
          </div>
        </tm-collapse>
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
          company: 'Akash',
          people: [
            {
              avatar: 'adam',
              name: 'Adam Wozney',
              position: 'Community',
              link: 'https://calendly.com/akashcommunity/15min',
            },
            {
              avatar: 'ericz',
              name: 'Eric Zietlow',
              position: 'Director of Developer Relations',
              link: 'https://calendly.com/eric-zietlow/15min-1',
            },
            {
              avatar: 'scott',
              name: 'Scott Carruthers',
              position: 'Director of Technical Support',
              link: 'http://calendly.com/scott-akash',
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
        {
          company: 'Evmos',
          people: [
            {
              avatar: 'avatar',
              name: 'Liam',
              position: 'Partnerships',
              link: 'http://calendly.com/liamdig',
            },
          ],
        },
        {
          company: 'IXO',
          people: [
            {
              avatar: 'madelynn',
              name: 'Madelynn Martiniere',
              position: 'Managing Partner, Armillaria',
              link: 'https://calendly.com/mmartiniere/60min?back=1&month=2021-11',
            },
          ],
        },
        {
          company: 'LikeCoin',
          people: [
            {
              avatar: 'chong',
              name: 'William Chong',
              position: 'CTO',
              link: 'https://meet.nymte.ch/nymchallengecosmoshack',
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
          company: 'Pylons',
          people: [
            {
              avatar: 'alexj',
              name: 'Alex Johnson',
              position: 'Tendermint Engineer',
              link: 'https://calendly.com/alex-johnson-6/15min',
            },
            {
              avatar: 'emeka',
              name: 'Emeka Onwuliri',
              position: 'Tendermint Engineer',
              link: 'https://calendly.com/emeka-onwuliri',
            },
            {
              avatar: 'jawad',
              name: 'Jawad Ahmed',
              position: 'Senior Engineer, Pylons',
              link: 'https://calendly.com/jawadahmeddeveloper/15min',
            },
            {
              avatar: 'michaels',
              name: 'Michael Sofaer',
              position:
                'Founder & CEO, Pylons<br/>Director of NFTs, Tendermint',
              link: 'https',
            },
            {
              avatar: 'mijolae',
              name: 'Mijolae Wright',
              position: 'Software Engineer, Pylons',
              link: 'https://calendly.com/mijolae/15min?month=2021-11',
            },
            {
              avatar: 'mustafa',
              name: 'Mustafa Seyrek',
              position: 'Director of Engineering, Pylons',
              link: 'https://calendly.com/mustafaseyrek',
            },
            {
              avatar: 'rafael',
              name: 'Rafael de Andrade',
              position: 'Tendermint Engineer',
              link: 'https://calendly.com/rafaeldeandrade',
            },
          ],
        },
        {
          company: 'Regen network',
          people: [
            {
              avatar: 'cory',
              name: 'Cory Levinson',
              position: 'Director of Engineering',
              link: 'https://calendar.google.com/calendar/u/2?cid=Y29yeUByZWdlbi5uZXR3b3Jr',
            },
            {
              avatar: 'zaremba',
              name: 'Robert Zaremba',
              link: 'https://calendar.google.com/calendar/u/2?cid=cnlhbkByZWdlbi5uZXR3b3Jr',
            },
            {
              avatar: 'goodman',
              name: 'Tyler Goodman',
              link: 'https://calendar.google.com/calendar/u/2?cid=dHlsZXJAcmVnZW4ubmV0d29yaw',
            },
          ],
        },
        {
          company: 'Sifchain',
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
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.header,
.list
  max-width: 29.6875rem
  margin-inline: auto

.title
  padding-right 2rem
  @media $breakpoint-medium
    padding-right 3rem

.mentor
  margin-bottom var(--spacing-7)
  @media $breakpoint-medium
    display flex
    align-items center
  &:last-child
    margin-bottom 0
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

// .company
//   margin-bottom var(--spacing-8)
//   padding-bottom var(--spacing-5)
//   border-bottom 1px solid var(--title)
//   @media $breakpoint-medium
//     margin-bottom var(--spacing-6)

.avatar
  flex-shrink: 0
  width 3rem
  height 3rem
  margin-right 1rem
  border-radius: 100%
</style>
