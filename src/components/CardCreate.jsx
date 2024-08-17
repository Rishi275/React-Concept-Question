
import React from 'react'
import Sidebar from './templates/Sidebar'
import { useState } from 'react';
const CardCreate = () => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [college, setCollege] = useState('');
  const [cards, setCards] = useState([]);
  const [id, setId] = useState(1); // Initialize ID state with 1

  const handleSubmit = (e) => {
    e.preventDefault();
    setCards([...cards, { id: id, name, course, college }]); // Include ID in the card object
    setId(id + 1); // Increment ID for the next card
    setName('');
    setCourse('');
    setCollege('');
  };

  const handlePrint = ()=>{
    window,print();
  }

  document.title = "Services-Card Create";
  return (
    <>
      <div className="mainbafr w-[80%] h-full bg-[#161B22] ">
        <div className="max-w-xl mx-auto p-6 text-center">
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-left mb-2 text-white">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="course" className="block text-left mb-2 text-white">Course:</label>
              <select
                id="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="" disabled>Select course</option>
                <option value="BCA"> BCA</option>
                <option value="B.Tech">B.Tech</option>
                <option value="MCA">MCA</option>
                <option value="M.Tech">M.Tech</option>
                <option value="AI-CS-IT">AI-CS-IT</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="college" className="block text-left mb-2 text-white">College:</label>
              <select
                id="college"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="" disabled>Select college</option>
                <option value="SIET">SIET</option>
                <option value="BBS">BBS</option>
                <option value="Allahabad University">Allahabad University</option>
                <option value="United University">United University</option>
              </select>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Create Card
            </button>
            <button
              onClick={handlePrint}
              className="px-6 py-2 mt-4 ml-3 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Print Cards
            </button>
          </form>
        </div>
        <div className="w-[100%] max-h-[40vh] overflow-y-scroll flex flex-wrap gap-2 items-center justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className=" w-[350px] h-[220px] ml-2 relative  bg-gradient-to-tl from-purple-600 to-indigo-600 bg-opacity-90 backdrop-filter backdrop-blur-lg border border-purple-700 rounded-lg shadow-xl p-6 pl-1 pr-1 flex flex-col items-start justify-start"
            >
              <div className="flex flex-col items-center justify-center w-full mb-4">
                <img src="https://rishiai.world/logo.jpg" className="w-16 h-16 mb-2 rounded-full border-4 border-white" />
                <h1 className="text-2xl text-white text-center font-semibold">
                  {card.college}
                </h1>
              </div>
              <h2 className="text-[20px] font-bold text-white mb-2">
                Name: {card.name}
              </h2>
              <p className="text-lg text-white">Course: {card.course}</p>
              <h3 className="text-white absolute top-2 right-2">ID: {card.id}</h3>
            </div>


          ))}
        </div>

      </div>
    </>
  );
};

export default CardCreate
