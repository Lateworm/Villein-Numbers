const app = new Vue({
  el: '#vue',

  data: {
    numbers: [],
    seed: [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11]
  },

  methods: {
    save: function() {
      store.set('numbers', this.numbers)
    },
    load: function() {
      this.numbers = store.get('numbers') || this.numbers;
    },
    clear: function() {
      this.numbers = [];
    },
  },

  watch: {
    numbers: function () {
      this.save();
      console.log(this.numbers)
    },
  },

  created: function () {
    this.load();
  }
})