<template>
  <div class="news-list">
    <ul class="list" ref="newsList">
      <li class="list-item" v-for="news in this.$store.state.stories" @click="viewDetails(news.id)">
        <span class="item-title">{{news.title}}</span>
        <div class="image-wrapper">
        <img class="item-image" v-lazy.newsList="attachImg(news.images[0])" />
      </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
import router from '../router'
export default {
  data() {
    return {}
  },
  created() {
    this.fetchDate();
  },
  methods: {
    fetchDate: function() {
      axios.get('api/news/latest').then(response => {
        this.$store.state.stories=[];
        let stories = response.data.stories;
        let ids = stories.map(val => val.id)
        this.$store.dispatch('addNews', { stories: stories, ids: ids })
      })
    },
    attachImg(imgUrl) {
      if (imgUrl !== undefined) {
        return imgUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
    },
    viewDetails(id){
      router.push({name:"viewDetails",params:{id:id}})
    }
  }
}
</script>
<style lang="sass" scoped>
@import "../assets/sass/components/HelloWorld.sass";
</style>