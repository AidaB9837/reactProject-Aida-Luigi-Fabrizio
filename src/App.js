import { useTranslation } from 'react-i18next';
import Foo from './Components/foo';

// import React, { useState } from 'react';
import './App.css';

function App() {

  const { i18n, t } = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language)
  }


  // const [state, setState] = useState(2);

  //getDataFromServer

  function handleGetData() {
    fetch("http://localhost:3000/posts/") // +state
      .then(response => response.json())
      .then(json => console.log(json))
  }

  //postDataToServer

  function handlePostData() {
    fetch("http://localhost:3000/posts/", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {

          "title": "json-serverThree",
          "author": "typicodeThree"
        }
      )
    })
      .then(response => response.json())
  }


  //modifyData

  function handleModifyData() {
    fetch("http://localhost:3000/posts/7", {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {

          "title": "json-serverSevenModified",
          "author": "typicodeSevenModified"
        }
      )
    })
      .then(response => response.json())
  }

  //deleteData

  function handleDeleteData() {
    fetch("http://localhost:3000/posts/7", {
      method: "DELETE",
    })
      .then(response => response.json())
  }

  return (
    <div className="App">
      <button onClick={() => handleGetData()}>
        getData
      </button>

      {/* <button onClick={() => setState(1)}>
        STATE 1
      </button> */}

      <button onClick={() => handlePostData()}>
        postData
      </button>

      <button onClick={() => handleModifyData()}>
        modifyData
      </button>

      <button onClick={() => handleDeleteData()}>
        deleteData
      </button>

      <button onClick={() => changeLanguage("en")}>
        en
      </button>

      <button onClick={() => changeLanguage("it")}>
        it
      </button>

      <p>
        {t("title")}
        {t("second")}
      </p>

      <Foo />


    </div>
  );
}

export default App;
