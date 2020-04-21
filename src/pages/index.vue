<template>
    <div class="index">
     <div class="container">
       <div class="swiper-box">
         <swiper :options="swiperOption">
           <swiper-slide v-for="(item, index) in slideList" :key="index">
             <a :href="'/#/product/' + item.id"><img :src="item.img"></a>
           </swiper-slide>
           <!-- Optional controls -->
           <div class="swiper-pagination" slot="pagination"></div>
           <div class="swiper-button-prev" slot="button-prev"></div>
           <div class="swiper-button-next" slot="button-next"></div>
         </swiper>
       </div>
       <!-- <div class="ads-box">
         <a :href="'/#/produce/' + item.id" v-for="(item, index) in adsList" :key="index">
           <img :src="item.img" alt="">
         </a>
       </div> -->
       <div class="banner">
         <a :href="'/#/produce/30'">
           <img src="/imgs/banner-1.png" alt="">
         </a>
       </div>
     </div>
     <div class="product-box">
      <div class="container">
        <h2>教学设备一体机</h2>
        <div class="wrapper">
          <div class="list-box">
            <div class="list" v-for="(arr, i) in deviceList" :key="i">
              <div class="item" v-for="(item, j) in arr" :key="j">
                <div class="item-img">
                  <img :src="item.img" alt="">
                </div>
                <div class="item-info">
                  <h3>智恩教学</h3>
                  <p>引进智能设备教学</p>
                  <p class="price">看过：10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    </div>
</template>>
<script>
  import ServiceBar from './../components/ServiceBar'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'index',
    components: {
      Swiper,
      SwiperSlide,
      ServiceBar,
    },
    data() {
      return {
        swiperOption: {
          autoplay: true,
          loop: true,
          effect: 'cube',
          cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 100,
            shadowScale: 1
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        slideList: [
          {
            id: '42',
            img: '/imgs/slider/slide-1.jpg'
          }, {
            id: '45',
            img: '/imgs/slider/slide-2.jpg'
          }, {
            id: '46',
            img: '/imgs/slider/slide-3.jpg'
          }, {
            id: '',
            img: '/imgs/slider/slide-4.jpg'
          }, {
            id: '',
            img: '/imgs/slider/slide-5.jpg'
          }
        ],
        adsList: [
         {
           id: 33,
           img: '/imgs/ads/ads-1.png'
         }, {
           id: 34,
           img: '/imgs/ads/ads-2.jpg'
         }, {
           id: 35,
           img: '/imgs/ads/ads-3.png'
         }, {
           id: 36,
           img: '/imgs/ads/ads-4.jpg'
         }
        ],
        deviceList: [
          [
            {
              id: 22,
              img: '/imgs/ads/ads-1.png'
            }, {
              id: 22,
              img: '/imgs/ads/ads-1.png'
            }, {
              id: 22,
              img: '/imgs/ads/ads-1.png'
            }, {
              id: 22,
              img: '/imgs/ads/ads-1.png'
            }
          ],[1,2,3,4]
        ]
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.axios.get('/products', {
          params: {
            categoryId: 100012,
            pageSize: 8
          }
        }).then((res) => {
          this.deviceList = [res.list.slice(0,4), res.list.slice(4,8)];
        })
      }
    }
  }
</script>>

<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';

  .index {
    .swiper-box {
      .swiper-container {
        height: 451px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    // .ads-box {
    //   @include flex();
    //   margin-top: 14px;
    //   margin-bottom: 31px;
    //   a {
    //     width: 296px;
    //     height: 167px;
    //   }
    // }
    .banner {
      margin-top: 31px;
      margin-bottom: 50px;
    }
    .product-box {
      background-color: $colorJ;
      padding: 30px 0 50px;
      h2 {
        font-size: $fontF;
        height: 21px;
        line-height: 21px;
        color: $colorB;
        margin-bottom: 20px;
      }
      .wrapper {
        // display: flex;
        .list-box {
          .list {
            @include flex();
            width: 1226px;
            // margin-left: 20px;
            margin-bottom: 14px;
            &:last-child {
              margin-bottom: 0;
            }
            .item {
              width: 23.8%;
              height: 302px;
              background-color: $colorG;
              text-align: left;
              .item-img {
                img {
                  height: 238px;
                  width: 100%;
                }
              }
              .item-info {
                h3 {
                  font-size: $fontJ;
                  color: $colorB;
                  line-height: 14px;
                  font-weight: bold;
                }
                p {
                  color: $colorD;
                  line-height: 13px;
                  margin: 6px auto 8px;
                }
                .price {
                  color: #f20a0a;
                  font-size: $fontJ;
                  font-weight: bold;
                }
              }
            }
          }
        }
      }
    }
  }
</style>