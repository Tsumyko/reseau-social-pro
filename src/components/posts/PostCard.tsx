import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

interface Post {
  _id: string;
  title: string;
  content: string;
  category: string;
  author: {
    companyName: string;
  };
  createdAt: string;
}

interface PostCardProps {
  post: Post;
  onEdit?: () => void;
  onDelete?: () => void;
  canModify?: boolean;
}

export default function PostCard({ post, onEdit, onDelete, canModify }: PostCardProps) {
  const categoryColors = {
    news: 'bg-blue-100 text-blue-800',
    event: 'bg-green-100 text-green-800',
    offer: 'bg-yellow-100 text-yellow-800',
    other: 'bg-gray-100 text-gray-800',
  };

  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true, locale: fr });

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
          <p className="text-sm text-gray-500">
            Par {post.author.companyName} • {timeAgo}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${categoryColors[post.category as keyof typeof categoryColors]}`}>
          {post.category}
        </span>
      </div>

      <p className="text-gray-700 whitespace-pre-line mb-4">{post.content}</p>

      {canModify && (
        <div className="flex justify-end space-x-2">
          <button
            onClick={onEdit}
            className="px-3 py-1 text-sm text-indigo-600 hover:text-indigo-800"
          >
            Modifier
          </button>
          <button
            onClick={onDelete}
            className="px-3 py-1 text-sm text-red-600 hover:text-red-800"
          >
            Supprimer
          </button>
        </div>
      )}
    </div>
  );
}