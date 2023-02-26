<script lang="ts">
  import {EventCard, Section} from '$lib/components'
  import comingSoonPoster from '$lib/images/coming-soon.jpg'
  import type {PageData} from './$types'
  export let data: PageData
  const {events} = data

  const pastEvents: Event[] = []
  const upcomingEvents: Event[] = []
  const now = new Date().getMilliseconds()
  events.forEach((event) => {
    if (new Date(event.date).getMilliseconds() < now) {
      pastEvents.push(event)
    } else {
      upcomingEvents.push(event)
    }
  })
</script>

<div class="flex gap-16">
  <Section title="Upcoming Event">
    {#if upcomingEvents.length > 0}
      {#each upcomingEvents as event}
        <EventCard {event} />
      {/each}
    {:else}
      <div
        class="max-h-72 rounded-md overflow-hidden md:flex-row grid max-md:grid-cols-1 md:grid-cols-2">
        <div class="h-full overflow-hidden">
          <img
            class="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
            src={comingSoonPoster}
            alt="event poster" />
        </div>
        <div class="h-full flex bg-gray-100 p-6 gap-3 flex-center">
          <h3 class="text-2xl font-bold line-clamp-1">No Upcoming Event</h3>
          <h4 class="text-lg font-medium line-clamp-1">Check Back Soon!</h4>
        </div>
      </div>
    {/if}
  </Section>

  <Section title="Past Events">
    {#each pastEvents as event}
      <EventCard {event} />
    {/each}
  </Section>
</div>
