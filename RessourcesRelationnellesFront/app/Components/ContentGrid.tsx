import React from 'react';

export function ContentGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
            {/* Equivalent of "foreach category in [The list]" */}
            {['Memories', 'PasDeQuestionsBêtes', 'Oracle', 'NimporteQuoi'].map((category) => (  //Obviously these are fake data taken from maquette
                <div key={category} className="bg-gray-200 rounded-lg overflow-hidden shadow-sm"> {/* for each category object retrieved, create a rounded box */}
                    <div className="p-4"> 
                        <h3 className="font-semibold mb-2">c/{category}</h3> {/* Put the title (here it's the string given by the element) */}
                        <p className="text-sm text-gray-700"> {/* Insert description (Here it is nonsens) */}
                            sjdlégbkjd sfnàdsnfgkjdbnfiugqkjbgj hqdbfgèjnbdfkiqgbn kjldngôkiudwfbgkjndfiuhn.... héhé
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}