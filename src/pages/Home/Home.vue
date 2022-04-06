<template>
<div><TyepNav/>
  <ListContainer/>
  <Recommend/>
  <Rank/>
  <Like/>
   <Floor/>
   <Floor/>
   <Brand/>
  </div>
  
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer/ListContainer.vue'
import Recommend from '@/pages/Home/Recommend/Recommend.vue'
import Rank from '@/pages/Home/Rank/Rank.vue'
import Like from '@/pages/Home/Like/Like.vue'
import Floor from '@/pages/Home/Floor/Floor.vue'
import Brand from '@/pages/Home/Brand/Brand.vue'
export default {
  name : 'Home',
  components:{ListContainer,Recommend,Rank,Like,Floor,Brand}

}
</script>

<style>

</style>