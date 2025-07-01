const destination = [
  {
    image: "./assets/img/home-img-1.png",
    title: "Angkor Wat, Siem Reap  - 5days  4 Nights",
    desc: "Teuk thla, Toul Kork, Phom Penh",
  },

  {
    image: "./assets/img/home-img-2.png",
    title: "Kirirom, Kampung Spue  - 5days  4 Nights",
    desc: "Teuk thla, Toul Kork, Phom Penh",
  },

  {
    image: "./assets/img/home-img-3.png",
    title: "Seahorse, Kampot  - 5days  4 Nights",
    desc: "Teuk thla, Toul Kork, Phom Penh",
  },

  {
    image: "./assets/img/home-img-4.png",
    title: "Koh Rong, Sihaknukvill  - 5days  4 Nights",
    desc: "Teuk thla, Toul Kork, Phom Penh",
  },

  {
    image: "./assets/img/home-img-1.png",
    title: "Angkor Wat, Siem Reap  - 5days  4 Nights",
    desc: "Teuk thla, Toul Kork, Phom Penh",
  },

  {
    image: "./assets/img/home-img-2.png",
    title: "Kirirom, Kampung Spue  - 5days  4 Nights",
    desc: "Teuk thla, Toul Kork, Phom Penh",
  },

  {
    image: "./assets/img/home-img-3.png",
    title: "Seahorse, Kampot  - 5days  4 Nights",
    desc: "Teuk thla, Toul Kork, Phom Penh",
  },

  {
    image: "./assets/img/home-img-4.png",
    title: "Koh Rong, Sihaknukvill  - 5days  4 Nights",
    desc: "Teuk thla, Toul Kork, Phom Penh",
  },
];

let cardDestination = destination.map((data, idx) => {
  return `
    <div class="border-1 border-gray-300 w-70 h-95 rounded-2xl shadow-xl shadow-gray-300 cursor-pointer"
         data-aos="fade-up"
         data-aos-anchor-placement="top-center"
x         data-aos-delay="${30 + idx * 30}">
      <img 
      class="rounded-t-2xl"
      src="${data.image}">
      <div class="p-5">
        <h3 class="font-bold text-lg">${data.title}</h3>
      <p class="text-sm my-2">${data.desc}</p>
      <div>
        <i class="fa-solid fa-star text-yellow-300"></i>
        <i class="fa-solid fa-star text-yellow-300"></i>
        <i class="fa-solid fa-star text-yellow-300"></i>
        <i class="fa-solid fa-star text-yellow-300"></i>
        <i class="fa-solid fa-star text-yellow-300"></i>
      </div>
      <div class="flex justify-between items-center my-3">
        <p>$99.99</p>
      <p class="decoration-1 line-through opacity-50">$129.99</p>
      <button class="border-1 border-[#2671c9] p-[0.3rem_0.3rem] rounded-md cursor-pointer">Explore</button>
      </div>
      </div>
    </div>
    `;
});

document.getElementById("card-1").innerHTML = cardDestination.join("");
