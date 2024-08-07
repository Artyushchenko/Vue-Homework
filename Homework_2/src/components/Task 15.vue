<template>
	<section>
		<h1>Відстеження вкладених властивостей</h1>

		<input type="text" v-model="user.name" placeholder="Введіть імя" />
		<input
			type="text"
			v-model="user.address.city"
			placeholder="Введіть місто"
		/>
		<input
			type="number"
			v-model="user.address.zipCode"
			placeholder="Введіть поштовий індекс"
		/>

		<p>Вміст об'єкта user:</p>
		<pre>{{ user }}</pre>
		<p>Остання зміна:</p>
		<pre>{{ lastChange }}</pre>
	</section>
</template>

<script>
export default {
	data() {
		return {
			user: {
				name: '',
				address: {
					city: '',
					zipCode: '',
				},
			},
			lastChange: '',
		};
	},
	watch: {
		user: {
			handler(newValue) {
				this.lastChange = newValue;
			},

			/* TASK #15*/
			/* Використання deep опції для відстеження властивостей внутрішнього об’єкта. */
			deep: true,
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
		font-size: 20px;
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

	pre {
		font-size: 16px;
		background-color: #f4f4f4;
		padding: 10px;
		border-radius: 4px;
	}

	p {
		font-size: 18px;
	}
}
</style>
