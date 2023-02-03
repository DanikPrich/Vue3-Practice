import MainPage from "@/pages/MainPage";
import PostPage from "@/pages/PostPage";
import AboutPage from "@/pages/AboutPage";
import PostIdPage from "@/pages/PostIdPage";
import PostPageVuex from "@/pages/PostPageVuex";
import PostPageCompositionAPI from "@/pages/PostPageCompositionAPI";
import {createRouter, createWebHistory} from "vue-router"

const routes = [
	{
		path: '/',
		component: MainPage
	},
	{
		path: '/posts',
		component: PostPage
	},
	{
		path: '/about',
		component: AboutPage
	},
	{
		path: '/posts/:id',
		component: PostIdPage
	},
	{
		path: '/posts-store',
		component: PostPageVuex
	},
	{
		path: '/posts-compositionapi',
		component: PostPageCompositionAPI
	},
]


const router = createRouter({
	routes,
	history: createWebHistory()
}) 


export default router; 