<script lang="ts">
  import moment from 'moment'
  export let event: Event
</script>

<div>
  <img class="w-96" src={event.poster?.url} alt="last event" />
  <div>dateString: {moment(event.date).format('LL LT')}</div>
  <div>dateDescription: {moment(event.date).fromNow()}</div>
  <div>title: {event.title}</div>
  <div>description: {event.description}</div>
  <div>joinLink: {event.joinLink}</div>
</div>
