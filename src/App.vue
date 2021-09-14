<template>
  <div>
    <h1>Hello App!</h1>
    <p>
      <router-link to="/foo">go to foo</router-link>
      <router-link to="/bar">go to bar</router-link>
    </p>
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name:"App",
}
</script>

<style>

</style>