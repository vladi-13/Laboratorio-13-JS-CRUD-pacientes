const express = require('express');
const morgan = require('morgan');
const { sequelize } = require('./models');
const medicoRouter = require('./routes/medico');
const consultorioRouter = require('./routes/consultorio');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/medicos', medicoRouter);
app.use('/consultorios', consultorioRouter);

// Sync database and start server
const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = app;
