<template>
    <div class="user-card" v-if="showUser">
        <div class="user-card__header">
            <p class="user-card__title">
                {{ user.firstName + ' ' + user.lastName }}
            </p>
            <BadgeText text="Khẩn cấp" />
            <button class="user-card__button" @click="addNewTask" v-show="root">
                <span class="user-card__button-icon" />
            </button>
        </div>
        <TaskCard class="user-card__item" v-for="todo in todoByUserId" :key="todo.id" :todo="todo" :avatar="user.image" />
        <DialogCreate v-if="showDialog" :userId="user.id" @closeDialog="closeDialog"/>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import TaskCard from './TaskCard.vue';
import BadgeText from './BadgeText.vue';
import DialogCreate from '../components/DialogCreate.vue';

export default {
    name: 'UserCard',
    components: {
        TaskCard,
        BadgeText,
        DialogCreate
    },
    data () {
        return {
            showDialog: false
        }
    },
    props: {
        user: {
            type: Object
        }
    },
    computed: {
        ...mapState({
            todoList: state => state.todo.todoList
        }),
        ...mapGetters({
            root: 'isAppUserRoot'
        }),
        todoByUserId() {
            return this.todoList.filter(item => item.userId === this.user.id);
        },
        showUser() {
            return this.todoByUserId.length > 0;
        }
    },
    methods: {
        addNewTask() {
            this.showDialog = true
        },
        closeDialog () {
            this.showDialog = false
        }
    }
}
</script>

<style scoped lang="scss">
.user-card {
    background-color: #FAFAFA;
    border-radius: 15px;
    padding: 20px;
    min-width: 300px;

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    &__title {
        font-size: 14px;
        line-height: 1.5;
        font-weight: 600;
        text-transform: uppercase;
        color: #21252B;
    }

    &__item:not(:last-child) {
        margin-bottom: 20px;
    }

    &__button {
        width: 14px;
        height: 14px;
    }

    &__button-icon {
        background: url('../assets/images/plus.svg') no-repeat center / cover;
        height: 100%;
        width: 100%;
        display: block;
    }
}
</style>