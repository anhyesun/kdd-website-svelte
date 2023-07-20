import {getLatestEvents, getStats, getSponsors, getPhotos} from '$lib/api/airtable'
import type {PageServerLoad} from './$types'

export const load = (async () => {
  const event = (await getLatestEvents({limit: 1}))?.[0]
  const stats = await getStats()
  const sponsors = await getSponsors()
  const photos = await getPhotos({limit: 20})
  return {event, stats, sponsors, photos}
}) satisfies PageServerLoad
