<template>
  <div class="home">
    <h1>Welcome to Tebak Harga!</h1>
    <p>{{ items }}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  // TEMPLATE:
  // sockets: {
  //   // these are the functions that will be executed from the server
  //   init (payload) {
  //     console.log(payload)
  //   }
  // }
  computed: {
    items () {
      return this.$store.state.items
    }
  }
}
</script>
