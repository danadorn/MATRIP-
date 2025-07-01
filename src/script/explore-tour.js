// explore-tour.js
const exploreTourContainer = document.getElementById("explore-tour");

// Pick first 8 tours (or any logic you want)
const exploreTours = tourData.slice(0, 8);

exploreTours.forEach((tour) => {
  const tourCard = document.createElement("div");
  tourCard.className = 'hover:scale-110 duration-300';

  tourCard.innerHTML = `
    <a href="tour-detail.html?id=${tour.id}">
      <div data-aos="fade-up" data-aos-delay="500" class="border-1 border-gray-300 w-70 rounded-2xl shadow-xl cursor-pointer h-100">
        <img class="rounded-t-2xl" src="${tour.image}">
        <div class="p-5">
          <h3 class="font-bold text-lg">${tour.title}</h3>
          <p class="text-sm my-2">${tour.desc}</p>
          <div class="text-yellow-300">${createStarsHTML(tour.stars)}</div>
          <div class="flex gap-5 items-center my-3">
            <p>$${tour.price}</p>
            <p class="line-through opacity-50">$${tour.oldPrice}</p>
          </div>
        </div>
      </div>
    </a>
  `;
  exploreTourContainer.appendChild(tourCard);
});

function createStarsHTML(count) {
  return Array(count).fill('<i class="fa-solid fa-star mr-2"></i>').join('');
}
