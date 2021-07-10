<template>
  <buyers />
</template>

<script>
export default {
  components: {
    buyers: () => import("~/components/buyers")
  }
};
</script>
