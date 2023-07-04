<script lang="ts">
  import type {Attachment} from 'airtable'

  export let dbPhotos: DB.Photo[]
  let dialog: HTMLDialogElement
  let selectedPhotoAttachment: null | Attachment = null
  $: selectedPhotoAttachment ? dialog?.showModal() : dialog?.close()
</script>

{#each dbPhotos as { title, description, photos, id } (id)}
  {#if photos}
    {#each photos as photo (photo.id)}
      <button on:click={() => (selectedPhotoAttachment = photo)}>
        <div class="bg-slate-200 h-72 w-96 overflow-clip rounded">
          <img
            class="w-full h-full object-cover hover:scale-125 transition-transform"
            src={photo.url}
            alt="{description} {photo.filename}"
            loading="lazy" />
        </div>
        <div class="text-lg font-bold">{title}</div>
        <div>{description}</div>
      </button>
    {/each}
  {/if}
{/each}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
  bind:this={dialog}
  on:click={() => dialog.close()}
  on:close={() => (selectedPhotoAttachment = null)}
  class="bg-transparent backdrop-blur-sm max-w-full max-h-full">
  <div class="w-screen h-screen p-20">
    <img
      class="w-full h-full object-contain rounded"
      src={selectedPhotoAttachment?.url}
      alt={selectedPhotoAttachment?.filename} />
  </div>
</dialog>
