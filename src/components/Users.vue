<template>
  <div class="">
      USER COMPONENT
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "UserInfo",
  computed: mapGetters(["user"]),
  methods: {
    ...mapActions(["fetchUsers"]),
  },
  created: function() {
      this.fetchUsers();
  }
}
</script>

<style>

</style>