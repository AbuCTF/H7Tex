// components/CTFTimeline.tsx
'use client';
import { useState } from 'react';

interface CTFEvent {
  name: string;
  points: number;
  ratingPoints: number;
  place: number;
  date: string;
}



const parseEvents = (data: string): CTFEvent[] => {
  return [
    {
      name: "World Wide CTF 2024",
      points: 1578.0000,
      ratingPoints: 5.085,
      place: 37,
      date: "2024-11"
    },
    {
      name: "OSCTF",
      points: 7310.0000,
      ratingPoints: 17.740,
      place: 9,
      date: "2024-07"
    },
    {
      name: "Z3R0 D4Y CTF",
      points: 3930.0000,
      ratingPoints: 32.839,
      place: 3,
      date: "2024-10"
    },
    // Add more events as needed
  ];
};

export default function CTFTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<CTFEvent | null>(null);
  const events = parseEvents("");

  return (
    <section className="py-12 relative">
      <h2 className="text-2xl font-mono mb-8 text-white text-center">CTF Journey</h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute h-full w-1 bg-green-800 left-1/2 transform -translate-x-1/2" />
          
          {/* Events */}
          {events.map((event, index) => (
            <div 
              key={event.name}
              className={`relative ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'} mb-8`}
              style={{
                marginLeft: index % 2 === 0 ? '0' : '50%',
                marginRight: index % 2 === 0 ? '50%' : '0'
              }}
            >
              <div 
                className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <h3 className="text-lg font-mono text-green-400">{event.name}</h3>
                <p className="text-sm text-gray-400">Place: #{event.place}</p>
                <p className="text-sm text-gray-400">Points: {event.points}</p>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-green-500 rounded-full left-1/2 transform -translate-x-1/2" 
                   style={{top: '50%'}} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Event details popup */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 p-6 rounded-lg max-w-md w-full">
            <h3 className="text-xl font-mono text-green-400 mb-4">{selectedEvent.name}</h3>
            <p>Place: #{selectedEvent.place}</p>
            <p>Points: {selectedEvent.points}</p>
            <p>Rating Points: {selectedEvent.ratingPoints}</p>
            <button 
              onClick={() => setSelectedEvent(null)}
              className="mt-4 bg-green-500 text-black px-4 py-2 rounded hover:bg-green-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}