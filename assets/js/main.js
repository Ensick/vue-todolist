var app = new Vue({

    el: '#root',

    data: {

        inputTask: '',

        todoList: [

            {
                testo: 'comprare il pane',
                done: false,
            },

            {
                testo: 'comprare il latte',
                done: false,
            }

        ],

        todoFatti: [],

    },

  /*   beforeUpdate() {

        //console.log(todoList)
        this.todoList.forEach((elem, index) => {
            if (elem.done == true) {

               // this.todoFatti.push(elem);

               // this.todoList.splice(index, 1);
            }
        })

    }, */

    methods: {

  
        rimuoviElemento(index) {

            /* splice rimuove un elemento di un array grazie alla posizione e ne elimina tanti quanti gli dico dall'elemento trovato */

            this.todoList.splice(index, 1)

        },

        todoCompletate(index) {

            /*  modifico lo stato della proprieta */

            if (this.todoList[index].done == false) {

                this.todoList[index].done = true;
                this.todoFatti.push(this.todoList[index]);
                this.todoList.splice(index, 1);
            }

        },

        newTask(){

            let newObj =  {

                testo: this.inputTask,
                
                done: false,
            };

            this.todoList.push(newObj)

            this.inputTask = '';
        }
    },
})