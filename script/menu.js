let nav = document.querySelector("nav");
      window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 20) {
          nav.classList.add("category");
        } else {
          nav.classList.remove("category");
        }
      });