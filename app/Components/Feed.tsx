import React from 'react';
import { SearchBar } from '../Components/SearchBar';
import { ContentGrid } from '../Components/ContentGrid';

export function Feed() {
    return (
        <div className="gap-6 p-4 space-y-2 bg-red-100">
            <h2 className="text-2xl font-semibold mb-4">Ayant du succès proche de chez vous :</h2>

            {/* SearchBar component imported*/}
            <SearchBar />

            {/* ContentGrid component imported */}
            <ContentGrid />
        </div>
    );
}