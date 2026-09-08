/**
 * =====================================================================
 * OUR LITTLE UNIVERSE — CONFIGURATION
 * ---------------------------------------------------------------------
 * Edit file ini untuk mengubah isi konten website (nama, tanggal, foto,
 * kata-kata, cerita, pertanyaan kuis, dan surat).
 * =====================================================================
 */

window.CONFIG = {
    // 01 — IDENTITAS & TANGGAL
    girlfriendName: "Asa",
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
    secretMessage: "Kamu itu rumah ternyaman buat aku, Asa. Makasih udah selalu ada, ya. Love you to the moon and back! ❤️",

    // 02 — OUR STORY (Timeline Cerita)
    story: [
        {
            date: "Awal Cerita",
            title: "The First Hello",
            description: "Hari di mana semuanya dimulai tanpa kita sadar kita diem dieman itu bakal jadi awal dari cerita sepanjang ini.",
            image: "assets/images/memories/x.png",
            fallbackTag: "First Meeting"
        },
        {
            date: "Momen Pertama",
            title: "First Conversation That Lasted Hours",
            description: "Dari topik yang kaku, tiba-tiba kita ngobrol sampai lupa waktu. Entah kenapa rasanya begitu nyaman sejak awal.",
            image: "assets/images/her/mem1.webp",
            fallbackTag: "Late Night Talks"
        },
        {
            date: "Gaming Memory",
            title: "Our First Game Together",
            description: "Mulai dari panik bareng, ketawa ngakak gara-gara hal konyol di game, dan alasan klasik: 'satu match lagi'.",
            image: "assets/images/roblox/mem1.jpg",
            fallbackTag: "Game Night"
        },
        {
            date: "Hari Spesial",
            title: "The Day You Became My Person",
            description: "Keputusan terbaik yang pernah ada. Melihat senyum kamu hari itu masih tersimpan rapi di ingatan sampai sekarang.",
            image: "assets/images/us/x1.png",
            fallbackTag: "Special Day"
        },
        {
            date: "Hari Ini & Seterusnya",
            title: "Still Choosing You, Every Single Day",
            description: "Setiap hari bersamamu selalu terasa istimewa. Selamat ulang tahun, duniaku.",
            image: "assets/images/her/asaaa.jpg",
            fallbackTag: "Always You"
        }
    ],

    // 03 — HER (Apresiasi Visual & Detail)
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

    // 04 — OUR MEMORIES (Galeri Scrapbook)
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
            caption: "That day."
        },
        {
            category: "her",
            image: "assets/images/her/asa1.jpg",
            caption: "Always glowing."
        },
        {
            category: "her",
            image: "assets/images/her/asaaa.jpg",
            caption: "Kamu tau ga sih, setiap foto kamu selalu bikin aku senyum."
        },
        {
            category: "random",
            image: "assets/images/memories/x2.png",
            caption: "Why were we like this? 😂"
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
            caption: "3 hours later... no regrets."
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

    // 05 — ROBLOX UNIVERSE
    roblox: {
        missions: [
            {
                label: "MISSION 01",
                prompt: '"Just one game."',
                image: "assets/images/roblox/x3.png",
                status: "STATUS: FAILED."
            },
            {
                label: "MISSION 02",
                prompt: '"Survive together."',
                image: "assets/images/roblox/mem1.jpg",
                status: "STATUS: SOMEHOW SURVIVED."
            },
            {
                label: "MISSION 03",
                prompt: '"One last game."',
                image: "assets/images/roblox/mem2.jpg",
                status: "STATUS: 3 HOURS LATER."
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
            { value: "∞", label: "LAUGHS" }
        ],
        captions: [
            "we definitely planned this",
            "this was supposed to be quick",
            "why are we still here?",
            "okay, one more.",
            "we were actually good at this... maybe."
        ]
    },

    // 06 — QUIZ: HOW WELL DO YOU KNOW US?
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
                options: ["Roblox", "Game Santai", "Tebak-tebakan"],
                correct: 0
            },
            {
                question: 'Siapa yang lebih sering bilang "one more game"?',
                options: ["Kamu", "Aku", "Janjian satu tapi bablas"],
                correct: 2
            },
            {
                question: 'Siapa yang biasanya kalah duluan?',
                options: ["Kamu", "Aku", "Dua-duanya sama-sama panik"],
                correct: 2
            }
        ],
        results: {
            low: "Looks like someone needs to study our lore.",
            mid: "Not bad at all.",
            perfect: "Okay... you really do know us."
        }
    },

    // 07 — OUR LITTLE THINGS (Catatan Meja)
    notes: [
        {
            front: "Remember when...",
            back: "Momen konyol saat kita nggak bisa berhenti ketawa gara-gara hal yang sebenarnya sepele banget."
        },
        {
            front: "You always...",
            back: "Punya cara unik buat bikin aku luluh setiap kali kamu pasang ekspresi gemas atau cerita hal random."
        },
        {
            front: "That one time...",
            back: "Kita begadang ngobrolin mimpi-mimpi aneh dan hal-hal yang belum pernah aku ceritain ke siapa pun."
        },
        {
            front: "Don't ask why...",
            back: "Cuma kita berdua yang ngerti kenapa satu kata tertentu bisa bikin kita langsung saling tatap dan ketawa."
        },
        {
            front: "Only we would understand...",
            back: "Dunia kecil yang kita bangun berdua, di mana kita bisa jadi diri kita yang paling apa adanya."
        },
        {
            front: "Little secret...",
            back: "Setiap kali dengar kamu ketawa, hari yang berat langsung terasa ringan."
        }
    ],

    // 08 — THE LETTER (Surat Pribadi)
    letter: {
        paragraphs: [
            "Selamat ulang tahun, Asayangg. Dari banyaknya hal yang pernah terjadi di hidup aku, bisa ketemu dan kenal kamu adalah salah satu hal paling berharga yang pernah aku miliki.",
            "Mungkin aku sering telat, kadang ceroboh, atau nggak selalu bisa mengekspresikan perasaanku dengan sempurna. Tapi lewat website kecil ini, aku pengen kamu tahu betapa berartinya kamu buat aku. Cara kamu tersenyum, ketawa manismu, cerita-cerita random kamu, sampai saat-saat kocak kita main Roblos barengâ€”semuanya bikin hari-hariku yang biasa itu jadi jauh lebih kerenn sama kamu sayangg.",
            "Semoga di usiamu yang baru ini, kamu selalu dikelilingi kebahagiaan, kesehatan, dan semua impian manismu tercapai. Apapun yang terjadi nanti, ingat ya, kamu ga sendirian. Aku bakal selalu di sini, nemenin kamu di mana punnnn. oke?",
            "Makasii sayangg udah jadi bagian dari cerita akuu. Happy birthday, my favorite person."
        ]
    },

    // 09 — ONE LAST THING (Kejutan Sinematik)
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
