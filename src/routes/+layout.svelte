<script lang="ts">
  import './styles.sass'
  import kddLogo1 from '$lib/images/logo_kr_white_horizontal.svg'
  import kddLogo2 from '$lib/images/logo_kr_color_horizontal.png'
  import {page} from '$app/stores'
  $: isHome = $page.url.pathname === '/'
</script>

<nav class:isHome>
  <a href="/"><img src={isHome ? kddLogo1 : kddLogo2} alt="kdd logo" /></a>
  <div class="links">
    <a href="/about-us">About Us</a>
    <a href="/events">Events</a>
    <a href="/photos">Photos</a>
  </div>
</nav>
<slot />

<style lang="sass">
  @import '$lib/_mixins.sass'
  
  nav
    display: flex
    justify-content: space-between
    margin: auto
    padding: 8px
    padding-top: 40px
    @include zIndex(appBar)
    max-width: 900px
    position: relative
    a
      color: black
      text-decoration: none
    img
      width: 140px
  .isHome
    position: absolute
    left: 0
    right: 0
    a
      color: white
  .links
    display: flex
    gap: 24px
    a
      font-weight: 700
      padding: 8px
</style>
