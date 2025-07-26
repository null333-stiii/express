var express = require('express');
var router = express.Router();
const cors = require('cors'); // corsミドルウェアを追加
require('dotenv').config();

// 接続情報を設定
const{ MongoClient } = require( "mongodb" );
<<<<<<< HEAD
const uri = process.env.MONGODB_URI;
=======
const uri = "mongodb+srv://<id>:<pass>@cluster0.nayi83i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
>>>>>>> b45a49a24ba67c34685e9a354fc5f443d538ea9a
const client = new MongoClient(uri);

router.get('/', async(req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');

// idが１のドキュメントを取得
const query = { id:2};
const note = await notes.findOne(query);

res.json(note);
})

module.exports= router;
