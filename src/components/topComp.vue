<template>
  <div class="topCompHeader">
    <div class="firstHeader">
      <div><i class="icon iconfont">&#xe66c;</i></div>
      <div class="firstSub">
        <i class="icon iconfont">&#xe78f;</i>
        <i class="icon iconfont">&#xe62e;</i>
        <i class="icon iconfont">&#xe605;</i>
      </div>
      <div><i class="icon iconfont">&#xe6ac;</i></div>
    </div>
           <div class="secCompHeader">
           	      <mt-navbar v-model="selected">
        <mt-tab-item id="1">发现</mt-tab-item>
        <mt-tab-item id="2">我的</mt-tab-item>
        <mt-tab-item id="3">电台</mt-tab-item>
      </mt-navbar>
    </div>
  </div>
</template>
<script>
export default{
data(){
	return {
		selected:""
	}
}
}

</script>
<style lang="sass" scoped>
.topCompHeader
	padding-top: 10px;
	position: fixed;
	display: flex;
	clear: both;
	flex-direction: column;
	width: 100%;
	.firstHeader 
		display: flex;
		justify-content: space-between;
		padding: 0 10px;
		.iconfont 
			font-size: 24px;
		.firstSub 
			flex-grow: 2;
			justify-content: space-around;
			display: flex;
			padding: 0 70px;
</style>
