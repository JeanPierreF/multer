/* // server.js
const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/upload_files", uploadFiles);
function uploadFiles(req, res) {
    console.log(req.body);
}
app.listen(5000, () => {
    console.log(`Server started...`);
});

app.post("/upload_files", upload.array("files"), uploadFiles);

function uploadFiles(req, res) {
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
} */

/* const express = require('express');
const multer = require('multer');

const app = express();
const port = 5000;

// Configuration de Multer pour la gestion des fichiers
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Répertoire où les fichiers seront stockés
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nom du fichier
  }
});

const upload = multer({ storage: storage });

// Endpoint pour le téléchargement de fichiers
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('Fichier téléchargé avec succès!');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
}); */

const express = require('express');
const multer = require('multer');

const app = express();
const port = 9000;

// Configuration de Multer pour la gestion des fichiers
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Répertoire où les fichiers seront stockés
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nom du fichier
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Le fichier doit être au format JPEG ou PNG.'), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// Endpoint pour le téléchargement de fichiers
app.post('/upload', upload.single('fileGerard'), (req, res) => {
  res.send('Fichier téléchargé avec succès!');
});

// Gestion des erreurs
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});

