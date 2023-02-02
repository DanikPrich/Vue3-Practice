import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI';
import router from "@/router/router"
import VIntersection from '@/directives/VIntersection';

import directives from './directives';

//define application variable 
const app = createApp(App)

//defining of global components in app variable (See doc.)
components.forEach(component => {
	app.component(component.name, component)
}) 

directives.forEach(directive => {
	app.directive(directive.name, directive) //Инициализация директивы
})

app
	.use(router) //Инициализация роутинга
	.mount('#app')
