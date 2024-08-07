<template>
	<section>
		<!-- TASK #5 -->
		<!-- Використання методу для обробки події кліку, який змінює стан інших компонентів. -->
		<Button @change-message="updateMessage" />
		<Display :message="message" />
	</section>
</template>

<script>
import Button from './Button.vue';
import Display from './Display.vue';

export default {
	components: {
		Button,
		Display,
	},
	data() {
		return {
			message: 'Привіт, світ!',
		};
	},
	methods: {
		updateMessage() {
			this.message = 'Змінене повідомлення.';
		},
	},
};
</script>

<style scoped lang="scss">
section {
	padding: 20px;
	background-color: #add8e6;
	max-width: max-content;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 16px;
}
</style>
