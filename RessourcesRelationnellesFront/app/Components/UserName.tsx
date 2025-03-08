import React from 'react';
import { User, LogOut } from 'lucide-react';

export function UserName() {
  return (
    <div className="bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-black">Bienvenue, Saw6deFranckFort</span>
          <span className="flex gap-1">
            <span className="h-6 w-6 rounded-full bg-green-500"></span>
            <span className="h-6 w-6 rounded-full bg-rainbow-gradient"></span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <User className="w-6 h-6" /> {/* Lucide-react icon of a user */}
          <LogOut className="w-6 h-6" /> {/* Lucide-react icon of a logout button */} 
        </div>
      </div>
    </div>
  );
}