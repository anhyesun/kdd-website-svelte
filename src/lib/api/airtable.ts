import {AIRTABLE_TOKEN, AIRTABLE_KDD_BASE} from '$env/static/private'
import Airtable from 'airtable'
Airtable.configure({apiKey: AIRTABLE_TOKEN})
import type {Attachment} from 'airtable'

export const getLatestEvents = async ({limit}: {limit: number}) => {
  const base = Airtable.base(AIRTABLE_KDD_BASE)
  const records = await base('Events')
    .select({pageSize: limit, sort: [{field: 'date', direction: 'desc'}]})
    .firstPage()
  return records.map((record) => {
    const {
      id,
      fields: {date, duration, title, description, joinLink, location, poster},
    } = record
    return {id, date, duration, title, description, joinLink, location, poster}
  })
}

export const getStats = async () => {
  const base = Airtable.base(AIRTABLE_KDD_BASE)
  const records = await base('Stats').select({maxRecords: 1}).firstPage()
  return {
    eventsCount: records[0]?.fields?.eventsCount,
    members: records.at(0)?.fields?.members,
  }
}

export const getSponsors = async () => {
  const base = Airtable.base(AIRTABLE_KDD_BASE)
  const records = await base('Sponsors').select().firstPage()
  return records.map((record) => {
    const name = record.fields.name as string
    const logo = (record.fields.logo as Attachment[])?.[0]
    const link = record.fields.link as string
    return {name, logo, link}
  })
}

export const getPhotos = async () => {
  const base = Airtable.base(AIRTABLE_KDD_BASE)
  const records = await base('Photos').select().firstPage()
  return records.map((record) => {
    const name = record.fields.name as string
    const logo = (record.fields.logo as Attachment[])?.[0]
    const link = record.fields.link as string
    return {name, logo, link}
  })
}
