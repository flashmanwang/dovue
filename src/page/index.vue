<template>
	<div>
	<sidebar v-if="isShowSide" @click="toggleSidebar"></sidebar>
	 <i class="icon iconfont icon-fenlei" @click="toggleSidebar"></i>	
	</div>
</template>
<script>
import SideBar from '../components/SideBar'
	export default{
		data(){
			return{
				isShowSide:false
			}
		},
		components:{
			'sidebar':SideBar
		},
		methods:{
			toggleSidebar:function(){
				this.isShowSide = !this.isShowSide
			}
		}
	}
</script>