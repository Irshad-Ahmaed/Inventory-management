import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import dotenv from 'dotenv'

// Import Routes
import dashboardRoutes from  './routes/dashboardRoutes'
import productRoutes from  './routes/productRoutes'


// Configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));  

// Routes

app.use("/dashboard", dashboardRoutes); // http://localhost:8000/dashboard
app.use("/products", productRoutes);  // http://localhost:8000/products

// Server

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
})