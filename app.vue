<template>
  <div>
    <!-- Preloader -->
    <div v-if="isLoading" class="preloader">
      <h1 class="counter">0</h1>
      <div class="overlay">
        <div class="bar" v-for="n in 6" :key="n"></div>
      </div>
    </div>

    <!-- Page Transition -->
    <transition name="page" mode="out-in">
      <NuxtPage />
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

// Add dynamic head tags
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://use.typekit.net/hhz6dhb.css'
    }
  ]
});

// Preloader state
const isLoading = ref(true);

onMounted(() => {
  // Start the preloader animation
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;

  function updateCounter() {
    if (currentValue === 100) {
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;
    if (currentValue > 100) currentValue = 100;

    counterElement.textContent = currentValue;

    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, delay);
  }

  updateCounter();

  // GSAP animations
  gsap.to(".counter", 0.25, {
    delay: 3.5,
    opacity: 0,
  });

  gsap.to(".bar", 1.5, {
    delay: 3.5,
    height: 0,
    stagger: {
      amount: 0.5,
    },
    ease: "power4.inOut",
    onComplete: () => {
      isLoading.value = false; // Hide the preloader
    },
  });
});
</script>

<style>

.overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  display: flex;
}

.bar{
  width: 100vw;
  height: 105vh;
  background: #1a1a1a;
}

.counter {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 10000;
  color: #b1b1b8;
  padding: .2em .4em;
  font-size: 20vw;
}

.page-enter-active,
.page-leave-active {
  transition: all 1.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(.5rem);
}

</style>

