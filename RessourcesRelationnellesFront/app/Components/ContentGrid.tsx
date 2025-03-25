import React from 'react';
import { Link } from 'react-router-dom';

export function ContentGrid() {  
    const communities = [ //Will be an API call in the future, just need to setup the logic with placeholder data
        {
            slug: 'memories',
            title: 'Memories',
        },
        {
            slug: 'pas-de-questions-bêtes',
            title: 'PasDeQuestionsBêtes',
        },
        {
            slug: 'oracle',
            title: 'Oracle',
        },
        {
            slug: 'nimporte-quoi',
            title: 'NimporteQuoi',
        },
    ] 

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
            {/* Equivalent of "foreach category in [The list]" */}
            {communities.map((category) => (  //Obviously these are fake data taken from maquette. Smallest object is category
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-sm"> {/* for each category object retrieved, create a rounded box */}
                <Link to={`/community/${category.slug}`}> {/* Slug URL including in the URL the name of the community we just clicked on */}
                    <div className="p-4">
                        <h3 className="font-semibold mb-2">c/{category.title}</h3> {/* Put the title (here it's the string given by the element) */}
                        <p className="text-sm text-gray-700"> {/* Insert description (Here it is nonsens) */}
                            sjdlégbkjd sfnàdsnfgkjdbnfiugqkjbgj hqdbfgèjnbdfkiqgbn kjldngôkiudwfbgkjndfiuhn.... héhé
                        </p>
                    </div>
                </Link>
            </div>
            ))}
        </div>
    );
}