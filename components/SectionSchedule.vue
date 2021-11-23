<template>
  <section class="tm-section section mt-6 pb0" id="schedule">
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
          All event times are listed in your local timezone ({{
            getTimezone
          }}).<br />
          In person events will be live streamed.
        </p>

        <div class="mt-8">
          <tm-button
            size="l"
            variant="text"
            background-color="transparent"
            color="var(--white)"
            @click.native="isShowPast = !isShowPast"
          >
            <span v-if="isShowPast">Hide past events</span>
            <span v-else>Show past events</span>
            <span class="icon__bottom" :class="isShowPast && '_rotate'">
              &darr;
            </span>
          </tm-button>
        </div>

        <div class="mt-8">
          <tm-collapse accordion>
            <div v-for="(event, key) in events" :key="event.title">
              <tm-collapse-item
                v-if="
                  (!isOld(event.date, event.startTime) && !isShowPast) ||
                  isShowPast
                "
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
                        <span v-if="event.date">
                          {{ toDate(event.date, event.startTime || '12:00') }}
                        </span>
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
                      <span v-html="event.title" />
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
                          <span v-if="item.company">- {{ item.company }}</span>
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
                        v-html="event.details"
                      />
                      <div
                        v-if="event.url"
                        class="button__container"
                        :class="event.details && 'mt-7'"
                      >
                        <tm-button
                          v-if="event.url"
                          to-link="external"
                          :href="event.url"
                        >
                          <span v-if="event.btnText">{{ event.btnText }}</span>
                          <span v-else>Attend</span>
                          <span class="icon__right">&rarr;</span>
                        </tm-button>
                        <tm-button
                          v-if="event.livestream"
                          to-link="external"
                          variant="text"
                          background-color="transparent"
                          color="var(--white)"
                          :href="event.livestream"
                        >
                          <span v-if="event.btnText">{{ event.btnText }}</span>
                          <span v-else>Livestream</span>
                          <span class="icon__external">&nearr;</span>
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
      isShowPast: false,
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
          // url: 'https://www.youtube.com/channel/UC8HFOUdnMnpoWmQMgeKoB3A',
          // btnText: 'Watch Replay',
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
          url: 'https://youtu.be/YLziYFKfvck',
          btnText: 'Watch Replay',
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
              avatar: 'har',
              company: 'Tendermint',
            },
          ],
          details:
            'An informative workshop with Har Preet Singh, Developer Relations Engineer at Tendermint, in which you can build your own blockchain-based multiplayer game using Starport and Cosmos SDK.',
          url: 'https://youtu.be/fWbx5Zkg-ok',
          btnText: 'Watch Replay',
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
              avatar: 'callum',
              company: 'Interchain Foundation',
            },
          ],
          details:
            'The third and final workshop, given by Callum Waters, IBC Protocol Architect at ICF, will go over Inter-Blockchain Communication (IBC) and how to build an IBC-compatible app',
          url: 'https://youtu.be/ljQ30mYa-Ks',
          btnText: 'Watch Replay',
        },
        {
          title: 'HackAtom VI Opening Ceremony',
          date: '2021-11-11',
          startTime: '09:00',
          // endTime: '17:00',
          type: 'In-Person',
          place: 'Time Out Market Studio, Lisbon',
          language: 'English',
          // details:
          //   'Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
          url: 'https://www.eventbrite.com/e/hackatom-vi-opening-ceremony-tickets-203639791097',
          livestream: 'https://www.youtube.com/watch?v=6bq-JaViGRM',
        },
        {
          title: 'Opening Remarks: Welcome to HackAtom VI',
          date: '2021-11-11',
          startTime: '10:00',
          type: 'In-Person',
          place: 'Time Out Market Studio, Lisbon',
          language: 'English',
          // details: '',
          url: 'https://www.eventbrite.com/e/hackatom-vi-opening-ceremony-tickets-203639791097',
          livestream: 'https://www.youtube.com/watch?v=6bq-JaViGRM',
          people: [
            {
              name: 'Peng Zhong',
              avatar: 'peng',
              company: 'Tendermint',
            },
          ],
        },
        {
          title: 'HackAtom VI: Ready, Steady, Go!',
          date: '2021-11-11',
          startTime: '10:15',
          type: 'In-Person',
          place: 'Time Out Market Studio, Lisbon',
          language: 'English',
          // details: '',
          url: 'https://www.eventbrite.com/e/hackatom-vi-opening-ceremony-tickets-203639791097',
          livestream: 'https://www.youtube.com/watch?v=6bq-JaViGRM',
          people: [
            {
              name: 'Adriana Mihai',
              avatar: 'adriana',
              company: 'Tendermint',
            },
          ],
        },
        {
          title: 'Overview of Cosmos Ecosystem and HackAtom challenges',
          date: '2021-11-11',
          startTime: '10:30',
          type: 'In-Person',
          place: 'Time Out Market Studio, Lisbon',
          language: 'English',
          // details: '',
          url: 'https://www.eventbrite.com/e/hackatom-vi-opening-ceremony-tickets-203639791097',
          livestream: 'https://www.youtube.com/watch?v=6bq-JaViGRM',
          people: [
            {
              name: 'Tobias Schwarz',
              avatar: 'tobias',
              company: 'Tendermint',
            },
          ],
        },
        {
          title: 'Judging criteria: What we look for in a project',
          date: '2021-11-11',
          startTime: '11:15',
          type: 'In-Person',
          place: 'Time Out Market Studio, Lisbon',
          language: 'English',
          url: 'https://www.eventbrite.com/e/hackatom-vi-opening-ceremony-tickets-203639791097',
          livestream: 'https://www.youtube.com/watch?v=6bq-JaViGRM',
          people: [
            {
              name: 'Sunny Aggarwal',
              avatar: 'sunny',
              company: 'Osmosis',
            },
          ],
        },
        {
          title: 'Starport Challenges Overview',
          date: '2021-11-11',
          startTime: '11:35',
          type: 'In-Person',
          place: 'Time Out Market Studio, Lisbon',
          language: 'English',
          details: `<p>We will fire up the CLI and review Starport challenges.</p>
            <p>Code analysis for scaffolding, improving the serve command to support multi-node testnets, enhancing the build process and architecting a proper plugin system for Starport</p>`,
          url: 'https://www.eventbrite.com/e/hackatom-vi-opening-ceremony-tickets-203639791097',
          livestream: 'https://www.youtube.com/watch?v=6bq-JaViGRM',
          people: [
            {
              name: 'Denis Fadeev',
              avatar: 'denis',
              company: 'Tendermint',
            },
          ],
        },
        {
          title: 'Workshop - Creating a Loan Blockchain with Starport',
          date: '2021-11-11',
          startTime: '11:50',
          type: 'In-Person',
          place: 'Time Out Market Studio, Lisbon',
          language: 'English',
          details:
            'In this workshop we’ll create a new blockchain module for borrowing and lending tokens. The module will be created from scratch using Starport. We’ll use simple scaffolding commands to create a blockchain and add functionality to it, then we’ll go into the code and implement the business logic. By the end of the workshop you should be able to start building your own blockchains.',
          url: 'https://www.eventbrite.com/e/hackatom-vi-opening-ceremony-tickets-203639791097',
          livestream: 'https://www.youtube.com/watch?v=6bq-JaViGRM',
          people: [
            {
              name: 'Denis Fadeev',
              avatar: 'denis',
              company: 'Tendermint',
            },
          ],
        },
        {
          title: 'User Experience is the Real Gateway',
          date: '2021-11-11',
          startTime: '14:20',
          type: 'In-Person',
          place: 'Time Out Market Studio, Lisbon',
          language: 'English',
          details:
            'The experience of using blockchain has historically been very difficult for users and developers alike. Yet, broader acceptance will require good usability on both ends—and Pylons has built one way to do that. Discover the Pylons solution in this fascinating talk.',
          url: 'https://www.eventbrite.com/e/hackatom-vi-opening-ceremony-tickets-203639791097',
          livestream: 'https://www.youtube.com/watch?v=6bq-JaViGRM',
          people: [
            {
              name: 'Michael Soafer',
              avatar: 'michael',
              company: 'Pylons',
            },
          ],
        },
        {
          title:
            'Workshop - Build with me! A Cross Platform mobile blockchain experience',
          date: '2021-11-11',
          startTime: '14:35',
          type: 'In-Person',
          place: 'Time Out Market Studio, Lisbon',
          language: 'English',
          details:
            'Developing a cross platform mobile blockchain experiences with Pylons SDK.',
          url: 'https://www.eventbrite.com/e/hackatom-vi-opening-ceremony-tickets-203639791097',
          livestream: 'https://www.youtube.com/watch?v=6bq-JaViGRM',
          people: [
            {
              name: 'Mijolae Wright',
              avatar: 'avatar',
              company: 'Pylons',
            },
          ],
        },
        {
          title: 'Assignment: Earth',
          date: '2021-11-11',
          startTime: '16:25',
          type: 'In-Person',
          place: 'Time Out Market Studio, Lisbon',
          language: 'English',
          details:
            'The year is 2030. Cosmos technologies and collaborations changed the state of our planet. What happened?',
          url: 'https://www.eventbrite.com/e/hackatom-vi-opening-ceremony-tickets-203639791097',
          livestream: 'https://www.youtube.com/watch?v=6bq-JaViGRM',
          people: [
            {
              name: 'Shaun Conway',
              avatar: 'shaun',
              company: 'IXO Foundation',
            },
          ],
        },
        {
          title: 'Workshop - Sustainable DeFi! (It’s ReFi!)',
          date: '2021-11-11',
          startTime: '16:40',
          type: 'In-Person',
          place: 'Time Out Market Studio, Lisbon',
          language: 'English',
          details: `The ixo Protocol defines how to make verifiable claims about Earth States, verify these claims, issue verifiable credentials, and mint Earth Tokens of different classes, using the Interchain Identifier Specification and Token Templates. In this workshop, you'll see how to build compelling solutions with these protocols and next-generation token specifications.`,
          url: 'https://www.eventbrite.com/e/hackatom-vi-opening-ceremony-tickets-203639791097',
          livestream: 'https://www.youtube.com/watch?v=6bq-JaViGRM',
          people: [
            {
              name: 'Shaun Conway',
              avatar: 'shaun',
              company: 'IXO Foundation',
            },
          ],
        },
        {
          title: 'Opening Ceremony - Closing Remarks',
          date: '2021-11-11',
          startTime: '17:40',
          type: 'In-Person',
          place: 'Time Out Market Studio, Lisbon',
          language: 'English',
          details:
            'Booth strapping a career in the crypto industry via hackathons and grants',
          url: 'https://www.eventbrite.com/e/hackatom-vi-opening-ceremony-tickets-203639791097',
          livestream: 'https://www.youtube.com/watch?v=6bq-JaViGRM',
          people: [
            {
              name: 'Billy Rennekamp',
              avatar: 'billy',
              company: 'IBC Foundation',
            },
          ],
        },
        {
          title: 'Evening Party',
          date: '2021-11-11',
          startTime: '19:00',
          type: 'In-Person',
          place: 'Ferroviário, Lisbon',
          language: 'English',
          // details: 'Party Time!',
          url: 'https://www.eventbrite.com/e/hackatom-vi-opening-ceremony-tickets-203639791097',
        },
        {
          title: 'Building for UX with Msg Authorization and Fee Grants',
          date: '2021-11-16',
          startTime: '15:00',
          type: 'Virtual',
          details:
            'Cosmos SDK v0.43 introduced two new core modules to the Cosmos SDK. x/authz and x/feegrant can both be used independently (and in combination!) to add big benefits to end user experience of Cosmos based blockchains across the interchain. Join this workshop to learn how these two modules work, and integrate them into a blockchain application of your very own.',
          url: 'https://youtu.be/-OcyG51j2xs',
          btnText: 'Watch Replay',
          people: [
            {
              name: 'Amaury Martiny',
              avatar: 'amaury',
            },
            {
              name: 'Likhita Polavarapu',
              avatar: 'likhita',
            },
          ],
        },
        {
          title: 'Hermes relayer - Connecting IBC enabled blockchains',
          date: '2021-11-19',
          startTime: '15:00',
          type: 'Virtual',
          details:
            'In this workshop we will demonstrate how a relayer, such as Hermes, is a critical part of the infrastructure of the Interchain. We will talk about IBC and how the relayer acts as the "messenger" to make the Interchain a reality',
          url: 'https://hackatom.airmeet.com/e/8d99ec40-424e-11ec-868e-f7fade6f497c',
          people: [
            {
              name: 'Andy Nogueira',
              avatar: 'avatar',
              company: 'Informal',
            },
          ],
        },
        {
          title: 'Juno + Grantfish <> AMA Brainstorming Session',
          date: '2021-11-22',
          startTime: '16:00',
          type: 'Virtual',
          details:
            'Join an open AMA brainstorming session on Juno+Grantfish Challenge',
          url: 'https://hackatom.airmeet.com/e/8d99ec40-424e-11ec-868e-f7fade6f497c',
          people: [
            {
              name: 'Andrea di Michele',
              avatar: 'andrea',
              company: 'Juno + Grantfish',
            },
          ],
        },
        {
          title: 'ixo Foundation <> Brainstorming AMA session',
          date: '2021-11-23',
          startTime: '14:00',
          type: 'Virtual',
          details: 'Join the Brainstorming AMA Session',
          url: 'https://hackatom.airmeet.com/e/8d99ec40-424e-11ec-868e-f7fade6f497c',
          people: [
            {
              name: 'Shaun Conway',
              avatar: 'shaun',
              company: 'ixo Foundation',
            },
          ],
        },
        {
          title: 'Regen Network <> Brainstorming AMA Session',
          date: '2021-11-23',
          startTime: '16:00',
          type: 'Virtual',
          details:
            'Join AMA Brainstorming Session to ask your questions on Regen Network challenge from Robert',
          url: 'https://hackatom.airmeet.com/e/8d99ec40-424e-11ec-868e-f7fade6f497c',
          people: [
            {
              name: 'Robert Zaremba',
              avatar: 'avatar',
              company: 'Regen Network',
            },
          ],
        },
        {
          title: 'Secret Networks <> Brainstorming AMA Session',
          date: '2021-11-23',
          startTime: '18:00',
          type: 'Virtual',
          details:
            'Join the Brainstorming AMA Session on Secret Networks Challenge',
          url: 'https://hackatom.airmeet.com/e/8d99ec40-424e-11ec-868e-f7fade6f497c',
          people: [
            {
              name: 'Assaf Morami',
              avatar: 'avatar',
              company: 'Secret Network',
            },
          ],
        },
        {
          title: 'Injective Challenge <> AMA Brainstorming Session',
          date: '2021-11-24',
          startTime: '11:00',
          type: 'Virtual',
          details:
            'Join an open AMA brainstorming session on Injective Challenge',
          url: 'https://hackatom.airmeet.com/e/8d99ec40-424e-11ec-868e-f7fade6f497c',
          people: [
            {
              name: 'Bojan Angjelkoski',
              avatar: 'bojanA',
              company: 'Injective',
            },
          ],
        },
        // {
        //   title: 'Bitsong Challenge <> AMA Brainstorming Session ',
        //   date: '2021-11-24',
        //   startTime: '12:00',
        //   type: 'Virtual',
        //   details:
        //     'Join an open AMA brainstorming session on Bitsong Challenge',
        //   url: 'https://hackatom.airmeet.com/e/8d99ec40-424e-11ec-868e-f7fade6f497c',
        //   people: [
        //     {
        //       name: 'TBC',
        //       avatar: 'avatar',
        //       company: 'Bitsong',
        //     },
        //   ],
        // },
        {
          title:
            'Archway AMA Brainstorming Session <><br/>Intro to Building dApps on Archway',
          date: '2021-11-24',
          startTime: '16:00',
          type: 'Virtual',
          details:
            'Description: Learn how to get started building Cosmwasm smart contracts on Archway, a protocol that directly rewards developers. This workshop will walk through getting your environment set up and spinning up your own dApps using example frontends and starter code templates from the Archway Developer CLI.',
          url: 'https://hackatom.airmeet.com/e/8d99ec40-424e-11ec-868e-f7fade6f497c',
          people: [
            {
              name: 'Drew Taylor',
              avatar: 'drew',
              company: 'Archway',
            },
            {
              name: 'Mike Cullinan',
              avatar: 'mike',
              company: 'Archway',
            },
          ],
        },
        {
          title: 'Evmos Challenge <> AMA Brainstorming Session',
          date: '2021-11-24',
          startTime: '17:30',
          type: 'Virtual',
          details: 'Join an open AMA brainstorming session on Evmos Challenge',
          url: 'https://hackatom.airmeet.com/e/8d99ec40-424e-11ec-868e-f7fade6f497c',
          people: [
            {
              name: 'Liam',
              avatar: 'avatar',
              company: 'Evmos',
            },
          ],
        },
        {
          title: 'Pylons Challenge <> AMA Brainstorming Session',
          date: '2021-11-24',
          startTime: '19:00',
          type: 'Virtual',
          details: 'Join an open AMA brainstorming session on Pylons Challenge',
          url: 'https://hackatom.airmeet.com/e/8d99ec40-424e-11ec-868e-f7fade6f497c',
          people: [
            {
              name: 'Mijolae Wright',
              avatar: 'mijolae',
              company: 'Pylons',
            },
            {
              name: 'Alex Johnson',
              avatar: 'alexj',
              company: 'Pylons',
            },
          ],
        },
        {
          title: 'LikeCoin Challenge <> Brainstorming AMA Session',
          date: '2021-11-25',
          startTime: '09:00',
          type: 'Virtual',
          details: 'Join the Q&A session on LikeCoin Challenge!',
          url: 'https://hackatom.airmeet.com/e/8d99ec40-424e-11ec-868e-f7fade6f497c',
          people: [
            {
              name: 'William Chong',
              avatar: 'chong',
              company: 'LikeCoin',
            },
          ],
        },
        {
          title: 'Starport Challenge <> Brainstorming AMA Session',
          date: '2021-11-25',
          startTime: '14:00',
          type: 'Virtual',
          details: 'Join the Q&A session on Starport Challenge!',
          url: 'https://hackatom.airmeet.com/e/8d99ec40-424e-11ec-868e-f7fade6f497c',
          people: [
            {
              name: 'Denis Fadeev',
              avatar: 'denis',
              company: 'Starport',
            },
          ],
        },
        {
          title: 'Akash AMA Brainstorming Session',
          date: '2021-11-30',
          startTime: '13:00',
          type: 'Virtual',
          details: 'Brainstorming AMA session on Akash challenge',
          url: 'https://hackatom.airmeet.com/e/8d99ec40-424e-11ec-868e-f7fade6f497c',
          people: [
            {
              name: 'Eric Zietlow',
              avatar: 'eric',
              company: 'Akash ',
            },
            {
              name: 'Scott Carruthers',
              avatar: 'scott',
              company: 'Akash ',
            },
          ],
        },
        {
          title: 'NYM <> Brainstorming AMA Session',
          date: '2021-12-01',
          startTime: '15:00',
          type: 'Virtual',
          url: 'https://hackatom.airmeet.com/e/8d99ec40-424e-11ec-868e-f7fade6f497c',
          people: [
            {
              name: 'Max Hampshire',
              avatar: 'max',
              company: 'NYM ',
            },
          ],
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
  display flex
  justify-content flex-start
  width 2.5rem
  margin-top var(--spacing-6)
  white-space nowrap
  @media $breakpoint-medium
    justify-content center
    position absolute
    top 0
    left 100%
    width 2.5rem
    margin-top 0
    font-size 0
  @media $breakpoint-large
    justify-content flex-end
  img
    width 2.5rem
    border-radius 100%
    border 1px solid var(--bg)
  > div
    flex-shrink 0
    margin-right -0.5rem

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

.icon__bottom
  position relative
  display inline-block
  transition transform .25s $ease-out
  &._rotate
    transform scale(1, -1)

.button__container
  > *
    margin-top var(--spacing-7)
    display block
    @media $breakpoint-medium
      display inline-block
      margin-top 0
      margin-left var(--spacing-7)
    &:first-child
      margin 0
</style>
