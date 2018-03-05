import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/components/App.jsx';

const AppExpress = express();

AppExpress.get('/', (req,res) => {
	AppExpress.send('<h1>ok</h1>');
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});