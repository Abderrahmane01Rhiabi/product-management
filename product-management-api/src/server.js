require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const connectDB = require('./config/database');
const productRoutes = require('./routes/productRoutes');
const Product = require('./models/Product');
const authRoutes = require('./routes/authRoutes');

const app = express();
const server = http.createServer(app);

const corsOptions = {
  origin: ['https://product-management-frontend-9g95k7b6v.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

const io = socketIo(server, {
  cors: corsOptions
});

console.log("Server starting...");

app.use(express.json());


console.log("test");

// mongoose connection
connectDB();

// routes
app.use('/products', productRoutes);
//app.use('/api/auth', authRoutes);


// socket io
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);
  socket.on('error', (error) => console.error('Socket error:', error));
  socket.on('disconnect', (reason) => console.log('Client disconnected:', reason));
});

app.set('io', io);

// initialisation donnees
const initialProducts = [
  { name: "AC1 Phone1", type: "phone", price: 200.05, rating: 3.8, warranty_years: 1, available: true },
  { name: "AC2 Phone2", type: "phone", price: 147.21, rating: 1, warranty_years: 3, available: false },
  { name: "AC3 Phone3", type: "phone", price: 150, rating: 2, warranty_years: 1, available: true },
  { name: "AC4 Phone4", type: "phone", price: 50.20, rating: 3, warranty_years: 2, available: true }
];

const populateInitialData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(initialProducts);
    console.log('Initial data populated successfully');
  } catch (error) {
    console.error('Error populating initial data:', error);
  }
};

populateInitialData();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));