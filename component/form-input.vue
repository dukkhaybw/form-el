<template>
  <input :type="type" :value="value" @input="handleInput" />
</template>

<script>
export default {
  name: 'formInput',
  props: {
    value: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
      /* 组件中的$partent 指代的一定是该组件的父级组件，而不是父级标签，如果要获取父级标签则使用$el.parentNode
        其中$el代表的时当前组件渲染的最外层标签
      */
      // this.$parent.$emit('validate');
      this.$dispatch('formItem', 'validate'); //可以跨多级访问指定组件名字的祖先节点，祖先组件必须有组件名字
    },
  },
};
</script>

<style></style>
