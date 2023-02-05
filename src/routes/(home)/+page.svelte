<script lang="ts">
  import Button from '$lib/components/Button.svelte'
  // import LinkedIn from 'svelte-icons/fa/FaLinkedIn.svelte'
  // import Slack from 'svelte-icons/fa/FaSlack.svelte'
  import Event from '$lib/components/Event.svelte'
  import Stats from '$lib/components/Stats.svelte'
  import Sponsors from '$lib/components/Sponsors.svelte'
  import Photo from '$lib/components/Photo.svelte'
  import type {PageData} from './$types'
  export let data: PageData
</script>

<section class={`flex-center h-screen bg-[url('$lib/images/hero-bg.jpg')] bg-cover bg-center`}>
  <div class="flex items-center gap-8 text-center text-white ">
    <h1 class="text-5xl font-bold text-shadow-lg">Vancouver KDD</h1>
    <h2 class="text-xl">
      저희는 밴쿠버 한인 개발자 디자이너로 이루어져 있으며 네트워킹 및 한인 사회에 기여를 추구하는
      모임 입니다.
    </h2>
    <div class="flex flex-row gap-8">
      <Button secondary className="gap-2">
        <!-- <div class="h-5"><LinkedIn /></div> -->
        LINKEDIN
      </Button>
      <Button secondary className="gap-2">
        <!-- <div class="h-5"><Slack /></div> -->
        JOIN SLACK
      </Button>
    </div>
  </div>
</section>

<section>
  <h1>Stats</h1>
  <Stats stats={data.stats} />
</section>

<section>
  <h1>Sponsors</h1>
  <Sponsors sponsors={data.sponsors} />
</section>

<section>
  <h1>Photos</h1>
  <div class="flex flex-row gap-8">
    {#each data.photos as photo}
      <Photo {photo} />
    {/each}
  </div>
</section>

<section>
  <h1>Upcoming Event</h1>
  <Event event={data.events?.[0]} />
</section>
