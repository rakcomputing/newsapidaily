import React from "react";
import "./PostCard.css";
import { SlLike } from "react-icons/sl";
import { CiShare2 } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";

const PostCard = ({ post = {} }) => {
  console.log("this is post property: ", post);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="post-avatar">
          <img
            src="https://avatars.design/wp-content/uploads/2022/09/3business-team-employee-personal-avatar.png"
            alt="User Avatar"
            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
          />
        </div>
        <div>
          <div className="post-user">
            <p>{post.source.name || "Unknown User"}</p>
          </div>
          <p>{new Date(post.publishedAt).toLocaleString() || "Just Now"}</p>
        </div>
      </div>
      <p>{truncate(post.title, 80) || "No content available"}</p>
      {post.urlToImage ? (
        <img src={post.urlToImage} alt="Post" className="post-image" />
      ) : (
        <img
          src="https://static.vecteezy.com/system/resources/previews/010/869/739/non_2x/file-management-concept-illustration-modern-concept-of-file-management-system-online-document-storage-service-free-png.png"
          alt="Default"
          className="post-image"
        />
      )}
      <a href={post.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>

      <div
        style={{
          paddingTop: "10px",
          display: "flex",
          alignItems: "center", // Center items vertically
          justifyContent: "center", // Center items horizontally
        }}
      >
        <div className="card-likecommat">
          <a style={{ color: "gray", fontSize: "14px" }}>
            <SlLike /> Like
          </a>
        </div>
        <div className="card-likecommat">
          <a style={{ color: "gray", fontSize: "14px" }}>
            <FaRegCommentDots /> Comment
          </a>
        </div>
        <div className="card-likecommat">
          <a style={{ color: "gray", fontSize: "14px" }}>
            <CiShare2 /> Share
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
