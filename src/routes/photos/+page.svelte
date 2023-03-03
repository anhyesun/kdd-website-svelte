<script lang="ts">
  import Photo from '$lib/components/Photo.svelte'
  import type {PageServerData} from './$types'
  export let data: PageServerData
</script>

<section>
  <h1>Photos</h1>
  <div class="flex-row gap-8 [&>a]:w-60">
    {#each data.photos as photo}
      <Photo {photo} />
    {/each}
  </div>
</section>
