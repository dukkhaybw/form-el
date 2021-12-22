<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <span v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<script>
import Schema from 'async-validator';
export default {
  name: 'formItem',
  inject: ['form'],
  props: {
    label: {
      type: String,
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      errorMessage: null,
    };
  },
  mounted() {
    this.$on('validate', () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      if (this.prop) {
        let inputValue = this.form.model[this.prop];
        let ruleValue = this.form.rules[this.prop];
        console.log(inputValue, ruleValue);
        let schema = new Schema({
          [this.prop]: ruleValue,
        });
        return schema.validate({ [this.prop]: inputValue }, err => {
          if (err) {
            this.errorMessage = err[0].message;
          } else {
            this.errorMessage = null;
          }
        });
      }
    },
  },
};
</script>

<style></style>
