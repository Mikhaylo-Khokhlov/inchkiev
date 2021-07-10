<template>
  <cover />
</template>

<script>
export default {
  components: {
    cover: () => import("~/components/cover")
  }
};
</script>
