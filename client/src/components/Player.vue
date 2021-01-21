<template>
  <div class="player">
    <p><span>PLAYER:</span> {{player.username}} <span>SCORE:</span> {{player.score}} </p>
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
