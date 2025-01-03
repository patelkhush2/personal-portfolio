<template>
    <div class="contact-page">
        <div class="back-btn">
            <NuxtLink to="/">< BACK</NuxtLink>
        </div>
    
        <div class="info">
            <p>Let's Work... or just connect!</p>
            <p>Email: khush@dotlabstudio.com</p>
            <p>Instagram: @khushsptl</p>
        </div>
    </div>
</template>

<script setup>
// Dynamically set the page metadata
useHead({
  title: 'Khush Patel Portfolio: Contact',
  meta: [
    {
      name: 'description',
      content: 'Contact Khush Patel to collaborate or connect.'
    }
  ]
});
</script>
