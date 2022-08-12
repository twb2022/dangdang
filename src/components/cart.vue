<template>
    <main>
        <van-swipe @change="onChange" class="swipe2" :show-indicators="false" height="300">
        <van-swipe-item>
            <div class="aa">sfjdaldsa</div>
        </van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        </van-swipe>
    </main>
</template>

<style scoped>
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
    .swipe2{
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
<script>
export default {
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
</script>