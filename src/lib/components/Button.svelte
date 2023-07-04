<script lang="ts">
  import {clsx} from 'clsx'
  export let disabled = false
  export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md'
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
  this={$$restProps.href && !disabled ? 'a' : 'button'}
  on:click
  {...$$restProps}
  class={clsx(
    'flex-center rounded px-4 font-medium',
    size === 'sm' && 'py-2 text-sm',
    size === 'md' && 'py-3 text-base',
    size === 'lg' && 'py-4 text-lg',
    size === 'xl' && 'py-5 text-xl',
    disabled
      ? 'bg-gray-400 text-gray-100 cursor-not-allowed'
      : 'bg-radicalRed-500 text-white transition-colors hover:bg-radicalRed-600',
    $$restProps.class
  )}>
  <slot />
</svelte:element>
