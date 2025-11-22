interface Marks2GradesProps{
    marks: number;
}

const Marks2Grades = ({marks}: Marks2GradesProps) => {
    function marktoGrades(a: number): string {

        if (a >= 50 && a < 75) {
            return "Satisfactory";
        } else if (a > 75){
            return "Good";
        }else {
            return "Fail";
        }
    }
  return (
    <div>
      <h1 className=" font-bold text-1xl">Answer 3</h1>
    Result: {marktoGrades(marks)}
    </div>
  )
}

export default Marks2Grades
