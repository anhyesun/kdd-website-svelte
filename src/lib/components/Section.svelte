<script lang="ts">
  import {clsx} from 'clsx'
  export let title = ''
</script>

<section class={clsx('flex-center', $$restProps.class)}>
  <div class="flex w-full max-w-4xl gap-6 items-center">
    {#if title}
      <h2 class="text-2xl md:text-3xl font-bold text-center">{title}</h2>
    {/if}
    <slot />
  </div>
</section>
