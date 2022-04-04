import './App.css';

const compromissos = [
  'Estudar React',
  'Estudar EDO',
  'Fazer trabalho EDO',
  'Assistir aula novamente',
];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ul>
      {compromissos.map((compromisso) => Task(compromisso))}
    </ul>
  );
}

export default App;
