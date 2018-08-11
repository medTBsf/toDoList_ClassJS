class Todolist {
  constructor() {
    this.todos = [
      { todoText: "learn react", isdone: true },
      { todoText: "learn Node", isdone: false }
    ];
  }

  getTodos() {
    return this.todos;
  }

  addTodo(toDo) {
    this.todos.push(toDo);
    this.render(); //car on a utilisé map qui renvoie un nouveau tab donc il faut faire render
  }

  toggleTodo(index) {
    this.todos[index].isdone = !this.todos[index].isdone;
    this.render();
  }

  removeTodo(index) {
    this.todos.splice(index, 1);
    this.render();
  }
  render() {
    let rootElement = document.querySelector("#root");
    let todohtml = `<div class="container">
							<input class="input-text" type="text">
							<input class="add-btn" type="button" value="Add">

						</div>`;
    let listItem = this.todos
      .map(
        todo => `<div class="item"><span class ="item-text ${
          todo.isdone ? "item-done" : ""
        }">${todo.todoText}</span>
			<input class="delete-btn" type="button" value="Delete"></div>`
      )
      .join(""); // join car map renvoie tableau et innerHTML renvoie string

    rootElement.innerHTML = todohtml + listItem;
    this.addeventlistener();
  }

  addeventlistener() {
    const addbtn = document.querySelector(".add-btn");
    const inputValue = document.querySelector(".input-text");
    const deleteBtn = Array.from(document.querySelectorAll(".delete-btn"));
    const textTodo = Array.from(document.querySelectorAll(".item-text"));
    addbtn.onclick = () => {
      this.addTodo({
        todoText: inputValue.value,
        isdone: false
      });
    };
    deleteBtn.forEach((btnelem, index) => {
      btnelem.onclick = () => {
        this.removeTodo(index);
      };
    });
    textTodo.forEach((txtelem, index) => {
      txtelem.onclick = () => {
        this.toggleTodo(index);
      };
    });
  }
}

const listto = new Todolist();
listto.render();
