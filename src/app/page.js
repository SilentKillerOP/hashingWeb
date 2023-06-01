"use client";
import { useState } from 'react';
import CryptoJS from 'crypto-js';
import 'tailwindcss/tailwind.css';
import Button from './components/Button';

const algorithms = [
  { name: 'AES', value: 'AES' },
  { name: 'TripleDES', value: 'TripleDES' },
  // Add more algorithms as needed
];

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithms[0].value);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAlgorithmChange = (e) => {
    setSelectedAlgorithm(e.target.value);
  };

  const handleEncrypt = () => {
    const encrypted = CryptoJS[selectedAlgorithm].encrypt(inputText, 'secret-key').toString();
    setOutputText(encrypted);
  };

  const handleDecrypt = () => {
    const decrypted = CryptoJS[selectedAlgorithm].decrypt(outputText, 'secret-key').toString(CryptoJS.enc.Utf8);
    setOutputText(decrypted);
  };

  return (
    <>
    <h1 className="text-2xl font-bold mb-4">CryptoJS Demo</h1>
    <div className="container flex flex-col items-center justify-center mx-auto h-screen">
    <div className="mb-4">
      <label htmlFor="inputText" className="mr-2 font-semibold mx-1 my-1">
        Input Text:
      </label>
      <input
        type="text"
        id="inputText"
        className="border border-gray-300 rounded p-2 text-black mx-1"
        value={inputText}
        onChange={handleInputChange}
      />
    </div> 
      <div>
        <label htmlFor="algorithm">Algorithm:</label>
        <select id="algorithm" value={selectedAlgorithm} onChange={handleAlgorithmChange} className='text-black my-2 mx-3'>
          {algorithms.map((algo) => (
            <option key={algo.value} value={algo.value}>
              {algo.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4 text-teal-200 ">
        {outputText}
      </div>
      <div>
        <Button onClick={handleEncrypt}>Encrypt</Button>
        <Button onClick={handleDecrypt}>Decrypt</Button>
      </div>
    </div>
    </>
  );
}
