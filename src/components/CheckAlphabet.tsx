interface CheckAlphabetProps{
    input: string;
}
const CheckAlphabet = ({input}:CheckAlphabetProps) => {
    function isAlphabet (text:string):string{
        if(text.length === 1 && (text>='A'|| text<='Z' || text>='a'||text<='z')){
            return `${text} is an Alphabet`
        }else {
            return `${text} is not an Alpha`
        }
    }
  return (
    <div>
<h1 className="font-bold text-1xl">Answer 7</h1>
Result: {isAlphabet(input)}
    </div>
  )
}

export default CheckAlphabet
