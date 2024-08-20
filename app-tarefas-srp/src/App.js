import { useState } from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho';
import NovaTarefa from './components/NovaTarefa';
import ListaTarefas from './components/ListaTarefas';

export default function App() {

  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: 'Estudar React', completa: false },
    { id: 2, titulo: 'Estudar Node', completa: true }
  ]);

  return (
    <div className="App">
      <Cabecalho />
      <NovaTarefa tarefas={tarefas} setTarefas={setTarefas} />
      <ListaTarefas titulo="Tarefas Pendentes:" 
          tarefasFiltradas={tarefas.filter(t => !t.completa)}
          tarefas={tarefas} setTarefas={setTarefas} />
      <ListaTarefas titulo="Tarefas Concluídas:" 
          tarefasFiltradas={tarefas.filter(t => t.completa)}
          tarefas={tarefas} setTarefas={setTarefas} />
    </div>
  );
}