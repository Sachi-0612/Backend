require('dotenv').config()
const express = require('express')

const app = express()

const githubResp = {
  "login": "Sachi-0612",
  "id": 218564883,
  "node_id": "U_kgDODQcJEw",
  "avatar_url": "https://avatars.githubusercontent.com/u/218564883?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Sachi-0612",
  "html_url": "https://github.com/Sachi-0612",
  "followers_url": "https://api.github.com/users/Sachi-0612/followers",
  "following_url": "https://api.github.com/users/Sachi-0612/following{/other_user}",
  "gists_url": "https://api.github.com/users/Sachi-0612/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Sachi-0612/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Sachi-0612/subscriptions",
  "organizations_url": "https://api.github.com/users/Sachi-0612/orgs",
  "repos_url": "https://api.github.com/users/Sachi-0612/repos",
  "events_url": "https://api.github.com/users/Sachi-0612/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Sachi-0612/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Sachikaur_Sidhu",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-06-30T07:41:04Z",
  "updated_at": "2025-09-02T14:11:53Z"
}

app.get('/', (req, res) => {
    res.json(githubResp);
})

const port = 4000 

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Please login</h1>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${port}`)
})


