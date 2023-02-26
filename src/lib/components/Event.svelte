<script lang="ts">
  import moment from 'moment'
  import {Button} from '$lib/components'
  export let event: Event

  $: isPastEvent = new Date(event.date).getMilliseconds() < new Date().getMilliseconds()
</script>

<div class="rounded-md overflow-hidden flex-center flex-col md:flex-row grid grid-cols-2">
  <img class="h-full object-cover" src={event.poster?.url} alt="event poster" />
  <div class="h-full flex bg-gray-100 p-6 gap-3">
    <div>
      <p>
        {moment(event.date).format('MMM D, H:MM A')}
      </p>
      <p class="font-medium">{event.location}</p>
    </div>
    <h3 class="text-2xl font-bold line-clamp-1">{event.title}</h3>
    <p class="line-clamp-5">
      {event.description}
    </p>
    <Button disabled={isPastEvent} class="rounded-full" href={event.joinLink}
      >{isPastEvent ? 'CLOSED' : 'SIGN UP'}</Button>
  </div>
</div>
