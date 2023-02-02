import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI';
import router from "@/router/router"

//define application variable 
const app = createApp(App)

//defining of global components in app variable (See doc.)
components.forEach(component => {
	app.component(component.name, component)
}) 

app
	.use(router)
	.mount('#app')
