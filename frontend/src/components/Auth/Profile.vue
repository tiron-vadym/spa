<template>
    <div>
        <h2>Profile</h2>
        <p>Email: {{ user.email }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['user']),
    },
    created() {
        this.$store.dispatch('getProfile');
    },
};
</script>
