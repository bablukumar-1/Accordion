const accordionItem = document.querySelectorAll(".accordion-item");
    accordionItem.forEach((accordionBox) => {
      const accordionTitle = accordionBox.querySelector(".accordion-title");
      const icon = accordionBox.querySelector(".icon");
      const accordionContent = accordionBox.querySelector(".accordion-content");

      accordionTitle.addEventListener("click", () => {
        accordionItem.forEach((accordionBoxIem) => {
          if (accordionBoxIem != accordionBox) {
            accordionBoxIem
              .querySelector(".accordion-content")
              .classList.remove("active");

            accordionBoxIem.querySelector(".icon").innerText = "+";
          }
        });
        const isActive = accordionContent.classList.toggle("active");
        icon.innerText = isActive ? "-" : "+";
      });
    });