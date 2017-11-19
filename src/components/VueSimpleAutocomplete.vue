<template>
  <div style="position:relative" v-bind:class="{'open':openSuggestion}">
        <input class="form-control" type="text" :value="value" @input="updateValue($event.target.value)"
          @keydown.enter = 'enter'
          @keydown.down = 'down'
          @keydown.up = 'up'>
        <ul class="dropdown-menu" style="width:100%">
            <li v-for="(suggestion, index) in matches"
                v-bind:class="{'active': isActive(index+1)}"
                @click="suggestionClick(index+1)">
              <a href="#">{{ suggestion }}</a>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    suggestions: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      open: false,
      current: 0
    }
  },
  computed: {
    // Filtering the suggestion based on the input
    matches () {
      return this.suggestions.filter((obj) => {
        return obj.indexOf(this.value) >= 0
      }).splice(0, 20)
    },
    openSuggestion () {
      return this.value !== '' &&
              this.matches.length !== 0 &&
              this.open === true
    }
  },
  methods: {
    updateValue (value) {
      if (this.open === false) {
        this.open = true
        this.current = 0
      }
      this.$emit('input', value)
    },
    // When enter pressed on the input
    enter () {
      if (this.current !== 0) {
        this.$emit('input', this.matches[this.current - 1])
        this.open = false
      }
    },
    // When up pressed while suggestions are open
    up () {
      if (this.current > 0) {
        this.current--
      }
    },
    // When up pressed while suggestions are open
    down () {
      if (this.current < this.matches.length) {
        this.current++
      }
    },
    // For highlighting element
    isActive (index) {
      return index === this.current
    },
    // When one of the suggestion is clicked
    suggestionClick (index) {
      this.$emit('input', this.matches[index])
      this.open = false
    }
  }
}
</script>
