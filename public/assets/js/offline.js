const body = document.querySelector("body");

// After DOM Loaded
document.addEventListener("DOMContentLoaded", (event) => {
  // On initial load to check connectivity
  if (!navigator.onLine) {
    updateNetworkStatus();
  }

  window.addEventListener("online", updateNetworkStatus, false);
  window.addEventListener("offline", updateNetworkStatus, false);
});

// To update network status
function updateNetworkStatus() {
  if (navigator.onLine) {
    body.classList.remove("offline");
    console.log("Online");
  } else {
    body.classList.add("offline");
    console.log("Offline");
  }
}
