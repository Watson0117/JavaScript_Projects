/* This function gets the task from input*/
function get_todos() {
    /* This creates an array of tasks that are inputed*/
    var todos = new Array;
    /*This pulls the task that was saved in the web browser memory */
    var todos_str = localStorage.getItem('todo');
    /**if the input is not null then JSON.parse will
     * comunicate with the web browser to make the task a Javascript object.*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
/**this function adds the inputded task to the get_todos function array */
function add() {
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /**This adds a new task the edn of the array */
    todos.push(task);
    /**this converts the task input to a JSON string */
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

return false;
}

/**this function keeps the tasks permanetly displayed on the screen */
function show() {
    /**this sets the task that was retrieved as a variable */
    var todos = get_todos();

    /**this sets up each task as an unordered list */
    var html = "<ul>";
    /**this displays a task to the list in the order that it is inputed */
    for (var i = 0; i < todos.length; i++) {
        /** this also displays the task as a list and creates the button with the "x" */
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';

    };
    html += '</ul>';
    /** This displayes the task as a list **/
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };

}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}
/*this displayes the inputed task when the Add Item button is clicked*/
document.getElementById('add').addEventListener('click', add);
/*this will keep the inputs displayed permantaly on the screen */
show();