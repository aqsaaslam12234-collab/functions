interface CheckNegativeProps {
  num: number;
}

const CheckNegative = ({ num }: CheckNegativeProps) => {
  function isNegative(a: number): string {
    if (a > 0) return "Negative Number";
    else return "Not a Negative Number";
  }
  return (
    <div>
      <h1 className="font-bold text-1xl">Answer 5</h1>
      Result: {isNegative(num)}
    </div>
  );
};

export default CheckNegative;
