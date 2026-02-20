const CLASS_NAME = "Chuyên Anh 2 (2023-2026)";

const GROUP_HEADERS = {
    1: "image/headers/header_to_1.jpg", 
    2: "image/headers/header_to_2.jpg", 
    3: "image/headers/header_to_3.jpg", 
    4: "image/headers/header_to_4.jpg"  
};

// --- GLOBAL AUDIO PLAYER ---
const audioPlayer = new Audio();
audioPlayer.loop = true; 
let currentDisk = null; 
let diskTimeout = null; 

const membersData = [
    // --- TỔ 1 ---
    { group: 1, name: "Trần Hà Minh Anh", role: "Tổ trưởng, Thủ quỹ", img: "image/avatars/THMA.jpg", dob: "06/01/2008", keywords: ["Trách nhiệm", "nội tâm", "nhạy cảm"], bio: "Mình cảm thấy bản thân là một cô gái sống nội tâm... (Bio đã rút gọn)" },
    { group: 1, name: "Hồ Trần Diệp Ngân", role: "Lớp trưởng", img: "image/avatars/HTDN.jpg", dob: "18/01/2008", keywords: ["Dễ thương", "vui vẻ", "ngầu"], bio: "Hello mình là Diệp Ngân..." },
    { group: 1, name: "Nguyễn Thị Hà Linh", role: "Bí thư lớp", img: "image/avatars/NTHL.jpg", dob: "12/07/2008", keywords: ["ồn ào", "hoạt bát"], bio: "Nếu để nói về bản thân..." },
    { group: 1, name: "Nguyễn Thị Mai Phương", role: "", img: "image/avatars/NTMP.jpg", dob: "07/08/2008", keywords: ["Biết lắng nghe", "Linh hoạt"], bio: "Hồi học cấp 2 mình khá ít nói..." },
    { group: 1, name: "Lê Trần Thảo Nguyên", role: "", img: "image/avatars/LTTN.jpg", dob: "20/11/2008", keywords: ["Năng nổ", "chủ động"], bio: "Từ khi mới bước chân vào ngôi trường chuyên..." },
    { group: 1, name: "Lê Ngọc Đài Cát", role: "", img: "image/avatars/LNĐC.jpg", dob: "03/01/2008", keywords: ["lowkey", "funny"], bio: "Mình thấy rất biết ơn..." },
    { group: 1, name: "Phạm Nguyễn Gia Linh", role: "", img: "image/avatars/PNGL.jpg", dob: "12/03/2008", keywords: ["Cool ngầu", "lạnh lùng"], bio: "Từ khi vô đây, tôi được cứu rỗi..." },
    { group: 1, name: "Lương Minh Triết", role: "Lớp phó lao động", img: "image/avatars/LMT.jpg", dob: "05/07/2008", keywords: ["Self-indulgent", "conscientious"], bio: "Mình là Lương Minh Triết..." },

    // --- TỔ 2 ---
    { group: 2, name: "Đào Khải Anh", role: "Tổ trưởng", img: "image/avatars/ĐKA.jpg", dob: "", keywords: [], bio: "" },
    { group: 2, name: "Phạm Bảo Linh", role: "Sao đỏ", img: "image/avatars/PBL.jpg", dob: "", keywords: [], bio: "" },
    { group: 2, name: "Thái Trần Bảo Châu", role: "", img: "image/avatars/TTBC.jpg", dob: "26/11/2008", keywords: ["điềm đạm", "chân thành"], bio: "Tui rất vui vì đã được là một phần của A2..." },
    { group: 2, name: "Hà Thị Ánh Dương", role: "", img: "image/avatars/HTÁD.jpg", dob: "27/01/2008", keywords: ["Vui vẻ", "thân thiện"], bio: "Tui yêu 12A2 nhiều lắm..." },
    { group: 2, name: "Phạm Đức Anh", role: "", img: "image/avatars/PĐA.jpg", dob: "28/10/2008", keywords: ["Hiền lành", "tốt bụng"], bio: "Mình là một người luôn mang trong mình nhiều ước mơ..." },
    { group: 2, name: "Nguyễn Ngọc Như Hiếu", role: "", img: "image/avatars/NNNH.jpg", dob: "22/01/2008", keywords: ["Sáng nắng chiều mưa"], bio: "Mình từng là một đứa khá mơ hồ..." },
    { group: 2, name: "Lê Nhã Thi", role: "", img: "image/avatars/LNT.jpg", dob: "23/04/2008", keywords: ["Hoà đồng", "Vui Vẻ"], bio: "Hello, Nhã Thi đây..." },
    { group: 2, name: "Nguyễn Trần Minh Uyên", role: "", img: "image/avatars/NTMU.jpg", dob: "27/11/2008", keywords: ["Bùng cháy", "Hoạt náo"], bio: "Hello mọi người mình là Minh Uyên đây..." },

    // --- TỔ 3 ---
    { group: 3, name: "Lê Nguyễn Khánh Tiên", role: "Tổ trưởng", img: "image/avatars/LNKT.jpg", dob: "18/09/2008", keywords: ["Đẹp gái", "Thấu hiểu"], bio: "Tui là cá mập..." },
    { group: 3, name: "Huỳnh Nguyễn Thanh Xuân", role: "", img: "image/avatars/HNTX.jpg", dob: "07/05/2008", keywords: ["Cái đầu lạnh", "Bình tĩnh"], bio: "Mình cảm thấy rất may mắn..." },
    { group: 3, name: "Hồ Bảo Ngọc", role: "", img: "image/avatars/HBN.jpg", dob: "23/11/2008", keywords: ["Lạc quan", "Sáng tạo"], bio: "Everything happened for a reason..." },
    { group: 3, name: "Đặng Trọng Hoàn", role: "", img: "image/avatars/ĐTH.jpg", dob: "15/10/2008", keywords: ["Vô tư", "Hoà đồng"], bio: "Mình là người tò mò..." },
    { group: 3, name: "Phạm Tuấn Minh", role: "", img: "image/avatars/PTM.jpg", dob: "22/08/2008", keywords: ["Vui vẻ", "ham học hỏi"], bio: "Nhìn lại hành trình đã qua..." },
    { group: 3, name: "Đinh Quốc Trí", role: "", img: "image/avatars/ĐQT.jpg", dob: "11/06/2008", keywords: ["Bình thường", "DMO"], bio: "15/01/2026: Bước vào chuyên Hùng Vương..." },
    { group: 3, name: "Đào Thị Phương Thảo", role: "", img: "image/avatars/ĐTPT.jpg", dob: "23/02/2008", keywords: ["Năng lượng", "nhiệt tình"], bio: "Mình không biết tại sao lại có duyên..." },
    { group: 3, name: "Trần Huyền Trang", role: "Lớp phó học tập", img: "image/avatars/THT.jpg", dob: "07/01/2008", keywords: ["Cởi mở", "Kiểm Soát"], bio: "Mình muốn làm luật sư ở Đức..." },
    { group: 3, name: "Nguyễn Hải Anh", role: "Ban tự quản", img: "image/avatars/NHA.jpg", dob: "30/08/2008", keywords: ["buồn ngủ", "oách"], bio: "OÁCH NHẤT 12A2 !!!" },

    // --- TỔ 4 ---
    { group: 4, name: "Nguyễn Quỳnh Lam", role: "Tổ trưởng", img: "image/avatars/NQL.jpg", dob: "06/07/2008", keywords: ["Vui vẻ", "mong manh"], bio: "Là 1 người iu hoà bình..." },
    { group: 4, name: "Trần Hoàng Anh Thư", role: "Sao đỏ", img: "image/avatars/THAT.jpg", dob: "03/01/2008", keywords: ["Năng động", "Hoạt bát"], bio: "Mình là một người trẻ luôn tò mò..." },
    { group: 4, name: "Nguyễn Vũ Đức", role: "", img: "image/avatars/NVĐ.jpg", dob: "02/07/2008", keywords: ["vui vẻ", "nhân văn"], bio: "T muốn giàu..." },
    { group: 4, name: "Cù Hoàn Mỹ", role: "", img: "image/avatars/CHM.jpg", dob: "06/06/2008", keywords: ["Lúc này lúc kia", "hề hước"], bio: "Ba năm cấp ba của tớ..." },
    { group: 4, name: "Nguyễn Thanh Thảo", role: "", img: "image/avatars/NTT.jpg", dob: "28/01/2008", keywords: ["anti-social"], bio: "Mình vẽ gay" },
    { group: 4, name: "Đặng An Ninh", role: "", img: "image/avatars/ĐAN.jpg", dob: "14/07/2008", keywords: ["Vui vẻ", "Hòa đồng"], bio: "Khi nhìn lại ba năm học cấp ba..." },
    { group: 4, name: "Nguyễn Thuận Phát", role: "", img: "image/avatars/NTP.jpg", dob: "26/09/2008", keywords: ["Mùa hạ", "Mùa đông"], bio: "Mình được nhào nặn từ cái nắng mùa hạ..." },
    { group: 4, name: "Nguyễn Như Tâm", role: "", img: "image/avatars/NNT.jpg", dob: "05/02/2008", keywords: ["Chaebol", "chị bảy gà"], bio: "Trước đây, mình là người đặt nặng điểm số..." }
];

// --- HELPER FUNCTIONS ---

function getZodiacImage(dob) {
    if (!dob) return null;
    const parts = dob.split('/');
    if (parts.length < 2) return null;
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);

    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "zodiac/BB.png";
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "zodiac/SN.png";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "zodiac/BD.png";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "zodiac/KN.png";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) return "zodiac/ST.png"; 
    if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) return "zodiac/CG.png";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "zodiac/ST (2).png";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "zodiac/XN.png";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) return "zodiac/TB.png";
    if ((month == 10 && day >= 24) || (month == 11 && day <= 21)) return "zodiac/TY.png";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "zodiac/NM.png";
    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "zodiac/MK.png";
    return null;
}

const seasonClasses = { 1: "season-spring", 2: "season-summer", 3: "season-autumn", 4: "season-winter" };

// --- RENDER ---
function renderCards() {
    const app = document.getElementById('app');
    [1, 2, 3, 4].forEach(groupNum => {
        const groupMembers = membersData.filter(m => m.group === groupNum);
        const section = document.createElement('div');
        section.className = `group-section group-theme-${groupNum} ${seasonClasses[groupNum]}`;
        
        section.innerHTML = `
            <div class="group-content-container">
                <h2 class="group-title-text group-font-${groupNum}">TỔ <span class="group-num">${groupNum}</span></h2>
                <div class="cards-wrapper"></div>
            </div>
        `;
        
        const wrapper = section.querySelector('.cards-wrapper');
        groupMembers.forEach((member, index) => {
            wrapper.appendChild(createCard(member));
        });
        
        app.appendChild(section);
    });
}

function createCard(data) {
    const container = document.createElement('div');
    container.className = 'card-container scroll-hidden';

    const zodiacFile = getZodiacImage(data.dob);
    const zodiacImgTag = zodiacFile ? `<img src="image/${zodiacFile}" class="zodiac-bg" alt="Zodiac">` : '';
    const headerSrc = GROUP_HEADERS[data.group] || "image/headers/header_template.jpg";
    
    // Xử lý tên file nhạc và ảnh bìa đĩa
    const imgFileName = data.img.split('/').pop().replace(/\.[^/.]+$/, "");
    const musicSrc = `music/${imgFileName}.mp3`;
    const avatarFileName = data.img.split('/').pop();
    const labelStyle = `background-image: url('image/musiccover/${avatarFileName}');`;

    container.innerHTML = `
        <div class="card-inner">
            <div class="disk-container" data-song="${musicSrc}">
                <div class="disk-body">
                    <div class="disk-label" style="${labelStyle}"></div>
                    <div class="disk-hole"></div>
                </div>
            </div>

            <div class="card-face card-front">
                ${zodiacImgTag}
                <div class="header-image-container">
                    <img src="${headerSrc}" alt="Header" onerror="this.style.opacity='0.5'">
                </div>
                <div class="card-content">
                    <div class="photo-area">
                        <img src="${data.img}" alt="${data.name}" onerror="this.src='https://placehold.co/105x140?text=No+Image';">
                    </div>
                    <div class="info-area">
                        <div class="field">
                            <span class="label">Họ và tên:</span>
                            <span class="value">${data.name} ${data.role ? `<span class="role-badge">${data.role}</span>` : ''}</span>
                        </div>
                        <div class="field">
                            <span class="label">Ngày sinh:</span>
                            <span class="value">${data.dob || '---'}</span>
                        </div>
                        <div class="field">
                            <span class="label">Lớp:</span>
                            <span class="value">${CLASS_NAME}</span>
                        </div>
                        <div class="keywords">
                            ${data.keywords.length ? data.keywords.map(k => `<span class="keyword">#${k}</span>`).join('') : '<span class="keyword">#12A2</span>'}
                        </div>
                    </div>
                </div>
                <div class="flip-hint"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 14l5-5-5-5"/><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13"/></svg></div>
            </div>

            <div class="card-face card-back">
                <div class="back-container">
                    <div class="bio-title">Hành trình trưởng thành</div>
                    <div class="bio-scroll-area">
                        <p class="bio-text">${data.bio || "Đang cập nhật..."}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Events
    container.addEventListener('click', (e) => {
        e.stopPropagation();
        handleCardClick(container);
    });

    const diskBody = container.querySelector('.disk-body');
    if (diskBody) {
        diskBody.addEventListener('click', (e) => {
            e.stopPropagation(); 
            toggleDiskState(container.querySelector('.disk-container'), diskBody);
        });
    }

    return container;
}

// --- INTERACTION LOGIC ---
const overlay = document.getElementById('overlay');
let activeCard = null;
let placeholder = null;

function handleCardClick(card) {
    if (activeCard === card) {
        card.classList.toggle('is-flipped');
        return;
    }
    if (activeCard) closeCard();

    // Tạo placeholder để giữ chỗ trong layout
    placeholder = document.createElement('div');
    placeholder.style.width = card.offsetWidth + 'px';
    placeholder.style.height = card.offsetHeight + 'px';
    placeholder.style.margin = window.getComputedStyle(card).margin;
    card.parentNode.insertBefore(placeholder, card);

    // Kích hoạt animation
    card.classList.add('is-focused');
    activeCard = card;
    overlay.classList.add('active');

    // Chơi nhạc
    startDisk(card);
}

function closeCard() {
    if (!activeCard) return;

    if (diskTimeout) clearTimeout(diskTimeout);
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    audioPlayer.onerror = null;

    const diskContainer = activeCard.querySelector('.disk-container');
    const diskBody = activeCard.querySelector('.disk-body');
    if (diskContainer) {
        diskContainer.classList.remove('state-playing', 'state-retracted');
        diskBody.classList.remove('spinning', 'paused');
    }

    activeCard.classList.remove('is-flipped');
    activeCard.classList.remove('is-focused');
    overlay.classList.remove('active');

    const closingCard = activeCard;
    const closingPlaceholder = placeholder;

    // Đợi transition xong rồi mới xóa placeholder
    setTimeout(() => {
        if (closingPlaceholder && closingPlaceholder.parentNode) {
            closingPlaceholder.parentNode.removeChild(closingPlaceholder);
        }
    }, 400);

    activeCard = null;
    placeholder = null;
}

function startDisk(card) {
    const diskContainer = card.querySelector('.disk-container');
    const diskBody = card.querySelector('.disk-body');
    const songUrl = diskContainer.getAttribute('data-song');

    if (diskTimeout) clearTimeout(diskTimeout);

    if (songUrl) {
        diskTimeout = setTimeout(() => {
            audioPlayer.src = songUrl;
            audioPlayer.onerror = () => { diskContainer.style.display = 'none'; };
            diskContainer.style.display = 'block';

            audioPlayer.play().then(() => {
                diskContainer.classList.add('state-playing');
                diskBody.classList.add('spinning');
            }).catch(e => console.log("Cần tương tác user để play nhạc"));
        }, 600);
    }
}

function toggleDiskState(container, body) {
    if (container.classList.contains('state-playing')) {
        container.classList.remove('state-playing');
        container.classList.add('state-retracted');
        body.classList.add('paused');
        audioPlayer.pause();
    } else {
        container.classList.remove('state-retracted');
        container.classList.add('state-playing');
        body.classList.remove('paused');
        audioPlayer.play();
    }
}

overlay.addEventListener('click', closeCard);
document.addEventListener('keydown', (e) => { if (e.key === "Escape") closeCard(); });

// Init
renderCards();

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('scroll-hidden');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card-container').forEach(card => observer.observe(card));
