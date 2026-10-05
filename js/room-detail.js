/* ========================================
   Header Menu
======================================== */

const menuButton = document.querySelector(
  ".site-header__menu-button"
);

const navigation = document.querySelector(
  ".site-header__nav"
);

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    const isOpen =
      navigation.classList.toggle("is-open");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen
    );

  });

}


/* ========================================
   Room Gallery
======================================== */

const galleryMainImage = document.querySelector(
  "#gallery-main-image"
);

const galleryThumbnails = document.querySelectorAll(
  ".room-gallery__thumbnail"
);

galleryThumbnails.forEach((thumbnail) => {

  thumbnail.addEventListener("click", () => {

    const imagePath =
      thumbnail.dataset.image;

    const imageAlt =
      thumbnail.dataset.alt;

    galleryMainImage.src = imagePath;
    galleryMainImage.alt = imageAlt;

    galleryThumbnails.forEach((item) => {
      item.classList.remove("is-active");
    });

    thumbnail.classList.add("is-active");

  });

});


/* ========================================
   Amenities More Button
======================================== */

const amenitiesButton = document.querySelector(
  "#amenities-more-button"
);

const amenitiesHidden = document.querySelector(
  "#amenities-hidden"
);

if (amenitiesButton && amenitiesHidden) {

  amenitiesButton.addEventListener("click", () => {

    const isOpen =
      amenitiesButton.getAttribute(
        "aria-expanded"
      ) === "true";

    if (isOpen) {

      amenitiesHidden.hidden = true;

      amenitiesButton.setAttribute(
        "aria-expanded",
        "false"
      );

      amenitiesButton.innerHTML =
        'その他の設備・アメニティを見る <span>＋</span>';

    } else {

      amenitiesHidden.hidden = false;

      amenitiesButton.setAttribute(
        "aria-expanded",
        "true"
      );

      amenitiesButton.innerHTML =
        '設備・アメニティを閉じる <span>−</span>';

    }

  });

}