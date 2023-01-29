<script lang="ts">
  import Event from '$lib/components/Event.svelte'
  import type {PageData} from './$types'
  export let data: PageData
  const {events} = data
</script>

<section>
  <h1>Upcoming Event</h1>
  {#each events as event}
    <Event {event} />
  {/each}
</section>
