




//    start home right tranisition 
  const home_right = document.getElementById("home_right");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        home_right.classList.add("show");
      }
    });
  });

  observer.observe(home_right);
//    end home right tranisition 


//    start our work tranisition 
 
    const target = document.getElementById("tran");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          target.classList.add("show");
        }
      });
    });

    observer.observe(target);
  
// our work tranisition end  


//  contact transition start 
       
  const contactForm = document.getElementById("contact-form");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contactForm.classList.add("show");
      }
    });
  });

  observer.observe(contactForm);

// contact transition end 