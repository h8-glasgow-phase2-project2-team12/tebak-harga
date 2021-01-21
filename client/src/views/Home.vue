<template>
<div>
  <main>
    <div class="container">
      <h1 class="title"> Tebak Harga</h1>
    </div>
    <div class="sign-in-form">
      <div class="form" id="sign-in">
        <form>
          <h2>Play Game</h2>
          <div class="input form-group">
            <label for="username">USERNAME</label>
            <input  v-model="user.username" type="text" id="username">
          </div>
          <div class="input form-group">
            <input @click.prevent="enterGame" id="sign-in-btn" class="sign-in-page btn" type="submit" value="Main">
          </div>
        </form>
      </div>
    </div>
  </main>
</div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      user: {
        username: '',
        score: 0
      }
    }
  },
  methods: {
    enterGame () {
      this.$store.dispatch('enterGame')
      this.$store.dispatch('addPlayer', this.user)
    }
  }
}
</script>
