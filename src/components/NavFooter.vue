<template>
    <div class="footer">
      <div class="footer-logo">
        <img src="/imgs/gaoshjy-logo.png" alt="">
        <!-- <p>高升教育</p> -->
      </div>
      <div class="footer-link">
        <a href="http://www.zeyhs.com/" target="_blank">高升教育主页</a><span>|</span>
        <a href="http://www.zeyhs.com/" target="_blank">责一画室主页</a><span>|</span>
        <a href="http://www.zeyhs.com/" target="_blank">高升教育主页</a><span>|</span>
        <a href="http://www.zeyhs.com/" target="_blank">高升教育主页</a>
      </div>
      <div class="copyright">Copyright ICP证：<span class="domain">edu.gaoshjy.com</span>  滇ICP备18005079号-1</div>
    </div>
</template>>
<script>
  export default {
    name: 'nav-footer'
  }
</script>>

<style lang="scss" scoped>
  .footer {
    height: 234px;
    border-top: 4px solid #ff6600;
    background-color: #333333;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-logo {
      margin-top: 5px;
      margin-bottom: 5px;
      img {
        // background-color: #ffffff;
        width: 108px;
        height: 108px;
        margin-bottom: 9px;
      }
    }
    .footer-link {
      a {
        color: #999999;
        display: inline-block;
      }
      span {
        margin: 0 10px;
      }
      margin-bottom: 13px;
    }
    .copyright {
      .domain {
        color: #ff6600;
      }
    }
  }
</style>