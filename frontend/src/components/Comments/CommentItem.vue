<template>
    <li>{{ comment.text }}</li>
</template>

<script>
export default {
    props: {
        comment: {
            type: Object,
            required: true,
        },
    },
};
</script>
