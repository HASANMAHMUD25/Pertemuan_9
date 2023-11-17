import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Layout from "./layouts/Layouts";
import { useState } from "react";
import DataMovie from '../src/Utils/components/DataMovie'
import Popular from "./Utils/Popular";
import Add from "../src/pages/Add"


function App() {

  const [ data, setData ] = useState(DataMovie)
  return (
    <Layout>
        <Routes>
          <Route path='/' element={<Home item={data} setItem={setData}/>} />
          <Route path='/popular' element={<Popular/>} />
          <Route path='/Add' element={<Add item={data} setItem={setData} />} />
        </Routes>
    </Layout>
  );
}

export default App;
