import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './src/routes/contactRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Server Status Check
app.get('/api/status', (req, res) => {
  res.status(200).json({ status: 'active', message: 'Nexus Central Core Online.' });
});

// Routes
app.use('/api', contactRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Malfunction.' });
});

app.listen(PORT, () => {
  console.log(`[SYS_OK] Central Core executing on port: ${PORT}`);
});
