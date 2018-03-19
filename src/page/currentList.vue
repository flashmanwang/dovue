<template>
  <div>
    <mt-header fixed class="header">
      <router-link to="/test" slot="left">
        <i class='iconfont headerIcon'>&#xe602;</i><span class="headerTitle">歌单</span>
      </router-link>
      <i class='iconfont' slot="right">&#xe6ac;</i>
      <i class='iconfont' slot="right">&#xe621;</i>
      <!-- <i class='iconfont' slot="right">&#xe714;</i> -->
      <!-- <i class='iconfont' slot="right">&#xe69e;</i> -->
      <!-- <i class='iconfont' slot="right">&#xe697;</i> -->
    </mt-header>
    <div class="secHeader">
      <div>
        <img class="playImg" :src="currentList.coverImgUrl" />
        <div class="playCount">
          <i class='iconfont'>&#xe60a;</i>{{currentList.playCount}}
        </div>
      </div>
      <div style="color:white">
        <div  class="subDiv">
        我喜欢的音乐
        <div>
        <img :src="userBaseInfo.avatarUrl" class="headerImg" />
        <span style="font-size:12px">{{userBaseInfo.nickname}}</span>
      </div>
    </div>
      </div>
    </div>
    <div class="news-list">
      <mt-cell v-for="list in currentList.tracks" :title="list.name" value="带 icon"></mt-cell>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import router from '../router'
export default {
  data() {
    return {
      currentList: [],
      userBaseInfo: []
    }
  },
  created() {
    this.fetchDate();
  },
  methods: {
    fetchDate: function() {
      this.currentList = this.$store.state.currentList;
      this.userBaseInfo = this.$store.state.userBaseInfo;
    },
  },
  filters: {
    concatArtis: function(data) {
      let names = data.map(val => val.name);
      return names.join('/');
    }
  }

}

</script>
<style lang="sass" scoped>
@import "../assets/sass/components/HelloWorld.sass";

</style>
