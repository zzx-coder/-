<template>
  <div class="home">
  </div>
</template>

<script>
export default {
  created () {
    this.axios.post('/admin/api/v1.0/banner').then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped>
  .home{
    background: cyan
  }
</style>