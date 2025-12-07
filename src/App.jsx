import { useState } from "react";
import CardPreview from "./Components/Cardpreview";
import CardForm from "./Components/Cardform";
import Completed from "./Components/Completed";

function App() {
  const [cardData, setCardData] = useState({
    name: "Jane Doe",
    number: "0000 0000 0000 0000",
    month: "00",
    year: "00",
    cvc: "000",
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
    <div>
      {/*  show preview */}
      <CardPreview cardData={cardData} />

      {/* Show form only */}
      {!isCompleted ?(
        <CardForm
          cardData={cardData}
          setCardData={setCardData}
          setIsCompleted={setIsCompleted}
        /> )
         :(
        <Completed onContinue={handleContinue}/> 
)} 
    </div>
  );
}

export default App;
