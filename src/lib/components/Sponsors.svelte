<script lang="ts">
  export let sponsors: Sponsor[] = []
</script>

<div class="flex-column bg-gray-highligh flex-center flex bg-gray-highlight">
  <h1 class="text-4xl font-bold">Sponsors</h1>
  <div class="flex flex-row gap-8 [&>a]:w-60">
    {#each sponsors as sponsor}
      <a href={sponsor.link}>
        <img class="w-full" src={sponsor.logo?.url} alt={sponsor.name} />
      </a>
    {/each}
  </div>
</div>
