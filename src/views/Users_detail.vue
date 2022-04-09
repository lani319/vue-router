<template>
    <div>
        <p>유저번호 : {{ userId }} </p>
        <v-btn @click="editUserInfo" small >수정</v-btn>
    </div>

</template>

<script>

export default {

//파라미터로 넘어온 값을 받는 함수 
computed : {
    userId() {
        return this.$route.params.id
    }
},
methods : {
    editUserInfo(){
        this.$router.push({name:'users-edit'})
        //this.$router.push({path:'users/${this.userId}/edit'})
    }
}

}

</script>