<script>
  import bg from '$lib/images/hero-bg.jpg'
  const style = `background: url(${bg}) center center / cover no-repeat;`
</script>

<!-- <img class="hero" src={bg} alt="hero background" /> -->
<div class="hero" {style} />

<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<style>
  .hero {
    /* background: url($lib/images/hero-bg.jpg) center center / cover no-repeat; */
    height: 100vh;
    width: auto;
    margin: auto;
    /* width: 100vw; */
  }
  /* h1 {
    color: var(--heading);
  } */
</style>
