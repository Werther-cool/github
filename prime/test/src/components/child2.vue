<template>
<div>
  123
  <h1 @click="childm()">{{fatherMsg}}</h1>
  <span>{{fromDate}}</span>
</div>
</template>
<script>
import Bus from '../common/bus.vue';
export default {
  props: ['fatherMsg'],
  data() {
    return {
      fromDate: 'yuanshi'
    }
  },
  created() {
    var _this = this;
    Bus.$on('inceptMessage', function(msg) {
      console.log(1, msg);
      _this.fromDate = msg
    })
  },
  methods: {
    childm() {
      console.log(123);

      this.$emit('submit', this.msg);
    }
  },
  computed: {
    msg: function() {
      return this.fatherMsg + 1;
    }
  }

}
</script>
