<template>
    <div class="task-card" @click="showTask">
        <p class="task-card__title">{{ todo.todo }}</p>
        <BadgeText :text="badgeText" />
        <div class="task-card__footer">
            <div class="task-card__section">
                <a target="_blank" rel="noopener">
                    <img class="task-card__avatar" :src="avatar">
                </a>
            </div>
            <div class="task-card__section">
                <div class="task-card__count-group">
                    <span class="task-card__icon task-card__icon_message" />
                    <p class="task-card__count">
                        {{ getRandomCount() }}
                    </p>
                </div>
                <div class="task-card__count-group">
                    <span class="task-card__icon task-card__icon_folder" />
                    <p class="task-card__count">
                        {{ getRandomCount() }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import BadgeText from './BadgeText.vue';

export default {
    name: 'TaskCard',
    components: {
        BadgeText
    },
    props: {
        todo: {
            type: Object
        },
        avatar: {
            type: String
        }
    },
    computed: {
        badgeText() {
            return this.todo.completed ? 'Готова' : 'Новая'
        }
    },
    methods: {
        ...mapActions({
            setSelectTask: 'setSelectTask'
        }),
        getRandomCount() {
            const min = Math.ceil(0);
            const max = Math.floor(5);
            return Math.floor(Math.random() * (max - min) + min);
        },
        showTask() {
            this.setSelectTask(this.todo)
            this.$router.push({ name: 'task' })
        }
    }
}
</script>

<style scoped lang="scss">
.task-card {
    background-color: #FFF;
    border-radius: 16px;
    padding: 16px;

    &__title {
        font-size: 12px;
        line-height: 1.5;
        letter-spacing: 0.005em;
        color: #21252B;
        font-weight: 600;
        margin-bottom: 6px;
        overflow: hidden;
        display: -moz-box;
        display: -webkit-box;
        line-clamp: 2;
        -moz-box-orient: vertical;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        box-orient: vertical;
    }

    &__footer {
        margin-top: 27px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__section {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__avatar {
        border-radius: 50%;
        width: 23px;
        height: 23px;
        border: .3px solid #989FAB;
    }

    &__count-group {
        display: flex;
        align-items: flex-end;

        &:first-child {
            margin-right: 10px;
        }
    }

    &__count {
        font-weight: 500;
        font-size: 12px;
        letter-spacing: 0.005em;
        color: #989FAB;
    }

    &__icon {
        background: no-repeat center / cover;
        height: 13px;
        width: 13px;
        display: block;
        margin-right: 3px;

        &_folder {
            background-image: url('../assets/images/folder.svg');
        }

        &_message {
            background-image: url('../assets/images/message.svg');
        }
    }
}
</style>