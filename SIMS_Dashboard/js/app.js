const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

document.querySelectorAll(".nav-parent").forEach((button) => {
  button.addEventListener("click", () => {
    const menu = document.getElementById(button.dataset.menu);
    const willOpen = !menu.classList.contains("open");
    menu.classList.toggle("open", willOpen);
    button.classList.toggle("expanded", willOpen);
    const chevron = button.querySelector(".chevron");
    chevron.classList.toggle("fa-chevron-up", willOpen);
    chevron.classList.toggle("fa-chevron-down", !willOpen);
  });
});

document.querySelectorAll(".sub-menu a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showToast(`${link.textContent.trim()} module will be connected in the next development phase.`);
  });
});

document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const query = document.getElementById("searchInput").value.trim();
  const scope = document.getElementById("searchScope");
  const scopeLabel = scope.options[scope.selectedIndex].text;
  if (!query) {
    showToast("Enter a name, email, or mobile number to search.");
    document.getElementById("searchInput").focus();
    return;
  }
  showToast(`Search for "${query}" in ${scopeLabel} will be connected when records are added.`);
});

const profileButton = document.getElementById("profileButton");
const profileMenu = document.getElementById("profileMenu");
profileButton.addEventListener("click", (event) => {
  event.stopPropagation();
  profileMenu.classList.toggle("open");
});
document.addEventListener("click", (event) => {
  if (!profileMenu.contains(event.target) && !profileButton.contains(event.target)) {
    profileMenu.classList.remove("open");
  }
});
profileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    profileMenu.classList.remove("open");
    showToast(`${link.textContent.trim()} will be implemented in a later phase.`);
  });
});
