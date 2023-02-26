<script lang="ts">
  import {Button, EventCard, Section, Stats, Sponsors, Photo} from '$lib/components'
  // import LinkedIn from 'svelte-icons/fa/FaLinkedIn.svelte'
  // import Slack from 'svelte-icons/fa/FaSlack.svelte'
  import ellipse from '$lib/images/ellipse.svg'
  import type {PageData} from './$types'
  export let data: PageData

  $: isPastEvent = new Date(data.events?.[0]?.date).getMilliseconds() < new Date().getMilliseconds()
</script>

<div class="flex flex-col gap-10">
  <section class={`flex-center h-screen bg-[url('$lib/images/hero-bg.jpg')] bg-cover bg-center`}>
    <div class="flex items-center gap-8 text-center text-white px-4">
      <h1 class="text-4xl md:text-5xl font-bold text-shadow-lg">Vancouver KDD</h1>
      <h2 class="text-lg md:text-xl">
        저희는 밴쿠버 한인 개발자 디자이너로 이루어져 있으며 네트워킹 및 한인 사회에 기여를 추구하는
        모임 입니다.
      </h2>
      <div class="flex flex-row gap-8">
        <Button class="gap-2">
          <!-- <div class="h-5"><LinkedIn /></div> -->
          LINKEDIN
        </Button>
        <Button class="gap-2">
          <!-- <div class="h-5"><Slack /></div> -->
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
    <EventCard event={data.events?.[0]} />
  </Section>

  <!-- 
<section>
 <h1>Photos</h1>
 <div class="flex flex-row gap-8 overflow-hidden">
   {#each data.photos as photo}
     <Photo {photo} />
   {/each}
 </div>
</section> -->

  <Section title="Contact Us" />
</div>
