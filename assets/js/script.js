/* =========================================================
   BGIMT ACADEMIC HUB
   Shared JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const navToggle = document.querySelector("[data-nav-toggle]");
    const navLinks = document.querySelector("[data-nav-links]");

    if (navToggle && navLinks) {

        navToggle.addEventListener("click", () => {

            const open = navLinks.classList.toggle("open");

            navToggle.setAttribute(
                "aria-expanded",
                String(open)
            );

            navToggle.innerHTML = open
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';

        });


        /* Close menu after clicking a link */

        navLinks.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                navToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                navToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            });

        });

    }



    /* =====================================================
       ACTIVE NAVIGATION PAGE
    ===================================================== */

    const currentFile =
        window.location.pathname.split("/").pop() ||
        "index.html";

    document
        .querySelectorAll("[data-page-link]")
        .forEach((link) => {

            const linkFile =
                link.getAttribute("href").split("#")[0];

            if (linkFile === currentFile) {

                link.classList.add("active");

            }

        });



    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    document
        .querySelectorAll("[data-year]")
        .forEach((el) => {

            el.textContent =
                new Date().getFullYear();

        });



    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const form =
        document.querySelector("[data-contact-form]");

    const status =
        document.querySelector("[data-form-status]");

    if (form && status) {

        form.addEventListener("submit", () => {

            status.textContent =
                "Sending your message...";

        });

    }

});



/* =========================================================
   GOOGLE SEARCH
   Searches the complete Google index
========================================================= */

const googleSearchForm =
    document.getElementById("googleSearchForm");

const googleSearchInput =
    document.getElementById("googleSearchInput");


if (googleSearchForm && googleSearchInput) {

    googleSearchForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const searchText =
                googleSearchInput.value.trim();


            if (!searchText) {
                return;
            }


            /*
             * Search the complete Google.
             *
             * BGIMT Academic Hub can also appear
             * if Google has indexed the relevant page.
             */

            const googleURL =
                "https://www.google.com/search?q=" +
                encodeURIComponent(searchText);


            window.open(
                googleURL,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}



/* =========================================================
   WEBSITE INTERNAL SEARCH
========================================================= */

/*
 * All important pages and searchable resources
 * are stored inside this array.
 */

const websitePages = [


    /* =====================================================
       MAIN WEBSITE PAGES
    ===================================================== */

    {
        title: "Home",
        description: "BGIMT Academic Hub homepage",
        keywords:
            "home bgimt academic hub student portal",
        url: "index.html",
        icon: "fa-solid fa-house"
    },


    {
        title: "Courses",
        description:
            "BCA, BBA, B.Com, MCA and MBA courses",
        keywords:
            "courses bca bba bcom mca mba subjects",
        url: "courses.html",
        icon: "fa-solid fa-graduation-cap"
    },


    {
        title: "Resources",
        description:
            "Academic study resources and useful links",
        keywords:
            "resources notes study material syllabus academic",
        url: "resources.html",
        icon: "fa-solid fa-folder-open"
    },


    {
        title: "PYQs",
        description:
            "Previous Year Question Papers",
        keywords:
            "pyq pyqs previous year question papers question paper",
        url: "pyqs.html",
        icon: "fa-solid fa-file-lines"
    },


    {
        title: "AI Tools",
        description:
            "Useful AI tools for students including ChatGPT, Gemini and Claude",
        keywords:
            "ai tools chatgpt gemini claude artificial intelligence coding study productivity",
        url: "ai-tools.html",
        icon: "fa-solid fa-robot"
    },


    {
        title: "College",
        description:
            "BGIMT college information",
        keywords:
            "college bgimt institute campus courses facilities official",
        url: "college.html",
        icon: "fa-solid fa-building-columns"
    },


    {
        title: "Contact",
        description:
            "Contact and creator information",
        keywords:
            "contact creator tausif telegram github email",
        url: "contact.html",
        icon: "fa-solid fa-envelope"
    },



    /* =====================================================
       YOUTUBE MAIN PAGE
    ===================================================== */

    {
        title: "YouTube Resources",
        description:
            "Course-wise YouTube learning resources",
        keywords:
            "youtube video learning video guru youtube help study videos channels",
        url: "youtube.html",
        icon: "fa-brands fa-youtube"
    },



    /* =====================================================
       BCA YOUTUBE
    ===================================================== */

    {
        title: "BCA YouTube Resources",
        description:
            "BCA coding, DSA, DBMS, OS, Web and Maths videos",
        keywords:
            "bca youtube bca videos bca lectures bca study programming dsa dbms operating system web development maths",
        url: "youtube.html#bca-youtube",
        icon: "fa-solid fa-laptop-code"
    },


    {
        title: "BCA YouTube Help",
        description:
            "Useful YouTube channels for BCA students",
        keywords:
            "bca youtube help bca channels bca study channels",
        url: "youtube.html#bca-youtube",
        icon: "fa-brands fa-youtube"
    },



    /* =====================================================
       MCA YOUTUBE
    ===================================================== */

    {
        title: "MCA YouTube Resources",
        description:
            "MCA programming, DSA, Core CS, Maths and placement videos",
        keywords:
            "mca youtube mca videos mca lectures programming dsa core cs maths placement",
        url: "youtube.html#mca-youtube",
        icon: "fa-solid fa-computer"
    },


    {
        title: "MCA YouTube Help",
        description:
            "Useful YouTube channels for MCA students",
        keywords:
            "mca youtube help mca channels mca study",
        url: "youtube.html#mca-youtube",
        icon: "fa-brands fa-youtube"
    },



    /* =====================================================
       BBA YOUTUBE
    ===================================================== */

    {
        title: "BBA YouTube Resources",
        description:
            "BBA management, business, accounts, economics and maths videos",
        keywords:
            "bba youtube bba videos bba lectures management business accounts economics maths",
        url: "youtube.html#bba-youtube",
        icon: "fa-solid fa-chart-line"
    },


    {
        title: "BBA YouTube Help",
        description:
            "Useful YouTube channels for BBA students",
        keywords:
            "bba youtube help bba channels bba study",
        url: "youtube.html#bba-youtube",
        icon: "fa-brands fa-youtube"
    },



    /* =====================================================
       B.COM YOUTUBE
    ===================================================== */

    {
        title: "B.Com YouTube Resources",
        description:
            "B.Com accounting, finance, economics, tax and business videos",
        keywords:
            "bcom b.com youtube bcom videos accounting finance economics taxation business commerce",
        url: "youtube.html#bcom-youtube",
        icon: "fa-solid fa-chart-pie"
    },


    {
        title: "B.Com YouTube Help",
        description:
            "Useful YouTube channels for B.Com students",
        keywords:
            "bcom youtube help bcom channels commerce study",
        url: "youtube.html#bcom-youtube",
        icon: "fa-brands fa-youtube"
    },



    /* =====================================================
       MBA YOUTUBE
    ===================================================== */

    {
        title: "MBA YouTube Resources",
        description:
            "MBA management, HR, marketing, finance and business videos",
        keywords:
            "mba youtube mba videos mba lectures management hr marketing finance business",
        url: "youtube.html#mba-youtube",
        icon: "fa-solid fa-bullseye"
    },


    {
        title: "MBA YouTube Help",
        description:
            "Useful YouTube channels for MBA students",
        keywords:
            "mba youtube help mba channels mba study management",
        url: "youtube.html#mba-youtube",
        icon: "fa-brands fa-youtube"
    },



    /* =====================================================
       POPULAR YOUTUBE CHANNELS
    ===================================================== */

    {
        title: "CodeWithHarry",
        description:
            "Programming, Python, C++, Java and Web Development",
        keywords:
            "codewithharry coding programming python c c++ java html css javascript web development",
        url: "youtube.html#bca-youtube",
        icon: "fa-brands fa-youtube"
    },


    {
        title: "Apna College",
        description:
            "DSA, C++, Java and placement preparation",
        keywords:
            "apna college dsa c++ java programming placement",
        url: "youtube.html#bca-youtube",
        icon: "fa-brands fa-youtube"
    },


    {
        title: "Gate Smashers",
        description:
            "DBMS, Operating Systems, Computer Networks and Core CS",
        keywords:
            "gate smashers dbms os operating system computer networks software engineering core cs",
        url: "youtube.html#bca-youtube",
        icon: "fa-brands fa-youtube"
    },


    {
        title: "Knowledge Gate",
        description:
            "Computer Science and university subjects",
        keywords:
            "knowledge gate computer science cs university subjects",
        url: "youtube.html#bca-youtube",
        icon: "fa-brands fa-youtube"
    },


    {
        title: "Dream Maths",
        description:
            "College mathematics and mathematical concepts",
        keywords:
            "dream maths mathematics college maths engineering maths",
        url: "youtube.html#bca-youtube",
        icon: "fa-brands fa-youtube"
    },


    {
        title: "Dr. Gajendra Purohit",
        description:
            "Mathematics and exam preparation",
        keywords:
            "gajendra purohit maths mathematics exam preparation",
        url: "youtube.html#bca-youtube",
        icon: "fa-brands fa-youtube"
    },


    {
        title: "Rajat Arora",
        description:
            "Business, commerce and management concepts",
        keywords:
            "rajat arora commerce business management bcom bba mba",
        url: "youtube.html#bcom-youtube",
        icon: "fa-brands fa-youtube"
    },


    {
        title: "DWIVEDI GUIDANCE",
        description:
            "Management and business-related subjects",
        keywords:
            "dwivedi guidance management mba bba business hr",
        url: "youtube.html#mba-youtube",
        icon: "fa-brands fa-youtube"
    }

];



/* =========================================================
   WEBSITE SEARCH ELEMENTS
========================================================= */

const siteSearch =
    document.getElementById("siteSearch");

const searchResults =
    document.getElementById("searchResults");



/* =========================================================
   WEBSITE SEARCH FUNCTION
========================================================= */

if (siteSearch && searchResults) {

    siteSearch.addEventListener(
        "input",
        function () {

            const query =
                this.value
                    .trim()
                    .toLowerCase();


            /* Hide results when input is empty */

            if (!query) {

                searchResults.classList.remove("show");

                searchResults.innerHTML = "";

                return;

            }



            /* Find matching pages and resources */

            const matches =
                websitePages.filter(function (page) {

                    const searchableText =
                        (
                            page.title +
                            " " +
                            page.description +
                            " " +
                            page.keywords
                        ).toLowerCase();


                    return searchableText.includes(query);

                });



            /* =================================================
               NO RESULTS
            ================================================= */

            if (matches.length === 0) {

                searchResults.innerHTML = `

                    <div class="search-no-result">

                        <i class="fa-solid fa-circle-info"></i>

                        No matching page found

                    </div>

                `;

                searchResults.classList.add("show");

                return;

            }



            /* =================================================
               CREATE SEARCH RESULTS
            ================================================= */

            searchResults.innerHTML =
                matches.map(function (page) {

                    return `

                        <a
                            href="${page.url}"
                            class="search-result-item"
                        >

                            <i class="${page.icon}"></i>

                            <span class="search-result-text">

                                <span class="search-result-title">
                                    ${page.title}
                                </span>

                                <span class="search-result-description">
                                    ${page.description}
                                </span>

                            </span>

                        </a>

                    `;

                }).join("");


            searchResults.classList.add("show");

        }
    );



    /* =================================================
       CLOSE SEARCH WHEN CLICKING OUTSIDE
    ================================================= */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !event.target.closest(".navbar-search")
            ) {

                searchResults.classList.remove("show");

            }

        }
    );

}