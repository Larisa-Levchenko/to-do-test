<template>
    <div class="overlay">
        <div class="dialog">
            <div class="dialog__header ">
                <button class="dialog__button-close" @click="close">
                    <span class="dialog__button-icon" />
                </button>
            </div>
            <h2 class="dialog__title">
                Редактировать статус задачи
            </h2>
            <p class="dialog__user">
                Задача - {{ todo.todo }}
            </p>
            <Select label="Статус задачи" :select-array="statusArray" :default-value="selectStatus" @selectChange="selectChange" />
        </div>
    </div>
</template>

<script>
import AppService from '@/app/service/app-service';
import Select from './Select.vue';

export default {
    name: 'DialogEdit',
    components: {
        Select
    },
    data() {
        return {
            statusArray: [
                {
                    value: false,
                    text: 'Новая'
                },
                {
                    value: true,
                    text: 'Готова'
                }
            ],
            selectStatus: this.todo?.completed
        }
    },
    props: {
        todo: {
            type: Object
        }
    },
    methods: {
        close() {
            this.$emit('closeDialog')
        },
        selectChange (value) {
            AppService.updateTodo({ todoId: this.todo.id, status: value })
                .then(() => {
                    this.close()
                })
                .catch((e) => {
                    console.log(e)
                })
        }
    }
}
</script>