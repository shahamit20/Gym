import React, { useEffect, useState } from 'react'
import { getquestion, setquestion } from '../../storage/Fitnessqusetion';

function Ownplan() {
    setquestion()
    const quse = getquestion()
    const [answers, setAnswers] = useState([]);
    const [change, setChange] = useState(false);
    const [progress, setprogress] = useState(0);
    const [loading, setLoading] = useState(false);
    const [questionchange, setquestionchange] = useState(0);
    const [workouts, setWorkouts] = useState([]);

    // 👉 Next button ke liye
    const handleNextClick = () => {
        const currentAnswer = {
            question: quse[questionchange].question,
            selectedOption: quse[questionchange].options.find(opt => opt.id === change)
        };

        setAnswers((prev) => [...prev, currentAnswer]);
        setquestionchange(prev => prev + 1);
        setChange(false);
        const progressPercent = ((questionchange + 1) / quse.length) * 100;
        setprogress(progressPercent);
    };

    const handleSubmit = async () => {
        setLoading(true); // show overlay
        try {
            const finalAnswers = [
                ...answers,
                {
                    question: quse[questionchange].question,
                    selectedOption: quse[questionchange].options.find(opt => opt.id === change)
                }
            ];

            const onlyQuestions = finalAnswers.map(a => a.question);

            const response = await fetch("http://localhost:3000/schedule/ownplan", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ questions: onlyQuestions })
            });

            const resJson = await response.json();
            console.log("✅ Final Answer:", resJson);
            let data;
           if (typeof resJson === "string") {
    // 1. ```json aur ``` remove karo
    const cleaned = resJson.replace(/```json|```/g, '').trim();
    
    // 2. Ab parse karo
    data = JSON.parse(cleaned);
} else {
    data = resJson;
}

            const formattedWorkouts = Object.entries(data).map(([day, exercises]) => ({
                day,
                exercises,
            }));
            setWorkouts(formattedWorkouts)

            setAnswers(finalAnswers);
            setprogress(100);
            setquestionchange(prev => prev + 1); // trigger congratulations screen
        } catch (err) {
            console.error("Error:", err);
        } finally {
            setLoading(false); // hide overlay
        }
    };




    return (
        <>
            <div className='w-[99.9%] mt-10 flex flex-col justify-center items-center pb-5'>
                <h1 className="text-center font-extrabold text-4xl text-gray-800 px-6 leading-snug">
                    Champions don’t follow plans — <span className="text-green-600">they make their own!</span>
                </h1>

                {/* Progress bar */}
                <div className='border w-[80%] mt-[2rem] flex justify-start items-center bg-gray-100 rounded-xl'>
                    <div className="bg-green-600 h-4 rounded-xl transition-all duration-500 ease-in-out"
                        style={{ width: `${progress}%` }} >
                    </div>
                </div>

                {questionchange < quse.length ? (
                    <div className='w-[90%] pb-2 ml-[5%] mt-[2rem] border rounded-xl shadow-2xl bg-[#FAFAFA] relative'>
                        <h1 className='text-2xl ml-5 mt-3 text-[#1A1A1A]'>
                            <i className="fa-solid fa-bullseye text-yellow-600 mr-2"></i>
                            {quse[questionchange].question}
                        </h1>

                        <div className='w-full p-2 pl-[5rem] flex flex-wrap flex-row gap-3 mt-[1rem]'>
                            {quse[questionchange].options.map((goal) => (
                                <div key={goal.id}
                                    className={`rounded-xl w-[25rem] h-[6rem] flex flex-shrink-0 items-center px-3 cursor-pointer ${change === goal.id ? 'border border-purple-400 bg-purple-100' : 'border bg-transparent'}`}
                                    onClick={() => setChange(goal.id)}>
                                    <i className={`${goal.icon} text-4xl border p-2 rounded-full ${change === goal.id ? 'bg-purple-200 text-purple-600' : 'text-gray-600 bg-gray-300'} `}></i>
                                    <div className='h-full ml-2'>
                                        <h1 className="text-xl font-semibold text-gray-800 mt-2">{goal.title}</h1>
                                        <p className="text-sm text-gray-500">{goal.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Loading overlay */}
                        {loading && (
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center rounded-xl z-50">
                                <div className="text-white text-xl font-bold">Please wait a few seconds...</div>
                            </div>
                        )}

                        {change && <div className="flex justify-end pr-10 mt-5">
                            {questionchange === quse.length - 1 ? (
                                <button
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold shadow-md transition"
                                    onClick={handleSubmit}>
                                    Submit
                                </button>
                            ) : (
                                <button
                                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-md transition"
                                    onClick={handleNextClick}>
                                    Next
                                </button>
                            )}
                        </div>}
                    </div>
                ) : (
                   <div className="overflow-x-auto mt-5">
  <table className="min-w-full border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
    <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white sticky top-0">
      <tr>
        <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Day</th>
        <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Exercises</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {workouts.map((item, idx) => (
        <tr
          key={idx}
          className="hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:scale-[1.01] cursor-pointer"
        >
          <td className="px-6 py-4 font-semibold text-gray-700">{item.day}</td>
          <td className="px-6 py-4 text-gray-600">{item.exercises}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

                )}

            </div>
        </>
    )
}

export default Ownplan;
