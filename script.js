// --- Decryption Loader Logic ---
document.addEventListener("DOMContentLoaded", () => {
    let count = 0;
    const counterElement = document.getElementById('load-counter');
    const loaderScreen = document.getElementById('loader-screen');
    
    // The mechanical ticking interval
    let tick = setInterval(() => {
        // Adds a random number between 1 and 3 to make the counting feel mechanical/stuttery
        count += Math.floor(Math.random() * 3) + 1; 
        
        if (count >= 100) {
            count = 100;
            clearInterval(tick);
            counterElement.innerText = count;
            
            // Wait a split second at 100, then fade out
            setTimeout(() => {
                loaderScreen.style.opacity = '0'; // Triggers the CSS fade
                
                // Once faded, remove it completely so it doesn't block clicks
                setTimeout(() => {
                    loaderScreen.style.display = 'none';
                }, 600); 
            }, 400); 
        } else {
            // Adds a leading zero to single digits (01, 09, etc)
            counterElement.innerText = count.toString().padStart(2, '0');
        }
    }, 35); // Speed of the tick (lower is faster)
});

 // Frame Navigation Logic
function switchFrame(frameId) {
    const frames = document.querySelectorAll('.frame');
    frames.forEach(frame => frame.classList.remove('active'));
    
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));

    document.getElementById(frameId).classList.add('active');
    event.target.classList.add('active');
}

// Form Validation Logic
function validateLogin(e) {
    e.preventDefault(); 
    let isValid = true;
    
    const email = document.getElementById('logEmail').value;
    const pass = document.getElementById('logPass').value;
    const emailErr = document.getElementById('logEmailErr');
    const passErr = document.getElementById('logPassErr');

    emailErr.style.display = 'none';
    passErr.style.display = 'none';

    if (!email.includes('@') || email.trim() === '') {
        emailErr.style.display = 'block';
        isValid = false;
    }
    if (pass.trim() === '') {
        passErr.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert("ACCESS GRANTED. Welcome back to the archives.");
        document.getElementById('loginForm').reset();
    }
}

function validateRegister(e) {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    
    const nameErr = document.getElementById('regNameErr');
    const emailErr = document.getElementById('regEmailErr');

    nameErr.style.display = 'none';
    emailErr.style.display = 'none';

    if (name.trim() === '') {
        nameErr.style.display = 'block';
        isValid = false;
    }
    if (!email.includes('@') || email.trim() === '') {
        emailErr.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert("DOSSIER CREATED. Operative Gargee will review your file shortly.");
        document.getElementById('regForm').reset();
    }
}

// --- Evidence Viewer (Lightbox) Logic ---
function openModal(imageSrc) {
    const modal = document.getElementById("evidenceModal");
    const modalImg = document.getElementById("fullEvidenceImg");
    modalImg.src = imageSrc; // Swaps in the correct full-size image
    modal.style.display = "flex"; // Shows the dark overlay
}

function closeModal() {
    document.getElementById("evidenceModal").style.display = "none";
}

// --- Open Folder Animation ---
function openFolder() {
    document.getElementById('folder-cover').classList.add('opened');
}