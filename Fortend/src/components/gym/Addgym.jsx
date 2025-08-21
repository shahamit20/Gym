import React, { useRef, useState } from 'react'

function Addgym({ setOncolse }) {
    const [step, setStep] = useState(1);
    const [image, setImage] = useState();
    const [shopLicenseName, setShopLicenseName] = useState("");
    const [healthCertName, setHealthCertName] = useState("");

    const fileInputRef = useRef(null);
    const [form, setForm] = useState({
        gymName: "",
        gymowner: "",
        mail: "",
        gender: "",
        country: "",
        Address: "",
        aadhar: "",
        contact: "",
        shoplicense: null,
        healthcert: null,
        cost: "",
        logo: null,
        features: [],
        desc: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, files, type } = e.target;

        if (type === "file") {
            setForm((prevForm) => ({
                ...prevForm,
                [name]: files[0],
            }));
        } else {
            setForm((prevForm) => ({
                ...prevForm,
                [name]: value,
            }));
        }
    };

    const [featureInput, setFeatureInput] = useState("");

    const addFeature = () => {
        if (featureInput.trim() !== "" && !form.features.includes(featureInput.trim())) {
            setForm(prev => ({
                ...prev,
                features: [...prev.features, featureInput.trim()],
            }));
            setFeatureInput("");
        }
    };

    const removeFeature = (index) => {
        setForm(prev => ({
            ...prev,
            features: prev.features.filter((_, i) => i !== index),
        }));
    };
    const validateForm = () => {
        const newErrors = {};

        if (!form.gymName.trim()) newErrors.gymName = "Gym name is required";
        if (!form.gymowner.trim()) newErrors.gymowner = "Owner name is required";
        if (!form.mail.trim()) newErrors.mail = "Email is required";
        if (!form.gender) newErrors.gender = "Please select gender";
        if (!form.country.trim()) newErrors.country = "Country is required"; // 🛠️ fixed key from "contact"
        if (!form.Address.trim()) newErrors.Address = "Address is required";
        if (!form.aadhar.trim()) newErrors.aadhar = "Aadhar number is required";
        if (!form.contact.trim()) newErrors.contact = "Contact number is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const document = () => {
        const newErrors = {};

        if (!form.shoplicense) newErrors.shoplicense = "Shop license is required";
        if (!form.healthcert) newErrors.healthcert = "Healthcert is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form)
        console.log("features", form.features)
        const newErrors = {};

        if (!form.logo) {
            newErrors.logo = "Gym Logo is required";
        }

        if (!form.features || form.features.length === 0) {
            newErrors.features = "At least one feature is required";
        }

        if (!form.cost || form.cost.trim() === "") {
            newErrors.cost = "Price is required";
        }

        if (!form.desc || form.desc.trim() === "") {
            newErrors.desc = "Description is required";
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        alert("✅ Gym added successfully!");



        const formData = new FormData();
        formData.append('gymName', form.gymName);
        formData.append('gymowner', form.gymowner);
        formData.append('mail', form.mail);
        formData.append('gender', form.gender);
        formData.append('country', form.country);
        formData.append('Address', form.Address);
        formData.append('aadhar', form.aadhar);
        formData.append('contact', form.contact);
        formData.append('cost', form.cost);
        formData.append('desc', form.desc);

        // Append features as array
        form.features.map(feature => formData.append('features[]', feature));

        // Append files
        formData.append('shoplicense', form.shoplicense);
        formData.append('healthcert', form.healthcert);
        formData.append('logo', form.logo);

        try {
            const response = await fetch('http://localhost:3000/gym/addgym', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            console.log("✅ Backend Response:", data);
        } catch (error) {
            console.error("❌ Error in POST request:", error);
        }

        setForm({
            gymName: "",
            gymowner: "",
            mail: "",
            gender: "",
            Address: "",
            aadhar: "",
            contact: "",
            price: "",
        });
        setErrors({});
        setOncolse(false)
    };

    return (
        <>
            <div className=' backdrop-blur-lg w-[70%] h-[35rem] bg-white/90 rounded-2xl p-4 flex justify-center shadow-2xl absolute top-[5rem] z-40'>
                <div className='w-1/2 h-full  rounded-tr-xl rounded-br-xl'>
                    <img
                        src="https://images.unsplash.com/photo-1674834727206-4bc272bfd8da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGd5bXxlbnwwfDF8MHx8fDA%3D"
                        alt="Gym"
                        className="w-full h-full object-cover rounded-tr-xl rounded-br-xl"
                    />
                </div>
                <form
                    id='gymform'
                    className="w-1/2 p-6  backdrop-blur-md overflow-auto  space-y-6 animate-fadeIn relative"
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (validateForm()) {
                            if (step === 1) {
                                setStep(2); // Move to second form
                            } else if (step === 2) {
                                if (document()) {
                                    setStep(3); // Or final submit
                                }
                            } else if (step === 3) {
                                handleSubmit(e); // Final step
                            }
                        }
                    }}
                >

                    <i
                        className="fa-solid fa-x absolute right-5 cursor-pointer text-gray-500 hover:text-red-600 transition"
                        onClick={() => setOncolse(false)}
                    ></i>
                    <h2 className="text-3xl font-extrabold text-center text-gray-800">Register Your Gym</h2>

                    {step === 1 ? (<div>
                        <div className="mb-4 w-full">
                            <label htmlFor="gymName" className="block text-sm font-semibold text-gray-700 mb-1">
                                Gym Name<span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                id="gymName"
                                name="gymName"
                                type="text"
                                value={form.gymName}
                                onChange={handleChange}
                                placeholder="Gym Name"

                                className="w-full max-w-md h-[2.5rem] px-4 border border-gray-300 bg-gray-100 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.gymName && (
                                <p className="text-red-500 text-sm mt-1">{errors.gymName}</p>
                            )}

                        </div>
                        <div className="mb-4 w-full">
                            <label htmlFor="gymName" className="block text-sm font-semibold text-gray-700 mb-1">
                                Gym Owner<span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                id="gymowner"
                                name="gymowner"
                                type="text"
                                value={form.gymowner}
                                onChange={handleChange}
                                placeholder="Gym Owner"
                                className="w-full max-w-md h-[2.5rem] px-4 border border-gray-300 bg-gray-100 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.gymowner && (
                                <p className="text-red-500 text-sm mt-1">{errors.gymowner}</p>
                            )}
                        </div>
                        <div className="mb-4 w-full">
                            <label htmlFor="gymName" className="block text-sm font-semibold text-gray-700 mb-1">
                                G-mail<span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                id="mail"
                                name="mail"
                                type="text"
                                value={form.mail}
                                onChange={handleChange}
                                placeholder="abc@gmail.com"

                                className="w-full max-w-md h-[2.5rem] px-4 border border-gray-300 bg-gray-100 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.mail && (
                                <p className="text-red-500 text-sm mt-1">{errors.mail}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Gender <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center space-x-6">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={"male"}
                                        checked={form.gender === "male"}
                                        onChange={handleChange}
                                        className="form-radio h-4 w-4 text-blue-600"
                                    />
                                    <span className="ml-2 text-gray-700">Male</span>
                                </label>

                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={"female"}
                                        checked={form.gender === "female"}
                                        onChange={handleChange}
                                        className="form-radio h-4 w-4 text-pink-600"
                                    />
                                    <span className="ml-2 text-gray-700">Female</span>
                                </label>

                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={"other"}
                                        checked={form.gender === "other"}
                                        onClick={handleChange}
                                        className="form-radio h-4 w-4 text-gray-600"
                                    />
                                    <span className="ml-2 text-gray-700">Other</span>
                                </label>
                            </div>
                            {errors.gender && (
                                <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
                            )}
                        </div>


                        <div className="mb-4 w-full">
                            <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-1">
                                Country<span className="text-red-500 ml-1">*</span>
                            </label>
                            <select
                                id="country"
                                name="country"
                                value={form.country}
                                onChange={handleChange}
                                className="w-full max-w-md h-[2.5rem] px-4 border border-gray-300 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">-- Select Country --</option>
                                <option value="India">India</option>
                                <option value="United States">United States</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="Canada">Canada</option>
                                <option value="Australia">Australia</option>
                                <option value="Germany">Germany</option>
                                <option value="France">France</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="mb-4 w-full">
                            <label htmlFor="gymName" className="block text-sm font-semibold text-gray-700 mb-1">
                                Address<span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                id="address"
                                name="Address"
                                type="text"
                                value={form.Address}
                                onChange={handleChange}
                                placeholder="House No, Road Name, Area, City"
                                className="w-full max-w-md h-[2.5rem] px-4 border border-gray-300 bg-gray-100 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.Address && (
                                <p className="text-red-500 text-sm mt-1">{errors.Address}</p>
                            )}
                        </div>
                        <div className="mb-4 w-full">
                            <label htmlFor="gymName" className="block text-sm font-semibold text-gray-700 mb-1">
                                Aadhar Card Number<span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                id="aadhar"
                                name="aadhar"
                                type="number"
                                value={form.aadhar}
                                onChange={handleChange}
                                placeholder="000 000 000 000"
                                className="input w-full max-w-md h-[2.5rem] px-4 border border-gray-300 bg-gray-100 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.aadhar && (
                                <p className="text-red-500 text-sm mt-1">{errors.aadhar}</p>
                            )}
                        </div>
                        <div className="mb-4 w-full">
                            <label htmlFor="gymName" className="block text-sm font-semibold text-gray-700 mb-1">
                                Contact Number<span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                id="contact"
                                name="contact"
                                type="number"
                                value={form.contact}
                                onChange={handleChange}
                                placeholder="+91 1234567890"
                                className="input w-full max-w-md h-[2.5rem] px-4 border border-gray-300 bg-gray-100 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.contact && (
                                <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
                            )}
                        </div>

                    </div>) : step === 2 ? (
                        <>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Shop & Establishment License <span className="text-red-500 ml-1">*</span>
                                </label>

                                <label className="flex items-center gap-3 px-4 py-2 bg-blue-50 border border-blue-300 rounded-md cursor-pointer hover:bg-blue-100 transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M16 10l-4-4m0 0L8 10m4-4v12" />
                                    </svg>
                                    <span className="text-sm text-blue-700">
                                        {shopLicenseName ? `Uploaded: ${shopLicenseName}` : "Choose PDF / DOC file"}
                                    </span>
                                    <input
                                        type="file"
                                        name="shoplicense"
                                        key={step}
                                        accept=".pdf,.doc,.docx"
                                        onChange={(e) => {
                                            handleChange(e);
                                            const file = e.target.files[0];
                                            if (file) {
                                                setShopLicenseName(file.name);
                                            }
                                        }}
                                        className="hidden"
                                    />
                                </label>

                                {errors.shoplicense && (
                                    <p className="text-red-500 text-sm mt-1">{errors.shoplicense}</p>
                                )}
                            </div>


                            <div className="mb-4 w-full">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Health & Safety Certificate <span className="text-red-500 ml-1">*</span>
                                </label>

                                <label className="flex items-center gap-3 px-4 py-2 bg-green-50 border border-green-300 rounded-md cursor-pointer hover:bg-green-100 transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M16 10l-4-4m0 0L8 10m4-4v12" />
                                    </svg>
                                    <span className="text-sm text-green-700">
                                        {healthCertName ? `Uploaded: ${healthCertName}` : "Choose PDF / DOCX file"}
                                    </span>
                                    <input
                                        type="file"
                                        name="healthcert"
                                        key={step}
                                        accept=".pdf,.docx"
                                        onChange={(e) => {
                                            handleChange(e);
                                            const file = e.target.files[0];
                                            if (file) {
                                                setHealthCertName(file.name);
                                            }
                                        }}
                                        className="hidden"
                                    />
                                </label>

                                {errors.healthcert && (
                                    <p className="text-red-500 text-sm mt-1">{errors.healthcert}</p>
                                )}
                            </div>

                        </>
                    ) : (
                        <>
                            <div className="flex flex-col items-center gap-4 mb-6">
                                {/* Circle Preview */}
                                <div className="relative group w-32 h-32 rounded-full border-4 border-dashed border-blue-400 overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    {image ? (
                                        <img
                                            src={image}
                                            alt="Uploaded Logo"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-gray-400 text-sm px-2 text-center">
                                            Preview Logo
                                        </div>
                                    )}

                                </div>
                                {/* Upload Input */}
                                <label className="cursor-pointer px-6 py-2 bg-blue-600 text-white rounded-full text-sm shadow-md hover:bg-blue-700 transition duration-200 ease-in-out">
                                    Upload Gym Logo
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        // key={step}
                                        ref={fileInputRef}
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                const imageUrl = URL.createObjectURL(file);
                                                setImage(imageUrl);

                                                // ✅ Save file in form.logo
                                                setForm((prev) => ({
                                                    ...prev,
                                                    logo: file,
                                                }));

                                                // ✅ Clear error if file is valid
                                                setErrors((prev) => ({
                                                    ...prev,
                                                    logo: "",
                                                }));
                                            }
                                        }}
                                    />

                                </label>
                                {errors.logo && (
                                    <p className="text-red-500 text-sm mt-1">{errors.logo}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Features</label>

                                {/* Chips display */}
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {form.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                                        >
                                            <span>{feature}</span>
                                            <button
                                                type="button"
                                                onClick={() => removeFeature(index)}
                                                className="ml-2 text-blue-500 hover:text-red-500"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Input box */}
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={featureInput}
                                        onChange={(e) => setFeatureInput(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" && featureInput.trim() !== "") {
                                                e.preventDefault();
                                                addFeature();
                                            }
                                        }}
                                        placeholder="Type a feature and press Enter"
                                        className="flex-1 h-[2.5rem] px-4 border border-gray-300 bg-gray-100 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={addFeature}
                                        className="bg-blue-500 text-white px-4 rounded-md text-sm hover:bg-blue-600"
                                    >
                                        Add
                                    </button>
                                </div>

                                {errors.features && (
                                    <p className="text-red-500 text-sm mt-1">{errors.features}</p>
                                )}
                            </div>

                            {/* Price Input */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Price (₹)
                                </label>
                                <input
                                    type="number"
                                    name="cost"
                                    value={form.cost}
                                    onChange={handleChange}
                                    placeholder="Enter price"
                                    className="w-full max-w-md h-[2.5rem] px-4 border border-gray-300 bg-gray-100 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.cost && (
                                    <p className="text-red-500 text-sm mt-1">{errors.cost}</p>
                                )}
                            </div>

                            {/* Description Input */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Description
                                </label>
                                <textarea
                                    name="desc"
                                    value={form.desc}
                                    onChange={handleChange}
                                    placeholder="Write a short description about the gym plan..."
                                    rows={4}
                                    className="w-full max-w-md px-4 py-2 border border-gray-300 bg-gray-100 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.desc && (
                                    <p className="text-red-500 text-sm mt-1">{errors.desc}</p>
                                )}
                            </div>



                        </>
                    )}
                    <div className='flex justify-evenly gap-2'>


                        {step != 1 && <button
                            type="button"
                            className="w-full bg-gradient-to-r from-gray-600 to-gray-600 text-white py-2 rounded-lg font-bold hover:scale-[1.02] transition-transform shadow-md"
                            onClick={() => setStep(prev => (prev > 1 ? prev - 1 : 1))} // prevent step from going below 1
                        >
                            Back
                        </button>
                        }

                        {step === 3 ? (<button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg font-bold hover:scale-[1.02] transition-transform shadow-md"
                        >
                            Submit Form
                        </button>) : (
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg font-bold hover:scale-[1.02] transition-transform shadow-md"
                            >
                                Next
                            </button>
                        )}
                    </div>

                </form>

            </div>

        </>
    )
}

export default Addgym