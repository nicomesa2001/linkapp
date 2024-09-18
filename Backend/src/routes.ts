import { Router } from 'express';
import { createSurvey, getSurveys, submitResponse } from './controllers';
import { verifyToken } from './firebaseAdmin';

const authMiddleware = async (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decodedToken = await verifyToken(token);
    req.user = decodedToken;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

const router = Router();

router.post('/', authMiddleware, createSurvey);
router.get('/', getSurveys);
router.post('/responses', submitResponse);

export default router;
