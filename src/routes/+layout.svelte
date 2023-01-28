<script lang="ts">
  import '../app.sass'
  import kddLogo1 from '$lib/images/logo_kr_white_horizontal.svg'
  import kddLogo2 from '$lib/images/logo_kr_color_horizontal.png'
  import {page} from '$app/stores'
  $: isHome = $page.url.pathname === '/'
</script>

<nav
  class={'flex flex-row justify-between m-auto max-w-screen-lg p-4 pt-10 z-30'}
  class:absolute-fill-x={isHome}
>
  <a href="/" class="w-36"><img src={isHome ? kddLogo1 : kddLogo2} alt="kdd logo" /></a>
  <div class="{'flex flex-row gap-6 font-bold [&>a]:p-2 '}{isHome ? 'text-white' : 'text-black'}">
    <a href="/about-us">About Us</a>
    <a href="/events">Events</a>
    <a href="/photos">Photos</a>
  </div>
</nav>
<slot />
<footer class="max-w-screen-lg m-auto p-4 text-center">Footer</footer>
