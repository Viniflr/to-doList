addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');

        // Criar o checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Criar o texto da tarefa
        const taskLabel = document.createElement('span');
        taskLabel.textContent = taskText;

        // Adicionar um estilo para quando a tarefa estiver marcada pelo checkbox
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                taskLabel.style.textDecoration = 'line-through'; // risca o texto
                taskLabel.style.color = 'gray';
            } else {
                taskLabel.style.textDecoration = 'none';
                taskLabel.style.color = 'black';
            }
        });

        // Botão para remover a tarefa
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            taskList.removeChild(listItem);
        });

        // Montar o item da lista com checkbox, texto e botão remover
        listItem.appendChild(checkbox);
        listItem.appendChild(taskLabel);
        listItem.appendChild(removeButton);

        taskList.appendChild(listItem);

        taskInput.value = '';
    } else {
        alert('Por favor, insira uma tarefa.');
    }
});
