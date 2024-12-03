const mongoose = require('mongoose');
require('dotenv').config('../.env');

mongoose.connect(`mongodb+srv://ayushkumar142002:${process.env.PASS}@cluster0.z55dd.mongodb.net/OneProfile`);

