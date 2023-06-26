<script lang="ts">
  import {DateTime} from 'luxon'
  import {Button} from '$lib/components'
  export let event: DB.Event

  $: isPastEvent = DateTime.fromISO(event.date).diffNow().toMillis() < 0
</script>

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
      {event.description ?? ''}
    </p>
    {#if event.joinLink}
      <Button disabled={isPastEvent} class="rounded-full" href={event.joinLink}>
        {isPastEvent ? 'CLOSED' : 'RSVP'}
      </Button>
    {/if}
  </div>
</div>
