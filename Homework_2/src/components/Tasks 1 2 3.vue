<template>
	<section class="reactive-object">
		<input v-model="newProfession" type="text" placeholder="Вкажіть професію" />

		<!-- TASK #1 -->
		<!-- Відображення властивостей об'єкта у шаблоні. -->
		<ul>
			<li v-for="(value, key) in userData" :key="key">
				<b>{{ key }}</b
				>: {{ value }}
			</li>
		</ul>

		<!-- TASK #2 -->
		<!-- Виклик методу при кліці на кнопку, який змінює дані. -->
		<button @click="changeData">Змінити дані</button>

		<button @click="addProfession">Додати професію</button>
	</section>
</template>

<script setup>
import { reactive, ref } from 'vue';

/* TASK #1 */
/* Створення реактивного об'єкту. */
const userData = reactive({
	lastName: 'Іванов',
	firstName: 'Іван',
	age: 35,
	country: 'Ukraine',
});

/* TASK #1 */
/* Зміна властивостей об'єкта. */
const changeData = () => {
	(userData.lastName = 'Невідомий'),
		(userData.firstName = 'Невідомець'),
		(userData.age = 48);
};

/* TASK #3 */
/* Створення методу, який приймає подію і використовує її для зміни даних. */
const newProfession = ref('');

const addProfession = event => {
	if (newProfession.value.trim !== '') {
		userData.profession = newProfession.value;
		newProfession.value = '';
	} else {
		alert('Будь-ласка, введіть професію!');
	}
};
</script>

<style lang="scss" scoped>
.reactive-object {
	display: flex;
	flex-direction: column;
	gap: 15px;
	padding: 20px;
	border-radius: 12px;
	background-color: #add8e6;
	max-width: 250px;

	input {
		padding: 3px 10px;
		border-radius: 15px;
	}

	ul {
		padding-left: 0;
		margin: 0;

		> li {
			list-style-type: none;
			font-size: 16px;
		}
	}

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
}
</style>
