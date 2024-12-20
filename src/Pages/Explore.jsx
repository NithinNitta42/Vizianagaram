import { MapPin, ShoppingBag, Utensils } from 'lucide-react';
import React, { useState } from 'react';
import rp1 from "../assets/restuarents/panchavathi1.jpg";
import rp2 from "../assets/restuarents/panchavathi2.jpg";
import rp3 from "../assets/restuarents/panchavathi3.png";
import rp4 from "../assets/restuarents/panchavathi4.png";
import rp5 from "../assets/restuarents/panchavathi5.jpg";

import rd4 from "../assets/restuarents/daksha1.JPG";
import rd1 from "../assets/restuarents/daksha2.jpg";
import rd2 from "../assets/restuarents/daksha3.jpg";
import rd5 from "../assets/restuarents/daksha4.JPG";
import rd3 from "../assets/restuarents/daksha5.jpg";

import rm1 from "../assets/restuarents/mandicroods1.jpg";
import rm2 from "../assets/restuarents/mandicroods2.jpg";
import rm3 from "../assets/restuarents/mandicroods3.jpg";
import rm4 from "../assets/restuarents/mandicroods4.jpg";
import rm5 from "../assets/restuarents/mandicroods5.jpg";


import R14 from "../assets/andra.webp";
import R12 from "../assets/bobbilifort.webp";
import R5 from "../assets/bobwar.jpg";
import R13 from "../assets/chinthapalli.jpg";
import R3 from "../assets/explore3.jpg";
import R9 from "../assets/gurajada-home.jpg";
import R10 from "../assets/Gurubhakta Konda.jpg";
import R1 from "../assets/image1.jpg";
import R2 from "../assets/image2.jpg";
import R8 from "../assets/rajagopal.jpg";
import R11 from "../assets/ramatheertham.jpg";
import R15 from "../assets/saripalli.webp";
import cmr1 from "../assets/shopping malls/cmr1.JPG";
import cmr2 from "../assets/shopping malls/cmr2.JPG";
import cmr3 from "../assets/shopping malls/cmr3.JPG";
import cmr4 from "../assets/shopping malls/cmr4.JPG";
import cmr5 from "../assets/shopping malls/cmr5.JPG";
import K1 from "../assets/shopping malls/krishna1.jpg";
import K2 from "../assets/shopping malls/krishna2.jpg";
import K3 from "../assets/shopping malls/krishna3.jpg";
import K4 from "../assets/shopping malls/krishna4.png";
import K5 from "../assets/shopping malls/krishna5.jpg";
import S1 from "../assets/shopping malls/S11.png";
import S2 from "../assets/shopping malls/S12.JPG";
import S3 from "../assets/shopping malls/S13.jpg";
import S4 from "../assets/shopping malls/S14.JPG";
import S5 from "../assets/shopping malls/S15.JPG";
import T1 from "../assets/shopping malls/trends1.jpg";
import T2 from "../assets/shopping malls/trends2.jpg";
import T3 from "../assets/shopping malls/trends3.jpg";
import T4 from "../assets/shopping malls/trends4.jpg";
import T5 from "../assets/shopping malls/trends5.jpg";
import R7 from "../assets/veena.jpeg";
import R6 from "../assets/venugopalswamy.jpg";
import R4 from "../assets/vzmfort.jpg";
import Restcard from '../Components/ExploreFolder/Restcard.jsx';
import ShopCard from '../Components/ExploreFolder/ShopCard';
import '../Styles/explore.css';
const touristPlaces = [
  {
    name: "Rama Narayanam",
    image: R1,
    description: "Ramanarayanam is a bow-and-arrow-shaped spiritual complex dedicated to narrating the epic Ramayana through art and architecture."
    
  },
  {
    name: "Thatipudi Reservoir",
    image: R2,
    description: "Explore the scenic Thatipudi Dam and Gosthani Sarovar Vihar for serene boat rides, hilltop views, and a tranquil getaway amidst nature."
  },
  {
    name: "Pydithalli Ammavari Temple",
    image: R3,
    description: "Visit the historic Sri Pydithalli Ammavari Temple in Vizianagaram, a spiritual site from the 18th century, steeped in the legacy of the Gajapati dynasty and the storied Bobbili battle of 1756."
  },
  {
    name: "Vizianagaram fort",
    image: R4,
    description: "Discover the grandeur of Vizianagaram Fort, a majestic 18th-century structure symbolizing the rich heritage of the Gajapati dynasty, located in the heart of Vizianagaram."
  },
  {
    name: "Bobbili War Memorial",
    image: R5,
    description: "Visit the Bobbili War Memorial, a historic monument commemorating the valiant warriors of the 1757 Bobbili Battle, showcasing tales of bravery and sacrifice."
  },
  {
    name: "Venu Gopala Swamy Temple",
    image: R6,
    description: "Explore the serene Venu Gopala Swamy Temple in Vizianagaram, a sacred site dedicated to Lord Krishna, known for its beautiful architecture and spiritual ambiance."
  },
  {
    name: "Bobbili Veena Artisans",
    image: R7,
    description: "Discover the artistry of Bobbili Veena artisans, renowned for crafting the traditional, melodious string instrument that embodies centuries of musical heritage and craftsmanship."
  },
  {
    name: "Mannar Rajagopal Swamy Temple",
    image: R8,
    description: "Visit the historic Mannar Rajagopal Swamy Temple in Vizianagaram, a centuries-old shrine dedicated to Lord Krishna, celebrated for its spiritual significance and architectural beauty."
  },
  {
    name: "Gurajada Apparao Residence",
    image: R9,
    description: "Explore the Gurajada Apparao Residence in Vizianagaram, the historic home of the renowned Telugu playwright and social reformer, showcasing the legacy of his contributions to literature and culture."
  },
  {
    name: "Gurubhakta Konda",
    image: R10,
    description: "Visit Gurubhakta Konda, a serene hillock near Vizianagaram, known for its spiritual significance and stunning views, making it a popular spot for pilgrims and nature enthusiasts alike."
  },
  {
    name: "Ramatheertam",
    image: R11,
    description: "Ramatheertam, located near Vizianagaram, is a scenic and spiritual destination, known for its ancient temple dedicated to Lord Rama, set amidst lush greenery and serene landscapes."
  },
  {
    name: "Bobbili Fort",
    image: R12,
    description: "Discover the historic Bobbili Fort, a symbol of courage and resilience, showcasing the rich heritage and architectural brilliance of the Bobbili dynasty."
  },
  {
    name: "Chinthapalli Beach",
    image: R13,
    description: "Relax at Chinthapalli Beach near Vizianagaram, a tranquil coastal retreat offering pristine sands, gentle waves, and breathtaking sunsets, perfect for a serene getaway."
  },
  {
    name: "Andra Reservoir",
    image: R14,
    description: "Visit the serene Andra Reservoir near Vizianagaram, a picturesque spot surrounded by lush greenery, ideal for picnics, birdwatching, and a peaceful escape into nature."
  },
  {
    name: "Saripalli",
    image: R15,
    description: "Explore Saripalli, a historic village near Vizianagaram, home to the ancient Sri Dibbeswara Swamy Temple, renowned for its intricate architecture and spiritual significance."
  }
];
 export const shopping=[
  {
      name: "1.CMR Shopping Mall",
      description: "CMR Shopping Mall in Vizianagaram, located near Venkata Lakshmi Theatre, offers a wide range of jewelry, clothing, and accessories, catering to traditional and modern tastes. It frequently hosts events and promotions, enhancing the shopping experience.",
      address: "Station Road, Vizianagaram, Andhra Pradesh 535003",
      images: [
        cmr1,cmr2,cmr3,cmr4,cmr5
      ],
      facilities: ["Jewelry Stores", "Clothing Stores", "Accessories", "Parking"],
      mapLink:"https://www.google.com/maps/place/CMR+Shopping+Mall/@18.1181177,83.378444,14.53z/data=!3m1!5s0x3a3be566fb1e08b1:0x3c9ff9d6ee9e93fd!4m6!3m5!1s0x3a3be59dfc9425d5:0x25afcaf32262d94b!8m2!3d18.1165174!4d83.3972948!16s%2Fg%2F11s3p_24kq?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "2.South India Shopping Mall",
      description: "South India Shopping Mall in Vizianagaram, inaugurated on December 2, 2022, offers a variety of clothing, jewelry, and accessories for men, women, and children. It provides both in-store and online shopping options, including WhatsApp and video call services.",
      address: "Poolbagh Road, Vizianagaram, Andhra Pradesh 535003",
      images: [
        S1,S2,S3,S4,S5
      ],
      facilities: ["Clothing Stores", "Jewelry Stores", "Accessorie", "Parking"],
      mapLink:"https://www.google.com/maps/place/South+India+Shopping+Mall+Textile+%26+Jewellery+-+Vizianagaram/@18.1177382,83.332725,12z/data=!4m6!3m5!1s0x3a3be5e37d621d6b:0x23709c134e2306f5!8m2!3d18.1177557!4d83.4151267!16s%2Fg%2F11sbhmrpg9?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "3.Krishna Shopping Mall",
      description: "Krishna Shopping Mall in Vizianagaram is a prominent retail destination offering a variety of products and services.",
      address: "Complex Road, Vizianagaram, Andhra Pradesh 535003",
      images: [
        K1,K2,K3,K4,K5
      ],
      facilities: ["Clothing Stores", "Jewelry Stores", "Accessorie", "Parking"],
      mapLink:"https://www.google.com/maps/place/Krishna+Shopping+Mall/@18.1079823,83.3978724,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3be59dc1bd1c39:0x195bee3d321e582f!8m2!3d18.1079823!4d83.4004473!16s%2Fg%2F11l5q6m30s?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "4.Trends",
      description: "In Vizianagaram, Reliance Trends and Green Trends are popular for the latest fashion and beauty services. PVK Trends offers stylish imported sweaters at affordable prices.",
      address: "opposite RTC Complex, Vizianagaram, Andhra Pradesh 535003",
      images: [
        T1,T2,T3,T4,T5
      ],
      facilities: ["Clothing for All", "Accessories", "Shopping Experience", "Latest Collections"],
      mapLink:"https://www.google.com/maps/place/TRENDS/@18.107458,83.3962167,17z/data=!3m2!4b1!5s0x3a3be5698b4fafb1:0xf15332d2b4eaaae!4m6!3m5!1s0x3a3be569bf09ce0d:0xaeb9a84650e7ae4f!8m2!3d18.107458!4d83.3987916!16s%2Fg%2F11f_1j1ns_?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
    },
    
]

export const restaurants=[
  {
      name: "1.Panchavathi",
      description: "Panchavati Restaurant in Vizianagaram is a family-style dining establishment offering a variety of cuisines, including South Indian, North Indian, Chinese, and Biryani dishes.",
      address: "Near RTO Office, K.L. Puram, Vizianagaram, Andhra Pradesh 535003",
      images: [
        rp1,rp2,rp3,rp4,rp5
      ],
      facilities: ["Family-friendly environment", "Variety of vegetarian and non-vegetarian dishes", "Online ordering and delivery services"],
      mapLink:"https://www.google.com/maps/place/Panchavati+Restaurant/@18.1353535,83.3855479,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3bef7170000001:0xb7b71d6fa1b9288!8m2!3d18.1353535!4d83.3881228!16s%2Fg%2F11dxrtq2f5?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "2.Daksha",
      description: "Daksha is a well-regarded restaurant in Vizianagaram, Andhra Pradesh, known for its diverse menu and quality service.",
      address: "Opposite LIC Office, Kondapalli Grand, Vizianagaram 535001",
      images: [
         rd1,rd2,rd3,rd4,rd5
      ],
      facilities: ["Accepts credit cards", "Delivery services", "Free off-street parking", "Free Wi-Fi"],
      mapLink:"https://www.google.com/maps/place/DAKSHA+Vizianagaram/@18.109008,83.4000493,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3be5424af81767:0x298760a7a5123c75!8m2!3d18.109008!4d83.4026242!16s%2Fg%2F11fy4mgtd7?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "3.Mandi Croods",
      description: "Mandi Croods is a popular Arabic restaurant in Vizianagaram, Andhra Pradesh, known for its authentic Arabian cuisine and grilled specialties.",
      address: "Kota Junction, Vizianagaram, Andhra Pradesh 535001",
      images: [
        rm1,rm2,rm3,rm4,rm5
      ],
      facilities: ["Arabian", "Grilled Starters", "Tandoori Dishes", "Mandi Specials"],
      mapLink:"https://www.google.com/maps/place/Mandi+Croods/@18.1117876,83.4097854,16.78z/data=!4m6!3m5!1s0x3a3be55d51ba97ef:0x109ebbb24b15a54f!8m2!3d18.1124426!4d83.4127427!16s%2Fg%2F11ncgz1c9k?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
    }
    
]

function Explore() {
  const [activeSection, setActiveSection] = useState("explore");

  const renderContent = () => {
    switch (activeSection) {
      case 'explore':
        return (
          <div className="places-grid">
            {touristPlaces.map((place) => (
              <div key={place.name} className="place-card">
                <img src={place.image} alt={place.name} />
                <div className="place-info">
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'shopping':
        return (
          <div className="py-16">
            <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="h-[400px]">
                {shopping.map((item, index) => (
                  <ShopCard key={index} {...item} />
                ))}
              </div>
            </main>
          </div>
        );
      ;
      case 'restaurants':
        return (
          <div className="py-16">
            <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="h-[400px]">
                {restaurants.map((item, index) => (
                  <Restcard key={index} {...item} />
                ))}
              </div>
            </main>
          </div>
        );
      ;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <div className="hero-section">
        <img src={R13} alt='chintappaly' className='image-section'/>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to Vizianagaram</h1>
            <p>
            "Where History, Serenity, and Heritage Await in Every Direction!"
            </p>
          </div>
        </div>
      </div>

      <div className="nav-container">
        <div className="nav-buttons">
          <button
            onClick={() => setActiveSection('explore')}
            className={`nav-button ${activeSection === 'explore' ? 'active' : ''}`}
          >
            <MapPin className="nav-icon" />
            <span>Explore</span>
          </button>

          <button
            onClick={() => setActiveSection('shopping')}
            className={`nav-button ${activeSection === 'shopping' ? 'active' : ''}`}
          >
            <ShoppingBag className="nav-icon" />
            <span>Shopping</span>
          </button>

          <button
            onClick={() => setActiveSection('restaurants')}
            className={`nav-button ${activeSection === 'restaurants' ? 'active' : ''}`}
          >
            <Utensils className="nav-icon" />
            <span>Restaurants</span>
          </button>
        </div>
      </div>

      <div className="content-section">
        {renderContent()}
      </div>
    </div>
  );
}

export default Explore;