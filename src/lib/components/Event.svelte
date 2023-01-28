<script lang="ts">
  import moment from 'moment'
  export let event: any
</script>

<div>
  <img class="w-96" src={event.poster?.[0].url} alt="last event" />
  <div>dateString: {moment(String(event.date)).format('LL LT')}</div>
  <div>dateDescription: {moment(String(event.date)).fromNow()}</div>
  <div>title: {event.title}</div>
  <div>description: {event.description}</div>
  <div>joinLink: {event.joinLink}</div>
</div>
