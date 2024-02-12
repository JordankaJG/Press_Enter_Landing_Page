{
  // Owl Carousel
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 1,
      margin: 0,
      autoHeight: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: false,
      dotsClass: false,

      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 1,
          nav: true,
        },
        1000: {
          items: 1,
          nav: true,
        },
      },
    });
  });

  // Button event

  const button = document.querySelector(".button_learnMore");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = months[currentDate.getMonth()];
  const date = currentDate.getDate();
  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  const dateSuffix = (number) => {
    if (number > 3 && number < 21) return "th";
    switch (number % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const setZero = (number) => {
    if (number >= 0 && number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  };

  button.addEventListener("click", () => {
    alert(
      `${setZero(hour)}:${setZero(minutes)} / ${date}${dateSuffix(
        date
      )} ${month} ${year}`
    );
  });
}
