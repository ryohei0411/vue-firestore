<template>
  <div>
    <h1>Index</h1>
    <table>
      <thead>
        <td>name</td>
      </thead>
      <tr v-for="todo in this.todos" :key="todo.id">
        <td>
          {{ todo.name }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import firebase from 'firebase';
  export default {
    name: 'todoIndex',
    data() {
      return {
        db: null,
        todos: []
      }
    },
    created() {
      this.db = firebase.firestore();
      var _this = this;
      //todosコレクションの監視
      this.db.collection('todos').onSnapshot(function(querySnapshot) {
        _this.todos = [];
        querySnapshot.forEach(function(doc){
          var data = doc.data();
          data.id = doc.id;
          _this.todos.push(data);
        });
      });
    }
  }
</script>

<style lang="scss" scoped>

</style>