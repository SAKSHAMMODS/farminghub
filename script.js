import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInWithCustomToken, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, onSnapshot, addDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhOG6mUIYzRRxgrINmP-sef_Z3jufqauw",
  authDomain: "farminghubsaksham.firebaseapp.com",
  projectId: "farminghubsaksham",
  storageBucket: "farminghubsaksham.firebasestorage.app",
  messagingSenderId: "361791915485",
  appId: "1:361791915485:web:b097bed6af1319d14ea234",
  measurementId: "G-27EF1PBHJ3"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Global state variables
window.currentUser = null;
let recipesData = [];
let seedData = {};
let pesticideData = {};
let reviewsData = [];

// --- Simulated User Login ---
// These functions bypass email/password authentication for a direct access experience
async function loginAsUser() {
    // A mock UID and role to simulate a successful user login
    window.currentUser = { uid: "user123", email: "guest@user.com", role: "user" };
    updateUIForLoggedInUser();
}

async function loginAsAdmin() {
    // A mock UID and role to simulate a successful admin login
    window.currentUser = { uid: "admin456", email: "admin@farminghub.com", role: "admin" };
    updateUIForLoggedInUser();
}

function updateUIForLoggedInUser() {
    document.getElementById('role-selection-section').classList.remove('active');
    document.getElementById('role-selection-section').classList.add('hidden');
    document.getElementById('nav-and-content').classList.remove('hidden');

    if (window.currentUser.role === 'admin') {
        document.body.classList.add('admin-theme');
        document.getElementById('admin-nav-link').classList.remove('hidden');
    } else {
        document.body.classList.remove('admin-theme');
        document.getElementById('admin-nav-link').classList.add('hidden');
    }
    showSection('home-section');
}

function userLogout() {
    window.currentUser = null;
    document.getElementById('role-selection-section').classList.remove('hidden');
    document.getElementById('role-selection-section').classList.add('active');
    document.getElementById('nav-and-content').classList.add('hidden');
    document.getElementById('admin-nav-link').classList.add('hidden');
    document.body.classList.remove('admin-theme');
}

// --- Data Fetching and Real-time Listeners ---
function fetchAllData() {
    onSnapshot(collection(db, "recipes"), (snapshot) => {
        recipesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        renderRecipes(recipesData);
    });
    onSnapshot(collection(db, "seedData"), (snapshot) => {
        seedData = snapshot.docs.reduce((acc, doc) => ({ ...acc, [doc.id]: doc.data() }), {});
        updateSeedDropdown();
    });
    onSnapshot(collection(db, "pesticideData"), (snapshot) => {
        pesticideData = snapshot.docs.reduce((acc, doc) => ({ ...acc, [doc.id]: doc.data() }), {});
        updatePesticideDropdown();
    });
    onSnapshot(collection(db, "reviews"), (snapshot) => {
        reviewsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        renderReviews(reviewsData);
        renderAdminReviews();
    });
}

// Data and translation objects
const translations = {
    en: {
        nav_home: "Home", nav_recipes: "Recipes", nav_tools: "Tools", nav_reviews: "Reviews", nav_chatbot: "Chat Bot", nav_admin: "Admin", nav_logout: "Logout",
        home_title: "Welcome to Farming Hub", home_subtitle: "Your one-stop destination for organic farming knowledge, sustainable practices, and community support.",
        recipes_title: "Organic Pesticide Recipes", recipes_subtitle: "Discover natural, homemade solutions for common garden pests.", recipes_search_placeholder: "Search by name, target, or crop...", recipes_no_found: "No recipes found. Try a different search term.", recipes_card_targets: "🎯 Targets:", recipes_card_where: "📍 Where to Use:", recipes_card_ingredients: "🧾 Ingredients:", recipes_card_procedure: "⚙️ Procedure:", recipes_card_usage: "💡 How to Use:", recipes_card_cost: "💰 Approximate Cost:",
        tools_title: "Farming Tools & Calculators", tools_subtitle: "Use our interactive tools to plan your farming activities efficiently.", calc_seeds_title: "Sowing Seeds Calculator", calc_seeds_label1: "Land Size (in acres)", calc_seeds_label2: "Seed Type", calc_seeds_button: "Calculate Seeds", calc_seeds_result: (amount, type, size) => `You will need approximately <strong>${amount} kg</strong> of ${type} seeds for ${size} acres.`, calc_seeds_error: "Please enter a valid land size.",
        calc_pesticides_title: "Pesticides Spreading Calculator", calc_pesticides_label1: "Land Size (in acres)", calc_pesticides_label2: "Pesticide Type", calc_pesticides_button: "Calculate Pesticides", calc_pesticides_result: (amount, type, size) => `You will need approximately <strong>${amount} L</strong> of ${type} for ${size} acres.`, calc_pesticides_error: "Please enter a valid land size.",
        reviews_title: "Customer Reviews", review_form_title: "Leave a Review", review_label: "Your Review", review_button: "Submit Review",
        chatbot_title: "Farming Assistant Chat Bot", chatbot_subtitle: "Ask our AI assistant for advice on pests, recipes, or general farming tips.", chatbot_initial_msg: "Hello! I'm your farming assistant. How can I help you today?", chatbot_typing: "Bot is typing...", chatbot_send_btn: "Send", chatbot_user_label: "You:", chatbot_bot_label: "Bot:", chatbot_placeholder: "Type your question here...", chatbot_static_response: `I'm an AI assistant. I can't generate new content right now, but I can help you search the recipes. Try searching for "aphids" or "fungal" in the recipes section!`, chatbot_error: "Error: Failed to get response. Please try again.",
        footer_text: "© 2025 Farming Hub. All rights reserved. Made by Saksham Bhor | Email:",
        admin_dashboard_title: "Admin Dashboard", admin_recipes_title: "Manage Recipes", admin_recipes_id_label: "Recipe ID (for update/delete)", admin_recipes_name_label: "Recipe Name", admin_recipes_targets_label: "Targets (comma-separated)", admin_recipes_cost_label: "Approximate Cost (₹)", admin_add_recipe: "Add/Update", admin_delete_recipe: "Delete", admin_calc_title: "Manage Calculator Data", admin_calc_type_label: "Type", admin_calc_key_label: "Key (e.g., 'corn')", admin_calc_name_label: "Name", admin_calc_amount_label: "Amount (kg or L)", admin_add_calc: "Add/Update", admin_delete_calc: "Delete", admin_reviews_title: "Manage Reviews",
    },
    hi: {
        nav_home: "होम", nav_recipes: "रेसिपी", nav_tools: "टूल", nav_reviews: "रिव्यू", nav_chatbot: "चैट बॉट", nav_admin: "एडमिन", nav_logout: "लॉगआउट",
        home_title: "फ़ार्मिंग हब में आपका स्वागत है", home_subtitle: "जैविक खेती के ज्ञान, टिकाऊ प्रथाओं और सामुदायिक सहायता के लिए आपका वन-स्टॉप डेस्टिनेशन।",
        recipes_title: "जैविक कीटनाशक रेसिपी", recipes_subtitle: "आम बगीचे के कीटों के लिए प्राकृतिक, घर पर बने समाधानों की खोज करें।", recipes_search_placeholder: "नाम, लक्ष्य या फसल के अनुसार खोजें...", recipes_no_found: "कोई रेसिपी नहीं मिली। एक अलग खोज शब्द का प्रयास करें।", recipes_card_targets: "🎯 लक्ष्य:", recipes_card_where: "📍 कहाँ उपयोग करें:", recipes_card_ingredients: "🧾 सामग्री:", recipes_card_procedure: "⚙️ प्रक्रिया:", recipes_card_usage: "💡 उपयोग कैसे करें:", recipes_card_cost: "💰 अनुमानित लागत:",
        tools_title: "खेती के उपकरण और कैलकुलेटर", tools_subtitle: "अपनी खेती की गतिविधियों को कुशलतापूर्वक योजना बनाने के लिए हमारे इंटरैक्टिव टूल का उपयोग करें।", calc_seeds_title: "बीज बोने का कैलकुलेटर", calc_seeds_label1: "भूमि का आकार (एकड़ में)", calc_seeds_label2: "बीज का प्रकार", calc_seeds_button: "बीज की गणना करें", calc_seeds_result: (amount, type, size) => `${size} एकड़ के लिए आपको लगभग <strong>${amount} किलो</strong> ${type} बीज की आवश्यकता होगी।`, calc_seeds_error: "कृपया एक वैध भूमि का आकार दर्ज करें।",
        calc_pesticides_title: "कीटनाशक फैलाने वाला कैलकुलेटर", calc_pesticides_label1: "भूमि का आकार (एकड़ में)", calc_pesticides_label2: "कीटनाशक का प्रकार", calc_pesticides_button: "कीटनाशकों की गणना करें", calc_pesticides_result: (amount, type, size) => `${size} एकड़ के लिए आपको लगभग <strong>${amount} L</strong> ${type} की आवश्यकता होगी।`, calc_pesticides_error: "कृपया एक वैध भूमि का आकार दर्ज करें।",
        reviews_title: "ग्राहक समीक्षाएं", review_form_title: "एक रिव्यू छोड़ें", review_label: "आपका रिव्यू", review_button: "रिव्यू सबमिट करें",
        chatbot_title: "खेती सहायक चैट बॉट", chatbot_subtitle: "कीटों, व्यंजनों या सामान्य खेती युक्तियों पर हमारे एआई सहायक से सलाह लें।", chatbot_initial_msg: "नमस्ते! मैं आपका खेती सहायक हूँ। मैं आज आपकी क्या मदद कर सकता हूँ?", chatbot_typing: "बॉट टाइप कर रहा है...", chatbot_send_btn: "भेजें", chatbot_user_label: "आप:", chatbot_bot_label: "बॉट:", chatbot_placeholder: "यहां अपना प्रश्न टाइप करें...", chatbot_static_response: "मैं एक AI सहायक हूँ। मैं अभी नई सामग्री नहीं बना सकता, लेकिन मैं व्यंजनों को खोजने में आपकी मदद कर सकता हूँ। रेसिपी अनुभाग में 'एफिड्स' या 'फंगल' खोजें!", chatbot_error: "त्रुटि: प्रतिक्रिया प्राप्त करने में विफल। कृपया पुन: प्रयास करें।",
        footer_text: "© 2025 फार्मिंग हब। सर्वाधिकार सुरक्षित। द्वारा बनाया गया: Saksham Bhor | ईमेल:",
        admin_dashboard_title: "एडमिन डैशबोर्ड", admin_recipes_title: "रेसिपी प्रबंधित करें", admin_recipes_id_label: "रेसिपी आईडी (अपडेट/डिलीट के लिए)", admin_recipes_name_label: "रेसिपी का नाम", admin_recipes_targets_label: "लक्ष्य (कॉमा-सेपरेटेड)", admin_recipes_cost_label: "अनुमानित लागत (₹)", admin_add_recipe: "जोड़ें/अपडेट करें", admin_delete_recipe: "डिलीट करें", admin_calc_title: "कैलकुलेटर डेटा प्रबंधित करें", admin_calc_type_label: "प्रकार", admin_calc_key_label: "कुंजी (उदाहरण: 'corn')", admin_calc_name_label: "नाम", admin_calc_amount_label: "राशि (किलो या लीटर)", admin_add_calc: "जोड़ें/अपडेट करें", admin_delete_calc: "डिलीट करें", admin_reviews_title: "रिव्यू प्रबंधित करें",
    },
    mr: {
        nav_home: "होम", nav_recipes: "रेसिपी", nav_tools: "साधने", nav_reviews: "पुनरावलोकने", nav_chatbot: "चॅट बॉट", nav_admin: "प्रशासक", nav_logout: "लॉगआउट",
        home_title: "फार्मिंग हबमध्ये आपले स्वागत आहे", home_subtitle: "सेंद्रिय शेतीचे ज्ञान, शाश्वत पद्धती आणि सामुदायिक समर्थनासाठी तुमचे वन-स्टॉप डेस्टिनेशन.",
        recipes_title: "सेंद्रिय कीटकनाशक रेसिपी", recipes_subtitle: "सामान्य बागेतील कीटकांवर नैसर्गिक, घरगुती उपाय शोधा.", recipes_search_placeholder: "नाव, लक्ष्य किंवा पिकानुसार शोधा...", recipes_no_found: "कोणत्याही रेसिपी सापडल्या नाहीत. वेगळा शोध शब्द वापरून पहा.", recipes_card_targets: "🎯 लक्ष्य:", recipes_card_where: "📍 कुठे वापरावे:", recipes_card_ingredients: "🧾 साहित्य:", recipes_card_procedure: "⚙️ प्रक्रिया:", recipes_card_usage: "💡 कसे वापरावे:", recipes_card_cost: "💰 अंदाजे खर्च:",
        tools_title: "शेती साधने आणि कॅल्क्युलेटर", tools_subtitle: "तुमच्या शेतीच्या कामांची कार्यक्षमतेने योजना करण्यासाठी आमच्या परस्परसंवादी साधनांचा वापर करा.", calc_seeds_title: "बियाणे पेरणी कॅल्क्युलेटर", calc_seeds_label1: "जमिनीचा आकार (एकरमध्ये)", calc_seeds_label2: "बियाण्याचा प्रकार", calc_seeds_button: "बियाणे मोजा", calc_seeds_result: (amount, type, size) => `${size} एकरसाठी तुम्हाला अंदाजे <strong>${amount} किलो</strong> ${type} बियाणे लागेल.`, calc_seeds_error: "कृपया जमिनीचा वैध आकार प्रविष्ट करा.",
        calc_pesticides_title: "कीटकनाशक फवारणी कॅल्क्युलेटर", calc_pesticides_label1: "जमिनीचा आकार (एकरमध्ये)", calc_pesticides_label2: "कीटकनाशक प्रकार", calc_pesticides_button: "कीटकनाशके मोजा", calc_pesticides_result: (amount, type, size) => `${size} एकरसाठी तुम्हाला अंदाजे <strong>${amount
