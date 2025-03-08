import React from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
    return (
        <div className="relative mb-6">
            <input
              type="text"
              placeholder="Tapez un mot clé ou un sujet"
              className="w-full p-3 pr-10 rounded-lg border shadow-sm text-black"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" /> {/* Lucide-react icon of a magnifying glass */}
        </div>
    );
}