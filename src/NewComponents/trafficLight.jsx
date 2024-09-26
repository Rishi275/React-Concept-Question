import React, { useEffect, useState } from 'react';

export default function TrafficLight() {
  const [activeLite, setActiveLite] = useState('red'); // Active light
  const [selectedLight, setSelectedLight] = useState('red'); // Temporary selected light
  const [inputTime, setInputTime] = useState(''); // Temporary input time

  // Initial traffic light states
  const [trafficLite, setTrafficLite] = useState({
    red: {
      time: 3,
      next: 'yellow'
    },
    yellow: {
      time: 4,
      next: 'green'
    },
    green: {
      time: 6,
      next: 'red'
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLite(trafficLite[activeLite].next); // Switch to next light based on time
    }, trafficLite[activeLite].time * 1000);

    return () => clearInterval(interval);
  }, [activeLite, trafficLite]);


  // Handle selection from dropdown
  const handleOptionChange = (e) => {
    setSelectedLight(e.target.value); // Store selected light temporarily
  };

  // Handle input time change
  const handleInputChange = (e) => {
    setInputTime(e.target.value); // Store input time temporarily
  };

  // Handle activation of selected light
  const handleActiveClick = () => {
    const time = parseInt(inputTime);
    
    // Validate the input time
    if (isNaN(time) || time < 1 || time > 100) {
      alert('Please enter a number between 1 and 100');
      return;
    }

    // Update the traffic light time for the selected light
    setTrafficLite({
      ...trafficLite,
      [selectedLight]: {
        ...trafficLite[selectedLight],
        time: time
      }
    });

    // Activate the selected light
    setActiveLite(selectedLight);
  };

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <div className='flex gap-6 mb-8'>
        <button onClick={() => setActiveLite('red')} className='py-2 px-5 bg-red-800 text-white opacity-[0.5] hover:opacity-[1]'>Activate Red</button>
        <button onClick={() => setActiveLite('yellow')} className='py-2 px-5 bg-yellow-500 text-white opacity-[0.5] hover:opacity-[1]'>Activate Yellow</button>
        <button onClick={() => setActiveLite('green')} className='py-2 px-5 bg-green-800 text-white opacity-[0.5] hover:opacity-[1]'>Activate Green</button>
      </div>
      
      <div className='flex gap-3 mb-4'>
        <select value={selectedLight} className='p-4' onChange={handleOptionChange}>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
         
        </select>

        <input
          type="text"
          placeholder='Set time (1-100 seconds)'
          className='p-1'
          value={inputTime}
          onChange={handleInputChange}
        />

        <button onClick={handleActiveClick} className='py-2 text-white px-5 bg-black hover:bg-white hover:text-black'>
          Active
        </button>
      </div>

      <div className="traffic-light flex items-center justify-center flex-col w-[200px] h-[60vh] bg-gray-800 rounded-md gap-6">
        <div className="h-[50px] w-[50px] bg-red-600 rounded-full" style={{ opacity: activeLite === 'red' ? 1 : 0.1 }}></div>
        <div className="h-[50px] w-[50px] bg-yellow-600 rounded-full" style={{ opacity: activeLite === 'yellow' ? 1 : 0.1 }}></div>
        <div className="h-[50px] w-[50px] bg-green-600 rounded-full" style={{ opacity: activeLite === 'green' ? 1 : 0.1 }}></div>
      </div>
    </div>
  );
}
