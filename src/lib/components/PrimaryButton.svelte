<script lang="ts">
  export let name: string
</script>

<button>
  {name}
</button>

<style lang="sass">
  @import '$lib/_mixins.sass'
  
  button
    padding-top: size(2)
    padding-left: size(4)
    padding-right: size(4)
    background-color: var(--primary)
    color: var(--primaryContrast)
    border: none
</style>
