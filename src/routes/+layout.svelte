<script lang="ts">
  import '../app.sass'
  import kddLogo1 from '$lib/images/logo_kr_white_horizontal.svg'
  import kddLogo2 from '$lib/images/logo_kr_color_horizontal.png'
  import {page} from '$app/stores'
  $: isHome = $page.url.pathname === '/'

  import type {LayoutServerData} from './$types'
  export let data: LayoutServerData
  const {developers, supporters} = data
</script>

<nav
  class={'z-30 m-auto flex max-w-screen-lg flex-row justify-between p-4 pt-10'}
  class:absolute-fill-x={isHome}
>
  <a href="/" class="w-36"><img src={isHome ? kddLogo1 : kddLogo2} alt="kdd logo" /></a>
  <div class="{'flex flex-row gap-6 font-bold [&>a]:p-2 '}{isHome ? 'text-white' : 'text-black'}">
    <a href="/about">About Us</a>
    <a href="/events">Events</a>
    <a href="/photos">Photos</a>
  </div>
</nav>
<slot />
<footer class="m-auto max-w-screen-lg p-4 text-center">
  <div class="flex flex-row gap-4">
    {#each developers as developer}
      <a href={developer.link}>{developer.name}</a>
    {/each}
  </div>
  <div class="flex flex-row gap-4">
    {#each supporters as supporter}
      <a href={supporter.link}>{supporter.name}</a>
    {/each}
  </div>
</footer>
