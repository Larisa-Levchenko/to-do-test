<template>
    <div class="badge">
        <p class="badge__text">
            {{ text }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'BadgeText',
    props: {
        text: {
            type: String
        }
    }
}
</script>

<style scoped lang="scss">
.badge {
    background-color: #FEE9F1;
    border-radius: 16px;
    width: fit-content;

    &__text {
        font-size: 12px;
        line-height: 1.5;
        letter-spacing: 0.005em;
        color: #F22772;
        padding: 3px 10px;
    }
}
</style>