interface SumOfNTermsProps{
    numberOfValues :number
}

const SumOfNTerms = ({numberOfValues}:SumOfNTermsProps) => {

    function sumNValues(a:number):number{
        if(a<=0){
            return 0
        }
        else{
            return (a*(a+1))/2
        }
        
    }
  return (
    <div>
      <h1 className="text-1xl font-bold">Answer Solution 10</h1>
      Result: {sumNValues(numberOfValues)}
    </div>
  )
}


export default SumOfNTerms
