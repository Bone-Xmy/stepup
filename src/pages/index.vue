<template>
    <div class="index">
     <div class="container">
       <div class="swiper-box">
         <swiper :options="swiperOption">
           <swiper-slide v-for="(item, index) in slideList" :key="index">
             <a :href="'/#/product/' + item.id"><img :src="item.imgUrl"></a>
           </swiper-slide>
           <!-- Optional controls -->
           <div class="swiper-pagination" slot="pagination"></div>
           <div class="swiper-button-prev" slot="button-prev"></div>
           <div class="swiper-button-next" slot="button-next"></div>
         </swiper>
       </div>
       <!-- <div class="ads-box">
         <a :href="'/#/produce/' + item.id" v-for="(item, index) in adsList" :key="index">
           <img v-lazy="item.img" alt="">
         </a>
       </div> -->
       <div class="banner">
         <a :href="'/#/produce/30'">
           <img v-lazy="'/imgs/gaoshjy-banner.jpg'" alt="">
         </a>
       </div>
     </div>
    
     <div class="product-view">
       <div class="container">
         <div class="item-video">
          <h2>采用智能一体机教学<br/>慢慢回味每一瞬间的精彩</h2>
          <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
          <div class="video-bg" @click="showSlide='slideDown'"></div>
          <div class="video-box" v-if="showSlide">
            <div class="overlay"></div>
            <div class="video" v-bind:class="showSlide">
              <span class="icon-close" @click="closeVideo"></span>
              <video src="/imgs/product/video.mp4" autoplay controls="controls"></video>
            </div>
          </div>
        </div>
       </div>
     </div>

     <div class="product-box">
      <div class="container">
        <h2>线上教学课堂</h2>
        <div class="wrapper">
          <div class="list-box">
            <div class="list" v-for="(arr, i) in productImgList" :key="i">
              <div class="item" v-for="(item, j) in arr" :key="j">
                <div class="item-img">
                  <img v-lazy="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                  <h3>智能教学使用一体机进行上课，好好学习天天向上加油呀</h3>
                  <p>引进智能设备教学</p>
                  <p class="price" @click="test(item.id)">看过：10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal 
      title="提示"
      sureText="查看详情" 
      btnType="3" 
      modalType="middle" :showModal="showModal"
      @submit="goToView"
      @cancel="showModal=false"
      >
      <template v-slot:body>
        <p>课程添加成功！</p>
      </template>
    </modal>
  </div>
</template>>
<script>
  import ServiceBar from './../components/ServiceBar'
  import Modal from './../components/Modal'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'index',
    components: {
      Swiper,
      SwiperSlide,
      ServiceBar,
      Modal
    },
    data() {
      return {
        swiperOption: {
          autoplay: true,
          loop: true,
          effect: 'coverflow',
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
        slideList: [],
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
        productImgList: [],
        showModal: false,
        showSlide: '',

      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.axios.get('/index/init', {
          params: {
            productId: 10001
            // pageSize: 8
          }
        }).then((res) => {
          this.slideList = res.slideList;
          let list = res.productImgList;
          this.productImgList = [list.slice(0,4), list.slice(4,8)];
        })
      },
      test() {
        this.showModal = true;
        /*
        this.axios.post('/carts', {
          productId: id,
          selected: true
        }).then((res) => {

        }).cache((res) => {
          this.showModal = true;
        })*/
      },
      goToView() {
        this.$router.push('/cart');
      },
      closeVideo(){
        this.showSlide='slideUp';
        setTimeout(()=>{
          this.showSlide='';
        },600)
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
    .product-view {
      background-color:#f9f9f9;
      .container {
        .item-video{
          height:1044px;
          // margin-bottom:76px;
          columns: #2b2b2b;;
          text-align:center;
          h2{
            font-size:50px;
            padding-top:20px;
            margin-bottom:20px;
          }
          p{
            font-size:24px;
            margin-bottom:48px;
          }
          .video-bg{
            border-radius: 8px;
            background:url('/imgs/product/gallery-1.png') no-repeat center;
            background-size:cover;
            width:1226px;
            height:540px;
            margin:0 auto 120px;
            cursor:pointer;
          }
          .video-box{
            .overlay{
              @include position(fixed);
              background-color:#333333;
              opacity:.4;
              z-index:10;
            }
            @keyframes slideDown{
              from{
                top:-50%;
                opacity:0;
              }
              to{
                top:50%;
                opacity:1;
              }
            }
            @keyframes slideUp{
              from{
                top:50%;
                opacity:1;
              }
              to{
                top:-50%;
                opacity:0;
              }
            }
            .video{
              position:fixed;
              top:-50%;
              left:50%;
              transform:translate(-50%,-50%);
              z-index:10;
              width:1000px;
              height:536px;
              opacity:1;
              &.slideDown{
                animation:slideDown .6s linear;
                top:50%;
              }
              &.slideUp{
                animation:slideUp .6s linear;
              }
              .icon-close{
                position:absolute;
                top:20px;
                right:20px;
                @include bgImg(20px,20px,'/imgs/icon-close.png');
                cursor:pointer;
                z-index:11;
              }
              video{
                width:100%;
                height:100%;
                object-fit:cover;
                outline:none;
              }
            }
          }
        }
      }
    }
    .product-box {
      background-color: $colorH;
      padding: 30px 0 50px;
      h2 {
        font-size: $fontF;
        height: 21px;
        line-height: 21px;
        color: $colorB;
        margin-bottom: 25px;
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
              // background-color: $colorG;
              text-align: left;
              .item-img {
                img {                  
                  width: 100%;
                  border-radius: 8px;
                }
              }
              .item-info {
                padding: 8px;
                h3 {
                  font-size: $fontI;
                  color: $colorB;
                  line-height: 22px;
                  font-weight: bold;
                  margin-bottom: 8px;
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
                  // cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }
</style>