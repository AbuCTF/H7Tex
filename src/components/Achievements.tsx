// components/Achievements.tsx
'use client';
import { Trophy, Target, Flag, Medal } from 'lucide-react';
import { JSX, useState } from 'react';

interface Achievement {
  icon: JSX.Element;
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    title: "Rank #7 in India",
    description: "Achieved top 10 ranking among Indian CTF teams"
  },
  {
    icon: <Target className="w-8 h-8 text-green-400" />,
    title: "100+ CTFs",
    description: "Participated in over 100 CTF competitions within 10 months"
  },
  {
    icon: <Flag className="w-8 h-8 text-red-400" />,
    title: "Conducted H7CTF",
    description: "With over 2000+ participants from all over the globe"
  },
  {
    icon: <Medal className="w-8 h-8 text-blue-400" />,
    title: "Cyber Trail 2024 Winner",
    description: "Victory at Cyber Trail 2024 securing 40k INR"
  },
];

export default function Achievements() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12">
      <h2 className="text-2xl font-mono mb-8 text-white text-center">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <div
            key={achievement.title}
            className="relative bg-gray-900 p-6 rounded-lg transition-transform duration-300 transform hover:scale-105"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-mono mb-2">{achievement.title}</h3>
              <p className="text-gray-400">{achievement.description}</p>
            </div>
            {hoveredIndex === index && (
              <div className="absolute inset-0 border-2 border-green-500 rounded-lg animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}