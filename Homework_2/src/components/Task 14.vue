<template>
	<section>
		<h1>Обчислені властовісті і Watcher</h1>

		<input type="text" v-model="firstName" placeholder="Введіть імя" />
		<input type="text" v-model="lastName" placeholder="Введіть прізвище" />

		<p>Повне ім'я: {{ fullName }}</p>
		<p>Остання зміна у computed property:</p>
		<p>{{ lastChange }}</p>
	</section>
</template>

<script>
export default {
	data() {
		return {
			firstName: '',
			lastName: '',
			lastChange: '',
		};
	},
	computed: {
		fullName() {
			return `${this.firstName} ${this.lastName}`;
		},
	},

	/* TASK #14 */
	/* Створення watcher'у, який реагує на зміни в computed property. */
	watch: {
		fullName(newFullName) {
			this.lastChange = `Computed fullName змінилося на: ${newFullName}.`;
		},
	},
};
</script>

<style scoped lang="scss">
section {
	border-radius: 12px;
	background-color: #add8e6;
	padding: 20px;
	width: max-content;

	h1 {
		font-size: 24px;
		margin-top: 0;
	}

	input {
		display: block;
		margin-bottom: 10px;
		padding: 8px;
		font-size: 16px;
		border: 1px solid #ccc;
		border-radius: 4px;
		width: 100%;
	}

	p {
		font-size: 16px;
	}
}
</style>
