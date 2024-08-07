<template>
	<section>
		<h1>Список ігор</h1>
		<input type="text" placeholder="Пошук за ім'ям" v-model="searchQuery" />
		<ul>
			<li v-for="user in filteredUsers" :key="user.id">
				<b>{{ user.name }}</b
				>: {{ user.email }}
			</li>
		</ul>
	</section>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			searchQuery: '',
			users: [],
		};
	},

	/* TASK #9 */
	/* Створення computed property, яке комбінує дані відповіді від HTTP запиту та з реактивною змінною. */
	computed: {
		filteredUsers() {
			const query = this.searchQuery.toLowerCase();

			return this.users.filter(user => user.name.toLowerCase().includes(query));
		},
	},

	created() {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				this.users = response.data;
			})
			.catch(error => {
				console.error('Помилка при спробі отримати дані: ', error);
			});
	},
};
</script>

<style lang="scss" scoped>
section {
	width: 300px;
	background-color: #add8e6;
	border-radius: 12px;
	padding: 20px;

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

	ul {
		list-style-type: none;
		padding: 0;

		li {
			font-size: 15px;
			padding: 5px;
			border-bottom: 1px solid #000000;

			&:last-child {
				border-bottom: none;
			}
		}
	}
}
</style>
