<template>
  <div class="game-over">
    <h4>Player: {{player.username}} | Score: {{player.score}} </h4>
  </div>
</template>

<script>
export default {
  name: 'Player',
  props: ['player'],
  methods: {
  }
}
</script>

<style>
</style>
