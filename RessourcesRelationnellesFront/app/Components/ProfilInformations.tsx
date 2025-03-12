import React from 'react';
import { Pencil } from 'lucide-react';

export function ProfilInformations() {
    const handleModify = () => {
        //TODO change readonly value here
        console.log('test')
      };

    return (
        <div className="max-w-3xl mx-auto p-8">
            <h1 className="text-4xl text-black font-bold text-center mb-2">Informations de profil</h1>
            <div className="text-red-500 text-2xl font-bold text-center mb-8">ADMIN</div>

            <div className="space-y-6">
                {/* The part where field will all be - make them components also */}
                <div className="flex flex-col">
                    <label className="text-xl mb-2">Nom d'utilisateur</label>
                    <div className="relative">
                        <input
                            type="text"
                            defaultValue="Saw6DeFranckfrot69"
                            //readOnly
                            className="w-full p-3 bg-gray-100 rounded-lg pr-12"
                        />
                        {/* I need to make the button a component, then make him send an event, that the parent will gather to maybe lock value in readonly state when not used. But for now it works*/}
                        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:text-gray-700" >
                            <Pencil size={20} />
                        </button>
                    </div>
                </div>

                {/* Mail */}
                <div className="flex flex-col">
                    <label className="text-xl mb-2">Email</label>
                    <div className="relative">
                        <input
                            type="text"
                            defaultValue="saw6>saw10@gmail.com"
                            //readOnly
                            className="w-full p-3 bg-gray-100 rounded-lg pr-12"
                        />
                        {/* I need to make the button a component, then make him send an event, that the parent will gather to maybe lock value in readonly state when not used. But for now it works*/}
                        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:text-gray-700" >
                            <Pencil size={20} />
                        </button>
                    </div>
                </div>
                
                {/* Password */}
                <div className="flex flex-col">
                    <label className="text-xl mb-2">Mot de passe</label>
                    <div className="relative">
                        <input
                            type="password"
                            defaultValue="**********"
                            //readOnly
                            className="w-full p-3 bg-gray-100 rounded-lg pr-12"
                        />
                        {/* I need to make the button a component, then make him send an event, that the parent will gather to maybe lock value in readonly state when not used. But for now it works*/}
                        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:text-gray-700" >
                            <Pencil size={20} />
                        </button>
                    </div>
                </div>

                {/* Date de naissance - make it date field */}
                <div className="flex flex-col">
                    <label className="text-xl mb-2">Date de naissance</label>
                    <div className="relative">
                        <input
                            type="text"
                            defaultValue=""
                            //readOnly
                            className="w-full p-3 bg-gray-100 rounded-lg pr-12"
                        />
                        {/* I need to make the button a component, then make him send an event, that the parent will gather to maybe lock value in readonly state when not used. But for now it works*/}
                        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:text-gray-700" >
                            <Pencil size={20} />
                        </button>
                    </div>
                </div>

                <div className="mt-8">
                <h3 className="text-xl mb-2">Régime de compte :</h3>
                <div className="space-y-1">
                    <div className="text-yellow-500">Certification gold</div>
                    <div className="text-pink-500">Certification rainbow</div>
                </div>
                </div>

                <div className="mt-6">
                <h3 className="text-xl mb-2">Nombre de posts :</h3>
                <div>615</div>
                </div>

                <div className="mt-6">
                <h3 className="text-xl mb-2">Moyenne des avis sur les posts :</h3>
                <div className="italic">Moyennement bons</div>
                </div>

                <div className="flex gap-4 mt-8">
                <button className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors w-full">
                    SUPPRIMER LE COMPTE
                </button>
                <button className="bg-orange-400 text-white px-8 py-3 rounded-full hover:bg-orange-500 transition-colors w-full">
                    DESACTIVER LE COMPTE
                </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilInformations;