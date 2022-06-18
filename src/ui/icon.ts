// 按需引入icon图标
import { LogOutOutline } from '@vicons/ionicons5'
import { App, Component } from 'vue'

const icons: Array<Component> = [LogOutOutline]

function install(app: App) {
  icons.forEach((icon: Component) => {
    if (icon.name) {
      app.component(icon.name, icon)
    }
  })
}

export default {
  install
}
