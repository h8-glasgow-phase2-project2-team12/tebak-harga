<template>
  <div>
    <!-- <h3>Guess all the item's price in <span id="time" style="color: red"></span> seconds!</h3><br> -->
    <h1>Scoreboard:</h1>
    <h3>{{players}}</h3>
    <!-- <h3>Ahmad Akbar: 67% | Amandarzq: 74% | kanfz: 55% | phitonthel: 66%</h3> -->
    <div class="row itemsContainer">
      <ItemCard
        v-for="item in items"
        :key="item.id"
        :item="item"/>
    </div>
  </div>
</template>

<script>
import ItemCard from '../components/ItemCard'

export default {
  components: {
    ItemCard
  },
  computed: {
    items () {
      return this.$store.state.items
    },
    players () {
      return this.$store.state.players
    }
  }
}
// function startTimer (duration, display) {
//   var timer = duration
//   var minutes
//   var seconds
//   setInterval(function () {
//     minutes = parseInt(timer / 60, 10)
//     seconds = parseInt(timer % 60, 10)

//     minutes = minutes < 10 ? '0' + minutes : minutes
//     seconds = seconds < 10 ? '0' + seconds : seconds

//     display.textContent = minutes + ':' + seconds

//     if (--timer < 0) {
//       timer = duration
//     }
//   }, 1000)
// }

// window.onload = function () {
//   var timer = 30
//   var display = document.querySelector('#time')
//   startTimer(timer, display)
// }
</script>

<style>
.itemsContainer {
  justify-content: center;
}
</style>
