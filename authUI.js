import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBXvqBMcpFDPH4cDtHwaZ4JaitOR7WYkQ0",
    authDomain: "agri-procurement-portal.firebaseapp.com",
    projectId: "agri-procurement-portal",
    storageBucket: "agri-procurement-portal.firebasestorage.app",
    messagingSenderId: "242878167825",
    appId: "1:242878167825:web:dc992767d97bd815492ab0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const accountDropdown = document.getElementById('accountDropdown');
const navBar = document.querySelector('nav');

// Dynamic Navigation Updater Function
function updateNavBar(role) {
    if (!navBar) return;

    const langSwitcherHtml = `
        <select id="langSwitcher" onchange="setLanguage(this.value)" style="width: auto; display: inline-block; padding: 4px 8px; font-size: 13px; font-weight: bold; border: 1px solid #4a6a85; border-radius: 4px; background-color: var(--navy-dark); color: white; margin-left: 15px; cursor: pointer;">
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
        </select>
    `;

    if (role === 'farmer') {
        // Sirf Farmer ke relevant links
        navBar.innerHTML = `
            <a href="./home.html" data-i18n="nav_home">Home</a>
            <a href="./bookslot.html" data-i18n="nav_book">Book Slot</a>
            <a href="./track.html" data-i18n="nav_track">Track Status</a>
            <a href="./farmerlogin.html" data-i18n="nav_farmer">Farmer Login</a>
            <a href="./farmer-dashboard.html" data-i18n="nav_farmer_dashboard">My Dashboard</a>
            ${langSwitcherHtml}
        `;
    } else if (role === 'admin') {
        // Admin ke relevant links
        navBar.innerHTML = `
            <a href="./home.html" data-i18n="nav_home">Home</a>
            <a href="./bookslot.html" data-i18n="nav_book">Book Slot</a>
            <a href="./track.html" data-i18n="nav_track">Track Status</a>
            <a href="./admin.html" data-i18n="nav_admin">Admin Login</a>
            <a href="./admin-dashboard.html" data-i18n="nav_admin_dashboard">Admin Dashboard</a>
            ${langSwitcherHtml}
        `;
    } else {
        // Guest / Logged-out state (Home par sabhi dikhenge)
        navBar.innerHTML = `
            <a href="./home.html" data-i18n="nav_home">Home</a>
            <a href="./bookslot.html" data-i18n="nav_book">Book Slot</a>
            <a href="./track.html" data-i18n="nav_track">Track Status</a>
            <a href="./farmerlogin.html" data-i18n="nav_farmer">Farmer Login</a>
            <a href="./admin.html" data-i18n="nav_admin">Admin Login</a>
            <a href="./admin-dashboard.html" data-i18n="nav_admin_dashboard">Admin Dashboard</a>
            ${langSwitcherHtml}
        `;
    }

    if (typeof applyLanguage === 'function') {
        applyLanguage();
    }
}

onAuthStateChanged(auth, async (user) => {
    if (user) {
        let role = "farmer";
        let roleLabel = "Farmer";
        let avatarIcon = "👨‍🌾";
        let userName = user.displayName || user.email.split('@')[0];

        try {
            if (user.email === "admin@sih26032.com") {
                role = "admin";
                roleLabel = "Super Admin";
                avatarIcon = "🛡️";
                userName = "Super Admin";
            } else {
                const adminDoc = await getDoc(doc(db, "admins", user.uid));
                if (adminDoc.exists()) {
                    const adminData = adminDoc.data();
                    role = "admin";
                    roleLabel = adminData.licenseNumber ? `Buyer (${adminData.licenseNumber})` : "Admin / Buyer";
                    avatarIcon = "👨‍💼";
                    userName = adminData.name || userName;
                } else {
                    const farmerDoc = await getDoc(doc(db, "farmers", user.uid));
                    if (farmerDoc.exists()) {
                        userName = farmerDoc.data().name || userName;
                    }
                }
            }
        } catch (e) {
            console.error("Error fetching role:", e);
        }

        // Navigation update according to role
        updateNavBar(role);

        // Header Dropdown Setup
        if (accountDropdown) {
            accountDropdown.innerHTML = `
                <div style="display: flex; align-items: center; gap: 10px; padding: 12px 14px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; border-radius: 6px 6px 0 0;">
                    <div style="width: 38px; height: 38px; border-radius: 50%; background: #e2e8f0; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">
                        ${avatarIcon}
                    </div>
                    <div style="display: flex; flex-direction: column; text-align: left; overflow: hidden;">
                        <span style="font-size: 13px; font-weight: bold; color: #0B3558 !important; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block;">
                            ${userName}
                        </span>
                        <span style="font-size: 11px; color: #5a6472 !important; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block; margin-top: 1px;">
                            ${user.email}
                        </span>
                        <span style="display: inline-block; font-size: 10px; font-weight: bold; padding: 2px 8px; border-radius: 10px; margin-top: 4px; width: fit-content; background: ${role === 'admin' ? '#fdebd0' : '#eafaf1'}; color: ${role === 'admin' ? '#b9770e' : '#1e7e45'} !important;">
                            ${roleLabel}
                        </span>
                    </div>
                </div>

                <div style="padding: 6px 0; background: #ffffff; border-radius: 0 0 6px 6px;">
                    ${
                        role === 'admin' 
                        ? `<a href="./admin-dashboard.html" style="display: flex; align-items: center; gap: 8px; padding: 8px 14px; text-decoration: none; color: #0B3558 !important; font-size: 13px; font-weight: 600;"><span>📊</span> Admin Dashboard</a>`
                        : `<a href="./farmer-dashboard.html" style="display: flex; align-items: center; gap: 8px; padding: 8px 14px; text-decoration: none; color: #0B3558 !important; font-size: 13px; font-weight: 600;"><span>🌾</span> My Dashboard</a>`
                    }
                    <a href="./track.html" style="display: flex; align-items: center; gap: 8px; padding: 8px 14px; text-decoration: none; color: #0B3558 !important; font-size: 13px; font-weight: 600;"><span>📍</span> Track Status</a>
                    <div style="border-top: 1px solid #e2e8f0; margin: 4px 0;"></div>
                    <button id="authLogoutBtn" style="width: 100%; text-align: left; display: flex; align-items: center; gap: 8px; padding: 8px 14px; background: none; border: none; color: #c0392b !important; font-size: 13px; font-weight: 600; cursor: pointer; font-family: inherit;">
                        <span>🚪</span> Logout
                    </button>
                </div>
            `;

            document.getElementById('authLogoutBtn').addEventListener('click', async () => {
                await signOut(auth);
                window.location.reload();
            });
        }

    } else {
        // Guest user navbar & dropdown
        updateNavBar('guest');

        if (accountDropdown) {
            accountDropdown.innerHTML = `
                <div style="display: flex; align-items: center; gap: 10px; padding: 12px 14px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; border-radius: 6px 6px 0 0;">
                    <div style="width: 38px; height: 38px; border-radius: 50%; background: #e2e8f0; display: flex; align-items: center; justify-content: center; font-size: 18px;">👤</div>
                    <div style="display: flex; flex-direction: column; text-align: left;">
                        <span style="font-size: 13px; font-weight: bold; color: #0B3558 !important;">Guest User</span>
                        <span style="display: inline-block; font-size: 10px; font-weight: bold; padding: 2px 8px; border-radius: 10px; margin-top: 3px; width: fit-content; background: #f1f5f9; color: #64748b !important;">Not Logged In</span>
                    </div>
                </div>
                <div style="padding: 6px 0; background: #ffffff; border-radius: 0 0 6px 6px;">
                    <a href="./farmerlogin.html" style="display: flex; align-items: center; gap: 8px; padding: 8px 14px; text-decoration: none; color: #0B3558 !important; font-size: 13px; font-weight: 600;"><span>🌾</span> Farmer Login</a>
                    <a href="./admin.html" style="display: flex; align-items: center; gap: 8px; padding: 8px 14px; text-decoration: none; color: #0B3558 !important; font-size: 13px; font-weight: 600;"><span>👨‍💼</span> Admin Login</a>
                </div>
            `;
        }
    }
});