<template>
  <div>
    <header-top :seller="seller"></header-top>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerTop from '../headerTop/headerTop.vue';

  const ERR_OK = 0;

  export default{
    data() {
      return {
        seller: {}
      };
    },
    created() {
      this.$http.get('/api/seller').then((res) => {
        res = res.body;
        if (res.errno === ERR_OK) {
          this.seller = res.data;
        }
      });
    },
    components: {
      headerTop
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../Common/stylus/mixin.styl";

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, .1))
    .tab-item
      flex: 1
      text-align: center
      font-size: 14px
      & > a
        display: block
        &.active
          color: rgb(204, 20, 20)

</style>

