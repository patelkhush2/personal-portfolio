<template>
    <div class="work-page">
      <nav>
        <a href=""><NuxtLink to="/">HOME</NuxtLink></a>
        <a href=""><NuxtLink to="/work">WORK</NuxtLink></a>
        <a href=""><NuxtLink to="/about">ABOUT</NuxtLink></a>
      </nav>

      <hr class="solid">

      <div class="grid2">
        <img src="/assets/00011.png" alt="">
        <img src="/assets/DL-1080p.gif" alt="">
        <aside>
          <h3>DOTLAB STUDIO</h3>
          <h4>3D Animation done for my design studio. Made in Blender, post-processed in Premiere Pro.</h4>
        </aside>
      </div>

      <hr class="solid">

      <div class="grid2">
        <aside>
          <h3>UEFA Champions League</h3>
          <h4>UEFA Champions League Trophy Animation. Directed and Curated. Made in Blender, post processed in Premiere Pro.</h4>
          <a class="links" target="_blank" href="https://www.instagram.com/p/C7waSXIM2-a/">Click Me</a>
        </aside>
          <img src="/assets/UEFACL-4K.png" alt="">
      </div>
      
      <hr class="solid">

      <div class="grid2">
          <img src="/assets/MAINpng.jpg" alt="">
          <aside>
          <h3>NOCTA Editorial</h3>
          <h4>Custom conept titles & graphic for NOCTA. Exploring typography and design style with brushes to create something unique. Made in Adobe Fresco & Photoshop.</h4>
          </aside>
          <img src="/assets/Styles.png" alt="">
          <img src="/assets/Nocata Sketched.png" alt="">
      </div>

      <hr class="solid">

      

    </div>
</template>



<!-- <style>
@keyframes appear{
  from {
    opacity: 0;
    filter: blur(1rem);
  }
  to {
    opacity: 1;
    filter: blur(0rem);
  }
}

.grid2 {
  animation: appear ;
  animation-timeline: view();
  animation-range: entry 0% cover 50%;
}
</style>
-->

<script setup>
// Dynamically set the page metadata
useHead({
  title: 'Khush Patel Portfolio: Work',
  meta: [
    {
      name: 'description',
      content: 'none'
    }
  ]
});
</script>