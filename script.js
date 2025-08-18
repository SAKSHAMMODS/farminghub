const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_recipes: "Recipes",
        nav_shop: "Shop",
        nav_elearning: "E-learning",
        nav_tools: "Tools",
        nav_reviews: "Reviews",
        nav_chatbot: "Chat Bot",
        
        // Home Section
        home_title: "Welcome to Farming Hub",
        home_subtitle: "Your one-stop destination for organic farming knowledge, sustainable practices, and community support.",
        
        // Recipes Section
        recipes_title: "Organic Pesticide Recipes",
        recipes_subtitle: "Discover natural, homemade solutions for common garden pests.",
        recipes_search_placeholder: "Search by name, target, or crop...",
        recipes_no_found: "No recipes found. Try a different search term.",
        recipes_card_targets: "🎯 Targets:",
        recipes_card_where: "📍 Where to Use:",
        recipes_card_ingredients: "🧾 Ingredients:",
        recipes_card_procedure: "⚙️ Procedure:",
        recipes_card_usage: "💡 How to Use:",
        recipes_card_cost: "💰 Approximate Cost:",

        // Shop Section
        shop_title: "Farming Shop",
        shop_subtitle: "Browse a selection of organic gardening tools, seeds, and supplies.",
        shop_item1_title: "Organic Seeds Pack",
        shop_item1_desc: "A variety of non-GMO, heirloom seeds.",
        shop_item2_title: "Eco-Friendly Tools Set",
        shop_item2_desc: "Durable tools made from recycled materials.",
        shop_item3_title: "Home Composter",
        shop_item3_desc: "Create your own rich, organic soil.",
        shop_button: "Add to Cart",

        // E-learning Section
        elearning_title: "E-learning Center",
        elearning_subtitle: "Learn the fundamentals of organic farming with our video tutorials and guides.",
        elearning_item1_title: "Course 1: Soil Health",
        elearning_item1_desc: "Master the art of creating nutrient-rich soil for your plants.",
        elearning_item2_title: "Course 2: Organic Pest Control",
        elearning_item2_desc: "Discover natural methods to protect your crops from pests.",
        elearning_item3_title: "Course 3: Sustainable Harvesting",
        elearning_item3_desc: "Learn how to harvest your crops efficiently and sustainably.",
        
        // Tools Section
        tools_title: "Farming Tools & Calculators",
        tools_subtitle: "Use our interactive tools to plan your farming activities efficiently.",
        calc_seeds_title: "Sowing Seeds Calculator",
        calc_seeds_label1: "Land Size (in acres)",
        calc_seeds_label2: "Seed Type",
        calc_seeds_button: "Calculate Seeds",
        calc_seeds_result: (amount, type, size) => `You will need approximately <strong>${amount} kg</strong> of ${type} seeds for ${size} acres.`,
        calc_seeds_error: "Please enter a valid land size.",
        
        calc_pesticides_title: "Pesticides Spreading Calculator",
        calc_pesticides_label1: "Land Size (in acres)",
        calc_pesticides_label2: "Pesticide Type",
        calc_pesticides_button: "Calculate Pesticides",
        calc_pesticides_result: (amount, type, size) => `You will need approximately <strong>${amount} L</strong> of ${type} for ${size} acres.`,
        calc_pesticides_error: "Please enter a valid land size.",

        // Reviews Section
        reviews_title: "Customer Reviews",
        review1_text: `"The Neem Oil Emulsion recipe saved my tomato plants! Simple and effective. Highly recommend this site."`,
        review2_text: `"I love the range of recipes and the clear instructions. The Ginger-Garlic mix is my new go-to for fungal spots."`,

        // Chatbot Section
        chatbot_title: "Farming Assistant Chat Bot",
        chatbot_subtitle: "Ask our AI assistant for advice on pests, recipes, or general farming tips.",
        chatbot_initial_msg: "Hello! I'm your farming assistant. How can I help you today?",
        chatbot_typing: "Bot is typing...",
        chatbot_send_btn: "Send",
        chatbot_user_label: "You:",
        chatbot_bot_label: "Bot:",
        chatbot_placeholder: "Type your question here...",
        chatbot_static_response: `I'm an AI assistant. I can't generate new content right now, but I can help you search the recipes. Try searching for "aphids" or "fungal" in the recipes section!`,
        chatbot_error: "Error: Failed to get response. Please try again.",

        // Footer
        footer_text: "© 2025 Farming Hub. All rights reserved. Made by Saksham Bhor | Email:",
    },
    hi: {
        // Navigation
        nav_home: "होम",
        nav_recipes: "रेसिपी",
        nav_shop: "दुकान",
        nav_elearning: "ई-लर्निंग",
        nav_tools: "टूल",
        nav_reviews: "रिव्यू",
        nav_chatbot: "चैट बॉट",

        // Home Section
        home_title: "फ़ार्मिंग हब में आपका स्वागत है",
        home_subtitle: "जैविक खेती के ज्ञान, टिकाऊ प्रथाओं और सामुदायिक सहायता के लिए आपका वन-स्टॉप डेस्टिनेशन।",

        // Recipes Section
        recipes_title: "जैविक कीटनाशक रेसिपी",
        recipes_subtitle: "आम बगीचे के कीटों के लिए प्राकृतिक, घर पर बने समाधानों की खोज करें।",
        recipes_search_placeholder: "नाम, लक्ष्य या फसल के अनुसार खोजें...",
        recipes_no_found: "कोई रेसिपी नहीं मिली। एक अलग खोज शब्द का प्रयास करें।",
        recipes_card_targets: "🎯 लक्ष्य:",
        recipes_card_where: "📍 कहाँ उपयोग करें:",
        recipes_card_ingredients: "🧾 सामग्री:",
        recipes_card_procedure: "⚙️ प्रक्रिया:",
        recipes_card_usage: "💡 उपयोग कैसे करें:",
        recipes_card_cost: "💰 अनुमानित लागत:",
        
        // Shop Section
        shop_title: "खेती की दुकान",
        shop_subtitle: "जैविक बागवानी उपकरण, बीज और आपूर्ति के चयन को ब्राउज़ करें।",
        shop_item1_title: "जैविक बीज पैक",
        shop_item1_desc: "गैर-जीएमओ, विरासत बीजों की एक किस्म।",
        shop_item2_title: "पर्यावरण-अनुकूल उपकरण सेट",
        shop_item2_desc: "पुनर्नवीनीकरण सामग्री से बने टिकाऊ उपकरण।",
        shop_item3_title: "घर का कंपोस्टर",
        shop_item3_desc: "अपनी खुद की समृद्ध, जैविक मिट्टी बनाएं।",
        shop_button: "कार्ट में जोड़ें",

        // E-learning Section
        elearning_title: "ई-लर्निंग सेंटर",
        elearning_subtitle: "हमारे वीडियो ट्यूटोरियल और गाइड के साथ जैविक खेती की मूल बातें जानें।",
        elearning_item1_title: "पाठ्यक्रम 1: मिट्टी का स्वास्थ्य",
        elearning_item1_desc: "अपने पौधों के लिए पोषक तत्वों से भरपूर मिट्टी बनाने की कला में महारत हासिल करें।",
        elearning_item2_title: "पाठ्यक्रम 2: जैविक कीट नियंत्रण",
        elearning_item2_desc: "अपनी फसलों को कीटों से बचाने के लिए प्राकृतिक तरीकों की खोज करें।",
        elearning_item3_title: "पाठ्यक्रम 3: टिकाऊ कटाई",
        elearning_item3_desc: "अपनी फसलों की कुशलतापूर्वक और टिकाऊ तरीके से कटाई करना सीखें।",

        // Tools Section
        tools_title: "खेती के उपकरण और कैलकुलेटर",
        tools_subtitle: "अपनी खेती की गतिविधियों को कुशलतापूर्वक योजना बनाने के लिए हमारे इंटरैक्टिव टूल का उपयोग करें।",
        calc_seeds_title: "बीज बोने का कैलकुलेटर",
        calc_seeds_label1: "भूमि का आकार (एकड़ में)",
        calc_seeds_label2: "बीज का प्रकार",
        calc_seeds_button: "बीज की गणना करें",
        calc_seeds_result: (amount, type, size) => `${size} एकड़ के लिए आपको लगभग <strong>${amount} किलो</strong> ${type} बीज की आवश्यकता होगी।`,
        calc_seeds_error: "कृपया एक वैध भूमि का आकार दर्ज करें।",

        calc_pesticides_title: "कीटनाशक फैलाने वाला कैलकुलेटर",
        calc_pesticides_label1: "भूमि का आकार (एकड़ में)",
        calc_pesticides_label2: "कीटनाशक का प्रकार",
        calc_pesticides_button: "कीटनाशकों की गणना करें",
        calc_pesticides_result: (amount, type, size) => `${size} एकड़ के लिए आपको लगभग <strong>${amount} L</strong> ${type} की आवश्यकता होगी।`,
        calc_pesticides_error: "कृपया एक वैध भूमि का आकार दर्ज करें।",

        // Reviews Section
        reviews_title: "ग्राहक समीक्षाएं",
        review1_text: `"नीम तेल इमल्शन रेसिपी ने मेरे टमाटर के पौधों को बचा लिया! सरल और प्रभावी। इस साइट की अत्यधिक अनुशंसा करता हूं।"`,
        review2_text: `"मुझे व्यंजनों की रेंज और स्पष्ट निर्देश पसंद हैं। अदरक-लहसुन का मिश्रण फंगल धब्बों के लिए मेरा नया उपाय है।"`,

        // Chatbot Section
        chatbot_title: "खेती सहायक चैट बॉट",
        chatbot_subtitle: "कीटों, व्यंजनों या सामान्य खेती युक्तियों पर हमारे एआई सहायक से सलाह लें।",
        chatbot_initial_msg: "नमस्ते! मैं आपका खेती सहायक हूँ। मैं आज आपकी क्या मदद कर सकता हूँ?",
        chatbot_typing: "बॉट टाइप कर रहा है...",
        chatbot_send_btn: "भेजें",
        chatbot_user_label: "आप:",
        chatbot_bot_label: "बॉट:",
        chatbot_placeholder: "यहां अपना प्रश्न टाइप करें...",
        chatbot_static_response: "मैं एक AI सहायक हूँ। मैं अभी नई सामग्री नहीं बना सकता, लेकिन मैं व्यंजनों को खोजने में आपकी मदद कर सकता हूँ। रेसिपी अनुभाग में 'एफिड्स' या 'फंगल' खोजें!",
        chatbot_error: "त्रुटि: प्रतिक्रिया प्राप्त करने में विफल। कृपया पुन: प्रयास करें।",

        // Footer
        footer_text: "© 2025 फार्मिंग हब। सर्वाधिकार सुरक्षित। द्वारा बनाया गया: Saksham Bhor | ईमेल:",
    },
    mr: {
        // Navigation
        nav_home: "होम",
        nav_recipes: "रेसिपी",
        nav_shop: "दुकान",
        nav_elearning: "ई-लर्निंग",
        nav_tools: "साधने",
        nav_reviews: "पुनरावलोकने",
        nav_chatbot: "चॅट बॉट",

        // Home Section
        home_title: "फार्मिंग हबमध्ये आपले स्वागत आहे",
        home_subtitle: "सेंद्रिय शेतीचे ज्ञान, शाश्वत पद्धती आणि सामुदायिक समर्थनासाठी तुमचे वन-स्टॉप डेस्टिनेशन.",

        // Recipes Section
        recipes_title: "सेंद्रिय कीटकनाशक रेसिपी",
        recipes_subtitle: "सामान्य बागेतील कीटकांवर नैसर्गिक, घरगुती उपाय शोधा.",
        recipes_search_placeholder: "नाव, लक्ष्य किंवा पिकानुसार शोधा...",
        recipes_no_found: "कोणत्याही रेसिपी सापडल्या नाहीत. वेगळा शोध शब्द वापरून पहा.",
        recipes_card_targets: "🎯 लक्ष्य:",
        recipes_card_where: "📍 कुठे वापरावे:",
        recipes_card_ingredients: "🧾 साहित्य:",
        recipes_card_procedure: "⚙️ प्रक्रिया:",
        recipes_card_usage: "💡 कसे वापरावे:",
        recipes_card_cost: "💰 अंदाजे खर्च:",

        // Shop Section
        shop_title: "शेत दुकान",
        shop_subtitle: "सेंद्रिय बागकाम साधने, बियाणे आणि पुरवठा यांचा संग्रह पहा.",
        shop_item1_title: "सेंद्रिय बियाणे पॅक",
        shop_item1_desc: "विविध प्रकारचे गैर-जीएमओ, वारसा बियाणे.",
        shop_item2_title: "पर्यावरण-अनुकूल साधनांचा संच",
        shop_item2_desc: "पुनर्वापर केलेल्या सामग्रीपासून बनवलेली टिकाऊ साधने.",
        shop_item3_title: "घरगुती कंपोस्टर",
        shop_item3_desc: "तुमची स्वतःची समृद्ध, सेंद्रिय माती तयार करा.",
        shop_button: "कार्टमध्ये जोडा",

        // E-learning Section
        elearning_title: "ई-लर्निंग केंद्र",
        elearning_subtitle: "आमच्या व्हिडिओ ट्यूटोरियल आणि मार्गदर्शकांसह सेंद्रिय शेतीची मूलतत्त्वे शिका.",
        elearning_item1_title: "पाठ्यक्रम 1: मातीचे आरोग्य",
        elearning_item1_desc: "तुमच्या रोपांसाठी पोषक तत्वांनी समृद्ध माती तयार करण्याची कला आत्मसात करा.",
        elearning_item2_title: "पाठ्यक्रम 2: सेंद्रिय कीटक नियंत्रण",
        elearning_item2_desc: "तुमच्या पिकांना कीटकांपासून वाचवण्यासाठी नैसर्गिक पद्धती शोधा.",
        elearning_item3_title: "पाठ्यक्रम 3: शाश्वत काढणी",
        elearning_item3_desc: "तुमच्या पिकांची कार्यक्षमतेने आणि शाश्वतपणे काढणी कशी करावी ते शिका.",
        
        // Tools Section
        tools_title: "शेती साधने आणि कॅल्क्युलेटर",
        tools_subtitle: "तुमच्या शेतीच्या कामांची कार्यक्षमतेने योजना करण्यासाठी आमच्या परस्परसंवादी साधनांचा वापर करा.",
        calc_seeds_title: "बियाणे पेरणी कॅल्क्युलेटर",
        calc_seeds_label1: "जमिनीचा आकार (एकरमध्ये)",
        calc_seeds_label2: "बियाण्याचा प्रकार",
        calc_seeds_button: "बियाणे मोजा",
        calc_seeds_result: (amount, type, size) => `${size} एकरसाठी तुम्हाला अंदाजे <strong>${amount} किलो</strong> ${type} बियाणे लागेल.`,
        calc_seeds_error: "कृपया जमिनीचा वैध आकार प्रविष्ट करा.",
        
        calc_pesticides_title: "कीटकनाशक फवारणी कॅल्क्युलेटर",
        calc_pesticides_label1: "जमिनीचा आकार (एकरमध्ये)",
        calc_pesticides_label2: "कीटकनाशक प्रकार",
        calc_pesticides_button: "कीटकनाशके मोजा",
        calc_pesticides_result: (amount, type, size) => `${size} एकरसाठी तुम्हाला अंदाजे <strong>${amount} L</strong> ${type} लागेल.`,
        calc_pesticides_error: "कृपया जमिनीचा वैध आकार प्रविष्ट करा.",

        // Reviews Section
        reviews_title: "ग्राहक पुनरावलोकने",
        review1_text: `"नीम ऑइल इमल्शन रेसिपीने माझ्या टोमॅटोच्या रोपांना वाचवले! सोपी आणि प्रभावी. मी या साइटची खूप शिफारस करतो."`,
        review2_text: `"मला रेसिपींची रेंज आणि स्पष्ट सूचना आवडल्या. फंगल स्पॉट्ससाठी आले-लसूण मिश्रण माझा नवीन उपाय आहे."`,

        // Chatbot Section
        chatbot_title: "शेती सहायक चॅट बॉट",
        chatbot_subtitle: "कीटक, रेसिपी किंवा सामान्य शेती टिप्ससाठी आमच्या AI सहाय्याला विचारा.",
        chatbot_initial_msg: "नमस्कार! मी तुमचा शेती सहायक आहे. मी आज तुम्हाला कशी मदत करू शकतो?",
        chatbot_typing: "बॉट टाइप करत आहे...",
        chatbot_send_btn: "पाठवा",
        chatbot_user_label: "तुम्ही:",
        chatbot_bot_label: "बॉट:",
        chatbot_placeholder: "येथे तुमचा प्रश्न टाइप करा...",
        chatbot_static_response: "मी एक AI सहायक आहे. मी आत्ता नवीन सामग्री तयार करू शकत नाही, पण मी तुम्हाला रेसिपी शोधण्यात मदत करू शकतो. रेसिपी विभागात 'ऍफिड्स' किंवा 'फंगल' शोधण्याचा प्रयत्न करा!",
        chatbot_error: "त्रुटी: प्रतिसाद मिळविण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा.",

        // Footer
        footer_text: "© 2025 फार्मिंग हब. सर्व हक्क राखीव. बनवणारे: Saksham Bhor | ईमेल:",
    },
};

const currentLang = localStorage.getItem('language') || 'en';

// Function to update the UI text based on the selected language
function updateTextContent(lang) {
    // Update static text using data-key attributes
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update placeholders
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.placeholder = translations[lang].recipes_search_placeholder;
    }
    const chatbotInput = document.getElementById('chatbot-input');
    if (chatbotInput) {
        chatbotInput.placeholder = translations[lang].chatbot_placeholder;
    }

    // Re-render dynamic content (recipes and calculator results)
    renderRecipes(recipes);
}

// Sets the language and updates the UI
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    updateTextContent(lang);
}

// Data for the recipes
const recipes = [
    { id: 1, name: { en: "Neem Seed Kernel Extract (NSKE)", hi: "नीम बीज कर्नेल एक्सट्रैक्ट (NSKE)", mr: "कडुलिंबाच्या बियांचा अर्क (NSKE)" }, targets: { en: ["Caterpillars", "aphids", "whiteflies", "thrips"], hi: ["इल्ली", "एफिड्स", "सफेद मक्खियाँ", "थ्रिप्स"], mr: ["अळ्या", "मावा", "पांढऱ्या माश्या", "थ्रिप्स"] }, where: { en: ["Vegetables", "pulses", "cotton", "paddy"], hi: ["सब्जियां", "दालें", "कपास", "धान"], mr: ["भाज्या", "कडधान्ये", "कापूस", "भात"] }, ingredients: { en: ["5 kg neem seeds (kernels)", "10 L clean water"], hi: ["5 किलो नीम के बीज (गुठली)", "10 लीटर स्वच्छ पानी"], mr: ["5 किलो कडुलिंबाच्या बिया (गर्भा)", "10 L स्वच्छ पाणी"] }, procedure: { en: ["Remove shells from neem seeds", "Grind kernels into fine powder", "Soak powder in 10 L water overnight", "Strain through cloth before spraying"], hi: ["नीम के बीजों से छिलके निकालें", "गुठली को बारीक पाउडर में पीस लें", "पाउडर को रात भर 10 लीटर पानी में भिगो दें", "स्प्रे करने से पहले कपड़े से छान लें"], mr: ["कडुलिंबाच्या बियांमधून कवच काढा", "गर बारीक पावडरमध्ये वाटून घ्या", "पावडर रात्रभर 10 L पाण्यात भिजवा", "फवारणी करण्यापूर्वी कपड्याने गाळा"] }, usage: { en: ["Spray 150–200 L per acre on both sides of leaves every 7–10 days in morning/evening"], hi: ["पत्तियों के दोनों तरफ सुबह/शाम में हर 7-10 दिन में प्रति एकड़ 150-200 लीटर स्प्रे करें"], mr: ["दर 7-10 दिवसांनी सकाळी/संध्याकाळी पानांच्या दोन्ही बाजूंवर प्रति एकर 150-200 L फवारणी करा"] }, cost: 250 },
    { id: 2, name: { en: "Neem Oil Emulsion", hi: "नीम तेल इमल्शन", mr: "कडुलिंब तेल इमल्शन" }, targets: { en: ["Sucking pests", "fungal spots"], hi: ["चूसने वाले कीट", "फंगल स्पॉट"], mr: ["शोषक कीटक", "बुरशीचे डाग"] }, where: { en: ["Vegetables", "fruits", "field crops"], hi: ["सब्जियां", "फल", "खेत की फसलें"], mr: ["भाज्या", "फळे", "शेतातील पिके"] }, ingredients: { en: ["200 ml neem oil", "20 ml mild liquid soap", "10 L clean water"], hi: ["200 मिली नीम का तेल", "20 मिली हल्का तरल साबुन", "10 लीटर स्वच्छ पानी"], mr: ["200 मिली कडुलिंब तेल", "20 मिली सौम्य द्रव साबण", "10 L स्वच्छ पाणी"] }, procedure: { en: ["Mix soap with water until well blended", "Slowly add neem oil while stirring", "Mix until fully emulsified"], hi: ["साबुन को पानी में अच्छी तरह मिलाएं", "धीरे-धीरे नीम का तेल मिलाते हुए हिलाएं", "पूरी तरह से इमल्सीफाइड होने तक मिलाएं"], mr: ["साबण पाण्यात चांगले मिसळेपर्यंत मिसळा", "ढवळत असताना हळूहळू कडुलिंब तेल घाला", "पूर्णपणे इमल्सीफाइड होईपर्यंत मिसळा"] }, usage: { en: ["Spray evenly on both sides of leaves, 150–200 L spray mix per acre weekly"], hi: ["पत्तियों के दोनों तरफ समान रूप से स्प्रे करें, प्रति एकड़ 150-200 लीटर स्प्रे मिक्स साप्ताहिक"], mr: ["पानांच्या दोन्ही बाजूंवर समान रीतीने फवारणी करा, प्रति एकर 150-200 L स्प्रे मिश्रण साप्ताहिक"] }, cost: 180 },
    { id: 3, name: { en: "Garlic-Chilli Spray", hi: "लहसुन-मिर्च स्प्रे", mr: "लसूण-मिरची स्प्रे" }, targets: { en: ["Aphids", "mealybugs", "mites"], hi: ["एफिड्स", "मीलीबग्स", "माइट्स"], mr: ["मावा", "पिठ्या ढेकूण", "माइट्स"] }, where: { en: ["Vegetables", "pulses", "ornamental plants"], hi: ["सब्जियां", "दालें", "सजावटी पौधे"], mr: ["भाज्या", "कडधान्ये", "शोभेची झाडे"] }, ingredients: { en: ["250 g garlic", "250 g green chillies", "5 L water", "20 ml soap solution"], hi: ["250 ग्राम लहसुन", "250 ग्राम हरी मिर्च", "5 लीटर पानी", "20 मिली साबुन का घोल"], mr: ["250 ग्रॅम लसूण", "250 ग्रॅम हिरवी मिरची", "5 L पाणी", "20 मिली साबण द्रावण"] }, procedure: { en: ["Grind garlic and chillies into paste", "Soak paste in 5 L water overnight", "Filter and mix soap before spraying"], hi: ["लहसुन और मिर्च को पीसकर पेस्ट बना लें", "पेस्ट को रात भर 5 लीटर पानी में भिगो दें", "स्प्रे करने से पहले छानकर साबुन मिला लें"], mr: ["लसूण आणि मिरच्या वाटून पेस्ट करा", "पेस्ट रात्रभर 5 L पाण्यात भिजवा", "फवारणी करण्यापूर्वी गाळून त्यात साबण मिसळा"] }, usage: { en: ["Spray 50–100 ml per liter of water, once every week"], hi: ["प्रति लीटर पानी में 50-100 मिली स्प्रे करें, सप्ताह में एक बार"], mr: ["प्रत्येक आठवड्यातून एकदा, प्रति लिटर पाण्यात 50-100 मिली फवारणी करा"] }, cost: 120 },
    { id: 4, name: { en: "Tobacco Decoction", hi: "तंबाकू का काढ़ा", mr: "तंबाखूचा काढा" }, targets: { en: ["Leaf-eating caterpillars", "mites"], hi: ["पत्ता खाने वाली इल्ली", "माइट्स"], mr: ["पाने खाणाऱ्या अळ्या", "माइट्स"] }, where: { en: ["Cotton", "vegetables", "tobacco fields"], hi: ["कपास", "सब्जियां", "तंबाकू के खेत"], mr: ["कापूस", "भाज्या", "तंबाखूचे शेत"] }, ingredients: { en: ["500 g dried tobacco leaves", "10 L water", "20 g soap powder"], hi: ["500 ग्राम सूखे तंबाकू के पत्ते", "10 लीटर पानी", "20 ग्राम साबुन पाउडर"], mr: ["500 ग्रॅम सुक्या तंबाखूची पाने", "10 L पाणी", "20 ग्रॅम साबण पावडर"] }, procedure: { en: ["Boil tobacco leaves in 5 L water for 30 min", "Cool and strain", "Dilute with 5 L water, add soap, mix well"], hi: ["तंबाकू के पत्तों को 5 लीटर पानी में 30 मिनट तक उबालें", "ठंडा करके छान लें", "5 लीटर पानी के साथ पतला करें, साबुन डालकर अच्छी तरह मिला लें"], mr: ["तंबाखूची पाने 5 L पाण्यात 30 मिनिटे उकळा", "थंड करून गाळा", "5 L पाण्यासोबत पातळ करा, साबण घालून चांगले मिसळा"] }, usage: { en: ["Spray in the evening to avoid leaf burn, once every 10 days"], hi: ["पत्ती जलने से बचने के लिए शाम को स्प्रे करें, हर 10 दिन में एक बार"], mr: ["पाने जळू नयेत म्हणून संध्याकाळी फवारणी करा, दर 10 दिवसांनी एकदा"] }, cost: 150 },
    { id: 5, name: { en: "Cow Urine Fungicide", hi: "गाय का मूत्र कवकनाशी", mr: "गोमूत्र बुरशीनाशक" }, targets: { en: ["Fungal diseases", "bacterial spots"], hi: ["फंगल रोग", "बैक्टीरियल स्पॉट"], mr: ["बुरशीजन्य रोग", "बॅक्टेरियल स्पॉट्स"] }, where: { en: ["All crops"], hi: ["सभी फसलें"], mr: ["सर्व पिके"] }, ingredients: { en: ["5 L cow urine", "5 L water"], hi: ["5 लीटर गाय का मूत्र", "5 लीटर पानी"], mr: ["5 L गोमूत्र", "5 L पाणी"] }, procedure: { en: ["Ferment cow urine in a closed container for 5–7 days", "Dilute with equal water before spraying"], hi: ["गाय के मूत्र को 5-7 दिनों के लिए एक बंद कंटेनर में किण्वित करें", "स्प्रे करने से पहले बराबर पानी मिलाकर पतला करें"], mr: ["गोमूत्र 5-7 दिवसांसाठी बंद भांड्यात आंबवा", "फवारणी करण्यापूर्वी समान प्रमाणात पाणी घालून पातळ करा"] }, usage: { en: ["Spray every 7–10 days during high humidity"], hi: ["अधिक नमी के दौरान हर 7-10 दिन में स्प्रे करें"], mr: ["जास्त आर्द्रतेच्या वेळी दर 7-10 दिवसांनी फवारणी करा"] }, cost: 50 },
    { id: 6, name: { en: "Buttermilk Spray", hi: "छाछ स्प्रे", mr: "ताक स्प्रे" }, targets: { en: ["Powdery mildew"], hi: ["पाउडरी फफूंदी"], mr: ["पावडरी मिल्ड्यू"] }, where: { en: ["Cucurbits", "grapes", "roses"], hi: ["कद्दू वर्ग", "अंगूर", "गुलाब"], mr: ["काकडीवर्गीय", "द्राक्षे", "गुलाब"] }, ingredients: { en: ["1 L sour buttermilk", "5 L water"], hi: ["1 लीटर खट्टी छाछ", "5 लीटर पानी"], mr: ["1 L आंबट ताक", "5 L पाणी"] }, procedure: { en: ["Mix buttermilk with water", "Stir well before spraying"], hi: ["छाछ को पानी के साथ मिलाएं", "स्प्रे करने से पहले अच्छी तरह हिलाएं"], mr: ["ताक पाण्यात मिसळा", "फवारणी करण्यापूर्वी चांगले ढवळून घ्या"] }, usage: { en: ["Spray on affected leaves every 5 days until control is achieved"], hi: ["प्रभावित पत्तियों पर हर 5 दिन में स्प्रे करें जब तक नियंत्रण न हो जाए"], mr: ["नियंत्रण मिळेपर्यंत प्रत्येक 5 दिवसांनी प्रभावित पानांवर फवारणी करा"] }, cost: 40 },
    { id: 7, name: { en: "Aloe Vera Extract", hi: "एलोवेरा का अर्क", mr: "कोरफड अर्क" }, targets: { en: ["Mites", "thrips"], hi: ["माइट्स", "थ्रिप्स"], mr: ["माइट्स", "थ्रिप्स"] }, where: { en: ["Chilli", "tomato", "brinjal"], hi: ["मिर्च", "टमाटर", "बैंगन"], mr: ["मिरची", "टोमॅटो", "वांगी"] }, ingredients: { en: ["1 kg aloe vera leaves", "5 L water"], hi: ["1 किलो एलोवेरा के पत्ते", "5 लीटर पानी"], mr: ["1 किलो कोरफड पाने", "5 L पाणी"] }, procedure: { en: ["Grind aloe vera leaves into paste", "Mix with water and filter"], hi: ["एलोवेरा के पत्तों को पीसकर पेस्ट बना लें", "पानी के साथ मिलाएं और छान लें"], mr: ["कोरफड पाने वाटून पेस्ट करा", "पाण्यात मिसळा आणि गाळा"] }, usage: { en: ["Spray early morning or late evening every 7 days"], hi: ["हर 7 दिन में सुबह या देर शाम स्प्रे करें"], mr: ["दर 7 दिवसांनी सकाळी किंवा संध्याकाळी उशिरा फवारणी करा"] }, cost: 80 },
    { id: 8, name: { en: "Asafoetida Solution", hi: "हींग का घोल", mr: "हिंग द्रावण" }, targets: { en: ["Termites", "soil grubs"], hi: ["दीमक", "मिट्टी के कीड़े"], mr: ["वाळवी", "मातीतील अळ्या"] }, where: { en: ["Sugarcane", "groundnut", "turmeric"], hi: ["गन्ना", "मूंगफली", "हल्दी"], mr: ["ऊस", "भुईमूग", "हळद"] }, ingredients: { en: ["50 g asafoetida", "10 L water"], hi: ["50 ग्राम हींग", "10 लीटर पानी"], mr: ["50 ग्रॅम हिंग", "10 L पाणी"] }, procedure: { en: ["Dissolve asafoetida in water", "Apply to soil near roots"], hi: ["हींग को पानी में घोलें", "जड़ों के पास मिट्टी पर लगाएं"], mr: ["हिंग पाण्यात विरघळवा", "मुळांजवळ मातीवर लावा"] }, usage: { en: ["Use 1 L per plant base every 15 days"], hi: ["हर 15 दिन में प्रति पौधे की जड़ में 1 लीटर उपयोग करें"], mr: ["प्रत्येक 15 दिवसांनी प्रति रोपाच्या मुळाजवळ 1 L वापरा"] }, cost: 200 },
    { id: 9, name: { en: "Pongamia Oil Spray", hi: "पोंगामिया तेल स्प्रे", mr: "पोंगॅमिया तेल स्प्रे" }, targets: { en: ["Aphids", "leaf miners"], hi: ["एफिड्स", "पत्ती खोदक"], mr: ["मावा", "लीफ माइनर"] }, where: { en: ["Vegetables", "fruits", "pulses"], hi: ["सब्जियां", "फल", "दालें"], mr: ["भाज्या", "फळे", "कडधान्ये"] }, ingredients: { en: ["200 ml pongamia oil", "20 ml soap solution", "10 L water"], hi: ["200 मिली पोंगामिया तेल", "20 मिली साबुन का घोल", "10 लीटर पानी"], mr: ["200 मिली पोंगॅमिया तेल", "20 मिली सौम्य साबण द्रावण", "10 L पाणी"] }, procedure: { en: ["Mix soap and water", "Add oil slowly while stirring"], hi: ["साबुन और पानी मिलाएं", "हिलाते हुए धीरे-धीरे तेल डालें"], mr: ["साबण आणि पाणी मिसळा", "ढवळत असताना हळूहळू तेल घाला"] }, usage: { en: ["Spray 150 L per acre every 10 days"], hi: ["प्रति एकड़ 150 लीटर स्प्रे करें हर 10 दिन में"], mr: ["दर 10 दिवसांनी प्रति एकर 150 L फवारणी करा"] }, cost: 160 },
    { id: 10, name: { en: "Turmeric-Ginger Spray", hi: "हल्दी-अदरक स्प्रे", mr: "हळद-आले स्प्रे" }, targets: { en: ["Fungal infections"], hi: ["फंगल संक्रमण"], mr: ["बुरशीजन्य संक्रमण"] }, where: { en: ["Paddy", "turmeric", "vegetables"], hi: ["धान", "हल्दी", "सब्जियां"], mr: ["भात", "हळद", "भाज्या"] }, ingredients: { en: ["500 g turmeric rhizome", "500 g ginger", "10 L water"], hi: ["500 ग्राम हल्दी का कंद", "500 ग्राम अदरक", "10 लीटर पानी"], mr: ["500 ग्रॅम हळदीचा कंद", "500 ग्रॅम आले", "10 L पाणी"] }, procedure: { en: ["Grind turmeric and ginger into paste", "Boil in water for 30 minutes", "Cool, filter, and use"], hi: ["हल्दी और अदरक को पीसकर पेस्ट बना लें", "पानी में 30 मिनट तक उबालें", "ठंडा करके छान लें और उपयोग करें"], mr: ["हळद आणि आले वाटून पेस्ट करा", "30 मिनिटे पाण्यात उकळा", "थंड करा, गाळा आणि वापरा"] }, usage: { en: ["Spray weekly during rainy season"], hi: ["बरसात के मौसम में साप्ताहिक स्प्रे करें"], mr: ["पावसाळ्यात साप्ताहिक फवारणी करा"] }, cost: 140 },
    { id: 11, name: { en: "Jaggery-Sulphur Solution", hi: "गुड़-सल्फर घोल", mr: "गूळ-गंधक द्रावण" }, targets: { en: ["Mites", "thrips", "powdery mildew"], hi: ["माइट्स", "थ्रिप्स", "पाउडरी फफूंदी"], mr: ["माइट्स", "थ्रिप्स", "पावडरी मिल्ड्यू"] }, where: { en: ["Grapes", "vegetables"], hi: ["अंगूर", "सब्जियां"], mr: ["द्राक्षे", "भाज्या"] }, ingredients: { en: ["1 kg jaggery", "1 kg sulphur powder", "5 L water"], hi: ["1 किलो गुड़", "1 किलो सल्फर पाउडर", "5 लीटर पानी"], mr: ["1 किलो गूळ", "1 किलो गंधक पावडर", "5 L पाणी"] }, procedure: { en: ["Mix jaggery and sulphur powder", "Add water and boil for 30 minutes", "Cool and store"], hi: ["गुड़ और सल्फर पाउडर मिलाएं", "पानी डालें और 30 मिनट तक उबालें", "ठंडा करके स्टोर करें"], mr: ["गूळ आणि गंधक पावडर मिसळा", "पाणी घालून 30 मिनिटे उकळा", "थंड करून साठवा"] }, usage: { en: ["Dilute 100 ml of solution in 10 L of water for spraying"], hi: ["स्प्रे करने के लिए 100 मिली घोल को 10 लीटर पानी में पतला करें"], mr: ["फवारणीसाठी 10 L पाण्यात 100 मिली द्रावण पातळ करा"] }, cost: 180 },
    { id: 12, name: { en: "Neem Cake Soil Application", hi: "नीम केक मिट्टी में डालना", mr: "कडुलिंब केक मातीत वापरणे" }, targets: { en: ["Nematodes", "soil-borne pathogens"], hi: ["नेमाटोड", "मिट्टी से पैदा होने वाले रोगजनक"], mr: ["नेमाटोड", "मातीतून होणारे रोग"] }, where: { en: ["Horticultural crops"], hi: ["बागवानी फसलें"], mr: ["बागायती पिके"] }, ingredients: { en: ["Neem cake powder"], hi: ["नीम केक पाउडर"], mr: ["कडुलिंब केक पावडर"] }, procedure: { en: ["Mix neem cake powder with soil around the plant"], hi: ["पौधे के चारों ओर नीम केक पाउडर को मिट्टी के साथ मिलाएं"], mr: ["रोपाच्या भोवती कडुलिंब केक पावडर मातीत मिसळा"] }, usage: { en: ["Apply 200 g per plant once every 2 months"], hi: ["हर 2 महीने में प्रति पौधे 200 ग्राम लगाएं"], mr: ["प्रत्येक 2 महिन्यांनी प्रति रोपासाठी 200 ग्रॅम लावा"] }, cost: 100 },
    { id: 13, name: { en: "Fermented Rice Water Spray", hi: "किण्वित चावल का पानी स्प्रे", mr: "आंबवलेले तांदळाचे पाणी स्प्रे" }, targets: { en: ["Fungal diseases"], hi: ["फंगल रोग"], mr: ["बुरशीजन्य रोग"] }, where: { en: ["Paddy", "garden plants"], hi: ["धान", "बगीचे के पौधे"], mr: ["भात", "बागेतील झाडे"] }, ingredients: { en: ["Rice water (after washing rice)", "1 L water"], hi: ["चावल का पानी (चावल धोने के बाद)", "1 लीटर पानी"], mr: ["तांदळाचे पाणी (तांदूळ धुतल्यानंतर)", "1 L पाणी"] }, procedure: { en: ["Let rice water ferment for 3-4 days", "Dilute with 1 L of clean water"], hi: ["चावल के पानी को 3-4 दिनों के लिए किण्वित होने दें", "1 लीटर साफ पानी के साथ पतला करें"], mr: ["तांदळाचे पाणी 3-4 दिवस आंबवा", "1 L स्वच्छ पाण्यासोबत पातळ करा"] }, usage: { en: ["Spray on leaves every week to prevent fungal growth"], hi: ["फंगल वृद्धि को रोकने के लिए हर हफ्ते पत्तियों पर स्प्रे करें"], mr: ["बुरशीची वाढ रोखण्यासाठी प्रत्येक आठवड्यात पानांवर फवारणी करा"] }, cost: 10 },
    { id: 14, name: { en: "Eucalyptus Oil Spray", hi: "नीलगिरी तेल स्प्रे", mr: "निलगिरी तेल स्प्रे" }, targets: { en: ["Caterpillars", "aphids"], hi: ["इल्ली", "एफिड्स"], mr: ["अळ्या", "मावा"] }, where: { en: ["Ornamental plants"], hi: ["सजावटी पौधे"], mr: ["शोभेची झाडे"] }, ingredients: { en: ["10-15 drops eucalyptus oil", "1 tsp soap", "1 L water"], hi: ["10-15 बूंद नीलगिरी का तेल", "1 चम्मच साबुन", "1 लीटर पानी"], mr: ["10-15 थेंब निलगिरी तेल", "1 चमचा साबण", "1 L पाणी"] }, procedure: { en: ["Mix soap and water", "Add eucalyptus oil and shake well"], hi: ["साबुन और पानी मिलाएं", "नीलगिरी का तेल डालें और अच्छी तरह हिलाएं"], mr: ["साबण आणि पाणी मिसळा", "निलगिरी तेल घालून चांगले हलवा"] }, usage: { en: ["Spray on plants weekly, avoid direct sun"], hi: ["पौधों पर साप्ताहिक स्प्रे करें, सीधे धूप से बचें"], mr: ["दर आठवड्यात रोपांवर फवारणी करा, थेट सूर्यप्रकाशात टाळा"] }, cost: 60 },
    { id: 15, name: { en: "Chilli-Kerosene Spray", hi: "मिर्च-केरोसिन स्प्रे", mr: "मिरची-रॉकेल स्प्रे" }, targets: { en: ["Caterpillars", "beetles"], hi: ["इल्ली", "बीटल"], mr: ["अळ्या", "भुंगेरे"] }, where: { en: ["Cotton", "brinjal", "chilli"], hi: ["कपास", "बैंगन", "मिर्च"], mr: ["कापूस", "वांगी", "मिरची"] }, ingredients: { en: ["500 g red chillies", "200 ml kerosene", "10 L water"], hi: ["500 ग्राम लाल मिर्च", "200 मिली केरोसिन", "10 लीटर पानी"], mr: ["500 ग्रॅम लाल मिरच्या", "200 मिली रॉकेल", "10 L पाणी"] }, procedure: { en: ["Grind chillies, soak in kerosene for 24 hrs", "Dilute with water before spraying"], hi: ["मिर्च को पीसें, 24 घंटे के लिए केरोसिन में भिगो दें", "स्प्रे करने से पहले पानी के साथ पतला करें"], mr: ["मिरच्या वाटून 24 तास रॉकेलमध्‍ये भिजवा", "फवारणी करण्यापूर्वी पाण्यासोबत पातळ करा"] }, usage: { en: ["Spray in evening to prevent leaf scorch"], hi: ["पत्ती जलने से बचाने के लिए शाम को स्प्रे करें"], mr: ["पाने जळू नयेत म्हणून संध्याकाळी फवारणी करा"] }, cost: 170 },
    { id: 16, name: { en: "Onion-Garlic Extract", hi: "प्याज-लहसुन का अर्क", mr: "कांदा-लसूण अर्क" }, targets: { en: ["Aphids", "thrips", "mites"], hi: ["एफिड्स", "थ्रिप्स", "माइट्स"], mr: ["मावा", "थ्रिप्स", "माइट्स"] }, where: { en: ["Vegetables", "flowers"], hi: ["सब्जियां", "फूल"], mr: ["भाज्या", "फुले"] }, ingredients: { en: ["500 g onion", "500 g garlic", "10 L water"], hi: ["500 ग्राम प्याज", "500 ग्राम लहसुन", "10 लीटर पानी"], mr: ["500 ग्रॅम कांदा", "500 ग्रॅम लसूण", "10 L पाणी"] }, procedure: { en: ["Grind onion & garlic, soak in water overnight", "Filter before use"], hi: ["प्याज और लहसुन को पीसें, रात भर पानी में भिगो दें", "उपयोग से पहले छान लें"], mr: ["कांदा आणि लसूण वाटून रात्रभर पाण्यात भिजवा", "वापरण्यापूर्वी गाळा"] }, usage: { en: ["Spray weekly for pest prevention"], hi: ["कीटों से बचाव के लिए साप्ताहिक स्प्रे करें"], mr: ["कीटक प्रतिबंधासाठी साप्ताहिक फवारणी करा"] }, cost: 130 },
    { id: 17, name: { en: "Lantana Leaf Extract", hi: "लंटाना पत्ती का अर्क", mr: "लंटाना पानांचा अर्क" }, targets: { en: ["Caterpillars", "leaf miners"], hi: ["इल्ली", "पत्ती खोदक"], mr: ["अळ्या", "लीफ माइनर"] }, where: { en: ["Paddy", "vegetables"], hi: ["धान", "सब्जियां"], mr: ["भात", "भाज्या"] }, ingredients: { en: ["2 kg lantana leaves", "10 L water"], hi: ["2 किलो लंटाना के पत्ते", "10 लीटर पानी"], mr: ["2 किलो लंटाना पाने", "10 L पाणी"] }, procedure: { en: ["Crush leaves, soak overnight, strain"], hi: ["पत्तों को कुचलें, रात भर भिगो दें, छान लें"], mr: ["पाने कुस्करून रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray 100–150 L/acre every 7 days"], hi: ["हर 7 दिन में प्रति एकड़ 100–150 लीटर स्प्रे करें"], mr: ["दर 7 दिवसांनी प्रति एकर 100–150 L फवारणी करा"] }, cost: 50 },
    { id: 18, name: { en: "Calotropis Leaf Decoction", hi: "कैलोट्रोपिस पत्ती का काढ़ा", mr: "रुईच्या पानांचा काढा" }, targets: { en: ["Aphids", "mealybugs"], hi: ["एफिड्स", "मीलीबग्स"], mr: ["मावा", "पिठ्या ढेकूण"] }, where: { en: ["Cotton", "pulses"], hi: ["कपास", "दालें"], mr: ["कापूस", "कडधान्ये"] }, ingredients: { en: ["2 kg calotropis leaves", "10 L water"], hi: ["2 किलो कैलोट्रोपिस के पत्ते", "10 लीटर पानी"], mr: ["2 किलो रुईची पाने", "10 L पाणी"] }, procedure: { en: ["Boil leaves in water for 30 min, cool, strain"], hi: ["पत्तों को पानी में 30 मिनट तक उबालें, ठंडा करें, छान लें"], mr: ["पाणी 30 मिनिटे उकळा, थंड करा, गाळा"] }, usage: { en: ["Spray 10% solution on crops"], hi: ["फसलों पर 10% घोल स्प्रे करें"], mr: ["पिकांवर 10% द्रावण फवारणी करा"] }, cost: 60 },
    { id: 19, name: { en: "Lemon Peel Extract", hi: "नींबू के छिलके का अर्क", mr: "लिंबाच्या सालीचा अर्क" }, targets: { en: ["Ants", "aphids", "fungal spores"], hi: ["चींटियाँ", "एफिड्स", "फंगल बीजाणु"], mr: ["मुंग्या", "मावा", "बुरशीचे बीजाणू"] }, where: { en: ["Vegetables", "fruit trees"], hi: ["सब्जियां", "फलों के पेड़"], mr: ["भाज्या", "फळांची झाडे"] }, ingredients: { en: ["Peels from 2 kg lemons", "10 L water"], hi: ["2 किलो नींबू के छिलके", "10 लीटर पानी"], mr: ["2 किलो लिंबाच्या साली", "10 L पाणी"] }, procedure: { en: ["Boil peels in water 30 min, cool, strain"], hi: ["छिलके को पानी में 30 मिनट तक उबालें, ठंडा करें, छान लें"], mr: ["साली 30 मिनिटे पाण्यात उकळा, थंड करा, गाळा"] }, usage: { en: ["Spray fortnightly"], hi: ["हर पंद्रह दिन में स्प्रे करें"], mr: ["पंधरावड्याने फवारणी करा"] }, cost: 40 },
    { id: 20, name: { en: "Papaya Leaf Extract", hi: "पपीते की पत्ती का अर्क", mr: "पपईच्या पानांचा अर्क" }, targets: { en: ["Mites", "leaf curl virus carriers"], hi: ["माइट्स", "पत्ती कर्ल वायरस वाहक"], mr: ["माइट्स", "लीफ कर्ल व्हायरस वाहक"] }, where: { en: ["Chilli", "tomato", "okra"], hi: ["मिर्च", "टमाटर", "भिंडी"], mr: ["मिरची", "टोमॅटो", "भेंडी"] }, ingredients: { en: ["1 kg papaya leaves", "5 L water"], hi: ["1 किलो पपीते के पत्ते", "5 लीटर पानी"], mr: ["1 किलो पपईची पाने", "5 L पाणी"] }, procedure: { en: ["Grind leaves, soak overnight, filter"], hi: ["पत्तों को पीसें, रात भर भिगो दें, छान लें"], mr: ["पाने वाटून रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray every 10 days"], hi: ["हर 10 दिन में स्प्रे करें"], mr: ["दर 10 दिवसांनी फवारणी करा"] }, cost: 30 },
    { id: 21, name: { en: "Custard Apple Seed Extract", hi: "सीताफल बीज अर्क", mr: "सीताफळ बियांचा अर्क" }, targets: { en: ["Leaf miners", "aphids"], hi: ["पत्ती खोदक", "एफिड्स"], mr: ["लीफ माइनर", "मावा"] }, where: { en: ["Vegetables", "fruits"], hi: ["सब्जियां", "फल"], mr: ["भाज्या", "फळे"] }, ingredients: { en: ["1 kg custard apple seeds", "5 L water"], hi: ["1 किलो सीताफल के बीज", "5 लीटर पानी"], mr: ["1 किलो सीताफळाच्या बिया", "5 L पाणी"] }, procedure: { en: ["Grind seeds, soak overnight, strain"], hi: ["बीजों को पीसें, रात भर भिगो दें, छान लें"], mr: ["बिया वाटून रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray 5% solution weekly"], hi: ["5% घोल साप्ताहिक स्प्रे करें"], mr: ["5% द्रावण साप्ताहिक फवारणी करा"] }, cost: 100 },
    { id: 22, name: { en: "Bitter Gourd Leaf Extract", hi: "करेला पत्ती का अर्क", mr: "कारल्याच्या पानांचा अर्क" }, targets: { en: ["Whiteflies", "aphids"], hi: ["सफेद मक्खियाँ", "एफिड्स"], mr: ["पांढऱ्या माश्या", "मावा"] }, where: { en: ["Vegetables"], hi: ["सब्जियां"], mr: ["भाज्या"] }, ingredients: { en: ["2 kg bitter gourd leaves", "10 L water"], hi: ["2 किलो करेले के पत्ते", "10 लीटर पानी"], mr: ["2 किलो कारल्याची पाने", "10 L पाणी"] }, procedure: { en: ["Crush leaves, soak 24 hrs, strain"], hi: ["पत्तों को कुचलें, 24 घंटे भिगो दें, छान लें"], mr: ["पाने कुस्करून 24 तास भिजवा, गाळा"] }, usage: { en: ["Spray fortnightly"], hi: ["हर पंद्रह दिन में स्प्रे करें"], mr: ["पंधरावड्याने फवारणी करा"] }, cost: 50 },
    { id: 23, name: { en: "Marigold Flower Extract", hi: "गेंदा फूल अर्क", mr: "झेंडू फुलांचा अर्क" }, targets: { en: ["Nematodes", "whiteflies"], hi: ["नेमाटोड", "सफेद मक्खियाँ"], mr: ["नेमाटोड", "पांढऱ्या माश्या"] }, where: { en: ["Vegetables", "pulses"], hi: ["सब्जियां", "दालें"], mr: ["भाज्या", "कडधान्ये"] }, ingredients: { en: ["2 kg marigold flowers", "10 L water"], hi: ["2 किलो गेंदा फूल", "10 लीटर पानी"], mr: ["2 किलो झेंडूची फुले", "10 L पाणी"] }, procedure: { en: ["Boil flowers 30 min, cool, strain"], hi: ["फूलों को 30 मिनट तक उबालें, ठंडा करें, छान लें"], mr: ["फुले 30 मिनिटे उकळा, थंड करा, गाळा"] }, usage: { en: ["Spray 100–150 L/acre"], hi: ["प्रति एकड़ 100–150 लीटर स्प्रे करें"], mr: ["प्रति एकर 100–150 L फवारणी करा"] }, cost: 80 },
    { id: 24, name: { en: "Drumstick Leaf Extract", hi: "सहजन पत्ती का अर्क", mr: "शेवग्याच्या पानांचा अर्क" }, targets: { en: ["Caterpillars", "mites"], hi: ["इल्ली", "माइट्स"], mr: ["अळ्या", "माइट्स"] }, where: { en: ["Vegetables", "pulses"], hi: ["सब्जियां", "दालें"], mr: ["भाज्या", "कडधान्ये"] }, ingredients: { en: ["2 kg drumstick leaves", "10 L water"], hi: ["2 किलो सहजन के पत्ते", "10 लीटर पानी"], mr: ["2 किलो शेवग्याची पाने", "10 L पाणी"] }, procedure: { en: ["Grind leaves, soak overnight, filter"], hi: ["पत्तों को पीसें, रात भर भिगो दें, छान लें"], mr: ["पाने वाटून रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 60 },
    { id: 25, name: { en: "Aloe-Turmeric Spray", hi: "एलो-हल्दी स्प्रे", mr: "कोरफड-हळद स्प्रे" }, targets: { en: ["Fungal infections", "mites"], hi: ["फंगल संक्रमण", "माइट्स"], mr: ["बुरशीजन्य संक्रमण", "माइट्स"] }, where: { en: ["Vegetables", "fruits"], hi: ["सब्जियां", "फल"], mr: ["भाज्या", "फळे"] }, ingredients: { en: ["1 kg aloe vera", "200 g turmeric", "5 L water"], hi: ["1 किलो एलोवेरा", "200 ग्राम हल्दी", "5 लीटर पानी"], mr: ["1 किलो कोरफड", "200 ग्रॅम हळद", "5 L पाणी"] }, procedure: { en: ["Grind aloe & turmeric, mix with water, strain"], hi: ["एलोवेरा और हल्दी को पीसें, पानी के साथ मिलाएं, छान लें"], mr: ["कोरफड आणि हळद वाटून घ्या, पाण्यात मिसळा, गाळा"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 90 },
    { id: 26, name: { en: "Rice Water Spray", hi: "चावल का पानी स्प्रे", mr: "तांदळाचे पाणी स्प्रे" }, targets: { en: ["Aphids", "mites"], hi: ["एफिड्स", "माइट्स"], mr: ["मावा", "माइट्स"] }, where: { en: ["Paddy", "vegetables"], hi: ["धान", "सब्जियां"], mr: ["भात", "भाज्या"] }, ingredients: { en: ["5 L leftover rice water", "5 L clean water"], hi: ["5 लीटर बचे हुए चावल का पानी", "5 लीटर स्वच्छ पानी"], mr: ["5 L शिल्लक तांदळाचे पाणी", "5 L स्वच्छ पाणी"] }, procedure: { en: ["Mix both waters, use fresh"], hi: ["दोनों पानी को मिलाएं, ताज़ा उपयोग करें"], mr: ["दोन्ही पाणी मिसळा, ताजे वापरा"] }, usage: { en: ["Spray within 24 hrs"], hi: ["24 घंटे के भीतर स्प्रे करें"], mr: ["24 तासांच्या आत फवारणी करा"] }, cost: 0 },
    { id: 27, name: { en: "Sugarcane Juice Spray", hi: "गन्ने का रस स्प्रे", mr: "ऊस रस स्प्रे" }, targets: { en: ["Mealybugs", "aphids"], hi: ["मीलीबग्स", "एफिड्स"], mr: ["पिठ्या ढेकूण", "मावा"] }, where: { en: ["Sugarcane", "vegetables"], hi: ["गन्ना", "सब्जियां"], mr: ["ऊस", "भाज्या"] }, ingredients: { en: ["1 L sugarcane juice", "10 L water"], hi: ["1 लीटर गन्ने का रस", "10 लीटर पानी"], mr: ["1 L ऊस रस", "10 L पाणी"] }, procedure: { en: ["Dilute juice, mix well"], hi: ["रस को पतला करें, अच्छी तरह मिलाएं"], mr: ["रस पातळ करा, चांगले मिसळा"] }, usage: { en: ["Spray fortnightly"], hi: ["हर पंद्रह दिन में स्प्रे करें"], mr: ["पंधरावड्याने फवारणी करा"] }, cost: 40 },
    { id: 28, name: { en: "Banana Stem Extract", hi: "केले का तना अर्क", mr: "केळीच्या खोडाचा अर्क" }, targets: { en: ["Caterpillars", "mites"], hi: ["इल्ली", "माइट्स"], mr: ["अळ्या", "माइट्स"] }, where: { en: ["Vegetables", "banana fields"], hi: ["सब्जियां", "केले के खेत"], mr: ["भाज्या", "केळीच्या बागा"] }, ingredients: { en: ["5 kg banana stem", "10 L water"], hi: ["5 किलो केले का तना", "10 लीटर पानी"], mr: ["5 किलो केळीचे खोड", "10 L पाणी"] }, procedure: { en: ["Chop, grind, soak overnight, strain"], hi: ["काटें, पीसें, रात भर भिगो दें, छान लें"], mr: ["चिरून, वाटून, रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray every 10 days"], hi: ["हर 10 दिन में स्प्रे करें"], mr: ["दर 10 दिवसांनी फवारणी करा"] }, cost: 20 },
    { id: 29, name: { en: "Guava Leaf Decoction", hi: "अमरूद पत्ती का काढ़ा", mr: "पेरूच्या पानांचा काढा" }, targets: { en: ["Aphids", "bacterial blight"], hi: ["एफिड्स", "जीवाणु झुलसा"], mr: ["मावा", "बॅक्टेरियल ब्लाइट"] }, where: { en: ["Vegetables", "guava"], hi: ["सब्जियां", "अमरूद"], mr: ["भाज्या", "पेरू"] }, ingredients: { en: ["2 kg guava leaves", "10 L water"], hi: ["2 किलो अमरूद के पत्ते", "10 लीटर पानी"], mr: ["2 किलो पेरूची पाने", "10 L पाणी"] }, procedure: { en: ["Boil leaves 30 min, cool, strain"], hi: ["पत्तों को 30 मिनट तक उबालें, ठंडा करें, छान लें"], mr: ["पाने 30 मिनिटे उकळा, थंड करा, गाळा"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 30 },
    { id: 30, name: { en: "Holy Basil (Tulsi) Extract", hi: "पवित्र तुलसी का अर्क", mr: "पवित्र तुळशीचा अर्क" }, targets: { en: ["Fungal infections", "aphids"], hi: ["फंगल संक्रमण", "एफिड्स"], mr: ["बुरशीजन्य संक्रमण", "मावा"] }, where: { en: ["Vegetables", "medicinal plants"], hi: ["सब्जियां", "औषधी पौधे"], mr: ["भाज्या", "औषधी वनस्पती"] }, ingredients: { en: ["1 kg tulsi leaves", "5 L water"], hi: ["1 किलो तुलसी के पत्ते", "5 लीटर पानी"], mr: ["1 किलो तुळशीची पाने", "5 L पाणी"] }, procedure: { en: ["Grind, soak overnight, strain"], hi: ["पीसें, रात भर भिगो दें, छान लें"], mr: ["वाटून, रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray every 7 days"], hi: ["हर 7 दिन में स्प्रे करें"], mr: ["दर 7 दिवसांनी फवारणी करा"] }, cost: 40 },
    { id: 31, name: { en: "Clove Oil Spray", hi: "लौंग तेल स्प्रे", mr: "लवंग तेल स्प्रे" }, targets: { en: ["Aphids", "mites"], hi: ["एफिड्स", "माइट्स"], mr: ["मावा", "माइट्स"] }, where: { en: ["Vegetables", "flowers"], hi: ["सब्जियां", "फूल"], mr: ["भाज्या", "फुले"] }, ingredients: { en: ["50 ml clove oil", "10 L water", "20 ml soap"], hi: ["50 मिली लौंग का तेल", "10 लीटर पानी", "20 मिली साबुन"], mr: ["50 मिली लवंग तेल", "10 L पाणी", "20 मिली साबण"] }, procedure: { en: ["Mix soap with water, add oil slowly"], hi: ["साबुन को पानी में मिलाएं, तेल धीरे-धीरे डालें"], mr: ["साबण पाण्यात मिसळा, तेल हळूहळू घाला"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 300 },
    { id: 32, name: { en: "Curry Leaf Extract", hi: "कड़ी पत्ता अर्क", mr: "कढीपत्त्याचा अर्क" }, targets: { en: ["Caterpillars", "mites"], hi: ["इल्ली", "माइट्स"], mr: ["अळ्या", "माइट्स"] }, where: { en: ["Vegetables", "spices"], hi: ["सब्जियां", "मसाले"], mr: ["भाज्या", "मसाले"] }, ingredients: { en: ["2 kg curry leaves", "10 L water"], hi: ["2 किलो कड़ी पत्ते", "10 लीटर पानी"], mr: ["2 किलो कढीपत्ता", "10 L पाणी"] }, procedure: { en: ["Crush leaves, soak overnight, strain"], hi: ["पत्तों को कुचलें, रात भर भिगो दें, छान लें"], mr: ["पाने कुस्करून रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray every 7 days"], hi: ["हर 7 दिन में स्प्रे करें"], mr: ["दर 7 दिवसांनी फवारणी करा"] }, cost: 50 },
    { id: 33, name: { en: "Mint Leaf Spray", hi: "पुदीना पत्ती स्प्रे", mr: "पुदीन्याच्या पानांचा स्प्रे" }, targets: { en: ["Aphids", "whiteflies"], hi: ["एफिड्स", "सफेद मक्खियाँ"], mr: ["मावा", "पांढऱ्या माश्या"] }, where: { en: ["Vegetables", "herbs"], hi: ["सब्जियां", "जड़ी-बूटियाँ"], mr: ["भाज्या", "वनस्पती"] }, ingredients: { en: ["1 kg mint leaves", "5 L water"], hi: ["1 किलो पुदीने के पत्ते", "5 लीटर पानी"], mr: ["1 किलो पुदीन्याची पाने", "5 L पाणी"] }, procedure: { en: ["Crush leaves, soak overnight, strain"], hi: ["पत्तों को कुचलें, रात भर भिगो दें, छान लें"], mr: ["पाने कुस्करून रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray every 10 days"], hi: ["हर 10 दिन में स्प्रे करें"], mr: ["दर 10 दिवसांनी फवारणी करा"] }, cost: 60 },
    { id: 34, name: { en: "Fenugreek Seed Spray", hi: "मेथी बीज स्प्रे", mr: "मेथी दाणे स्प्रे" }, targets: { en: ["Powdery mildew", "aphids"], hi: ["पाउडरी फफूंदी", "एफिड्स"], mr: ["पावडरी मिल्ड्यू", "मावा"] }, where: { en: ["Vegetables", "fruits"], hi: ["सब्जियां", "फल"], mr: ["भाज्या", "फळे"] }, ingredients: { en: ["500 g fenugreek seeds", "5 L water"], hi: ["500 ग्राम मेथी के बीज", "5 लीटर पानी"], mr: ["500 ग्रॅम मेथीचे दाणे", "5 L पाणी"] }, procedure: { en: ["Soak seeds overnight, grind, dilute"], hi: ["बीजों को रात भर भिगो दें, पीसें, पतला करें"], mr: ["दाणे रात्रभर भिजवा, वाटून, पातळ करा"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 70 },
    { id: 35, name: { en: "Coriander Leaf Spray", hi: "धनिया पत्ती स्प्रे", mr: "कोथिंबीर पाला स्प्रे" }, targets: { en: ["Aphids", "mites"], hi: ["एफिड्स", "माइट्स"], mr: ["मावा", "माइट्स"] }, where: { en: ["Vegetables", "spices"], hi: ["सब्जियां", "मसाले"], mr: ["भाज्या", "मसाले"] }, ingredients: { en: ["1 kg coriander leaves", "5 L water"], hi: ["1 किलो धनिया पत्ती", "5 लीटर पानी"], mr: ["1 किलो कोथिंबीर पाला", "5 L पाणी"] }, procedure: { en: ["Grind, soak overnight, strain"], hi: ["पीसें, रात भर भिगो दें, छान लें"], mr: ["वाटून, रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 60 },
    { id: 36, name: { en: "Betel Leaf Extract", hi: "पान पत्ती अर्क", mr: "नागवेलीच्या पानांचा अर्क" }, targets: { en: ["Caterpillars", "fungal infections"], hi: ["इल्ली", "फंगल संक्रमण"], mr: ["अळ्या", "बुरशीजन्य संक्रमण"] }, where: { en: ["Vegetables", "flowers"], hi: ["सब्जियां", "फूल"], mr: ["भाज्या", "फुले"] }, ingredients: { en: ["500 g betel leaves", "5 L water"], hi: ["500 ग्राम पान के पत्ते", "5 लीटर पानी"], mr: ["500 ग्रॅम नागवेलीची पाने", "5 L पाणी"] }, procedure: { en: ["Grind leaves, soak 12 hrs, strain"], hi: ["पत्तों को पीसें, 12 घंटे भिगो दें, छान लें"], mr: ["पाने वाटून, 12 तास भिजवा, गाळा"] }, usage: { en: ["Spray every 10 days"], hi: ["हर 10 दिन में स्प्रे करें"], mr: ["दर 10 दिवसांनी फवारणी करा"] }, cost: 150 },
    { id: 37, name: { en: "Aloe-Cow Urine Mix", hi: "एलो-गोमूत्र मिश्रण", mr: "कोरफड-गोमूत्र मिश्रण" }, targets: { en: ["Fungal and bacterial diseases"], hi: ["फंगल और बैक्टीरियल रोग"], mr: ["बुरशीजन्य आणि बॅक्टेरियल रोग"] }, where: { en: ["Vegetables", "fruits"], hi: ["सब्जियां", "फल"], mr: ["भाज्या", "फळे"] }, ingredients: { en: ["1 kg aloe vera", "1 L cow urine", "5 L water"], hi: ["1 किलो एलोवेरा", "1 लीटर गाय का मूत्र", "5 लीटर पानी"], mr: ["1 किलो कोरफड", "1 L गोमूत्र", "5 L पाणी"] }, procedure: { en: ["Grind aloe, mix with cow urine and water"], hi: ["एलोवेरा को पीसें, गाय के मूत्र और पानी के साथ मिलाएं"], mr: ["कोरफड वाटून, गोमूत्र आणि पाण्यात मिसळा"] }, usage: { en: ["Spray every 7 days"], hi: ["हर 7 दिन में स्प्रे करें"], mr: ["दर 7 दिवसांनी फवारणी करा"] }, cost: 60 },
    { id: 38, name: { en: "Tamarind Leaf Extract", hi: "इमली पत्ती अर्क", mr: "चिंचेच्या पानांचा अर्क" }, targets: { en: ["Caterpillars", "aphids"], hi: ["इल्ली", "एफिड्स"], mr: ["अळ्या", "मावा"] }, where: { en: ["Vegetables", "pulses"], hi: ["सब्जियां", "दालें"], mr: ["भाज्या", "कडधान्ये"] }, ingredients: { en: ["2 kg tamarind leaves", "10 L water"], hi: ["2 किलो इमली के पत्ते", "10 लीटर पानी"], mr: ["2 किलो चिंचेची पाने", "10 L पाणी"] }, procedure: { en: ["Boil leaves 30 min, cool, strain"], hi: ["पत्तों को 30 मिनट तक उबालें, ठंडा करें, छान लें"], mr: ["पाने 30 मिनिटे उकळा, थंड करा, गाळा"] }, usage: { en: ["Spray fortnightly"], hi: ["हर पंद्रह दिन में स्प्रे करें"], mr: ["पंधरावड्याने फवारणी करा"] }, cost: 50 },
    { id: 39, name: { en: "Eucalyptus Leaf Spray", hi: "नीलगिरी पत्ती स्प्रे", mr: "निलगिरी पानांचा स्प्रे" }, targets: { en: ["Mites", "aphids"], hi: ["माइट्स", "एफिड्स"], mr: ["माइट्स", "मावा"] }, where: { en: ["Vegetables", "orchards"], hi: ["सब्जियां", "बाग"], mr: ["भाज्या", "बागा"] }, ingredients: { en: ["1 kg eucalyptus leaves", "5 L water"], hi: ["1 किलो नीलगिरी के पत्ते", "5 लीटर पानी"], mr: ["1 किलो निलगिरीची पाने", "5 L पाणी"] }, procedure: { en: ["Grind leaves, soak overnight, strain"], hi: ["पत्तों को पीसें, रात भर भिगो दें, छान लें"], mr: ["पाने वाटून, रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 80 },
    { id: 40, name: { en: "Ginger-Garlic Mix", hi: "अदरक-लहसुन मिश्रण", mr: "आले-लसूण मिश्रण" }, targets: { en: ["Fungal and bacterial spots"], hi: ["फंगल और बैक्टीरियल स्पॉट"], mr: ["बुरशीजन्य आणि बॅक्टेरियल स्पॉट्स"] }, where: { en: ["Vegetables", "fruits"], hi: ["सब्जियां", "फल"], mr: ["भाज्या", "फळे"] }, ingredients: { en: ["250 g ginger", "250 g garlic", "5 L water"], hi: ["250 ग्राम अदरक", "250 ग्राम लहसुन", "5 लीटर पानी"], mr: ["250 ग्रॅम आले", "250 ग्रॅम लसूण", "5 L पाणी"] }, procedure: { en: ["Grind, soak overnight, strain"], hi: ["पीसें, रात भर भिगो दें, छान लें"], mr: ["वाटून, रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray every 7 days"], hi: ["हर 7 दिन में स्प्रे करें"], mr: ["दर 7 दिवसांनी फवारणी करा"] }, cost: 90 },
    { id: 41, name: { en: "Ash Solution", hi: "राख का घोल", mr: "राख द्रावण" }, targets: { en: ["Aphids", "beetles"], hi: ["एफिड्स", "बीटल"], mr: ["मावा", "भुंगेरे"] }, where: { en: ["Vegetables", "cotton"], hi: ["सब्जियां", "कपास"], mr: ["भाज्या", "कापूस"] }, ingredients: { en: ["1 kg wood ash", "10 L water"], hi: ["1 किलो लकड़ी की राख", "10 लीटर पानी"], mr: ["1 किलो लाकडाची राख", "10 L पाणी"] }, procedure: { en: ["Mix ash in water, leave overnight, filter"], hi: ["राख को पानी में मिलाएं, रात भर छोड़ दें, छान लें"], mr: ["राख पाण्यात मिसळा, रात्रभर ठेवा, गाळा"] }, usage: { en: ["Spray or dust directly on plants"], hi: ["पौधों पर सीधे स्प्रे या धूल दें"], mr: ["रोपांवर थेट फवारणी किंवा धूळ टाका"] }, cost: 10 },
    { id: 42, name: { en: "Rice Husk Ash Spray", hi: "धान की भूसी की राख स्प्रे", mr: "भाताच्या तुसाची राख स्प्रे" }, targets: { en: ["Beetles", "caterpillars"], hi: ["बीटल", "इल्ली"], mr: ["भुंगेरे", "अळ्या"] }, where: { en: ["Paddy", "vegetables"], hi: ["धान", "सब्जियां"], mr: ["भात", "भाज्या"] }, ingredients: { en: ["1 kg rice husk ash", "10 L water"], hi: ["1 किलो धान की भूसी की राख", "10 लीटर पानी"], mr: ["1 किलो भाताच्या तुसाची राख", "10 L पाणी"] }, procedure: { en: ["Mix, strain before spraying"], hi: ["मिलाएं, स्प्रे करने से पहले छान लें"], mr: ["मिसळा, फवारणी करण्यापूर्वी गाळा"] }, usage: { en: ["Spray every 15 days"], hi: ["हर 15 दिन में स्प्रे करें"], mr: ["दर 15 दिवसांनी फवारणी करा"] }, cost: 5 },
    { id: 43, name: { en: "Jaggery-Trap Spray", hi: "गुड़-जाल स्प्रे", mr: "गूळ-जाळे स्प्रे" }, targets: { en: ["Fruit flies", "moths"], hi: ["फल मक्खियाँ", "पतंगे"], mr: ["फळ माश्या", "पतंग"] }, where: { en: ["Orchards", "vegetables"], hi: ["बाग", "सब्जियां"], mr: ["बागा", "भाज्या"] }, ingredients: { en: ["250 g jaggery", "5 L water"], hi: ["250 ग्राम गुड़", "5 लीटर पानी"], mr: ["250 ग्रॅम गूळ", "5 L पाणी"] }, procedure: { en: ["Dissolve jaggery in water, use in traps"], hi: ["गुड़ को पानी में घोलें, जालों में उपयोग करें"], mr: ["गूळ पाण्यात विरघळवा, जाळ्यांमध्ये वापरा"] }, usage: { en: ["Hang traps in field"], hi: ["खेत में जाल लटकाएं"], mr: ["शेतात जाळे लटकवा"] }, cost: 30 },
    { id: 44, name: { en: "Fermented Rice Wash", hi: "किण्वित चावल धोना", mr: "आंबवलेले तांदूळ धुतलेले पाणी" }, targets: { en: ["Aphids", "mites"], hi: ["एफिड्स", "माइट्स"], mr: ["मावा", "माइट्स"] }, where: { en: ["Vegetables", "fruits"], hi: ["सब्जियां", "फल"], mr: ["भाज्या", "फळे"] }, ingredients: { en: ["5 L rice wash water", "1 L cow urine"], hi: ["5 लीटर चावल धोना पानी", "1 लीटर गाय का मूत्र"], mr: ["5 L तांदूळ धुतलेले पाणी", "1 L गोमूत्र"] }, procedure: { en: ["Ferment mixture for 3 days"], hi: ["मिश्रण को 3 दिनों के लिए किण्वित करें"], mr: ["मिश्रण 3 दिवसांसाठी आंबवा"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 20 },
    { id: 45, name: { en: "Mustard Seed Extract", hi: "सरसों बीज अर्क", mr: "मोहरीचे दाणे अर्क" }, targets: { en: ["Caterpillars", "fungal spores"], hi: ["इल्ली", "फंगल बीजाणु"], mr: ["अळ्या", "बुरशीचे बीजाणू"] }, where: { en: ["Vegetables", "pulses"], hi: ["सब्जियां", "दालें"], mr: ["भाज्या", "कडधान्ये"] }, ingredients: { en: ["500 g mustard seeds", "5 L water"], hi: ["500 ग्राम सरसों के बीज", "5 लीटर पानी"], mr: ["500 ग्रॅम मोहरीचे दाणे", "5 L पाणी"] }, procedure: { en: ["Grind seeds, soak overnight, strain"], hi: ["बीजों को पीसें, रात भर भिगो दें, छान लें"], mr: ["दाणे वाटून, रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray fortnightly"], hi: ["हर पंद्रह दिन में स्प्रे करें"], mr: ["पंधरावड्याने फवारणी करा"] }, cost: 70 },
    { id: 46, name: { en: "Black Pepper Spray", hi: "काली मिर्च स्प्रे", mr: "काळी मिरी स्प्रे" }, targets: { en: ["Aphids", "mites"], hi: ["एफिड्स", "माइट्स"], mr: ["मावा", "माइट्स"] }, where: { en: ["Vegetables", "flowers"], hi: ["सब्जियां", "फूल"], mr: ["भाज्या", "फुले"] }, ingredients: { en: ["200 g black pepper", "5 L water"], hi: ["200 ग्राम काली मिर्च", "5 लीटर पानी"], mr: ["200 ग्रॅम काळी मिरी", "5 L पाणी"] }, procedure: { en: ["Grind, soak 12 hrs, strain"], hi: ["पीसें, 12 घंटे भिगो दें, छान लें"], mr: ["वाटून, 12 तास भिजवा, गाळा"] }, usage: { en: ["Spray every 10 days"], hi: ["हर 10 दिन में स्प्रे करें"], mr: ["दर 10 दिवसांनी फवारणी करा"] }, cost: 150 },
    { id: 47, name: { en: "Aloe-Neem Spray", hi: "एलो-नीम स्प्रे", mr: "कोरफड-कडुलिंब स्प्रे" }, targets: { en: ["Mites", "sucking pests"], hi: ["माइट्स", "चूसने वाले कीट"], mr: ["माइट्स", "शोषक कीटक"] }, where: { en: ["Vegetables", "fruits"], hi: ["सब्जियां", "फल"], mr: ["भाज्या", "फळे"] }, ingredients: { en: ["1 kg aloe vera", "200 ml neem oil", "5 L water"], hi: ["1 किलो एलोवेरा", "200 मिली नीम का तेल", "5 लीटर पानी"], mr: ["1 किलो कोरफड", "200 मिली कडुलिंब तेल", "5 L पाणी"] }, procedure: { en: ["Grind aloe, mix with oil and water"], hi: ["एलोवेरा को पीसें, तेल और पानी के साथ मिलाएं"], mr: ["कोरफड वाटून, तेल आणि पाण्यात मिसळा"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 120 },
    { id: 48, name: { en: "Lemon Grass Oil Spray", hi: "नींबू घास तेल स्प्रे", mr: "लेमन ग्रास तेल स्प्रे" }, targets: { en: ["Aphids", "mites"], hi: ["एफिड्स", "माइट्स"], mr: ["मावा", "माइट्स"] }, where: { en: ["Vegetables", "flowers"], hi: ["सब्जियां", "फूल"], mr: ["भाज्या", "फुले"] }, ingredients: { en: ["50 ml lemongrass oil", "10 L water", "20 ml soap solution"], hi: ["50 मिली नींबू घास का तेल", "10 लीटर पानी", "20 मिली साबुन का घोल"], mr: ["50 मिली लेमन ग्रास तेल", "10 L पाणी", "20 मिली साबण द्रावण"] }, procedure: { en: ["Mix soap with water, add oil"], hi: ["साबुन को पानी में मिलाएं, तेल डालें"], mr: ["साबण पाण्यात मिसळा, तेल घाला"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 200 },
    { id: 49, name: { en: "Aloe-Castor Oil Mix", hi: "एलो-अरंडी तेल मिश्रण", mr: "कोरफड-एरंडेल तेल मिश्रण" }, targets: { en: ["Aphids", "mites"], hi: ["एफिड्स", "माइट्स"], mr: ["मावा", "माइट्स"] }, where: { en: ["Vegetables", "fruits"], hi: ["सब्जियां", "फल"], mr: ["भाज्या", "फळे"] }, ingredients: { en: ["1 kg aloe vera", "200 ml castor oil", "5 L water"], hi: ["1 किलो एलोवेरा", "200 मिली अरंडी का तेल", "5 लीटर पानी"], mr: ["1 किलो कोरफड", "200 मिली एरंडेल तेल", "5 L पाणी"] }, procedure: { en: ["Grind aloe, mix with oil and water"], hi: ["एलोवेरा को पीसें, तेल और पानी के साथ मिलाएं"], mr: ["कोरफड वाटून, तेल आणि पाण्यात मिसळा"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 130 },
    { id: 50, name: { en: "Tamarind Seed Extract", hi: "इमली बीज अर्क", mr: "चिंचेच्या बियांचा अर्क" }, targets: { en: ["Caterpillars", "aphids"], hi: ["इल्ली", "एफिड्स"], mr: ["अळ्या", "मावा"] }, where: { en: ["Vegetables", "pulses"], hi: ["सब्जियां", "दालें"], mr: ["भाज्या", "कडधान्ये"] }, ingredients: { en: ["500 g tamarind seeds", "5 L water"], hi: ["500 ग्राम इमली के बीज", "5 लीटर पानी"], mr: ["500 ग्रॅम चिंचेच्या बिया", "5 L पाणी"] }, procedure: { en: ["Grind seeds, soak overnight, strain"], hi: ["बीजों को पीसें, रात भर भिगो दें, छान लें"], mr: ["बिया वाटून, रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray fortnightly"], hi: ["हर पंद्रह दिन में स्प्रे करें"], mr: ["पंधरावड्याने फवारणी करा"] }, cost: 60 }
];
        
// Seed data per acre for the calculator
const seedData = {
    'groundnut': { en: "Groundnut", hi: "मूंगफली", mr: "भुईमूग", amount: 80 }, // kg per acre
    'corn': { en: "Corn", hi: "मक्का", mr: "मका", amount: 20 }, // kg per acre
    'rice': { en: "Rice", hi: "चावल", mr: "भात", amount: 25 }, // kg per acre
    'wheat': { en: "Wheat", hi: "गेहूं", mr: "गहू", amount: 40 }, // kg per acre
};

// Pesticide data per acre for the calculator
const pesticideData = {
    'neem-oil': { en: "Neem Oil Emulsion", hi: "नीम तेल इमल्शन", mr: "कडुलिंब तेल इमल्शन", amount: 150 }, // L per acre
    'garlic-chilli': { en: "Garlic-Chilli Spray", hi: "लहसुन-मिर्च स्प्रे", mr: "लसूण-मिरची स्प्रे", amount: 100 }, // L per acre
    'tobacco': { en: "Tobacco Decoction", hi: "तंबाकू का काढ़ा", mr: "तंबाखूचा काढा", amount: 150 }, // L per acre
};

// This array will store the conversation history for the chatbot
let chatHistory = [];
let isWaitingForResponse = false;

// This function handles the "routing" for the different sections
function showSection(sectionId) {
    // Remove active class from all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Add active class to the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Remove active class from all nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the clicked nav link
    const activeLink = document.querySelector(`.nav-links a[data-section="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // On a mobile device, this closes the navigation menu after a link is clicked
    const navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('active')) {
        toggleNav();
    }

    // If the recipes section is activated, render the recipes with a slight delay for the animation
    if (sectionId === 'recipes-section') {
        renderRecipes(recipes);
    }
}

// Toggles the mobile navigation menu
function toggleNav() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// This function renders the recipes to the page
function renderRecipes(list) {
    const container = document.getElementById('recipe-container');
    const lang = document.getElementById('language-selector').value;
    if (!container) return;
    container.innerHTML = ''; // Clear the container first

    // If no recipes are found, display a message
    if (list.length === 0) {
        container.innerHTML = `<p class="col-span-full text-center text-gray-500 text-lg">${translations[lang].recipes_no_found}</p>`;
        return;
    }

    // Loop through each recipe and create an HTML card for it
    list.forEach((recipe, index) => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.style.animationDelay = `${index * 0.1}s`; // Staggered animation
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

// This function filters the recipes based on the search input
function filterRecipes() {
    const keyword = document.getElementById('search').value.toLowerCase();
    const lang = document.getElementById('language-selector').value;
    const filtered = recipes.filter(r => {
        const name = r.name[lang] ? r.name[lang].toLowerCase() : '';
        const targets = r.targets[lang] ? r.targets[lang].join(' ').toLowerCase() : '';
        const where = r.where[lang] ? r.where[lang].join(' ').toLowerCase() : '';
        return name.includes(keyword) || targets.includes(keyword) || where.includes(keyword);
    });
    renderRecipes(filtered);
}

// Sowing Seeds Calculator function
function calculateSeeds() {
    const landSize = parseFloat(document.getElementById('land-size-seeds').value);
    const seedType = document.getElementById('seed-type').value;
    const seedDataForType = seedData[seedType];
    const resultElement = document.getElementById('seed-result');
    const lang = document.getElementById('language-selector').value;

    // Reset animation
    resultElement.classList.remove('show');
    void resultElement.offsetWidth; // Trigger reflow
    
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
}

// Spreading Pesticides Calculator function
function calculatePesticides() {
    const landSize = parseFloat(document.getElementById('land-size-pesticide').value);
    const pesticideType = document.getElementById('pesticide-type').value;
    const pesticideDataForType = pesticideData[pesticideType];
    const resultElement = document.getElementById('pesticide-result');
    const lang = document.getElementById('language-selector').value;
    
    // Reset animation
    resultElement.classList.remove('show');
    void resultElement.offsetWidth; // Trigger reflow
    
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
}

// This function sends a message to the AI chatbot and handles the response
async function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const messages = document.getElementById('chatbot-messages');
    const typingIndicator = document.getElementById('typing-indicator');
    const userMessage = input.value.trim();
    const lang = document.getElementById('language-selector').value;

    if (!userMessage || isWaitingForResponse) return;

    // Display user message
    messages.innerHTML += `<p class="text-right text-green-700 font-semibold mb-2">${translations[lang].chatbot_user_label} ${userMessage}</p>`;
    messages.scrollTop = messages.scrollHeight;
    input.value = '';

    // Show typing indicator
    isWaitingForResponse = true;
    typingIndicator.classList.remove('hidden');

    // Add the user's message to the chat history
    chatHistory.push({ role: "user", parts: [{ text: userMessage }] });

    // Define the API payload
    const payload = { contents: chatHistory };
    const apiKey = ""; 
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    try {
        // Send the request to the Gemini API
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        // Extract the bot's response
        const botResponse = result.candidates[0].content.parts[0].text;

        // Add the bot's message to the chat history
        chatHistory.push({ role: "model", parts: [{ text: botResponse }] });

        // Display bot message
        messages.innerHTML += `<p class="text-left text-gray-500 mb-2">${translations[lang].chatbot_bot_label} ${botResponse}</p>`;
        messages.scrollTop = messages.scrollHeight;
    } catch (error) {
        console.error("Error fetching from Gemini API:", error);
        messages.innerHTML += `<p class="text-left text-red-500 italic mb-2">${translations[lang].chatbot_error}</p>`;
    } finally {
        // Hide typing indicator and enable input
        isWaitingForResponse = false;
        typingIndicator.classList.add('hidden');
        messages.scrollTop = messages.scrollHeight;
    }
}

// Initial render of the home section and setting the language
window.onload = function() {
    showSection('home-section');
    renderRecipes(recipes);
    document.getElementById('language-selector').value = currentLang;
    updateTextContent(currentLang);
};


