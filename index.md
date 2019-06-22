<html>
    <head>
        <title>VueJS Practice</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="stylesheet" href="style.css">
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    </head>

    <body>
        <div id="app">
            <input type="text" id="input" v-model="message" placeholder="Type here">
            <p>The message will change for this sentence: {{ message }}</p>
        </div>

        <div id="two">
            <input type="text" id="input" v-model="message" placeholder="Type here also">
            <p>This other message will hopefully say: {{ message }}</p>
        </div>
    
        <div id="three">
            <p v-if="seen">Now you see me</p>
        </div>

        <div id="four">
            <p v-bind:title="message">I do something, so hover over me!</p>
        </div>

        <div id="five">
            <ol>
                <li v-for="todo in todos">
                    {{ todo.text }}
                </li>
            </ol>
        </div>

        <div id="six">
            <p>{{ message }}</p>
            <button v-on:click="reverseMessage">Reverse Message</button>
        </div>

        <div id="seven">
            <ol>
                <todo-item
                v-for="item in groceryList"
                v-bind:todo="item"
                v-bind:key="item.id"></todo-item>
            </ol>
        </div>
    
        <script src="index.js"></script>
    </body>
</html>