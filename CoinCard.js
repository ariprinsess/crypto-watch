import React from 'react';
import { Button } from '@/components/ui/button';

const CoinCard = ({ coin, onClick, isFavorite }) => {
  return (
    <Button
      onClick={() => onClick(coin)}
      className={`flex flex-col items-center p-2 border rounded-xl shadow-md hover:bg-gray-100 ${isFavorite ? 'bg-yellow-100' : ''}`}
    >
      <img src={coin.image} alt={coin.name} className="w-8 h-8 mb-1" />
      <span className="font-semibold">{coin.name}</span>
      <span className="text-sm text-gray-600">${coin.current_price}</span>
    </Button>
  );
};

export default CoinCard;
