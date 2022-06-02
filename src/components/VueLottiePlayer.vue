<template>
  <div :style="style" ref="container"></div>
</template>

<script lang="ts" setup>
import {computed, nextTick, onMounted, ref} from "vue"
import type { CSSProperties } from 'vue'

import lottie, {AnimationItem} from "lottie-web"


const props = defineProps( {
  name: {
    type: String,
    default: () => "lottie-" + Math.random()
  },
  width: {
    type: [String, Number],
    default: () => "200px"
  },
  height: {
    type: [String, Number],
    default: () => "200px"
  },
  background: {
    type: String,
    default: "transparent"
  },

  loop: {
    type: [Boolean, Number],
    default: () => false
  },
  autoplay: {
    type: Boolean,
    default: () => true
  },
  renderer: {
    type: String,
    default: 'svg'
  },
  path: {
    type: String,
    required: true
  },
  animationData: {
    type: Object,
    default: () => null
  }
})

const emit = defineEmits<{
  (e: 'render', instance: AnimationItem): void
}>()

const lottieRef = ref<AnimationItem>()
const container = ref<HTMLElement | null>()

type RawSize = string | number;
const getSize = (size: RawSize) => {
  return typeof size === 'number' ? `${size}px` : size;
}

const style = computed<CSSProperties>(() => ({
  width: getSize(props.width),
  height: getSize(props.height),
  background: props.background
}))

const loadAnimation = () => {
  lottieRef.value = lottie.loadAnimation({
    ...props,
    // @ts-ignore
    container: container.value
  })
  // sự kiện render hoàn tất
  emit('render', lottieRef.value)
}

onMounted(() => nextTick(() => loadAnimation()))

defineExpose({
  lottie: lottieRef.value
})

</script>

<script lang="ts">
export default {
  name: "VueLottiePlayer"
}
</script>
