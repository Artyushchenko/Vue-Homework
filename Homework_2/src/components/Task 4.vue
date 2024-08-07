<template>
	<section class="filterable-list">
		<input
			v-model="filterText"
			type="text"
			placeholder="Вкажіть професію для фільтрації"
		/>

		<ul>
			<li v-for="user in filteredUsers" key="user.id">
				<b>{{ user.name }}</b
				>: {{ user.profession }}
			</li>
		</ul>
	</section>
</template>

<script setup>
import { ref, computed } from 'vue';

const users = ref([
	{ id: 1, name: 'Анатолій', profession: 'Програміст' },
	{ id: 2, name: 'Валентина', profession: 'Дизайнер' },
	{ id: 3, name: 'Григорій', profession: 'Програміст' },
	{ id: 4, name: 'Олена', profession: 'Дизайнер' },
	{ id: 5, name: 'Кирило', profession: 'Програміст' },
	{ id: 6, name: 'Юлія', profession: 'Викладач' },
	{ id: 7, name: 'Олександр', profession: 'Викладач' },
	{ id: 8, name: 'Сергій', profession: 'Дизайнер' },
	{ id: 9, name: 'Костянтин', profession: 'Будівельник' },
	{ id: 10, name: 'Равшан', profession: 'Будівельник' },
]);

/* TASK #4 */
/* Створення методу для фільтрації масиву об'єктів за критерієм. */
const filterText = ref('');

const filteredUsers = computed(() => {
	return users.value.filter(user =>
		user.profession.toLowerCase().includes(filterText.value.toLowerCase())
	);
});
</script>

<style lang="scss" scoped>
.filterable-list {
	display: flex;
	flex-direction: column;
	gap: 15px;
	padding: 20px;
	border-radius: 12px;
	background-color: #add8e6;
	max-width: 300px;

	input {
		padding: 3px 10px;
		border-radius: 15px;
		width: 100%;
	}

	ul {
		padding-left: 0;
		margin: 0;

		> li {
			list-style-type: none;
			font-size: 16px;
		}
	}
}
</style>
