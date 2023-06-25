<script lang="ts">
  import type {PageServerData} from './$types'
  import {Photos} from '$lib/components'
  export let data: PageServerData
</script>

<section class="flex-center flex-col">
  <h1 class="text-3xl font-bold p-10">Photos</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
    <Photos dbPhotos={data.photos} />
  </div>
</section>
