import {error, json} from '@sveltejs/kit'
import type {RequestHandler} from './$types'

export const GET = (({url}) => {
  url.searchParams.get('id')

  return new Response(String('hello world'))
}) satisfies RequestHandler
