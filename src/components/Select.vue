<template>
    <div class="select">
        <label class="select__label">
            {{ label }}
        </label>
        <select class="select__input" name="city" id="city-select" v-model="selectValue"
            v-on:change="$emit('selectChange', selectValue)">
            <option class="select__item" v-for="select in selectArray" :key="select.value" :value="select.value">
                {{ select.text }}
            </option>
        </select>
    </div>
</template>
<script>
export default {
    name: 'Select',
    data() {
        return {
            selectValue: this.defaultValue
        }
    },
    props: {
        selectArray: {
            type: Array
        },
        defaultValue: {

        },
        label: {
            type: String
        }
    }
}
</script>

<style scoped lang="scss">
.select {
    display: flex;
    flex-direction: column;

    &__input {
        border-radius: 13px;
        padding: 13px;
        border: 1px solid #E9EAEC;
        color: #21252B;
        font-size: 14px;
        letter-spacing: 0.005em;
        margin-bottom: 20px;
        outline: none;
        min-width: 300px;
    }


    &__label {
        font-size: 14px;
        line-height: 1.5;
        font-weight: 600;
        color: #21252B;
        margin-bottom: 10px;
    }
}
</style>