import React, { useEffect } from "react";
import axios from "axios";

export default function Feed() {
    const [posts, setPosts] = React.useState([
        {
            _id: "1",
            Image: "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=808&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption: "Scubaa...",
        }
    ]);

    useEffect(() => {

        axios.get("http://localhost:3000/post")
            .then((res)=>{
                    console.log(res.data)
                    setPosts(res.data.post)
            })

    }, [])

    return (
        <section className="feed-section">
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} className="post-card">
                        <img
                            src={post.Image}
                            alt="Post"
                            className="post-image"
                        />
                        <p>{post.caption}</p>
                    </div>
                ))
            ) : (
                <p>No posts available.</p>
            )}
        </section>
    );
}