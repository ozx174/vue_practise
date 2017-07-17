<template>
  <div class="cart-control">
    <transition name="move">
      <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click.stop.prevent="decreaseCount($event)"></div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart: function (event) {
        if (!event._constructed) {
          return;
        }
        if (!this.food.count) {
          this.$set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        this.$emit('add', event.target);
      },
      decreaseCount: function (event) {
        if (!event._constructed) {
          return;
        }
        if (this.food.count > 0) {
          this.food.count--;
        } else {
          this.food.count = 0;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cart-control
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 20px
      font-size: 24px
      color: rgb(0, 160, 220)
      &.move-enter-active, &.move-leave-active
        transition: all 0.3s linear
        transform: translate3D(0, 0, 0) rotate(0)
        opacity: 1
      &.move-enter, &.move-leave-active
        transform: translate3D(24px, 0, 0) rotate(180deg)
        opacity: 0
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      font-size: 10px
      line-height: 20px
      color: rgb(27, 153, 159);
    .cart-add
      display: inline-block
      padding: 6px
      line-height: 20px
      font-size: 24px
      color: rgb(0, 160, 220)
</style>
