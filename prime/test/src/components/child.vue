<template>
<div>
  <slot name="slot2"></slot>
  <button @click="handleClick">点我</button>
  <button @click="sendMesg" type="button" name="button">sendMesg</button>
  <p>{{msg}}</p>
  <slot name="slot1" text="name"></slot>

</div>
</template>

<script>
import Bus from '../common/bus';
export default {
  props: {
    msg: {
      type: String

    },
    name: {
      default: "child",
      type: String
    }
  },
  data() {
    return {
      send2brother: "brother"

    }
  },
  methods: {
    handleClick() {

      this.$emit('msgFunc', 11);
    },
    log() {
      console.log("child1");
    },
    sendMesg() {
      Bus.$emit('inceptMessage', this.send2brother)
    }
  }
}
</script>
