<script lang="ts">
  import largeStatImg from '$lib/images/stat-large.png'
  // import smallStatImg from '$lib/images/stat-small.png'
  export let stats: Stats
</script>

<div class="flex flex-row justify-center h-96 space-x-4">
  <img src="{largeStatImg}" alt="stat image" height="450" />
  <!--  <img src="/src/lib/images/stat-small.png" height="250" width="251"/>-->
  <div class="flex flex-column py-20 justify-around text-5xl font-extrabold text-center">
    <h2>Since July 2017</h2>
    <h2>{stats?.eventsCount ?? 50} Meetups</h2>
    <h2>{stats?.members ?? 1500} Members</h2>
  </div>

</div>
