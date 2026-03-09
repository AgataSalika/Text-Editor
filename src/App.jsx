
import { useState } from 'react';
import './App.css';
import Main from './components/Main.jsx';
import { createContext } from 'react';
import Form from './components/Form.jsx';
import TextItem from './components/TextItem.jsx';
const ThemeContext = createContext();



function App() {

  const [theme, setTheme] = useState('light')
  let [textBtn, setTextBtn] = useState('Сменить на темную тему')
  function changeTheme() {
    if (theme === 'light') {
      setTheme('dark')
     setTextBtn('Сменить на светлую тему')
    }
    else {
      setTheme('light')
      setTextBtn('Сменить на темную тему')
    }
  }

  const [data, setData] = useState(['string1', 'string2', 'string3'])


  return (
    <div className={'App ' + theme}>
    <div className="container">
      <button onClick={changeTheme}>{textBtn}</button>
    </div>

    <Form data={data} setData={setData}/>
    <div>
 
    </div>
    <div>{data.map(function(el,index) {
     return (
      <TextItem el={el} key={index}/>
     )
    })}</div>

    </div>
  );
}

export default App;
