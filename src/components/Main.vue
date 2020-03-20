<template>
  <div class="dg-flex dg-w-vw-100 dg-h-vh-100">
    <Aside />
    <div class="dg-flex-1 dg-flex dg-flex-d-c">
      <Header />
      <keep-alive>
        <router-view class="dg-m-16 dg-p-32 dg-bd-r-4 dg-bg-c-fff dg-of-y-a" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Aside from '@/components/Aside'
import Header from '@/components/Header'

export default {
  name: 'Main',
  components: {
    Aside,
    Header
  }
}
</script>
