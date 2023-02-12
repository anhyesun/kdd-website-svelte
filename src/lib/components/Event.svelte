<script lang="ts">
  import moment from 'moment'
  export let event: Event
</script>

<h1>Upcoming Event</h1>
<div class="flex flex-row flex-center">
  <img class="w-auto h-80 object-cover" src={event.poster?.url} alt="last event" />
  <div class="flex-row w-96 h-80 overflow-hidden bg-gray-highlight px-8">
    <p>dateString: {moment(event.date).format('LL LT')}</p>
    <p>dateDescription: {moment(event.date).fromNow()}</p>
    <p>title: {event.title}</p>
    <p>description: {event.description}</p>
    <p>joinLink: {event.joinLink}</p>
  </div>
</div>
