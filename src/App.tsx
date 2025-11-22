import "./App.css";
import AvgOfNumber from "./components/AvgOfNumber";
import CheckAlphabet from "./components/CheckAlphabet";
import CheckCharacter from "./components/CheckCharacter";
import CheckNegative from "./components/CheckNegative";
import CheckUppercase from "./components/CheckUppercase";
import CheckVowel from "./components/CheckVowel";
import Marks2Grades from "./components/Marks2Grades";
import MaxOf3Numbers from "./components/MaxOf3Numbers";
import Multipleof7 from "./components/Multipleof7";
import SumOfNTerms from "./components/SumOfTerms";

function App() {
  return (
    <>
      <MaxOf3Numbers num1={4} num2={7} num3={2} />
      <Multipleof7 num1={23} />
      <Marks2Grades marks={75} />
      <AvgOfNumber num1={23} num2={33} num3={45} />
      <CheckNegative num={5} />
      <CheckUppercase char={"A"} />
      <CheckAlphabet input={"a"} />
      <CheckCharacter text={"Aqsa"} />
      <CheckVowel input={"j"} />
      <SumOfNTerms numberOfValues={6} />
    </>
  );
}
 
export default App;
