<template>
  <div>
    <h1>Tebak Harga!</h1>
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
    }
  }
}
</script>

<style>
.itemsContainer {
  justify-content: center;
}
</style>
