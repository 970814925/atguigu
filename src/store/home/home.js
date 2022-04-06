import{reqCategoryList} from '@/api'
const state = {
    categoryList:[1]
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    }
};
const actions = {
    async categoryList(context,value){
        let result = await reqCategoryList();
        if(result.code==200){
        context.commit('CATEGORYLIST',result.data)
    }
    }
};
const getters = {};

//默认暴露
export default {
    // namespaced:true,
    state,
    mutations,
    actions,
    getters
}
