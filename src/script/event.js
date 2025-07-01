const eventCard = [
  {
    id: 1,
    image: "../../assets/img/event-1.png",
    title: "Angkor Sankranta",
    desc: "Angkor Sankranta is a cultural celebration showcasing traditional games, dances, food, and ceremonies within the iconic Angkor temple complex.",
    date: "14 to 16 - April - 2025",
    location: "Siem Reap - Cambodia",
  },
  {
    id: 2,
    image: "../../assets/img/event-2.png",
    title: "Water Festival",
    desc: "The Water Festival celebrates the end of the rainy season and the Tonle Sap River flow reversal, with boat races, lighted floats, and festivities especially in Phnom Penh.",
    date: "04 to 06 - Nov - 2025",
    location: "Phnom Penh - Cambodia",
  },
  {
    id: 3,
    image: "../../assets/img/event-3.png",
    title: "Sea Festival",
    desc: "The Sea Festival celebrates Cambodia coastal beauty and tourism. Featuring concerts, sports competitions, exhibitions, and beach festivities.",
    date: "Upcoming",
    location: "Koh Kong - Cambodia",
  },
];

let eventServices = eventCard.map((data) => {
  return `
    <div class="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-8 border-b-1 border-gray-200 shadow-2xl shadow-gray-30 rounded-2xl md:rounded-4xl px-4 sm:px-6 md:px-8 py-6 md:py-6 bg-white dark:bg-neutral-900"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center">
        <div class="flex-1 flex flex-col justify-between">
          <div class="flex flex-col gap-4 md:gap-6">
            <div class="flex flex-wrap gap-2 md:gap-4 items-center">
              <div class="flex gap-2 md:gap-3 items-center">
                <i class="fa-solid fa-calendar text-ascent"></i>
                <p class="dark:text-gray-200 text-xs md:text-base">${data.date}</p>
              </div>
              <div class="flex gap-2 md:gap-3 items-center">
                <i class="fa-solid fa-location-dot text-ascent"></i>
                <p class="dark:text-gray-200 text-xs md:text-base">${data.location}</p>
              </div>
            </div>
            <h2 class="font-bold text-lg sm:text-2xl md:text-2xl lg:text-3xl mt-2 md:mt-4 text-primary dark:text-secondary">${data.title}</h2>
          </div>
          <div class="mt-4 md:mt-8 hidden md:block">
            <p class="text-justify dark:text-gray-200 text-xs sm:text-sm md:text-base">${data.desc}</p>
            <a href="./event-detail.html?id=${data.id}">
              <div class="flex items-center gap-2 md:gap-3 cursor-pointer mt-4 md:mt-5">
                <button class="text-secondary font-bold cursor-pointer text-xs sm:text-sm md:text-base">Event Detail</button>
                <svg class="fill-secondary" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
              </div>
            </a>
          </div>
        </div>
        <div class="flex justify-center items-center w-full md:w-72 lg:w-80 flex-shrink-0">
          <img class="w-full max-w-xs sm:max-w-sm md:w-72 lg:w-80 rounded-xl md:rounded-2xl object-cover" src="${data.image}" alt="">
        </div>
        <div class="w-full mt-4 md:mt-0 md:hidden">
          <p class="text-justify dark:text-gray-200 text-xs sm:text-sm md:text-base">${data.desc}</p>
          <a href="./event-detail.html?id=${data.id}">
            <div class="flex items-center gap-2 md:gap-3 cursor-pointer mt-4 md:mt-5">
              <button class="text-secondary font-bold cursor-pointer text-xs sm:text-sm md:text-base">Event Detail</button>
              <svg class="fill-secondary" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
            </div>
          </a>
        </div>
    </div>
  `;
});

document.getElementById("event-card").innerHTML = eventServices.join("");
