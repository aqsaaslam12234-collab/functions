interface CheckVowelProps {
  input: string;
}

const CheckVowel = ({ input }: CheckVowelProps) => {
  function isVowel(text: string): string {
    if (
      text === "A" ||
      text === "E" ||
      text === "I" ||
      text === "O" ||
      text === "U" ||
      text === "a" ||
      text === "e" ||
      text === "i" ||
      text === "o" ||
      text === "u"
    ) {
      return `${text} is vowel`;
    } else {
      return `${text} is not vowel`;
    }
  }
  return (
    <div>
      <h1 className="text-1xl font-bold">Answer 9</h1>
      Result: {isVowel(input)}
    </div>
  );
};
export default CheckVowel;
