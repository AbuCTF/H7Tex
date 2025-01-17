// components/TerminalText.tsx
'use client';
import { useEffect, useState } from 'react';

interface TerminalTextProps {
  text: string;
  className?: string;
}

export const TerminalText = ({ text, className = '' }: TerminalTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    const cursorId = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => {
      clearInterval(intervalId);
      clearInterval(cursorId);
    };
  }, [text]);

  return (
    <div className={`font-mono ${className}`}>
      {displayText}
      <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} text-green-500`}>█</span>
    </div>
  );
};