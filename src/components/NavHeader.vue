<template>
    <div class="header">
      <div class="nav-topbar" v-if="false">
        <div class="container">
          <div class="topbar-menu">
            <a href="javascript:;">商城</a>
            <a href="javascript:;">MUI</a>
            <a href="javascript:;">云服务</a>
            <a href="javascript:;">协议规则</a>
          </div>
          <div class="topbar-user">
            <a href="javascript:;" v-if="username">{{username}}</a>
            <a href="javascript:;" v-if="!username" @click="login">登录</a>
            <a href="javascript:;" v-if="!username">注册</a>
            <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车</a>
          </div>
        </div>
      </div>

      <div class="nav-header">
        <div class="container">
          <div class="header-logo">
            <a href="/#/index"></a>
          </div>
          <div class="header-menu">
            <div class="item-menu">
              <span>公司简介</span>
              <div class="children">
                <ul>
                  <li class="product" v-for="(item, index) in phoneList" :key="index">
                    <a :href="'/#/product/' + item.id" target="_blank">
                      <div class="pro-img">
                        <img :src="item.mainImage" :alt="item.subtitle">
                      </div>
                      <div class="pro-name">{{item.name}}</div>
                      <div class="pro-price">{{item.price | currency}}</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-menu">
              <span>我的产品</span>
              <!-- <div class="children"></div> -->
            </div>
            <div class="item-menu">
              <span>高升新闻</span>
              <!-- <div class="children"></div> -->
            </div>
            <div class="item-menu">
              <span>联系我们</span>
              <div class="children">
                <ul>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://aimg8.dlssyht.cn/u/1283616/own_pic_channel/800_1500/1283616/2784/5567003_1575007847.jpg?t=9706" alt="">
                      </div>
                      <div class="pro-name">责一画室</div>
                      <div class="pro-price">20200419</div>
                    </a>
                  </li>

                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://aimg8.dlssyht.cn/u/1283616/own_pic_channel/800_1500/1283616/2784/5567003_1575007847.jpg?t=9706" alt="">
                      </div>
                      <div class="pro-name">责一画室</div>
                      <div class="pro-price">20200419</div>
                    </a>
                  </li>

                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://aimg8.dlssyht.cn/u/1283616/own_pic_channel/800_1500/1283616/2784/5567003_1575007847.jpg?t=9706" alt="">
                      </div>
                      <div class="pro-name">责一画室</div>
                      <div class="pro-price">20200419</div>
                    </a>
                  </li>

                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://aimg8.dlssyht.cn/u/1283616/own_pic_channel/800_1500/1283616/2784/5567003_1575007847.jpg?t=9706" alt="">
                      </div>
                      <div class="pro-name">责一画室</div>
                      <div class="pro-price">20200419</div>
                    </a>
                  </li>

                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://aimg8.dlssyht.cn/u/1283616/own_pic_channel/800_1500/1283616/2784/5567003_1575007847.jpg?t=9706" alt="">
                      </div>
                      <div class="pro-name">责一画室</div>
                      <div class="pro-price">20200419</div>
                    </a>
                  </li>

                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://aimg8.dlssyht.cn/u/1283616/own_pic_channel/800_1500/1283616/2784/5567003_1575007847.jpg?t=9706" alt="">
                      </div>
                      <div class="pro-name">责一画室</div>
                      <div class="pro-price">20200419</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="header-search">
            <div class="wrapper">
              <input type="text" name="keyword">
              <a href="jaavscript:;"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'nav-header',
    data() {
      return {
        phoneList: []
      }
    },
    computed: {
      // username() {
      //   return this.$store.state.username;
      // }
      // 等价上面的写法
      ...mapState(['username'])
    },
    filters: {
      currency(val) {
        if (!val) return '0.00';
        return '￥' + val.toFixed(2) + '元';
      }
    },
    mounted() {
      this.getProductList();
    },
    methods: {
      login() {
        this.$router.push('/login');
      },
      getProductList() {
        this.axios.get('/products', {
          params: {
            categoryId: '100012'
          }
        }).then((res) => {
          //截取6条记录
          if (res.list.length > 6) {
            this.phoneList = res.list.slice(0, 6);
          }
        })
      },
      goToCart() {
        this.$router.push('/cart');
      }
    }
  }
</script>>

<style lang="scss">
  @import '../assets/scss/base.scss';
  @import '../assets/scss/mixin.scss';
  @import '../assets/scss/config.scss';


  .header {
    .nav-topbar {
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      color: #b0b0b0;
      .container {
        @include flex();
        a {
          display: inline-block;
          color: #b0b0b0;
          margin-right: 17px;
        }
        .my-cart {
          width: 110px;
          background-color: #ff6600;
          text-align: center;
          color: #ffffff;
          margin-right: 0;
          .icon-cart {
            @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
            margin-right: 4px;
          }
        }
      }
    }
    .nav-header {
      .container {
        position: relative;
        height: 104px;
        @include flex();
        .header-menu {
          display: inline-block;
          // width: 643px;
          padding-left: 20px;
          .item-menu {
            display: inline-block;
            color: #444444;
            font-weight: bold;
            font-size: 16px;
            line-height: 104px;
            margin-right: 20px;
            span {
              cursor: pointer;
            }
            &:hover {
              color: $colorA;
              .children {
                height: 220px;
                opacity: 1;
              }
            }
            .children {
              position: absolute;
              top: 104px;
              left: 0;
              width: 1226px;
              height: 0;
              opacity: 0;
              overflow: hidden;
              border-top: 1px solid #e5e5e5;
              box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              z-index: 10;
              transition: height 0.5s;
              background-color: #ffffff;
              .product {
                position: relative;
                float: left;
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                a {
                  display: inline-block;
                }
                img {
                  width: auto;
                  height: 111px;
                  margin-top: 26px;
                }
                .pro-img {
                  height: 137px;
                }
                .pro-name {
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
                }
                .pro-price {
                  color: $colorA;
                }
                &:before {
                  content: ' ';
                  position: absolute;
                  top: 28px;
                  right: 0;
                  border-left: 1px solid $colorF;
                  height: 100px;
                  width: 1px;
                }
                &:last-child::before {
                  display: none;
                }
              }
            }
          }
        }
        .header-search {
          width: 319px;
          .wrapper {
            height: 50px;
            border: 1px solid #e0e0e0;
            display: flex;
            align-items: center;
            input {
              border: none;
              box-sizing: border-box;
              border-right: 1px solid #e0e0e0;
              width: 264px;
              height: 50px;
              padding-left: 14px;
            }
            a {
              @include bgImg(18px, 18px, '/imgs/icon-search.png');
              margin-left: 17px;
            }
          }
        }
      }
    }

  }
</style>