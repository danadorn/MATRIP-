const recommendedPlaces = [
    "Phnom Penh", "Siem Reap", "Kep", "Kampot",
    "Sihanoukville", "Battambang", "Mondulkiri", "Koh Rong",
    "Ratanakiri", "Poipet", "Preah Vihear", "Kampong Cham", "Banteay Meanchey",
    "Kampong Thom", "Takeo"
];

const tagContainer = document.getElementById("tagContainer");

recommendedPlaces.forEach((place, idx) => {
    const btn = document.createElement("button");
    btn.innerText = place;
    btn.className = "border-1 broder-gray-300 hover:bg-blue-900 hover:text-white transition duration-500 text-blue-800 text-sm px-4 py-1 rounded-full transition cursor-pointer mb-3 dark:text-gray-200";
    btn.setAttribute("data-aos", "fade-up");
    btn.setAttribute("data-aos-delay", 100 + idx * 100); 
    btn.onclick = () => window.location.href = "../pages/404.html";
    tagContainer.appendChild(btn);
});

if (window.AOS) AOS.refresh();