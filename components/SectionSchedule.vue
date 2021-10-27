<template>
  <section class="tm-section section mt-6 pb0">
    <div class="tm-section-container tm-container">
      <div class="schedule">
        <p class="tm-overline tm-rf0 tm-lh-title tm-medium tm-muted">Event</p>
        <h2
          class="
            mt-3
            tm-lh-title tm-title tm-rf5 tm-rf6-m-up tm-rf5-l-up tm-bold
          "
        >
          Schedule
        </h2>
        <p class="mt-8 tm-lh-title tm-rf0 tm-normal tm-gray">
          All event times are listed in your local timezone ({{ getTimezone }}).
        </p>

        <div class="mt-8">
          <tm-collapse accordion>
            <div v-for="(event, key) in events" :key="event.title">
              <tm-collapse-item
                :icon-top="true"
                :disabled="!event.details && !event.url"
                :light="isLight(key)"
                :mobile-light="true"
                :hide-border="hideBorder(key)"
                :mobile-bottom="true"
              >
                <div slot="header">
                  <div
                    class="event-header tm-grid-base"
                    :class="isOld(event.date, event.startTime) && '_old'"
                  >
                    <div class="date">
                      <div
                        class="day tm-code tm-rf0 tm-lh-copy"
                        :class="hideDate(key) && '_mobile'"
                      >
                        {{ toDate(event.date, event.startTime || '12:00') }}
                      </div>
                      <div class="tm-code tm-rf0 tm-lh-copy tm-gray">
                        <span class="show-inline-m-up">
                          {{ event.type }}
                          <span v-if="event.startTime">-</span>
                        </span>
                        <span v-if="event.startTime">
                          {{ toTime(event.date, event.startTime) }}
                        </span>
                      </div>
                    </div>
                    <div class="tm-title tm-lh-title tm-rf1 tm-bold">
                      <span>{{ event.title }}</span>
                      <div
                        v-if="event.place"
                        class="mt-3 tm-rf-1 tm-lh-copy tm-normal"
                      >
                        {{ event.place }}
                      </div>
                      <div
                        v-if="event.place"
                        class="hide-m-up tm-code tm-rf0 tm-lh-copy tm-gray"
                      >
                        {{ event.type }}
                      </div>
                      <div v-if="event.people" class="mt-3">
                        <div
                          v-for="item in event.people"
                          :key="item.name"
                          class="tm-lh-copy tm-rf0 tm-normal tm-muted"
                        >
                          <b class="">{{ item.name }}</b>
                          <span class="">- {{ item.company }}</span>
                        </div>
                      </div>
                      <div v-if="event.people" class="avatars">
                        <div v-for="item in event.people" :key="item.name">
                          <img
                            :src="
                              require(`~/assets/images/people/${item.avatar}.png`)
                            "
                            :alt="item.name"
                            class="avatar"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="event.details || event.url">
                  <div class="tm-grid-base">
                    <div class="col-info">
                      <p
                        v-if="event.details"
                        class="tm-lh-copy tm-rf0 tm-normal"
                      >
                        {{ event.details }}
                      </p>
                      <div v-if="event.url" :class="event.details && 'mt-7'">
                        <tm-button
                          v-if="event.url"
                          to-link="external"
                          :href="event.url"
                        >
                          <span>Attend</span>
                          <span class="icon__right">&rarr;</span>
                        </tm-button>
                      </div>
                    </div>
                  </div>
                </div>
              </tm-collapse-item>
            </div>
          </tm-collapse>
        </div>

        <p class="mt-8 tm-lh-title tm-rf0 tm-normal tm-gray">
          More schedule updates coming soon.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment-timezone'
import TmButton from './TmButton.vue'

export default {
  components: { TmButton },
  data() {
    return {
      events: [
        {
          title: 'Registrations Open',
          date: '2021-10-27',
          startTime: '19:00',
          type: 'Virtual',
        },
        {
          title: 'HackAtom VI Warm Up Event',
          date: '2021-10-29',
          type: 'In-Person',
          place: 'Spielfeld Digital Hub, Berlin',
          startTime: '17:30',
          language: 'English',
          url: 'https://www.eventbrite.com/e/hackatom-vi-warm-up-event-tickets-196504178287',
        },
        {
          title: 'Dive into the Cosmos Ecosystem',
          date: '2021-10-29',
          type: 'In-Person',
          place: 'Spielfeld Digital Hub, Berlin',
          startTime: '18:00',
          language: 'English',
          people: [
            {
              name: 'Tobias Schwarz',
              company: 'Tendermint',
              avatar: 'tobias',
            },
          ],
          details:
            'Learn what blockchain modules are, how to create them, how to use the various open-source modules to build a Cosmos blockchain, and see what else Cosmos has to offer!',
          url: 'https://www.eventbrite.com/e/hackatom-vi-warm-up-event-tickets-196504178287?aff=ebdssbdestsearch',
        },
        {
          title: 'Blockchain Gaming with Cosmos SDK and Starport',
          date: '2021-10-29',
          type: 'In-Person',
          place: 'Spielfeld Digital Hub, Berlin',
          startTime: '19:00',
          language: 'English',
          people: [
            {
              name: 'Har Preet Singh',
              avatar: 'avatar',
              company: 'Tendermint',
            },
          ],
          details:
            'An informative workshop with Har Preet Singh, Developer Relations Engineer at Tendermint, in which you can build your own blockchain-based multiplayer game using Starport and Cosmos SDK.',
          url: 'https://www.eventbrite.com/e/hackatom-vi-warm-up-event-tickets-196504178287?aff=ebdssbdestsearch',
        },
        {
          title: 'How to Build an IBC-Compatible App',
          date: '2021-10-29',
          type: 'In-Person',
          place: 'Spielfeld Digital Hub, Berlin',
          startTime: '19:45',
          language: 'English',
          people: [
            {
              name: 'Callum Waters',
              avatar: 'avatar',
              company: 'Interchain Foundation',
            },
          ],
          details:
            'The third and final workshop, given by Callum Waters, IBC Protocol Architect at ICF, will go over Inter-Blockchain Communication (IBC) and how to build an IBC-compatible app',
          url: 'https://www.eventbrite.com/e/hackatom-vi-warm-up-event-tickets-196504178287?aff=ebdssbdestsearch',
        },
        {
          title: 'HackAtom VI Opening Ceremony',
          date: '2021-11-11',
          startTime: '09:00',
          // endTime: '17:00',
          type: 'In-Person',
          place: 'Lisbon',
          language: 'English',
          // details:
          //   'Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
          // url: '#',
        },
        {
          title: 'Submissions Deadline',
          date: '2021-12-08',
          startTime: '19:00',
          type: 'Virtual',
        },
        {
          title: 'Voting Open for Community Choice Award',
          date: '2021-12-09',
          startTime: '20:00',
          type: 'Virtual',
        },
        {
          title: 'Closing Ceremony',
          date: '2021-12-14',
          startTime: '19:00',
          type: 'Virtual',
        },
        {
          title: 'Voting Deadline for Community Choice Award',
          date: '2021-12-14',
          startTime: '20:00',
          type: 'Virtual',
        },
        {
          title: 'Closing ceremony & Winners announcement',
          date: '2021-12-16',
          startTime: '20:00',
          type: 'Virtual',
        },
      ],
    }
  },
  computed: {
    getTimezone() {
      return moment.tz.guess()
    },
  },
  methods: {
    hideBorder(key) {
      const current = this.events[key]
      const currentDate = this.toDate(
        current.date,
        current.startTime || '12:00'
      )
      const next = this.events[key + 1] || false
      const nextDate = next && this.toDate(next.date, next.startTime || '12:00')

      return currentDate === nextDate
    },
    hideDate(key) {
      const current = this.events[key]
      const currentDate = this.toDate(
        current.date,
        current.startTime || '12:00'
      )
      const prev = this.events[key - 1] || false
      const prevDate = prev && this.toDate(prev.date, prev.startTime || '12:00')

      return currentDate === prevDate
    },
    isLight(key) {
      return this.hideBorder(key) || this.hideDate(key)
    },
    isOld(date, time) {
      return moment(this.toTimezone(date, time)) < moment()
    },
    toDate(date, time) {
      return moment(this.toTimezone(date, time)).format('ddd, MMM D')
    },
    toTime(date, time) {
      return moment(this.toTimezone(date, time)).format('HH:mm')
    },
    toTimezone(date, time) {
      return (
        moment
          // set base time with UTC
          // get timezone with i18n API - Intl.DateTimeFormat().resolvedOptions().timeZone
          // usage: 2020-08-04 08:00
          .tz(`${date} ${time}`, 'UTC')
          // use client's locale time zone
          .tz(moment.tz.guess())
      )
    },
  },
}
</script>

<style lang="stylus" scoped>
.section
  @media $breakpoint-medium
    padding-bottom 0

.schedule
  grid-column 1 / -1
  @media $breakpoint-xl
    grid-column 2 / span 10

.event-header
  &._old
    opacity: 0.5
  .date
    grid-column 1 / -1
    display flex
    justify-content space-between
    @media $breakpoint-medium
      grid-column span 3
      flex-direction column
      .day._mobile
        visibility hidden
    @media $breakpoint-xl
      grid-column span 4
      display grid
      grid-template-columns: repeat(2, 1fr)
      gap var(--spacing-4)
  .tm-title
    position relative
    grid-column 1 / -1
    margin-top var(--spacing-7)
    @media $breakpoint-medium
      grid-column span 4
      margin-top 0
    @media $breakpoint-xl
      grid-column span 7

.avatars
  width 2.5rem
  margin-top var(--spacing-6)
  @media $breakpoint-medium
    position absolute
    top 0
    left 100%
    width 2.5rem
    margin-top 0
    font-size 0
    img
      width 2.5rem

.col-small
  grid-column 1 / -1
  @media $breakpoint-medium
    grid-column span 3
  @media $breakpoint-xl
    grid-column span 3

.col-info
  grid-column 1 / -1
  margin-top var(--spacing-8)
  @media $breakpoint-medium
    grid-column span 5
    margin-top 0
  @media $breakpoint-xl
    grid-column 5 / span 6
</style>
