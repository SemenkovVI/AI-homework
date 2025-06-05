import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL('./worker.ts', import.meta.url));
    
    worker.onmessage = (event) => {
      setResult(event.data);
      worker.terminate();
    };

    worker.postMessage(null);

    return () => worker.terminate();
  }, []);

  return (
    <div className="p-4">
      {result === null ? 'Computing...' : `Result: ${result}`}
    </div>
  );
}
