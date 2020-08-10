var jobData = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "FullStack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

var filters = document.querySelectorAll(".filter");
var jobListingsList = document.querySelector(".job-listings-container");
const filterBarContainer = document.querySelector(".filter-bar-container");
const appliedFilters = document.querySelector(".filters-applied");
const clearAllFilterBtn = document.querySelector(".clear-all-filter-btn");
const clearFilterBtn = document.querySelector(".close-btn");
const filterBtn = document.querySelector(".filter-title");
const filterList = document.querySelector(".filter-list");

//render filtered data
const renderFullJobList = (job) => {
  let jobUI = `<li class="job-listing ${
    job.featured ? "featured-listing" : ""
  }">
  <img src="${job.logo}" alt="company logo" class="logo" />
  <div>
  <div>
    <p class="job-listing__company">${job.company}</p>
    ${job.new ? `<div class="new">new</div>` : ""}
    ${job.featured ? `<div class="featured">featured</div>` : ""}
  </div>

  <h4 class="job-listing__title">${job.position}</h4>
  <div class="job-listing-detail__container">
    <p class="job-listing__post-time">${job.postedAt}</p>
    <span class="dot">&middot;</span>
    <p class="job-listing__type">${job.contract}</p>
    <span class="dot">&middot;</span>
    <p class="job-listing__location">${job.location}</p>
  </div>
  </div>
  <div class="job-listing__skills">
    <ul class="job-listing__skills-list">
    <li class='job-listing__skill'> ${job.role} </li>
    <li class='job-listing__skill'> ${job.level} </li>
    ${job.languages
      .map((lang) => `<li class='job-listing__skill'> ${lang} </li>`)
      .join("")}
    ${job.tools
      .map((tool) => `<li class='job-listing__skill'> ${tool} </li>`)
      .join("")}
    </ul>
  </div>
  </li>`;

  jobListingsList.insertAdjacentHTML("beforeend", jobUI);
};

const renderFilterUI = (filter) => {
  let filterUI = `<li class="filter-tag-container">
    <div class="filter-tag"> ${filter} </div>
    <div class="close-btn">
      <img src="./images/icon-remove.svg">
    </div>
  </li>
  `;

  appliedFilters.insertAdjacentHTML("beforeend", filterUI);
};


let filterListIsOpen = false;

const toggleFilterList = () => {
  filterListIsOpen = !filterListIsOpen;
  filterListIsOpen ? filterList.style.display = "block" : filterList.style.display = "none";
  filterListIsOpen ? filterBtn.innerHTML = "Filter By <i class='fas fa-chevron-up'></i>" : filterBtn.innerHTML = "Filter By <i class='fas fa-chevron-down'></i>"
}

const clearAllFilters = () => {
  filters.forEach((item) => {
    item.checked = false;
  });

  jobListingsList.innerHTML = "";
  jobData.map(renderFullJobList);

  appliedFilters.innerHTML = "";

  filterBarContainer.style.display = "none";
};

const clearFilter = (e) => {
  var closeButton = e.target.closest(".close-btn");
  var closeVal = closeButton.previousElementSibling.innerHTML.trim();
  filters.forEach((item) => {
    if (item.value === closeVal) {
      item.checked = false;
    }
  });

  filterData();
};

const filterData = () => {

  var checkedFilters = [];

  filters.forEach((item) => {
    item.checked ? checkedFilters.push(item.value) : "";
  });

  checkedFilters.length > 0 ? filterBarContainer.style.display = 'grid' : filterBarContainer.style.display = 'none';

  var result = jobData.filter((jobObj) => {

    checkedFilters.some((filt) => jobObj.languages.includes(filt));

    if (checkedFilters.indexOf(jobObj.role) > -1) {
      return true;
    } else if (checkedFilters.indexOf(jobObj.level) > -1) {
      return true;
    } else if (checkedFilters.some((filt) => jobObj.languages.includes(filt))) {
      return true;
    } else if (checkedFilters.some((tool) => jobObj.tools.includes(tool))) {
      return true;
    }
  });

  //clear current list before rendering new one
  jobListingsList.innerHTML = "";
  result.length > 0
    ? result.map(renderFullJobList)
    : jobData.map(renderFullJobList);

  appliedFilters.innerHTML = "";
  checkedFilters.map(renderFilterUI);
};



filters.forEach((filter) => filter.addEventListener("click", filterData));
jobData.map(renderFullJobList);

clearAllFilterBtn.addEventListener("click", clearAllFilters);
appliedFilters.addEventListener("click", clearFilter);
filterBtn.addEventListener("click", toggleFilterList)


