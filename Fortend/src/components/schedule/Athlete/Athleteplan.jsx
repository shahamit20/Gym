import React, { useState } from "react";
const cards = [
    {
        title: "Beginner Full Body",
        level: "Beginner",
        info: "Perfect for newcomers focusing on form and basic movements.",
        img: "https://media.istockphoto.com/id/1447561932/photo/strong-fitness-and-gym-people-with-dumbbell-teamwork-training-or-exercise-community.jpg?s=612x612&w=0&k=20&c=0FekqqRCF8qYr5fefpJxafB5YTerYiS_JbCFDOIjYEQ="
    },
    {
        title: "Intermediate Strength",
        level: "Intermediate",
        info: "Build muscle and increase core strength with compound lifts.",
        img: "https://media.istockphoto.com/id/1277242852/photo/holding-weight-and-sitting.jpg?s=612x612&w=0&k=20&c=3sy-VVhUYjABpNEMI2aoruXQuOVb__-AUR6BzOHoSJg="
    },
    {
        title: "Advanced Powerlifting",
        level: "Advanced",
        info: "High-intensity training for maximal strength development.",
        img: "https://media.istockphoto.com/id/1130320238/photo/muscular-man-working-out-in-gym-flipping-tire-strong-male-naked-torso.jpg?s=612x612&w=0&k=20&c=D1KK5NoNXNc5GQB-tR3VFksTDlTr0U6YvUDc8sV-23c="
    },
    {
        title: "Fat Loss HIIT",
        level: "Intermediate",
        info: "Burn fat fast with high-intensity interval circuits.",
        img: "https://media.istockphoto.com/id/1183038884/photo/view-of-a-row-of-treadmills-in-a-gym-with-people.jpg?s=612x612&w=0&k=20&c=VnTSyKHKl-YFOmpFqW_hNyIlis0sFksfcR9Ei3-r29s="
    },
    {
        title: "Mobility & Stretching",
        level: "All Levels",
        info: "Improve flexibility and recover faster with guided mobility routines.",
        img: "https://media.istockphoto.com/id/615883260/photo/difficult-doesnt-mean-impossible.jpg?s=612x612&w=0&k=20&c=cAEJvjTFRuF9H9gRov1Aj4X4I6xV6DSvMwWsf-2IW-0="
    },
    {
        title: "Upper Body Split",
        level: "Intermediate",
        info: "Target chest, shoulders, and arms with isolated push-pull splits.",
        img:"https://media.istockphoto.com/id/618209684/photo/strong-muscular-men.jpg?s=612x612&w=0&k=20&c=VrrIrkkl1A-UVXlrgllWCJKNga6niorNzvB2nIw9pDM="
    },
    {
        title: "Leg Day Challenge",
        level: "Advanced",
        info: "Crush your lower body with squats, lunges, and deadlifts.",
        img: "https://media.istockphoto.com/id/1187121639/photo/woman-does-squats-workout-with-a-barbell-in-a-gymnasium-for-fitness.jpg?s=612x612&w=0&k=20&c=Rwww588nAXnbCXqeV4gcbm39TSUu8p1UZufWyzKKK7Q="
    }
];


export default function Athletepla() {
    const [centerIndex, setCenterIndex] = useState(0);

    const prev = () => {
        setCenterIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    const next = () => {
        setCenterIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const getCardStyle = (index) => {
        const total = cards.length;
        const relativePos = (index - centerIndex + total) % total;

        switch (relativePos) {
            case 0: // Center
                return "z-30 scale-110 rotate-y-0 translate-x-0 opacity-100";
            case 1: // Right
                return "z-20 rotate-y-45 translate-x-[13rem] scale-95 opacity-70";
            case 2: // Far Right
                return "z-10 rotate-y-75 translate-x-[24rem] scale-90 opacity-50";
            case total - 1: // Left
                return "z-20 -rotate-y-45 -translate-x-[13rem] scale-95 opacity-70";
            case total - 2: // Far Left
                return "z-10 -rotate-y-75 -translate-x-[24rem] scale-90 opacity-50";
            default:
                return "hidden";
        }
    };

    return (
        <div className="w-full flex justify-center items-center mt-[20rem] gap-6 mb-7">
            {/* Left Button */}
            <button
                onClick={prev}
                className="z-50 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-red-700"
            >
               <i class="fa-solid fa-arrow-left"></i>
            </button>

            {/* Card Carousel */}
            <div className="w-[80%] h-[340px] relative perspective-[1500px]">
                <div
                    className="w-full h-full relative flex items-center justify-center"
                    style={{ transformStyle: 'preserve-3d' }}
                >

                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`absolute transition-all duration-500 ease-in-out w-[28rem] p-1.5  rounded-lg shadow-lg bg-black text-white text-2xl font-bold flex items-center justify-center transform  ${getCardStyle(index)}`}
                        >
                            <div className="flex w-full h-full flex-col">
                                <div className="w-full h-1/2 bg-white flex items-center justify-center">
                                    <img src={card.img} alt="" />
                                    </div>
                                <div className="w-full h-1/2 p-2">
                                    <h1 className="text-3xl font-semibold ">{card.title}</h1>
                                    <p className="text-base text-gray-400">{card.level}</p>
                                    <p className="text-base text-gray-500 mt-3">{card.info}</p>

                                    <div className="flex flex-wrap gap-3 mt-4">
                                        {["Design System", "Tailwind", "React", "UI Kit"].map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-white text-gray-800 text-sm font-medium px-4 py-1 rounded-full shadow-sm cursor-pointer"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="text-lg text-gray-600 ">Learn more </button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

            {/* Right Button */}
            <button
                onClick={next}
                className="z-50 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
            >
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    );
}
