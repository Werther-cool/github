<template>
    <child @msgFunc="func" msg="hello"></child>
</template>

<script>

import child from '../components/child.vue';

export default {
    components: {
        child
    },
    methods: {
        func (msg) {
            console.log(msg);
        }
    }
}
</script>
