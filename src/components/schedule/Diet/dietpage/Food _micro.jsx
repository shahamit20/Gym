import React, { use, useEffect, useState } from 'react'


const high_protein = [
    {
        "name": "Paneer",
        "protein": "18g",
        "image": "https://media.istockphoto.com/id/147039602/photo/cheese.jpg?s=612x612&w=0&k=20&c=wV8wF_hWBQQYdyA8lEQykk87AmXMAifGBPAEOv-Wmho="
    },
    {
        "name": "Tofu",
        "protein": "8g",
        "image": "https://media.istockphoto.com/id/1269284344/photo/stir-fried-tofu-and-vegetable-garnished-with-thai-basil-directly-above-horizontal-photo.jpg?s=612x612&w=0&k=20&c=6ak4J56NW4Tw6gHWj-fFBOcHJMYM5M9JBlxU3o5Wyn8="
    },
    {
        "name": "Lentils",
        "protein": "9g",
        "image": "https://media.istockphoto.com/id/1096403450/photo/mixed-raw-dried-indian-legumes-in-wooden-bowls-on-rustic-background.jpg?s=612x612&w=0&k=20&c=fKnY-CaSB2QVLmjcEdsp3H--BbruxAMuUxu0DeIGBO8="
    },
    {
        "name": "Chickpeas",
        "protein": "19g",
        "image": "https://media.istockphoto.com/id/1160233746/photo/vegan-food-bowl-of-chick-peas-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=usztkKeKCOKQB_2IWcurTlJZjjLfT3jz3cw7BkMTJvA="
    },
    {
        "name": "Kidney Beans",
        "protein": "24g",
        "image": "https://media.istockphoto.com/id/646869882/photo/kidney-beans-in-a-bowl.jpg?s=612x612&w=0&k=20&c=5GDYZ-_1SxFWdgYgjSe-FgO4N6tfmCDK4J3U9yyx-us="
    },
    {
        "name": "Green Peas",
        "protein": "5g",
        "image": "https://media.istockphoto.com/id/1335838543/photo/fresh-green-peas-on-plate.jpg?s=612x612&w=0&k=20&c=heypJs7n13uRrUvlWvoSBMcYN2socbxy9GlQA9vi8Qo="
    },
    {
        "name": "Soybeans",
        "protein": "36g",
        "image": "https://media.istockphoto.com/id/1250208921/photo/soya-chunks.jpg?s=612x612&w=0&k=20&c=pOvZo8z3NP8KARh361CoVumMxWXzJCezUvjwVRqDMO4="
    },
    {
        "name": "Quinoa",
        "protein": "14g",
        "image": "https://media.istockphoto.com/id/857099258/photo/quinoa-salad.jpg?s=612x612&w=0&k=20&c=6u5KzTrMWLP2itLOpxjZKlR7uovlH2NwOXWMx8OZ9qc="
    },
    {
        "name": "Pumpkin Seeds",
        "protein": "30g",
        "image": "https://media.istockphoto.com/id/2063763551/photo/mixture-of-roasted-sunflower-and-pumpkin-seeds-in-a-wooden-bowl.jpg?s=612x612&w=0&k=20&c=OO1huifB6gAHBzodqjFahSr1iTYxjt3ylgcuhiLFcNQ="
    },
    {
        "name": "Almonds",
        "protein": "21g",
        "image": "https://media.istockphoto.com/id/1153088551/photo/almond-backgrounds-nut-food-textured-harvesting.jpg?s=612x612&w=0&k=20&c=VAU9zHx15bpgLzLt-uaeAfsySP1lnFeb7LGybYESaXA="
    }
]
const high_protein_nonveg = [
    {
        name: "Chicken Breast",
        protein: "31g",
        image: "https://media.istockphoto.com/id/136284849/photo/raw-chicken-brests-on-cutting-board.jpg?s=612x612&w=0&k=20&c=_1F6Rp8vuZxONdWoh1kpKGOoUj4VWhVQ9SXgkt8eRyI="
    },
    {
        name: "Eggs",
        protein: "13g",
        image: "https://media.istockphoto.com/id/1225497647/photo/eggs-white-eggs-on-isolated-background.jpg?s=612x612&w=0&k=20&c=StCOeKg_oY32SXj967hCmz_POf4q7SRst6bmlZtXk5U="
    },
    {
        name: "Salmon Fish",
        protein: "25g",
        image: "https://media.istockphoto.com/id/1207107546/photo/salmon-raw-trout-red-fish-steak-with-ingredients-for-cooking-cooking-salmon-sea-food-healthy.jpg?s=612x612&w=0&k=20&c=j4e3BLT_xU5g31K2S4yHoEgX5BRaxXkGRbf2_FR5Euw="
    },
    {
        name: "Tuna",
        protein: "29g",
        image: "https://media.istockphoto.com/id/645670842/photo/tuna-sashimi-raw-fish-in-traditional-japanese-style.jpg?s=612x612&w=0&k=20&c=Z2POmTcl0ehMwr3wBsCO8As5JJs2O06B5t7OTfiowPk="
    },
    {
        name: "Turkey Breast",
        protein: "29g",
        image: "https://media.istockphoto.com/id/184874640/photo/roasted-turkey.jpg?s=612x612&w=0&k=20&c=YM_2Qil-fueyMaci7nQn31pV3zaffROwNcexCFMlHi4="
    },
    {
        name: "Prawns",
        protein: "24g",
        image: "https://media.istockphoto.com/id/1003411832/photo/creamy-shrimp-curry.jpg?s=612x612&w=0&k=20&c=ddGesjoq0GAQ8vZk0flPFZfAEIV7_V7Fgwx24EBH0rA="
    },
    {
        name: "Duck Eggs (Available in parts of Kerala & NE)",
        protein: "14g",
        image: "https://media.istockphoto.com/id/2148782305/photo/raw-duck-egg-on-a-blurred-background.jpg?s=612x612&w=0&k=20&c=ds4jyUzT31H4jL3zntXxCVZdH5-PSlKC1NdHdlRlyXk="
    },
    {
        name: "Mutton",
        protein: "25g",
        image: "https://media.istockphoto.com/id/1405091134/photo/mutton-rogan-josh-mutten-qorma-mutten-curry-mutton-karahi-in-a-dish-isolated-on-napkin-side.jpg?s=612x612&w=0&k=20&c=BOIHGqj4dQ6Whui46kXHY_uiFcLLocNON-Z18pr1pqY="
    },
    {
        name: "Sardines",
        protein: "25g",
        image: "https://media.istockphoto.com/id/1387720813/photo/raw-salmon-steak-with-canned-sardine.jpg?s=612x612&w=0&k=20&c=-p8P1d3JTpxZ0W5IZPgOq9uDMwE6cPyU6fxF1bkT6jA="
    },
    {
        name: "Crab",
        protein: "20g",
        image: "https://media.istockphoto.com/id/1067113342/photo/healthy-products-sources-of-carbohydrates.jpg?s=612x612&w=0&k=20&c=cKizWISABDRCI3D_T2xEpq_z1q0nrJYXscOffdmiV8I="
    }
];

function Food_micro() {

    const [type, setType] = useState('veg');
    const [foodtype, setFoodtype] = useState([]);

    useEffect(() => {
        if (type === 'veg') {
            setFoodtype(high_protein);
        } else {
            setFoodtype(high_protein_nonveg); // You can later add non-veg data here
        }
    }, [type]);




    return (
        <>
            <div className='w-full pb-3  flex justify-center items-center mt-[8rem] flex-col'>
                <div className='w-[95%] h-[95%]  p-2 '>
                    <h1 className='text-center text-5xl font-bold' style={{ textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>Food Micro Intake</h1>
                    <p className='text-2xl mt-10'>When we talk about fitness, most people focus only on protein, carbs, and fats but your body also needs micronutrients like vitamins and minerals to stay truly healthy. These tiny nutrients might not give you calories, but they support your energy, immunity, recovery, and overall performance. Without enough of them, your progress can slow down, even if your workouts are perfect. This section helps you learn which everyday foods give you the vitamins and minerals your body needs so you feel better, recover faster, and get stronger from the inside out.</p>
                </div>
                <div className='w-[95%] h-[30rem]  flex'>
                    <div className='w-[50%] h-full  relative overflow-hidden'>
                        <div className='absolute right-2 top-[30%]  '>
                            <h1 className='text-5xl font-bold drop-shadow-md tracking-wide'>Calories</h1>
                            <div className='flex flex-col gap-4 mt-5 items-end'>
                                <h2 className='text-xl font-semibold opacity-90 text-green-600'>325 cal</h2>
                                <h2 className='text-xl font-semibold opacity-90 text-yellow-600'>155 cabs</h2>
                                <h2 className='text-xl font-semibold opacity-90 text-red-600'>32g protien</h2>
                            </div>
                        </div>
                    </div>

                    <div className='w-[50%] h-full  relative overflow-hidden'>
                        <img className='w-[61%] absolute -left-[10em] top-[7.5%]  -rotate-90' src="https://img.freepik.com/premium-photo/stir-fried-chicken-with-yanagi-mushroom_71919-1036.jpg?ga=GA1.1.2015007442.1735978336&semt=ais_hybrid&w=740" alt="" />
                    </div>

                </div>

                <div className='w-[95%] p-2 mt-[2rem] border rounded-xl border-b-2 shadow-lg '>
                    <div className='flex justify-between'>
                        <h2 className='text-[1.8rem] font-semibold '>Top 10 High Protien Foods</h2>
                        <select
                            value={type}
                            onChange={(e) => { setType(e.target.value) }}
                            className="bg-gradient-to-r from-green-400 to-green-600 text-gray-800 text-lg font-medium p-2 rounded-md shadow-md outline-none hover:from-green-500 hover:to-green-700 transition duration-200"
                            id=""
                        >
                            <option value="veg">Veg</option>
                            <option value="Non-veg">Non-Veg</option>
                        </select>
                    </div>

                    <div className='p-1 mt-4 flex flex-row flex-shrink-0 gap-5 overflow-x-auto overflow-y-hidden'>
                        {foodtype.map((item, index) => (
                            <div key={index} className="flex flex-col flex-shrink-0 justify-center items-center p-4 rounded-2xl shadow-lg bg-white hover:scale-105 transition-transform duration-300 ease-in-out w-60">
                                <img
                                    className="w-[8rem] h-48 object-cover rounded-xl"
                                    src={item.image}
                                    alt={item.name}
                                />
                                <h2 className="text-xl font-semibold mt-4 text-gray-800">{item.name}</h2>
                                <h4 className="text-md text-gray-600">{item.protein} / 100g</h4>
                            </div>

                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Food_micro