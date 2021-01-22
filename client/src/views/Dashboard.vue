<template>
<div class="container">
  <div class="header">
    <div class="players" v-if="!isTimerStop">
      <h4>SCOREBOARD:</h4>
          <Player
            v-for="player in players"
            :key="player.username"
            :player="player"/>
    </div>
    <div class="scoreboard">
        <h1>TEBAK HARGA</h1>
        <h4>Time left: <span id="time" class="countdown"></span> seconds!</h4><br>
    </div>
    <div class="logout-button">
      <button @click.prevent="logout"> KELUAR </button>
    </div>
  </div>
  <div class="content">
    <div class="row itemsContainer" v-if="!isTimerStop">
      <ItemCard
        v-for="item in items"
        :key="item.id"
        :item="item"/>
    </div>
  </div>
  <div class="players" v-if="isTimerStop">
    <h2>FINAL SCORE:</h2>
      <Player
        v-for="player in players"
        :key="player.score"
        :player="player"/>
  </div>
  <p>Group Project RMT07 Group 12 - Tebak Harga</p>
</div>
</template>

<script>
import ItemCard from '../components/ItemCard'
import Player from '../components/Player'

export default {
  data () {
    return {
      isTimerStop: false
    }
  },
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
      this.$socket.emit('logoutServer', localStorage.username)
      return this.$store.dispatch('logout')
    },
    startTimer (duration, display) {
      var timer = duration
      var minutes
      var seconds
      // kalau dipakainya function, dia dianggapnya diluar dari si object view
      var interval = setInterval(() => {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds

        display.textContent = minutes + ':' + seconds

        // timer -= 1
        // timer = duration
        
        console.log('timer', timer)
        if (timer === 0) {
          // console.log('Timer should stop!')
          this.isTimerStop = true
          clearInterval(interval)
        }

        if (--timer < 0) {
          timer = duration
        }
      }, 1000)
    },
    start () {
      var timer = 5
      var display = document.querySelector('#time')
      this.startTimer(timer, display)
    }
  },
  mounted () {
    this.start()
  }
}
// window.onload = function () {
</script>

<style>
</style>
