<template>
    <div>
        <h2>Comments</h2>
        <ul>
            <li v-for="comment in comments" :key="comment.id">{{ comment.text }}</li>
        </ul>
        <form @submit.prevent="addComment">
            <textarea v-model="text" placeholder="Add a comment"></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            text: '',
        };
    },
    computed: {
        ...mapGetters(['comments']),
    },
    methods: {
        ...mapActions(['fetchComments', 'createComment']),
        async addComment() {
            try {
                await this.createComment({ text: this.text });
                this.text = '';
            } catch (err) {
                console.error(err);
            }
        },
    },
    async created() {
        await this.fetchComments();
    },
};
</script>