<template>
  <div id="ninjas">
    <ul>
      <li
        v-for="ninja in ninjas"
        :key="ninja.name"
        @click="ninja.show = !ninja.show"
      >
        <h2>{{ ninja.name }}</h2>
        <p v-show="ninja.show">{{ ninja.speciality }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    ninjas() {
      return this.$store.state.ninjas;
    },
  },
};
</script>
