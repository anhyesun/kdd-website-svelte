<script lang="ts">
  export let photo: Photo
  const {id, title, description, photos, EventsId} = photo
</script>

<div>
  <div class="flex flex-row">
    {#each photos as photo}
      <img class="w-40" src={photo.url} alt="img" />
    {/each}
  </div>
  <div>title: {title}</div>
  <div>description: {description}</div>
</div>
