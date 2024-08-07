<template>
	<section>
		<h1>Список ігор</h1>
		<input type="text" placeholder="Пошук за назвою" v-model="searchQuery" />
		<ul>
			<li v-for="game in filteredGames" :key="game.id">
				<b>{{ game.name }}</b
				>: {{ game.year }}
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	data() {
		return {
			searchQuery: '',
			games: [
				{ id: 1, name: 'Grand Theft Auto: San Andreas', year: 2004 },
				{ id: 2, name: 'Super Mario World', year: 1990 },
				{ id: 3, name: 'Call of Duty: Modern Warfare 3', year: 2011 },
				{ id: 4, name: 'Pac-Man', year: 1980 },
				{ id: 5, name: 'Grand Theft Auto IV', year: 2008 },
				{ id: 6, name: 'FIFA 18', year: 2017 },
				{ id: 7, name: 'Red Dead Redemptions', year: 2010 },
				{ id: 8, name: 'Call of Duty: Modern Warfare 2', year: 2009 },
				{ id: 9, name: 'Human: Fall Flat', year: 2016 },
				{ id: 10, name: 'Wii Sports Resort', year: 2009 },
			],
		};
	},

	/* TASK #8 */
	/* Створення computed property для фільтрації списку об'єктів. */
	computed: {
		filteredGames() {
			const query = this.searchQuery.toLowerCase();

			return this.games.filter(game => game.name.toLowerCase().includes(query));
		},
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
		margin-bottom: 20px;

		&:focus {
			border-color: #007bff;
			outline: none;
		}
	}

	ul {
		list-style-type: none;
		padding: 0;

		li {
			padding: 5px;
			border-bottom: 1px solid #000000;

			&:last-child {
				border-bottom: none;
			}
		}
	}
}
</style>
