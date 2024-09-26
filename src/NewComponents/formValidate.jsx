import React, { useState } from 'react';

export default function FormValidate() {
    const [FormData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
        dob: '',
        gender: '',
        interest: [],

    })
    const [errors, setErrors] = useState({});
    const validation = () => {
        const newError = {};
        if (!FormData.name) {
            newError.name = 'Name is required';
        }
        if (!FormData.email) {
            newError.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(FormData.email)) {
            newError.email = 'Invalid email format';
        }
        if (!FormData.password) {
            newError.password = 'Password is required';
        } else if (FormData.password.length < 8) {
            newError.password = 'Password must be at least 8 characters long';
        }
        if (!FormData.confirmpassword) {
            newError.confirmpassword = 'Confirm Password is required';
        } else if (FormData.password !== FormData.confirmpassword) {
            newError.confirmpassword = 'Passwords do not match';
        }
        if (!FormData.dob) {
            newError.dob = 'Date of Birth is required';
        }
        if (!FormData.gender) {
            newError.gender = 'Gender is required';
        }
        if (!FormData.interest.length) {
            newError.interest = 'At least one interest is required';
        }
        setErrors(newError);
        return Object.keys(newError).length === 0;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const isvalid = validation();
        if (isvalid) {
            console.log('Form submitted successfully');
        } else {
            console.error('Please fill all the required fields');
        }
    }


    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...FormData, [name]: value });
    }

    const handleCheckedChange = (e) => {
        const { name, checked } = e.target;
        let updatedInterest = [...FormData.interest]
        if (checked) {
            updatedInterest.push(name)
        } else {
            updatedInterest = updatedInterest.filter(i => i !== name)
        }
        setFormData({ ...FormData, interest: updatedInterest })
    }

    return (
        <form onSubmit={handleSubmit} className='form w-full max-w-lg h-auto p-5 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center'>
            <div className='flex flex-col w-full mb-2'>
                <label htmlFor="name" className='text-xl text-white mb-2'>Name</label>
                <input
                    type="text"
                    name="name"
                    className=' bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={FormData.name}
                    onChange={handleOnChange} />
                {errors.name && <p className='text-red-500 text-xs'>{errors.name}</p>}
            </div>

            <div className='flex flex-col w-full mb-2'>
                <label htmlFor="email" className='text-xl text-white mb-2'>Email</label>
                <input type="email"
                    name="email"
                    className=' bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={FormData.email}
                    onChange={handleOnChange} />
                {errors.email && <p className='text-red-500 text-xs'>{errors.email}</p>}
            </div>

            <div className='flex flex-col w-full mb-2'>
                <label htmlFor="password" className='text-xl text-white mb-2'>Password</label>
                <input type="password" name="password" className=' bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={FormData.password}
                    onChange={handleOnChange} />
                {errors.password && <p className='text-red-500 text-xs'>{errors.password}</p>}
            </div>

            <div className='flex flex-col w-full mb-2'>
                <label htmlFor="confirm-password" className='text-xl text-white mb-2'>Confirm Password</label>
                <input type="password" name="confirmpassword" className=' bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={FormData.confirmpassword}
                    onChange={handleOnChange} />
                {errors.confirmpassword && <p className='text-red-500 text-xs'>{errors.confirmpassword}</p>}
            </div>

            <div className='flex flex-col w-full mb-2'>
                <label htmlFor="dob" className='text-xl text-white mb-2'>Date of Birth</label>
                <input type="date" name="dob" className=' bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={FormData.dob}
                    onChange={handleOnChange} />
                {errors.dob && <p className='text-red-500 text-xs'>{errors.dob}</p>}
            </div>

            <div className='flex flex-col w-full mb-2'>
                <label htmlFor="gender" className='text-xl text-white mb-2'>Select Gender</label>
                <select name="gender" className=' bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={handleOnChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                {errors.gender && <p className='text-red-500 text-xs'>{errors.gender}</p>}
            </div>

            <div className='flex items-center w-full mb-2  ga'>
                <label htmlFor="" className='text-white'>Interest-</label>
                <input type="checkbox" name="coding" className='mr-2'
                    checked={FormData.interest.includes("coding")} onChange={handleCheckedChange} />
                <label htmlFor="accept" className='text-xl text-white'>Coding</label>
                <input type="checkbox" name="sports" className='mr-2'
                    checked={FormData.interest.includes("sports")} onChange={handleCheckedChange} />
                <label htmlFor="accept" className='text-xl text-white'>Sports</label>
                <input type="checkbox" name="calisthenics" className='mr-2'
                    checked={FormData.interest.includes("calisthenics")} onChange={handleCheckedChange} />
                <label htmlFor="accept" className='text-xl text-white'>Calisthenics</label>
            </div>
            {errors.interest && <p className='text-red-500 text-xs'>{errors.interest}</p>}

            <div className='w-full'>
                <input type="submit" className='w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer' value="Submit" />

            </div>
        </form>

    );
}

