/**
 * =====================================================================
 * OUR LITTLE UNIVERSE â€” CONFIGURATION
 * ---------------------------------------------------------------------
 * Edit file ini untuk mengubah isi konten website (nama, tanggal, foto,
 * kata-kata, cerita, pertanyaan kuis, dan surat).
 * =====================================================================
 */

window.CONFIG = {
    // 01 â€” IDENTITAS & TANGGAL
    girlfriendName: "Karina",
    nickname: "Sayang",
    birthdayDate: "September 2, 2026",

    // Format: "YYYY-MM-DD" (contoh: "2024-02-14") atau kosongkan "" untuk teks placeholder
    relationshipStart: "2024-02-14",

    // Musik
    music: {
        title: "Stuck with U",
        artist: "Ariana Grande & Justin Bieber",
        file: "assets/music/stuck_with_u.mp3"
    },

    // Pesan rahasia saat logo bintang di nav diklik 5 kali
    secretMessage: "Kamu itu rumah ternyaman buat aku, Asa. Makasih udah selalu ada, ya. Love you to the moon and back! â¤ï¸",

    // 02 â€” OUR STORY (Timeline Cerita)
    story: [
        {
            date: "Awal Cerita",
            title: "The First Hello",
            description: "Hari di mana semuanya dimulai tanpa kita sadar diem dieman kita itu bakal jadi awal dari cerita sepanjang ini.",
            image: "assets/images/memories/x.png",
            fallbackTag: "First Meeting"
        },
        {
            date: "Momen Pertama",
            title: "First Conversation That Lasted Hours",
            description: "Dari yang awal diem dieman doang, tiba tiba kita ngobrol sampai jam 5 subuh. gatau kenapa rasanya nyaman bet sejak awal sama kamu.",
            image: "assets/images/roblox/mem1.jpg",
            fallbackTag: "Late Night Talks"
        },
        {
            date: "Gaming Memory",
            title: "Our First Game Together",
            description: "Mulai dari bantai serigala, ketawa malem malem gara-gara hal gajelas di game, dan game horor kita.. seru juga yh'.",
            image: "assets/images/roblox/mem2.jpg",
            fallbackTag: "Game Night"
        },
        {
            date: "Hari Spesial",
            title: "The Day You Became My Person",
            description: "Nice decision sayang. ngeliat senyum kamu hari itu masih tersimpan rapi di ingatan aku sampe sekarang.",
            image: "assets/images/us/x1.png",
            fallbackTag: "Special Day"
        },
        {
            date: "Hari Ini & Seterusnya",
            title: "Still Choosing You, Every Single Day",
            description: "Setiap hari sama kamu pasti bakalan bahagia yaga? apalagi kalo ada aku hehe. . Selamat ulang tahun, sayangg.",
            image: "assets/images/her/asaaa.jpg",
            fallbackTag: "Always You"
        }
    ],

    // 03 â€” HER (Apresiasi Visual & Detail)
    her: {
        portrait: "assets/images/her/asa1.png",
        floaters: [
            { image: "assets/images/her/asa2.png", note: "your smile" },
            { image: "assets/images/her/asa3.png", note: "pure radiance" },
            { image: "assets/images/her/asa4.png", note: "my favorite view" },
            { image: "assets/images/her/asa5.jpg", note: "so pretty" }
        ],
        notices: [
            "Your smile.",
            "The way you laugh.",
            "Your random stories.",
            "How you can turn an ordinary day into something memorable.",
            "Basically... you."
        ]
    },

    // 04 â€” OUR MEMORIES (Galeri Scrapbook)
    memories: [
        {
            category: "her",
            image: "assets/images/her/asa1.png",
            caption: "The prettiest view in my world."
        },
        {
            category: "us",
            image: "assets/images/us/x1.png",
            caption: "Still my favorite picture of us."
        },
        {
            category: "her",
            image: "assets/images/her/asa3.png",
            caption: "Okay this one is actually so cute."
        },
        {
            category: "memories",
            image: "assets/images/memories/x.png",
            caption: "Moments that became ours."
        },
        {
            category: "her",
            image: "assets/images/her/asa4.png",
            caption: "Aku suka foto ini di wallpaper laptop aku wkwk"
        },
        {
            category: "her",
            image: "assets/images/her/asa1.jpg",
            caption: "Always glowing."
        },
        {
            category: "her",
            image: "assets/images/her/asaaa.jpg",
            caption: "km tau gaj, aku suka senyum liat foto km wkwk"
        },
        {
            category: "random",
            image: "assets/images/memories/x2.png",
            caption: "Why were we like this? ðŸ˜‚"
        },
        {
            category: "roblox",
            image: "assets/images/roblox/mem1.jpg",
            caption: "Chaos, panic, and endless laughs."
        },
        {
            category: "roblox",
            image: "assets/images/roblox/mem2.jpg",
            caption: "We were actually pretty good at this."
        },
        {
            category: "roblox",
            image: "assets/images/roblox/rblx.png",
            caption: "This was supposed to be 'just one game'."
        },
        {
            category: "roblox",
            image: "assets/images/roblox/rblx2.png",
            caption: "lagi photoboth jir wkkw"
        },
        {
            category: "her",
            image: "assets/images/her/asa2.png",
            caption: "Pure sunshine."
        },
        {
            category: "her",
            image: "assets/images/her/asa5.webp",
            caption: "A little piece of heaven."
        }
    ],

    // 05 â€” ROBLOX UNIVERSE
    roblox: {
        missions: [
            {
                label: "MISSION 01",
                prompt: '"bang carry trimp aku."',
                image: "assets/images/roblox/x3.png",
                status: "STATUS: FAILED."
            },
            {
                label: "MISSION 02",
                prompt: '"mabar bg minta streak bg"',
                image: "assets/images/roblox/mem1.jpg",
                status: "STATUS: SOMEHOW SURVIVED."
            },
            {
                label: "MISSION 03",
                prompt: '"game pertama kita yh"',
                image: "assets/images/roblox/mem2.jpg",
                status: "STATUS: 5 MONTH AGO."
            }
        ],
        // Additional gallery images shown below missions
        gallery: [
            "assets/images/roblox/x4.png",
            "assets/images/roblox/x5.png",
            "assets/images/roblox/rblx.png",
            "assets/images/roblox/rblx2.png"
        ],
        stats: [
            { value: 142, label: "GAMES PLAYED" },
            { value: 520, label: "SCREENSHOTS" },
            { value: 999, label: '"ONE MORE GAME"' },
            { value: 3, label: "ARGUMENTS" },
            { value: "âˆž", label: "LAUGHS" }
        ],
        captions: [
            "we definitely planned this",
            "this was supposed to be quick",
            "why are we still here?",
            "okay, one more.",
            "we were actually good at this... maybe."
        ]
    },

    // 06 â€” QUIZ: HOW WELL DO YOU KNOW US?
    quiz: {
        questions: [
            {
                question: 'Siapa yang lebih sering bilang "bentar"?',
                options: ["Kamu", "Aku", "Dua-duanya sama aja"],
                correct: 0
            },
            {
                question: 'Siapa yang lebih sering ngajak main?',
                options: ["Aku", "Kamu", "Tergantung siapa yang bosen"],
                correct: 0
            },
            {
                question: 'Siapa yang lebih gampang ngambek?',
                options: ["Kamu :p", "Aku", "Nggak ada, kita selalu adem"],
                correct: 0
            },
            {
                question: 'Game apa yang paling sering kita mainkan?',
                options: ["Roblox", "EpEp", "Mobail Lejen"],
                correct: 0
            },
            {
                question: 'Siapa yang lebih sering ngajak call?',
                options: ["Kamu", "Aku", "Dua-duanya sama aja"],
                correct: 1
            },
            {
                question: 'Siapa yang biasanya kalah duluan?',
                options: ["Kamu", "Aku", "Dua-duanya sama-sama panik"],
                correct: 1
            }
        ],
        results: {
            low: "Looks like someone needs to study our lore.",
            mid: "Not bad at all.",
            perfect: "Okay... you really do know us."
        }
    },

    // 07 â€” OUR LITTLE THINGS (Catatan Meja)
    notes: [
        {
            front: "Remember when...",
            back: "Momen kocak pas kita nggak bisa diem, kita ketawa trus gara-gara hal yang biasa aja jir wkwk."
        },
        {
            front: "You always...",
            back: "Punya cara yah kamu buat bikin aku luluh tiap kali kamu pasang ekspresi gemas kamu + cerita hal random."
        },
        {
            front: "That one time...",
            back: "Kita begadang ngobrolin ampe subuh dan hal-hal yang cuma bisa kita yang dengerin."
        },
        {
            front: "Don't ask why...",
            back: "Cuma kita berdua yang ngerti kenapa kita bisa sejago itu di bletbol wkwk."
        },
        {
            front: "Only we would understand...",
            back: "Dunia kecil yang kita bangun berdua, di mana kita bisa jadi diri kita yang paling apa adanya."
        },
        {
            front: "Little secret...",
            back: "Senyum kamu itu lohhh gemesin banget njir."
        }
    ],

    // 08 â€” THE LETTER (Surat Pribadi)
    letter: {
        paragraphs: [
            "Selamat ulang tahun, Asayangg. Dari banyaknya hal yang pernah terjadi di hidup aku, bisa ketemu dan kenal kamu adalah salah satu hal paling berharga yang pernah aku miliki.",
            "Mungkin aku sering telat, kadang ceroboh, atau nggak selalu bisa mengekspresikan perasaanku dengan sempurna. Tapi lewat website kecil ini, aku pengen kamu tahu betapa berartinya kamu buat aku. Cara kamu tersenyum, ketawa manismu, cerita-cerita random kamu, sampai saat-saat kocak kita main Roblos barengâ€”semuanya bikin hari-hariku yang biasa itu jadi jauh lebih kerenn sama kamu sayangg.",
            "Semoga di usiamu yang baru ini, kamu selalu dikelilingi kebahagiaan, kesehatan, dan semua impian manismu tercapai. Apapun yang terjadi nanti, ingat ya, kamu ga sendirian. Aku bakal selalu di sini, nemenin kamu di mana punnnn. oke?",
            "Makasii sayangg udah jadi bagian dari cerita akuu. Happy birthday, my favorite person."
        ]
    },

    // 09 â€” ONE LAST THING (Kejutan Sinematik)
    finalSurprise: {
        photo: "assets/images/her/asa1.jpg",
        lines: [
            "If I could give you one thing...",
            "I'd give you the ability to see yourself...",
            "through my eyes.",
            "Then maybe you'd understand...",
            "how special you really are to me.",
            "Happy birthday, Asa.",
            "Even if I'm late.",
            "I hope this stays with you."
        ]
    }
};
/**
 * =====================================================================
 * OUR LITTLE UNIVERSE â€” SCRIPT.JS
 * ---------------------------------------------------------------------
 * Logika interaksi lengkap untuk website Our Little Universe.
 * Menggunakan data dari window.CONFIG (js/config.js).
 * =====================================================================
 */

(function () {
    'use strict';

    const CFG = window.CONFIG || {};

    /* -----------------------------------------------------------------
       UTILITIES & HELPERS
    ----------------------------------------------------------------- */
    function prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function setupImageFallback(img, labelText) {
        if (!img) return;
        img.addEventListener('error', function () {
            const parent = this.parentElement;
            if (parent) {
                this.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'gallery__item--empty';
                fallback.textContent = labelText || 'Our Memory âœ¦';
                parent.appendChild(fallback);
            }
        }, { once: true });
    }

    let doorSequenceStarted = false;
    let doorTimers = [];

    function startDoorSequence() {
        if (doorSequenceStarted) return;
        doorSequenceStarted = true;

        const doorDate = document.getElementById('doorDate');
        const lines = document.querySelectorAll('.door__line');
        const openButton = document.getElementById('openButton');

        // Step 1: Date fades in gently at 600ms
        doorTimers.push(setTimeout(() => {
            if (doorDate) doorDate.classList.add('is-shown');
        }, 600));

        // Step 2: Lines appear sequentially and gently
        // Line 1: 1800ms
        // Line 2: 4200ms
        // Line 3: 6800ms
        // Line 4: 9400ms
        const lineDelays = [1800, 4200, 6800, 9400];
        lines.forEach((line, idx) => {
            const delay = lineDelays[idx] || (idx * 2400 + 1800);
            doorTimers.push(setTimeout(() => {
                line.classList.add('is-shown');
            }, delay));
        });

        // Step 3: Button appears with subtle glow at 11800ms
        if (openButton) {
            doorTimers.push(setTimeout(() => {
                openButton.classList.add('is-shown');
            }, 11800));
        }
    }

    function fastForwardDoor() {
        doorTimers.forEach(t => clearTimeout(t));
        const doorDate = document.getElementById('doorDate');
        const lines = document.querySelectorAll('.door__line');
        const openButton = document.getElementById('openButton');

        if (doorDate) doorDate.classList.add('is-shown');
        lines.forEach(l => l.classList.add('is-shown'));
        if (openButton) openButton.classList.add('is-shown');
    }

    /* -----------------------------------------------------------------
       01 — THE DOOR / OPENING SCREEN
    ----------------------------------------------------------------- */
    function initOpening() {
        const door = document.getElementById('door');
        const doorDate = document.getElementById('doorDate');
        const doorName = document.getElementById('doorName');
        const openButton = document.getElementById('openButton');
        const siteNav = document.getElementById('siteNav');

        if (doorDate && CFG.birthdayDate) {
            doorDate.textContent = CFG.birthdayDate;
        }

        if (doorName && CFG.girlfriendName) {
            doorName.textContent = CFG.girlfriendName;
        }

        if (openButton) {
            openButton.addEventListener('click', (e) => {
                e.stopPropagation();
                document.body.classList.add('is-open');
                document.body.classList.remove('is-locked');

                if (siteNav) siteNav.removeAttribute('hidden');

                // Ensure music is playing
                playAudio();

                // Smooth scroll to main content
                setTimeout(() => {
                    const story = document.getElementById('story');
                    if (story) {
                        story.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 300);
            });
        }

        // Tap anywhere on opening door to trigger audio or fast-forward text
        if (door) {
            door.addEventListener('click', (e) => {
                playAudio();
                if (e.target && !e.target.closest('#openButton')) {
                    fastForwardDoor();
                }
            }, { passive: true });
        }
    }

    /* -----------------------------------------------------------------
       MUSIC CONTROLLER (Instant Autoplay + Bulletproof Controls)
    ----------------------------------------------------------------- */
    function initMusic() {
        const audio = document.getElementById('bgMusic');
        const player = document.getElementById('musicPlayer');
        const toggleBtn = document.getElementById('musicToggle');
        const infoEl = document.getElementById('musicInfo');
        const muteBtn = document.getElementById('musicMute');
        const volumeInput = document.getElementById('musicVolume');
        const trackName = document.getElementById('musicTrackName');

        if (!audio) return;

        // Set volume and preload
        audio.volume = 0.65;
        if (trackName && CFG.music && CFG.music.title) {
            trackName.textContent = CFG.music.title;
        }

        // Listen to native audio events for 100% sync
        audio.addEventListener('play', () => syncMusicUI(true));
        audio.addEventListener('pause', () => syncMusicUI(false));
        audio.addEventListener('ended', () => syncMusicUI(false));

        function syncMusicUI(isPlaying) {
            if (player) {
                if (isPlaying) player.classList.add('is-playing');
                else player.classList.remove('is-playing');
            }
            if (toggleBtn) {
                toggleBtn.setAttribute('aria-pressed', String(isPlaying));
                const playIcon = toggleBtn.querySelector('.icon--play');
                const pauseIcon = toggleBtn.querySelector('.icon--pause');
                if (playIcon) playIcon.hidden = isPlaying;
                if (pauseIcon) pauseIcon.hidden = !isPlaying;
            }
        }

        function updateMuteUI(isMuted) {
            if (!muteBtn) return;
            muteBtn.setAttribute('aria-pressed', String(isMuted));
            const unmutedIcon = muteBtn.querySelector('.icon--unmuted');
            const mutedIcon = muteBtn.querySelector('.icon--muted');
            if (unmutedIcon) unmutedIcon.hidden = isMuted;
            if (mutedIcon) mutedIcon.hidden = !isMuted;
        }

        if (toggleBtn) {
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (audio.paused) playAudio();
                else pauseAudio();
            });
        }

        if (infoEl) {
            infoEl.addEventListener('click', (e) => {
                e.stopPropagation();
                if (audio.paused) playAudio();
                else pauseAudio();
            });
        }

        if (muteBtn) {
            muteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                audio.muted = !audio.muted;
                updateMuteUI(audio.muted);
            });
        }

        if (volumeInput) {
            volumeInput.addEventListener('click', (e) => e.stopPropagation());
            volumeInput.addEventListener('input', (e) => {
                e.stopPropagation();
                audio.volume = parseFloat(e.target.value);
                if (audio.muted && audio.volume > 0) {
                    audio.muted = false;
                    updateMuteUI(false);
                }
            });
        }

        // Try autoplay immediately upon page load!
        attemptImmediatePlay();

        // One-time gesture listener across entire window so the first touch/click/scroll immediately starts music
        const gestureUnlock = () => {
            playAudio();
            ['click', 'touchstart', 'touchend', 'pointerdown', 'scroll', 'keydown'].forEach(evt => {
                window.removeEventListener(evt, gestureUnlock, true);
            });
        };
        ['click', 'touchstart', 'touchend', 'pointerdown', 'scroll', 'keydown'].forEach(evt => {
            window.addEventListener(evt, gestureUnlock, { once: true, capture: true, passive: true });
        });
    }

    function attemptImmediatePlay() {
        const audio = document.getElementById('bgMusic');
        if (!audio) return;
        const p = audio.play();
        if (p !== undefined) {
            p.catch(() => {
                // Autoplay blocked by browser policy until first gesture
            });
        }
    }

    function playAudio() {
        const audio = document.getElementById('bgMusic');
        if (!audio) return;
        const p = audio.play();
        if (p !== undefined) {
            p.catch(() => {
                // Will play on next touch gesture
            });
        }
    }

    function pauseAudio() {
        const audio = document.getElementById('bgMusic');
        if (audio) audio.pause();
    }

    /* -----------------------------------------------------------------
       NAVIGATION & SCROLL SPY
    ----------------------------------------------------------------- */
    function initNavigation() {
        const navLinks = document.querySelectorAll('.site-nav__link');

        navLinks.forEach((btn) => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.nav;
                let el = null;
                if (target === 'door') el = document.getElementById('story') || document.body;
                else if (target === 'story') el = document.getElementById('story');
                else if (target === 'memories') el = document.getElementById('memories');
                else if (target === 'letter') el = document.getElementById('letter');

                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Scroll spy to highlight active section in navbar
        const sections = ['story', 'memories', 'letter'];
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const viewHeight = window.innerHeight;

            sections.forEach((secId) => {
                const sec = document.getElementById(secId);
                const link = document.querySelector(`.site-nav__link[data-nav="${secId}"]`);
                if (!sec || !link) return;

                const top = sec.offsetTop - 120;
                const bottom = top + sec.offsetHeight;

                if (scrollY >= top && scrollY < bottom) {
                    navLinks.forEach((l) => l.classList.remove('is-active'));
                    link.classList.add('is-active');
                }
            });
        }, { passive: true });
    }

    /* -----------------------------------------------------------------
       RELATIONSHIP LIVE COUNTER
    ----------------------------------------------------------------- */
    function initRelationshipCounter() {
        const grid = document.getElementById('counterGrid');
        if (!grid) return;

        const startDate = new Date(CFG.relationshipStart);
        const isValid = !isNaN(startDate.getTime()) && CFG.relationshipStart;

        if (!isValid) {
            grid.innerHTML = '<p class="counter__placeholder">A little while, and every single second since.</p>';
            return;
        }

        grid.innerHTML = `
            <div class="counter__unit">
                <p class="counter__value" id="cDays">0</p>
                <p class="counter__unit-label">Days</p>
            </div>
            <div class="counter__unit">
                <p class="counter__value" id="cHours">00</p>
                <p class="counter__unit-label">Hours</p>
            </div>
            <div class="counter__unit">
                <p class="counter__value" id="cMinutes">00</p>
                <p class="counter__unit-label">Minutes</p>
            </div>
            <div class="counter__unit">
                <p class="counter__value" id="cSeconds">00</p>
                <p class="counter__unit-label">Seconds</p>
            </div>
        `;

        const dEl = document.getElementById('cDays');
        const hEl = document.getElementById('cHours');
        const mEl = document.getElementById('cMinutes');
        const sEl = document.getElementById('cSeconds');

        function updateCounter() {
            const now = new Date();
            const diff = Math.max(0, now.getTime() - startDate.getTime());
            const totalSec = Math.floor(diff / 1000);
            const days = Math.floor(totalSec / 86400);
            const hours = Math.floor((totalSec % 86400) / 3600);
            const minutes = Math.floor((totalSec % 3600) / 60);
            const seconds = totalSec % 60;

            if (dEl) dEl.textContent = days.toLocaleString();
            if (hEl) hEl.textContent = String(hours).padStart(2, '0');
            if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
            if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
        }

        updateCounter();
        setInterval(updateCounter, 1000);
    }

    /* -----------------------------------------------------------------
       02 â€” OUR STORY (Timeline)
    ----------------------------------------------------------------- */
    function initStoryTimeline() {
        const timeline = document.getElementById('timeline');
        if (!timeline || !CFG.story) return;

        timeline.innerHTML = '<div class="timeline__progress" id="timelineProgress"></div>';

        CFG.story.forEach((item, idx) => {
            const article = document.createElement('article');
            article.className = 'timeline__item reveal';
            article.innerHTML = `
                <div class="timeline__dot" aria-hidden="true"></div>
                <p class="timeline__date">${item.date}</p>
                <h3 class="timeline__title">${item.title}</h3>
                <p class="timeline__description">${item.description}</p>
                <div class="timeline__image-wrap">
                    <img class="timeline__image" src="${item.image}" alt="${item.title}" loading="lazy">
                </div>
            `;
            const img = article.querySelector('img');
            setupImageFallback(img, item.fallbackTag || item.title);
            timeline.appendChild(article);
        });

        // Timeline line progress on scroll
        const progressLine = document.getElementById('timelineProgress');
        const storySec = document.getElementById('story');
        if (progressLine && storySec) {
            window.addEventListener('scroll', () => {
                const rect = storySec.getBoundingClientRect();
                const totalH = rect.height;
                const visible = window.innerHeight - rect.top;
                const ratio = Math.min(1, Math.max(0, visible / totalH));
                progressLine.style.height = (ratio * 100) + '%';
            }, { passive: true });
        }
    }

    /* -----------------------------------------------------------------
       03 â€” HER
    ----------------------------------------------------------------- */
    function initHer() {
        const portrait = document.getElementById('herPortrait');
        const floaters = document.getElementById('herFloaters');
        const noticeList = document.getElementById('noticeList');

        if (!CFG.her) return;

        if (portrait && CFG.her.portrait) {
            portrait.src = CFG.her.portrait;
            portrait.alt = CFG.girlfriendName || 'Her';
            setupImageFallback(portrait, 'Her Portrait');
        }

        if (floaters && CFG.her.floaters) {
            floaters.innerHTML = '';
            CFG.her.floaters.forEach((f) => {
                const card = document.createElement('div');
                card.className = 'floater';
                card.innerHTML = `
                    <img src="${f.image}" alt="${f.note}" loading="lazy">
                    <p class="floater__note">${f.note}</p>
                `;
                const img = card.querySelector('img');
                setupImageFallback(img, f.note);
                floaters.appendChild(card);
            });
        }

        if (noticeList && CFG.her.notices) {
            noticeList.innerHTML = '';
            CFG.her.notices.forEach((text) => {
                const li = document.createElement('li');
                li.textContent = text;
                noticeList.appendChild(li);
            });
        }
    }

    /* -----------------------------------------------------------------
       04 â€” OUR MEMORIES (Gallery + Lightbox)
    ----------------------------------------------------------------- */
    let currentGalleryList = [];
    let lightboxIndex = 0;

    function initGallery() {
        const filtersContainer = document.getElementById('galleryFilters');
        const galleryGrid = document.getElementById('gallery');
        if (!galleryGrid || !CFG.memories) return;

        const categories = ['all', 'her', 'us', 'random', 'roblox', 'memories'];

        if (filtersContainer) {
            filtersContainer.innerHTML = '';
            categories.forEach((cat, idx) => {
                const btn = document.createElement('button');
                btn.className = 'gallery-filter' + (idx === 0 ? ' is-active' : '');
                btn.type = 'button';
                btn.dataset.category = cat;
                btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);

                btn.addEventListener('click', () => {
                    document.querySelectorAll('.gallery-filter').forEach(b => b.classList.remove('is-active'));
                    btn.classList.add('is-active');
                    renderGalleryItems(cat);
                });

                filtersContainer.appendChild(btn);
            });
        }

        function renderGalleryItems(category) {
            galleryGrid.innerHTML = '';
            currentGalleryList = category === 'all'
                ? CFG.memories
                : CFG.memories.filter(m => m.category === category);

            currentGalleryList.forEach((item, idx) => {
                const wrap = document.createElement('div');
                wrap.className = 'gallery__item';
                wrap.innerHTML = `
                    <button type="button" aria-label="Lihat foto: ${item.caption}">
                        <img src="${item.image}" alt="${item.caption}" loading="lazy" data-loaded="true">
                    </button>
                `;

                const btn = wrap.querySelector('button');
                const img = wrap.querySelector('img');
                setupImageFallback(img, item.caption);

                btn.addEventListener('click', () => {
                    openLightbox(idx);
                });

                galleryGrid.appendChild(wrap);
            });
        }

        renderGalleryItems('all');
        initLightbox();
    }

    function initLightbox() {
        const modal = document.getElementById('lightbox');
        const closeBtn = document.getElementById('lightboxClose');
        const prevBtn = document.getElementById('lightboxPrev');
        const nextBtn = document.getElementById('lightboxNext');

        if (!modal) return;

        if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
        if (prevBtn) prevBtn.addEventListener('click', prevLightbox);
        if (nextBtn) nextBtn.addEventListener('click', nextLightbox);

        // Backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeLightbox();
        });

        // Keyboard ESC, Left, Right
        document.addEventListener('keydown', (e) => {
            if (modal.hasAttribute('hidden')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prevLightbox();
            if (e.key === 'ArrowRight') nextLightbox();
        });

        // Mobile touch swipe gestures
        let touchStartX = 0;
        modal.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].clientX;
        }, { passive: true });

        modal.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const deltaX = touchEndX - touchStartX;
            if (Math.abs(deltaX) > 50) {
                if (deltaX < 0) nextLightbox();
                else prevLightbox();
            }
        }, { passive: true });
    }

    function openLightbox(idx) {
        if (!currentGalleryList.length) return;
        lightboxIndex = idx;
        updateLightbox();
        const modal = document.getElementById('lightbox');
        if (modal) modal.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        const modal = document.getElementById('lightbox');
        if (modal) modal.setAttribute('hidden', '');
        document.body.style.overflow = '';
    }

    function nextLightbox() {
        if (!currentGalleryList.length) return;
        lightboxIndex = (lightboxIndex + 1) % currentGalleryList.length;
        updateLightbox();
    }

    function prevLightbox() {
        if (!currentGalleryList.length) return;
        lightboxIndex = (lightboxIndex - 1 + currentGalleryList.length) % currentGalleryList.length;
        updateLightbox();
    }

    function updateLightbox() {
        const item = currentGalleryList[lightboxIndex];
        if (!item) return;

        const img = document.getElementById('lightboxImage');
        const caption = document.getElementById('lightboxCaption');
        const counter = document.getElementById('lightboxCounter');

        if (caption) caption.textContent = item.caption || '';
        if (counter) counter.textContent = `${String(lightboxIndex + 1).padStart(2, '0')} / ${String(currentGalleryList.length).padStart(2, '0')}`;

        if (img) {
            img.classList.remove('is-shown');
            img.src = item.image;
            img.onload = () => img.classList.add('is-shown');
            img.onerror = () => {
                img.classList.add('is-shown');
            };
        }
    }

    /* -----------------------------------------------------------------
       05 â€” ROBLOX UNIVERSE
    ----------------------------------------------------------------- */
    function initRoblox() {
        const missions = document.getElementById('missions');
        const stats = document.getElementById('robloxStats');
        const caption = document.getElementById('robloxCaption');
        if (!CFG.roblox) return;

        const robloxLightboxItems = [];

        if (missions && CFG.roblox.missions) {
            missions.innerHTML = '';
            CFG.roblox.missions.forEach((m) => {
                const card = document.createElement('article');
                card.className = 'mission';
                card.innerHTML = `
                    <p class="mission__label">${m.label}</p>
                    <p class="mission__prompt">${m.prompt}</p>
                    <div class="mission__image-wrap" role="button" tabindex="0" aria-label="Lihat foto ${m.label}">
                        <img class="mission__image" src="${m.image}" alt="${m.prompt}" loading="lazy">
                    </div>
                    <p class="mission__status">${m.status}</p>
                `;
                const img = card.querySelector('img');
                setupImageFallback(img, m.label);

                const itemIdx = robloxLightboxItems.length;
                robloxLightboxItems.push({
                    image: m.image,
                    caption: `${m.label}: ${m.prompt} (${m.status})`
                });

                const wrap = card.querySelector('.mission__image-wrap');
                if (wrap) {
                    wrap.addEventListener('click', () => {
                        currentGalleryList = robloxLightboxItems;
                        openLightbox(itemIdx);
                    });
                    wrap.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            currentGalleryList = robloxLightboxItems;
                            openLightbox(itemIdx);
                        }
                    });
                }

                missions.appendChild(card);
            });
        }

        if (stats && CFG.roblox.stats) {
            stats.innerHTML = '';
            CFG.roblox.stats.forEach((s) => {
                const block = document.createElement('div');
                block.className = 'roblox-stat';
                block.innerHTML = `
                    <p class="roblox-stat__value" data-target="${s.value}">0</p>
                    <p class="roblox-stat__label">${s.label}</p>
                `;
                stats.appendChild(block);
            });

            // Count-up on scroll
            let statsAnimated = false;
            const obs = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !statsAnimated) {
                        statsAnimated = true;
                        animateRobloxStats();
                    }
                });
            }, { threshold: 0.25 });
            obs.observe(stats);
        }

        function animateRobloxStats() {
            const values = stats.querySelectorAll('.roblox-stat__value');
            values.forEach((v) => {
                const targetVal = v.dataset.target;
                const num = parseInt(targetVal, 10);
                if (isNaN(num)) {
                    v.textContent = targetVal;
                    return;
                }
                let current = 0;
                const step = Math.max(1, Math.floor(num / 40));
                const interval = setInterval(() => {
                    current += step;
                    if (current >= num) {
                        v.textContent = num + '+';
                        clearInterval(interval);
                    } else {
                        v.textContent = String(current);
                    }
                }, 30);
            });
        }

        // Roblox additional gallery
        const robloxGallery = document.getElementById('robloxGallery');
        if (robloxGallery && CFG.roblox.gallery && CFG.roblox.gallery.length) {
            robloxGallery.innerHTML = '';
            CFG.roblox.gallery.forEach((imgSrc, idx) => {
                const item = document.createElement('div');
                item.className = 'roblox-gallery__item reveal';
                item.setAttribute('role', 'button');
                item.setAttribute('tabindex', '0');
                item.setAttribute('aria-label', `Lihat kenangan Roblox ${idx + 1}`);

                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = 'Roblox memory ' + (idx + 1);
                img.loading = 'lazy';
                setupImageFallback(img, 'Memory');
                item.appendChild(img);

                const itemIdx = robloxLightboxItems.length;
                const capText = (CFG.roblox.captions && CFG.roblox.captions[idx % CFG.roblox.captions.length])
                    ? `"${CFG.roblox.captions[idx % CFG.roblox.captions.length]}"`
                    : `Roblox Memory ${idx + 1}`;
                robloxLightboxItems.push({
                    image: imgSrc,
                    caption: capText
                });

                item.addEventListener('click', () => {
                    currentGalleryList = robloxLightboxItems;
                    openLightbox(itemIdx);
                });
                item.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        currentGalleryList = robloxLightboxItems;
                        openLightbox(itemIdx);
                    }
                });

                robloxGallery.appendChild(item);
            });
        }

        if (caption && CFG.roblox.captions && CFG.roblox.captions.length) {
            let capIdx = 0;
            caption.textContent = `"${CFG.roblox.captions[0]}"`;
            setInterval(() => {
                caption.style.opacity = '0';
                setTimeout(() => {
                    capIdx = (capIdx + 1) % CFG.roblox.captions.length;
                    caption.textContent = `"${CFG.roblox.captions[capIdx]}"`;
                    caption.style.opacity = '1';
                }, 400);
            }, 3500);
        }
    }

    /* -----------------------------------------------------------------
       06 â€” HOW WELL DO YOU KNOW US? (Quiz)
    ----------------------------------------------------------------- */
    function initQuiz() {
        const quizBox = document.getElementById('quizBox');
        if (!quizBox || !CFG.quiz || !CFG.quiz.questions) return;

        let currentIndex = 0;
        let score = 0;
        const total = CFG.quiz.questions.length;

        function renderQuestion() {
            if (currentIndex >= total) {
                renderResult();
                return;
            }

            const q = CFG.quiz.questions[currentIndex];

            quizBox.innerHTML = `
                <div class="quiz-progress" aria-label="Progress">
                    ${Array.from({ length: total }).map((_, i) => `
                        <div class="quiz-progress__dot ${i < currentIndex ? 'is-done' : (i === currentIndex ? 'is-current' : '')}"></div>
                    `).join('')}
                </div>
                <h3 class="quiz-question">${q.question}</h3>
                <div class="quiz-options">
                    ${q.options.map((opt, i) => `
                        <button class="quiz-option" type="button" data-index="${i}">${opt}</button>
                    `).join('')}
                </div>
            `;

            const optionBtns = quizBox.querySelectorAll('.quiz-option');
            optionBtns.forEach((btn) => {
                btn.addEventListener('click', () => {
                    const chosen = parseInt(btn.dataset.index, 10);
                    optionBtns.forEach(b => b.disabled = true);

                    if (chosen === q.correct) {
                        score++;
                        btn.classList.add('is-correct');
                    } else {
                        btn.classList.add('is-wrong');
                        if (optionBtns[q.correct]) {
                            optionBtns[q.correct].classList.add('is-correct');
                        }
                    }

                    setTimeout(() => {
                        currentIndex++;
                        renderQuestion();
                    }, 850);
                });
            });
        }

        function renderResult() {
            let msg = CFG.quiz.results.mid;
            if (score <= 2) msg = CFG.quiz.results.low;
            else if (score >= total - 1) msg = CFG.quiz.results.perfect;

            quizBox.innerHTML = `
                <div class="quiz-result">
                    <p class="quiz-result__score">${score} / ${total}</p>
                    <p class="quiz-result__message">${msg}</p>
                    <p class="quiz-result__followup">That's one of the reasons I love you.</p>
                    <button class="quiz-retry" id="quizRetry" type="button">Play Again â†º</button>
                </div>
            `;

            if (score >= total - 1) {
                dropConfetti(quizBox);
            }

            const retryBtn = document.getElementById('quizRetry');
            if (retryBtn) {
                retryBtn.addEventListener('click', () => {
                    currentIndex = 0;
                    score = 0;
                    renderQuestion();
                });
            }
        }

        renderQuestion();
    }

    function dropConfetti(container) {
        const colors = ['#b98290', '#e7c9c3', '#6e2a34', '#f1e6d8'];
        for (let i = 0; i < 28; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.left = (Math.random() * 90 + 5) + '%';
            piece.style.background = colors[Math.floor(Math.random() * colors.length)];
            piece.style.animationDelay = (Math.random() * 0.4) + 's';
            container.appendChild(piece);
            setTimeout(() => piece.remove(), 2000);
        }
    }

    /* -----------------------------------------------------------------
       07 â€” OUR LITTLE THINGS (Notes Desk)
    ----------------------------------------------------------------- */
    function initNotes() {
        const desk = document.getElementById('notesDesk');
        if (!desk || !CFG.notes) return;

        desk.innerHTML = '';
        CFG.notes.forEach((item) => {
            const card = document.createElement('div');
            card.className = 'note';
            card.innerHTML = `
                <div class="note__inner" tabindex="0" role="button" aria-label="${item.front}">
                    <div class="note__face note__face--front">
                        <p>${item.front}</p>
                    </div>
                    <div class="note__face note__face--back">
                        <p>${item.back}</p>
                    </div>
                </div>
            `;

            const inner = card.querySelector('.note__inner');
            function toggle() {
                card.classList.toggle('is-open');
            }
            inner.addEventListener('click', toggle);
            inner.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggle();
                }
            });

            desk.appendChild(card);
        });
    }

    /* -----------------------------------------------------------------
       08 â€” THE LETTER & 09 â€” ONE LAST THING
    ----------------------------------------------------------------- */
    function initLetterAndFinale() {
        const envelope = document.getElementById('envelope');
        const envButton = document.getElementById('envelopeButton');
        const letterPaper = document.getElementById('letterPaper');
        const letterText = document.getElementById('letterText');
        const revealBtn = document.getElementById('revealButton');

        if (letterText && CFG.letter && CFG.letter.paragraphs) {
            letterText.innerHTML = '';
            CFG.letter.paragraphs.forEach((p) => {
                const el = document.createElement('p');
                el.textContent = p;
                letterText.appendChild(el);
            });
        }

        function openEnvelope() {
            if (envelope) envelope.classList.add('is-open');
            setTimeout(() => {
                if (letterPaper) letterPaper.removeAttribute('hidden');
                if (revealBtn) {
                    revealBtn.removeAttribute('hidden');
                    revealBtn.classList.add('is-visible');
                }
            }, 600);
        }

        if (envButton) envButton.addEventListener('click', openEnvelope);
        if (envelope) envelope.addEventListener('click', openEnvelope);

        // 09 â€” Finale surprise
        const finalSurprise = document.getElementById('finalSurprise');
        const finalPhoto = document.getElementById('finalPhoto');
        const finalText = document.getElementById('finalText');
        const endingSection = document.getElementById('ending');

        if (revealBtn && finalSurprise) {
            revealBtn.addEventListener('click', () => {
                finalSurprise.removeAttribute('hidden');
                setTimeout(() => finalSurprise.classList.add('is-shown'), 20);

                if (finalPhoto && CFG.finalSurprise && CFG.finalSurprise.photo) {
                    finalPhoto.src = CFG.finalSurprise.photo;
                    setupImageFallback(finalPhoto, 'You & Me');
                }

                if (finalText && CFG.finalSurprise && CFG.finalSurprise.lines) {
                    finalText.innerHTML = '';
                    const lines = CFG.finalSurprise.lines;
                    let delay = 2000; // longer initial pause for drama

                    lines.forEach((line, i) => {
                        setTimeout(() => {
                            // Fade out previous line before showing next
                            const prev = finalText.querySelector('p');
                            if (prev) {
                                prev.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                                prev.style.opacity = '0';
                                prev.style.transform = 'translateY(-8px)';
                            }
                            setTimeout(() => {
                                finalText.innerHTML = `<p class="is-shown">${line}</p>`;
                            }, prev ? 600 : 0);

                            if (i === lines.length - 1) {
                                // Transition to chapter 10 (To Be Continued)
                                setTimeout(() => {
                                    finalSurprise.classList.remove('is-shown');
                                    setTimeout(() => {
                                        finalSurprise.setAttribute('hidden', '');
                                        if (endingSection) {
                                            endingSection.removeAttribute('hidden');
                                            endingSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }, 1200);
                                }, 4500);
                            }
                        }, delay);

                        delay += 3500; // slower, more cinematic gap between lines
                    });
                }
            });
        }

        // 10 â€” Restart
        const restartBtn = document.getElementById('startAgain');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => {
                    document.body.classList.remove('is-open');
                    document.body.classList.add('is-locked');
                    const musicPlayer = document.getElementById('musicPlayer');
                    const siteNav = document.getElementById('siteNav');
                    const endingSection = document.getElementById('ending');
                    if (musicPlayer) musicPlayer.setAttribute('hidden', '');
                    if (siteNav) siteNav.setAttribute('hidden', '');
                    if (endingSection) endingSection.setAttribute('hidden', '');
                    fastForwardDoor();
                }, 500);
            });
        }
    }

    /* -----------------------------------------------------------------
       SECRET EASTER EGG (Click Logo 5x)
    ----------------------------------------------------------------- */
    function initSecret() {
        const logo = document.getElementById('secretLogo');
        const modal = document.getElementById('secretModal');
        const closeBtn = document.getElementById('secretClose');
        const msgEl = document.getElementById('secretMessageText');

        if (!modal) return;

        if (msgEl && CFG.secretMessage) {
            msgEl.textContent = CFG.secretMessage;
        }

        let clicks = 0;
        let timer = null;

        if (logo) {
            logo.addEventListener('click', () => {
                clicks++;
                clearTimeout(timer);
                timer = setTimeout(() => { clicks = 0; }, 2500);

                if (clicks >= 5) {
                    clicks = 0;
                    modal.removeAttribute('hidden');
                }
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.setAttribute('hidden', '');
            });
        }
    }

    /* -----------------------------------------------------------------
       INTERSECTION OBSERVER FOR .reveal & .reveal-blur
    ----------------------------------------------------------------- */
    function initScrollReveals() {
        const elements = document.querySelectorAll('.reveal, .reveal-blur');
        if (!elements.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        elements.forEach(el => observer.observe(el));
    }

    /* -----------------------------------------------------------------
       PRE-ENTER SCREEN
    ----------------------------------------------------------------- */
    function initPreEnter() {
        const pre = document.getElementById('preEnter');
        const nameEl = document.getElementById('preEnterName');
        const forEl = document.getElementById('preEnterFor');
        if (!pre) return;

        // Set name dynamically
        if (nameEl && CFG.girlfriendName) nameEl.textContent = CFG.girlfriendName + '.';

        function enter() {
            // Immediately try to unlock audio
            playAudio();

            // Blur + fade out pre-enter smoothly
            pre.classList.add('is-leaving');

            // Trigger the door text animation sequence right now as pre-enter dissolves
            startDoorSequence();

            // After transition finishes, hide pre-enter completely
            setTimeout(() => {
                pre.setAttribute('hidden', '');
            }, 1100);
        }

        pre.addEventListener('click', enter);
        pre.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                enter();
            }
        });
    }

    /* -----------------------------------------------------------------
       STAR PARTICLES CANVAS
    ----------------------------------------------------------------- */
    function initStars() {
        const canvas = document.getElementById('starsCanvas');
        if (!canvas || prefersReducedMotion()) return;

        const ctx = canvas.getContext('2d');
        let stars = [];
        let raf;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function createStars(n) {
            stars = [];
            for (let i = 0; i < n; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 1.2 + 0.2,
                    alpha: Math.random() * 0.5 + 0.1,
                    speed: Math.random() * 0.006 + 0.003,
                    phase: Math.random() * Math.PI * 2
                });
            }
        }

        function draw(ts) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const t = ts * 0.001;
            stars.forEach(s => {
                const a = s.alpha * (0.5 + 0.5 * Math.sin(t * s.speed * 60 + s.phase));
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(243,236,226,${a.toFixed(3)})`;
                ctx.fill();
            });
            raf = requestAnimationFrame(draw);
        }

        resize();
        createStars(120);
        raf = requestAnimationFrame(draw);

        window.addEventListener('resize', () => {
            resize();
            createStars(120);
        }, { passive: true });
    }

    /* -----------------------------------------------------------------
       SCROLL PROGRESS BAR
    ----------------------------------------------------------------- */
    function initScrollProgress() {
        const bar = document.getElementById('scrollProgress');
        if (!bar) return;
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            bar.style.width = pct.toFixed(2) + '%';
        }, { passive: true });
    }

    /* -----------------------------------------------------------------
       PREMIUM MOBILE FEEL (ripple + floating hearts)
    ----------------------------------------------------------------- */
    function initMobilePremium() {
        // Floating heart on long press / special taps
        function spawnHeart(x, y) {
            const h = document.createElement('span');
            h.className = 'float-heart';
            h.textContent = ['â¤', 'âœ¦', 'â™¡', 'âœ¿'][Math.floor(Math.random() * 4)];
            h.style.left = (x - 12) + 'px';
            h.style.top = (y - 12) + 'px';
            document.body.appendChild(h);
            setTimeout(() => h.remove(), 1300);
        }

        // Tap ripple on all interactive elements
        function addRipple(el) {
            el.addEventListener('pointerdown', (e) => {
                const rect = el.getBoundingClientRect();
                const rip = document.createElement('span');
                rip.className = 'tap-ripple';
                rip.style.left = (e.clientX - rect.left - 30) + 'px';
                rip.style.top = (e.clientY - rect.top - 30) + 'px';
                el.style.position = el.style.position || 'relative';
                el.style.overflow = 'hidden';
                el.appendChild(rip);
                setTimeout(() => rip.remove(), 600);
            }, { passive: true });
        }

        // Apply ripple to primary CTA buttons
        document.querySelectorAll(
            '.door__button, .envelope__button, .reveal-button, .ending__restart'
        ).forEach(addRipple);

        // Triple-tap anywhere to spawn hearts
        let tapCount = 0;
        let tapTimer = null;
        document.addEventListener('touchend', (e) => {
            tapCount++;
            clearTimeout(tapTimer);
            tapTimer = setTimeout(() => { tapCount = 0; }, 500);
            if (tapCount >= 3) {
                tapCount = 0;
                const t = e.changedTouches[0];
                spawnHeart(t.clientX, t.clientY);
            }
        }, { passive: true });
    }

    /* -----------------------------------------------------------------
       BOOTSTRAP ALL MODULES
    ----------------------------------------------------------------- */
    document.addEventListener('DOMContentLoaded', () => {
        initOpening();
        initMusic();
        initNavigation();
        initRelationshipCounter();
        initStoryTimeline();
        initHer();
        initGallery();
        initRoblox();
        initQuiz();
        initNotes();
        initLetterAndFinale();
        initSecret();
        initScrollReveals();
        initStars();
        initScrollProgress();
        initMobilePremium();
        initPreEnter();
    });

})();
