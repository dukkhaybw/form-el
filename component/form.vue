<template>
  <form @submit.prevent>
    <slot></slot>
  </form>
</template>
<script>
export default {
  name: 'form',
  provide() {
    return { form: this };
  },
  props: {
    model: {
      type: Object,
      default: () => {},
    },
    rules: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    async validate(cb) {
      let children = this.$broadcast('formItem');
      let arr = children.map(child => child.validate());
      try {
        await Promise.all(arr);
        cb(true);
      } catch (e) {
        cb(false, e);
      }
    },
  },
};
</script>
