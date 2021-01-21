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
      console.log(this.user)
      localStorage.username = this.user.username
      this.$store.dispatch('enterGame')
      this.$socket.emit('fungsiSaatLogin', this.user)
    }
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Bungee&family=Roboto:wght@100;400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Quicksand:wght@300;400;500;700&display=swap");

:root {
  --small-font: "Quicksand", sans-serif;
  --big-font: "Bungee", cursive;
}

* {
  margin: 0;
  padding: 0;
  font-size: 15px;
  font-family: var(--small-font);
}
body {
  background: url("https://images.unsplash.com/photo-1524673450801-b5aa9b621b76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
  background-repeat: no-repeat;
  background-size: cover;
}

main {
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: var(--small-font);
}

h2 {
  font-family: var(--big-font);
  color: white;
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.form {
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0.342);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  width: 500px;
  padding: 10px;
  max-width: 100%;
  min-height: 300px;
}
.form h2 {
  color: rgb(61, 161, 228);
}

.btn {
  color: white;
  background-color: rgb(86, 175, 235);
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  padding: 15px;
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;
}

input {
  background-color: white;
  border: none;
  padding: 10px;
  margin: 8px 0;
  width: 100%;
}
input[type="submit"]:hover {
  background-color: rgb(61, 161, 228);
  color: rgb(100, 100, 100);
}

.title {
  margin-bottom: 40px;
  font-family: var(--big-font);
  font-size: 3rem;
}
h1 {
  color: #e76f89;
}
</style>
