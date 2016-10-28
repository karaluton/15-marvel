import 'whatwg-fetch';
import Vue from 'vue/dist/vue';

const apikey = '3d82878db752f59c47fdf37c7b4058f1';

const app = new Vue({
  el: '.app',

  data() {
    return {
      seriesData: null,
    };
  },

  mounted() {
    this.searchSeries('Hulk');
  },

  methods: {
    searchSeries(series) {
      fetch(`http://gateway.marvel.com/v1/public/series?limit=1&titleStartsWith=${series}&apikey=${apikey}`)
            .then((r) => r.json())
            .then((data) => {
              this.seriesData = data.data.results[0];
            });
    },
  },
});
