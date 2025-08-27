const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim(); // Ele lê o que foi digitado dentro do input

    if (taskText !== '') { // Verifica se o input não está vazio
        const listItem = document.createElement('li'); // Cria um <li>

        // Cria um checkbox para a tarefa
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Cria um span para colocar o texto da tarefa
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Quando o checkbox for marcado, o texto da tarefa fica riscado
        checkbox.addEventListener('change', () => {
            taskSpan.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        });

        // Coloca o checkbox e o texto dentro do <li>
        listItem.appendChild(checkbox);
        listItem.appendChild(taskSpan);

        // Botão para editar uma tarefa
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.addEventListener('click', () => {
            // Cria um input temporário para editar a tarefa
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = taskSpan.textContent;

            listItem.replaceChild(editInput, taskSpan);
            editInput.focus();

            // quando apertar Enter ou perder o foco, salva a edição
            const saveEdit = () => {
                if (editInput.value.trim() !== '') {
                    taskSpan.textContent = editInput.value.trim();
                }
                listItem.replaceChild(taskSpan, editInput);
            };

            editInput.addEventListener('blur', saveEdit);
            editInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') saveEdit();
            });
        });

        // Coloca o botão de editar dentro do <li>
        listItem.appendChild(editButton);

        // Botão para remover a tarefa
        const removeButton = document.createElement('button');    
        removeButton.textContent = 'X';
        removeButton.addEventListener('click', () => {
            listItem.remove(); // Quando clicar no botão, remove o <li>
        });

        // Coloca o botão de remover dentro do <li>
        listItem.appendChild(removeButton);

        // joga o <li> dentro da <ul>
        taskList.appendChild(listItem);

        // Limpa o input depois de adicionar a tarefa
        taskInput.value = '';
    }
});