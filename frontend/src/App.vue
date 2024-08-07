<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/register">Register</router-link>
            <router-link v-if="isAuthenticated" to="/profile">Profile</router-link>
            <button v-if="isAuthenticated" @click="logout">Logout</button>
        </nav>
        <router-view />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters(['isAuthenticated']),
    },
    methods: {
      ...mapActions(['logout']),
    },
};
</script>

<style>
nav {
  display: flex;
  gap: 10px;
}
</style>
