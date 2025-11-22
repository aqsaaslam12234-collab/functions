interface CheckUppercaseProps{
    char:string;
}
const CheckUppercase = ({char}: CheckUppercaseProps) => {
    function isUpperCase(char:string):string{
        if (char === char.toUpperCase()){
            return `${char} is UpperCase`;
        }else{
            return `${char} is UpperCase`;
        }

    }
  return (
    <div>
        <h1 className="text-1xl font-bold">Answer 6</h1>
        Result: {isUpperCase(char)}
      
    </div>
  )
}

export default CheckUppercase
