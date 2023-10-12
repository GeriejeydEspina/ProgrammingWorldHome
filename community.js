var data = [
    {
        img: "programming_language.jpg",
        topic: "Tutorials and Guides",
        subtopic: "Programming Languages",
        description: "Cover popular programming languages like Python, JavaScript, Java, C++, etc. Provide beginner-friendly tutorials as well as advanced topics.",
    },
    {
        img: "1_RhTNTLwp7utGEaIYSVvQlQ.png",
        topic: "Tutorials and Guides",
        subtopic: "Frameworks and Libraries:",
        description: "Create guides on popular frameworks and libraries like React, Angular, Django, and jQuery.",
    },
    {
        img: "maxresdefault.jpg",
        topic: "Tutorials and Guides",
        subtopic: "Version Control: ",
        description: "Teach developers how to use Git and platforms like GitHub or GitLab effectively.",
    },
    {
        img: "1030_algorithm_explainer-1028x579.jpg",
        topic: "Tutorials and Guides",
        subtopic: "Algorithms and Data Structures:",
        description: "Provide tutorials and explanations for common algorithms and data structures used in programming.",
    },
    {
        img: "TopWebsitesForCodingChallengesCompetitions.jpg",
        topic: "Tutorials and Guides",
        subtopic: "Problem-solving and Coding Challenges:",
        description: "Regular coding challenges that developers can participate in. You can host weekly or monthly coding challenges with varying difficulty levels.",
    },
    {
        img: "coding-programming-project-ideas-1128x635.jpg",
        topic: "Tutorials and Guides",
        subtopic: "Project Ideas & Case Studies:",
        description: "Provide project ideas ranging from beginner to advanced levels. Include step-by-step guides on how to implement these projects.",
    },
    {
        img: "stock-photo-2.jpg",
        topic: "Tutorials and Guides",
        subtopic: "Best Practices & Code Reviews:",
        description: "Offer a platform for developers to submit their code for review and feedback. Constructive criticism can help them improve their skills.",
    },
    {
        img: "coding-interview-questions.jpg",
        topic: "Tutorials and Guides",
        subtopic: "Interview Preparation:",
        description: "Provide resources for technical interview preparation, including common interview questions, algorithms, and data structure problems.",
    },
    {
        img: "image4.jpg",
        topic: "Tutorials and Guides",
        subtopic: "Forums and Q&A:",
        description: "Create a forum or Q&A section where developers can ask questions and share their knowledge.",
    },
    {
        img: "programming-guest-posting.jpg",
        topic: "Tutorials and Guides",
        subtopic: "Guest Posts and Developer Spotlights:",
        description: "Invite experienced developers to write guest posts about their experiences, projects, or specific programming topics.",
    },
    {
        img: "video-tutorial.png",
        topic: "Tutorials and Guides",
        subtopic: "Video Tutorials and Webinars:",
        description: "Create video tutorials covering programming concepts, tools, and best practices.",
    },
    {
        img: "1660153796425.png",
        topic: "Tutorials and Guides",
        subtopic: "Resource Recommendation:",
        description: "Curate a list of useful books, online courses, articles, and tools that can help developers enhance their skills.",
    },
    {
        img: "highres_458780810.jpeg",
        topic: "Tutorials and Guides",
        subtopic: "Community Events and Meetups:",
        description: "Organize local or online meetups, hackathons, and workshops to bring the community together.",
    },
]

const introduce = document.querySelector(".introduce");
const ordinalNumber = document.querySelector(".ordinal-number");

introduce.innerHTML = "";
ordinalNumber.innerHTML = "";
for (let i = 0; i < data.length; i++){
    introduce.innerHTML += `
    <div class="wrapper">
        <span>
            <h5 class="topic" style="--idx: 0">${data[i].topic}</h5>
        </span>
        <span>
            <h1 class="subtopic" style="--idx: 1">${data[i].subtopic}</h1>
        </span>
        <span>
            <p class="description" style="--idx: 2">${data[i].description}</p>
        </span>
        <span>
            <button class="learn-button" style="--idx: 3">Learn more</button>
        </span>
    </div>
    `;

    ordinalNumber.innerHTML += `<h2>0${i + 1}</h2>`;
}
introduce.children[0].classList.add("active");
ordinalNumber.children[0].classList.add("active");

const thumbnailListWrapper = document.querySelector(
    ".thumbnail-list .wrapper"
);
thumbnailListWrapper .innerHTML += `
    <div class="thumbnail zoom">
        <img src="${data[0].img}" alt="">
    </div>
    `;
for (let i = 1; i < data.length; i++) {
    thumbnailListWrapper.innerHTML += `
        <div class="thumbnail" style="--idx: ${i - 1}">
            <img src="${data[i].img}" alt="">
        </div>
        `;
}
const nextBtn = document.querySelector(".navigation .next-button");
var currentIndex = 0;
nextBtn.addEventListener("click", () => {
    nextBtn.disabled = true;
    var clone = thumbnailListWrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    thumbnailListWrapper.appendChild(clone);
    thumbnailListWrapper.children[1].classList.add("zoom");
    setTimeout(() => {
        thumbnailListWrapper.children[0].remove();
        nextBtn.disabled = false;
    }, 1000);

    for (let i = 2; i < thumbnailListWrapper.childElementCount; i ++) {
        thumbnailListWrapper.children[i].style = `--idx: ${i - 2}`;
    }
    if (currentIndex < data.length - 1) {
        currentIndex++;
    }  else currentIndex = 0;
    for (let i = 0; i < data.length; i++) {
        introduce.children[i].classList.remove("active");
        ordinalNumber.children[i].classList.remove("active");
    }
    introduce.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].classList.add("active");
    if (currentIndex >= 9 && currentIndex < 13) {
        ordinalNumber.children[currentIndex].textContent = `${currentIndex + 1}`;
    } else {
        ordinalNumber.children[currentIndex].textContent = `0${currentIndex + 1}`;
    }
});

