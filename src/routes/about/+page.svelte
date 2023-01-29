<script lang="ts">
  import Organizer from '$lib/components/Organizer.svelte'
  import type {PageData} from './$types'
  export let data: PageData
</script>

<section>
  <h1>Organizers</h1>
  <div class="grid grid-cols-3">
    {#each data.organizers as organizer}
      <Organizer {organizer} />
    {/each}
  </div>
</section>
