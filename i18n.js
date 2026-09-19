const translations = {
  en: {
    // ---- Common (home.html) ----
    header_title: "Agri-Procurement Portal",
    dept_link: "Department of Consumer Affairs",
    nav_home: "Home",
    nav_book: "Book Slot",
    nav_track: "Track Status",
    nav_farmer: "Farmer Login",
    nav_admin: "Admin Login",
    hero_title: "Welcome to the Farmer Procurement Portal",
    hero_text: "Book your procurement slot, track your crop status, and get real-time SMS updates — all in one place.",
    card1_title: "Farmer Login",
    card1_text: "Already registered? Log in to manage your bookings.",
    card1_btn: "Login",
    card2_title: "Book a Slot",
    card2_text: "New here? Register and book a procurement slot for your crop.",
    card2_btn: "Book Now",
    card3_title: "Track Status",
    card3_text: "Check the status of your booking and procurement.",
    card3_btn: "Track",
    footer_text: "SIH26032 — Smart India Hackathon Project",

    // ---- Book Slot page ----
    booking_title: "Farmer Registration & Booking",
    label_name: "Full Name",
    placeholder_name: "Enter your name",
    label_phone: "Phone Number (for SMS Alerts)",
    placeholder_phone: "10-digit mobile number",
    label_crop: "Crop Type",
    option_select_crop: "Select a crop",
    crop_wheat: "Wheat",
    crop_rice: "Rice",
    crop_pulses: "Pulses",
    label_center: "Select Procurement Center",
    option_select_center: "Select a center",
    center1: "Center A - Main City",
    center2: "Center B - North Zone",
    label_date: "Preferred Date",
    btn_book: "Book Slot",
    confirmation_msg: "Your slot has been booked! A confirmation SMS will be sent shortly, along with your tracking ID.",

    // ---- Track Status page ----
    track_title: "Track Your Procurement Status",
    label_tracking: "Registered Phone Number",
    placeholder_tracking: "Enter your 10-digit phone number",
    btn_check: "Check Status",
    step1: "1. Slot Booked",
    step2: "2. Crop Quality Verified",
    step3: "3. Procurement Center Visit Pending",
    step4: "4. Payment Processed",

    // ---- Farmer Login page ----
    farmer_login_title: "Farmer Login",
    label_reg_phone: "Registered Mobile Number",
    placeholder_reg_phone: "10-digit mobile number",
    label_otp: "OTP",
    placeholder_otp: "Enter OTP sent to your mobile",
    otp_error: "Invalid OTP. Please try again.",
    btn_login: "Login",
    send_otp_link: "Send OTP",
    register_link: "New farmer? Register here",

    // ---- Admin Login page ----
    admin_login_title: "Admin Login",
    label_admin_id: "Admin ID",
    placeholder_admin_id: "Enter admin ID",
    label_password: "Password",
    placeholder_password: "Enter password",
    login_error: "Invalid Admin ID or Password.",
    admin_note: "Access restricted to authorized procurement center officials only.",
     step1_label: "Slot Booked",
     step2_label: "Quality Verified",
     step3_label: "Center Visit",
     step4_label: "Payment Done",
     msp_title: "Current Minimum Support Prices (MSP)",
msp_crop: "Crop",
msp_rate: "MSP (₹/Quintal)",
msp_note: "Rates for Marketing Season 2026-27, as per Government of India (CACP/PIB) notification. Check with your local procurement centre for updates.",
dashboard_title: "Admin Dashboard",
stat_total: "Total Bookings",
stat_pending: "Pending",
stat_verified: "Verified",
stat_completed: "Completed",
recent_bookings_title: "Recent Bookings",
col_name: "Farmer Name",
col_crop: "Crop",
col_center: "Center",
col_date: "Date",
col_status: "Status",
register_title: "Farmer Registration",
label_email: "Email Address",
placeholder_email: "Enter your email",
label_new_password: "Create Password",
placeholder_new_password: "At least 6 characters",
register_error: "Registration failed. Please try again.",
btn_register: "Register",
already_registered_link: "Already registered? Login here",
welcome_farmer: "Welcome, Farmer!",
book_new_btn: "+ Book New Slot",
no_bookings_yet: "No bookings yet.",
nav_farmer_dashboard: "My Dashboard",
nav_admin_dashboard: "Admin Dashboard",
header_tagline: "🌾 No Farmer, No Food 🌾",
forgot_password_link: "Forgot Password?",
admin_register_title: "Admin Registration",
label_license: "Officer License Number",
  },

  hi: {
    // ---- Common (home.html) ----
    header_title: "कृषि खरीद पोर्टल",
    dept_link: "उपभोक्ता मामले विभाग",
    nav_home: "होम",
    nav_book: "स्लॉट बुक करें",
    nav_track: "स्थिति ट्रैक करें",
    nav_farmer: "किसान लॉगिन",
    nav_admin: "एडमिन लॉगिन",
    hero_title: "किसान खरीद पोर्टल में आपका स्वागत है",
    hero_text: "अपना खरीद स्लॉट बुक करें, फसल की स्थिति ट्रैक करें, और रीयल-टाइम एसएमएस अपडेट पाएं — सब एक ही जगह।",
    card1_title: "किसान लॉगिन",
    card1_text: "पहले से पंजीकृत हैं? अपनी बुकिंग प्रबंधित करने के लिए लॉगिन करें।",
    card1_btn: "लॉगिन करें",
    card2_title: "स्लॉट बुक करें",
    card2_text: "नए हैं? पंजीकरण करें और अपनी फसल के लिए खरीद स्लॉट बुक करें।",
    card2_btn: "अभी बुक करें",
    card3_title: "स्थिति ट्रैक करें",
    card3_text: "अपनी बुकिंग और खरीद की स्थिति जांचें।",
    card3_btn: "ट्रैक करें",
    footer_text: "SIH26032 — स्मार्ट इंडिया हैकाथॉन प्रोजेक्ट",

    // ---- Book Slot page ----
    booking_title: "किसान पंजीकरण और बुकिंग",
    label_name: "पूरा नाम",
    placeholder_name: "अपना नाम दर्ज करें",
    label_phone: "फ़ोन नंबर (एसएमएस अलर्ट के लिए)",
    placeholder_phone: "10 अंकों का मोबाइल नंबर",
    label_crop: "फसल का प्रकार",
    option_select_crop: "फसल चुनें",
    crop_wheat: "गेहूं",
    crop_rice: "चावल",
    crop_pulses: "दालें",
    label_center: "खरीद केंद्र चुनें",
    option_select_center: "केंद्र चुनें",
    center1: "केंद्र A - मुख्य शहर",
    center2: "केंद्र B - उत्तर क्षेत्र",
    label_date: "पसंदीदा तारीख",
    btn_book: "स्लॉट बुक करें",
    confirmation_msg: "आपका स्लॉट बुक हो गया है! ट्रैकिंग आईडी के साथ पुष्टिकरण एसएमएस जल्द ही भेजा जाएगा।",

    // ---- Track Status page ----
    track_title: "अपनी खरीद स्थिति ट्रैक करें",
    label_tracking: "पंजीकृत फ़ोन नंबर",
    placeholder_tracking: "अपना 10 अंकों का फ़ोन नंबर दर्ज करें",
    btn_check: "स्थिति जांचें",
    step1: "1. स्लॉट बुक हुआ",
    step2: "2. फसल गुणवत्ता सत्यापित",
    step3: "3. खरीद केंद्र यात्रा लंबित",
    step4: "4. भुगतान संसाधित",

    // ---- Farmer Login page ----
    farmer_login_title: "किसान लॉगिन",
    label_reg_phone: "पंजीकृत मोबाइल नंबर",
    placeholder_reg_phone: "10 अंकों का मोबाइल नंबर",
    label_otp: "ओटीपी",
    placeholder_otp: "अपने मोबाइल पर भेजा गया ओटीपी दर्ज करें",
    otp_error: "अमान्य ओटीपी। कृपया पुनः प्रयास करें।",
    btn_login: "लॉगिन करें",
    send_otp_link: "ओटीपी भेजें",
    register_link: "नए किसान? यहां पंजीकरण करें",

    // ---- Admin Login page ----
    admin_login_title: "एडमिन लॉगिन",
    label_admin_id: "एडमिन आईडी",
    placeholder_admin_id: "एडमिन आईडी दर्ज करें",
    label_password: "पासवर्ड",
    placeholder_password: "पासवर्ड दर्ज करें",
    login_error: "अमान्य एडमिन आईडी या पासवर्ड।",
    admin_note: "केवल अधिकृत खरीद केंद्र अधिकारियों के लिए पहुंच प्रतिबंधित है।" ,
    step1_label: "स्लॉट बुक",
step2_label: "गुणवत्ता सत्यापित",
step3_label: "केंद्र यात्रा",
step4_label: "भुगतान पूर्ण",
msp_title: "वर्तमान न्यूनतम समर्थन मूल्य (MSP)",
msp_crop: "फसल",
msp_rate: "एमएसपी (₹/क्विंटल)",
msp_note: "मूल्य विपणन सीजन 2026-27 के लिए, भारत सरकार (CACP/PIB) की अधिसूचना के अनुसार। अद्यतन जानकारी के लिए अपने स्थानीय खरीद केंद्र से संपर्क करें।",
dashboard_title: "एडमिन डैशबोर्ड",
stat_total: "कुल बुकिंग",
stat_pending: "लंबित",
stat_verified: "सत्यापित",
stat_completed: "पूर्ण",
recent_bookings_title: "हाल की बुकिंग",
col_name: "किसान का नाम",
col_crop: "फसल",
col_center: "केंद्र",
col_date: "तारीख",
col_status: "स्थिति",
register_title: "किसान पंजीकरण",
label_email: "ईमेल पता",
placeholder_email: "अपना ईमेल दर्ज करें",
label_new_password: "पासवर्ड बनाएं",
placeholder_new_password: "कम से कम 6 अक्षर",
register_error: "पंजीकरण विफल। कृपया पुनः प्रयास करें।",
btn_register: "पंजीकरण करें",
already_registered_link: "पहले से पंजीकृत हैं? यहां लॉगिन करें",
welcome_farmer: "स्वागत है, किसान!",
book_new_btn: "+ नया स्लॉट बुक करें",
no_bookings_yet: "अभी तक कोई बुकिंग नहीं।",
nav_farmer_dashboard: "मेरा डैशबोर्ड",
nav_admin_dashboard: "एडमिन डैशबोर्ड",
header_tagline: "🌾 किसान ही महान है 🌾",
forgot_password_link: "पासवर्ड भूल गए?",
admin_register_title: "एडमिन पंजीकरण",
label_license: "अधिकारी लाइसेंस नंबर",
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  localStorage.setItem('preferredLang', lang);
  document.documentElement.lang = lang;

  const switcher = document.getElementById('langSwitcher');
  if (switcher) switcher.value = lang;
}

window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'en';
  setLanguage(savedLang);
});