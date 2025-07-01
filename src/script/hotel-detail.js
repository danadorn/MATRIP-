// hotel-detail.js
const hotels = [
  {
    id: 1,
    name: 'Phnom Penh Luxury Hotel',
    image: '../../assets/img/hotel-1.jpg',
    location: 'Phnom Penh, Cambodia',
    description: 'Located in the heart of Phnom Penh, this luxury hotel offers stunning city views, a rooftop pool, and top-tier service.',
    price: 89,
    rooms: 12
  },
  {
    id: 2,
    name: 'Kep Beach Resort',
    image: '../../assets/img/hotel-2.jpg',
    location: 'Kep, Cambodia',
    description: 'Enjoy peaceful beachside stays with fresh seafood and beautiful sunsets at our top-rated resort in Kep.',
    price: 75,
    rooms: 7
  },
  {
    id: 3,
    name: 'Siem Reap Boutique Stay',
    image: '../../assets/img/hotel-3.jpg',
    location: 'Siem Reap, Cambodia',
    description: 'Just minutes from Angkor Wat, this boutique hotel features traditional decor, a saltwater pool, and spa treatments.',
    price: 65,
    rooms: 15
  }
];

// Get hotel id from URL
const params = new URLSearchParams(window.location.search);
const hotelId = parseInt(params.get('id'));

const selectedHotel = hotels.find(h => h.id === hotelId);

if (selectedHotel) {
  document.getElementById('hotelName').textContent = selectedHotel.name;
  document.getElementById('hotelImage').src = selectedHotel.image;
  document.getElementById('hotelLocation').textContent = selectedHotel.location;
  document.getElementById('hotelDescription').textContent = selectedHotel.description;
  document.getElementById('hotelPrice').textContent = selectedHotel.price;
  document.getElementById('hotelRooms').textContent = selectedHotel.rooms;
} else {
  document.getElementById('hotel-detail').innerHTML = '<p class="text-red-500 text-xl">Hotel not found.</p>';
}
