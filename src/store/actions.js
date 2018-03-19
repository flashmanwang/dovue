export default{
	addNews:({commit},data)=>{
		commit('ADD_NEWS',data)
	},
	addPlayLists:({commit},data)=>{
		commit('ADD_PLAYLISTS',data)
	},
	setCurrentList:({commit},data)=>{
		commit('SET_CURTLIST',data)
	},
	setUserBaseInfo:({commit},data)=>{
		commit('SET_USERBASEINFO',data)
	}
}