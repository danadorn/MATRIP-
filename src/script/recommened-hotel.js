const recHotel = [

  {image: '../../assets/img/FCC-Angkor-by-Avani-Hotels-&-Resorts-159.jpg',
   title: 'Avani Hotel',
   rating: '5.0',
   review: '(314 reviews)',
   price: '$159',
  },

  {image: '../../assets/img/Koulen-Hotel-162.jpg',
   title: 'Koulen',
   rating: '5.0',
   review: '(843 reviews)',
   price: '$162',
  },

  {image: '../../assets/img/treeline-urban-resort-84.jpg',
   title: 'Treeline Urban',
   rating: '5.0',
   review: '(536 reviews)',
   price: '$84',
  },

  {image: '../../assets/img/The-Embassy-Angkor-Resort-&-Spa 73.jpg',
   title: 'Embassy Angkor',
   rating: '5.0',
   review: '(971 reviews)',
   price: '$73',
  }
]

let recHotelService = recHotel.map(
  (data, idx) => {
    return `
  <div class="border-1 border-gray-300 rounded-2xl w-70 shadow-2xl" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="${100 + idx * 100}">
                <img 
                class="w-70 rounded-t-2xl"
                src="${data.image}" alt="">

                <h3 class="text-lg text-center mt-3 mb-3 ">${data.title}</h3>
                <div class="flex gap-3 mb-5 justify-center">
                  <p class="text-sm">${data.rating}</p>
                <div class="text-yellow-300 text-sm">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>

                <p class="text-sm underline font-bold cursor-pointer">${data.review}</p>
                </div>

                <h4 class="mb-3 ml-3">from <span class="font-medium text-xl pl-3">${data.price}</span></h4>
                <button class="p-[0.5rem_1rem] rounded-xl border-1 border-secondary text-secondary ml-3 mb-3">Check availability</button>
              </div>
            </div>
    `
  }
)

document.getElementById("rec-hotel").innerHTML = recHotelService.join('');




