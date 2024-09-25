import React, { useState } from 'react';
import TopNav from '../components/templates/TopNav';

export default function PasswordGenerator() {
    document.title = "Password Generator"
    const [inputLength, setInputLength] = useState(12);
    const [password, setPassword] = useState('');
    const [uppercaseLetters, setUppercaseLetters] = useState(false);
    const [lowercaseLetters, setLowercaseLetters] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);
    const [copied, setCopied] = useState(false);  // New state to track if the password is copied

    const handleInputChange = (event) => {
        setInputLength(event.target.value);
    };

    const generatePassword = () => {
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

        let allChars = '';
        let generatedPassword = '';

        if (uppercaseLetters) allChars += upperCaseChars;
        if (lowercaseLetters) allChars += lowerCaseChars;
        if (numbers) allChars += numberChars;
        if (symbols) allChars += symbolChars;

        if (allChars.length === 0) {
            setPassword('');
            return;
        }
        console.log(allChars);
        for (let i = 0; i < inputLength; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            generatedPassword += allChars[randomIndex];
        }

        setPassword(generatedPassword);
        setCopied(false);  // Reset copied state when a new password is generated
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        setCopied(true);  // Set copied state to true when the password is copied
    };

    return (
        <div className='w-full flex justify-start items-center mt-[12vh] flex-col '>
            <div className="container text-white flex flex-col gap-2 bg-gray-950 h-[auto] w-[600px] border-[1px] py-[10px] px-[10px]" >
                <div className="generated w-full h-auto py-[10px] flex items-center justify-between border-b-[1px]">
                    <span className='font-semibold'>
                        {password}
                    </span>
                    <button
                        onClick={copyToClipboard}
                        className={`py-[4px] px-[10px] ${copied ? "bg-green-400" : "bg-blue-400"} hover:bg-blue-700 active:bg-red-600 active:text-[15px] font-bold`}>
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>
                <div className="generated w-full h-auto flex items-center justify-between">
                    <span className='font-semibold'>
                        Character Length
                    </span>
                    <span className='py-[4px] px-[10px] font-bold'>{inputLength}</span>
                </div>
                <input
                    onChange={handleInputChange}
                    value={inputLength}
                    type="range"
                    min="4"
                    max="20"
                    className='w-full'
                />
                <div className="checkboxes flex items-center flex-wrap gap-7 justify-center">
                    <div className='w-[230px] flex gap-1 items-center justify-start'>
                        <input
                            type="checkbox"
                            checked={uppercaseLetters}
                            onChange={() => setUppercaseLetters(!uppercaseLetters)}
                        />
                        <label>Include Uppercase Letters</label>
                    </div>
                    <div className='w-[230px] flex gap-1 items-center justify-start'>
                        <input
                            type="checkbox"
                            checked={lowercaseLetters}
                            onChange={() => setLowercaseLetters(!lowercaseLetters)}
                        />
                        <label>Include Lowercase Letters</label>
                    </div>
                    <div className='w-[230px] flex gap-1 items-center justify-start'>
                        <input
                            type="checkbox"
                            checked={numbers}
                            onChange={() => setNumbers(!numbers)}
                        />
                        <label>Include Numbers</label>
                    </div>
                    <div className='w-[230px] flex gap-1 items-center justify-start'>
                        <input
                            type="checkbox"
                            checked={symbols}
                            onChange={() => setSymbols(!symbols)}
                        />
                        <label>Include Symbols</label>
                    </div>
                </div>
                <button
                    onClick={generatePassword}
                    className='py-[4px] px-[10px] mt-10 bg-blue-400 hover:bg-blue-700 active:bg-red-600 active:text-[15px] font-bold'>
                    Generate
                </button>
            </div>
        </div>
    );
}
