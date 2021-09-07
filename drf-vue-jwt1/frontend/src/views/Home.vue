<template>
  <div class="home">
    <h1>Nyumbani Ni Hapa Tu!</h1>

    <span :src="user_data">{{ user_data }}</span>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',

  data() {
    return {
      user_data: ''
    }
  },

  methods: {
    getMe(e){
      axios 
          .get('/api/v1/users/me')
          .then(response => {
            console.log(response)
            this.user_data = response.data.username
          })
          .catch(error => {
            console.log(error)
          })
    }
  },

  mounted() {
    this.getMe()
  },
  
}
</script>
