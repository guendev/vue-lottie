<template>
  <div :style="style" ref="container"></div>
</template>

<script lang="ts" setup>
import {computed, nextTick, onMounted, ref} from "vue"
import type { CSSProperties } from 'vue'

import lottie, {AnimationItem} from "lottie-web"


type Props = {
  name?: string
  width?: string | number
  height?: string | number
  background?: string
  loop?: number | boolean
  autoplay?: boolean
  renderer?: string
  path: string
  animationData?: object
}
const props = withDefaults(defineProps<Props>(), {
  name: "lottie-" + Math.random(),
  width: "200px",
  height: "200px",
  background: "transparent",
  loop: false,
  autoplay: true,
  renderer: 'svg'
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
