<script lang="ts">
  import bg from '$lib/images/hero-bg.jpg'
  const style = `background: url(${bg}) center center / cover no-repeat;`
  import PrimaryButton from '$lib/components/PrimaryButton.svelte'

  import type {PageData} from './$types'
  export let data: PageData
</script>

<div class="h-screen flex place-content-center text-" {style}>
  <div class="content">
    <h1>Vancouver KDD</h1>
    <h2>
      저희는 밴쿠버 한인 개발자 디자이너로 이루어져 있으며 네트워킹 및 한인 사회에 기여를 추구하는
      모임 입니다.
    </h2>
    {JSON.stringify(data)}
    <div>
      <PrimaryButton name="he22llo" />
    </div>
  </div>
</div>

<!-- color: var(--primaryContrast); -->
<style lang="postcss">
  .hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: theme(colors.gray.100);
  }
  .content {
    text-align: center;
  }
</style>
