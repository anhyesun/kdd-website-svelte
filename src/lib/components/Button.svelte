<script lang="ts">
  import {clsx} from 'clsx'
  export let primary = false
  export let secondary = false
  export let className = ''
</script>

<button
  class={clsx(
    'flex-center py-2 px-4 rounded',
    primary && 'bg-primary text-primaryContrast',
    secondary && 'bg-secondary text-secondaryContrast',
    className
  )}
>
  <slot />
</button>
