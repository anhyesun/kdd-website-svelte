declare interface Sponsor {
  name: string
  logo: Attachment
  link: string
}

declare interface Photo {
  id: string
  title: string
  description: string
  photos: Attachment[]
  EventsId: string
}

declare interface Stats {
  eventsCount: number
  members: number
}

declare interface Event {
  id: string
  date: string
  duration: number
  title: string
  description: string
  joinLink: string
  location: string
  poster: Attachment
  PhotosIds: string[]
}
