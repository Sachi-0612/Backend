import express from 'express'

const app = express();

app.get('/', (req, res)=>{
    res.send('server is ready');
})

app.get('/api/jokes', (req, res)=>{
     
  const jokes= [
    {
      "id": 1,
      "setup": "Why don't scientists trust atoms?",
      "punchline": "Because they make up everything!"
    },
    {
      "id": 2,
      "setup": "What do you call a fake noodle?",
      "punchline": "An impasta."
    },
    {
      "id": 3,
      "setup": "Why did the scarecrow win an award?",
      "punchline": "Because he was outstanding in his field."
    }
  ] 
res.json(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at htps://localhost:${port}`)
});