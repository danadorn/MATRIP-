
const tourData = [
  {
    id: 1,
    image: '../../assets/img/home-img-1.png',
    title: 'Angkor Wat, Siem Reap - 5 Days 4 Nights',
    desc: 'Teuk Thla, Toul Kork, Phnom Penh',
    location: 'Siem Reap, Cambodia',
    price: 99.99,
    oldPrice: 129.99,
    gallery: [
      '../../assets/img/tour-galary-1.jpg',
      '../../assets/img/tour-galary-2.jpg',
      '../../assets/img/tour-galary-3.jpg'
    ],
    overview: `
      <p class="mb-5 leading-7 text-justify">
        Discover the majestic Angkor Wat, Cambodia’s ancient wonder. This 5-day, 4-night tour brings you face-to-face with breathtaking temples, rich culture, and unforgettable history.
      </p>
      <p class="mb-5 leading-7 text-justify">
        Explore the temple complex with expert guides, enjoy local cuisine, and relax in comfortable accommodations throughout your stay in Siem Reap.
      </p>
    `,
    include: [
      'Daily breakfast, lunch, and dinner',
      'English-speaking tour guide',
      'All entrance fees',
      'Transport from/to Phnom Penh',
      'Hotel accommodation'
    ],
    exclude: [
      'Personal expenses',
      'Tips for guide/driver',
      'Drinks and snacks',
      'Travel insurance'
    ],
    plan: [
      'Arrival in Siem Reap → Hotel check-in → Welcome dinner',
      'Full-day temple tour (Angkor Wat, Bayon, Ta Prohm)',
      'Floating village visit → Cultural show in the evening',
      'Leisure day or optional bike tour',
      'Return to Phnom Penh'
    ],
    mapLink: 'https://www.google.com/maps/embed?...'
  },
  {
    id: 2,
    image: '../../assets/img/home-img-2.png',
    title: 'Kirirom, Kampung Spue - 5 Days 4 Nights',
    desc: 'Teuk Thla, Toul Kork, Phnom Penh',
    location: 'Kampong Speu, Cambodia',
    price: 89.99,
    oldPrice: 109.99,
    gallery: [
      '../../assets/img/tour-galary-1.jpg',
      '../../assets/img/tour-galary-2.jpg',
      '../../assets/img/tour-galary-3.jpg'
    ],
    overview: `
      <p class="mb-5 leading-7 text-justify">
        Escape to Cambodia's first national park where cool mountain air, pine forests, and peaceful waterfalls await. Kirirom is a natural haven ideal for relaxation and adventure.
      </p>
      <p class="mb-5 leading-7 text-justify">
        Experience guided hikes, campfires, and mountain biking during this 5-day, 4-night journey into the wild.</p>
    `,
    include: [
      'Meals and snacks',
      'Tents and gear',
      'Tour guide',
      'Park entrance fees',
      'Transportation'
    ],
    exclude: [
      'Alcoholic drinks',
      'Insurance',
      'Personal purchases'
    ],
    plan: [
      'Depart Phnom Penh → Kirirom → campsite setup',
      'Waterfall hike and nature walk',
      'Mountain biking → forest lunch → night campfire',
      'Local village visit → cultural games',
      'Wrap up and return'
    ],
    mapLink: 'https://www.google.com/maps/embed?...'
  },
  {
    id: 3,
    image: '../../assets/img/home-img-3.png',
    title: 'Seahorse, Kampot - 5 Days 4 Nights',
    desc: 'Teuk Thla, Toul Kork, Phnom Penh',
    location: 'Kampot, Cambodia',
    price: 79.99,
    oldPrice: 109.99,
    gallery: [
      '../../assets/img/tour-galary-1.jpg',
      '../../assets/img/tour-galary-2.jpg',
      '../../assets/img/tour-galary-3.jpg'
    ],
    overview: `
      <p class="mb-5 leading-7 text-justify">
        Discover Kampot's coastal beauty and laid-back charm. Seahorse retreat offers beachfront fun, pepper farm visits, and riverside relaxation.
      </p>
      <p class="mb-5 leading-7 text-justify">
        Enjoy kayaking, seafood feasts, and charming sunset views in a peaceful tropical atmosphere.</p>
    `,
    include: [
      'Hotel stay by the river',
      'Daily breakfast & dinner',
      'Kayak rental',
      'Guided city & farm tour',
      'Private transport'
    ],
    exclude: [
      'Lunches',
      'Souvenirs',
      'Tips',
      'Drinks'
    ],
    plan: [
      'Drive to Kampot → riverside check-in',
      'Explore town & pepper plantation → sunset cruise',
      'Beach & kayak day',
      'Free day for optional activities',
      'Return to Phnom Penh'
    ],
    mapLink: 'https://www.google.com/maps/embed?...'
  },
  {
    id: 4,
    image: '../../assets/img/home-img-4.png',
    title: 'Koh Rong, Sihaknukvill - 5 Days 4 Nights',
    desc: 'Teuk Thla, Toul Kork, Phnom Penh',
    location: 'Koh Rong, Cambodia',
    price: 119.99,
    oldPrice: 149.99,
    gallery: [
      '../../assets/img/tour-galary-1.jpg',
      '../../assets/img/tour-galary-2.jpg',
      '../../assets/img/tour-galary-3.jpg'
    ],
    overview: `
      <p class="mb-5 leading-7 text-justify">
        Escape to Koh Rong for turquoise waters, white sand beaches, and glowing plankton. A dream island escape perfect for couples and friends.
      </p>
      <p class="mb-5 leading-7 text-justify">
        This all-inclusive beach vacation includes snorkeling, boat tours, and beachside barbecues under the stars.</p>
    `,
    include: [
      'Beachfront bungalow stay',
      'Boat and snorkeling tour',
      'Meals (breakfast + dinner)',
      'Ferry tickets',
      'Island guide'
    ],
    exclude: [
      'Lunches',
      'Spa services',
      'Tips',
      'Alcohol'
    ],
    plan: [
      'Boat ride to Koh Rong → hotel check-in',
      'Island tour → BBQ night',
      'Snorkeling and beach games',
      'Free day with spa option',
      'Return ferry → Phnom Penh'
    ],
    mapLink: 'https://www.google.com/maps/embed?...'
  },

  {
    id: 5,
    image: '../../assets/img/home-img-4.png',
    title: 'Koh Rong, Sihaknukvill - 5 Days 4 Nights',
    desc: 'Teuk Thla, Toul Kork, Phnom Penh',
    location: 'Koh Rong, Cambodia',
    price: 119.99,
    oldPrice: 149.99,
    gallery: [
      '../../assets/img/tour-galary-1.jpg',
      '../../assets/img/tour-galary-2.jpg',
      '../../assets/img/tour-galary-3.jpg'
    ],
    overview: `
      <p class="mb-5 leading-7 text-justify">
        Escape to Koh Rong for turquoise waters, white sand beaches, and glowing plankton. A dream island escape perfect for couples and friends.
      </p>
      <p class="mb-5 leading-7 text-justify">
        This all-inclusive beach vacation includes snorkeling, boat tours, and beachside barbecues under the stars.</p>
    `,
    include: [
      'Beachfront bungalow stay',
      'Boat and snorkeling tour',
      'Meals (breakfast + dinner)',
      'Ferry tickets',
      'Island guide'
    ],
    exclude: [
      'Lunches',
      'Spa services',
      'Tips',
      'Alcohol'
    ],
    plan: [
      'Boat ride to Koh Rong → hotel check-in',
      'Island tour → BBQ night',
      'Snorkeling and beach games',
      'Free day with spa option',
      'Return ferry → Phnom Penh'
    ],
    mapLink: 'https://www.google.com/maps/embed?...'
  },

  {
    id: 6,
    image: '../../assets/img/home-img-4.png',
    title: 'Koh Rong, Sihaknukvill - 5 Days 4 Nights',
    desc: 'Teuk Thla, Toul Kork, Phnom Penh',
    location: 'Koh Rong, Cambodia',
    price: 119.99,
    oldPrice: 149.99,
    gallery: [
      '../../assets/img/tour-galary-1.jpg',
      '../../assets/img/tour-galary-2.jpg',
      '../../assets/img/tour-galary-3.jpg'
    ],
    overview: `
      <p class="mb-5 leading-7 text-justify">
        Escape to Koh Rong for turquoise waters, white sand beaches, and glowing plankton. A dream island escape perfect for couples and friends.
      </p>
      <p class="mb-5 leading-7 text-justify">
        This all-inclusive beach vacation includes snorkeling, boat tours, and beachside barbecues under the stars.</p>
    `,
    include: [
      'Beachfront bungalow stay',
      'Boat and snorkeling tour',
      'Meals (breakfast + dinner)',
      'Ferry tickets',
      'Island guide'
    ],
    exclude: [
      'Lunches',
      'Spa services',
      'Tips',
      'Alcohol'
    ],
    plan: [
      'Boat ride to Koh Rong → hotel check-in',
      'Island tour → BBQ night',
      'Snorkeling and beach games',
      'Free day with spa option',
      'Return ferry → Phnom Penh'
    ],
    mapLink: 'https://www.google.com/maps/embed?...'
  },

  {
    id: 7,
    image: '../../assets/img/home-img-4.png',
    title: 'Koh Rong, Sihaknukvill - 5 Days 4 Nights',
    desc: 'Teuk Thla, Toul Kork, Phnom Penh',
    location: 'Koh Rong, Cambodia',
    price: 119.99,
    oldPrice: 149.99,
    gallery: [
      '../../assets/img/tour-galary-1.jpg',
      '../../assets/img/tour-galary-2.jpg',
      '../../assets/img/tour-galary-3.jpg'
    ],
    overview: `
      <p class="mb-5 leading-7 text-justify">
        Escape to Koh Rong for turquoise waters, white sand beaches, and glowing plankton. A dream island escape perfect for couples and friends.
      </p>
      <p class="mb-5 leading-7 text-justify">
        This all-inclusive beach vacation includes snorkeling, boat tours, and beachside barbecues under the stars.</p>
    `,
    include: [
      'Beachfront bungalow stay',
      'Boat and snorkeling tour',
      'Meals (breakfast + dinner)',
      'Ferry tickets',
      'Island guide'
    ],
    exclude: [
      'Lunches',
      'Spa services',
      'Tips',
      'Alcohol'
    ],
    plan: [
      'Boat ride to Koh Rong → hotel check-in',
      'Island tour → BBQ night',
      'Snorkeling and beach games',
      'Free day with spa option',
      'Return ferry → Phnom Penh'
    ],
    mapLink: 'https://www.google.com/maps/embed?...'
  },

  {
    id: 8,
    image: '../../assets/img/home-img-4.png',
    title: 'Koh Rong, Sihaknukvill - 5 Days 4 Nights',
    desc: 'Teuk Thla, Toul Kork, Phnom Penh',
    location: 'Koh Rong, Cambodia',
    price: 119.99,
    oldPrice: 149.99,
    gallery: [
      '../../assets/img/tour-galary-1.jpg',
      '../../assets/img/tour-galary-2.jpg',
      '../../assets/img/tour-galary-3.jpg'
    ],
    overview: `
      <p class="mb-5 leading-7 text-justify">
        Escape to Koh Rong for turquoise waters, white sand beaches, and glowing plankton. A dream island escape perfect for couples and friends.
      </p>
      <p class="mb-5 leading-7 text-justify">
        This all-inclusive beach vacation includes snorkeling, boat tours, and beachside barbecues under the stars.</p>
    `,
    include: [
      'Beachfront bungalow stay',
      'Boat and snorkeling tour',
      'Meals (breakfast + dinner)',
      'Ferry tickets',
      'Island guide'
    ],
    exclude: [
      'Lunches',
      'Spa services',
      'Tips',
      'Alcohol'
    ],
    plan: [
      'Boat ride to Koh Rong → hotel check-in',
      'Island tour → BBQ night',
      'Snorkeling and beach games',
      'Free day with spa option',
      'Return ferry → Phnom Penh'
    ],
    mapLink: 'https://www.google.com/maps/embed?...'
  },
];