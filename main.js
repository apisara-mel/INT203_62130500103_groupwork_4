const app = {
    data() {
        return {
            tasks: [{
                    img: 'img/1.jpg',
                    content: 'Pink Pelicans',
                    done: false
                },
                {
                    img: 'img/2.jpg',
                    content: 'France',
                    done: false
                },
                {
                    img: 'img/3.jpg',
                    content: 'Bali',
                    done: false
                }
            ],
                text: '',
                isHidden: false,
        }
    },

    methods: {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done
        },
        search() {
            this.form.search = !this.form.search;
        },
    },

    computed: {
        countUndone() {
            return this.tasks.filter(t => t.done).length
        },
     
        searching() {
            return this.tasks.filter(showResult => {
                return showResult.content.toLowerCase().includes(this.text.toLowerCase())
            })

        }
    }
}
Vue.createApp(app).mount('#app')