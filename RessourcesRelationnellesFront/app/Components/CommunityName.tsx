import React from 'react';
import { useParams } from "react-router-dom";

//A simple button component (Yes, it works, logic can be written in an OnClick props)
export function CommunityName({name, description, creation} : {name:String, description:String, creation:Date}) {
    const { params } = useParams();

    return (
    <div className="mx-auto gap-20 bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold mb-4">{name}</h1>
        <p className="mb-4">{description}</p>
        <div className="text-sm">
            Communauté créée le {creation.toString()}
        </div>
    </div>
  );
}