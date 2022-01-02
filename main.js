const scrollOffset = 600;




window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;

  const aboutNav = document.getElementById("about-nav");
  const projectsNav = document.getElementById("projects-nav");
  const skillsNav = document.getElementById("skills-nav");
  const contactNav = document.getElementById("contact-nav");

  const aboutDivider = document.getElementById("about-divider");
  const projectsDivider = document.getElementById("projects-divider");
  const skillsDivider = document.getElementById("skills-divider");
  const contactDivider = document.getElementById("contact-divider");

  const aboutScroll = getScrollPosition("about") - scrollOffset;
  const projectsScroll = getScrollPosition("projects") - scrollOffset;
  const skillsScroll = getScrollPosition("skills") - scrollOffset;
  const contactScroll = getScrollPosition("contact") - scrollOffset ;


  if(scroll > aboutScroll && scroll < projectsScroll) 
  {
    console.log("aboutScroll: " + aboutScroll);
    console.log("scroll: " + scroll);
    aboutNav.classList.add("curr-section");
    aboutDivider.classList.add("curr-section");

    projectsNav.classList.remove("curr-section");
    projectsDivider.classList.remove("curr-section");
  }
  else if(scroll > projectsScroll && scroll < skillsScroll)
  {
    console.log("projectsScroll: " + projectsScroll);
    console.log("scoll: " + scroll);
    projectsNav.classList.add("curr-section");
    projectsDivider.classList.add("curr-section");  

    aboutNav.classList.remove("curr-section");
    skillsNav.classList.remove("curr-section");
    aboutDivider.classList.remove("curr-section");
    skillsDivider.classList.remove("curr-section");
  }
  else if(scroll > skillsScroll && scroll < contactScroll)
  {
    console.log("skillsScroll: " + skillsScroll);
    console.log("scoll: " + scroll);
    skillsNav.classList.add("curr-section");
    skillsDivider.classList.add("curr-section");

    projectsNav.classList.remove("curr-section");
    contactNav.classList.remove("curr-section");
    projectsDivider.classList.remove("curr-section");
    contactDivider.classList.remove("curr-section");
  }
  else if(scroll > contactScroll)
  {
    console.log("contactScroll: " + contactScroll);
    console.log("scroll: " + scroll);
    contactNav.classList.add("curr-section");
    contactDivider.classList.add("curr-section");

    skillsNav.classList.remove("curr-section");
    skillsDivider.classList.remove("curr-section");
  }

});

function getScrollPosition(elementID)
{
  const element = document.getElementById(elementID);
  return element.offsetTop;
}

