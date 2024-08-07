<template>
	<section>
		<h1>Визначення суми</h1>

		<div class="input-group">
			<label for="number1">Число 1:</label>
			<input
				type="number"
				id="number1"
				v-model="number1"
				placeholder="Перше число"
			/>
		</div>

		<div class="input-group">
			<label for="number2">Число 2:</label>
			<input
				type="number"
				id="number2"
				v-model="number2"
				placeholder="Друге число"
			/>
		</div>

		<p class="result">Сума: {{ summary }}</p>
	</section>
</template>

<script>
export default {
	data() {
		return {
			number1: 0,
			number2: 0,
		};
	},

	/* TASK #7 */
	/* Створення обчислювальної властивості для виведення даних, обчислених на основі інших реактивних даних. */
	computed: {
		summary() {
			return this.number1 + this.number2;
		},
	},
};
</script>

<style lang="scss" scoped>
section {
	max-width: 300px;
	padding: 20px;
	border-radius: 12px;
	background-color: #add8e6;

	h1 {
		font-size: 24px;
		margin-top: 0;
	}

	.input-group {
		margin-bottom: 15px;

		label {
			display: block;
			margin-bottom: 5px;
			font-weight: bold;
			color: #555;
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
	}

	.result {
		font-size: 20px;
		font-weight: bold;
	}
}
</style>
