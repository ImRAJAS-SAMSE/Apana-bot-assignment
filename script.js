document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.querySelector(".cta");

  ctaButton.addEventListener("click", () => {
    alert("Get started with analyzing your resume!");
  });
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.content, .features, .testimonials, .footer__container`);
sr.reveal(`.content h2, .content p, .content .cta`, {
  delay: 600,
  origin: "bottom",
  interval: 100,
});
sr.reveal(
  `.features .feature:nth-child(1), .testimonials .testimonial:nth-child(1)`,
  { origin: "left" }
);
sr.reveal(
  `.features .feature:nth-child(2), .testimonials .testimonial:nth-child(2)`,
  { origin: "right" }
);
sr.reveal(`.features .feature:nth-child(3)`, { interval: 100 });
