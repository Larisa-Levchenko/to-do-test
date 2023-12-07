<template>
  <div class="todo">
    <div class="todo__header">
      <h1 class="todo__title">Todo List</h1>
    </div>
    <div class="todo__list">
      <div class="todo__wrapper">
        <UserCard class="todo__item" v-for="user in users" :key="user.id" :user="user"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import UserCard from './UserCard.vue';

export default {
  name: 'TodoList',
  components: {
    UserCard
  },
  computed: {
    ...mapState({
      users: state => state.user.userList
    })
  }
}
</script>

<style scoped lang="scss">
.todo {
  padding-top: 30px;
  padding-bottom: 30px;

  &__header {
    margin-right: 40px;
    margin-left: 25px;
    margin-right: 25px;
  }

  &__title {
    font-family: 'Manrope', sans-serif;
    font-size: 24px;
    line-height: 1.3;
    font-weight: 700;
    color: #111827;
  }

  &__wrapper {
    display: flex;
    margin-bottom: 25px;
  }

  &__list {    
    overflow-x: auto;
    margin: 25px;
  }

  &__item:not(:last-child) {
      margin-right: 25px;
    }
}


@media (max-width: 750px) {
  .todo { 
    &__wrapper {
      flex-direction: column;
    }

    &__item:not(:last-child) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
}
</style>