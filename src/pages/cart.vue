<template>
  <div class="cart">
    <order-header title="我的购物车"></order-header>
      <template v-solt:tip>
        <span>温馨提示：最终购买的课程以订单为准哦，请您确认清除再结算！</span>
      </template>
    <nav-footer></nav-footer>
  </div>
</template>>

<script>
  import NavFooter from './../components/NavFooter'
  import OrderHeader from './../components/OrderHeader'

  export default {
    name: 'index',
    components: {
      NavFooter,
      OrderHeader
    }
  }
</script>>  