// --- Falling Folder Morph Logic ---
function morphFolder() {
    const droppedFolder = document.getElementById('dropped-folder');
    const introScreen = document.getElementById('falling-intro');
    const hints = document.querySelectorAll('.intro-hint, .click-hint');

    // 1. Instantly hide the text hints so they don't distract from the morph
    hints.forEach(hint => hint.style.opacity = '0');

    // 2. Trigger the CSS morph animation (scales up and rotates to camera)
    droppedFolder.classList.add('morphing');

    // 3. Wait for the folder to scale up, then fade out the black floor screen
    setTimeout(() => {
        introScreen.style.opacity = '0';
        
        // Remove it entirely from the DOM so you can click the real folder underneath
        setTimeout(() => {
            introScreen.style.display = 'none';
        }, 800); 
    }, 300); // 300ms delay perfectly blends the scale up with the fade out
}

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
