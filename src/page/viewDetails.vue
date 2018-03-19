<template>
  <div>
    <img v-lazy="attachImageUrl(this.data.image)" :alt="this.data.title">
    <span class="top-title">{{data.title}}</span>
    <span class="image-source">图片：{{this.data.image_source}}</span>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      data: {}
    }
  },
  created() {
    this.fetchDate();
  },
  methods: {
    fetchDate: function() {
    let id = this.$route.params.id;
      axios.get('api/news/'+id).then(response => {
        response.data.body = this.attachImg(response.data.body);
        this.data = response.data;
      })
    },
    attachImg:function(body) {
      if (body !== undefined) {
        return body.replace(/src="http\w{0,1}:\/\//g, 'src="https://images.weserv.nl/?url=');
      }
    },    // 修改图片链接
    attachImageUrl: function(srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
    },
  }
}

</script>
<style lang="sass" scoped>
@import "../assets/sass/components/HelloWorld.sass";

</style>
