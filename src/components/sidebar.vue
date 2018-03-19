<template>
	<div>
		<ul>
			<li v-for="theme in data">
				<span>{{theme.name}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      data: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      axios.get('api/themes').then(response => {
        this.data = response.data.others;
        this.data.unshift({
          color: 0,
          thumbnail: '',
          description: '首页',
          id: -1,
          name: '首页'
        })
      });
    }
  }
}

</script>
