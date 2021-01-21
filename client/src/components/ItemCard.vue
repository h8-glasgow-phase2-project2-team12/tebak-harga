<template>
  <div class="card m-2 col-2" style="width: 12rem;">
    <img class="card-img-top m-2" :src="item.imageUrl" alt="Card image cap" width="150" height="150">
    <div class="card-body">
      <div class="" style="height: 75px">
        <p>{{item.name}}</p>
      </div>
      <div>
        <input type="number" placeholder="ie. 17500" v-model="price">
      </div>
      <div>
        <button class="btn btn-primary m-3" @click.prevent="guessPrice">Guess!</button>
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
      price: ''
    }
  },
  methods: {
    guessPrice () {
      const payload = {
        id: this.id,
        price: +this.price
      }
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
