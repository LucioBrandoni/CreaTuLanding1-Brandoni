
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
      <h1 style={{
        textAlign: 'center',
        marginTop: '4rem',
        marginBottom: '5rem',
        fontSize: '2.5rem',
          color: '#3193bb', // Cambiar el color del título principal al azul del logo
        fontWeight: '700',
        letterSpacing: '2px',
        textShadow: '0 4px 16px rgba(48,232,191,0.35)'
      }}>¡Bienvenido a Master Bytes!</h1>
      <NavBar />
      <ItemListContainer mensaje="" />
    </>
  );
}


export default App;
