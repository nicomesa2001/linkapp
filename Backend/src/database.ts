import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'surveys',
  password: 'mysecretpassword',
  port: 5432,
});

// Crear tablas si no existen
const createTables = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS surveys (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255),
      questions JSONB
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS responses (
      id SERIAL PRIMARY KEY,
      survey_id INT REFERENCES surveys(id),
      answers JSONB
    );
  `);
};

createTables().catch((err) => console.error(err));

export default pool;
