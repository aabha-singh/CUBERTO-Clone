Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
    videos: ["https://cuberto.com/assets/home/hero/header.mp4", "https://cuberto.com/assets/projects/qvino/cover.mp4", "https://cuberto.com/assets/featured/header.mp4"],
  });

  gsap.to(".fleftelm", {
    scrollTrigger: {
      trigger: "#fimages",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-275%",
    ease: Power3,
  });

  let sections = document.querySelectorAll(".fleftelm");
  Shery.imageEffect(".images", {
    style: 2,
    slideStyle: (setScroll) => {
      sections.forEach(function (section, index) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          scrub: 4,
          onUpdate: function (prog) {
            setScroll(prog.progress + index);
          },
        });
      });
    },
  });