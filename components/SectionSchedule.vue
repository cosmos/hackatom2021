<template>
  <section class="tm-section section mt-6">
    <div class="tm-section-container tm-container">
      <div class="tm-grid-base">
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
            All event times are listed in your local timezone ({{
              getTimezone
            }}).
          </p>

          <div class="mt-8">
            <tm-collapse accordion>
              <div v-for="event in events" :key="event.title">
                <tm-collapse-item :disabled="!event.details && !event.url">
                  <div slot="header">
                    <div class="event-header tm-grid-base">
                      <div class="date">
                        <div class="tm-code tm-rf0 tm-lh-copy">
                          {{ toDate(event.date, event.startTime) }}
                        </div>
                        <div class="tm-code tm-rf0 tm-lh-copy tm-gray">
                          <span v-if="event.place" class="show-inline-m-up">
                            {{ event.place }} -
                          </span>
                          <span v-else class="show-inline-m-up">
                            {{ event.type }} -
                          </span>
                          <span>{{ toTime(event.date, event.startTime) }}</span>
                        </div>
                      </div>
                      <div class="tm-title tm-lh-title tm-rf1 tm-bold">
                        <span>{{ event.title }}</span>
                        <div
                          v-if="event.place"
                          class="hide-m-up tm-code tm-rf0 tm-lh-copy tm-gray"
                        >
                          {{ event.place }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="event.details || event.url">
                    <div class="tm-grid-base">
                      <div class="col-small tm-title tm-lh-title tm-rf-1">
                        <div class="mt-5">
                          {{ event.type }}
                        </div>
                        <div class="mt-3 tm-gray">
                          <span>
                            {{
                              eventLength(
                                event.date,
                                event.startTime,
                                event.endTime
                              )
                            }}
                            hours
                          </span>
                          <span> · {{ event.language }}</span>
                        </div>
                      </div>
                      <div class="col-info">
                        <p class="tm-lh-copy tm-rf1">
                          {{ event.details }}
                        </p>
                        <tm-button
                          v-if="event.url"
                          class="mt-7"
                          :href="event.url"
                        >
                          <span>Attend</span>
                          <span class="icon__right">&rarr;</span>
                        </tm-button>
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
          title: 'Opening Ceremony',
          date: '2021-11-11',
          startTime: '15:00',
          endTime: '17:00',
          type: 'In Person Event',
          place: 'Lisbon',
          language: 'English',
          details:
            'Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
          url: '#',
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
    eventLength(date, start, end) {
      return moment(`${date} ${end}`).diff(moment(`${date} ${start}`), 'hours')
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
  .date
    grid-column 1 / -1
    display flex
    justify-content space-between
    @media $breakpoint-medium
      grid-column span 3
      flex-direction column
    @media $breakpoint-large
      grid-column span 4
      display grid
      grid-template-columns: repeat(2, 1fr)
      gap var(--spacing-4)
  .tm-title
    grid-column 1 / -1
    margin-top var(--spacing-7)
    @media $breakpoint-medium
      grid-column span 4
      margin-top 0
    @media $breakpoint-large
      grid-column span 7

.col-small
  grid-column 1 / -1
  @media $breakpoint-medium
    grid-column span 3
  @media $breakpoint-large
    grid-column span 3

.col-info
  grid-column 1 / -1
  margin-top var(--spacing-8)
  @media $breakpoint-medium
    grid-column span 5
    margin-top 0
  @media $breakpoint-large
    grid-column 5 / span 6
</style>
