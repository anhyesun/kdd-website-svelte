<script lang="ts">
  import {clsx} from 'clsx'
  export let title = ''
</script>

<section class={clsx('flex-center p-6', $$restProps.class)}>
  <div class="flex w-full max-w-4xl gap-6">
    <h2 class="text-4xl font-bold text-center">{title}</h2>
    <slot />
  </div>
</section>
