<template>
	<input :value="modelValue" @input="updateInput" type="text" class="input">
</template>

<script>
	export default {
		//Name must consist of two words
		name: 'my-input',
		props: {
			modelValue: [
				String, 
				Number
			]
		},
		methods: {
			updateInput(event) {
				this.$emit('update:modelValue', event.target.value)
			}
		}
	}
</script>

<style scoped>
.input{
	width: 100%;
	border: 1px solid rgb(236, 122, 60);
	padding: 10px 15px;
	margin-top: 15px;
}
</style>