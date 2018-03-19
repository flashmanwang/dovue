export default{
	ADD_NEWS(state,data){
		state.stories = data.stories.concat(data.stories);
		state.ids = data.ids.concat(data.ids); 
	},
	ADD_PLAYLISTS(state,data){
		state.playLists = data
	},
	SET_CURTLIST(state,data){
		state.currentList=[];
		state.currentList = data;
	},
	SET_USERBASEINFO(state,data){
		state.userBaseInfo=[];
		state.userBaseInfo=data;
	}
}