import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"

function App() {

  let [data, setdata] = useState([]);
  let [page, setpage] = useState(1)
  console.log(data, "data")
  useEffect(() => {

    axios.get(`http://localhost:5000?page=${page}`)
      .then(res => {
        console.log(res, "res")

        setdata([...data, ...res.data])
      })
      .catch(err => { console.log(err) })




  }, [page])

  window.addEventListener('scroll', () => {
    console.log("maggi")
    //visible part of screen
    if (window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight) {


      setpage(page + 1)
      console.log(page, "page")

    }
  })
  return (
    <div className="App">
      {data.map(e => <img src={`https://images.bewakoof.com/t320/${e.display_image}`} />)}
    </div>
  );
}

export default App;
