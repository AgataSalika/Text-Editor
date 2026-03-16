
import { useState } from 'react';
import './App.css';
import Main from './components/Main.jsx';
import { createContext } from 'react';
import Form from './components/Form.jsx';
import TextItem from './components/TextItem.jsx';
const ThemeContext = createContext();



function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')// начальным значнием для нашей переменной будет
  //  theme из локал сторадж (если оно там есть), если нет - то будет light
  let [textBtn, setTextBtn] = useState(theme === 'dark'? 'Сменить на светлую тему' : 'Сменить на темную тему')
  function changeTheme() {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
      setTextBtn('Сменить на светлую тему')
    }
    else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
      setTextBtn('Сменить на темную тему')
    }
  }

  const [data, setData] = useState(['Остановись, мгновенье! Ты прекрасно.'])
  // const numbers = [1,56,78,4,1335]
  // localStorage.setItem('info', JSON.stringify(numbers)) // сначала указываем название, а потом - то что записываем, записать объект или массив 
  //  в storage БЕЗ ПОТЕРИ ДАННЫХ JSON.STRINGIFY
  // let info = JSON.parse(localStorage.getItem('info')) //чтобы ту строку кот там была обратно преобразовать в массив или объект - JSON.PARSE

  return (
    <div className={'App ' + theme}>
    <div className="container">
      <button className="changeTheme" onClick={changeTheme}>{textBtn}</button>
       <Form data={data} setData={setData}/>
    </div>

   
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
