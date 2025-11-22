interface CheckCharacterProps{
    text:string;
}

const CheckCharacter = ({text}:CheckCharacterProps) => {
    function isCharacter (input:string):string{
    if(typeof(input) === "string" && input.length === 1){
        return "Input is Character"
    }
    else{
        return "Input is not a Character"
    }
  }
  return (
    <div>
 <h1 className="text-1xl font-bold">Answer 8</h1>
        Result: {isCharacter(text)}
        </div>
    
  )
}

export default CheckCharacter
