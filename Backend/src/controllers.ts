import { Request, Response } from 'express';
import pool from './database';
import { db } from './firebaseAdmin';

// Controlador para crear una encuesta
export const createSurvey = async (req: Request, res: Response) => {
  const { title, questions } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO surveys (title, questions) VALUES ($1, $2) RETURNING *',
      [title, JSON.stringify(questions)]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error creating survey' });
  }
};

// Controlador para obtener todas las encuestas
export const getSurveys = async (_req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM surveys');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching surveys' });
  }
};

// Controlador para enviar una respuesta
export const submitResponse = async (req: Request, res: Response) => {
  const { surveyId, answers } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO responses (survey_id, answers) VALUES ($1, $2) RETURNING *',
      [surveyId, JSON.stringify(answers)]
    );

    // Guardar respuesta en Firestore (para estadísticas en tiempo real)
    const surveyRef = db.collection('surveys').doc(surveyId);
    await surveyRef.collection('responses').add({ answers });

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error submitting response' });
  }
};
