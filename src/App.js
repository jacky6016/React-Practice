// The root App component
// JSX must return one parent component (or wrapped in <>...</>)
function App() {
  const name1 = 'Brad';
  const name2 = 'Pitt';
  const x = true;
  return (
    <div className="App">
      <h1>Hello From React</h1>
      <h2>Hello {x? name1 : name2}</h2>
    </div>
  );
}

export default App;
