import './index.html';
import './style.css';
import Vue from '../node_modules/vue/dist/vue.js'

// let upLikes = 0;
// let downLikes = 0;

// const btnUp = document.querySelector('#btn-up');
// const btnDown = document.querySelector('#btn-down');

// btnUp.addEventListener('click', () => {
//   upLikes += 1;
//   const likesUpElm = document.querySelector('#likes-up');
//   likesUpElm.textContent = upLikes;
// });

// btnDown.addEventListener('click', () => {
//   downLikes += 1;
//   const likesDownElm = document.querySelector('#likes-down');
//   likesDownElm.textContent = downLikes;
// });


new Vue ({
  el: '#app',
  data: {
    upLikes: 0,
    downLikes: 0,
  },
  methods: {
    btnUp() {
      this.upLikes += 1;
    },
    btnDown() {
      this.downLikes += 1;
    }
  }
})
