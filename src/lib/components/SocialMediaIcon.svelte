<script lang="ts">
  import Dribbble from '$lib/images/socialIcons/Dribbble.svelte'
  import Github from '$lib/images/socialIcons/Github.svelte'
  import Link from '$lib/images/socialIcons/Link.svelte'
  import LinkedIn from '$lib/images/socialIcons/LinkedIn.svelte'

  export let socialMediaType: string = 'other'
  export let href: string
</script>

<a {href} target="_blank">
  {#if socialMediaType === 'github'}
    <Github />
  {:else if socialMediaType === 'linkedin'}
    <LinkedIn />
  {:else if socialMediaType === 'dribble'}
    <Dribbble />
  {:else if socialMediaType === 'other'}
    <Link />
  {/if}
</a>
