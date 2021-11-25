<template>
  <section id="faq" class="tm-section section mx-6">
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
            <div v-for="(item, key) in questions" :key="item.title">
              <tm-collapse-item v-if="key <= questions.length / 2">
                <div slot="header">
                  <div class="title tm-lh-copy tm-rf0 tm-bold tm-title">
                    {{ item.question }}
                  </div>
                </div>
                <div
                  class="tm-lh-copy tm-rf0 tm-normal tm-muted"
                  v-html="item.answer"
                />
              </tm-collapse-item>
            </div>
          </div>
          <div class="column">
            <div v-for="(item, key) in questions" :key="item.title">
              <tm-collapse-item v-if="key > questions.length / 2">
                <div slot="header">
                  <div class="title tm-lh-copy tm-rf0 tm-bold tm-title">
                    {{ item.question }}
                  </div>
                </div>
                <div
                  class="tm-lh-copy tm-rf0 tm-normal tm-muted"
                  v-html="item.answer"
                />
              </tm-collapse-item>
            </div>
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
      questions: [
        {
          question: 'What is a hackathon?',
          answer:
            'A hackathon is an event that is usually hosted by a tech organization, that invites developers and programmers to contribute their work over a short period of time, often collaborating on a project together. HackAtom VI lasts for one month and all submissions must be received by Wednesday December 8, 2021 at 19:00 CET. Hackathons usually take the shape of a competition to incentivize participants to produce their best work.',
        },
        {
          question: 'Who can participate in the hackathon?',
          answer:
            'Anyone with an interest and an internet connection can take part as long as they live in a jurisdiction that legally allows them to. Individuals who are residents of a country, state, or territory in which the laws of the United States or local laws prohibit them from receiving a prize in a hackathon must unfortunately abstain. Click here for further details.',
        },
        {
          question: 'Are there any prerequisites or required skills?',
          answer:
            'The hackathon is an event designed for developers. Therefore, if you do not have previous experience or interest in web development, smart contract or blockchain development, this is not the event for you. Aside from that, each challenge has its own specific requirements section, so be sure that you can meet the criteria before you apply.',
        },
        {
          question: 'Why would I participate in HackAtom VI?',
          answer:
            'You will have the chance to improve your skills, gain access to some of the very best mentors and developers in their fields, learn more about Cosmos technology, be a part of this burgeoning community and help build the decentralized web. You may also compete for your share of $1,000,000 in ATOM distributed over the different challenges.',
        },
        {
          question: 'Will there be any training?',
          answer:
            'Yes. There will be training and workshops for all categories. Live training sessions will be accessible afterward on the website as well.',
        },
        {
          question: 'Do I need to pay to participate?',
          answer:
            'Joining the hackathon is completely free of charge, however, you must also use your own resources for the competition.',
        },
        {
          question: 'Where can I find the descriptions of all the categories?',
          answer:
            'Full descriptions of all the categories can be found on the HackAtom VI website here.',
        },
        {
          question: 'How long will the event last?',
          answer: `<p>The HackAtom VI event will last for one month online with two additional in-person events.</p>
            <p>The first event is in Berlin (HackAtom VI warmup) Oct 29, and the second, the Official Opening Ceremony, is in Lisbon on Nov 11.</p>
            <p>Online registrations open on Wednesday October 27, at 19:00 CET. The hacking phase begins on November 11 and lasts until December 8 when the submissions are due. The Winners are announced on December 16.</p>`,
        },
        {
          question: 'How can I participate?',
          answer: 'You can register on Devpost - Link to be provided',
        },
        {
          question: 'Where can I find the rules?',
          answer:
            'There is a page on DevPost with the rules which you can find by clicking here.',
        },
        {
          question: 'How many challenges can I submit a project to?',
          answer:
            'You can submit the same project to only one category. There is an exception, though. The team or the participant who successfully builds an individual project by combining at least two different challenges can submit their project for the Grand Prix Prize award, in addition to submitting it to the challenge of their choice.',
        },
        {
          question: 'Can I participate alone or do I have to be in a team?',
          answer:
            'Yes. You can participate alone. However, if you are looking for a team to join, you can meet other participants in the Airmeet Networking Lounge or you can post on the Discord ‘Find a Team’ sub channel.',
        },
        {
          question:
            'Is there a place I can connect with other people who are looking for a team?',
          answer:
            'Yes. Same as above. You can use the Networking Lounge in Airmeet or you can post on the Discord ‘Find a Team’ sub channel.',
        },
        {
          question: 'Is there a maximum number of people per team?',
          answer:
            'Team sizes can be between 1-10 people. However, if you are forming a team, we advise small groups of 4-6 in order to avoid complexities.',
        },
        {
          question:
            'How can I get in touch with the team behind the challenges?',
          answer:
            'To find a team, join this discussion table at Airmeet to introduce yourself or contact them via the Discord dedicated challenge sub channels.',
        },
        {
          question: 'Where can I find support for technical questions?',
          answer: `<p>We are here to support you. We have created a sub channel on Discord for each sponsor team that has put out a challenge under the HackAtom categories. The engineers from each sponsored challenge are rotating to give answers to your technical questions. In addition to this, we are scheduling virtual mentor office hours which you can book to discuss your issues with the mentors.</p>
            <p>Finally, we are planning AMA brainstorming sessions for each challenge, where you can drop in to listen to questions as well as discuss issues you might be facing.</p>`,
        },
        {
          question:
            'How can I reserve a rehearsed spot with the current award team to which I want to submit my project?',
          answer: `You can't reserve a spot, but we ask everyone to submit their project with a video. We will share the video with the judges as well as the community for voting.`,
        },
        {
          question: 'When are mentors available on Discord?',
          answer:
            'Mentors are available throughout the day. We aim to respond to you no later than 5 hours from the time you contact us.',
        },
        {
          question:
            'Where can I find useful links for troubleshooting and fundamentals related to the category I want to participate in?',
          answer:
            'Each challenge has its own resource section, which you can refer to. You can also go to the subchannel on the challenge you are trying to tackle, to contact mentors directly.',
        },
        {
          question:
            'Can I submit a project I have already started or submitted to another competition?',
          answer:
            'No. Only work completed during the hackathon will be accepted.',
        },
        {
          question: 'Will there be workshops dedicated to my category?',
          answer:
            'Yes. There will be workshops dedicated to most existing categories held either in-person in Berlin and Lisbon or online. All live sessions will be recorded so that you can access the workshops at any time. However, we strongly recommend that you participate in the live events as you will have the chance to interact and ask questions.',
        },
        {
          question: 'How will the workshops be structured?',
          answer:
            'The workshops are either online or in-person. We have selected workshop hosts based on their experience in relation to the challenges and categories, in order to provide you with support.',
        },
        {
          question: 'How will projects be judged and by whom?',
          answer: `<p>You can find out more about the judging criteria at this link here. The judges are core team members of Tendermint, Interchain Foundation (ICF), other core contributing teams, and of the hackathon sponsors. You can find out more about the judges here.</p>
            <p>All submissions will be assessed by the challenge judges that are representing the challenges. Once they have made a selection, together with the board of judges, they will discuss the outcome.</p>`,
        },
        {
          question:
            'Will there be a showcase day? If so, when and how will it take place?',
          answer:
            'We are only going to showcase the winners. However, we aim to keep all project video submissions on YouTube and share with our community.',
        },
        {
          question:
            'Is there a possibility of receiving a grant after the HackAtom to continue the project?',
          answer: `Yes. This will be at the participating team's discretion after the prizes are distributed.`,
        },
        {
          question: 'What if I join the competition later?',
          answer: 'You can join the competition at any time.',
        },
        {
          question: 'How and when will the prizes be paid?',
          answer: `The prizes will be paid in ATOM directly to participants' wallets up to 30 days after the award ceremony, which will take place on December 16. The prize in $ATOM will be calculated at the December 16, 2021 closing price of coinmarketcap.com.`,
        },
        {
          question: 'Is it mandatory to join in-person events?',
          answer:
            'No, it is not mandatory to join in-person events as HackAtom VI will be held virtually online. Anyone with an internet connection can take part.',
        },
        {
          question: 'What is Cosmos?',
          answer: `<p>Cosmos is a rapidly expanding ecosystem of independent interconnected blockchains built using developer-friendly application components and connected with the ground-breaking Inter-Blockchain Communication protocol (IBC). There are currently more than 250 blockchain apps and services in the Cosmos network, including Binance Chain, Terra, Crypto.org, Cosmos Hub, and Osmosis, with over $120 billion of digital assets under management.</p>
            <p>All Cosmos chains are built using environmentally-friendly Proof-of-Stake (PoS) technology, which allows them to be highly sustainable and scalable with an estimated 99% lower carbon footprint than leading Proof-of-Work (PoW) blockchains. With Cosmos, developers can build entirely autonomous application-specific blockchains that can easily interconnect, self-govern, follow their own economic models with low transaction fees, and scale for mainstream adoption.</p>`,
        },
        {
          question: 'What is IBC?',
          answer:
            'Alongside the Tendermint high-performance Byzantine fault-tolerant (BFT) consensus engine, one of the main innovations of the Cosmos Network is the robust and secure Inter-Blockchain Communication protocol (IBC), the Cosmos standard for interoperability. This protocol enables communication and digital asset transfers across an ever-expanding network of interconnected blockchains.',
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
