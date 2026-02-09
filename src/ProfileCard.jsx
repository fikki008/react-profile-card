import  { useState } from "react";
import "./ProfileCard.css";
import imageProfile from "./assets/imageProfile.jpg";

function ProfileCard ({name, age, location, followers, likes, photos}) {
  const [isFollowiing, setIsFollowing] = useState(false);

  return(
   <div className="card">
    <div className="card-header">
       <button onClick={
      () => setIsFollowing(!isFollowiing)}>
        {isFollowiing ? "Unfollow" : "Follow"}
      </button>
    </div>
    <img src={imageProfile} alt="Profile" />
    <h1 >{name}, <span>{age}</span></h1>
    <p className="location"><span>{location}</span></p>

    <div className="stats">
      <div>
        <p className="stats-number">{followers}</p>
         <p className="stats-label"><span>Followers</span></p>
      </div>
       <div>
        <p className="stats-number">{likes}</p>
         <p className="stats-label"><span>Likes</span></p>
      </div>
       <div>
        <p className="stats-number">{photos}</p>
        <p className="stats-label"><span>Photos</span></p>
      </div>
    </div>
   
   </div>   
  );
}

export default ProfileCard;