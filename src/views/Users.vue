<template>
  <div>
      <h1> Users </h1>
      <p> 유저를 검색해 주세요 </p>
       <v-text-field            
            lable="유저 번호를 넣어주세요"
            v-model="userId"
          ></v-text-field>
          <v-btn
            elevation="11"
            small
            @click=" //파라미터로 값 넘기기 
            $router.push(
            {
                name : 'users-detail',
                params : 
                {
                    id:userId
                }
            }
                )">Search</v-btn>
            <router-view></router-view>
  </div>
</template>


<script>

export default {
    data() {
        return {
            userId : null,            
        }
    },    
}

</script>