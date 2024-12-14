import React, { useState } from 'react';
import sambara from '../assets/sambara.jpeg';
import sirimanu from '../assets/sirimanotsav.jpeg';
import sirimanujatara from '../assets/sirimanu.jpeg';
import Heading from '../Components/Heading/Heading.jsx';
import ImageWithDescription from '../Components/imageDescription/Imagewithdes.jsx';
import Sidebar from "../Components/Sidebar/sidebar.jsx";
import '../Styles/explore.css';

import alakananda from '../assets/alakanandapalace.jpg';
import bobbilifort from '../assets/bobbilifort.jpg';
import clocktwr from '../assets/gantasthambam.jpeg';
import korukonda from '../assets/korukondapalace.webp';
import oudh from '../assets/oudhkhana.jpg';
import vzmfort from '../assets/vizianagaramfort.jpg';

import chintapalli from '../assets/chintapalli.jpg';
import { default as peddacheruvu, default as tatipudi } from '../assets/peddacheruvu.jpg';

import complex from '../assets/complex.jpg';
import pyditalli from '../assets/pydithalli.jpg';
import railway from '../assets/railway.jpg';
import rajgopal from '../assets/rajgopalswamy.jpeg';
import ramanarayanam from '../assets/Ramanarayanam.jpg';
import ramatheertham from '../assets/ramatheertham.jpg';
import venugopal from '../assets/venugopalswamy.jpg';
// import vizianagaraminfo from '../assets/viziagaraminfo.mp4';
import map from '../assets/vzmaaa.jpg';

const transport = [
  {
     imageSrc: railway,
     title: "RAILWAY",
     description:"Vizianagaram Railway Station, located on the Howrah-Chennai main line and the Jharsuguda-Vizianagaram line, is well-connected to cities like Kolkata, Chennai, Bhubaneswar, and Visakhapatnam via major trains like Coromandel Express and Howrah-Chennai Mail. With five platforms, free Wi-Fi, and modern amenities, it ensures a comfortable travel experience. Nellimarla serves as its satellite station, enhancing accessibility." ,
  },
  {
     imageSrc:complex ,
     title: "ROADWAY",
     description:"The Andhra Pradesh State Road Transport Corporation (APSRTC) plays a pivotal role in the public transportation of Vizianagaram, operating bus services from the Vizianagaram bus station. The city falls under the Vizianagaram zone, which is one of the four operational zones of APSRTC. Additionally, the government actively encourages cycling as an eco-friendly and efficient means of transportation within Vizianagaram. This initiative promotes sustainable mobility and reduces the city's carbon footprint." ,
  },
  {
     imageSrc:map ,
     title: "AIRWAY",
     description:"The nearest airport to Vizianagaram is Visakhapatnam Airport (IATA: VTZ, ICAO: VOTZ), located about 62 km away. It serves as a vital hub for both domestic and international travel. During the 2016-17 fiscal year, the airport witnessed significant growth, handling 2,358,029 passengers, a 30.7% increase compared to the previous year. It also managed 19,550 aircraft movements, comprising 1,421 international flights and 18,129 domestic flights, showcasing its growing importance in regional and global connectivity." ,
  }
]

const info = [
  {
   //  imageSrc: vizianagaraminfo,
     title: "VIZIANAGARAM",
     description: "From Bobbili Fort in the North to Pusapatirega Beach in the South, Ramatheertham Temples in the East to Kumili Waterfalls in the West – Where History, Serenity, and Heritage Await in Every Direction!",
  },
];

const tourist=[
  {
     imageSrc: tatipudi,
     title: "Tatipudi Reservoir",
     description: "The Tatipudi Reservoir, located on the Gosthani River in Andhra Pradesh, serves as a crucial water supply source for Visakhapatnam City. Constructed between 1963 and 1968, the Thatipudi Reservoir Project was designed to irrigate an ayacut of 15,378 acres (62 km²) in the Vizianagaram District and provide drinking water to Visakhapatnam. The project utilizes 3.325 TMCFT of water, with a reservoir storage capacity of approximately 3 TMCFT. It was completed at a cost of ₹1,820 crores, stabilizing irrigation in the Gantyada, S. Kota, and Jami Mandals of Vizianagaram District.",
  },
  {
     imageSrc: chintapalli,
     title: "Chintapalli Beach",
     description: "Chintapalli Beach, located in Konada, Vizianagaram (531213), Andhra Pradesh, is a renowned destination celebrated for its natural beauty and serene atmosphere. This picturesque beach is a popular spot for tourists seeking tranquility and relaxation. The area also boasts nearby resorts, providing visitors with comfortable accommodations and opportunities to unwind. Additionally, Chintapalli Beach is home to diverse wildlife, including bird species such as the purple heron, lesser whistling duck, and black kite, making it an excellent spot for nature and bird enthusiasts.",
  },
  {
     imageSrc: peddacheruvu,
     title: "Pedda Cheruvu",
     description: "Pedda Cheruvu, a historic lake built by the rulers of Domakonda Samsthanam, dates back to 1897, during the reign of the Sixth Nizam, Mir Mahbub Ali Khan. Spanning an area of 618 acres, the lake is sustained by a catchment area of 68.97 sq. km and features a 1.8-km-long bund. This reservoir stands as a testament to the region's rich history and the engineering prowess of its time.",
  },


]

const religious = [
  {
     imageSrc: venugopal,
     title: "Venu Gopala Swamy Temple",
     description: "The Venu Gopala Swamy Temple in Bobbili is a significant religious site for the royal family, who have worshipped Venugopala Swamy since the kingdom's inception. After the devastating war that destroyed much of Bobbili Fort, the royal descendant Chinna Ranga Rao rebuilt the temple to house the ancient idol recovered from the ruins. The temple is located near the royal residence and is the most worshipped in Bobbili. In 1851, Swetha Chalapati Ranga Rao constructed the Gopuram (entrance), which is unique for being taller than the main temple. During festivals, the idols of the deities are paraded, drawing large crowds of devotees. The temple remains a symbol of the region's deep religious and historical heritage.",
  },
  {
     imageSrc: rajgopal,
     title: "Rajagopal Swamy Temple",
     description: "The Sri Mannar Rajagopal Swamy Temple, believed to be over 800 years old, is a significant religious site in the region. Also known as the Santhaana Gopala Swamy, Kotha Kovela, or Venugopala Swamy Temple, it is said to have been constructed under the guidance of Sri Bhagavath Ramanujacharya (1017-1137 AD). The temple is particularly popular among devotees seeking to fulfill their wishes. Its annual Kalyanotsavam is a five-day festival, attracting many visitors. This temple is the only one in the region where rituals are performed following the Pancha Raatra Agama, a Vaishnava tradition. Located just 2 km from the Vizianagaram Railway Station, it is easily accessible for pilgrims.",
  },
  {
     imageSrc: pyditalli,
     title: "Pydithalli Temple",
     description: "The Sri Pydithalli Ammavari Temple in Vizianagaram is an ancient temple dedicated to Pydithalli Ammavaru, believed to have been built in the 18th century. The temple's main festival, Sirimanu or Srimanthotsavam, is celebrated annually in September or October, attracting around 2-3 lakh pilgrims. According to legend, Pydimamba, the sister of King Vijaya Rama Raju, was from the Gajapati dynasty. After the Bobbili Battle in 1757, where the king was killed, Pydimamba died from shock. Before her death, she instructed a soldier, Patiwada Appala Naidu, in a dream to find her statue by a lake and build a temple. The temple was then constructed near Pedda Cheruvu.",
  },
  {
     imageSrc: ramanarayanam,
     title: "Ramanarayanam Temple",
     description: "Ramanarayanam, located on Korukonda Road in Vizianagaram, is a temple built by the NCS Charitable Trust over a 15-acre area based on the Ramayana. The temple's unique design resembles a bow and arrow. It has become a major tourism hub for the Uttarandhra region, attracting over 2.4 million visitors within 18 months of its establishment. The temple is open daily from 9 AM to 9 PM, with a special Laser Show on Lord Hanuman starting at 6 PM each evening. It is located about 6 km from Vizianagaram town.",
  },
  {
     imageSrc: ramatheertham,
     title: "Ramatheertham Temple",
     description: "Ramateertham is a sacred site associated with Lord Sree Rama, located at the base of a rocky hill with perennial springs. The area is historically significant, with remains of Jain residences, including caves with slab sculptures and ruined brick temples. It is one of the few places with Jain remains in the region. In addition, the site holds Buddhist remains, previously unidentified, which were discovered through excavations revealing a large and important Buddhist monastery. The remains include piles of broken bricks and cut stones on an inaccessible hill.",
  },

]

const historical = [
  {
     imageSrc: vzmfort,
     title: "Vizianagaram Fort",
     description: "Vijayarama Raju-I laid the foundation of Vizianagaram Fort in 1713 A.D. on Vijaya Dashmi. The Victory Arch, the fort's original entrance, features a temple to Lord Hanuman and Goddess Lakshmi, also known as Kota Shakti, the fort's guardian. The East Gate is the main entrance, with Nagaar Khana atop it, used for announcing royal edicts and alerting guests. The West Gate, built in Rajasthani style, connects to the Pedda Cheruvu and royal tombs, serving as the rear exit for cremation rites. The fort was surrounded by a moat, and the area has been developed into a park with gardens and lawns.",
  },
  {
     imageSrc: clocktwr,
     title: "Ganta sthambham",
     description: "Ganta Stambham, also known as the Clock Tower, was built in 1885 by the Rajas of Vizianagaram, who were inspired by the Big Ben in London. Located just outside the fort within the heart of the city, the octagonal tower is made of sandstone and stands at a height of 68 feet (21 meters). Constructed at a cost of just Rs. 5,400, it was originally painted white at the top, but is now painted cream and red. The tower remains a prominent landmark in the city.",
  },
  {
     imageSrc: alakananda,
     title: "Alakananda Palace",
     description: "The Alaknanda Palace was built in 1857 for the royal guests. This opulent palace provided its occupants with all comforts of life in the lap of natural and man-made beauty. The area around the palace is well laid out with walkways and gardens. A runway, built in the grounds, enabled the royal visitors to alight straight from their aircraft into the palace. At present, the Alaknanda Palace is used as the headquarters of the 5th Battalion of the Andhra Pradesh Armed Reserve Police.",
  },
  {
     imageSrc: oudh,
     title: "Oudh khana",
     description: "The Oudh Khana is a tower constructed in 1876-77 by Maharaja Vijaya Rama Raju III. It is present in present-day Phool Bagh, Vizianagaram. A unique part of this palace is an exclusive bathroom of the Rajas( i.e for Maharajah to bathe. ), which is an octagonal stone structure that adjoins the Phool Bagh Palace. The structure is 50 feet (15 m) in height built with stones and has a spiral stairway which leads to the water tank at the top that is fed by pumping water from a nearby well.It offers a glimpse into the fascinating style in which the royalty of Vizianagaram lived. It is an octagonal stone structure, which stands adjacent to the Phool Bagh Palace.",
  },
  {
     imageSrc: korukonda,
     title: "Korukonda palace",
     description: "A little further away from Alakananda palace,  the Korukonda Palace stands majestically amidst open playgrounds and well-laid gardens. The Palace and the surrounding 1,000 acres of land have been developed into a premier educational institution by the Indian Navy, which runs a school for children aspiring to join the armed forces.",
  },
  {
     imageSrc: bobbilifort,
     title: "Bobbili Fort",
     description:"The Oudh Khana is a tower constructed in 1876-77 by Maharaja Vijaya Rama Raju III. It is present in present-day Phool Bagh, Vizianagaram. A unique part of this palace is an exclusive bathroom of the Rajas( i.e for Maharajah to bathe. ), which is an octagonal stone structure that adjoins the Phool Bagh Palace. The structure is 50 feet (15 m) in height built with stones and has a spiral stairway which leads to the water tank at the top that is fed by pumping water from a nearby well.It offers a glimpse into the fascinating style in which the royalty of Vizianagaram lived. It is an octagonal stone structure, which stands adjacent to the Phool Bagh Palace."
  }

]

const festival = [
  {
     imageSrc: sirimanujatara,
     title: "Sirimanotsavam",
     description: "Every year on the first Tuesday passing Vijayadasami Sirimanu Utsav is being celebrated. Sirimanu means a big tree. It is known that before 15 days of Sirimanu Utsav goddess Pydimamba will come in the dream of temple Pujari and tell him where the Sirimanu for this year is located. Pujari will go in search of sirimanu and will cut the sirimanu with performing puja etc.",
  },
  {
     imageSrc: sirimanu,
     title: "Sirimanu",
     description: "That sirimanu can be located any where. The owner must agree to cut his tree for Utsav. That tree will be shaped neatly in to Sirimanu and will be placed over the chariot. This sirimanu will be brought to 3 Lanters junction around 2 PM in the afternoon. At around temple Pujari will make darshan of Goddess and will sit on the Sirimanu chariot. This sirimanu will move 3 times to Vizianagaram fort and temple between 3 PM to 4 PM. The Vizianagaram rajahs will sit on the top of the fort and watch the Utsav. Pujari will be given new clothes by Rajas and puja is performed. In front of Srimanu there will be a chariot in the shape of White elephant.",
  },
  {
     imageSrc: sambara,
     title: "Sambara Jatara",
     description: "This flair is celebrated every year at Sambara Village of Makkuva Mandal, Vizianagaram Disrtict.Every Year on the preceding tuesday of Pongal/Sankrati festival Polamamba is brought to village. Since polamaba is born is samabara village all the villagers will be treating polamaba as daugther of village. As there is a tradition that every girl will come to their parents house for sankranti festival, polamamba is brought to village during that time. Till next tuesday from the bringing pujas will be performed in tmeple and devotees will be taking darshan of Godess. on next tuesday i.e third tuesday sirimanotsavam will be performed and many people from uttarandhra as well as from Odisha, Chattisgarh and Maharashtra will take part in the fetival. District Administration will make necessary arrangments for the festival in advance.",
  },
  

]
 
 

 const Explore = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
   }
  return (
    <>
         <div className='py-28 px-4'>
            <button className="py-2 px-2 bg-blue-400 rounded-[50px] text-lg font-medium fixed z-10" onClick={toggleSidebar}>
               ☰ Open Sidebar
            </button>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} className="" />
            <div className='flex justify-center items-center gap-3'>
             <div className='relative top-12'>
                <div class="gallery">
                   <img src="https://picsum.photos/id/174/400/400" alt="a hot air balloon"/>
                   <img src="https://picsum.photos/id/188/400/400" alt="a sky photo of an old city"/>
                   <img src="https://picsum.photos/id/211/400/400" alt="a small boat"/>
                   <img src="https://picsum.photos/id/28/400/400" alt="a forest"/>
                </div>
             </div>
             <div className="image-description-container" >
               <div className="description-section">
                <h2>VIZIANAGARAM</h2>
                <p>From Bobbili Fort in the North to Pusapatirega Beach in the South, Ramatheertham Temples in the East to Kumili Waterfalls in the West – Where History, Serenity, and Heritage Await in Every Direction!</p>
               </div>
             </div>
            </div>
              <Heading id="howtoreach" text="How to Reach" />
              {transport.map((item, index) => (
                        <ImageWithDescription
                            key={index}
                            imageSrc={item.imageSrc}
                            title={item.title}
                            description={item.description}
                            isImageRight={index % 2 !== 0} // Alternate layout for odd/even items
                        />
                    ))}

              <Heading id="tourist" text="Tourist Places"/>
              {tourist.map((item, index) => (
                        <ImageWithDescription
                            key={index}
                            imageSrc={item.imageSrc}
                            title={item.title}
                            description={item.description}
                            isImageRight={index % 2 !== 0} // Alternate layout for odd/even items
                        />
                    ))}
              <Heading id="religion" text="Religious Places"/>
              {religious.map((item, index) => (
                        <ImageWithDescription
                            key={index}
                            imageSrc={item.imageSrc}
                            title={item.title}
                            description={item.description}
                            isImageRight={index % 2 !== 0} // Alternate layout for odd/even items
                        />
                    ))}
              <Heading id="cultural" text="Cultural Places"/>
              {historical.map((item, index) => (
                        <ImageWithDescription
                            key={index}
                            imageSrc={item.imageSrc}
                            title={item.title}
                            description={item.description}
                            isImageRight={index % 2 !== 0} // Alternate layout for odd/even items
                        />
                    ))}
              <Heading id="festival" text="Festivals"/>
              {festival.map((item, index) => (
                        <ImageWithDescription
                            key={index}
                            imageSrc={item.imageSrc}
                            title={item.title}
                            description={item.description}
                            isImageRight={index % 2 !== 0} // Alternate layout for odd/even items
                        />
                    ))}
               
            
            </div>
      </>
  )
}
export default Explore;
