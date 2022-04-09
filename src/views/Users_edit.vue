<template>
    <div>
        users id for edit : 
        {{ userId }}
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
}

</script>