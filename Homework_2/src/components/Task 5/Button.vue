<template>
	<button @click="handleClick">Натисни на мене</button>
</template>

<script>
export default {
	methods: {
		handleClick() {
			this.$emit('change-message');
		},
	},
};
</script>

<style scoped lang="scss">
button {
	cursor: pointer;
	font-size: 18px;
	width: 100%;
	border: none;
	border-radius: 20px;
	font-weight: 600;
	background-color: #000000;
	color: #ffffff;
	padding: 5px 30px;
	transition: 0.3s ease-in-out;

	&:hover {
		background-color: #ffffff;
		color: #000000;
	}
}
</style>
