<template>
  <div>

    <!-- Page Transition -->
    <transition name="page" mode="out-in">
      <NuxtPage />
    </transition>
  </div>
</template>


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

