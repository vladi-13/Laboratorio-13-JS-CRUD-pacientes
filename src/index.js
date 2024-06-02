import express from 'express';
import morgan from 'morgan';
import { sequelize } from '../src/database/database.js';
import pacienteRoutes from '../src/routes/paciente.routes.js';

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/paciente', pacienteRoutes);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
