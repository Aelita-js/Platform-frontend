import Routes from './routes/Routes';

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;


// import LogIn from './components/Authentication/Login/LogIn';
// import Routes, { useState } from './routes/Routes';

// function App() {
//   const [token, setToken] = useState();
//   if(!token) {
//     return <LogIn setToken={setToken} />
//   }


//   return (
//     <div className="App">
//       <Routes />
//     </div>
//   );
// }

// export default App;