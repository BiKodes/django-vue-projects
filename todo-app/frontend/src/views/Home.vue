<template>
  <div class="home">
    <h1>Shuguli With DRF Vue</h1>

    <hr>

    <div class="columns">
      <div class="column is-3 is-offset-3">
        <form v-on:submit.prevent="addShuguli">
          <h2 class="subtitle">Add Task</h2>

          <div class="field">
            <label class="label">Description</label>
            <div class="control">
                <input class="input" type="text" v-model="description">
            </div>
          </div>

          <div class="field">
            <label class="label">Status</label>
            <div class="control">
              <div class="select">
                <select v-model="status">  
                  <option value="todo">Panga</option>
                  <option value="done">Tenda</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="columns">
      <div class="column is-6">
        <h2>Panga</h2>

        <div class="todo">
          <div 
            class="card"
            v-for="shuguli in shugulis"           
            v-bind:key="shuguli.id"  
          >
            <div v-if="shuguli.status === 'todo'">
              <div class="card-content">{{ shuguli.description }}</div>
              <footer class="card-footer">
                <a class="card-footer-item" v-on:click="setStatus(shuguli.id, 'done')">Tenda</a>
              </footer>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-6">
        <h2 class="subtitle">Tenda</h2>
      

       <div class="todo">
          <div 
            class="card"
            v-for="shuguli in shugulis"           
            v-bind:key="shuguli.id"  
          >
            <div v-if="shuguli.status === 'done'">
              <div class="card-content">{{ shuguli.description }}</div>

              <footer class="card-footer">
                <a class="card-footer-item" v-on:click="setStatus(shuguli.id, 'todo')">Panga</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',

  data() {
    return {
      shugulis: [],
      description: '',
      status: 'todo'
    }
  },

  mounted() {
    this.getShugulis()
  },

  methods: {
    getShugulis(){
      axios({
        method: 'get',
        url: 'http://localhost:8000/Shugulis/',
        auth: {
          username: 'ivar',
          password: '123456'
        }
      })
      .then(response => this.shugulis = response.data)
    },

    addShuguli(){
      if (this.description){
        axios({
          method: 'post',
          url: 'http://localhost:8000/Shugulis/',
          data: {
            description: this.description,
            status: this.status
          },

          auth: {
            username: 'ivar',
            password: '123456'
          }

        }).then((response) => {
          let newShuguli = {
            'id': response.data.id,
            'description': this.description,
            'status': this.status
          }

          this.shugulis.push(newShuguli)

          this.description = ''
          this.status = 'todo'
        }).catch((error) => {
          console.log(error)
        })
      }  
    },

    setStatus(shuguli_id, status){
      const shuguli = this.shugulis.filter( shuguli => shuguli.id === shuguli_id)[0]
      const description = shuguli.description

      axios({
        method: 'put',
        url: 'http://localhost:8000/Shugulis/' + shuguli_id + '/',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          status: status,
          description: description
        },
        auth: {
          username: 'ivar',
          password: '123456'
        }
      }).then(() => {
        shuguli.status = status
      })
    }
  }

}
</script>

<style lang="scss">
.select, select {
  width: 100%;
}

.card {
  margin-bottom: 20px;
}

.done {
  opacity: 0.3;
}
</style>
