// public/js/main.js
// Vanilla JS: toggle hamburger menu + handle form chat (placeholder Sprint 1)

document.addEventListener("DOMContentLoaded", function () {
  // ---- Hamburger menu toggle ----
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener("click", function () {
      const isOpen = mobileMenu.classList.contains("flex");

      if (isOpen) {
        mobileMenu.classList.remove("flex");
        mobileMenu.classList.add("hidden");
        hamburgerBtn.setAttribute("aria-expanded", "false");
      } else {
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("flex");
        hamburgerBtn.setAttribute("aria-expanded", "true");
      }
    });
  }

  // ---- Form Tanya AI (belum ada logic balasan, baru Sprint 2) ----
  const chatForm = document.getElementById("chatForm");
  const chatBox = document.getElementById("chatBox");

  if (chatForm && chatBox) {
    chatForm.addEventListener("submit", function (e) {
      e.preventDefault(); // cegah reload halaman

      const input = document.getElementById("pesan");
      const pesan = input.value.trim();

      // Validasi input dasar
      if (pesan === "") {
        return;
      }

      // Tampilkan pesan user di chat box (sementara, belum ada balasan AI)
      const userBubble = document.createElement("div");
      userBubble.className =
        "bg-gray-100 text-gray-800 rounded-lg px-4 py-2 max-w-[80%] text-sm ml-auto";
      userBubble.textContent = pesan;
      chatBox.appendChild(userBubble);

      input.value = "";
      chatBox.scrollTop = chatBox.scrollHeight;

      // NOTE: Endpoint POST /api/chat & logic balasan AI dummy
      // baru diimplementasikan di Sprint 2.
    });
  }
});
