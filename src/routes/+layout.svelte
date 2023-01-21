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
<footer>hello world footer</footer>

<style lang="sass">
  @import '$lib/_mixins.sass'
  
  nav
    display: flex
    justify-content: space-between
    margin: auto
    max-width: screen(lg)
    padding: size(4)
    padding-top: size(10)
    @include zIndex(appBar)
    position: relative
    a
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
    gap: size(6)
    a
      font-weight: 700
      padding: size(2)
  footer
    max-width: screen(lg)
    margin: auto
    padding: size(4)
    text-align: center
</style>
