import { useState, useRef } from "react";
import Tarefas from './components/tarefas';

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [checkboxStatuses, setCheckboxStatuses] = useState([]);
  const inputTarefa = useRef();

  // ADICIONAR TAREFA
  const handleAddTarefa = () => {
    if (!inputTarefa.current.value) { return }; // se o campo estiver vazio, não prossegue
    setTarefas([inputTarefa.current.value, ...tarefas]);

    setCheckboxStatuses([false, ...checkboxStatuses]); //quando uma nova tarefa é criada, é adicionado o valor false (pois não está marcado o input)


    inputTarefa.current.value = ""; // limpa o input ao enviar algo
  }

  const handleCheckboxChange = (index) => {
    const newCheckboxStatuses = [...checkboxStatuses];
    newCheckboxStatuses[index] = !newCheckboxStatuses[index];
    setCheckboxStatuses(newCheckboxStatuses);
  };

  return (
    <>
      <Tarefas 
        tarefas={tarefas} 
        inputTarefa={inputTarefa} 
        handleAddTarefa={handleAddTarefa} 
        checkboxStatuses={checkboxStatuses} 
        handleCheckboxChange={handleCheckboxChange} 
      />
    </>
  );
}