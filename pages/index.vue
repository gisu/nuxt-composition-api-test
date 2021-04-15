<template>
  <div class="container">
    <div v-if="!$fetchState.pending">
      Loading ...
    </div>
    <div v-else>
      <div>UserId: {{ userId }}</div>
      <pre>{{ responseData }}</pre>
    </div>
  </div>
</template>

<script>
import fetchTest from '@/composables/fetchTest'

export default {
  name: 'PageHome',
  setup () {
    console.log('heloodd')
    const { responseData, userId } = fetchTest()

    return {
      userId,
      responseData
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
