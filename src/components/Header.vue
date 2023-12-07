<template>
    <div class="header">
        <Select label="Авторизация" :select-array="appUsers" :default-value="selectAppUser" @selectChange="selectChange" />
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import Select from './Select.vue';

export default {
    name: 'Header',
    components: {
        Select
    },
    computed: {
        ...mapState({
            appUsers: state => state.app.appUsers,
            selectAppUser: state => state.app.selectAppUser
        })
    },
    methods: {
        ...mapActions({
            setSelectAppUser: 'setSelectAppUser'
        }),
        selectChange(value) {
            this.setSelectAppUser(value)
        }
    },
}
</script>

<style scoped lang="scss">
.header {
    padding: 20px;
    display: flex;
    justify-content: flex-end;
}
</style>