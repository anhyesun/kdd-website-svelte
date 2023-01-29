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
      fields: {
        date,
        duration,
        title,
        description,
        joinLink,
        location,
        poster: attachments,
        PhotosIds,
      },
    } = record
    return {
      id,
      date,
      duration,
      title,
      description,
      joinLink,
      location,
      poster: (attachments as Attachment[])?.[0],
      PhotosIds,
    }
  }) as Event[]
}

export const getStats = async () => {
  const base = Airtable.base(AIRTABLE_KDD_BASE)
  const records = await base('Stats').select({maxRecords: 1}).firstPage()
  return {
    eventsCount: records[0]?.fields?.eventsCount as number,
    members: records.at(0)?.fields?.members as number,
  } as Stats
}

export const getSponsors = async () => {
  const base = Airtable.base(AIRTABLE_KDD_BASE)
  const records = await base('Sponsors').select().firstPage()
  return records.map((record) => {
    const name = record.fields.name as string
    const logo = (record.fields.logo as Attachment[])?.[0]
    const link = record.fields.link as string
    return {name, logo, link}
  }) as Sponsor[]
}

export const getPhotos = async () => {
  const base = Airtable.base(AIRTABLE_KDD_BASE)
  const records = await base('Photos').select().firstPage()
  return records.map((record) => {
    const id = record.id
    const title = record.fields.title as string
    const description = record.fields.description as string
    const photos = record.fields.photos as Attachment[]
    const EventsId = (record.fields.EventsId as string[])?.[0]
    return {id, title, description, photos, EventsId}
  }) as Photo[]
}
