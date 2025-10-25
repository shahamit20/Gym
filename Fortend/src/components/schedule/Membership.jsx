import React from 'react'


const gymPlans = [
  {
    name: "1 Month Plan",
    price: "₹799",
    period: "/month",
    features: [
      "Unlimited Gym Access",
      "Free Fitness Assessment",
      "Locker Facility",
      "1 PT Session",
      "Standard Support"
    ],
    buttonText: "Buy 1 Month"
  },
  {
    name: "6 Month Plan",
    price: "₹3999",
    period: "/6 months",
    features: [
      "Unlimited Gym+Classes",
      "Nutrition Guidance",
      "Weekly Progress Tracking",
      "3 PT Sessions",
      "Priority Support"
    ],
    buttonText: "Buy 6 Months"
  },
  {
    name: "1 Year Plan",
    price: "₹7499",
    period: "/year",
    features: [
      "Unlimited Everything",
      "Personal Training (6 sessions)",
      "Free Merchandise",
      "Family Guest Pass",
      "24x7 Premium Support"
    ],
    buttonText: "Buy 1 Year"
  }
];

function Membership() {

  return (
    <>
     <div className='w-full p-2'>
  <div className='w-full'>
    <img
      className='w-full h-[28rem] object-cover bg-black'
      src="https://images.unsplash.com/photo-1654703680091-010855f522e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltJTIwaW1hZ2V8ZW58MHwwfDB8fHw%3D"
      alt="gym"
    />
  </div>

   <div className=" min-h-screen flex flex-col items-center p-8 relative top-[-12rem]">
      <h2 className="text-3xl font-bold text-white mb-4">Gym Membership Plans</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {gymPlans.map(plan => (
          <div
            key={plan.name}
            className="bg-gray-900 text-white rounded-xl w-80 p-8 shadow-lg flex flex-col justify-between border border-gray-800"
          >
            <h3 className="text-xl font-bold mb-2 text-center">{plan.name}</h3>
            <div className="text-center mb-4">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-gray-300 text-base ml-1">{plan.period}</span>
            </div>
            <ul className="mb-8 space-y-2">
              {plan.features.map(feature => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-400"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="bg-yellow-400 text-black rounded-full py-2 mt-auto font-semibold hover:bg-yellow-300 transition">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
</div>

    </>
  )
}

export default Membership