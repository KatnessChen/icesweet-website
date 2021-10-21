<template>
  <section class="section-video">
    <iframe
      class="video"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/DWcJFNfaw9c"
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

  .video {
    width: 100%;
    height: 100%;
  }
}
</style>
