<template>
	<section>
		<h1>Відстеження однієї властивості</h1>
		<label>
			Ім'я:
			<input type="text" v-model="user.name" placeholder="Введіть ім'я" />
		</label>
		<br />
		<label>
			Вік:
			<input
				type="number"
				v-model.number="user.age"
				placeholder="Введіть вік"
			/>
		</label>
		<p>Ім'я: {{ user.name }}</p>
		<p>Вік: {{ user.age }}</p>

		<!-- TASK #12 -->
		<!-- Виведення повідомлення про зміну ім'я. -->
		<p>{{ ageLog }}</p>
	</section>
</template>

<script>
export default {
	data() {
		return {
			ageLog: '',
			user: {
				name: '',
				age: 0,
			},
		};
	},
	watch: {
		/* TASK #12 */
		/* Використання watcher для відстеження змін однієї властивості у реактивному об’єкті. */
		'user.name'(newValue, oldValue) {
			this.ageLog = `Ім'я змінено з ${oldValue} на ${newValue}.`;
		},
	},
};
</script>

<style scoped lang="scss">
section {
	padding: 20px;
	border-radius: 12px;
	background-color: #add8e6;
	width: 400px;

	h1 {
		font-size: 20px;
		margin-top: 0;
	}

	label {
		display: block;
		margin-bottom: 10px;

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

	p {
		font-size: 18px;
	}
}
</style>
