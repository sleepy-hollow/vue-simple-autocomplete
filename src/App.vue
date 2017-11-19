<template>
  <div id="app" class="container">
    <div class="center">
      <vue-simple-autocomplete :suggestions="suggestions" v-model="selection"></vue-simple-autocomplete>
    </div>
    <button @click="click">登録</button>
  </div>
</template>

<script>
import VueSimpleAutocomplete from './components/VueSimpleAutocomplete'
export default {
  name: 'app',
  components: {
    VueSimpleAutocomplete
  },
  data () {
    return {
      selection: '',
      suggestions: ['夏休み', '春休み', '秋休み', '冬休み', '春休み', '秋休み', '春休み', '秋休み', '春休み', '秋休み', '春休み', '秋休み', '春休み', '秋休み']
    }
  },
  methods: {
    click () {
      console.log(this.selection)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.center {
  width: 200px
}
</style>
