import {AIRTABLE_TOKEN, AIRTABLE_KDD_BASE} from '$env/static/private'
import type {LayoutServerLoad} from './$types'
import Airtable from 'airtable'
Airtable.configure({apiKey: AIRTABLE_TOKEN})

export const load = (async ({params}) => {
  const base = Airtable.base(AIRTABLE_KDD_BASE)
  await base('Events')
    .select({
      // Selecting the first 3 records in Event List:
      maxRecords: 3,
      view: 'Event List',
      sort: [{field: 'date', direction: 'desc'}],
    })
    .eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (record) {
        console.log('Retrieved', record.get('title'))
      })

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage()
    })

  return {
    events: ['await db.getPost(params.slug)'],
  }
}) satisfies LayoutServerLoad
