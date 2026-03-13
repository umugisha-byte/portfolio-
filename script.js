(function() {
        // hide loading
        setTimeout(() => document.getElementById('loadingScreen').style.opacity = '0', 800);
        setTimeout(() => document.getElementById('loadingScreen').style.display = 'none', 1300);

        // typed
        new Typed('.typedText', { strings: ['architect','designer','problem solver'], loop: true, typeSpeed: 80 });

        // notification dismiss
        window.dismissNotification = () => document.getElementById('portfolioNotification').classList.remove('show');

        // mobile menu
        window.myMenuFunction = () => document.getElementById('myNavMenu').classList.toggle('responsive');

        // ---------- CV MODAL LOGIC (fully fixed) ----------
        let step = 0;
        const sections = document.getElementsByClassName('cvm-section');
        const stepSpan = document.getElementById('stepNumber');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        function showStep(i) {
            if (i < 0 || i >= sections.length) return;
            // hide all
            for (let s of sections) s.classList.remove('cvm-section-active');
            // show current
            sections[i].classList.add('cvm-section-active');
            stepSpan.innerText = i + 1;
            // button visibility
            prevBtn.style.display = i === 0 ? 'none' : 'inline-flex';
            nextBtn.style.display = i === sections.length-1 ? 'none' : 'inline-flex';
        }

        window.nextStep = function() {
            if (step < sections.length - 1) {
                step++;
                showStep(step);
            }
        };

        window.prevStep = function() {
            if (step > 0) {
                step--;
                showStep(step);
            }
        };

        window.openCV = function() {
            document.getElementById('cvModal').style.display = 'flex';
            step = 0;
            showStep(0);
        };

        window.closeCV = function() {
            document.getElementById('cvModal').style.display = 'none';
        };

        // dark mode toggle
        const toggleSwitch = document.getElementById('toggle-switch');
        if (toggleSwitch) {
            toggleSwitch.addEventListener('click', () => {
                document.body.classList.toggle('dark');
            });
        }

        // active nav link on scroll
        window.addEventListener('scroll', () => {
            let scrollpos = window.scrollY;
            document.querySelectorAll('section[id]').forEach(s => {
                let top = s.offsetTop - 120, id = s.getAttribute('id');
                if (scrollpos >= top) {
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active-link'));
                    let activeLink = document.querySelector('.nav-link[href*='+id+']');
                    if (activeLink) activeLink.classList.add('active-link');
                }
            });
        });
    })();