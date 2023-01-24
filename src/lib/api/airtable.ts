import {AIRTABLE_TOKEN, AIRTABLE_KDD_BASE} from '$env/static/private'
import Airtable from 'airtable'
Airtable.configure({apiKey: AIRTABLE_TOKEN})

export const getLatestEvents = async ({limit}: {limit: number}) => {
  const base = Airtable.base(AIRTABLE_KDD_BASE)
  const eventRecords = await base('Events')
    .select({pageSize: limit, sort: [{field: 'date', direction: 'desc'}]})
    .firstPage()
  return eventRecords.map((event) => {
    const {
      id,
      fields: {date, duration, title, description, joinLink, location, photos},
    } = event
    return {id, date, duration, title, description, joinLink, location, photos}
  })
}
