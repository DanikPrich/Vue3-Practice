<template>
	<div class="navbar">
		<div @click="$router.push('/')" class="navbar__logo"> <strong> Vue 3 </strong></div>
		<div class="navbar__btns">
			<my-button @click="$router.push('/posts')">Posts</my-button>
			<my-button @click="$router.push('/about')">About</my-button>
			<my-button @click="$router.push('/posts-store')">Posts Vuex</my-button>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>

.navbar {
	height: 50px;
	background-color: rgb(236, 122, 60);
	box-shadow: 2px 2px 4px gray;
	display: flex;
	align-items: center;
	padding: 0 15px;
}
.navbar__logo{
	cursor: pointer;
}
.navbar__btns {
	margin-left: auto;
	display: flex;
	gap: 10px;
}

</style>