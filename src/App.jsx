// import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const [data, setData] = React.useState([])

  //use state
  React.useState(()=>{

    //fectiong data
    fetch('http://localhost:8000/api/user', {
      method : 'GET',
      mode : "cors"
    })
    .then(res => res.json())
    .then(dataApi => {
      setData(dataApi)
    })
    .catch(err => console.log(err))

  }, [])
  return (
    <div className="App">
      {/* {console.log(data)} */}
      {data.map((e)=>{
        return (
          <ul key={e.id}>
            <li>{e.email}</li>
            <li>{e.password}</li>
          </ul>
        )
      })}
    </div>
  );
}

export default App;