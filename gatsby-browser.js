exports.onClientEntry = () => {

  // Make the navbar solid when scrolling down
  window.onscroll = () => {
    if (window.pageYOffset > 150) {
      document.querySelector('nav').style.background = "var(--color-auxiliary)";
      document.querySelector('nav').style.transition = "1s";
    } else {
      document.querySelector('nav').style.background = "transparent";
    }
  }
}