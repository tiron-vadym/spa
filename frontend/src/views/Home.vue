<template>
    <div>
        <h1>Home</h1>
        <CommentList />
    </div>
</template>

<script>
import CommentList from '../components/Comments/CommentList.vue';

export default {
    components: {
        CommentList,
    },
};
</script>
