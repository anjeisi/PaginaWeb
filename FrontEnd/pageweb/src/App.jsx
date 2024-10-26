import NavBar from './components/Navbar/navbar';

function App() {
  return (
    <div>
      <NavBar/>

      
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold">Bienvenido a mi sitio</h1>
        <p className="mt-4 text-lg">Este es un sitio básico con React y Tailwind CSS.</p>
      </div>
    </div>
  );
}

export default App;
