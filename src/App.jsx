import { useEffect, useState } from "react";

import StartPageModal from "./Components/StartPage/StartPageModal";
import MainPage from "./Components/MainPage/MainPage";
import AlertModal from "./Components/AlertModal/AlertModal";

function App() {
  const [openModal, setOpenModal] = useState(true);
  const [errorModal,setErrorModal] = useState(false)


  return (
    <div className="App">
      <div style={{display: openModal? "block":"none" }}>

      <StartPageModal setOpenModal={setOpenModal} />
      </div>
  
      <div style={{display: errorModal? "block":"none" }}>

      <AlertModal/>
      </div>


      <MainPage setErrorModal={setErrorModal} openModal={openModal}/>
      
    </div>
  );
}

export default App;
