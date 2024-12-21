import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import PostCard from '../components/posts/PostCard';
import { getPosts, createPost, updatePost, deletePost, PostData } from '../services/posts';

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [formData, setFormData] = useState<PostData>({
    title: '',
    content: '',
    category: 'news'
  });
  
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  const mapCenter = useSelector((state: RootState) => state.map.center);

  const loadPosts = async () => {
    try {
      const data = await getPosts({
        lat: mapCenter?.lat,
        lng: mapCenter?.lng,
        radius: 50000
      });
      setPosts(data);
    } catch (error) {
      console.error('Erreur lors du chargement des posts:', error);
    }
  };

  useEffect(() => {
    loadPosts();
  }, [mapCenter]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingPost) {
        await updatePost(editingPost._id, formData);
      } else {
        await createPost({
          ...formData,
          location: mapCenter ? {
            type: 'Point',
            coordinates: [mapCenter.lng, mapCenter.lat]
          } : undefined
        });
      }
      setIsCreating(false);
      setEditingPost(null);
      setFormData({ title: '', content: '', category: 'news' });
      loadPosts();
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    }
  };

  const handleDelete = async (postId: string) => {
    if (window.confirm('Voulez-vous vraiment supprimer ce post ?')) {
      try {
        await deletePost(postId);
        loadPosts();
      } catch (error) {
        console.error('Erreur lors de la suppression:', error);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Actualités</h2>
        <button
          onClick={() => setIsCreating(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Nouveau post
        </button>
      </div>

      {(isCreating || editingPost) && (
        <div className="mb-6 bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">
            {editingPost ? 'Modifier le post' : 'Nouveau post'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Titre"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Contenu"
                value={formData.content}
                onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                className="w-full px-3 py-2 border rounded-md h-32"
                required
              />
            </div>
            <div>
              <select
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as PostData['category'] }))}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="news">Actualité</option>
                <option value="event">Événement</option>
                <option value="offer">Offre</option>
                <option value="other">Autre</option>
              </select>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => {
                  setIsCreating(false);
                  setEditingPost(null);
                  setFormData({ title: '', content: '', category: 'news' });
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                {editingPost ? 'Mettre à jour' : 'Publier'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {posts.map((post: any) => (
          <PostCard
            key={post._id}
            post={post}
            canModify={post.author._id === userId}
            onEdit={() => {
              setEditingPost(post);
              setFormData({
                title: post.title,
                content: post.content,
                category: post.category,
              });
            }}
            onDelete={() => handleDelete(post._id)}
          />
        ))}
      </div>
    </div>
  );
}