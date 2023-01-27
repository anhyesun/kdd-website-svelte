import {getLatestEvents, getStats, getSponsors} from '$lib/api/airtable'
import type {PageServerLoad} from './$types'

export const load = (async () => {
  const events = await getLatestEvents({limit: 1})
  const stats = await getStats()
  const sponsors = await getSponsors()
  return {events, stats, sponsors}
}) satisfies PageServerLoad
