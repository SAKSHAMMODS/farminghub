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
        calc_pesticides_title: "कीटकनाशक फवारणी कॅल्क्युलेटर", calc_pesticides_label1: "जमिनीचा आकार (एकरमध्ये)", calc_pesticides_label2: "कीटकनाशक प्रकार", calc_pesticides_button: "कीटकनाशके मोजा", calc_pesticides_result: (amount, type, size) => `${size} एकरसाठी तुम्हाला अंदाजे <strong>${amount} L</strong> ${type} लागेल.`, calc_pesticides_error: "कृपया जमिनीचा वैध आकार प्रविष्ट करा.",
        reviews_title: "ग्राहक पुनरावलोकने", review_form_title: "एक पुनरावलोकन द्या", review_label: "तुमचे पुनरावलोकन", review_button: "पुनरावलोकन सबमिट करा",
        chatbot_title: "शेती सहायक चॅट बॉट", chatbot_subtitle: "कीटक, रेसिपी किंवा सामान्य शेती टिप्ससाठी आमच्या AI सहाय्याला विचारा.", chatbot_initial_msg: "नमस्कार! मी तुमचा शेती सहायक आहे. मी आज तुम्हाला कशी मदत करू शकतो?", chatbot_typing: "बॉट टाइप करत आहे...", chatbot_send_btn: "पाठवा", chatbot_user_label: "तुम्ही:", chatbot_bot_label: "बॉट:", chatbot_placeholder: "येथे तुमचा प्रश्न टाइप करा...", chatbot_static_response: "मी एक AI सहायक आहे। मी आत्ता नवीन सामग्री तयार करू शकत नाही, पण मी तुम्हाला रेसिपी शोधण्यात मदत करू शकतो। रेसिपी विभागात 'ऍफिड्स' किंवा 'फंगल' शोधण्याचा प्रयत्न करा!", chatbot_error: "त्रुटी: प्रतिसाद मिळविण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा।",
                footer_text: "© 2025 फार्मिंग हब. सर्व हक्क राखीव. बनवणारे: Saksham Bhor | ईमेल:",
        admin_dashboard_title: "प्रशासक डॅशबोर्ड", admin_recipes_title: "रेसिपी व्यवस्थापित करा", admin_recipes_id_label: "रेसिपी आयडी (अपडेट/डिलीटसाठी)", admin_recipes_name_label: "रेसिपीचे नाव", admin_recipes_targets_label: "लक्ष्य (कॉमा-सेपरेटेड)", admin_recipes_cost_label: "अंदाजे खर्च (₹)", admin_add_recipe: "जोडा/अपडेट करा", admin_delete_recipe: "डिलीट करा", admin_reviews_title: "पुनरावलोकने व्यवस्थापित करा",
            },
        };

        const currentLang = localStorage.getItem('language') || 'en';

        let recipesData = [];
        let seedData = {};
        let pesticideData = {};
        let reviewsData = [];

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

        function updateSeedDropdown() {
            const select = document.getElementById('seed-type');
            select.innerHTML = '';
            for (const key in seedData) {
                const option = document.createElement('option');
                option.value = key;
                option.text = seedData[key][currentLang];
                select.appendChild(option);
            }
        }

        function updatePesticideDropdown() {
            const select = document.getElementById('pesticide-type');
            select.innerHTML = '';
            for (const key in pesticideData) {
                const option = document.createElement('option');
                option.value = key;
                option.text = pesticideData[key][currentLang];
                select.appendChild(option);
            }
        }

        // --- UI Rendering Functions ---
        function showSection(sectionId) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`.nav-links a[data-section="${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
            const navMenu = document.getElementById('nav-menu');
            if (navMenu.classList.contains('active')) {
                toggleNav();
            }
            if (sectionId === 'recipes-section') {
                renderRecipes(recipesData);
            }
            if (sectionId === 'admin-section') {
                renderAdminReviews();
            }
        }

        function toggleNav() {
            document.getElementById('nav-menu').classList.toggle('active');
        }

        function renderRecipes(list) {
            const container = document.getElementById('recipe-container');
            const lang = document.getElementById('language-selector').value;
            if (!container) return;
            container.innerHTML = '';
            if (list.length === 0) {
                container.innerHTML = `<p class="col-span-full text-center text-gray-500 text-lg">${translations[lang].recipes_no_found}</p>`;
                return;
            }
            list.forEach((recipe, index) => {
                const card = document.createElement('div');
                card.className = 'recipe-card';
                card.style.animationDelay = `${index * 0.1}s`;
                card.innerHTML = `
                    <h2 class="text-2xl font-bold text-green-600 mb-2">${recipe.name[lang]}</h2>
                    <p class="text-sm text-gray-500 mb-4">ID: ${recipe.id}</p>
                    <div class="mb-3"><strong>${translations[lang].recipes_card_targets}</strong> <span class="text-gray-700">${recipe.targets[lang].join(', ')}</span></div>
                    <div class="mb-3"><strong>${translations[lang].recipes_card_where}</strong> <span class="text-gray-700">${recipe.where[lang].join(', ')}</span></div>
                    <div class="mb-3"><strong>${translations[lang].recipes_card_ingredients}</strong>
                        <ul class="list-disc list-inside mt-1">${recipe.ingredients[lang].map(i=>`<li>${i}</li>`).join('')}</ul>
                    </div>
                    <div class="mb-3"><strong>${translations[lang].recipes_card_procedure}</strong>
                        <ol class="list-decimal list-inside mt-1">${recipe.procedure[lang].map(p=>`<li>${p}</li>`).join('')}</ol>
                    </div>
                    <div class="mb-3"><strong>${translations[lang].recipes_card_usage}</strong>
                        <ul class="list-disc list-inside mt-1">${recipe.usage[lang].map(u=>`<li>${u}</li>`).join('')}</ul>
                    </div>
                    <div><strong>${translations[lang].recipes_card_cost}</strong> <span class="text-gray-700">₹${recipe.cost}</span></div>
                `;
                container.appendChild(card);
            });
        }

        function renderReviews(list) {
            const container = document.getElementById('reviews-container');
            if (!container) return;
            container.innerHTML = '';
            list.forEach(review => {
                const card = document.createElement('div');
                card.className = 'bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300';
                card.innerHTML = `
                    <p class="text-gray-600 italic mb-4">"${review.text}"</p>
                    <p class="font-semibold">- ${review.userEmail}</p>
                `;
                container.appendChild(card);
            });
        }

        function renderAdminReviews() {
            const container = document.getElementById('admin-reviews-list');
            container.innerHTML = '';
            reviewsData.forEach(review => {
                const card = document.createElement('div');
                card.className = 'admin-card p-4 rounded-lg shadow-md flex justify-between items-center';
                card.innerHTML = `
                    <div>
                        <p class="text-gray-300 italic">"${review.text}"</p>
                        <p class="font-semibold text-white">- ${review.userEmail} (ID: ${review.id})</p>
                    </div>
                    <button onclick="deleteReview(event, '${review.id}')" class="bg-red-600 text-white py-1 px-3 rounded-full hover:bg-red-700 transition-colors duration-300 btn-press">Delete</button>
                `;
                container.appendChild(card);
            });
        }

        // --- Data Management Functions ---
        async function addReview(event) {
            event.preventDefault();
            const reviewText = document.getElementById('review-text').value;
            if (!reviewText) return;
            const user = window.currentUser;
            if (!user) {
                alert("Please log in to leave a review.");
                return;
            }
            try {
                await addDoc(collection(db, "reviews"), {
                    userEmail: user.email,
                    text: reviewText,
                    createdAt: new Date()
                });
                document.getElementById('review-text').value = '';
                alert("Review submitted successfully!");
            } catch (error) {
                console.error("Error adding review: ", error);
                alert("Error submitting review!");
            }
        }

        async function deleteReview(event, reviewId) {
            event.preventDefault();
            if (!window.currentUser || window.currentUser.role !== 'admin') return;
            if (!confirm("Are you sure you want to delete this review?")) return;
            try {
                await deleteDoc(doc(db, "reviews", reviewId));
                alert('Review deleted!');
            } catch (error) {
                console.error("Error deleting review: ", error);
                alert('Error deleting review!');
            }
        }

        async function addUpdateRecipe(event) {
            event.preventDefault();
            if (!window.currentUser || window.currentUser.role !== 'admin') return;

            const id = document.getElementById('recipe-id').value;
            const name_en = document.getElementById('recipe-name-en').value;
            const name_hi = document.getElementById('recipe-name-hi').value;
            const name_mr = document.getElementById('recipe-name-mr').value;
            const targets_en = document.getElementById('recipe-targets-en').value.split(',').map(s => s.trim());
            const targets_hi = document.getElementById('recipe-targets-hi').value.split(',').map(s => s.trim());
            const targets_mr = document.getElementById('recipe-targets-mr').value.split(',').map(s => s.trim());
            const where_en = document.getElementById('recipe-where-en').value.split(',').map(s => s.trim());
            const where_hi = document.getElementById('recipe-where-hi').value.split(',').map(s => s.trim());
            const where_mr = document.getElementById('recipe-where-mr').value.split(',').map(s => s.trim());
            const ingredients_en = document.getElementById('recipe-ingredients-en').value.split(',').map(s => s.trim());
            const ingredients_hi = document.getElementById('recipe-ingredients-hi').value.split(',').map(s => s.trim());
            const ingredients_mr = document.getElementById('recipe-ingredients-mr').value.split(',').map(s => s.trim());
            const procedure_en = document.getElementById('recipe-procedure-en').value.split(',').map(s => s.trim());
            const procedure_hi = document.getElementById('recipe-procedure-hi').value.split(',').map(s => s.trim());
            const procedure_mr = document.getElementById('recipe-procedure-mr').value.split(',').map(s => s.trim());
            const usage_en = document.getElementById('recipe-usage-en').value.split(',').map(s => s.trim());
            const usage_hi = document.getElementById('recipe-usage-hi').value.split(',').map(s => s.trim());
            const usage_mr = document.getElementById('recipe-usage-mr').value.split(',').map(s => s.trim());
            const cost = parseFloat(document.getElementById('recipe-cost').value);

            if (!name_en || !name_hi || !name_mr || !targets_en || isNaN(cost)) return;

            const recipeData = {
                name: { en: name_en, hi: name_hi, mr: name_mr },
                targets: { en: targets_en, hi: targets_hi, mr: targets_mr },
                where: { en: where_en, hi: where_hi, mr: where_mr },
                ingredients: { en: ingredients_en, hi: ingredients_hi, mr: ingredients_mr },
                procedure: { en: procedure_en, hi: procedure_hi, mr: procedure_mr },
                usage: { en: usage_en, hi: usage_hi, mr: usage_mr },
                cost: cost,
            };

            try {
                if (id) {
                    await setDoc(doc(db, "recipes", id), recipeData);
                } else {
                    await addDoc(collection(db, "recipes"), recipeData);
                }
                alert('Recipe saved successfully!');
            } catch (error) {
                console.error("Error saving recipe: ", error);
                alert('Error saving recipe!');
            }
        }

        async function deleteRecipe(event) {
            event.preventDefault();
            if (!window.currentUser || window.currentUser.role !== 'admin') return;
            const id = document.getElementById('recipe-id').value;
            if (!id) return;
            if (confirm("Are you sure you want to delete this recipe?")) {
                try {
                    await deleteDoc(doc(db, "recipes", id));
                    alert('Recipe deleted!');
                } catch (error) {
                    console.error("Error deleting recipe: ", error);
                    alert('Error deleting recipe!');
                }
            }
        }

        async function addUpdateCalcData() {
            if (!window.currentUser || window.currentUser.role !== 'admin') return;

            const type = document.getElementById('calc-type-select').value;
            const key = document.getElementById('calc-key').value;
            const name_en = document.getElementById('calc-name-en').value;
            const name_hi = document.getElementById('calc-name-hi').value;
            const name_mr = document.getElementById('calc-name-mr').value;
            const amount = parseFloat(document.getElementById('calc-amount').value);

            if (!key || !name_en || !name_hi || !name_mr || isNaN(amount)) return;

            const data = {
                en: name_en,
                hi: name_hi,
                mr: name_mr,
                amount: amount
            };
            
            try {
                await setDoc(doc(db, `${type}Data`, key), data);
                alert(`${type} data saved successfully!`);
            } catch (error) {
                console.error("Error saving calculator data: ", error);
                alert("Error saving calculator data.");
            }
        }

        async function deleteCalcData() {
            if (!window.currentUser || window.currentUser.role !== 'admin') return;
            const type = document.getElementById('calc-type-select').value;
            const key = document.getElementById('calc-key').value;
            if (!key) return;
            if (confirm("Are you sure you want to delete this calculator data?")) {
                try {
                    await deleteDoc(doc(db, `${type}Data`, key));
                    alert('Data deleted!');
                } catch (error) {
                    console.error("Error deleting data: ", error);
                    alert("Error deleting data.");
                }
            }
        }

        // --- UI Logic and Initialization ---

        function filterRecipes() {
            const keyword = document.getElementById('search').value.toLowerCase();
            const lang = document.getElementById('language-selector').value;
            const filtered = recipesData.filter(r => {
                const name = r.name[lang] ? r.name[lang].toLowerCase() : '';
                const targets = r.targets[lang] ? r.targets[lang].join(' ').toLowerCase() : '';
                const where = r.where[lang] ? r.where[lang].join(' ').toLowerCase() : '';
                return name.includes(keyword) || targets.includes(keyword) || where.includes(keyword);
            });
            renderRecipes(filtered);
        }

        function updateTextContent(lang) {
            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    if (typeof translations[lang][key] === 'function') {
                        // This is for dynamic text like calculator results
                    } else {
                        element.innerHTML = translations[lang][key];
                    }
                }
            });
            
            const searchInput = document.getElementById('search');
            if(searchInput) searchInput.placeholder = translations[lang].recipes_search_placeholder;
            renderRecipes(recipesData);
            updateSeedDropdown();
            updatePesticideDropdown();
            renderReviews(reviewsData);
            renderAdminReviews();
        }

        function setLanguage(lang) {
            localStorage.setItem('language', lang);
            updateTextContent(lang);
        }

        // Initial fetch and render
        window.onload = function() {
            fetchAllData();
            updateTextContent(currentLang);
            document.getElementById('language-selector').value = currentLang;
        };

        // Expose global functions
        window.showSection = showSection;
        window.toggleNav = toggleNav;
        window.setLanguage = setLanguage;
        window.filterRecipes = filterRecipes;
        window.calculateSeeds = calculateSeeds;
        window.calculatePesticides = calculatePesticides;
        window.sendMessage = sendMessage;
        window.userLogout = userLogout;
        window.loginAsUser = loginAsUser;
        window.loginAsAdmin = loginAsAdmin;
        window.addReview = addReview;
        window.deleteReview = deleteReview;
        window.addUpdateRecipe = addUpdateRecipe;
        window.deleteRecipe = deleteRecipe;
        window.addUpdateCalcData = addUpdateCalcData;
        window.deleteCalcData = deleteCalcData;
        window.calculateSeeds = function() {
            const landSize = parseFloat(document.getElementById('land-size-seeds').value);
            const seedType = document.getElementById('seed-type').value;
            const seedDataForType = seedData[seedType];
            const resultElement = document.getElementById('seed-result');
            const lang = document.getElementById('language-selector').value;

            resultElement.classList.remove('show');
            void resultElement.offsetWidth;
            
            if (landSize && seedDataForType) {
                const requiredAmount = landSize * seedDataForType.amount;
                const seedName = seedDataForType[lang];
                resultElement.innerHTML = translations[lang].calc_seeds_result(requiredAmount, seedName, landSize);
                resultElement.classList.remove('hidden');
                resultElement.classList.add('show');
            } else {
                resultElement.innerHTML = translations[lang].calc_seeds_error;
                resultElement.classList.remove('hidden');
                resultElement.classList.add('show');
            }
        };
        window.calculatePesticides = function() {
            const landSize = parseFloat(document.getElementById('land-size-pesticide').value);
            const pesticideType = document.getElementById('pesticide-type').value;
            const pesticideDataForType = pesticideData[pesticideType];
            const resultElement = document.getElementById('pesticide-result');
            const lang = document.getElementById('language-selector').value;
            
            resultElement.classList.remove('show');
            void resultElement.offsetWidth;
            
            if (landSize && pesticideDataForType) {
                const requiredAmount = landSize * pesticideDataForType.amount;
                const pesticideName = pesticideDataForType[lang];
                resultElement.innerHTML = translations[lang].calc_pesticides_result(requiredAmount, pesticideName, landSize);
                resultElement.classList.remove('hidden');
                resultElement.classList.add('show');
            } else {
                resultElement.innerHTML = translations[lang].calc_pesticides_error;
                resultElement.classList.remove('hidden');
                resultElement.classList.add('show');
            }
        };
    </script>
</body>
</html>
