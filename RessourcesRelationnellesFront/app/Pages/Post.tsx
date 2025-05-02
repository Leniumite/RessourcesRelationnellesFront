import { UserProvider } from '../Context';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../Components/Header';
import { UserName} from '../Components/UserName';
import { PostContent } from '../Components/PostContent';

function Post() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    {
      //postTitle, postText, postAuthor, postDate, postCommunity, postRatio (needs to be calculated), postResponses
      id: 1,
      postAuthor: 'xX_JeanMichelDu42_Xx',
      content: 'Vraiment intéressant comme article ! Je pense que la partie sur les avions est particulièrement bien documentée.',
      likes: 24,
      postDate: '24/04/2025 16:12'
    },
    {
      id: 2,
      postAuthor: 'AviationLover',
      content: 'Super analyse ! Est-ce que quelqu\'un aurait des sources supplémentaires sur ce sujet ?',
      likes: 15,
      postDate: '13/12/2024 13:12'
    },
    {
      id: 3,
      postAuthor: 'ProDruger',
      postText: 'Je peux confirmer ces informations, c\'est exactement ce que j\'ai vécu pendant ma formation.',
      likes: 42,
      postDate: '30min ago'
    }
  ]);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComment = {
      id: comments.length + 1,
      author: 'saw6deFranckfort',
      content: comment,
      likes: 0,
      timestamp: 'Just now'
    };

    setComments([...comments, newComment]);
    setComment('');
  };

  return (
    <UserProvider>
    <div className="flex flex-col md:flex-row min-h-screen">
      <Header />
      <UserName />

      <div className="flex-1 p-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          {/*Post - We need to call API first to gather parameters to pass to this component, otherwise post will be empty*/
          /*Parameters are {postTitle, postText, postAuthor, postDate, postCommunity, postRatio (needs to be calculated), postResponses}*/
          /*Calculus is postRatio = (upvotes - downvotes)/(upvotes + downvotes) | Please manage the case where up and down votes are = 0. */}
          <PostContent 
            postTitle = {""}
            postText = {""}
            postAuthor = {""}
            postDate = {""}
            postCommunity = {""}
            postRatio = {0}
            postResponses = {0}
          />

          {/*Comments section*/}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-6">Commentaires</h3>

            {/* Comment form */}
            <form onSubmit={handleSubmitComment} className="mb-8">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
              <button 
                type="submit"
                className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Post Comment
              </button>
            </form>

            {/* Comments list */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="border-b border-gray-200 pb-4 last:border-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold">{comment.postAuthor}</span>
                    <span className="text-gray-500 text-sm">• {comment.postDate}</span>
                  </div>
                  <p className="text-gray-800 mb-2">{comment.content}</p>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
                      <span>{comment.likes}</span>
                    </button>
                    <button className="text-gray-500 hover:text-blue-500">Reply</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </UserProvider>
  );
}

export default Post;