const fitnessQuestions = [
    {
        "questionId": "goal",
        "question": "What’s your primary fitness goal?",
        "type": "single",
        "options": [
            {
                "id": "build-muscle",
                "icon": "fa-solid fa-dumbbell",
                "title": "Build Muscle",
                "description": "Targeted training to build size, strength, and definition."
            },
            {
                "id": "lose-fat",
                "icon": "fa-solid fa-fire-flame-curved",
                "title": "Lose Fat",
                "description": "Burn calories and shed excess fat through focused routines."
            },
            {
                "id": "increase-strength",
                "icon": "fa-solid fa-weight-hanging",
                "title": "Increase Strength",
                "description": "Lift heavier and boost your power with strength programs."
            },
            {
                "id": "improve-endurance",
                "icon": "fa-solid fa-heart-pulse",
                "title": "Improve Endurance",
                "description": "Enhance stamina with cardio-focused training plans."
            },
            {
                "id": "stay-active",
                "icon": "fa-solid fa-person-walking",
                "title": "Stay Active",
                "description": "Stay consistent and healthy with light, daily movement."
            }
        ]
    },
    {
        "questionId": "fitness-level",
        "question": "What is your current fitness level?",
        "type": "single",
        "options": [
            {
                "id": "beginner",
                "icon": "fa-solid fa-seedling",
                "title": "Beginner (0–3 months)",
                "description": "New to fitness or returning after a long break."
            },
            {
                "id": "intermediate",
                "icon": "fa-solid fa-person-running",
                "title": "Intermediate (3–12 months)",
                "description": "Some experience and looking to level up."
            },
            {
                "id": "advanced",
                "icon": "fa-solid fa-star",
                "title": "Advanced (1+ year)",
                "description": "Experienced and ready for serious gains."
            }
        ]
    },
    {
        "questionId": "days-per-week",
        "question": "How many days can you train per week?",
        "type": "single",
        "options": [
            {
                "id": "1-2-days",
                "icon": "fa-solid fa-calendar-day",
                "title": "1–2 Days",
                "description": "Limited schedule, quick but efficient workouts."
            },
            {
                "id": "3-4-days",
                "icon": "fa-solid fa-calendar-check",
                "title": "3–4 Days",
                "description": "Balanced routine with rest and activity."
            },
            {
                "id": "5-6-days",
                "icon": "fa-solid fa-calendar-week",
                "title": "5–6 Days",
                "description": "High commitment to fitness progression."
            },
            {
                "id": "every-day",
                "icon": "fa-solid fa-calendar-plus",
                "title": "Every Day",
                "description": "Daily dedication to training and improvement."
            }
        ]
    },
    {
        "questionId": "workout-type",
        "question": "What type of workouts do you enjoy?",
        "type": "multi",
        "options": [
            {
                "id": "weight-lifting",
                "icon": "fa-solid fa-dumbbell",
                "title": "Weight Lifting",
                "description": "Build muscle and strength using resistance."
            },
            {
                "id": "cardio",
                "icon": "fa-solid fa-person-biking",
                "title": "Cardio (running, cycling)",
                "description": "Improve endurance and burn calories."
            },
            {
                "id": "hiit",
                "icon": "fa-solid fa-bolt",
                "title": "HIIT",
                "description": "High-intensity intervals for fat loss & conditioning."
            },
            {
                "id": "yoga",
                "icon": "fa-solid fa-person-praying",
                "title": "Yoga / Stretching",
                "description": "Flexibility, mobility, and recovery."
            },
            {
                "id": "sports-training",
                "icon": "fa-solid fa-futbol",
                "title": "Sports / Functional Training",
                "description": "Agility, coordination, and sport performance."
            }
        ]
    },
    {
        "questionId": "time-available",
        "question": "How much time can you spend per session?",
        "type": "single",
        "options": [
            {
                "id": "15-20-mins",
                "icon": "fa-regular fa-clock",
                "title": "15–20 mins",
                "description": "Quick and focused sessions."
            },
            {
                "id": "30-45-mins",
                "icon": "fa-regular fa-clock",
                "title": "30–45 mins",
                "description": "Moderate time for balanced routines."
            },
            {
                "id": "60-mins-plus",
                "icon": "fa-regular fa-clock",
                "title": "60+ mins",
                "description": "Extended training with full variety."
            }
        ]
    }
];

export const setquestion = ()=>{
    localStorage.setItem("qusetion",JSON.stringify(fitnessQuestions))
}  
export const getquestion = ()=>{
    const qse = JSON.parse(localStorage.getItem("qusetion"))
    return(qse)
}  
