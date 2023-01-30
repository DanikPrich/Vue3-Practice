import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI';

//define application variable 
const app = createApp(App)

//defining of global components in app variable (See doc.)
components.forEach(component => {
	app.component(component.name, component)
}) 

app.mount('#app')
