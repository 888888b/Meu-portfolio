import Cabeça from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Carrosel from "./carrosel";

import './App.css'

export default function App() {
  return (
    <main className="main-app">
      <Cabeça/>
      <Main/>
      <Carrosel/>
      <Footer/>
    </main>
  )
}
