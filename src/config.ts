export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  days: number;
  nights: number;
  destination: string;
  category: "group" | "custom" | "by-air" | "weekend" | "trekking";
  badge: string;
  featured: boolean;
  price: number;
  sharingPrices: {
    quad: number;
    triple: number;
    twin: number;
    privateCouple?: number;
  };
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  departureCities: string[];
  upcomingDates: string[];
  tags: string[];
  highlights: string[];
  overview: string;
  itinerary: { day: number; title: string; desc: string }[];
  inclusions: string[];
  exclusions: string[];
}

export interface SiteConfig {
  businessName: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  phone: string;
  hotlineDisplay: string;
  whatsappNumber: string;
  whatsappLink: string;
  email: string;
  addresses: { lahore: string };
  socials: { instagram: string; facebook: string; tiktok?: string };
  stats: { label: string; value: string }[];
  categories: any[];
  activities: any[];
  tours: TourPackage[];
  testimonials: any[];
  faqs: any[];
  galleryMoments: any[];
}

export const config: SiteConfig = {
  businessName: "Khan e Azam Travel & Tours",
  shortName: "Khan e Azam",
  tagline: "Royalty in Travel, Excellence in Exploration",
  subTagline: "Curated northern expeditions, luxury family retreats, boutique by-air charters, and executive mountain adventures across Pakistan.",
  phone: "+92 320 4127966",
  hotlineDisplay: "+92 320 4127966",
  whatsappNumber: "923204127966",
  whatsappLink: "https://wa.me/923204127966?text=Hi%20Khan%20e%20Azam%20Travels!%20I%20want%20to%20inquire%20about%20your%20luxury%20upcoming%20tours.",
  email: "info@khaneazamtravels.com",
  addresses: {
    lahore: "880N Poonch Rd, Samanabad Town, Lahore, 54000, Pakistan",
  },
  socials: {
    instagram: "https://www.instagram.com/khan_e_azam_travel_and_tours/",
    facebook: "https://www.facebook.com/p/Khan-e-azam-travel-and-tours-61591315948166/",
    tiktok: "https://tiktok.com/@khan_e_azam_travel_and_tours",
  },
  stats: [
    { label: "Royal Expeditions", value: "950+" },
    { label: "Elite Travelers", value: "12,000+" },
    { label: "Verified Rating", value: "4.98★" },
    { label: "Safety & VIP Protocol", value: "100%" },
  ],
  categories: [
    {
      id: "group",
      title: "Royal Group Expeditions",
      subtitle: "Curated Road Journeys",
      tagline: "Uniting like-minded adventurers on scenic Karakoram road trips with luxury chalets, bonfire music, and cinematic memories.",
      cta: "Explore Group Tours",
      href: "/packages?cat=group",
      badge: "Vibrant Community",
      image: "/images/bonfire_camp.jpg",
      icon: "Users",
    },
    {
      id: "custom",
      title: "Bespoke Private Itineraries",
      subtitle: "Tailor-Made Luxury",
      tagline: "Handcrafted private journeys for discerning families, couples, executive retreats, and private squads with dedicated 4x4 Prado.",
      cta: "Craft Custom Trip",
      href: "/craft-your-tour",
      badge: "100% Customized",
      image: "/images/hunza_passu.jpg",
      icon: "Compass",
    },
    {
      id: "by-air",
      title: "By Air Royal Escapes",
      subtitle: "Fly & Explore In Luxury",
      tagline: "Skip long mountain drives with scenic 45-minute flights to Skardu & Gilgit paired with 5-star Serena heritage resorts.",
      cta: "Explore By Air",
      href: "/by-air",
      badge: "VIP & Scenic",
      image: "/images/skardu_valley.jpg",
      icon: "Plane",
    },
  ],
  activities: [
    {
      title: "Royal Bonfire & Jamming",
      tag: "Bonfire Bethak",
      desc: "Starlit fireside storytelling, live BBQ feasts, mountain tea, and acoustic jamming under the Karakoram galaxy.",
      icon: "Flame",
    },
    {
      title: "Canvas & Clouds",
      tag: "Alpine Art",
      desc: "Guided mountain painting sessions with provided easels, canvases, and paints amidst majestic 8,000m summits.",
      icon: "Palette",
    },
    {
      title: "Tasweer Kushi & Drone Shoots",
      tag: "Cinematic Visuals",
      desc: "Dedicated professional trip photographers capturing aesthetic reels, drone aerials, and 4K portraits.",
      icon: "Camera",
    },
    {
      title: "RoadRang & Interactive Vibes",
      tag: "Community Fun",
      desc: "Curated music playlists, trivia, icebreakers, and bus games that turn strangers into lifelong friends.",
      icon: "Sparkles",
    },
    {
      title: "Sky Lanterns over Glaciers",
      tag: "Night Spectacle",
      desc: "Illuminating the Karakoram and Himalayan nights with floating golden lanterns of hope and aspirations.",
      icon: "Moon",
    },
    {
      title: "Summit Mini Raves & Beats",
      tag: "High-Altitude Beats",
      desc: "Joyful celebratory summit music, glowing lanterns, and high-energy victory dances on alpine passes.",
      icon: "Music",
    },
  ],
  tours: [

    {
      id: "fairy-meadows-5d",
      slug: "5-days-fairy-meadows-nanga-parbat",
      title: "5 Days — Fairy Meadows & Nanga Parbat",
      subtitle: "Alpine meadows, wooden chalets, reflection pool, and the majestic Killer Mountain.",
      duration: "5 Days / 4 Nights",
      days: 5,
      nights: 4,
      destination: "Fairy Meadows & Raikot",
      category: "group",
      badge: "ICONIC EXPEDITION",
      featured: true,
      price: 26500,
      sharingPrices: {
        quad: 26500,
        triple: 29500,
        twin: 34000,
        privateCouple: 38000,
      },
      rating: 4.95,
      reviewsCount: 142,
      image: "/images/fairy_meadows.jpg",
      gallery: [
        "/images/fairy_meadows.jpg",
        "/images/bonfire_camp.jpg",
        "/images/travel_hero.jpg",
      ],
      departureCities: ["Lahore", "Islamabad"],
      upcomingDates: ["12 Sep - 16 Sep", "19 Sep - 23 Sep", "26 Sep - 30 Sep", "03 Oct - 07 Oct"],
      tags: ["Jeep Safari", "Bonfire Bethak", "Canvas & Clouds", "Jamming", "Sky Lantern", "Stargazing"],
      highlights: [
        "Thrilling 4x4 Jeep ride on the world-famous cliffside track to Tattu village",
        "Scenic alpine trek through pine forests to the magical Fairy Meadows plateau",
        "Cozy stays in rustic wooden cabins with panoramic views of Nanga Parbat (8,126m)",
        "Day hike to Beyal Camp & Nanga Parbat Viewpoint reflection pool",
        "Campfire BBQ, acoustic guitar jamming, and night sky lantern release",
      ],
      overview: "Experience the magic of Fairy Meadows on a 5-day adventure surrounded by towering 8,000m peaks, lush alpine landscapes, starry skies, and warm campfire camaraderie.",
      itinerary: [
        { day: 1, title: "Departure & Scenic Drive to Chilas / Babusar", desc: "Night departure from Lahore & Islamabad, traversing Babusar Top / KKH with breakfast and dinner." },
        { day: 2, title: "Raikot Bridge, 4x4 Jeep Safari & Fairy Meadows Trek", desc: "Transfer to open 4x4 jeeps at Raikot Bridge. Hike through pine woods up to the magical Fairy Meadows bowl. Sunset reflection pool photography." },
        { day: 3, title: "Beyal Camp Trek & Nanga Parbat Basepoint", desc: "Trek to Beyal Camp and the base viewpoint. Canvas aur Clouds painting session, evening live BBQ and mountain Jamming session." },
        { day: 4, title: "Descent & Journey back to Besham / Naran", desc: "Morning sunrise over Nanga Parbat, descent back to Raikot Bridge, drive to riverside hotel for overnight stay." },
        { day: 5, title: "Return Journey to Islamabad & Lahore", desc: "Scenic drive through Hazara motorway with tea stops, arriving in Islamabad and Lahore by late evening." },
      ],
      inclusions: [
        "Luxury AC Saloon Coaster / Grand Cabin transport",
        "4x4 Mountain Jeeps from Raikot Bridge to Tattu",
        "Hotel & Wooden Cabin accommodations on sharing basis",
        "Quality Breakfast & Dinner meals daily",
        "Live Bonfire, BBQ night, and Sky Lanterns",
        "First Aid & Certified Professional Mountain Tour Leads",
        "Toll taxes, fuel, and road permits",
      ],
      exclusions: [
        "Lunches and personal snacks/beverages",
        "Porters for personal luggage on trek",
        "Activities not mentioned in itinerary",
        "Emergency evacuation / medical insurance",
      ],
    },
    {
      id: "hunza-5d",
      slug: "5-days-hunza-attabad-adventure",
      title: "5 Days — Hunza Valley & Passu Adventure",
      subtitle: "Passu Cones, turquoise Attabad Lake, Altit & Baltit Forts, and the mighty Karakoram.",
      duration: "5 Days / 4 Nights",
      days: 5,
      nights: 4,
      destination: "Hunza, Attabad & Passu",
      category: "group",
      badge: "TOP SELLER",
      featured: true,
      price: 25000,
      sharingPrices: {
        quad: 25000,
        triple: 28000,
        twin: 32000,
        privateCouple: 36000,
      },
      rating: 4.98,
      reviewsCount: 218,
      image: "/images/hunza_passu.jpg",
      gallery: [
        "/images/hunza_passu.jpg",
        "/images/bonfire_camp.jpg",
        "/images/travel_package.jpg",
      ],
      departureCities: ["Lahore", "Islamabad"],
      upcomingDates: ["11 Sep - 15 Sep", "18 Sep - 22 Sep", "25 Sep - 29 Sep", "02 Oct - 06 Oct"],
      tags: ["Attabad Boating", "Passu Cones", "Bazm Night", "Canvas aur Clouds", "Tasweer Kushi", "Bonfire"],
      highlights: [
        "Cruising and jet skiing on the turquoise waters of Attabad Lake",
        "Sunset photography at the iconic Passu Cones & Hussaini Suspension Bridge",
        "Exploring the 900-year-old Baltit and Altit Forts in Karimabad",
        "Eagle's Nest 360° sunset viewpoint overlooking 7 peaks",
        "RoadRang bus games, jamming session, and live traditional musical night",
      ],
      overview: "An exhilarating 5-day adventure through the crown jewel of northern Pakistan. Journey along the iconic Karakoram Highway and create timeless memories with adventurous fellow travelers.",
      itinerary: [
        { day: 1, title: "Departure via KKH / Babusar to Chilas / Gilgit", desc: "Night drive from Lahore/Islamabad via Hazara Motorway. Stop at Babusar Top, 3 Mountain Junctions, overnight in Gilgit/Chilas." },
        { day: 2, title: "Drive to Hunza, Rakaposhi Viewpoint & Karimabad", desc: "Scenic drive along Hunza River, stop at Rakaposhi View Point for chai and paratha. Visit Altit Fort and Karimabad bazaar." },
        { day: 3, title: "Attabad Lake, Passu Cones & Hussaini Bridge", desc: "Boating & jet skiing on turquoise Attabad Lake. Cross Hussaini suspension bridge and photoshoot at Passu Cones. Evening Bazm Night." },
        { day: 4, title: "Baltit Fort, Eagle's Nest & Return to Besham", desc: "Morning visit to Baltit Fort and Eagle's Nest. Begin return drive with stopovers, overnight stay in Besham." },
        { day: 5, title: "Besham to Islamabad and Lahore", desc: "Smooth return ride via Hazara motorway, arriving back with unforgettable memories." },
      ],
      inclusions: [
        "Executive Saloon Coaster / Grand Cabin travel",
        "4 nights standard/executive hotel stay on selected sharing",
        "Daily Breakfasts and wholesome Dinners",
        "Attabad Lake visit & Fort entry permits",
        "Bonfire, BBQ night, Canvas painting, and Jamming",
        "Expert Tour Guides & First Aid assistance",
      ],
      exclusions: [
        "Boating/Jet-ski tickets",
        "Lunch and mid-day snacks",
        "Personal laundry and room service",
      ],
    },
    {
      id: "skardu-6d",
      slug: "6-days-skardu-shangrila-deosai",
      title: "6 Days — Skardu, Shangrila & Deosai Plains",
      subtitle: "Upper Kachura Lake, Cold Desert Sarfaranga, Deosai plateau, and Mantoka Waterfall.",
      duration: "6 Days / 5 Nights",
      days: 6,
      nights: 5,
      destination: "Skardu, Shigar & Deosai",
      category: "group",
      badge: "LAND OF GIANTS",
      featured: true,
      price: 33500,
      sharingPrices: {
        quad: 33500,
        triple: 37500,
        twin: 43000,
        privateCouple: 48000,
      },
      rating: 4.96,
      reviewsCount: 185,
      image: "/images/skardu_valley.jpg",
      gallery: [
        "/images/skardu_valley.jpg",
        "/images/bonfire_camp.jpg",
        "/images/fairy_meadows.jpg",
      ],
      departureCities: ["Lahore", "Islamabad"],
      upcomingDates: ["10 Sep - 15 Sep", "17 Sep - 22 Sep", "24 Sep - 29 Sep", "01 Oct - 06 Oct"],
      tags: ["Deosai Plains", "Kachura Lake", "Cold Desert", "RoadRang", "Sky Lantern", "Bonfire Bethak"],
      highlights: [
        "Boating in the emerald green waters of Upper Kachura Lake",
        "Visiting the iconic Shangrila Resort & Lower Kachura Lake",
        "4x4 Safari across the world's second highest plateau — Deosai National Park & Sheosar Lake",
        "Stargazing and ATV quad bike riding on the dunes of Sarfaranga Cold Desert",
        "Mantoka Waterfall & centuries-old Serena Shigar Fort",
      ],
      overview: "Experience six unforgettable days through the dramatic wonderland of Baltistan, where crystal lakes, high altitude deserts, and snow-crowned giant peaks meet under turquoise skies.",
      itinerary: [
        { day: 1, title: "Departure to Chilas / Jaglot", desc: "Night drive from Lahore/Islamabad via Karakoram Highway, stop at scenic viewpoints, overnight in Jaglot/Chilas." },
        { day: 2, title: "Jaglot to Skardu via Indus Gorge Highway", desc: "Breathtaking drive along the new Skardu expressway, stop at Shangrila Resort, overnight in Skardu city." },
        { day: 3, title: "Upper Kachura Lake & Sarfaranga Cold Desert", desc: "Boating in Upper Kachura Lake, explore apple orchards. Sunset and dune adventure at Sarfaranga Cold Desert." },
        { day: 4, title: "Deosai Plains, Kala Pani, Bara Pani & Sheosar Lake", desc: "Full day 4x4 Jeep expedition to Deosai National Park, witness wildflowers, Himalayan brown bears, and Sheosar Lake." },
        { day: 5, title: "Mantoka Waterfall, Shigar Valley & Drive to Chilas", desc: "Visit the roaring Mantoka Waterfall and historic Shigar Fort. Begin return journey, overnight in Chilas." },
        { day: 6, title: "Chilas to Islamabad & Lahore", desc: "Comfortable drive through Hazara Expressway, arriving back home by evening." },
      ],
      inclusions: [
        "Complete AC luxury transport throughout the tour",
        "Deosai 4x4 Mountain Jeeps",
        "Hotel accommodations on sharing basis",
        "Daily Breakfast & Dinners including live BBQ",
        "Bonfire, Jamming, and Lantern lighting ceremony",
        "Professional trip captain and photographer",
      ],
      exclusions: [
        "Lunch and snacks",
        "Upper Kachura boat charges",
        "Personal equipment",
      ],
    },
    {
      id: "kumrat-4d",
      slug: "4-days-kumrat-valley-katora-lake",
      title: "4 Days — Kumrat Valley & Katora Lake",
      subtitle: "Pristine deodar pine jungles, Panjkora river, wooden bridges, and alpine Katora lake.",
      duration: "4 Days / 3 Nights",
      days: 4,
      nights: 3,
      destination: "Kumrat Valley & Thal",
      category: "weekend",
      badge: "NATURE RETREAT",
      featured: false,
      price: 21000,
      sharingPrices: {
        quad: 21000,
        triple: 23500,
        twin: 27000,
        privateCouple: 31000,
      },
      rating: 4.89,
      reviewsCount: 94,
      image: "/images/kumrat_katora_lake.jpg",
      gallery: [
        "/images/kumrat_katora_lake.jpg",
        "/images/kumrat_forest.jpg",
        "/images/bonfire_camp.jpg",
      ],
      departureCities: ["Lahore", "Islamabad"],
      upcomingDates: ["14 Sep - 17 Sep", "21 Sep - 24 Sep", "28 Sep - 01 Oct"],
      tags: ["Jungle Walk", "Jeep Ride", "Movie Night", "Bonfire", "Jamming", "Badminton"],
      highlights: [
        "4x4 open jeep safari through deep deodar pine forests of Kumrat",
        "Camping and riverside bonfires along the crystal Panjkora river",
        "Hike to the roaring Kumrat Waterfall and lush Kala Chashma",
        "Optional trek to the alpine gem Katora Lake",
        "Open-air mountain movie night and acoustic jamming sessions",
      ],
      overview: "Escape into the untouched wilderness of Upper Dir. Kumrat Valley is a dreamland of towering pine trees, crystal fresh streams, cool mountain breeze, and cozy riverside nights.",
      itinerary: [
        { day: 1, title: "Departure to Thal & Kumrat", desc: "Night drive from Lahore & Islamabad via Swat Motorway and Dir. Arrive in Thal, visit historic wooden mosque, jeep ride to Kumrat camp." },
        { day: 2, title: "Kumrat Valley Exploration & Kala Chashma", desc: "4x4 exploration of Kumrat Forest, Kumrat Waterfall, and Kala Chashma. Outdoor games, painting, and night movie screening." },
        { day: 3, title: "Jhajhi Meadows / Katora Trek & Bonfire BBQ", desc: "Trek or jeep ride towards Jahaz Banda / Katora base. Evening grand bonfire with live chicken BBQ and jamming." },
        { day: 4, title: "Return to Islamabad & Lahore", desc: "Pack up camp, jeep ride to Thal, board luxury coaster and drive back to Islamabad and Lahore." },
      ],
      inclusions: [
        "Luxury AC transport + 4x4 Mountain Jeeps in Kumrat",
        "Hotel / Luxury riverside glamping stays",
        "Daily Breakfast & Dinners",
        "Campfire, BBQ, Movie night, and games setup",
        "Dedicated tour captain",
      ],
      exclusions: ["Lunch meals", "Personal porter services"],
    },
    {
      id: "swat-3d",
      slug: "3-days-swat-malam-jabba-tape-banda",
      title: "3 Days — Swat Valley & Tape Banda",
      subtitle: "Malam Jabba zipline & chairlift, Bahrain bazaar, and Tape Banda mountain jeep trail.",
      duration: "3 Days / 2 Nights",
      days: 3,
      nights: 2,
      destination: "Swat, Bahrain & Malam Jabba",
      category: "weekend",
      badge: "WEEKEND THRILL",
      featured: false,
      price: 17500,
      sharingPrices: {
        quad: 17500,
        triple: 19500,
        twin: 23000,
        privateCouple: 26000,
      },
      rating: 4.92,
      reviewsCount: 112,
      image: "/images/travel_package.jpg",
      gallery: [
        "/images/travel_package.jpg",
        "/images/bonfire_camp.jpg",
      ],
      departureCities: ["Lahore", "Islamabad"],
      upcomingDates: ["15 Sep - 17 Sep", "22 Sep - 24 Sep", "29 Sep - 01 Oct", "06 Oct - 08 Oct"],
      tags: ["Zipline & Chairlift", "Tape Banda Jeep", "Live BBQ", "Jamming", "Scavenger Hunt"],
      highlights: [
        "Malam Jabba 5-star ski resort adventure with chairlift and extreme zipline",
        "Thrilling 4x4 off-road jeep trail to the hidden gem of Tape Banda meadow",
        "Riverside stay in Bahrain with traditional trout fish dinner",
        "Interactive group games, scavenger hunts, and live acoustic jamming",
      ],
      overview: "The perfect quick weekend reset! Discover the lush emerald hills of Swat Valley, thrilling adventure sports at Malam Jabba, and offbeat jeep exploration at Tape Banda.",
      itinerary: [
        { day: 1, title: "Drive via Swat Motorway to Bahrain", desc: "Morning drive through scenic Swat tunnel, visit White Palace Marghazar, explore Bahrain bazaar, overnight stay in Bahrain." },
        { day: 2, title: "Tape Banda 4x4 Jeep Adventure & BBQ Night", desc: "Thrilling jeep ride up to Tape Banda alpine meadow. Outdoor cricket, photography, evening live BBQ and jamming." },
        { day: 3, title: "Malam Jabba Resort & Return Drive", desc: "Enjoy chairlift, zipline, and panoramic valley views at Malam Jabba, drive back to Islamabad and Lahore." },
      ],
      inclusions: [
        "Executive transport throughout tour",
        "Tape Banda 4x4 mountain jeeps",
        "2 nights quality hotel accommodation",
        "Daily Breakfasts and Dinners including live BBQ",
        "Tour lead and guide support",
      ],
      exclusions: ["Chairlift & Zipline tickets", "Lunches"],
    },
    {
      id: "sharan-2d",
      slug: "2-days-bazm-e-sharan-forest",
      title: "2 Days — Bazm-e-Sharan Forest Retreat",
      subtitle: "Cozy wooden camping pods in dense Kaghan pine jungle with stargazing and acoustic music.",
      duration: "2 Days / 1 Night",
      days: 2,
      nights: 1,
      destination: "Sharan Forest, Kaghan",
      category: "weekend",
      badge: "QUICK ESCAPE",
      featured: false,
      price: 14500,
      sharingPrices: {
        quad: 14500,
        triple: 16500,
        twin: 19500,
        privateCouple: 22000,
      },
      rating: 4.88,
      reviewsCount: 78,
      image: "/images/bonfire_camp.jpg",
      gallery: [
        "/images/bonfire_camp.jpg",
        "/images/about_fixed_1787743894916.jpg",
      ],
      departureCities: ["Lahore", "Islamabad"],
      upcomingDates: ["16 Sep - 17 Sep", "23 Sep - 24 Sep", "30 Sep - 01 Oct"],
      tags: ["Hiking", "Painting Session", "Bazm Night", "Sky Lantern", "Bonfire", "Jamming"],
      highlights: [
        "Off-road 4x4 jeep safari up through pristine dense Sharan forest",
        "Stay in wooden glamping pods surrounded by towering pine trees",
        "Jungle hiking, creative painting session on canvas, and open-air games",
        "Evening Bazm Night with live acoustic music, bonfire, and sky lantern release",
      ],
      overview: "Leave the city stress behind for a tranquil 2-day forest recharge. Experience the mystic serenity of Sharan with soulful music, warm fires, and great company.",
      itinerary: [
        { day: 1, title: "Drive to Paras, Jeep Safari to Sharan & Bazm Night", desc: "Early departure, scenic drive via Hazara Motorway. Transfer to 4x4 jeeps at Paras to reach Sharan. Painting session, bonfire, BBQ, and live music." },
        { day: 2, title: "Jungle Trek, Manshi Top View & Return Drive", desc: "Morning nature hike through the woods, sunrise photography, jeep descent to Paras, return to Islamabad and Lahore by evening." },
      ],
      inclusions: [
        "Executive transport + 4x4 jeeps to Sharan",
        "Wooden pod / Camping accommodation",
        "Breakfast & Dinner meals with live BBQ",
        "Painting materials, lanterns, and bonfire setup",
      ],
      exclusions: ["Lunch", "Personal expenses"],
    },
    {
      id: "skardu-byair-7d",
      slug: "7-days-ultimate-skardu-by-air-luxury",
      title: "7 Days — Ultimate Skardu & Hunza By Air",
      subtitle: "Fly directly into the Karakorams. 5-star boutique chalets, private 4x4 Prado, zero fatigue.",
      duration: "7 Days / 6 Nights",
      days: 7,
      nights: 6,
      destination: "Skardu & Hunza (Fly In / Fly Out)",
      category: "by-air",
      badge: "PREMIUM BY AIR",
      featured: true,
      price: 145000,
      sharingPrices: {
        quad: 135000,
        triple: 142000,
        twin: 155000,
        privateCouple: 165000,
      },
      rating: 5.0,
      reviewsCount: 64,
      image: "/images/skardu_valley.jpg",
      gallery: [
        "/images/skardu_valley.jpg",
        "/images/hunza_passu.jpg",
        "/images/fairy_meadows.jpg",
      ],
      departureCities: ["Islamabad (Direct Flights)"],
      upcomingDates: ["Daily Departures on Request", "Weekly Fixed Groups"],
      tags: ["Return Flights", "Shangrila Resort", "Serena Shigar", "Private 4x4 Prado", "VIP Concierge"],
      highlights: [
        "Return direct PIA flights between Islamabad and Skardu International Airport",
        "Boutique luxury stays at Shangrila Resort, Serena Shigar Fort, and Serena Khaplu Palace",
        "Dedicated private luxury 4x4 Prado with seasoned mountain chauffeur",
        "Upper Kachura, Deosai National Park, Manthoka Waterfall, and Cold Desert sunset",
        "Curated traditional Balti and continental dining experiences",
      ],
      overview: "The ultimate luxury mountain escape for discerning travelers, families, and couples who want to experience the breathtaking beauty of northern Pakistan in absolute comfort with zero travel fatigue.",
      itinerary: [
        { day: 1, title: "Scenic Flight over Nanga Parbat into Skardu", desc: "Fly directly into Skardu with breathtaking aerial views of K2 and Nanga Parbat. Check-in at Shangrila Resort, boat ride on Upper Kachura lake." },
        { day: 2, title: "Shigar Fort, Apple Orchards & Blind Lake", desc: "Drive along Shigar river, tour historic Serena Shigar Fort, explore ancient wood-carved mosques and Sarfaranga dunes." },
        { day: 3, title: "Deosai Plateau Safari & Sheosar Lake", desc: "Full day private Prado expedition across the Deosai National Park, picnic lunch by Bara Pani." },
        { day: 4, title: "Khaplu Palace & Chaqchan Mosque", desc: "Visit royal Serena Khaplu Palace and the 700-year-old wooden Chaqchan Mosque, stay at heritage suite." },
        { day: 5, title: "Mantoka Waterfall & Cold Desert Quad Biking", desc: "Relax by the 180ft Mantoka waterfall, sunset tea and thrill quad biking on Sarfaranga dunes." },
        { day: 6, title: "Leisure Day, Local Bazaar & Gourmet Dinner", desc: "Explore local dry fruit and gemstone markets, farewell gourmet Balti dinner under starlit sky." },
        { day: 7, title: "Morning Flight back to Islamabad", desc: "Transfer to Skardu Airport for morning return flight back to Islamabad." },
      ],
      inclusions: [
        "Islamabad-Skardu return airfare with baggage",
        "6 nights 4-star / 5-star heritage chalets & boutique resorts",
        "Dedicated private 4x4 Toyota Prado throughout",
        "Full board gourmet Breakfasts and curated Dinners",
        "All entry tickets, boating, national park permits & fuel",
        "24/7 dedicated trip concierge and licensed private guide",
      ],
      exclusions: ["Karachi/Lahore connecting domestic flights", "Personal shopping"],
    },
  ],
  testimonials: [
    {
      name: "Sara Khan",
      role: "Solo Traveler (Lahore)",
      trip: "5 Days Fairy Meadows & Nanga Parbat",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      content: "I joined as a solo female traveler and had the experience of a lifetime. The Khan e Azam team treated every guest with royal care. The mountain chalets, campfire acoustic jamming, and strict security protocols were exceptional!",
    },
    {
      name: "Barrister Ali Raza & Squad",
      role: "Corporate Retreat (Islamabad)",
      trip: "6 Days in Skardu & Deosai",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      content: "The RoadRang vibes, the Deosai 4x4 safari, and the sky lantern ceremony over the Cold Desert were truly magical. Outstanding management, executive transport, and top-tier photography!",
    },
    {
      name: "Dr. Ayesha & Tariq Malik",
      role: "Luxury Couple Escape (Karachi)",
      trip: "7 Days Skardu By Air Luxury",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      content: "The By-Air luxury trip was seamless from start to finish. Stays at Serena Forts, private Prado, zero hassle, and breathtaking sights. Khan e Azam Travel & Tours is Pakistan's finest travel company without a doubt!",
    },
  ],
  faqs: [
    {
      q: "Are your group expeditions safe for solo female travelers and families?",
      a: "Absolutely! Over 40% of our travelers are solo female wanderers. We provide dedicated female tour captains, verified family-safe boutique hotels, and separate gender-segregated room sharing options.",
    },
    {
      q: "Where do your tours depart from?",
      a: "Our regular group road trips depart from Lahore (Thokar Niaz Baig / Kalma Chowk) and Islamabad (Daewoo Terminal / 26 Number Chungi). We also assist travelers from Karachi with connecting flights or train tickets.",
    },
    {
      q: "What is included in the tour packages?",
      a: "All packages include executive transport (AC Coaster / Grand Cabin / 4x4 Mountain Jeeps), quality hotel accommodations, daily breakfast and dinner, bonfires, live BBQ nights, professional tour leads, photography, and road tolls.",
    },
    {
      q: "How can I book a custom private trip with my friends/family?",
      a: "You can use our interactive 'Craft Your Tour' page or message us directly on WhatsApp (+92 300 1234567). We design custom itineraries according to your dates, group size, vehicle preference (Prado, Hiace, Coaster), and hotel tier.",
    },
    {
      q: "What is the booking and payment process?",
      a: "You can reserve your seat with a 50% advance deposit via Bank Transfer, JazzCash, Nayapay, or SadaPay. The remaining 50% is payable on the departure day prior to boarding.",
    },
  ],
  galleryMoments: [
    { title: "Nanga Parbat Reflection", location: "Fairy Meadows", image: "/images/fairy_meadows.jpg" },
    { title: "Attabad Turquoise Waters", location: "Hunza Valley", image: "/images/hunza_passu.jpg" },
    { title: "Shangrila Chalets at Dusk", location: "Skardu", image: "/images/skardu_valley.jpg" },
    { title: "Campfire Jamming Under Stars", location: "Sharan Forest", image: "/images/bonfire_camp.jpg" },
    { title: "Malam Jabba Pine Ridges", location: "Swat Valley", image: "/images/travel_package.jpg" },
    { title: "Golden Hour on KKH", location: "Passu Cones", image: "/images/travel_hero.jpg" },
  ],
};
