import './App.module.css'

import {

} from "@vega-ui/react";
import Header from './components/header/header';
import MainPage from "./components/main/main_page.tsx";

function App() {

  return (
    <div className={'main_body'}>
        <Header/>
        <MainPage/>
    </div>
  )
}

export default App
