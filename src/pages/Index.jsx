import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [count, setCount] = useState(0);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <h1 className="text-4xl font-bold mb-8 text-purple-600">Confetti Fun!</h1>
      <Button 
        onClick={triggerConfetti}
        className="px-6 py-3 text-lg bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        Make Confetti!
      </Button>
      <p className="mt-4 text-lg text-gray-700">
        Confetti created: <span className="font-bold text-purple-600">{count}</span> times
      </p>
    </div>
  );
};

export default Index;
