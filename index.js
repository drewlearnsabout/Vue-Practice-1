        new Vue({
            el: app,
            data: {
                message: ''
            }
        })

        new Vue({
            el: '#two',
            data: {
                message: ''
            }
        })

        var three = new Vue({
            el: '#three',
            data: {
                seen: true
            }
        })

        var four = new Vue({
            el: '#four',
            data: {
                message: 'You loaded this page on: ' + new Date().toLocaleString()
            }
        })

        var five = new Vue({
            el: '#five',
            data: {
                todos: [
                    { text: 'Learn Javascript' },
                    { text: 'Learn Vue' },
                    { text: 'Learn more Vue' }
                ]
            }
        })

        five.todos.push({ text: 'Should be a new item' });

        var six = new Vue({
            el: '#six',
            data: {
                message: 'This message will reverse!'
            },
            methods: {
                reverseMessage: function() {
                    this.message = this.message.split('').reverse().join('')
                }
            }
        })

        Vue.component('todo-item', {
            props: ['todo'],
            template: '<li>{{ todo.text }}</li>'
        })

        var seven = new Vue({
            el: '#seven',
            data: {
                groceryList: [
                    { id: 0, text: 'Bananas' },
                    { id: 1, text: 'Grapes' },
                    { id: 2, text: 'Cheese' }
                ]
            }
        })


        