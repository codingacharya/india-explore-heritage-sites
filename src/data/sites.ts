
export interface HeritageSite {
  id: string;
  name: string;
  location: string;
  state: string;
  type: 'temple' | 'palace' | 'fort' | 'monument' | 'unesco';
  region: 'north' | 'south' | 'east' | 'west' | 'central' | 'northeast';
  description: string;
  yearBuilt: string;
  timings: string;
  entryFee: string;
  image: string;
  gallery?: string[];
  latitude?: number;
  longitude?: number;
  featured?: boolean;
}

export const heritageSites: HeritageSite[] = [
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    location: "Agra",
    state: "Uttar Pradesh",
    type: "monument",
    region: "north",
    description: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.",
    yearBuilt: "1632-1653",
    timings: "Sunrise to Sunset (Closed on Friday)",
    entryFee: "₹1,100 for foreigners, ₹50 for Indians",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop",
    latitude: 27.1751,
    longitude: 78.0421,
    featured: true
  },
  {
    id: "golden-temple",
    name: "Golden Temple",
    location: "Amritsar",
    state: "Punjab",
    type: "temple",
    region: "north",
    description: "The Golden Temple, also known as Sri Harmandir Sahib, is a Gurdwara located in the city of Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism. The temple is built around a man-made pool that was completed by the fourth Sikh Guru, Guru Ram Das, in 1577.",
    yearBuilt: "1588",
    timings: "Open 24 hours",
    entryFee: "Free",
    image: "https://images.unsplash.com/photo-1594387254533-11129a93a350?q=80&w=800&auto=format&fit=crop",
    latitude: 31.6200,
    longitude: 74.8765,
    featured: true
  },
  {
    id: "khajuraho-temples",
    name: "Khajuraho Temples",
    location: "Khajuraho",
    state: "Madhya Pradesh",
    type: "temple",
    region: "central",
    description: "The Khajuraho Group of Monuments are a group of Hindu and Jain temples in Madhya Pradesh, India. They are famous for their nagara-style architectural symbolism and their erotic sculptures.",
    yearBuilt: "950-1050 CE",
    timings: "8:00 AM to 6:00 PM",
    entryFee: "₹600 for foreigners, ₹40 for Indians",
    image: "https://images.unsplash.com/photo-1590080962330-747c6aba8035?q=80&w=800&auto=format&fit=crop",
    latitude: 24.8318,
    longitude: 79.9195,
    featured: true
  },
  {
    id: "mysore-palace",
    name: "Mysore Palace",
    location: "Mysore",
    state: "Karnataka",
    type: "palace",
    region: "south",
    description: "The Mysore Palace is a historical palace and the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. It is located in Mysore, Karnataka, India. The palace is in the center of Mysore, and faces the Chamundi Hills eastward.",
    yearBuilt: "1912",
    timings: "10:00 AM to 5:30 PM",
    entryFee: "₹200 for foreigners, ₹70 for Indians",
    image: "https://images.unsplash.com/photo-1580877854178-95067799fb41?q=80&w=800&auto=format&fit=crop",
    latitude: 12.3052,
    longitude: 76.6552,
    featured: true
  },
  {
    id: "hawa-mahal",
    name: "Hawa Mahal",
    location: "Jaipur",
    state: "Rajasthan",
    type: "palace",
    region: "west",
    description: "Hawa Mahal is a palace in Jaipur, India. Built from red and pink sandstone, the palace sits on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers. The structure was built in 1799 by Maharaja Sawai Pratap Singh, the grandson of Maharaja Sawai Jai Singh.",
    yearBuilt: "1799",
    timings: "9:00 AM to 4:30 PM",
    entryFee: "₹200 for foreigners, ₹50 for Indians",
    image: "https://images.unsplash.com/photo-1599661046289-e36573d96ec0?q=80&w=800&auto=format&fit=crop",
    latitude: 26.9239,
    longitude: 75.8267,
    featured: true
  },
  {
    id: "meenakshi-temple",
    name: "Meenakshi Temple",
    location: "Madurai",
    state: "Tamil Nadu",
    type: "temple",
    region: "south",
    description: "Meenakshi Temple, also referred to as Meenakshi Amman or Minakshi-Sundareshwara Temple, is a historic Hindu temple located on the southern bank of the Vaigai River in Madurai, Tamil Nadu, India. It is dedicated to Meenakshi, a form of Parvati, and her consort, Sundareshwar, a form of Shiva.",
    yearBuilt: "1600s",
    timings: "5:00 AM to 12:30 PM, 4:00 PM to 9:30 PM",
    entryFee: "Camera fee ₹100",
    image: "https://images.unsplash.com/photo-1604693878673-fb3e4ceece9f?q=80&w=800&auto=format&fit=crop",
    latitude: 9.9195,
    longitude: 78.1193,
    featured: true
  },
  {
    id: "red-fort",
    name: "Red Fort",
    location: "Delhi",
    state: "Delhi",
    type: "fort",
    region: "north",
    description: "The Red Fort is a historic fort in the city of Delhi in India that served as the main residence of the Mughal Emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1638, when he decided to shift his capital from Agra to Delhi.",
    yearBuilt: "1639-1648",
    timings: "9:30 AM to 4:30 PM (Closed on Mondays)",
    entryFee: "₹600 for foreigners, ₹35 for Indians",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop",
    latitude: 28.6562,
    longitude: 77.2410,
    featured: false
  },
  {
    id: "konark-sun-temple",
    name: "Konark Sun Temple",
    location: "Konark",
    state: "Odisha",
    type: "temple",
    region: "east",
    description: "The Konark Sun Temple is a 13th-century CE Sun temple at Konark about 35 kilometres northeast from Puri on the coastline of Odisha, India. The temple is attributed to king Narasimhadeva I of the Eastern Ganga Dynasty about 1250 CE.",
    yearBuilt: "Mid-13th century",
    timings: "6:00 AM to 8:00 PM",
    entryFee: "₹600 for foreigners, ₹40 for Indians",
    image: "https://images.unsplash.com/photo-1593693709944-7241e465f178?q=80&w=800&auto=format&fit=crop",
    latitude: 19.8876,
    longitude: 86.0945,
    featured: false
  }
];

export const regions = [
  { id: "north", name: "North India", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop" },
  { id: "south", name: "South India", image: "https://images.unsplash.com/photo-1604693878673-fb3e4ceece9f?q=80&w=800&auto=format&fit=crop" },
  { id: "east", name: "East India", image: "https://images.unsplash.com/photo-1593693709944-7241e465f178?q=80&w=800&auto=format&fit=crop" },
  { id: "west", name: "West India", image: "https://images.unsplash.com/photo-1599661046289-e36573d96ec0?q=80&w=800&auto=format&fit=crop" },
  { id: "central", name: "Central India", image: "https://images.unsplash.com/photo-1590080962330-747c6aba8035?q=80&w=800&auto=format&fit=crop" },
];

export const categories = [
  { id: "temple", name: "Temples", icon: "temple", count: heritageSites.filter(site => site.type === 'temple').length },
  { id: "palace", name: "Palaces", icon: "landmark", count: heritageSites.filter(site => site.type === 'palace').length },
  { id: "fort", name: "Forts", icon: "landmark", count: heritageSites.filter(site => site.type === 'fort').length },
  { id: "monument", name: "Monuments", icon: "landmark", count: heritageSites.filter(site => site.type === 'monument').length },
  { id: "unesco", name: "UNESCO Sites", icon: "landmark", count: heritageSites.filter(site => site.type === 'unesco').length },
];

export const featuredSites = heritageSites.filter(site => site.featured);
