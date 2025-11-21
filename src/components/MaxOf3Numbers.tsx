interface MaxOf3NumbersProps {
  num1: number;
  num2: number;
  num3: number;
}
const MaxOf3Numbers = ({ num1, num2, num3 }: MaxOf3NumbersProps) => {
  function highestNumber(a: number, b: number, c: number): string {
    if (a > b && b > c) {
      return `${a} is the Greatest Number`;
    } else if (b > a && b > c) {
      return `${b} is the Greater Number`;
    } else {
      return `${c} is the Greatest Number`;
    }
  }
  return (
    <div>
      <h1 className="font-bold text-1xl">Answer 1</h1>
      Result : {highestNumber(num1, num2, num3)}
    </div>
  );
};

export default MaxOf3Numbers;
