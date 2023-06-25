<script lang="ts">
  export let sponsors: DB.Sponsor[] = []
</script>

<div class="flex-center sm:flex-row gap-8 [&>a]:w-60">
  {#each sponsors as sponsor}
    <a href={sponsor.link}>
      <img class="w-full" src={sponsor.logo?.url} alt={sponsor.name} />
    </a>
  {/each}
</div>
