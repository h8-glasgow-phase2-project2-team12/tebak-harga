<template>
  <div class="card-card">
    <div class="image">
    <img class="img" :src="item.imageUrl" alt="Card image cap">
    </div>
    <div class="card-body">
        <p>{{item.name}}</p>
      <!-- Guess Form -->
      <div v-if="isGuessed === false">
        <div>
          <input type="number" placeholder="ie. 17500" v-model="price">
        </div>
        <div>
          <button class="guess-button" @click.prevent="guessPrice">Guess!</button>
        </div>
      </div>
      <!-- Guess Success! -->
      <div v-if="isGuessed === true">
        <p>You guessed:</p>
        <h1>{{price}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: ['item'],
  data () {
    return {
      id: this.item.id,
      price: '',
      isGuessed: false
    }
  },
  methods: {
    guessPrice () {
      const payload = {
        id: this.id,
        price: +this.price,
        username: localStorage.username

      }
      this.isGuessed = true
      this.$socket.emit('guessPrice', payload)
    }
  }
}
</script>

<style>
input {
  text-align: center;
}
input[type=number] {
  -moz-appearance: textfield;
}
</style>
