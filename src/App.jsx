import { useState } from "react";
import CardPreview from "./Components/Cardpreview";
import CardForm from "./Components/Cardform";
import Completed from "./Components/Completed";

function App() {
  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  const [isCompleted, setIsCompleted] = useState(false);
 const handleContinue = () => {
    setCardData({
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    });
    setIsCompleted(false);
  };
  return (
    <div className="md:flex">
      {/*  show preview */}
      <div className="md:w-1/2">
      <CardPreview cardData={cardData} />
</div>
      {/* Show form only */}
      
  <div >    
    {!isCompleted ?(
        <CardForm
          cardData={cardData}
          setCardData={setCardData}
          setIsCompleted={setIsCompleted}
          
        /> )
         :(
        <Completed onContinue={handleContinue}/> 
)} </div>

    </div>
  );
}

export default App;
