import express from 'express';
import auth from '../middleware/auth';
import Post from '../models/Post';

const router = express.Router();

// Créer un post
router.post('/', auth, async (req: any, res) => {
  try {
    const post = new Post({
      ...req.body,
      author: req.userId
    });
    await post.save();
    await post.populate('author', 'companyName');
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Récupérer tous les posts
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    let query = {};
    if (category) {
      query = { category };
    }

    const posts = await Post.find(query)
      .populate('author', 'companyName')
      .sort('-createdAt')
      .limit(20);

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Aimer/Ne plus aimer un post
router.post('/:id/like', auth, async (req: any, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post non trouvé' });
    }

    const likeIndex = post.likes.indexOf(req.userId);
    if (likeIndex === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes.splice(likeIndex, 1);
    }

    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Commenter un post
router.post('/:id/comment', auth, async (req: any, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post non trouvé' });
    }

    post.comments.push({
      author: req.userId,
      content: req.body.content
    });

    await post.save();
    await post.populate('comments.author', 'companyName');
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

export default router;