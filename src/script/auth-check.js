window.addEventListener('DOMContentLoaded', () => {
  const actionBtn = document.getElementById('user-action-button');
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  if (actionBtn) {
    if (isLoggedIn) {
      actionBtn.innerHTML = `
        <a href="../pages/user-account.html">
          <img src="../../assets/img/cholna-2.png" alt="Profile" class="w-15 rounded-full border-2 border-primary shadow-md" />
        </a>
      `;
    } else {
      actionBtn.innerHTML = `
        <a href="../pages/user-login.html">
          <button class="bg-primary p-[0.8rem_1.2rem] rounded-lg text-white font-bold hover:bg-[#0653ad] transition duration-500 hover:duration-500 cursor-pointer">
            Log In
          </button>
        </a>
      `;
    }
  }
});
