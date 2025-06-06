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
    title: "200+ CTFs",
    description: "Competed in over 200 CTFs in just one year"
  },
  {
    icon: <Flag className="w-8 h-8 text-red-400" />,
    title: "Conducted H7CTF",
    description: "Hosted a global CTF with 2000+ participants"
  },
  {
    icon: <Medal className="w-8 h-8 text-blue-400" />,
    title: "CyberTrail 2024 Winner",
    description: "Secured 1st place, winning 40k INR"
  },
  {
    icon: <Medal className="w-8 h-8 text-blue-400" />,
    title: "VishwaCTF Finalists",
    description: "Finished 2nd place, earning 25k INR"
  },
];

export default function Achievements() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12">
      <h2 className="text-2xl font-mono mb-8 text-white text-center">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
        {achievements.map((achievement, index) => (
          <div
            key={achievement.title}
            className="relative float-card"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="bg-gray-900 p-6 rounded-lg h-full flex flex-col items-center text-center transform transition-transform duration-300">
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