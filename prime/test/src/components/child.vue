<template>
<div>
    <button @click="handleClick">点我</button>
    <p>{{msg}}</p>
</div>
</template>

<script>
export default {
    props: {
        msg: {
            type: String
            
        }
    },
    methods:{
        handleClick () {
        
            this.$emit('msgFunc',11);
        }
    }
}
</script>

