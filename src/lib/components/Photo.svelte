<script lang="ts">
  export let photo: Photo
  const {id, title, description, photos, EventsId} = photo
</script>

<div>
  <div class="flex flex-row gap-2">
    <img
      class="w-84 h-56 object-cover"
      src={photos[0].url}
      alt="img: {description} {photos[0].filename}"
      loading="lazy" />
    <!--{#each photos as photo}-->
    <!--  <img class="h-56 w-84" src={photo.url} alt="img: {description} {photo.filename}" loading="lazy" />-->
    <!--{/each}-->
  </div>
  <div>title: {title}</div>
  <div>description: {description}</div>
</div>
