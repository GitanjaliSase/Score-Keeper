import * as LucideIcons from "lucide-react";

function ScoreCard({ score, increaseScore, decreaseScore, teamName, winner }) {
    const isWinner=winner===teamName;
    return (
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 w-72 md:w-96 rounded-xl shadow-lg border border-gray-300">
            <h2 className="text-3xl text-center font-semibold text-amber-900 border-b-2 pb-4 ">
                {teamName} {isWinner ?"🏆🎖️":" "}
            </h2>
            <p className="text-6xl text-center font-bold text-blue-400 my-5">{score}</p>
           {winner ? null :(
            <div className="flex justify-around items-center">
                <button onClick={decreaseScore} className="p-4 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-md transition">
                <LucideIcons.SquareMinus size={30} />
                </button>
                <button onClick={increaseScore} className="p-4 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-md transition">
                <LucideIcons.SquarePlus size={30} />
                </button>
            </div>
            )}
        </div>
    );
}

export default ScoreCard;
