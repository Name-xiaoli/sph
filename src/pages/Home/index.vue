<template>
  <div>
    <!-- 三级联动全局组件的使用(全局了,不需要import) -->
     <TypeNav></TypeNav>
     <ListContainer></ListContainer>
     <Recommend></Recommend>
     <Rank></Rank>
     <Like></Like>
     <Floor></Floor>
     <Brand></Brand>
  </div>
</template>

<script>
//引入其他组件
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'

export default {
  name:'',
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  }

}
</script>

<style>

</style>