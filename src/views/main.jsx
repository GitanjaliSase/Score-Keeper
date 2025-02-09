import React,{useEffect,useState} from "react";
import ScoreCard from "./../components/ScoreCard.jsx";
import toast,{Toaster} from 'react-hot-toast';

export default function Home(){
   const [scoreA, setScoreA]=useState(0);
   const [scoreB,setScoreB]=useState(0);
   const [winner,setWinner]=useState(null);
   useEffect(()=>{
    if(scoreA<10 && scoreB<10){
      return;
    }
    if(scoreA===10){
      setWinner("Team A")
      toast.success("Team A wins!");
    }
    if(scoreB===10){
      setWinner("Team B")
      toast.success("Team B wins");
    }
   },[scoreA,scoreB]);
   return(
    <div className="bg-red-200 min-h-screen p-10">
      <h1 className="text-4xl font-bold text-emerald-600 mb-6 text-center md:mt-17 mt-10 md:text-6xl ">Team Tally Tracker</h1>
   <div className="flex flex-col justify-center md:flex-row   md:mt-10 md:gap-30 gap-10 rounded-4xl">
     <ScoreCard score={scoreA} teamName="Team A" increaseScore={()=>{ setScoreA(scoreA+1);}}  decreaseScore={()=>{setScoreA(scoreA-1);}} winner={winner}/>
     <ScoreCard score={scoreB} teamName="Team B" increaseScore={()=>{ setScoreB(scoreB+1);}}  decreaseScore={()=>{setScoreB(scoreB-1);}} winner={winner}/>

   </div>
   {winner ? 
   <p className="text-center m-10 md:text-3xl transition-opacity text-2xl ">Winner Team is <b>{winner} 🏆🏆🎖️.</b> Click reset to start again.</p>: null}
   <div className="flex justify-center md:mt-20 mt-10">
    <button className="bg-amber-600 px-10  py-3 text-4xl text-white rounded-3xl shadow-lg hover:shadow-amber-200"
    onClick={()=>{
      setScoreA(0);
      setScoreB(0);
      setWinner(null);
    }}
    >
      Reset
    </button>
   </div>
   <Toaster />
    </div>
   );
}



