import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Mail,
  MapPin,
  Phone,
  Users
} from 'lucide-react';
import React, { useState } from 'react';

 const About = () => {
  const fullContent = [
    {
      title: "Rich Cultural Tapestry",
      content: "Vizianagaram, the City of Victory in Andhra Pradesh, is rich in cultural heritage and historical significance. The Vizianagaram Fort, built in 1712, is a testament to the city's royal legacy. Vizianagaram has been home to literary giants like Gurajada Apparao, whose play Kanyasulkam is a Telugu classic. The city also produced Dwaram Venkataswamy Naidu, an influential classical violinist. Vizianagaram celebrates vibrant festivals, including Sankranti and Ugadi, with music, dance, and traditional Kolatam performances. Artisans here are known for intricate kondapalli toys and Pochampally weaves. The region’s cuisine, featuring dishes like pappu charu and pulihora, highlights authentic Andhra flavors. Vizianagaram beautifully blends tradition and modernity, inspiring all who experience its cultural depth."
    },
    {
      title: "Historical Legacy",
      content: "Vizianagaram, often referred to as the City of Victory, has a rich historical legacy, dating back to the 18th century. The city's foundation is attributed to Pusapati Vijaya Rama Gajapati Raju, a notable ruler from the Gajapati dynasty, who built the Vizianagaram Fort in 1712. The fort stands as a monumental symbol of the region's royal history and is an architectural marvel with high walls, bastions, and a moat. The fort is also known for its strategic importance during various historical battles.During British colonial rule, Vizianagaram was an important center of trade and education. The district played a vital role in India's freedom struggle, with prominent leaders from the region participating in the independence movement. The Maharajah of Vizianagaram was an influential figure who worked towards the development of education and infrastructure in the region.The district also saw the establishment of Maharajah's Sanskrit College in 1860, which contributed significantly to the cultural and intellectual growth of the area. The region was known for its contributions to literature, art, and music, with many renowned personalities hailing from Vizianagaram.The district's involvement in the freedom struggle and its intellectual and cultural contributions have made Vizianagaram a key part of Andhra Pradesh's heritage. The rich historical narrative of the city continues to inspire pride among its residents. The legacy of its rulers, educational contributions, and involvement in the fight for independence ensures that Vizianagaram's history is honored and remembered."
    },
    {
      title: "Festivals & Celebrations", // Placeholder for the Festivals section
      content: "" // Leave content empty for this entry to replace it with the Festivals component
    },
    {
      title: "Natural Beauty",
      content: "Vizianagaram, nestled in the southeastern part of Andhra Pradesh, is a region blessed with breathtaking natural beauty. The district is surrounded by the Eastern Ghats, which offer stunning landscapes of rolling hills, lush greenery, and picturesque valleys. The hills provide a serene escape and are ideal for trekking and nature walks, allowing visitors to immerse themselves in the tranquility of the surroundings.The region is home to numerous water bodies, including rivers, lakes, and ponds, which add to its charm. The scenic beauty of these water bodies, combined with the verdant landscapes, creates a perfect setting for nature lovers. The area's climate, marked by cool breezes and occasional rainfall, further enhances its appeal.Vizianagaram is also known for its rich biodiversity, with a variety of flora and fauna that thrive in its forests and natural reserves. The dense forests, which are part of the Eastern Ghats range, are home to several species of wildlife, making it an attractive destination for eco-tourism and wildlife enthusiasts.Moreover, the district has several natural parks and protected areas where one can observe the region's unique flora and fauna in their natural habitat. Whether it's the picturesque hills, lush forests, or tranquil lakes, Vizianagaram’s natural beauty makes it a haven for those seeking peace and serenity away from the hustle and bustle of city life."
    }
  ];
  const facts = [
    {
      icon: MapPin,
      title: 'Location',
      description: 'Located in northeastern Andhra Pradesh'
    },
    {
      icon: Calendar,
      title: 'Established',
      description: 'Founded in 1979'
    },
    {
      icon: Users,
      title: 'Population',
      description: 'Over 2.3 million residents'
    }
  ];
  const images = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKDkUuM-Ue3_WMJYRIYV3hFOYj-Oh1zyhCQ&s",
      title: "Vizianagaram Fort",
      description: "Historic fort built in the 18th century"
    },
    {
      url: "https://www.elefontdesign.in/client/garuda_travels/wp-content/uploads/2016/01/Tappeta-Gullu1.jpg",
      title: "Traditional Dance",
      description: "Vibrant Kuchipudi performances"
    },
    {
      url: "https://th-i.thgim.com/public/migration_catalog/article11318361.ece/alternates/LANDSCAPE_1200/13VZ_BOBBILI_VEENA_REPAIRS",
      title: "Local Artisans",
      description: "Skilled craftsmen preserving heritage"
    },
    {
      url: "https://travellerkaka.com/wp-content/uploads/2024/09/Untitled-design-95-1024x536.png",
      title: "Festival Celebrations",
      description: "Colorful Sirimanotsavam festival"
    }
  ];
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      <header>
      <div className="relative h-[80vh]">
        {/* Main Hero Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1623677375828-30ef66109200?auto=format&fit=crop&q=80&w=2000")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
              <div className="text-black max-w-2xl">
                <h1 className="text-5xl font-bold mb-4">Vizianagaram District</h1>
                <p className="text-xl mb-8">The Cultural Heritage of Andhra Pradesh</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>Northeastern Andhra Pradesh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>+91 8922-276677</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    <span>info@vizianagaram.ap.gov.in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Strip */}
        <div className="absolute -bottom-12 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-4 gap-4">
              {[
                {
                  url: "https://www.elefontdesign.in/client/garuda_travels/wp-content/uploads/2016/01/Tappeta-Gullu1.jpg",
                  title: "Cultural Heritage"
                },
                {
                  url: "https://vajiram-prod.s3.ap-south-1.amazonaws.com/Bobbilli_Veena_a0d4ea8757.webp",
                  title: "Local Artisans"
                },
                {
                  url: "https://travellerkaka.com/wp-content/uploads/2024/09/Untitled-design-95-1024x536.png",
                  title: "Festivals"
                },
                {
                  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKDkUuM-Ue3_WMJYRIYV3hFOYj-Oh1zyhCQ&s",
                  title: "Architecture"
                }
              ].map((image, index) => (
                <div 
                  key={index}
                  className="relative h-24 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform"
                >
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">{image.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-12"></div> {/* Spacer for image strip overflow */}
    </header>
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {facts.map((fact, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <fact.icon className="w-8 h-8 text-black mb-4" />
            <h3 className="text-lg font-semibold mb-2">{fact.title}</h3>
            <p className="text-gray-600">{fact.description}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">District Profile</h2>
            <div className="prose prose-lg">
              <p className="text-gray-700 mb-4">
                Vizianagaram, established in 1979, is a vibrant district in northeastern Andhra Pradesh. The district's name originates from "Vijaya" meaning victory and "Nagaram" meaning city, commemorating the victory of the Vizianagaram kings over the rulers of Bobbili.
              </p>
              <p className="text-gray-700 mb-4">
                The district spans across 6,539 square kilometers of diverse terrain, from the rolling Eastern Ghats to fertile agricultural plains. This geographical diversity contributes to its rich agricultural heritage, primarily producing paddy, sugarcane, and various tropical fruits.
              </p>
              <p className="text-gray-700">
                Home to over 2.3 million residents, Vizianagaram is renowned for its educational institutions, including the historic Maharajah's Sanskrit College and numerous modern universities. The district's economy is a balanced blend of agriculture, small-scale industries, and a growing service sector.
              </p>
            </div>
          </div>
          <div >
            <img 
              src="https://live.staticflickr.com/2234/2094020198_1c52da496b_b.jpg" 
              alt="Historic Architecture"
              className="rounded-lg shadow-lg w-full h-89 object-cover"
            />
            
          </div>
        </div>
      </div>
    </div>
      <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Vizianagaram</h2>
        
        <div className="space-y-6">
          {fullContent.slice(0, isExpanded ? undefined : 2).map((section, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-black">{section.title}</h3>
              {section.title === "Festivals & Celebrations" && isExpanded ? (
                 <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
                 <p>
                   Vizianagaram, with its rich cultural heritage, celebrates a variety of festivals that showcase its unique blend
                   of tradition, music, dance, and community spirit. Each festival brings together people across generations,
                   creating moments of unity, joy, and devotion.
                 </p>
                 
                 <h1><strong> Sankranti</strong></h1>
                 <p>
                   Makar Sankranti, marking the harvest season, is celebrated with great enthusiasm. Traditional
                   rangoli designs (muggulu), kite flying, and festive sweets like <i>arisa</i> and <i>laddu</i> fill homes and
                   streets, bringing communities together.
                 </p>
           
                 <h1><strong> Ugadi</strong></h1>
                 <p>
                   Ugadi, the Telugu New Year, is welcomed with elaborate rituals and a traditional dish, <i>Ugadi pachadi</i>,
                   symbolizing the diverse flavors of life. Families gather to celebrate new beginnings, wearing new clothes and
                   offering prayers.
                 </p>
           
                 <h1><strong> Dasara and Navaratri</strong></h1>
                 <p>
                   A nine-day festival honoring the goddess Durga, <strong>Navaratri</strong> in Vizianagaram features 
                   <strong>Bommalu Koluvu</strong> (displaying traditional dolls) and lively cultural programs. The grand
                   celebration culminates on Dasara with processions, prayers, and vibrant cultural performances.
                 </p>
           
                 <h1> <strong>Deepavali</strong></h1>
                 <p>
                   Known as the Festival of Lights, Deepavali (Diwali) is celebrated with the lighting of oil lamps, bursting of
                   crackers, and sharing of sweets. Families come together to decorate their homes and perform Lakshmi Pooja for
                   prosperity.
                 </p>
           
                 <h1><strong>Giri Pradakshina</strong></h1>
                 <p>
                   Unique to Vizianagaram, <strong>Giri Pradakshina</strong> is a significant annual pilgrimage where devotees
                   circumambulate the sacred hill of <strong>Punyagiri</strong>. This spiritual walk attracts pilgrims from all
                   over Andhra Pradesh, fostering devotion and community bonding.
                 </p>
           
                 <h1><strong>Kolatam Dance</strong></h1>
                 <p>
                   During festivals, the <strong>Kolatam</strong> folk dance, performed with sticks, is a popular sight. Dancers
                   form lines and pairs, moving rhythmically to music. Kolatam not only entertains but also symbolizes harmony and
                   teamwork in the community.
                 </p>
           
                 <h1><strong> Village Jatras</strong></h1>
                 <p>
                   Many villages around Vizianagaram hold their own <strong>jatras</strong> (fairs) in honor of local deities.
                   These fairs feature traditional music, dance, and local handicrafts, providing a colorful and festive atmosphere
                   for both locals and visitors.
                 </p>
           
                 <p>
                   Vizianagaram’s festivals are more than just celebrations; they are deeply ingrained in the cultural and
                   spiritual fabric of the region, preserving its heritage and traditions across generations.
                 </p>
               </div> // Render the Festivals component when expanded
              ) : (
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-8 mx-auto flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-orange-700 transition-colors"
        >
          {isExpanded ? (
            <>
              Show Less
              <ChevronUp className="w-5 h-5" />
            </>
          ) : (
            <>
              View More
              <ChevronDown className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </div>
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Visual Journey Through Vizianagaram</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-[1.02]"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white transform transition-transform">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p className="text-sm text-gray-200">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}
export default About;
