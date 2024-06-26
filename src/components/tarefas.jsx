import React from 'react';

export default function Tarefas({ tarefas, inputTarefa, handleAddTarefa, checkboxStatuses, handleCheckboxChange, setTarefas, setCheckboxStatuses, excluir }) {

  return (
    <>
      <div>
        <input type="text" placeholder="Escrever tarefa" ref={inputTarefa} />
        <button onClick={handleAddTarefa}>+</button>

        <div>
          {tarefas.map((tarefa, id) => (
            <div key={id}>
              <button onClick={() => excluir(id)}>X</button>
              <input type="checkbox" checked={checkboxStatuses[id]} onChange={() => handleCheckboxChange(id)} />
              <label style={{
                textDecoration: checkboxStatuses[id] ? 'line-through' : 'none',
              }}>
                {tarefa}
              </label>
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
