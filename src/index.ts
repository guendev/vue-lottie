import type { App } from 'vue'
import VueLottiePlayer from "./components/VueLottiePlayer.vue"

const plugin = {
    install(app: App) {
        app.component('VueLottiePlayer', VueLottiePlayer)
    }
}

export default plugin

export {
    VueLottiePlayer
}
