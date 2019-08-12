<template>
  <div>
    <h2>Vue Version</h2>

    <div>
      <div>
        <div class="help">Default options.</div>
        <v-marquee ref="marquee" style="width: 300px">
          Parcel can take any type of file as an entry point, but a HTML or
          JavaScript file is a good place to start. If you link your main
          JavaScript file in the HTML using a relative path, Parcel will also
          process it for you, and replace the reference with a URL to the output
          file.
        </v-marquee>
        <button @click="pause">Pause</button>
        <button @click="start">Start</button>
      </div>

      <div>
        <div className="help">
          with <code>pauseOnHover = true</code> options
        </div>
        <v-marquee style="width: 300px" :pauseOnHover="true">
          Parcel can take any type of file as an entry point, but a HTML or
          JavaScript file is a good place to start. If you link your main
          JavaScript file in the HTML using a relative path, Parcel will
          also process it for you, and replace the reference with a URL to
          the output file.
        </v-marquee>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Marquee from "./vue/index.vue";

export default Vue.extend({
  components: {
    "v-marquee": Marquee
  },
  methods: {
    pause() {
      (this.$refs.marquee as Marquee).pause();
    },
    start() {
      (this.$refs.marquee as Marquee).start();
    }
  }
});
</script>