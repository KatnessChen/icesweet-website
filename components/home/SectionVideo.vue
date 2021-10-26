<template>
  <section class="section-video">
    <iframe
      class="iframe"
      src="https://www.youtube.com/embed/dRCxY7FRwbw"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </section>
</template>

<script>
export default {
  name: 'SectionVideo'
}
</script>

<style lang="scss" scoped>
.section-video {
  height: 60vh;

  .iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
