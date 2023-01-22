import {AIRTABLE_TOKEN} from '$env/static/private'
import type {PageServerLoad} from './$types'

export const load = (async ({params}) => {
  return {
    events: ['await db.getPost(params.slug)'],
  }
}) satisfies PageServerLoad
