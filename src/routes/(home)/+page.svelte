<script lang="ts">
  import {Button, EventCard, Section, Stats, Sponsors, Photos} from '$lib/components'
  import ellipse from '$lib/images/ellipse.svg'
  import type {PageData} from './$types'
  import {LinkedIn, Slack} from '$lib/icons'
  import {DateTime} from 'luxon'
  export let data: PageData

  $: isPastEvent = DateTime.fromISO(data.event.date).diffNow().toMillis() < 0
</script>

<div class="flex-col gap-10">
  <section class={`flex-center h-screen bg-[url('$lib/images/hero-bg.jpg')] bg-cover bg-center`}>
    <div class="flex-col items-center gap-8 text-center text-white px-4">
      <h1 class="text-4xl md:text-5xl font-bold text-shadow-lg">Vancouver KDD</h1>
      <h2 class="text-lg md:text-xl">
        저희는 밴쿠버 한인 개발자 디자이너로 이루어져 있으며 네트워킹 및 한인 사회에 기여를 추구하는
        모임 입니다.
      </h2>
      <div class="flex-row gap-8">
        <Button class="gap-2" href="https://www.linkedin.com/company/vancouver-kdd" target="_blank">
          <LinkedIn class="h-5" />
          LINKEDIN
        </Button>
        <Button
          class="gap-2"
          href="https://join.slack.com/t/vancouverkdd/shared_invite/zt-1xyhcghtg-OIgE_8OO_SmBMpyOPuH5Ew"
          target="_blank">
          <Slack />
          JOIN SLACK
        </Button>
      </div>
    </div>
    <img class="absolute bottom-0 w-full" src={ellipse} alt="ellipse" />
  </section>

  <Section>
    <Stats stats={data.stats} />
  </Section>

  <Section title="Sponsors" class="bg-gray-100 p-6">
    <Sponsors sponsors={data.sponsors} />
  </Section>

  <Section title={isPastEvent ? 'Past Event' : 'Upcoming Event'}>
    <EventCard event={data.event} />
  </Section>

  <Section title={'Photos'}>
    <div class="flex w-full overflow-x-auto gap-4 text-center">
      <Photos dbPhotos={data.photos} />
    </div>
  </Section>

  <Section title="Contact Us" class="text-center">
    <a class="text-2xl font-bold" href="mailto:vancouverkdd@gmail.com"> vancouverkdd@gmail.com </a>
  </Section>
</div>
