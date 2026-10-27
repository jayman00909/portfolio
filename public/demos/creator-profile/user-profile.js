document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");
    const lightBtn = document.getElementById("lightBtn");
    const darkBtn = document.getElementById("darkBtn");
    const body = document.body;

    // Handle tab switching
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active classes
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("visible"));

            // Add active to clicked tab
            tab.classList.add("active");
            document.getElementById(tab.getAttribute("data-tab")).classList.add("visible");
        });
    });

    // Light theme toggle
    lightBtn.addEventListener("click", () => {
        body.classList.add("light-theme");
        body.classList.remove("dark-theme");
        lightBtn.classList.add("active");
        darkBtn.classList.remove("active");
    });

    // Dark theme toggle
    darkBtn.addEventListener("click", () => {
        body.classList.add("dark-theme");
        body.classList.remove("light-theme");
        darkBtn.classList.add("active");
        lightBtn.classList.remove("active");
    });

    // Show default tab on load
    document.querySelector(".tab-content#about").classList.add("visible");
});
  