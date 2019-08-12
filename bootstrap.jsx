import "core-js/es6/object"
import "core-js/es6/set"
import "core-js/es6/map"

import * as React from "react";
import Vue from "vue";
import * as ReactDom from "react-dom";
import ReactApp from "./index.tsx";
import VueApp from "./index.vue";

ReactDom.render(<ReactApp />, document.getElementById("react-root"));

new Vue({
  el: "#vue-root",
  render: h => h(VueApp)
});
