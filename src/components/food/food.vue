<template>
  <transition name="slide-left">
    <div v-show="showFlag" class="food" ref="food">
      <div ref="food">
        <div class="food-content">
          <div class="image-header">
            <img :src="food.image" alt="">
            <div class="back" @click="hide">
              <i class="icon-arrow_lift"></i>
            </div>
          </div>
          <div class="content">
            <h1 class="title">{{food.name}}</h1>
            <div class="detail">
              <span class="sell-count">月售{{food.sellCount}}份</span><span class="rating">好评率{{food.rating}}%</span>
            </div>
            <div class="price">
              <span class="now">￥{{food.price}}</span>
              <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
            </div>
          </div>
          <div class="cartcontrol-wrapper">
            <cartcontrol :food="food" @add="addFood"></cartcontrol>
          </div>
          <transition name="fade">
            <div class="buy" v-show="!food.count || food.count===0" @click="addFirst($event)">加入购物车</div>
          </transition>
        </div>
        <split v-show="food.info"></split>
        <div class="info" v-show="food.info">
          <h1 class="title">商品介绍</h1>
          <p class="text">{{food.info}}</p>
        </div>
        <split></split>
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <ratingselect :selectType="selectType" :onlyContent="onlyContent" :desc="desc"
                        :ratings="food.ratings"></ratingselect>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import cartcontrol from 'components/cartcontrol/cartcontrol';
  import split from 'components/split/split';
  import ratingselect from 'components/ratingselect/ratingselect';

  //  const POSITIVE = 0;
  //  const NEGATIVE = 1;
  const ALL = 2;
  export default{
    props: {
      food: {
        type: Object
      }
    },
    data() {
      return {
        showFlag: false,
        selectType: ALL,
        onlyContent: true,
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      };
    },
    components: {
      cartcontrol,
      split,
      ratingselect
    },
    methods: {
      show() {
        this.showFlag = true;
        this.selectType = ALL;
        this.onlyContent = true;
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.food, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      },
      hide() {
        this.showFlag = false;
      },
      addFirst(event) {
        if (!event._constructed) {
          return;
        }
        this.$set(this.food, 'count', 1);
        this.$emit('add', event.target);
      },
      addFood(target) {
        this.$emit('add', target);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .food
    position: fixed
    left: 0
    top: 0
    bottom: 48px
    z-index: 3
    width: 100%
    background-color: #fff
    .food-content
      position: relative
    .image-header
      position: relative
      width: 100%
      height: 0
      padding-bottom: 100%
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
      .back
        position: absolute
        top: 10px
        left: 0px
        .icon-arrow_lift
          display: block
          padding: 10px
          font-size: 20px
          color: #fff
    .content
      padding: 18px
      .title
        font-size: 14px
        font-weight: 700
        line-height: 14px
        margin-bottom: 8px
        color: rgb(7, 17, 27)
      .detail
        margin-bottom: 18px
        font-size: 0
        line-height: 10px
        height: 10px
        .sell-count, .rating
          font-size: 10px
          color: rgb(147, 153, 159)
        .sell-count
          margin-right: 12px
      .price
        font-weight: 700
        line-height: 24px
        .now
          margin-right: 8px
          font-size: 14px
          color: rgb(240, 20, 20)
        .old
          text-decoration: line-through
          font-size: 10px
          color: rgb(147, 153, 159)
    .cartcontrol-wrapper
      position: absolute
      right: 12px
      bottom: 12px
    .buy
      position: absolute
      right: 18px
      bottom: 18px
      z-index: 10
      line-height: 24px
      height: 24px
      padding: 0 12px
      box-size: border-box
      font-size: 10px
      color: #fff
      border-radius: 10px
      background: rgb(0, 160, 220)

    .info
      padding: 18px
      .title
        font-size: 14px
        font-weight: 700
        line-height: 14px
        margin-bottom: 6px
        color: rgb(7, 17, 27)
      .text
        font-size: 12px
        line-height: 24px
        padding: 0 8px
        color: rgb(77, 85, 93)
    .rating
      padding-top: 18px
      .title
        font-size: 14px
        font-weight: 700
        line-height: 14px
        margin-left: 18px
        color: rgb(7, 17, 27)
</style>
