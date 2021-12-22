function install(Vue) {
  Vue.prototype.$dispatch = function (componentName, eventName) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options.name === componentName) {
        break;
      }
      parent = parent.$parent;
    }
    if (parent) {
      if (eventName) {
        parent.$emit(eventName); //传事件则触发祖先组件上的事件
      } else {
        return parent; //没有事件则返回该祖先组件
      }
    }
  };

  Vue.prototype.$broadcast = function (componentName, eventName) {
    let children = this.$children;
    let arr = [];
    function findChildren(children) {
      children.forEach(child => {
        if (child.$options.name === componentName) {
          if (eventName) {
            child.$emit(eventName);
          } else {
            arr.push(child);
          }
        }
        if (child.$children.length) {
          findChildren(child.$children);
        }
      });
    }
    findChildren(children);
    return arr;
  };
}

export default {
  install,
};
