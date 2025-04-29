import React, { useState } from 'react'

function PasswordGenerator() {
    const [uppercase, setUppercase] = useState(false);
    const [lowercase, setLowercase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);
    const [length, setLength] = useState("");
    const [password, setPassword] = useState("");
    function generatePassword() {
        let lower = 'abcdefghijklmnopqrstuvwxyz';
        let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let number = '1234567890';
        let symbol = '!@#$%^&*()_+';

        let charset = (lowercase ? lower : "");
        charset += (uppercase ? upper : "");
        charset += (numbers ? number : "");
        charset += (symbols ? symbol : "");
        let pass = "";
        for (let i = 0; i < length; i++) {
            let index = Math.floor(Math.random() * charset.length);
            pass += charset[index];
        }
        setPassword(pass);

    }
    function copyToClipbord() {
        navigator.clipboard.writeText(password);
        alert("Copied To Clipboard")
    }
    return (
        <>
            <div className='bg-sky-200 h-screen flex justify-center items-center'>
                <div className='bg-white rounded-md w-80 p-4 '>
                    <h1 className='text-sky-600 text-lg font-medium text-center my-4'>STRONG PASSWORD GENERATOR</h1>
                    <div>
                        <h2 className="text-md font-semibold">Password Length:</h2>
                        <input type="number" min={1} className='border border-solid border-gray-400 rounded-md w-full p-1 my-2 outline-sky-500' onChange={e => {
                            const value = parseInt(e.target.value);
                            setLength(!isNaN(value) && value > 0 ? value : "");
                        }} value={length} />
                    </div>
                    <div>
                        <div className='flex items-center mb-2'>

                            <input type="checkbox" name="" id="" className='mr-2' checked={uppercase} onChange={() => setUppercase(uppercase => !uppercase)} /><label htmlFor="">Include Uppercase</label>

                        </div>
                        <div className='flex items-center mb-2'>

                            <input type="checkbox" name="" id="" className='mr-2' checked={lowercase} onChange={() => setLowercase(l => !l)} /><label htmlFor="">Include Lowercase</label>

                        </div>
                        <div className='flex items-center mb-2'>

                            <input type="checkbox" name="" id="" className='mr-2' checked={numbers} onChange={() => setNumbers(n => !n)} /><label htmlFor="">Include Numbers</label>

                        </div>
                        <div className='flex items-center mb-2'>

                            <input type="checkbox" name="" id="" className='mr-2' checked={symbols} onChange={() => setSymbols(s => !s)} /><label htmlFor="">Include Symbols</label>

                        </div>
                    </div>
                    <button className='bg-blue-700 text-white p-1.5 rounded-sm my-2 hover:bg-blue-800 hover:cursor-pointer' onClick={generatePassword}>Generate Password</button>
                    <div className='flex'>
                        <input type="text" readOnly value={password} className='border border-solid border-gray-400 rounded-md p-1  w-9/10 outline-green-500' />
                        <button onClick={copyToClipbord} className='bg-green-700 text-white rounded p-1 text-sm hover:bg-green-800 hover:cursor-pointer '>Copy</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PasswordGenerator