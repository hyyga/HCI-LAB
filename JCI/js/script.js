document.addEventListener("DOMContentLoaded", () => {

    /* mobile nav toggle */
    const menuBtn = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("mobile-open");
        });
    }

    /* forum posts */
    const samplePosts = [
        {
            user: "bobcat",
            title: "How does the SkyVision X7 enhance the execution of cinematic camera movements?",
            desc: "Hi everyone, I'm using the SkyVision X7 for my film projects, but I'm still trying to figure out what truly sets it apart for cinematic movements. Its 8-axis gimbal is great for smooth shots, dynamic transitions, and precise motion control, but I haven't found clear explanations. What features or techniques of the X7 significantly improve shot direction? I'd really like to hear more about tracking, orbiting, and reveal movements. If anyone has real-world experience with the X7, I'd love to hear your insights. Thanks!",
            cat: "tips",
            views: 1487,
            likes: 312,
            shares: 21
        },
        {
            user: "bobcat",
            title: "Mastering Cinematic Movements with SkyVision X7",
            desc: "The SkyVision X7 stands out mainly because of its 18-axis gimbal stabilization, high-resolution sensor with wide dynamic range, and advanced flight control system that keeps movements smooth and consistent. These features allow smoother dolly shots, orbit trajectories, crane-like elevation transitions, and precision tracking during fast-paced scenes. As for workflow, I recommend utilizing the X7’s combination of stability, control, and image quality to give a clear edge over most drone systems.",
            cat: "showcase",
            views: 523,
            likes: 93,
            shares: 7
        },
        {
            user: "bobcat",
            title: "Troubleshooting Connection Issues",
            desc: "Common connection problems are frustrating, but if you're experiencing connectivity issues, check these steps first: Ensure proper antenna positioning, update firmware regularly, and comply with signal guidelines. Also keep distance free from tall buildings, power lines, and crowded WiFi environments. If the drone keeps disconnecting mid-air or shows weak signals, try calibrating compass, relinking remote, and verifying motor health. These simple fixes typically solve most connection problems.",
            cat: "rns",
            views: 1542,
            likes: 224,
            shares: 12
        },
        {
            user: "bobcat",
            title: "New Firmware Update Released",
            desc: "Version 3.2 is now available with improved stability and new intelligent tracking features. Download from your dashboard.",
            cat: "announcements",
            views: 1965,
            likes: 231,
            shares: 8
        },
        {
            user: "bobcat",
            title: "Stunning Landscape Photography Collection",
            desc: "I recently took the CloudFlyer Lite 4K on a trip to the Rocky Mountains, and despite the tough winds and fluctuating conditions, the performance surprised me. The drone handled stability and control better than I expected, allowing me to capture some stunning high-altitude shots and cinematic landscapes. Really happy with how the footage turned out, so I wanted to share this with everyone here.",
            cat: "showcase",
            views: 2250,
            likes: 570,
            shares: 19
        }
    ];


    const postsEl = document.getElementById("posts");

    if (postsEl) {

        function renderPosts(filter = "all") {
            postsEl.innerHTML = "";

            const filtered = samplePosts.filter(p =>
                filter === "all" ? true : p.cat === filter
            );

            filtered.forEach(p => {
                const div = document.createElement("div");
                div.className = "post";

                div.innerHTML = `
                    <div class="post-main">
                        <strong>${escapeHTML(p.user)}</strong> — 
                        <em>${escapeHTML(p.title)}</em>
                        <p>${escapeHTML(p.desc)}</p>
                    </div>

                    <div class="post-meta">
                        <div>👁 ${p.views}</div>
                        <div>❤️ ${p.likes}</div>
                        <div>↗ ${p.shares}</div>
                    </div>
                `;

                postsEl.appendChild(div);
            });
        }

        const filterBtn = document.getElementById("filterBtn");

        if (filterBtn) {
            filterBtn.addEventListener("click", () => {
                const cat = document.getElementById("category").value;
                renderPosts(cat);
            });
        }

        renderPosts(); 
    }


    /* contact form validation */
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();

            const errors = [];

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const agree = document.getElementById("agree").checked;

            /* name */
            if (name.length < 3) {
                errors.push("Name must be at least 3 characters.");
            }

            /* phone number */
            let phoneDigits = "";
            let isValidPhone = true;

            for (let ch of phone) {
                if (ch === " " || ch === "+") continue;

                if (isNaN(Number(ch))) {
                    isValidPhone = false;
                    break;
                }

                phoneDigits += ch;
            }

            if (!isValidPhone || phoneDigits.length < 9 || phoneDigits.length > 15) {
                errors.push("Phone number must be 9–15 digits.");
            }

            /* email */
            const at = email.indexOf("@");
            const dot = email.lastIndexOf(".");

            if (
                at < 1 ||          
                dot <= at + 1 ||   
                dot === email.length - 1
            ) {
                errors.push("Please enter a valid email address.");
            }

            /* message */
            if (message.length < 10) {
                errors.push("Message must be at least 10 characters.");
            }

            /* terms */
            if (!agree) {
                errors.push("You must agree to the Terms of Service.");
            }

            /* display errors */
            const errEl = document.getElementById("formErrors");

            if (errors.length > 0) {
                errEl.innerHTML = "<ul><li>" + errors.join("</li><li>") + "</li></ul>";
                return;
            }

            /* success */
            errEl.innerHTML = "Sending...";

            setTimeout(() => {
                errEl.innerHTML = "Thank you! Your message has been sent.";
                form.reset();
            }, 700);
        });
    }


    /* safe html escaper */
    function escapeHTML(str) {
        let result = "";
        for (let ch of str) {
            if (ch === "<") result += "&lt;";
            else if (ch === ">") result += "&gt;";
            else if (ch === "&") result += "&amp;";
            else if (ch === '"') result += "&quot;";
            else if (ch === "'") result += "&#39;";
            else result += ch;
        }
        return result;
    }
});
