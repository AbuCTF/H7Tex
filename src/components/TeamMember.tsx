// components/TeamMember.tsx
'use client';
import { useState } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
}

const TeamMember = ({ name, role }: TeamMemberProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  return (
    <div
      className={`bg-gray-900 p-6 rounded-lg font-mono transition-all duration-300 
                 ${isGlitching ? 'glitch-hover' : ''}`}
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
    >
      <h3 className="text-xl mb-2">{name}</h3>
      <p className="text-green-400">{role}</p>
    </div>
  );
};

export default TeamMember;