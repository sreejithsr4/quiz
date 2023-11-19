import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Quiz() {
    const [quizData,setQuizData]=useState([])
    const [score,setScore]=useState(0)
    const [showScore, setShowScore] = useState(false);
    const[count,setCount] =useState(0)
    
    const fetchData= async ()=>{
        const result=await axios.get('/db.json')
        setQuizData(result.data.quiz)
    }
    const valueCheck=(e)=>{
     const {value}=e.target
    
   
        if(value==quizData[count]?.answer){
            setScore(score+1)


        }
        if(count<quizData.length-1){
            setCount(count+1)
        }
else{
    setShowScore(true)

}
       
    }


useEffect(()=>{
fetchData()

},[])
  return (
    <div>
        <h1></h1>
        <div className='container'>
          <h1 className='text-center pt-3'>Quiz</h1>  
          <div>
        <div className='pt-1'>
            <p>{count+1}  {quizData[count]?.question}</p>
            {
                quizData[count]?.choice.map(j=>(
                   <div className='pt-1 ps-3'> 
                   <div   className='d-flex'>
                     <input   onClick={(e)=>valueCheck(e)} type="radio" name='s'   value={j} />
                      <p className='ps-1 mb-0'>{j}</p>
                       </div>

                    </div>
                ))
            }
        </div>


          </div>

<div>
    {showScore?<p className='pt-5'>Your Score is :<strong>{score}</strong></p>:<p></p>}
</div>
        </div>
    </div>
  )
}

export default Quiz