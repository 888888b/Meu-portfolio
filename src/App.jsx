import Cabeça from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Carrosel from "./components/Projects";
import './styles/App.css';

export default function App() {
  return (
    <main className="app-container">
      <Cabeça/>
      <Main/>
      <Carrosel/>
      <Footer/>
    </main>
  )
}
