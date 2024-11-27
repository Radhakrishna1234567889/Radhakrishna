document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((questionLink) => {
    questionLink.addEventListener("click", (e) => {
      e.preventDefault();
      const answerDiv = questionLink.nextElementSibling;
      questionLink.classList.toggle("open");
      answerDiv.style.display = answerDiv.style.display === "block" ? "none" : "block";
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.querySelector('.gallery-container');

  // Example image data
  const images = [
      { src: 'images/rk/RK images/radha-krishna-1.jpg', alt: 'Image 1' },
      { src: 'images/rk/RK images/radha-krishna-2.jpg', alt: 'Image 2' },
      { src: 'images/rk/RK images/radha-krishna-3.jpg', alt: 'Image 3' },
      { src: 'images/rk/RK images', alt: 'Image 3' },

  ];

  // Function to create a card
  function createCard(image) {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
          <img src="${image.src}" alt="${image.alt}">
          <div class="card-actions">
              <button class="action-button save-button">Save</button>
              <a href="${image.src}" download class="action-button">Download</a>
          </div>
      `;

      galleryContainer.appendChild(card);

      // Add Save functionality
      card.querySelector('.save-button').addEventListener('click', () => {
          alert(`Saved: ${image.alt}`);
      });
  }

  // Load images into the gallery
  images.forEach(image => createCard(image));
});
