<template>
  <div>
<topComp></topComp>
  <div class="news-list">
    <ul class="list">
      <li class="list-item" v-for="list in this.$store.state.playLists" @click="getPlayDetail(list.id)">
        <div class="image-wrapper">
          <img class="item-image" v-lazy.newsList="list.coverImgUrl" />
        </div>
        <span class="item-title">{{list.name}}</span>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import { Toast } from 'mint-ui';
import router from '../router'
import topComp from './topComp'
export default {
  data() {
    return {
      data: []
    }
  },
  components:{
    topComp
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      axios.get('/api/login/cellphone?phone=15179816883&password=wangzhiqiang.1').then(response => {
        let data = response.data.profile;
        let { nickname, signature, avatarUrl, backgroundUrl } = data;
        this.$store.dispatch('setUserBaseInfo',data);
        // Toast({
        //   message: '用户：' + nickname,
        //   position: 'bottom',
        //   duration: 5000
        // });
        axios.get('api/user/playlist?uid=' + response.data.profile.userId).then(res => {
          this.$store.state.playLists = [];
          let playList = res.data.playlist;
          this.$store.dispatch('addPlayLists', playList);
        })
      });
    },
  getPlayDetail: function(playId) {
    axios.get('api/playlist/detail?id=' + playId).then(res => {
      this.$store.dispatch('setCurrentList',res.data.result);
      router.push('/currentList');
    })
    console.log(this.$store)
  }
  }
}

</script>
<style lang="sass" scoped>
@import "../assets/sass/components/HelloWorld.sass";

</style>
