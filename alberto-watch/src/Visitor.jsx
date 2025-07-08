import react from 'react';
import { Link } from 'react-router-dom';

function Visitor() {
  return (
    <div className="visitor">
      <div className="flex justify-between items-center p-4 bg-gray-900 text-white">
        <img src="/logo.png" alt="Alberto Logo" className="h-12" />
        <div className="visito">Visitor Count: {visitorCount}</div>
      </div>
      <main>
      </main>
    </div>
  );
}

export default Visitor;