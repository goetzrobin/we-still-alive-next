import React from 'react';

export interface DonationBarProps {
  percentage: number;
}

export const DonationBar = ({ percentage }: DonationBarProps): React.ReactElement => {
  return (
    <div className="relative h-6 mt-2 overflow-hidden rounded-full">
      <div className="absolute w-full h-full bg-gray-200"></div>
      <div style={{ width: `${percentage}%` }} className="relative w-full h-full bg-blue-600"></div>
    </div>
  );
};
