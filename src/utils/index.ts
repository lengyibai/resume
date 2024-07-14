export default (el: HTMLElement, className: string) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.children[0].classList.remove(className);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.25 }
  );
  observer.observe(el);
};
