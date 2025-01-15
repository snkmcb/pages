---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Test Site"
  text: "Test Site"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---



<script setup>
  // 拡張要素
  // .vue ファイルをインポートすることが出来る
  // https://github.com/vitejs/vite/blob/main/docs/index.md
import TestVue from'./.vitepress/components/test.vue'
</script>

<div class="home">
<!-- 読み込んだ vue コンポーネントを突っ込むことが出来る -->
  <TestVue/>
</div>