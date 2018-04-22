<template>
<div>
  <child @msgFunc="func" msg="hello" ref="child">
    <p slot="slot1" @click="slotclick()" slot-scope="pro">
      我是slot1<br>
      <span>{{pro.text}}</span>
    </p>
    <p slot="slot2">我是slot2</p>
  </child>
  <p ref="p">hellop</p>
  <input type="text" v-model="">
  <button type="button" name="button" @click="mylog">log</button>
</div>
</template>

<script>
import child from '../components/child.vue';

export default {
  data() {
    return {
      userId: '',
      name: "father"
    }
  },
  components: {
    child
  },
  created() {
    console.log(this.$route.params);
  },
  updated() {},
  methods: {
    func(msg) {
      console.log(msg);
    },

    mylog() {
      // console.log("1", );
      this.$refs.child.log()
      console.log(this.$refs.p);
    },
    slotclick() {
      console.log(this.name);
    }
  }
}
</script>
