<template>
    <div class="overlay">
        <div class="dialog">
            <div class="dialog__header ">
                <button class="dialog__button-close" @click="close">
                    <span class="dialog__button-icon" />
                </button>
            </div>
            <h2 class="dialog__title">
                Создать новую задачу
            </h2>
            <Select label="Испольнитель" :select-array="userArray" :default-value="selectUser" @selectChange="selectChange" />
            <label class="dialog__label">
                Заголовок задачи
            </label>
            <input class="dialog__input" v-model="textValue" />
            <button class="dialog__button" :disabled="btnDisabled" @click="add">
                Создать
            </button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import AppService from '@/app/service/app-service';
import Select from './Select.vue';

export default {
    name: 'DialogCreate',
    components: {
        Select
    },
    data() {
        return {
            textValue: null,
            userArray: [],
            selectUser: this.userId
        }
    },
    props: {
        userId: {
            type: Number
        }
    },
    computed: {
        ...mapState({
            users: state => state.user.userList
        }),
        btnDisabled() {
            return !this.textValue
        }
    },
    methods: {
        close() {
            this.$emit('closeDialog')
        },
        add() {
            AppService.addTodo({ userId: this.selectUser, todo: this.textValue })
                .then(() => {
                    this.close()
                })
                .catch((e) => {
                    console.log(e)
                })
        },
        selectChange (value) {
            this.selectUser = value 
        }
    },
    mounted () {     
        this.userArray = this.users.map(user => {
            return {
                value: user.id,
                text: user.firstName + ' ' + user.lastName
            }
        })
    }
}
</script>