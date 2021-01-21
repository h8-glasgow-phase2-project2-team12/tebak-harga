<template>
<div class="container">
  <div class="header">
    <div class="players">
          <h4>CURRENT SCORE:</h4>
            <Player
            v-for="player in players"
            :key="player.username"
            :player="player"
            />
        </div>
    <div class="scoreboard">
        <h1>SCOREBOARD</h1>
        <h4>Time left: <span id="time" class="countdown"></span> seconds!</h4><br>
    </div>
    <div class="logout-button">
      <button @click.prevent="logout"> KELUAR </button>
    </div>
  </div>
  <div class="content">
    <div class="row itemsContainer">
      <ItemCard
        v-for="item in items"
        :key="item.id"
        :item="item"/>
    </div>
  </div>
  <p>Group Project RMT07 Group 12 - Tebak Harga</p>
</div>
</template>

<script>
import ItemCard from '../components/ItemCard'
import Player from '../components/Player'

export default {
  components: {
    ItemCard,
    Player
  },
  computed: {
    items () {
      return this.$store.state.items
    },
    players () {
      return this.$store.state.players
    }
  },
  methods: {
    logout () {
      return this.$store.dispatch('logout')
    }
  }
}
function startTimer (duration, display) {
  var timer = duration
  var minutes
  var seconds
  setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)

    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    display.textContent = minutes + ':' + seconds

    if (--timer < 0) {
      timer = duration
    }
  }, 1000)
}

window.onload = function () {
  var timer = 30
  var display = document.querySelector('#time')
  startTimer(timer, display)
}
</script>

<style>
</style>
