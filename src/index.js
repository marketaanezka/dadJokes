import './index.html';
import './style.css';
import Vue from '../node_modules/vue/dist/vue.js'
import App from './components/App.vue'


new Vue({
  el: '#app',
  render: h => h(App),
});



