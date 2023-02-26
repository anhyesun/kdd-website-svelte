<script lang="ts">
  import largeStatImg from '$lib/images/stat-large.png'
  // import smallStatImg from '$lib/images/stat-small.png'
  export let stats: Stats
</script>

<div class="flex h-96 flex-row justify-center space-x-4">
  <img src={largeStatImg} alt="stat" height="450" />
  <!--  <img src="/src/lib/images/stat-small.png" height="250" width="251"/>-->
  <div class="flex-column flex justify-around py-20 text-center text-5xl font-extrabold">
    <h2>Since July 2017</h2>
    <h2>{stats?.eventsCount ?? 50} Meetups</h2>
    <h2>{stats?.members ?? 1500} Members</h2>
  </div>
</div>
