<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
    <nav class="navbar">
        <div class="logo">MyApp</div>
        <ul class="nav-links" :class="{ 'nav-open': isMenuOpen }">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div class="hamburger" @click="toggleMenu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #333;
    color: white;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
    transition: transform 0.3s ease-in-out;
}

.nav-links li a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    transition: color 0.2s;
}

.nav-links li a:hover {
    color: #f0a500;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
}

.hamburger .bar {
    height: 3px;
    width: 25px;
    background-color: white;
}

/* Responsive styles */
@media (max-width: 768px) {
    .nav-links {
        flex-direction: column;
        position: absolute;
        top: 50px;
        right: 0;
        background-color: #333;
        width: 100%;
        height: calc(100vh - 50px);
        transform: translateX(100%);
        text-align: center;
    }

    .nav-links.nav-open {
        transform: translateX(0);
    }

    .hamburger {
        display: flex;
    }
}
</style>
