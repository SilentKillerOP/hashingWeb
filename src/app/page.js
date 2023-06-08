"use client";
import { useState } from "react";
import CryptoJS from "crypto-js";
import "tailwindcss/tailwind.css";
import CopyToClipboardButton from "./components/Copy_clipboard";
import Head from 'next/head';

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [hashDigests, setHashDigests] = useState([]);

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    computeHashDigests(text);
  };

  const computeHashDigests = (text) => {
    const algorithms = [
      { name: "MD5", function: CryptoJS.MD5 },
      { name: "RIPEMD160", function: CryptoJS.RIPEMD160 },
      { name: "SHA1", function: CryptoJS.SHA1 },
      { name: "SHA3", function: CryptoJS.SHA3 },
      { name: "SHA224", function: CryptoJS.SHA224 },
      { name: "SHA256", function: CryptoJS.SHA256 },
      { name: "SHA384", function: CryptoJS.SHA384 },
      { name: "SHA512", function: CryptoJS.SHA512 },
    ];
    const digests = algorithms.map(({ name, function: hashFunction }) => ({
      algorithm: name,
      digest: hashFunction(text).toString(),
    }));
    setHashDigests(digests);
  };

  return (
    <>
    <Head>
      <title>Hash Digests</title>
    </Head> 
    <div className="bg-gradient-to-b from-white via-white to-gray-100 min-h-screen" style={{
      backgroundImage:
        "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(./crypto.jpg)",
      backgroundSize: "cover",
      backgroundBlendMode: "lighten",
      color: "black",
    }}>
      <h1 className="text-2xl mb-4 bg-gray-300 text-center">
        See different hash digests for a given text
      </h1>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
          <div className="mb-4">
            <label htmlFor="inputText" className="mr-2 font-semibold">
              Input Text:
            </label>
            <input
              type="text"
              id="inputText"
              className="border border-gray-300 rounded p-2 text-black"
              value={inputText}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {hashDigests.length > 0 && (
          <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-4 overflow-auto">
            {hashDigests.map((digest) => (
              <div
                key={digest.algorithm}
                className="whitespace-normal break-all"
              >
                {digest.algorithm}: {digest.digest}
                <CopyToClipboardButton text={digest.digest} />
                <br />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
}
