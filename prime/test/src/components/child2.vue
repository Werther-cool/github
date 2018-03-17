<template>
  <div>
      123
      <h1 @click="childm()">{{fatherMsg}}</h1>

  </div>
</template>
<script>
export default {
  props:['fatherMsg'],
 
  methods:{
      childm(){
          console.log(123);
          
          this.$emit('submit',this.msg);
      }
  },
  computed:{
      msg:function () {
        return this.fatherMsg+1;
      }
  }
  
}
</script>
