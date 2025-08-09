const express = require('express');
const app = express();
const connectDB = require('./config/db');
const bugRoutes = require('./routes/bugRoutes');
const cors = require('cors');

connectDB();
app.use(cors());
app.use(express.json());
app.use('/api', bugRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




