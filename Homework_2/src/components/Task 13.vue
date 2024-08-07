<template>
	<section>
		<h1>Пошук користувачів</h1>
		<input
			type="text"
			v-model="searchQuery"
			placeholder="Введіть імя для пошуку"
		/>

		<p v-if="loading">Завантаження...</p>
		<p v-if="error" class="error">{{ error }}</p>

		<ul v-if="results.length">
			<li v-for="user in results" :key="user.id">
				<b>{{ user.name }}</b
				>: {{ user.email }}
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	data() {
		return {
			searchQuery: '',
			results: [],
			loading: false,
			error: '',
		};
	},

	/* TASK #13 */
	/* Використання watcher'у для відправлення API запитів при зміні реактивних даних. */
	watch: {
		async searchQuery(newQuery) {
			if (newQuery.trim() === '') {
				this.results = [];
				this.error = '';
				return;
			}

			this.loading = true;
			this.error = '';

			try {
				const response = await fetch(
					`https://jsonplaceholder.typicode.com/users`
				);

				if (!response.ok) {
					throw new Error('Помилка відповіді мережі.');
				}

				const data = await response.json();

				this.results = data.filter(user =>
					user.name.toLowerCase().includes(newQuery.toLowerCase())
				);
			} catch (error) {
				this.error = `Помилка: ${error.message}`;
			} finally {
				this.loading = false;
			}
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
	}

	p {
		font-size: 18px;
	}

	.error {
		color: #ff0000;
	}
}
</style>
