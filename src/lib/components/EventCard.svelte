<script lang="ts">
  import {DateTime} from 'luxon'
  import {Button} from '$lib/components'
  import {Marked} from '@ts-stack/markdown'

  Marked.setOptions({sanitize: true})
  export let event: DB.Event
  let dialog: HTMLDialogElement

  $: isPastEvent = DateTime.fromISO(event.date).diffNow().toMillis() < 0
</script>

<button on:click={() => dialog?.showModal()}>
  <div class="w-full rounded-md grid max-md:grid-cols-1 md:grid-cols-2">
    <div class="h-full md:max-h-72 overflow-hidden">
      <img
        class="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
        src={event.poster?.url}
        alt="event poster" />
    </div>
    <div class="h-full flex-col min-h-40 bg-gray-100 p-6 gap-3">
      <div class="text-sm">
        <p>
          {DateTime.fromISO(event.date).toFormat('LLL dd, H:mm a')}
        </p>
        <p class="font-medium">{event.location ?? ''}</p>
      </div>
      <h3 class="text-2xl font-bold line-clamp-1">{event.title ?? ''}</h3>
      <p class="line-clamp-6 md:line-clamp-4 text-sm">
        {@html Marked.parse(event.description ?? '')}
        <!-- {event.description ?? ''} -->
      </p>
      {#if event.joinLink}
        <Button
        on:click={e=> {
          e.stopImmediatePropagation()
        }}
        disabled={isPastEvent} class="rounded-full" href={event.joinLink} target="_blank">
          {isPastEvent ? 'CLOSED' : 'RSVP'}
        </Button>
      {/if}
    </div>
  </div>
</button>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
  bind:this={dialog}
  on:click={() => dialog.close()}
  class="bg-transparent backdrop-blur-sm max-w-3xl max-h-full">
  <div class="rounded-md grid backdrop-blur-sm">
    <div class="h-full md:max-h-120 overflow-hidden">
      <img
        class="h-full w-full object-cover transition-transform duration-500"
        src={event.poster?.url}
        alt="event poster" />
    </div>
    <div class="flex-col min-h-40 max-h-72 overflow-y-auto bg-gray-100 p-6 gap-3">
      <div class="text-sm">
        <p>
          {DateTime.fromISO(event.date).toFormat('LLL dd, H:mm a')}
        </p>
        <p class="font-medium">{event.location ?? ''}</p>
      </div>
      <h3 class="text-2xl font-bold line-clamp-1">{event.title ?? ''}</h3>
      <p class="text-sm">
        {@html Marked.parse(event.description ?? '')}
        <!-- {event.description ?? ''} -->
      </p>
      {#if event.joinLink}
        <Button disabled={isPastEvent} class="rounded-full" href={event.joinLink}>
          {isPastEvent ? 'CLOSED' : 'RSVP'}
        </Button>
      {/if}
    </div>
  </div>
</dialog>
