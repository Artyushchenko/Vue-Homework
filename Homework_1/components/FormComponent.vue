<!-- TASK #6 -->
<!-- Створення форми вводу тексту та зв'язка введеного значення з властивістю об'єкта Vue. Відображеення введеного тексту на сторінці. -->

<template>
	<form>
		<input
			type="text"
			placeholder="Введіть будь-який текст"
			v-model="inputText"
		/>
	</form>

	<p>
		<!-- TASK #7 -->
		<!-- Використання кастомного компонента у існуючому компоненті -->
		<SpanComponent />: {{ inputText }}
	</p>
</template>

<script>
import SpanComponent from './SpanComponent.vue';

export default {
	name: 'FormComponent',
	components: {
		SpanComponent,
	},
	data() {
		return {
			inputText: '',
		};
	},
};
</script>

<style scoped>
form {
	max-width: max-content;
	padding: 20px;
	border-radius: 12px;
	background-color: #90ee90;
}

input {
	width: 200px;
	padding: 5px 10px;
	border-radius: 10px;
	border: none;
}

p {
	font-size: 20px;
}
</style>
