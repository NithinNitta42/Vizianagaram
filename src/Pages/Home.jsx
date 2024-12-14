import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cmImage from "../assets/cm.jpg";
import collectorImage from "../assets/vzm-collector.jpeg";
import Background from "../Components/Background/Background.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Hero from "../Components/Hero/Hero.jsx";
import Map from '../Components/MapSection/Map.jsx';
import "../Styles/Home.css";
function Home(){
    const heroData = [
        { text1: "Mana", text2: "Vizianagaram" },
        { text1: "Thatipudi", text2: "Reservoir" },
        { text1: "Pedda", text2: "Cheruvu" },
      ];
    
      const [heroCount, setHeroCount] = useState(0);
      const [playStatus, setPlayStatus] = useState(false);
      const [activeTab, setActiveTab] = useState("notifications"); // Added activeTab state
    
      const profiles = [
        {
          image: cmImage,
          name: "Sri Nara Chandrababu Naidu",
          title: "Hon'ble Chief Minister, Andhra Pradesh",
          alt: "Chief Minister",
        },
        {
          image: collectorImage,
          name: "Dr. B.R. Ambedkar I.A.S.",
          title: "Collector & District Magistrate",
          alt: "District Magistrate",
        },
      ];
    
      useEffect(() => {
        const interval = setInterval(() => {
          setHeroCount((count) => (count === 2 ? 0 : count + 1));
        }, 5000);
    
        return () => clearInterval(interval); // Cleanup interval on unmount
      }, []);
  return (
    <>
    <div className="hello">
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        />
      </div>
      <div className="App">
        <div className="container">
          <div className="notifications-section">
            <div className="tabs">
              <span
                className={activeTab === "notifications" ? "active-tab" : ""}
                onClick={() => setActiveTab("notifications")}
              >
                NOTIFICATIONS
              </span>
              <span
                className={activeTab === "news" ? "active-tab" : ""}
                onClick={() => setActiveTab("news")}
              >
                NEWS AND UPDATES
              </span>
              <span
                className={activeTab === "events" ? "active-tab" : ""}
                onClick={() => setActiveTab("events")}
              >
                EVENTS
              </span>
            </div>

            {/* Conditional rendering of tab content */}
            <div>
              {activeTab === "notifications" && (
                <ul className="notifications">
                  <p>No new updates at the moment.</p>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li></li>
                </ul>
              )}

              {activeTab === "news" && (
                <div className="news">
                  <p>No new updates at the moment.</p>
                </div>
              )}

              {activeTab === "events" && (
                <div className="events">
                  <p>No upcoming events currently listed.</p>
                </div>
              )}
            </div>

            <button className="view-more">View More</button>
          </div>

          <div className="district-info">
            <h2>District at a Glance</h2>
            <ul>
              <li>
                <strong>Area:</strong> 4124 sq km
              </li>
              <li>
                <strong>Population:</strong> 19.30 lakhs
              </li>
              <li>
                <strong>Literacy Rate:</strong> 53.21%
              </li>
              <li>
                <strong>Revenue Divisions:</strong> 3
              </li>
              <li>
                <strong>Mandals:</strong> 27
              </li>
              <li>
                <strong>Gram Panchayats:</strong> 777
              </li>
              <li>
                <strong>Villages:</strong> 982
              </li>
              <li>
                <strong>Municipal Corporation:</strong> 1
              </li>
              <li>
                <strong>Municipality:</strong> 1
              </li>
              <li>
                <strong>Nagar Panchayats:</strong> 2
              </li>
            </ul>
          </div>

          <div className="profiles">
            {profiles.map((profile, index) => (
              <div className="profile-card" key={index}>
                <img src={profile.image} alt={profile.alt} className="profile-image" />
                <h3>{profile.name}</h3>
                <p>{profile.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Map-about">
      <Map/>
      <div className="about-para">
        <h1>About Vizianagaram</h1>
        <p>Vizianagaram is a treasure trove of history and natural beauty. In the North, the majestic Bobbili Fort echoes tales of valor, while the South boasts the tranquil Pusapatirega Beach. The East is home to the ancient Ramatheertham Temples, rich in spirituality, and the West features the refreshing Kumili Waterfalls. Together, they offer a perfect blend of history, serenity, and heritage in every direction.</p>
        <button><Link to='/about'>View More</Link></button>
      </div>
      </div>
      <Footer />
      </>
  );
}
export default Home;