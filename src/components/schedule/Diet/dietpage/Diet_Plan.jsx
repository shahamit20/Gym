import React, { useEffect, useState } from 'react';

const data = {
    "Rice": 158,
    "Boiled Egg": 78,
    "Oats": 389,
    "Banana": 105,
    "Milk": 150,
    "Peanut Butter": 190,
    "Brown Rice": 111,
    "Chicken Breast": 165,
    "Chapati": 104,
    "Apple": 95,
    "Green Salad": 33,
    "Almonds": 576,
    "Curd": 98,
    "Paneer": 265,
    "Tofu": 144,
    "Moong Dal": 105,
    "Chana": 364,
    "Sweet Potato": 86,
    "Shanwick": 155
}


function Diet_Plan() {


    const [foodName, setFoodName] = useState("");
    const [amount, setAmount] = useState("");
    const [unit, setUnit] = useState("gram");
    const [count, setCount] = useState({});
    const [addfood, setAddfood] = useState(false);
    const [mealType, setMealType] = useState(true);
    const [meal, setmeal] = useState({
        breakfast: [],
        lunch: [],
        snack: [],
        dinner: [],
    });

    useEffect(() => {
        const savedCount = JSON.parse(localStorage.getItem("count")) || {};
        setCount(savedCount);
    }, []);

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count]);


   const add = (type, index) => {
  setCount(prev => ({
    ...prev,
    [type]: {
      ...prev[type],
      [index]: (prev[type]?.[index] || 1) + 1,
    }
  }));
};

const remove = (type, index) => {
  setCount(prev => ({
    ...prev,
    [type]: {
      ...prev[type],
      [index]: prev[type]?.[index] > 1 ? prev[type][index] - 1 : 1,
    }
  }));
};




    useEffect(() => {
        const loadedMeals = {
            breakfast: JSON.parse(localStorage.getItem("breakfast")) || [],
            lunch: JSON.parse(localStorage.getItem("lunch")) || [],
            snack: JSON.parse(localStorage.getItem("snack")) || [],
            dinner: JSON.parse(localStorage.getItem("dinner")) || [],
        };
        setmeal(loadedMeals);
    }, []);
    useEffect(() => {
        Object.entries(meal).forEach(([key, value]) => {
            localStorage.setItem(key, JSON.stringify(value));
        });
    }, [meal]);


    const Item = async() => {
        const input = foodName;
        const formatted = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
        // try{
        //       const n = await fetch("http://localhost:3000/",{method:"POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({ formatted }),})
        // const res = await n.text()
        // console.log(formatted, res);
        // }catch{
        //     console.log("err")
        // }
      


        const newfood = {
            name: foodName,
            Amount: amount,
            Unit: unit,
            calroies: data[formatted],
        }
        setAddfood("")
        setFoodName("")
        setAmount("")
        setCount("")
        setUnit("")
        setAddfood(false)
        setmeal(prev => ({
            ...prev,
            [mealType]: [...prev[mealType], newfood]
        }));

    };

    const canlce = () => {
        setAddfood(false)
    }



    const Mealcard = ({ title, icon, type }) => (
        <div className='w-[20rem] h-[90%]  border rounded-xl border-yellow-300 relative flex flex-col justify-center items-center '>
            <div className='flex mt-5 ml-3'>
                <i className={`fa-solid ${icon} text-5xl text-gray-800 mt-5`}></i>
                <div className='mt-4 ml-2'>
                    <h1 className='text-3xl font-bold text-gray-800'>{title}</h1>
                    <div className='flex gap-2'>
                        <i className="fa-solid fa-bullseye mt-1.5"></i>
                        <p className='text-xl text-gray-500'>320 cal</p>
                    </div>
                </div>
            </div>
            <div className='w-[90%] border'></div>

            <div className='w-[90%] h-[80%] mt-2 ml-3 flex flex-col gap-5 p-1 overflow-y-auto scrollbar-hide' id='item'>
                {meal[type].map((product, index) => (
                    <div key={index} className='w-full h-[6.5rem] rounded-xl flex flex-col items-center bg-gray-100'>
                        <div className='w-[100%] flex justify-between'>
                            <div className='ml-3'>
                                <h1 className='text-2xl font-semibold'>{product.name || "egg"}</h1>
                                <h2 className='text-lg text-gray-500'>{product.Amount * (count[type]?.[index] || 1)} {product.Unit}</h2>
                            </div>
                            <div className='mr-3'>
                                <h1 className='text-xl mt-2'>{product.calroies * (count[type]?.[index] || 1)} <span className='text-gray-500'>cal</span></h1>
                            </div>
                        </div>
                        <div className='w-[95%] border'></div>
                        <div className='w-[100%] h-[8rem]  flex justify-between items-center'>

                            <div key={index} className='flex gap-2 ml-3'>
                                <i className="fa-solid fa-minus  p-1.5 rounded-full bg-red-200 text-red-600 cursor-pointer" onClick={() => remove(type, index)}></i>
                                <h3>{count[type]?.[index] || 1}x</h3>
                                <i className="fa-solid fa-plus  p-1.5 rounded-full bg-green-200 text-green-600 cursor-pointer" onClick={() => add(type, index)}></i>
                            </div>
                            <div className='mr-3'>
                                <h1 className='text-xl mt-2'>{product.calroies} <span className='text-gray-500'>cal</span></h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className='border w-[3rem] h-[3rem] p-1 text-4xl text-center rounded-[100%] absolute bottom-2 right-2 bg-black text-white shadow-xl' onClick={() => { setMealType(type); setAddfood(true); }}>
                <i className="fa-solid fa-plus transform transition-transform duration-300 hover:rotate-180"></i></button>
        </div>
    )

    return (
        <>
            <div className='h-[40rem] border flex justify-evenly items-center relative'>

                {addfood && <div className="p-4 bg-gray-200 shadow-md rounded-lg w-[300px] space-y-4 absolute z-10">
                    <h2 className="text-xl font-semibold text-gray-700">Add Food to <span className="capitalize">{mealType}</span></h2>

                    {/* Food Name Input */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm text-gray-600">Food Name</label>
                        <input
                            type="text"
                            placeholder="e.g. Oats"
                            value={foodName}
                            onChange={(e) => setFoodName(e.target.value)}
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Amount + Unit Side-by-Side */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm text-gray-600">Amount</label>
                        <div className="flex space-x-2">
                            <input
                                type="number"
                                placeholder="e.g. 100"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="border rounded-lg px-3 py-2 w-[60%] focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <select
                                value={unit}
                                onChange={(e) => setUnit(e.target.value)}
                                className="border rounded-lg px-3 py-2 w-[40%] focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="gram">Gram</option>
                                <option value="ml">ML</option>
                                <option value="piece">Piece</option>
                            </select>
                        </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" onClick={Item}>
                        Add Food
                    </button>
                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" onClick={canlce}>
                        Cancle
                    </button>
                </div>}

                <Mealcard title="Breakfast" icon="fa-mug-hot" type="breakfast" />
                <Mealcard title="Lunch" icon="fa-utensils" type="lunch" />
                <Mealcard title="Snacks" icon="fa-cookie-bite" type="snack" />
                <Mealcard title="Dinner" icon="fa-bowl-rice" type="dinner" />

            </div>
        </>
    );
}

export default Diet_Plan;
