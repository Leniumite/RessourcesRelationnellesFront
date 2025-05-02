import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { User, LogOut, ThumbsUp, MessageCircle, Share2, Flag } from 'lucide-react';
import { api } from '../Services/UserApi';
import { useUser } from '../Context';


export function PostContent({ postTitle, postText, postAuthor, postDate, postCommunity, postRatio, postResponses }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center gap-4 mb-4">
            <div>
                <h2 className="font-bold text-lg">{postTitle}</h2>
                <p className="">Posté par {postAuthor} • {postDate} • dans {postCommunity}</p>
            </div>
            </div>

            <div className="mb-6">
            <p className="leading-relaxed">
                {postText}
            </p>
            </div>

            <div className="flex items-center gap-6 border-t border-b border-gray-200 py-3">
            <button className="flex items-center gap-2 hover:text-blue-500">
                <ThumbsUp size={20} />
                <span>{postRatio}</span>
            </button>
            <button className="flex items-center gap-2 hover:text-blue-500">
                <MessageCircle size={20} />
                <span>{postResponses}</span>
            </button>
            <button className="flex items-center gap-2 hover:text-red-500 ml-auto">
                <Flag size={20} />
                <span>Signaler</span>
            </button>
            </div>
        </div>
)};