import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post"
// import { profileImg }

// const posts = [
//     {
//         id: "123",
//         username: "sssangha",
//         userImg: "https://links.papareact.com/3ke",
//         img: "https://links.papareact.com/3ke",
//         caption: "This is Dooop!!!",
//     },
//     {
//         id: "123",
//         username: "sssangha",
//         userImg: "https://links.papareact.com/3ke",
//         img: "https://links.papareact.com/3ke",
//         caption: "This is Dooop!!! I am nakanishi wataru!!!! I am a engineer as beginner. This is a Instagram clone!!!!!!!!!!",
//     },
// ];

function Posts() {
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
    //         setPosts(snapshot.docs);
    //     });

    // }, [db])
    // これをリファクタリングすると、、↓

    useEffect(
        () =>
          onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
           (snapshot) => {
            setPosts(snapshot.docs);
            }
           ),
         [db]
        );

    return (
        <div>
            {posts.map((post) => (
                <Post 
                key={post.id}
                id={post.id}
                username={post.data().username}
                userImg={post.data().profileImg}
                img={post.data().image}
                caption={post.data().caption}
                />
            ))}
        </div>
    );
}

export default Posts;