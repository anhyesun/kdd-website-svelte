<script>
  import kddLogo1 from '$lib/images/logo_kr_white_horizontal.svg'
  import kddLogo2 from '$lib/images/logo_kr_color_horizontal.png'
  import {page} from '$app/stores'
  $: isHome = $page.url.pathname === '/'
  import './styles.scss'

  const color = 'blue'
</script>

<div style="--heading: {color}" />
<nav class:isHome>
  <a href="/"><img src={kddLogo1} alt="kdd logo" /></a>
  <a href="/about-us">About Us</a>
  <a href="/events">Events</a>
  <a href="/photos">Photos</a>
  <h1>hell</h1>
</nav>

<slot />

<style lang="scss">
  :root {
    --heading: yellow;
  }
  h1 {
    color: var(--heading);
  }
  nav {
    align-items: center;
    padding: 1px;
    padding-top: 5px;
    z-index: 1200;
    width: 100%;
    position: relative;
    a {
      color: var(--blue);
    }
    img {
      width: 140px;
    }
    background-color: pink;
  }
  .isHome {
    // position: absolute;
    > a {
      color: white;
    }
  }
</style>
