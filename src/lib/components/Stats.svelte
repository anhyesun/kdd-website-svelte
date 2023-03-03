<script lang="ts">
  import largeStatImg from '$lib/images/stat-large.png'
  import smallStatImg from '$lib/images/stat-small.jpeg'
  export let stats: Stats
</script>

<div class="flex-center flex-row gap-4">
  <img class="max-sm:w-32 md:hidden" src={smallStatImg} alt="trophy" />
  <img class="max-w-sm max-md:hidden" src={largeStatImg} alt="lit up lightbulb" />
  <div class="flex-col gap-6 text-center text-xl sm:text-3xl font-extrabold md:gap-12 md:text-5xl">
    <h2>Since July 2017</h2>
    <h2>{stats?.eventsCount ?? 50} Meetups</h2>
    <h2>{stats?.members ?? 1500} Members</h2>
  </div>
</div>
