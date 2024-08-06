const store = Vue.reactive({
	count: 0,
});

/* Опції для vue3-sfc-loader */
const options = {
	moduleCache: {
		vue: Vue,
	},
	async getFile(url) {
		const res = await fetch(url);

		if (!res.ok) {
			throw Object.assign(new Error(res.statusText + ' ' + url), { res });
		}

		return {
			getContentData: asBinary => (asBinary ? res.arrayBuffer() : res.text()),
		};
	},
	addStyle(textContent) {
		const style = Object.assign(document.createElement('style'), {
			textContent,
		});
		const ref = document.head.getElementsByTagName('style')[0] || null;
		document.head.insertBefore(style, ref);
	},
};

/* Імпорт функції завантаження модуля */
const { loadModule } = window['vue3-sfc-loader'];

/* TASK #2 */
/* Створення основного об'єкту Vue і прив'язка його до деякого елементу HTML на сторінці. */
const app = Vue.createApp({
	components: {
		'my-component': Vue.defineAsyncComponent(() =>
			loadModule('./components/MyComponent.vue', options)
		),
		'form-component': Vue.defineAsyncComponent(() =>
			loadModule('./components/FormComponent.vue', options)
		),
	},
	/* TASK #3 */
	/* Створення змінної в об'єкті Vue. */
	data() {
		return {
			store,
		};
	},

	/* TASK #8 */
	/* Створення обробників подій. */
	methods: {
		increment() {
			this.store.count += 1;
		},
		decrement() {
			this.store.count -= 1;
		},
	},
	computed: {
		counter() {
			return this.store.count;
		},
	},
});

app.mount('#root');

/* TASK #9 */
/* Створення другорядного об'єкту Vue і прив'язка його до деякого елементу HTML на сторінці. */

const secondaryApp = Vue.createApp({
	data() {
		return {
			/* TASK #10 */
			/* Передача даних від основного об'єкта до другорядного */
			store,
			localCounter: 0,
			initialCount: store.count,
		};
	},
	methods: {
		increaseCount() {
			this.initialCount -= 1;
		},
	},
	computed: {
		secondaryCounter() {
			return this.localCounter + (this.store.count - this.initialCount);
		},
	},
});

secondaryApp.mount('#secondary-root');
