<template>
	<section>
		<div v-if="!isSubmitted">
			<h1>Форма реєстрації</h1>
			<form @submit.prevent="validateForm">
				<div class="form-group">
					<label for="userName">Логін</label>
					<input
						type="text"
						id="userName"
						v-model="userName"
						placeholder="Введіть логін"
					/>
					<span v-if="errors.userName" class="errors">{{
						errors.userName
					}}</span>
				</div>

				<div class="form-group">
					<label for="email">E-mail</label>
					<input
						type="email"
						id="email"
						v-model="email"
						placeholder="Введіть E-mail"
					/>
					<span v-if="errors.email" class="errors">{{ errors.email }}</span>
				</div>

				<button type="submit">Зареєструватися</button>
			</form>
		</div>

		<div v-else>
			<p class="success">Реєстрація пройшла успішно!</p>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			userName: '',
			email: '',
			isSubmitted: false,
			errors: {
				userName: '',
				email: '',
			},
		};
	},
	methods: {
		/* TASK #6 */
		/* Створення методу, який буде перевіряти введені дані у формі на відповідність деяким правилам. */
		validateForm() {
			this.errors = {
				userName: '',
				email: '',
			};

			let isValid = true;

			if (this.userName.length < 3) {
				this.errors.userName = 'Логін повинен бути не менше 3 символів.';
				isValid = false;
			}

			const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
			if (!emailPattern.test(this.email)) {
				this.errors.email = 'Некоректний формат E-mail.';
				isValid = false;
			}

			if (isValid) {
				this.isSubmitted = true;
			}
		},
	},
};
</script>

<style scoped lang="scss">
section {
	max-width: 300px;
	padding: 20px;
	border-radius: 12px;
	background-color: #add8e6;

	h1 {
		font-size: 24px;
		margin-top: 0;
	}

	form {
		.form-group {
			display: flex;
			flex-direction: column;
			gap: 5px;
			margin-bottom: 15px;

			label {
				font-weight: 600;
			}

			input {
				padding: 8px;
				font-size: 16px;
				border: 1px solid #ccc;
				border-radius: 4px;

				&:focus {
					border-color: #007bff;
					outline: none;
				}
			}

			.errors {
				color: #ff0000;
				font-size: 1em;
				font-weight: 600;
			}
		}

		button {
			padding: 8px 16px;
			font-size: 16px;
			cursor: pointer;
			background-color: #007bff;
			color: #fff;
			border: none;
			border-radius: 4px;
			transition: background-color 0.3s;

			&:hover {
				background-color: #0056b3;
			}
		}
	}

	.success {
		color: #008000;
		font-size: 1.1em;
		margin: 0;
		text-align: center;
	}
}
</style>
