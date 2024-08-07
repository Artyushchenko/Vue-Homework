<template>
	<section>
		<h1>Відстеження змін</h1>
		<input type="number" placeholder="Введіть число" v-model="number" />
		<p>Введене число: {{ number }}</p>

		<!-- TASK #11 -->
		<!-- Виведення повідомлення про зміни в об'єкті. -->
		<p>{{ logString }}</p>
	</section>
</template>

<script>
export default {
	data() {
		return {
			number: 0,
			logString: '',
		};
	},

	/* TASK #11 */
	/* Використання watcher для відстеження змін у реактивному об’єкті. */
	watch: {
		number(newNumber, oldNumber) {
			this.logString = `Число ${oldNumber} було змінено на ${newNumber}.`;
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
