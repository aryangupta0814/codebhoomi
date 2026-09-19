/**
 * Kisan AI Assistant (Hindi + English Support) - SIH26032
 */

const BOT_TRANSLATIONS = {
    en: {
        bot_btn: "🤖 Kisan Mitra (FAQ)",
        bot_header: "🌾 Kisan Sahayak AI",
        bot_welcome: "<strong>Namaste!</strong> Choose a question below or check crop MSP & rules.",
        btn_wheat: "🌾 Wheat MSP",
        btn_rice: "🌾 Rice MSP",
        btn_pulses: "🌱 Pulses MSP",
        btn_docs: "📄 Required Docs",
        wheat_ans: "Wheat MSP is ₹2,585 per quintal. Moisture content must be below 12%. Bring identity proof, Bank Passbook, and Land records.",
        rice_ans: "Rice/Paddy MSP is ₹2,441 per quintal. Quality check requires sound grains with low moisture.",
        pulses_ans: "Pulses (Tur/Arhar) MSP is ₹8,450 per quintal for the 2026-27 marketing season.",
        docs_ans: "Required Documents: 1. Identity Proof 2. Land Records (Khasra/Khatauni) 3. Bank Passbook copy."
    },
    hi: {
        bot_btn: "🤖 किसान मित्र (सहायता)",
        bot_header: "🌾 किसान सहायक AI",
        bot_welcome: "<strong>नमस्ते!</strong> नीचे दिए गए विकल्पों पर क्लिक करके फसल MSP और जरूरी नियम जानें।",
        btn_wheat: "🌾 गेहूं MSP",
        btn_rice: "🌾 धान/चावल MSP",
        btn_pulses: "🌱 दालें MSP",
        btn_docs: "📄 जरूरी दस्तावेज",
        wheat_ans: "गेहूं का न्यूनतम समर्थन मूल्य (MSP) ₹2,585 प्रति क्विंटल है। नमी 12% से कम होनी चाहिए। पहचान पत्र, बैंक पासबुक और खतौनी साथ लाएं।",
        rice_ans: "धान/चावल का MSP ₹2,441 प्रति क्विंटल है। खरीद केंद्र पर दाने सूखे और साफ होने चाहिए।",
        pulses_ans: "दालों (अरहर/तूर) का MSP ₹8,450 प्रति क्विंटल निर्धारित है (सीजन 2026-27)।",
        docs_ans: "आवश्यक दस्तावेज: 1. पहचान पत्र 2. खतौनी/भूमि दस्तावेज 3. बैंक पासबुक की प्रति।"
    }
};

export function initKisanChatbot() {
    // Check if already created
    if (document.getElementById('kisan-chatbot-root')) return;

    const chatContainer = document.createElement('div');
    chatContainer.id = 'kisan-chatbot-root';
    chatContainer.innerHTML = `
        <style>
            #kisan-bot-btn {
                position: fixed;
                bottom: 25px;
                left: 25px;
                background-color: #0B3558;
                color: white;
                border: 2px solid #FF9933;
                border-radius: 50px;
                padding: 12px 20px;
                font-size: 14px;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 0 4px 15px rgba(0,0,0,0.25);
                display: flex;
                align-items: center;
                gap: 8px;
                z-index: 9999;
                transition: transform 0.2s ease;
            }
            #kisan-bot-btn:hover { background-color: #082741; transform: scale(1.04); }
            #kisan-chat-window {
                display: none;
                position: fixed;
                bottom: 80px;
                left: 25px;
                width: 320px;
                background: white;
                border-radius: 8px;
                border: 1px solid #d9dee3;
                border-top: 4px solid #128807;
                box-shadow: 0 10px 30px rgba(0,0,0,0.25);
                z-index: 10000;
                overflow: hidden;
                font-family: Arial, sans-serif;
            }
            .chat-header {
                background: #0B3558;
                color: white;
                padding: 10px 14px;
                font-size: 14px;
                font-weight: bold;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .chat-body {
                padding: 12px;
                max-height: 240px;
                overflow-y: auto;
                font-size: 13px;
                color: #333;
                line-height: 1.4;
            }
            .quick-btn-group {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                padding: 10px 12px;
                background: #f8fafc;
                border-top: 1px solid #e2e8f0;
            }
            .q-btn {
                background: #fff;
                border: 1px solid #0B3558;
                color: #0B3558;
                padding: 5px 9px;
                border-radius: 12px;
                font-size: 12px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            .q-btn:hover { background: #0B3558; color: white; }
        </style>

        <button id="kisan-bot-btn">🤖 Kisan Mitra</button>

        <div id="kisan-chat-window">
            <div class="chat-header">
                <span id="botHeaderTitle">🌾 Kisan Sahayak AI</span>
                <span id="closeChatBtn" style="cursor:pointer; font-size:18px;">&times;</span>
            </div>
            <div class="chat-body" id="chatBody">
                <p id="botWelcomeText"></p>
            </div>
            <div class="quick-btn-group">
                <button class="q-btn" data-topic="wheat" id="btnWheat">🌾 Wheat MSP</button>
                <button class="q-btn" data-topic="rice" id="btnRice">🌾 Rice MSP</button>
                <button class="q-btn" data-topic="pulses" id="btnPulses">🌱 Pulses MSP</button>
                <button class="q-btn" data-topic="docs" id="btnDocs">📄 Required Docs</button>
            </div>
        </div>
    `;

    document.body.appendChild(chatContainer);

    function updateBotLanguage() {
        const lang = localStorage.getItem('preferredLang') || document.documentElement.lang || 'en';
        const t = BOT_TRANSLATIONS[lang] || BOT_TRANSLATIONS.en;

        document.getElementById('kisan-bot-btn').innerText = t.bot_btn;
        document.getElementById('botHeaderTitle').innerText = t.bot_header;
        document.getElementById('botWelcomeText').innerHTML = t.bot_welcome;
        document.getElementById('btnWheat').innerText = t.btn_wheat;
        document.getElementById('btnRice').innerText = t.btn_rice;
        document.getElementById('btnPulses').innerText = t.btn_pulses;
        document.getElementById('btnDocs').innerText = t.btn_docs;
    }

    updateBotLanguage();

    // Toggle Window
    const botBtn = document.getElementById('kisan-bot-btn');
    const chatWin = document.getElementById('kisan-chat-window');
    const closeBtn = document.getElementById('closeChatBtn');
    const chatBody = document.getElementById('chatBody');

    botBtn.addEventListener('click', () => {
        updateBotLanguage();
        chatWin.style.display = chatWin.style.display === 'block' ? 'none' : 'block';
    });

    closeBtn.addEventListener('click', () => {
        chatWin.style.display = 'none';
    });

    // Handle Quick Answers
    document.querySelectorAll('.q-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const topic = e.target.getAttribute('data-topic');
            const lang = localStorage.getItem('preferredLang') || document.documentElement.lang || 'en';
            const t = BOT_TRANSLATIONS[lang] || BOT_TRANSLATIONS.en;
            const answer = t[`${topic}_ans`] || "Information not available.";

            chatBody.innerHTML += `
                <div style="margin-top:8px; text-align:right;">
                    <span style="background:#eafaf1; padding:5px 10px; border-radius:10px; font-size:12px; color:#1e7e45; font-weight:bold; display:inline-block;">${e.target.innerText}</span>
                </div>
                <div style="margin-top:6px; text-align:left;">
                    <span style="background:#f1f5f9; padding:8px 12px; border-radius:10px; font-size:12px; display:inline-block; border:1px solid #e2e8f0;">${answer}</span>
                </div>
            `;
            chatBody.scrollTop = chatBody.scrollHeight;
        });
    });

    // Language dropdown change listener
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('change', () => {
            setTimeout(updateBotLanguage, 100);
        });
    }
}