const eventData = {
  "1": {
    title: "Angkor Sankranta",
    date: "14 to 16 - April - 2025",
    location: "Siem Reap - Cambodia",
    description:
      "Angkor Sankranta 2025 is a vibrant New Year celebration held in Siem Reap, Cambodia, during Khmer New Year. In 2025, it brings together locals and tourists with traditional games, cultural performances, food fairs, and art displays set around the iconic Angkor Wat. The event highlights Khmer heritage and community spirit in a festive, family-friendly atmosphere.",
    price: "$45",
    startDate: "14 April 2025",
    images: [
      "../../assets/img/galary-1.png",
      "../../assets/img/galary-2.png",
      "../../assets/img/galary-3.png",
      "../../assets/img/galary-4.png",
      "../../assets/img/galary-5.png",
      "../../assets/img/galary-6.png",
    ],
    mainImage: "../../assets/img/event-1.png",
    mapImage: "../../assets/img/map-1.png",
  },
  "2": {
    title: "Phnom Penh Water Festival",
    date: "4 to 6 - November - 2025",
    location: "Phnom Penh Riverside",
    description:
      "Join the exciting Phnom Penh Water Festival 2025 along the riverside! Enjoy traditional boat races, live music, food stalls, and fireworks. Celebrate Cambodia's vibrant culture in this national event full of energy and community spirit.",
    price: "$30",
    startDate: "4 November 2025",
    images: [
      "../../assets/img/galary-3.png",
      "../../assets/img/galary-4.png",
      "../../assets/img/galary-5.png",
      "../../assets/img/galary-6.png",
    ],
    mainImage: "../../assets/img/event-2.png",
    mapImage: "../../assets/img/map-2.png",
  },
  "3": {
    title: "Cambodian Food Fair",
    date: "10 - August - 2025",
    location: "Siem Reap Night Market",
    description:
      "Taste authentic Cambodian cuisine at the Food Fair 2025! From street food to gourmet dishes, this event offers cooking shows, tastings, and cultural performances in a lively setting.",
    price: "$25",
    startDate: "10 August 2025",
    images: [
      "../../assets/img/galary-1.png",
      "../../assets/img/galary-3.png",
      "../../assets/img/galary-5.png",
    ],
    mainImage: "../../assets/img/event-3.png",
    mapImage: "../../assets/img/map-3.png",
  }
};

// Get event ID from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const data = eventData[id];

// Check if data exists
if (data) {
  // Update text content
  document.getElementById("eventTitleHero").textContent = data.title;
  document.getElementById("eventTitle").textContent = data.title;
  document.getElementById("eventDate").textContent = data.date;
  document.getElementById("eventLocation").textContent = data.location;
  document.getElementById("eventLocationSidebar").textContent = data.location;
  document.getElementById("eventDescription").textContent = data.description;
  document.getElementById("eventPrice").textContent = data.price;
  document.getElementById("eventStartDate").textContent = data.startDate;

  // Update main event image
  const mainImage = document.querySelector('article img');
  if (mainImage) mainImage.src = data.mainImage;

  // Update map image
  const mapImage = document.getElementById("eventPhoto");
  if (mapImage) mapImage.src = data.mapImage;

  // Update gallery images
  const gallery = document.getElementById("eventGallery");
  gallery.innerHTML = ""; // Clear existing images
  data.images.forEach((imgSrc) => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.className = "w-50";
    gallery.appendChild(img);
  });

} else {
  document.body.innerHTML = `
    <div class="h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-7xl font-bold text-secondary mb-4">Event Not Found</h1>
      <p class="text-lg mb-6">The event you're looking for doesn't exist.</p>
      <a href="./event.html" class="text-white font-semibold rounded-2xl p-[1rem_1rem] bg-primary "> Back to all events</a>
    </div>
  `;
}
