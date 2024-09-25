import React, { useState } from 'react';

export default function FormValidate() {

    const validation = () => {
          
    }
    const handleSubmit = (e) => {
        e.preventDefault();
       const isvalid = validation();
       if(isvalid) {
        alert('Form submitted successfully');
       }else{
        alert('Please fill all the required fields');
       }
    }   
    const [FormData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
        dob: '',
        gender: '',
        interest: [],

    })

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
            <div className='flex flex-col w-full mb-4'>
                <label htmlFor="name" className='text-xl text-white mb-2'>Name</label>
                <input
                    type="text"
                    name="name"
                    className='p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={FormData.name}
                    onChange={handleOnChange} />
            </div>

            <div className='flex flex-col w-full mb-4'>
                <label htmlFor="email" className='text-xl text-white mb-2'>Email</label>
                <input type="email"
                    name="email"
                    className='p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={FormData.email}
                    onChange={handleOnChange} />
            </div>

            <div className='flex flex-col w-full mb-4'>
                <label htmlFor="password" className='text-xl text-white mb-2'>Password</label>
                <input type="password" name="password" className='p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={FormData.password}
                    onChange={handleOnChange} />
            </div>

            <div className='flex flex-col w-full mb-4'>
                <label htmlFor="confirm-password" className='text-xl text-white mb-2'>Confirm Password</label>
                <input type="password" name="confirmpassword" className='p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={FormData.confirmpassword}
                    onChange={handleOnChange} />
            </div>

            <div className='flex flex-col w-full mb-4'>
                <label htmlFor="dob" className='text-xl text-white mb-2'>Date of Birth</label>
                <input type="date" name="dob" className='p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={FormData.dob}
                    onChange={handleOnChange} />
            </div>

            <div className='flex flex-col w-full mb-4'>
                <label htmlFor="gender" className='text-xl text-white mb-2'>Select Gender</label>
                <select name="gender" className='p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={handleOnChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className='flex items-center w-full mb-4  gap-2'>
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

            <div className='w-full'>
                <input type="submit" className='w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer' value="Submit" />
            </div>
        </form>
        
    );
}

