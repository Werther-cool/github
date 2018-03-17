<template>
  <div>
      <span>123</span>
      <child2 v-on:submit="fatherOn" :fatherMsg="FatherMsg"></child2>
      <button @click="add">add</button>
  </div>
</template>
<script>
import child2 from "../components/child2";
export default {
    data(){
        return{
            FatherMsg:0
        }
    },
    components:{
        child2
    },
    methods:{
        fatherOn(msg){
            this.FatherMsg = msg+1;
            console.log(msg);
        },
        add(){
            this.FatherMsg +=1;
        }
    }
}
</script>
