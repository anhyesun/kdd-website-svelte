import adapter from '@sveltejs/adapter-netlify'
import {vitePreprocess} from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      edge: true,
    }),
  },
  vitePlugin: {
    inspector: true,
  },
}

export default config
