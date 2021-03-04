import React from "react";
import "./PersonalPage.css";

const PersonalPage = () => {
  return (
    <>
      <h1 className="text-center">Personal Favorites</h1>
      <div className="parent-movie">
        <div className="individual-movie">
          <p>Blade Runner 2049</p>
          <img
            alt="BladeRunner"
            src="https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png"
          ></img>
        </div>
        <div className="individual-movie">
          <p>Get Out</p>
          <img
            alt="GetOut"
            src="https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png"
          ></img>
        </div>
        <div className="individual-movie">
          <p>The Shining</p>
          <img
            alt="TheShining"
            src="https://upload.wikimedia.org/wikipedia/en/1/1d/The_Shining_%281980%29_U.K._release_poster_-_The_tide_of_terror_that_swept_America_IS_HERE.jpg"
          ></img>
        </div>
        <div className="individual-movie">
          <p>Moonlight</p>
          <img
            alt="Moonlight"
            src="https://upload.wikimedia.org/wikipedia/en/8/84/Moonlight_%282016_film%29.png"
          ></img>
        </div>
        <div className="individual-movie">
          <p>Parasite</p>
          <img
            alt="Parasite"
            src="https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png"
          ></img>
        </div>
        <div className="individual-movie">
          <p>Rushmore</p>
          <img
            alt="Rushmore"
            src="https://upload.wikimedia.org/wikipedia/en/4/42/Rushmoreposter.png"
          ></img>
        </div>
        <div className="individual-movie">
          <p>Django Unchained</p>
          <img
            alt="Django"
            src="https://upload.wikimedia.org/wikipedia/en/8/8b/Django_Unchained_Poster.jpg"
          ></img>
        </div>
        <div className="individual-movie">
          <p>Whiplash</p>
          <img
            alt="Whiplash"
            src="https://upload.wikimedia.org/wikipedia/en/0/01/Whiplash_poster.jpg"
          ></img>
        </div>
        <div className="individual-movie">
          <p>Perks of Being A Wallflower</p>
          <img
            alt="Perks"
            src="https://upload.wikimedia.org/wikipedia/en/0/0b/The_Perks_of_Being_a_Wallflower_Poster.jpg"
          ></img>
        </div>
        <div className="individual-movie">
          <p>Hereditary</p>
          <img
            alt="Hereditary"
            src="https://upload.wikimedia.org/wikipedia/en/d/d9/Hereditary.png"
          ></img>
        </div>
      </div>
    </>
  );
};

export default PersonalPage;
