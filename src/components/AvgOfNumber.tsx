interface AvgOfNumberProps {
    num1: number;
    num2: number;
    num3: number;
}

const AvgOfNumber = ({num1, num2, num3}:AvgOfNumberProps) => {
    function avgOf3Numbers(a:number, b:number, c:number):number {
        return(a+b+c)/3;
    }
  return (
    <div>
      <h1 className="font-bold text-1xl">Answer 4</h1>
      Result: {avgOf3Numbers(num1, num2, num3)}
    </div>
  )
}

export default AvgOfNumber
