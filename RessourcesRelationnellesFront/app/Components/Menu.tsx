import React from 'react';
import { Link } from 'react-router-dom';

export function Menu() {
    const communities = [ //still plaecHolder data
        {
            slug: 'born-to-be-alive',
            title: 'BornToBeAlive',
        },
        {
            slug: 'choucroute',
            title: 'Choucroute',
        },
        {
            slug: 'famous-pilots-on-drugs',
            title: 'FamousPilotsOnDrugs',
        },
        {
            slug: 'explosiv-cuteness',
            title: 'ExplosivCuteness',
        },
        {
            slug: 'how-to-basic',
            title: 'HowToBasic',
        },
    ] 

    return (
        <div className="gap-6 p-4 w-128 space-y-2 bg-blue-100"> {/* Define another container with a width of 128 (32rem?, 512px) and a space between vertical elements of 2 */}
            <h2 className="font-semibold mb-4">Reprenez là où vous vous étiez arrêté :</h2>

            {/* My today's nightmare, where I search how to put thing from a list into display. At the moment, it needs to have the list hardcoded, but will be replaced with a query later */}
            {communities.map((category) => (
                <Link key={category.slug} to={`/community/${category.slug}`}>
                    <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition cursor-pointer"> {/* Each items are responding to the cursor hovering */}
                        c/{category.title}
                    </div>
                </Link>
            ))}
            
                <div className="mt-8">
                    <h2 className="font-semibold mb-4">Espace relationnel :</h2>
                    <div className="space-y-4">

                    {/* Recent activity with profil pic and comment. Same horror than before, because when used once and it works, why not use twice? */}
                    {[1, 2, 3].map((i) => ( 
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gray-200 rounded-full"></div> {/* Will needs to be an image component rounded for profil pic */}
                            
                            <div className="text-sm text-black"> {/* Comment div */}
                                <p>a commenté: "Lorem ipsum"</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}