<template>
	<button 
    class="btn" 
	>
		<slot></slot>
	</button>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
  .btn {
    padding: 7px 15px;
    background: none;
    border: 1px solid rgb(236, 122, 60);
    color: rgb(236, 122, 60);
  }
</style>