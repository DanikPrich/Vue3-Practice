<template>
	<button 
    class="btn" 
	>
		<slot></slot>
	</button>
</template>

<script>
	export default {
		//Name must consist of two words
		name: 'my-button'
	}
</script>

<style scoped>
  .btn {
    padding: 7px 15px;
    background: white;
    border: 1px solid rgb(236, 122, 60);
    color: rgb(236, 122, 60);
		transition: background-color .2s ease-out;
  }
	.btn:hover {
		color: white;
		border: 1px solid white;
		background-color: rgb(236, 122, 60);
	}
</style>