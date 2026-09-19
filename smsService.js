/**
 * Fast2SMS Real API & Live Interactive Screen Alert
 */

// Yahan Fast2SMS ki API Key paste karein
const FAST2SMS_API_KEY = "YOUR_FAST2SMS_API_KEY_HERE";

/**
 * On-Screen Live Phone Notification (Demo Fallback)
 */
function showLivePhoneNotification(phone, messageText, title = "Govt Procurement Alert") {
    let container = document.getElementById("demo-phone-alert-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "demo-phone-alert-container";
        container.style.cssText = `
            position: fixed;
            bottom: 25px;
            right: 25px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(container);
    }

    const alertBox = document.createElement("div");
    alertBox.style.cssText = `
        background: #ffffff;
        border-left: 6px solid #27ae60;
        box-shadow: 0 10px 30px rgba(0,0,0,0.25);
        border-radius: 8px;
        padding: 14px 18px;
        max-width: 320px;
        font-family: Arial, sans-serif;
        border: 1px solid #d9dee3;
        animation: fadeIn 0.3s ease-out;
    `;

    alertBox.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <strong style="color: #0B3558; font-size: 13px;">📲 ${title}</strong>
            <span style="font-size: 11px; color: #888;">Just now</span>
        </div>
        <div style="font-size: 11px; color: #555; margin-bottom: 4px;">To: +91-${phone}</div>
        <p style="margin: 0; font-size: 13px; color: #1A1A1A; line-height: 1.4;">${messageText}</p>
    `;

    container.appendChild(alertBox);

    setTimeout(() => {
        alertBox.style.transition = "opacity 0.5s ease";
        alertBox.style.opacity = "0";
        setTimeout(() => alertBox.remove(), 500);
    }, 7000);
}

/**
 * SMS Dispatch Function
 */
export async function sendProcurementAlert(phone, farmerName, crop, center, date, bookingId) {
    const smsMessage = `Kisan Namaste ${farmerName}! Aapka ${crop} procurement slot (${date}) ko ${center} par book ho gaya hai. Tracking ID: ${bookingId}. - Dept of Consumer Affairs`;

    // 1. Screen par turant pop-up notification dikhayega
    showLivePhoneNotification(phone, smsMessage, "SMS & WhatsApp Dispatch");

    // 2. Real SMS API Call (Fast2SMS Quick SMS Route)
    if (FAST2SMS_API_KEY && FAST2SMS_API_KEY !== "YOUR_FAST2SMS_API_KEY_HERE") {
        try {
            const response = await fetch("https://www.fast2sms.com/dev/bulkV2", {
                method: "POST",
                headers: {
                    "authorization": FAST2SMS_API_KEY,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "route": "q",
                    "message": smsMessage,
                    "language": "english",
                    "numbers": phone
                })
            });
            const data = await response.json();
            console.log("Fast2SMS Response:", data);
        } catch (error) {
            console.warn("Fast2SMS API dispatch issue:", error);
        }
    }
}