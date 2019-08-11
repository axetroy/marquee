<template>
  <div>
    <h2>Vue Version</h2>
    <v-marquee style="width: 300px">
      Parcel can take any type of file as an entry point, but a HTML or
      JavaScript file is a good place to start. If you link your main
      JavaScript file in the HTML using a relative path, Parcel will also
      process it for you, and replace the reference with a URL to the output
      file.
    </v-marquee>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Marquee from "./vue/marquee.vue";

export default Vue.extend({
  components: {
    "v-marquee": Marquee
  }
});
</script>