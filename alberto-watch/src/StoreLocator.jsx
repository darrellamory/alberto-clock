import React from 'react';

export const StoreLocator = () => {
  return (
    <section className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Store Locator</h2>
      <p>Find the nearest Alberto Watch store to get assistance or explore our timepieces in person.</p>
      <ul className="list-disc pl-6 mt-2">
        <li>New York - 123 Timepiece Blvd</li>
        <li>Los Angeles - 456 Watch Ave</li>
        <li>Chicago - 789 Clock St</li>
      </ul>
    </section>
  );
};
