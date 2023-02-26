<script lang="ts">
  import moment from 'moment'
  export let event: Event
</script>

<h1>Upcoming Event</h1>
<div class="flex-center flex flex-row">
  <img class="h-80 w-auto object-cover" src={event.poster?.url} alt="last event" />
  <div class="h-80 w-96 flex-row overflow-hidden bg-gray-highlight px-8">
    <p>dateString: {moment(event.date).format('LL LT')}</p>
    <p>dateDescription: {moment(event.date).fromNow()}</p>
    <p>title: {event.title}</p>
    <p>description: {event.description}</p>
    <p>joinLink: {event.joinLink}</p>
  </div>
</div>
