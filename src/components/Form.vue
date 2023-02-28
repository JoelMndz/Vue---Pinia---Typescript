<template>
  <form @submit.prevent="send">
    <h1>Agregar Tarea</h1>
    <div>
      <input type="text" placeholder="Nombre" required v-model="taskCurrent.name">
    </div>
    <div>
      <input type="text" placeholder="Descripción" required v-model="taskCurrent.description">
    </div>
    <div>
      <button type="submit">Guardar</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {mapState, mapActions} from 'pinia'
import {useTaskStore} from '../stores/taskStore';

export default defineComponent({
  setup() {
    
  },
  methods:{
    ...mapActions(useTaskStore, ['addTask']),
    send(){
      this.addTask(this.taskCurrent);
    }
  },
  computed:{
    ...mapState(useTaskStore, ['taskCurrent'])
  }
})
</script>


<style scoped>
form{
    width: 350px;
    margin:auto;
    background: rgb(236, 231, 231);
    padding: 10px;
    margin-top: 10px;
    
  }
  h1{
    text-align: center;
  }
  input{
    width: 98%;
    padding: 5px;
    border-radius: 10px;
    margin-top: 10px;
    border-color: transparent;
    font-size: 15px;
  }
  button{
    border-color: transparent;
    background: #04AA6D;
    width: 100%;
    padding: 5px;
    color: white;
    margin-top: 10px;
    border-radius: 10px;
    font-size: 20px;
  }
</style>