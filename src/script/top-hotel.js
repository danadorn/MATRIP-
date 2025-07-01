const topHotel = [

  {image: '../../assets/img/Viroth-Hotel-113.jpg',
   title: 'Golden Temple Residence',
   rating: '5.0',
   review: '(3,712 reviews)',
   price: '$73',
  },

  {image: '../../assets/img/anatara-200.jpg',
   title: 'Anantara Angkor Resort',
   rating: '5.0',
   review: '(1,332 reviews)',
   price: '$200',
  },

  {image: '../../assets/img/Shinta-Mni-Angkor-and-Bensley-Collection-187.jpg',
   title: 'Shinta Mani Angkor',
   rating: '5.0',
   review: '(2,413 reviews)',
   price: '$187',
  },

  {image: '../../assets/img/Courtyard-Siem-Reap-Resort-94.jpg',
   title: 'Courtyard Siem Reap',
   rating: '5.0',
   review: '(1,514 reviews)',
   price: '$94',
  }
]

let hotelService = topHotel.map(
  (data, idx) => {
    return `
      <div class="border-1 border-gray-300 rounded-2xl w-70 shadow-2xl " data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="${100 + idx * 100}">
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

document.getElementById("hotel").innerHTML = hotelService.join('');




