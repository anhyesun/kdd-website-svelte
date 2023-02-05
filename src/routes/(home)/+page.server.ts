import {getLatestEvents, getStats, getSponsors, getPhotos} from '$lib/api/airtable'
import type {PageServerLoad} from './$types'

export const load = (async () => {
  const events = await getLatestEvents({limit: 1})
  const stats = await getStats()
  const sponsors = await getSponsors()
  const photos = await getPhotos({limit: 6})
  return {events, stats, sponsors, photos}
}) satisfies PageServerLoad
