<template>
	<section>
		<h1>Операції з числом</h1>
		<input type="number" placeholder="Введіть число" v-model="number" />
		<p>Квадрат числа: {{ squaredNumber }}</p>
		<p>Подвоєний квадрат числа: {{ doubleSquaredNumber }}</p>
	</section>
</template>

<script>
export default {
	data() {
		return {
			number: 0,
		};
	},
	computed: {
		/* TASK #10 */
		/* Створення кількох computed properties, які залежать одне від одного. */
		squaredNumber() {
			return (this.number ** 2).toFixed(2);
		},
		doubleSquaredNumber() {
			return (this.squaredNumber * 2).toFixed(2);
		},
	},
};
</script>

<style scoped lang="scss">
section {
	padding: 20px;
	border-radius: 12px;
	background-color: #add8e6;
	width: max-content;

	h1 {
		font-size: 24px;
		margin-top: 0;
	}

	input {
		width: 100%;
		padding: 10px;
		font-size: 16px;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;

		&:focus {
			border-color: #007bff;
			outline: none;
		}
	}

	p {
		font-size: 18px;
		color: #555;
	}
}
</style>
