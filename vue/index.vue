<template>
  <div
    ref="box"
    style="white-space: nowrap; overflow: hidden;"
    @mouseenter="_onmouseEnter"
    @mouseleave="_onmouseLeave"
  >
    <div ref="text" style="display: inline-block;">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export interface Data {
  timer: number | null | NodeJS.Timeout;
}

export default Vue.extend({
  name: "v-marquee",
  data(): Data {
    return {
      timer: 0
    };
  },
  props: {
    pauseOnHover: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    _scroll2Left(): void {
      const $box = this.$refs.box as HTMLElement;
      const $text = this.$refs.text as HTMLElement;

      const [textWidth] = [$text.offsetWidth, $box.offsetWidth];

      const m = ($text.style.transform || "").match(/-?\d+/);
      const offset = m ? +m[0] : 0;

      // if scroll all content. The reset position to the right
      if (offset < 0 && textWidth < -offset) {
        $text.style.transform = `translateX(${$box.offsetWidth + 1}px)`;
        this.timer = setTimeout(() => {
          clearTimeout(this.timer as number);
          this._scroll2Left();
        }, 1000);
      } else {
        $text.style.transform = `translateX(${offset - 1}px)`;
        this.timer = setTimeout(() => {
          clearTimeout(this.timer as number);
          this._scroll2Left();
        }, 18);
      }
    },
    start(): void {
      if (!this.timer) {
        this._scroll2Left();
      }
    },
    pause(): void {
      clearTimeout(this.timer as number);
      this.timer = null;
    },
    _onmouseEnter(): void {
      const { pauseOnHover } = this.$props;
      if (pauseOnHover) {
        this.pause();
      }
    },
    _onmouseLeave(): void {
      const { pauseOnHover } = this.$props;
      if (pauseOnHover) {
        this.start();
      }
    }
  },
  mounted() {
    const box = this.$refs.box as HTMLElement;
    const text = this.$refs.text as HTMLElement;

    const [textWidth, boxWidth] = [text.offsetWidth, box.offsetWidth];

    if (boxWidth > textWidth) {
      return;
    }

    this.start();
  }
});
</script>