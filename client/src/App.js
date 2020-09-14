import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import EmailForm from "./components/EmailForm";
import FormMenu from "./components/FormMenu";



function App() {
  return (
    <div className="App">
      <FormMenu />
      <EmailForm />
    </div>
  );
}

export default App;
