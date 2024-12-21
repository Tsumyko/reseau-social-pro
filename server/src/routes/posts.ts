import express from 'express';
import auth from '../middleware/auth';
import Post from '../models/Post';

const router = express.Router();

// Créer un post
router.post('/', auth, async (req: any, res) => {
  try {
    const post = new Post({
      ...req.body,
      author: req.userId,
    });
    await post.save();
    await post.populate('author', 'companyName');
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Récupérer les posts
router.get('/', auth, async (req: any, res) => {
  try {
    const { category, lat, lng, radius = 50000 } = req.query;
    
    let query: any = {};
    
    if (category) {
      query.category = category;
    }
    
    if (lat && lng) {
      query.location = {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(lng), parseFloat(lat)],
          },
          $maxDistance: parseInt(radius),
        },
      };
    }
    
    const posts = await Post.find(query)
      .sort({ createdAt: -1 })
      .populate('author', 'companyName')
      .limit(50);
      
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Modifier un post
router.put('/:id', auth, async (req: any, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ message: 'Post non trouvé' });
    }
    
    if (post.author.toString() !== req.userId) {
      return res.status(403).json({ message: 'Non autorisé' });
    }
    
    Object.assign(post, req.body);
    await post.save();
    await post.populate('author', 'companyName');
    
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Supprimer un post
router.delete('/:id', auth, async (req: any, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ message: 'Post non trouvé' });
    }
    
    if (post.author.toString() !== req.userId) {
      return res.status(403).json({ message: 'Non autorisé' });
    }
    
    await post.deleteOne();
    res.json({ message: 'Post supprimé' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

export default router;