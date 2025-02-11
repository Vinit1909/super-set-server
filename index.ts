import express from 'express';
import path from 'path';
import userProfileRoutes from './routes/userProfileRoutes';
import userGameDataRoutes from './routes/userGameDataRoutes';
import gameProfileRoutes from './routes/gameProfileRoutes';
import authRoutes from './routes/authRoutes';
import cors from 'cors'; // Importing cors
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

app.use(express.json()); // For parsing JSON request bodies

// Enable CORS for all origins with specific methods and headers
// app.use(cors({
//   allowedHeaders: 'Content-Type,Authorization'
// }));

app.use(cors({
  origin: '*',  // Or restrict it to your frontend domain
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Routes
app.use(authRoutes);
app.use('/', userProfileRoutes);
app.use('/', userGameDataRoutes);
app.use('/', gameProfileRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api', (req, res) => {
  res.json({ msg: 'Hello world' });
});

// Start server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
