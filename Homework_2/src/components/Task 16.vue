<template>
	<section>
		<h1>Приклад використання `immediate` у Watcher</h1>

		<input type="number" v-model="number" placeholder="Введіть число" />

		<p>Останнє значення: {{ lastValue }}</p>
	</section>
</template>

<script>
export default {
	data() {
		return {
			number: 0,
			lastValue: '',
		};
	},
	watch: {
		number: {
			handler(newValue) {
				this.lastValue = `${newValue}.`;
			},

			/* TASK #16 */
			/* Використання опції immediate для виклику watcher при ініціалізації компонента. */
			immediate: true,
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
		font-size: 16px;
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
		font-size: 18px;
	}
}
</style>
