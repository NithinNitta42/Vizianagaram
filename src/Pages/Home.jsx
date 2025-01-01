import React, { useEffect, useState } from "react";
import cmImage from "../assets/cm.jpg";
import collectorImage from "../assets/vzm-collector.jpeg";
import Background from "../Components/Background/Background.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Hero from "../Components/Hero/Hero.jsx";
import Map from '../Components/MapSection/Map.jsx';
import "../Styles/Home.css";

function Home() {
  const heroData = [
    { text1: "Rama", text2: "Narayanam" },
    { text1: "Thatipudi", text2: "Reservoir" },
    { text1: "Pedda", text2: "Cheruvu" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  const [activeTab, setActiveTab] = useState("notifications");
  const [scrolled, setScrolled] = useState(false);

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

    return () => clearInterval(interval);
  }, []);

  // Scroll effect to apply class dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`hello ${scrolled ? "scrolled" : ""}`}>
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
        <Map />
      </div>
      <Footer />
    </>
  );
}

export default Home;
