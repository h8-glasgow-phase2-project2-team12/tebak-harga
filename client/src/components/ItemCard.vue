<template>
  <div class="card-card">
    <div class="image">
    <img class="img" :src="item.imageUrl" alt="Card image cap">
    </div>
    <div class="card-body">
        <p style="height: 50px">{{item.name}}</p>
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
        <p>Your guess is:</p>
        <h1 :class="{ 'text-success': isGreat, 'text-primary': isGood }">{{outcome}}</h1>
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
      isGuessed: false,
      outcome: '',
      isGreat: false,
      isGood: false
    }
  },
  methods: {
    guessPrice () {
      const payload = {
        id: this.id,
        price: +this.price,
        username: localStorage.username
      }
      this.qualityGuess()
      this.isGuessed = true
      this.$socket.emit('guessPrice', payload)
    },
    qualityGuess () {
      const realPrice = this.item.price
      const selisih = Math.abs(this.price - realPrice)
      const selisihPercentage = selisih / realPrice
      if (selisihPercentage < 0.2) {
        this.outcome = 'GREAT!'
        this.isGreat = true
      } else if (selisihPercentage < 0.5) {
        this.outcome = 'GOOD!'
        this.isGood = true
      } else {
        this.outcome = 'BAD!'
      }
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
