├── index.html
├── script.js
└── style.css


/index.html:
--------------------------------------------------------------------------------
  1 | <!DOCTYPE html>
  2 | <html lang="en">
  3 | <head>
  4 |     <meta charset="UTF-8">
  5 |     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  6 |     <title>Farming Hub</title>
  7 |     <!-- Tailwind CSS is loaded from a CDN for a modern, responsive design -->
  8 |     <script src="https://cdn.tailwindcss.com"></script>
  9 |     <!-- Link to the external stylesheet -->
 10 |     <link rel="stylesheet" href="style.css">
 11 | </head>
 12 | <body class="bg-gray-100 text-gray-800">
 13 | 
 14 |     <!-- Navigation Bar -->
 15 |     <nav class="bg-white shadow-lg sticky top-0 z-50">
 16 |         <div class="container mx-auto px-6 py-3 flex justify-between items-center flex-wrap md:flex-nowrap">
 17 |             <a href="#" class="text-3xl font-bold text-green-700 transition-colors duration-300 hover:text-green-500" onclick="showSection('home-section')">🌱 Farming Hub</a>
 18 |             
 19 |             <!-- Language Selector and Hamburger Menu -->
 20 |             <div class="flex items-center space-x-4">
 21 |                 <select id="language-selector" class="p-2 rounded-md border border-gray-300 bg-white" onchange="setLanguage(this.value)">
 22 |                     <option value="en">English</option>
 23 |                     <option value="hi">हिन्दी</option>
 24 |                     <option value="mr">मराठी</option>
 25 |                 </select>
 26 |                 <button class="md:hidden text-gray-600 focus:outline-none" onclick="toggleNav()">
 27 |                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 28 |                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
 29 |                     </svg>
 30 |                 </button>
 31 |             </div>
 32 |             
 33 |             <!-- Navigation links -->
 34 |             <div id="nav-menu" class="nav-links">
 35 |                 <a href="#" class="text-gray-600 hover:text-green-500 transition-colors duration-300 font-semibold py-2 px-4 rounded-full" data-section="home-section" data-key="nav_home" onclick="showSection('home-section')">Home</a>
 36 |                 <a href="#" class="text-gray-600 hover:text-green-500 transition-colors duration-300 font-semibold py-2 px-4 rounded-full" data-section="recipes-section" data-key="nav_recipes" onclick="showSection('recipes-section')">Recipes</a>
 37 |                 <a href="#" class="text-gray-600 hover:text-green-500 transition-colors duration-300 font-semibold py-2 px-4 rounded-full" data-section="shop-section" data-key="nav_shop" onclick="showSection('shop-section')">Shop</a>
 38 |                 <a href="#" class="text-gray-600 hover:text-green-500 transition-colors duration-300 font-semibold py-2 px-4 rounded-full" data-section="e-learning-section" data-key="nav_elearning" onclick="showSection('e-learning-section')">E-learning</a>
 39 |                 <a href="#" class="text-gray-600 hover:text-green-500 transition-colors duration-300 font-semibold py-2 px-4 rounded-full" data-section="tools-section" data-key="nav_tools" onclick="showSection('tools-section')">Tools</a>
 40 |                 <a href="#" class="text-gray-600 hover:text-green-500 transition-colors duration-300 font-semibold py-2 px-4 rounded-full" data-section="reviews-section" data-key="nav_reviews" onclick="showSection('reviews-section')">Reviews</a>
 41 |                 <a href="#" class="text-gray-600 hover:text-green-500 transition-colors duration-300 font-semibold py-2 px-4 rounded-full" data-section="chatbot-section" data-key="nav_chatbot" onclick="showSection('chatbot-section')">Chat Bot</a>
 42 |             </div>
 43 |         </div>
 44 |     </nav>
 45 | 
 46 |     <!-- Home Section with a vibrant image background -->
 47 |     <div id="home-section" class="section active text-center">
 48 |         <!-- Content container placed over the image -->
 49 |         <div class="relative z-10 bg-white bg-opacity-70 rounded-xl p-8 md:p-12 max-w-sm md:max-w-xl mx-auto shadow-lg">
 50 |             <h1 class="text-4xl md:text-5xl font-extrabold text-green-800 mb-4" data-key="home_title">Welcome to Farming Hub</h1>
 51 |             <p class="text-md md:text-lg text-gray-700" data-key="home_subtitle">Your one-stop destination for organic farming knowledge, sustainable practices, and community support.</p>
 52 |         </div>
 53 |     </div>
 54 | 
 55 |     <!-- Organic Pesticide Recipes Section (Index) -->
 56 |     <div id="recipes-section" class="section">
 57 |         <div class="container mx-auto">
 58 |             <header class="text-center py-8">
 59 |                 <h1 class="text-3xl md:text-4xl font-extrabold text-green-700 mb-2" data-key="recipes_title">Organic Pesticide Recipes</h1>
 60 |                 <p class="text-gray-600 text-sm md:text-base" data-key="recipes_subtitle">Discover natural, homemade solutions for common garden pests.</p>
 61 |             </header>
 62 |             <div class="search-box text-center mb-8">
 63 |                 <input type="text" id="search" placeholder="Search by name, target, or crop..." oninput="filterRecipes()" class="w-full max-w-lg p-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300">
 64 |             </div>
 65 |             <!-- Recipe cards grid that adjusts for different screen sizes -->
 66 |             <div id="recipe-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"></div>
 67 |         </div>
 68 |     </div>
 69 | 
 70 |     <!-- Shop Section with colorful cards -->
 71 |     <div id="shop-section" class="section">
 72 |         <div class="container mx-auto text-center py-16">
 73 |             <h1 class="text-3xl md:text-4xl font-extrabold text-green-700 mb-4" data-key="shop_title">Farming Shop</h1>
 74 |             <p class="text-gray-600 mb-8 text-sm md:text-base" data-key="shop_subtitle">Browse a selection of organic gardening tools, seeds, and supplies.</p>
 75 |             <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
 76 |                 <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
 77 |                     <img src="https://placehold.co/400x300/60a5fa/ffffff?text=Organic+Seeds" alt="Organic Seeds" class="w-full rounded-lg mb-4">
 78 |                     <h3 class="text-xl font-bold text-gray-800" data-key="shop_item1_title">Organic Seeds Pack</h3>
 79 |                     <p class="text-gray-600" data-key="shop_item1_desc">A variety of non-GMO, heirloom seeds.</p>
 80 |                     <button class="mt-4 bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-colors duration-300 btn-press" data-key="shop_button">Add to Cart</button>
 81 |                 </div>
 82 |                 <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
 83 |                     <img src="https://placehold.co/400x300/f87171/ffffff?text=Gardening+Tools" alt="Gardening Tools" class="w-full rounded-lg mb-4">
 84 |                     <h3 class="text-xl font-bold text-gray-800" data-key="shop_item2_title">Eco-Friendly Tools Set</h3>
 85 |                     <p class="text-gray-600" data-key="shop_item2_desc">Durable tools made from recycled materials.</p>
 86 |                     <button class="mt-4 bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-colors duration-300 btn-press" data-key="shop_button">Add to Cart</button>
 87 |                 </div>
 88 |                 <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
 89 |                     <img src="https://placehold.co/400x300/fbbf24/ffffff?text=Compost+Bins" alt="Compost Bins" class="w-full rounded-lg mb-4">
 90 |                     <h3 class="text-xl font-bold text-gray-800" data-key="shop_item3_title">Home Composter</h3>
 91 |                     <p class="text-gray-600" data-key="shop_item3_desc">Create your own rich, organic soil.</p>
 92 |                     <button class="mt-4 bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-colors duration-300 btn-press" data-key="shop_button">Add to Cart</button>
 93 |                 </div>
 94 |             </div>
 95 |         </div>
 96 |     </div>
 97 | 
 98 |     <!-- E-learning Section with colorful cards -->
 99 |     <div id="e-learning-section" class="section">
100 |         <div class="container mx-auto text-center py-16">
101 |             <h1 class="text-3xl md:text-4xl font-extrabold text-green-700 mb-4" data-key="elearning_title">E-learning Center</h1>
102 |             <p class="text-gray-600 mb-8 text-sm md:text-base" data-key="elearning_subtitle">Learn the fundamentals of organic farming with our video tutorials and guides.</p>
103 |             <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
104 |                 <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
105 |                     <img src="https://placehold.co/400x300/a3e635/ffffff?text=Soil+Health" alt="Soil Health" class="w-full rounded-lg mb-4">
106 |                     <h3 class="text-xl font-bold text-gray-800" data-key="elearning_item1_title">Course 1: Soil Health</h3>
107 |                     <p class="text-gray-600" data-key="elearning_item1_desc">Master the art of creating nutrient-rich soil for your plants.</p>
108 |                 </div>
109 |                 <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
110 |                     <img src="https://placehold.co/400x300/34d399/ffffff?text=Pest+Control" alt="Pest Control" class="w-full rounded-lg mb-4">
111 |                     <h3 class="text-xl font-bold text-gray-800" data-key="elearning_item2_title">Course 2: Organic Pest Control</h3>
112 |                     <p class="text-gray-600" data-key="elearning_item2_desc">Discover natural methods to protect your crops from pests.</p>
113 |                 </div>
114 |                 <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
115 |                     <img src="https://placehold.co/400x300/4ade80/ffffff?text=Harvesting" alt="Harvesting" class="w-full rounded-lg mb-4">
116 |                     <h3 class="text-xl font-bold text-gray-800" data-key="elearning_item3_title">Course 3: Sustainable Harvesting</h3>
117 |                     <p class="text-gray-600" data-key="elearning_item3_desc">Learn how to harvest your crops efficiently and sustainably.</p>
118 |                 </div>
119 |             </div>
120 |         </div>
121 |     </div>
122 | 
123 |     <!-- Tools Section -->
124 |     <div id="tools-section" class="section">
125 |         <div class="container mx-auto text-center py-16">
126 |             <h1 class="text-3xl md:text-4xl font-extrabold text-green-700 mb-4" data-key="tools_title">Farming Tools & Calculators</h1>
127 |             <p class="text-gray-600 mb-8 text-sm md:text-base" data-key="tools_subtitle">Use our interactive tools to plan your farming activities efficiently.</p>
128 |             
129 |             <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
130 |                 <!-- Sowing Seeds Calculator -->
131 |                 <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
132 |                     <h2 class="text-2xl font-bold text-green-600 mb-4" data-key="calc_seeds_title">Sowing Seeds Calculator</h2>
133 |                     <div class="space-y-4 text-left">
134 |                         <div>
135 |                             <label for="land-size-seeds" class="block text-gray-700 font-semibold mb-1" data-key="calc_seeds_label1">Land Size (in acres)</label>
136 |                             <input type="number" id="land-size-seeds" value="1" min="0.1" step="0.1" class="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500">
137 |                         </div>
138 |                         <div>
139 |                             <label for="seed-type" class="block text-gray-700 font-semibold mb-1" data-key="calc_seeds_label2">Seed Type</label>
140 |                             <select id="seed-type" class="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500">
141 |                                 <option value="groundnut" data-key="seed_type_groundnut">Groundnut</option>
142 |                                 <option value="corn" data-key="seed_type_corn">Corn</option>
143 |                                 <option value="rice" data-key="seed_type_rice">Rice</option>
144 |                                 <option value="wheat" data-key="seed_type_wheat">Wheat</option>
145 |                             </select>
146 |                         </div>
147 |                         <button onclick="calculateSeeds()" class="w-full bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-colors duration-300 btn-press" data-key="calc_seeds_button">Calculate Seeds</button>
148 |                     </div>
149 |                     <div id="seed-result" class="mt-4 p-4 bg-green-50 rounded-lg text-green-800 font-medium hidden"></div>
150 |                 </div>
151 | 
152 |                 <!-- Spreading Pesticides Calculator -->
153 |                 <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
154 |                     <h2 class="text-2xl font-bold text-green-600 mb-4" data-key="calc_pesticides_title">Pesticides Spreading Calculator</h2>
155 |                     <div class="space-y-4 text-left">
156 |                         <div>
157 |                             <label for="land-size-pesticide" class="block text-gray-700 font-semibold mb-1" data-key="calc_pesticides_label1">Land Size (in acres)</label>
158 |                             <input type="number" id="land-size-pesticide" value="1" min="0.1" step="0.1" class="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500">
159 |                         </div>
160 |                         <div>
161 |                             <label for="pesticide-type" class="block text-gray-700 font-semibold mb-1" data-key="calc_pesticides_label2">Pesticide Type</label>
162 |                             <select id="pesticide-type" class="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500">
163 |                                 <option value="neem-oil" data-key="pesticide_type_neem">Neem Oil Emulsion</option>
164 |                                 <option value="garlic-chilli" data-key="pesticide_type_garlic">Garlic-Chilli Spray</option>
165 |                                 <option value="tobacco" data-key="pesticide_type_tobacco">Tobacco Decoction</option>
166 |                             </select>
167 |                         </div>
168 |                         <button onclick="calculatePesticides()" class="w-full bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-colors duration-300 btn-press" data-key="calc_pesticides_button">Calculate Pesticides</button>
169 |                     </div>
170 |                     <div id="pesticide-result" class="mt-4 p-4 bg-green-50 rounded-lg text-green-800 font-medium hidden"></div>
171 |                 </div>
172 |             </div>
173 |         </div>
174 |     </div>
175 | 
176 |     <!-- Reviews/Feedback Section -->
177 |     <div id="reviews-section" class="section">
178 |         <div class="container mx-auto py-16">
179 |             <h1 class="text-3xl md:text-4xl font-extrabold text-center text-green-700 mb-8" data-key="reviews_title">Customer Reviews</h1>
180 |             <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
181 |                 <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
182 |                     <p class="text-gray-600 italic mb-4" data-key="review1_text">"The Neem Oil Emulsion recipe saved my tomato plants! Simple and effective. Highly recommend this site."</p>
183 |                     <p class="font-semibold">- Jane Doe</p>
184 |                 </div>
185 |                 <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
186 |                     <p class="text-gray-600 italic mb-4" data-key="review2_text">"I love the range of recipes and the clear instructions. The Ginger-Garlic mix is my new go-to for fungal spots."</p>
187 |                     <p class="font-semibold">- John Smith</p>
188 |                 </div>
189 |             </div>
190 |         </div>
191 |     </div>
192 | 
193 |     <!-- Chat Bot Section -->
194 |     <div id="chatbot-section" class="section">
195 |         <div class="container mx-auto text-center py-16">
196 |             <h1 class="text-3xl md:text-4xl font-extrabold text-green-700 mb-4" data-key="chatbot_title">Farming Assistant Chat Bot</h1>
197 |             <p class="text-gray-600 mb-8 text-sm md:text-base" data-key="chatbot_subtitle">Ask our AI assistant for advice on pests, recipes, or general farming tips.</p>
198 |             <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-xl">
199 |                 <div id="chatbot-messages" class="h-64 overflow-y-auto mb-4 border rounded-lg p-4 bg-gray-50">
200 |                     <p class="text-left text-gray-500" data-key="chatbot_initial_msg">Hello! I'm your farming assistant. How can I help you today?</p>
201 |                 </div>
202 |                 <!-- Chatbot 'is typing' indicator -->
203 |                 <div id="typing-indicator" class="text-left text-gray-400 italic hidden">
204 |                     <span class="animate-pulse" data-key="chatbot_typing">Bot is typing...</span>
205 |                 </div>
206 |                 <div class="flex mt-4">
207 |                     <input type="text" id="chatbot-input" placeholder="Type your question here..." class="flex-grow p-3 rounded-l-full border border-gray-300 focus:outline-none">
208 |                     <button onclick="sendMessage()" class="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-colors duration-300 btn-press" data-key="chatbot_send_btn">Send</button>
209 |                 </div>
210 |             </div>
211 |         </div>
212 |     </div>
213 | 
214 |     <footer class="bg-gray-800 text-white text-center py-6">
215 |         <p data-key="footer_text">© 2025 Farming Hub. All rights reserved. Made by Saksham Bhor | Email: <a href="mailto:sakshambhor@gmail.com" class="text-green-400 hover:text-green-300 transition-colors duration-300">sakshambhor@gmail.com</a></p>
216 |     </footer>
217 | 
218 |     <!-- Link to the external JavaScript file -->
219 |     <script src="script.js"></script>
220 | </body>
221 | </html>
222 | 


--------------------------------------------------------------------------------
/script.js:
--------------------------------------------------------------------------------
  1 | const translations = {
  2 |     en: {
  3 |         // Navigation
  4 |         nav_home: "Home",
  5 |         nav_recipes: "Recipes",
  6 |         nav_shop: "Shop",
  7 |         nav_elearning: "E-learning",
  8 |         nav_tools: "Tools",
  9 |         nav_reviews: "Reviews",
 10 |         nav_chatbot: "Chat Bot",
 11 |         
 12 |         // Home Section
 13 |         home_title: "Welcome to Farming Hub",
 14 |         home_subtitle: "Your one-stop destination for organic farming knowledge, sustainable practices, and community support.",
 15 |         
 16 |         // Recipes Section
 17 |         recipes_title: "Organic Pesticide Recipes",
 18 |         recipes_subtitle: "Discover natural, homemade solutions for common garden pests.",
 19 |         recipes_search_placeholder: "Search by name, target, or crop...",
 20 |         recipes_no_found: "No recipes found. Try a different search term.",
 21 |         recipes_card_targets: "🎯 Targets:",
 22 |         recipes_card_where: "📍 Where to Use:",
 23 |         recipes_card_ingredients: "🧾 Ingredients:",
 24 |         recipes_card_procedure: "⚙️ Procedure:",
 25 |         recipes_card_usage: "💡 How to Use:",
 26 |         recipes_card_cost: "💰 Approximate Cost:",
 27 | 
 28 |         // Shop Section
 29 |         shop_title: "Farming Shop",
 30 |         shop_subtitle: "Browse a selection of organic gardening tools, seeds, and supplies.",
 31 |         shop_item1_title: "Organic Seeds Pack",
 32 |         shop_item1_desc: "A variety of non-GMO, heirloom seeds.",
 33 |         shop_item2_title: "Eco-Friendly Tools Set",
 34 |         shop_item2_desc: "Durable tools made from recycled materials.",
 35 |         shop_item3_title: "Home Composter",
 36 |         shop_item3_desc: "Create your own rich, organic soil.",
 37 |         shop_button: "Add to Cart",
 38 | 
 39 |         // E-learning Section
 40 |         elearning_title: "E-learning Center",
 41 |         elearning_subtitle: "Learn the fundamentals of organic farming with our video tutorials and guides.",
 42 |         elearning_item1_title: "Course 1: Soil Health",
 43 |         elearning_item1_desc: "Master the art of creating nutrient-rich soil for your plants.",
 44 |         elearning_item2_title: "Course 2: Organic Pest Control",
 45 |         elearning_item2_desc: "Discover natural methods to protect your crops from pests.",
 46 |         elearning_item3_title: "Course 3: Sustainable Harvesting",
 47 |         elearning_item3_desc: "Learn how to harvest your crops efficiently and sustainably.",
 48 |         
 49 |         // Tools Section
 50 |         tools_title: "Farming Tools & Calculators",
 51 |         tools_subtitle: "Use our interactive tools to plan your farming activities efficiently.",
 52 |         calc_seeds_title: "Sowing Seeds Calculator",
 53 |         calc_seeds_label1: "Land Size (in acres)",
 54 |         calc_seeds_label2: "Seed Type",
 55 |         calc_seeds_button: "Calculate Seeds",
 56 |         calc_seeds_result: (amount, type, size) => `You will need approximately <strong>${amount} kg</strong> of ${type} seeds for ${size} acres.`,
 57 |         calc_seeds_error: "Please enter a valid land size.",
 58 |         
 59 |         calc_pesticides_title: "Pesticides Spreading Calculator",
 60 |         calc_pesticides_label1: "Land Size (in acres)",
 61 |         calc_pesticides_label2: "Pesticide Type",
 62 |         calc_pesticides_button: "Calculate Pesticides",
 63 |         calc_pesticides_result: (amount, type, size) => `You will need approximately <strong>${amount} L</strong> of ${type} for ${size} acres.`,
 64 |         calc_pesticides_error: "Please enter a valid land size.",
 65 | 
 66 |         // Reviews Section
 67 |         reviews_title: "Customer Reviews",
 68 |         review1_text: `"The Neem Oil Emulsion recipe saved my tomato plants! Simple and effective. Highly recommend this site."`,
 69 |         review2_text: `"I love the range of recipes and the clear instructions. The Ginger-Garlic mix is my new go-to for fungal spots."`,
 70 | 
 71 |         // Chatbot Section
 72 |         chatbot_title: "Farming Assistant Chat Bot",
 73 |         chatbot_subtitle: "Ask our AI assistant for advice on pests, recipes, or general farming tips.",
 74 |         chatbot_initial_msg: "Hello! I'm your farming assistant. How can I help you today?",
 75 |         chatbot_typing: "Bot is typing...",
 76 |         chatbot_send_btn: "Send",
 77 |         chatbot_user_label: "You:",
 78 |         chatbot_bot_label: "Bot:",
 79 |         chatbot_placeholder: "Type your question here...",
 80 |         chatbot_static_response: `I'm an AI assistant. I can't generate new content right now, but I can help you search the recipes. Try searching for "aphids" or "fungal" in the recipes section!`,
 81 |         chatbot_error: "Error: Failed to get response. Please try again.",
 82 | 
 83 |         // Footer
 84 |         footer_text: "© 2025 Farming Hub. All rights reserved. Made by Saksham Bhor | Email:",
 85 |     },
 86 |     hi: {
 87 |         // Navigation
 88 |         nav_home: "होम",
 89 |         nav_recipes: "रेसिपी",
 90 |         nav_shop: "दुकान",
 91 |         nav_elearning: "ई-लर्निंग",
 92 |         nav_tools: "टूल",
 93 |         nav_reviews: "रिव्यू",
 94 |         nav_chatbot: "चैट बॉट",
 95 | 
 96 |         // Home Section
 97 |         home_title: "फ़ार्मिंग हब में आपका स्वागत है",
 98 |         home_subtitle: "जैविक खेती के ज्ञान, टिकाऊ प्रथाओं और सामुदायिक सहायता के लिए आपका वन-स्टॉप डेस्टिनेशन।",
 99 | 
100 |         // Recipes Section
101 |         recipes_title: "जैविक कीटनाशक रेसिपी",
102 |         recipes_subtitle: "आम बगीचे के कीटों के लिए प्राकृतिक, घर पर बने समाधानों की खोज करें।",
103 |         recipes_search_placeholder: "नाम, लक्ष्य या फसल के अनुसार खोजें...",
104 |         recipes_no_found: "कोई रेसिपी नहीं मिली। एक अलग खोज शब्द का प्रयास करें।",
105 |         recipes_card_targets: "🎯 लक्ष्य:",
106 |         recipes_card_where: "📍 कहाँ उपयोग करें:",
107 |         recipes_card_ingredients: "🧾 सामग्री:",
108 |         recipes_card_procedure: "⚙️ प्रक्रिया:",
109 |         recipes_card_usage: "💡 उपयोग कैसे करें:",
110 |         recipes_card_cost: "💰 अनुमानित लागत:",
111 |         
112 |         // Shop Section
113 |         shop_title: "खेती की दुकान",
114 |         shop_subtitle: "जैविक बागवानी उपकरण, बीज और आपूर्ति के चयन को ब्राउज़ करें।",
115 |         shop_item1_title: "जैविक बीज पैक",
116 |         shop_item1_desc: "गैर-जीएमओ, विरासत बीजों की एक किस्म।",
117 |         shop_item2_title: "पर्यावरण-अनुकूल उपकरण सेट",
118 |         shop_item2_desc: "पुनर्नवीनीकरण सामग्री से बने टिकाऊ उपकरण।",
119 |         shop_item3_title: "घर का कंपोस्टर",
120 |         shop_item3_desc: "अपनी खुद की समृद्ध, जैविक मिट्टी बनाएं।",
121 |         shop_button: "कार्ट में जोड़ें",
122 | 
123 |         // E-learning Section
124 |         elearning_title: "ई-लर्निंग सेंटर",
125 |         elearning_subtitle: "हमारे वीडियो ट्यूटोरियल और गाइड के साथ जैविक खेती की मूल बातें जानें।",
126 |         elearning_item1_title: "पाठ्यक्रम 1: मिट्टी का स्वास्थ्य",
127 |         elearning_item1_desc: "अपने पौधों के लिए पोषक तत्वों से भरपूर मिट्टी बनाने की कला में महारत हासिल करें।",
128 |         elearning_item2_title: "पाठ्यक्रम 2: जैविक कीट नियंत्रण",
129 |         elearning_item2_desc: "अपनी फसलों को कीटों से बचाने के लिए प्राकृतिक तरीकों की खोज करें।",
130 |         elearning_item3_title: "पाठ्यक्रम 3: टिकाऊ कटाई",
131 |         elearning_item3_desc: "अपनी फसलों की कुशलतापूर्वक और टिकाऊ तरीके से कटाई करना सीखें।",
132 | 
133 |         // Tools Section
134 |         tools_title: "खेती के उपकरण और कैलकुलेटर",
135 |         tools_subtitle: "अपनी खेती की गतिविधियों को कुशलतापूर्वक योजना बनाने के लिए हमारे इंटरैक्टिव टूल का उपयोग करें।",
136 |         calc_seeds_title: "बीज बोने का कैलकुलेटर",
137 |         calc_seeds_label1: "भूमि का आकार (एकड़ में)",
138 |         calc_seeds_label2: "बीज का प्रकार",
139 |         calc_seeds_button: "बीज की गणना करें",
140 |         calc_seeds_result: (amount, type, size) => `${size} एकड़ के लिए आपको लगभग <strong>${amount} किलो</strong> ${type} बीज की आवश्यकता होगी।`,
141 |         calc_seeds_error: "कृपया एक वैध भूमि का आकार दर्ज करें।",
142 | 
143 |         calc_pesticides_title: "कीटनाशक फैलाने वाला कैलकुलेटर",
144 |         calc_pesticides_label1: "भूमि का आकार (एकड़ में)",
145 |         calc_pesticides_label2: "कीटनाशक का प्रकार",
146 |         calc_pesticides_button: "कीटनाशकों की गणना करें",
147 |         calc_pesticides_result: (amount, type, size) => `${size} एकड़ के लिए आपको लगभग <strong>${amount} L</strong> ${type} की आवश्यकता होगी।`,
148 |         calc_pesticides_error: "कृपया एक वैध भूमि का आकार दर्ज करें।",
149 | 
150 |         // Reviews Section
151 |         reviews_title: "ग्राहक समीक्षाएं",
152 |         review1_text: `"नीम तेल इमल्शन रेसिपी ने मेरे टमाटर के पौधों को बचा लिया! सरल और प्रभावी। इस साइट की अत्यधिक अनुशंसा करता हूं।"`,
153 |         review2_text: `"मुझे व्यंजनों की रेंज और स्पष्ट निर्देश पसंद हैं। अदरक-लहसुन का मिश्रण फंगल धब्बों के लिए मेरा नया उपाय है।"`,
154 | 
155 |         // Chatbot Section
156 |         chatbot_title: "खेती सहायक चैट बॉट",
157 |         chatbot_subtitle: "कीटों, व्यंजनों या सामान्य खेती युक्तियों पर हमारे एआई सहायक से सलाह लें।",
158 |         chatbot_initial_msg: "नमस्ते! मैं आपका खेती सहायक हूँ। मैं आज आपकी क्या मदद कर सकता हूँ?",
159 |         chatbot_typing: "बॉट टाइप कर रहा है...",
160 |         chatbot_send_btn: "भेजें",
161 |         chatbot_user_label: "आप:",
162 |         chatbot_bot_label: "बॉट:",
163 |         chatbot_placeholder: "यहां अपना प्रश्न टाइप करें...",
164 |         chatbot_static_response: "मैं एक AI सहायक हूँ। मैं अभी नई सामग्री नहीं बना सकता, लेकिन मैं व्यंजनों को खोजने में आपकी मदद कर सकता हूँ। रेसिपी अनुभाग में 'एफिड्स' या 'फंगल' खोजें!",
165 |         chatbot_error: "त्रुटि: प्रतिक्रिया प्राप्त करने में विफल। कृपया पुन: प्रयास करें।",
166 | 
167 |         // Footer
168 |         footer_text: "© 2025 फार्मिंग हब। सर्वाधिकार सुरक्षित। द्वारा बनाया गया: Saksham Bhor | ईमेल:",
169 |     },
170 |     mr: {
171 |         // Navigation
172 |         nav_home: "होम",
173 |         nav_recipes: "रेसिपी",
174 |         nav_shop: "दुकान",
175 |         nav_elearning: "ई-लर्निंग",
176 |         nav_tools: "साधने",
177 |         nav_reviews: "पुनरावलोकने",
178 |         nav_chatbot: "चॅट बॉट",
179 | 
180 |         // Home Section
181 |         home_title: "फार्मिंग हबमध्ये आपले स्वागत आहे",
182 |         home_subtitle: "सेंद्रिय शेतीचे ज्ञान, शाश्वत पद्धती आणि सामुदायिक समर्थनासाठी तुमचे वन-स्टॉप डेस्टिनेशन.",
183 | 
184 |         // Recipes Section
185 |         recipes_title: "सेंद्रिय कीटकनाशक रेसिपी",
186 |         recipes_subtitle: "सामान्य बागेतील कीटकांवर नैसर्गिक, घरगुती उपाय शोधा.",
187 |         recipes_search_placeholder: "नाव, लक्ष्य किंवा पिकानुसार शोधा...",
188 |         recipes_no_found: "कोणत्याही रेसिपी सापडल्या नाहीत. वेगळा शोध शब्द वापरून पहा.",
189 |         recipes_card_targets: "🎯 लक्ष्य:",
190 |         recipes_card_where: "📍 कुठे वापरावे:",
191 |         recipes_card_ingredients: "🧾 साहित्य:",
192 |         recipes_card_procedure: "⚙️ प्रक्रिया:",
193 |         recipes_card_usage: "💡 कसे वापरावे:",
194 |         recipes_card_cost: "💰 अंदाजे खर्च:",
195 | 
196 |         // Shop Section
197 |         shop_title: "शेत दुकान",
198 |         shop_subtitle: "सेंद्रिय बागकाम साधने, बियाणे आणि पुरवठा यांचा संग्रह पहा.",
199 |         shop_item1_title: "सेंद्रिय बियाणे पॅक",
200 |         shop_item1_desc: "विविध प्रकारचे गैर-जीएमओ, वारसा बियाणे.",
201 |         shop_item2_title: "पर्यावरण-अनुकूल साधनांचा संच",
202 |         shop_item2_desc: "पुनर्वापर केलेल्या सामग्रीपासून बनवलेली टिकाऊ साधने.",
203 |         shop_item3_title: "घरगुती कंपोस्टर",
204 |         shop_item3_desc: "तुमची स्वतःची समृद्ध, सेंद्रिय माती तयार करा.",
205 |         shop_button: "कार्टमध्ये जोडा",
206 | 
207 |         // E-learning Section
208 |         elearning_title: "ई-लर्निंग केंद्र",
209 |         elearning_subtitle: "आमच्या व्हिडिओ ट्यूटोरियल आणि मार्गदर्शकांसह सेंद्रिय शेतीची मूलतत्त्वे शिका.",
210 |         elearning_item1_title: "पाठ्यक्रम 1: मातीचे आरोग्य",
211 |         elearning_item1_desc: "तुमच्या रोपांसाठी पोषक तत्वांनी समृद्ध माती तयार करण्याची कला आत्मसात करा.",
212 |         elearning_item2_title: "पाठ्यक्रम 2: सेंद्रिय कीटक नियंत्रण",
213 |         elearning_item2_desc: "तुमच्या पिकांना कीटकांपासून वाचवण्यासाठी नैसर्गिक पद्धती शोधा.",
214 |         elearning_item3_title: "पाठ्यक्रम 3: शाश्वत काढणी",
215 |         elearning_item3_desc: "तुमच्या पिकांची कार्यक्षमतेने आणि शाश्वतपणे काढणी कशी करावी ते शिका.",
216 |         
217 |         // Tools Section
218 |         tools_title: "शेती साधने आणि कॅल्क्युलेटर",
219 |         tools_subtitle: "तुमच्या शेतीच्या कामांची कार्यक्षमतेने योजना करण्यासाठी आमच्या परस्परसंवादी साधनांचा वापर करा.",
220 |         calc_seeds_title: "बियाणे पेरणी कॅल्क्युलेटर",
221 |         calc_seeds_label1: "जमिनीचा आकार (एकरमध्ये)",
222 |         calc_seeds_label2: "बियाण्याचा प्रकार",
223 |         calc_seeds_button: "बियाणे मोजा",
224 |         calc_seeds_result: (amount, type, size) => `${size} एकरसाठी तुम्हाला अंदाजे <strong>${amount} किलो</strong> ${type} बियाणे लागेल.`,
225 |         calc_seeds_error: "कृपया जमिनीचा वैध आकार प्रविष्ट करा.",
226 |         
227 |         calc_pesticides_title: "कीटकनाशक फवारणी कॅल्क्युलेटर",
228 |         calc_pesticides_label1: "जमिनीचा आकार (एकरमध्ये)",
229 |         calc_pesticides_label2: "कीटकनाशक प्रकार",
230 |         calc_pesticides_button: "कीटकनाशके मोजा",
231 |         calc_pesticides_result: (amount, type, size) => `${size} एकरसाठी तुम्हाला अंदाजे <strong>${amount} L</strong> ${type} लागेल.`,
232 |         calc_pesticides_error: "कृपया जमिनीचा वैध आकार प्रविष्ट करा.",
233 | 
234 |         // Reviews Section
235 |         reviews_title: "ग्राहक पुनरावलोकने",
236 |         review1_text: `"नीम ऑइल इमल्शन रेसिपीने माझ्या टोमॅटोच्या रोपांना वाचवले! सोपी आणि प्रभावी. मी या साइटची खूप शिफारस करतो."`,
237 |         review2_text: `"मला रेसिपींची रेंज आणि स्पष्ट सूचना आवडल्या. फंगल स्पॉट्ससाठी आले-लसूण मिश्रण माझा नवीन उपाय आहे."`,
238 | 
239 |         // Chatbot Section
240 |         chatbot_title: "शेती सहायक चॅट बॉट",
241 |         chatbot_subtitle: "कीटक, रेसिपी किंवा सामान्य शेती टिप्ससाठी आमच्या AI सहाय्याला विचारा.",
242 |         chatbot_initial_msg: "नमस्कार! मी तुमचा शेती सहायक आहे. मी आज तुम्हाला कशी मदत करू शकतो?",
243 |         chatbot_typing: "बॉट टाइप करत आहे...",
244 |         chatbot_send_btn: "पाठवा",
245 |         chatbot_user_label: "तुम्ही:",
246 |         chatbot_bot_label: "बॉट:",
247 |         chatbot_placeholder: "येथे तुमचा प्रश्न टाइप करा...",
248 |         chatbot_static_response: "मी एक AI सहायक आहे. मी आत्ता नवीन सामग्री तयार करू शकत नाही, पण मी तुम्हाला रेसिपी शोधण्यात मदत करू शकतो. रेसिपी विभागात 'ऍफिड्स' किंवा 'फंगल' शोधण्याचा प्रयत्न करा!",
249 |         chatbot_error: "त्रुटी: प्रतिसाद मिळविण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा.",
250 | 
251 |         // Footer
252 |         footer_text: "© 2025 फार्मिंग हब. सर्व हक्क राखीव. बनवणारे: Saksham Bhor | ईमेल:",
253 |     },
254 | };
255 | 
256 | const currentLang = localStorage.getItem('language') || 'en';
257 | 
258 | // Function to update the UI text based on the selected language
259 | function updateTextContent(lang) {
260 |     // Update static text using data-key attributes
261 |     document.querySelectorAll('[data-key]').forEach(element => {
262 |         const key = element.getAttribute('data-key');
263 |         if (translations[lang] && translations[lang][key]) {
264 |             element.innerHTML = translations[lang][key];
265 |         }
266 |     });
267 | 
268 |     // Update placeholders
269 |     const searchInput = document.getElementById('search');
270 |     if (searchInput) {
271 |         searchInput.placeholder = translations[lang].recipes_search_placeholder;
272 |     }
273 |     const chatbotInput = document.getElementById('chatbot-input');
274 |     if (chatbotInput) {
275 |         chatbotInput.placeholder = translations[lang].chatbot_placeholder;
276 |     }
277 | 
278 |     // Re-render dynamic content (recipes and calculator results)
279 |     renderRecipes(recipes);
280 | }
281 | 
282 | // Sets the language and updates the UI
283 | function setLanguage(lang) {
284 |     localStorage.setItem('language', lang);
285 |     updateTextContent(lang);
286 | }
287 | 
288 | // Data for the recipes
289 | const recipes = [
290 |     { id: 1, name: { en: "Neem Seed Kernel Extract (NSKE)", hi: "नीम बीज कर्नेल एक्सट्रैक्ट (NSKE)", mr: "कडुलिंबाच्या बियांचा अर्क (NSKE)" }, targets: { en: ["Caterpillars", "aphids", "whiteflies", "thrips"], hi: ["इल्ली", "एफिड्स", "सफेद मक्खियाँ", "थ्रिप्स"], mr: ["अळ्या", "मावा", "पांढऱ्या माश्या", "थ्रिप्स"] }, where: { en: ["Vegetables", "pulses", "cotton", "paddy"], hi: ["सब्जियां", "दालें", "कपास", "धान"], mr: ["भाज्या", "कडधान्ये", "कापूस", "भात"] }, ingredients: { en: ["5 kg neem seeds (kernels)", "10 L clean water"], hi: ["5 किलो नीम के बीज (गुठली)", "10 लीटर स्वच्छ पानी"], mr: ["5 किलो कडुलिंबाच्या बिया (गर्भा)", "10 L स्वच्छ पाणी"] }, procedure: { en: ["Remove shells from neem seeds", "Grind kernels into fine powder", "Soak powder in 10 L water overnight", "Strain through cloth before spraying"], hi: ["नीम के बीजों से छिलके निकालें", "गुठली को बारीक पाउडर में पीस लें", "पाउडर को रात भर 10 लीटर पानी में भिगो दें", "स्प्रे करने से पहले कपड़े से छान लें"], mr: ["कडुलिंबाच्या बियांमधून कवच काढा", "गर बारीक पावडरमध्ये वाटून घ्या", "पावडर रात्रभर 10 L पाण्यात भिजवा", "फवारणी करण्यापूर्वी कपड्याने गाळा"] }, usage: { en: ["Spray 150–200 L per acre on both sides of leaves every 7–10 days in morning/evening"], hi: ["पत्तियों के दोनों तरफ सुबह/शाम में हर 7-10 दिन में प्रति एकड़ 150-200 लीटर स्प्रे करें"], mr: ["दर 7-10 दिवसांनी सकाळी/संध्याकाळी पानांच्या दोन्ही बाजूंवर प्रति एकर 150-200 L फवारणी करा"] }, cost: 250 },
291 |     { id: 2, name: { en: "Neem Oil Emulsion", hi: "नीम तेल इमल्शन", mr: "कडुलिंब तेल इमल्शन" }, targets: { en: ["Sucking pests", "fungal spots"], hi: ["चूसने वाले कीट", "फंगल स्पॉट"], mr: ["शोषक कीटक", "बुरशीचे डाग"] }, where: { en: ["Vegetables", "fruits", "field crops"], hi: ["सब्जियां", "फल", "खेत की फसलें"], mr: ["भाज्या", "फळे", "शेतातील पिके"] }, ingredients: { en: ["200 ml neem oil", "20 ml mild liquid soap", "10 L clean water"], hi: ["200 मिली नीम का तेल", "20 मिली हल्का तरल साबुन", "10 लीटर स्वच्छ पानी"], mr: ["200 मिली कडुलिंब तेल", "20 मिली सौम्य द्रव साबण", "10 L स्वच्छ पाणी"] }, procedure: { en: ["Mix soap with water until well blended", "Slowly add neem oil while stirring", "Mix until fully emulsified"], hi: ["साबुन को पानी में अच्छी तरह मिलाएं", "धीरे-धीरे नीम का तेल मिलाते हुए हिलाएं", "पूरी तरह से इमल्सीफाइड होने तक मिलाएं"], mr: ["साबण पाण्यात चांगले मिसळेपर्यंत मिसळा", "ढवळत असताना हळूहळू कडुलिंब तेल घाला", "पूर्णपणे इमल्सीफाइड होईपर्यंत मिसळा"] }, usage: { en: ["Spray evenly on both sides of leaves, 150–200 L spray mix per acre weekly"], hi: ["पत्तियों के दोनों तरफ समान रूप से स्प्रे करें, प्रति एकड़ 150-200 लीटर स्प्रे मिक्स साप्ताहिक"], mr: ["पानांच्या दोन्ही बाजूंवर समान रीतीने फवारणी करा, प्रति एकर 150-200 L स्प्रे मिश्रण साप्ताहिक"] }, cost: 180 },
292 |     { id: 3, name: { en: "Garlic-Chilli Spray", hi: "लहसुन-मिर्च स्प्रे", mr: "लसूण-मिरची स्प्रे" }, targets: { en: ["Aphids", "mealybugs", "mites"], hi: ["एफिड्स", "मीलीबग्स", "माइट्स"], mr: ["मावा", "पिठ्या ढेकूण", "माइट्स"] }, where: { en: ["Vegetables", "pulses", "ornamental plants"], hi: ["सब्जियां", "दालें", "सजावटी पौधे"], mr: ["भाज्या", "कडधान्ये", "शोभेची झाडे"] }, ingredients: { en: ["250 g garlic", "250 g green chillies", "5 L water", "20 ml soap solution"], hi: ["250 ग्राम लहसुन", "250 ग्राम हरी मिर्च", "5 लीटर पानी", "20 मिली साबुन का घोल"], mr: ["250 ग्रॅम लसूण", "250 ग्रॅम हिरवी मिरची", "5 L पाणी", "20 मिली साबण द्रावण"] }, procedure: { en: ["Grind garlic and chillies into paste", "Soak paste in 5 L water overnight", "Filter and mix soap before spraying"], hi: ["लहसुन और मिर्च को पीसकर पेस्ट बना लें", "पेस्ट को रात भर 5 लीटर पानी में भिगो दें", "स्प्रे करने से पहले छानकर साबुन मिला लें"], mr: ["लसूण आणि मिरच्या वाटून पेस्ट करा", "पेस्ट रात्रभर 5 L पाण्यात भिजवा", "फवारणी करण्यापूर्वी गाळून त्यात साबण मिसळा"] }, usage: { en: ["Spray 50–100 ml per liter of water, once every week"], hi: ["प्रति लीटर पानी में 50-100 मिली स्प्रे करें, सप्ताह में एक बार"], mr: ["प्रत्येक आठवड्यातून एकदा, प्रति लिटर पाण्यात 50-100 मिली फवारणी करा"] }, cost: 120 },
293 |     { id: 4, name: { en: "Tobacco Decoction", hi: "तंबाकू का काढ़ा", mr: "तंबाखूचा काढा" }, targets: { en: ["Leaf-eating caterpillars", "mites"], hi: ["पत्ता खाने वाली इल्ली", "माइट्स"], mr: ["पाने खाणाऱ्या अळ्या", "माइट्स"] }, where: { en: ["Cotton", "vegetables", "tobacco fields"], hi: ["कपास", "सब्जियां", "तंबाकू के खेत"], mr: ["कापूस", "भाज्या", "तंबाखूचे शेत"] }, ingredients: { en: ["500 g dried tobacco leaves", "10 L water", "20 g soap powder"], hi: ["500 ग्राम सूखे तंबाकू के पत्ते", "10 लीटर पानी", "20 ग्राम साबुन पाउडर"], mr: ["500 ग्रॅम सुक्या तंबाखूची पाने", "10 L पाणी", "20 ग्रॅम साबण पावडर"] }, procedure: { en: ["Boil tobacco leaves in 5 L water for 30 min", "Cool and strain", "Dilute with 5 L water, add soap, mix well"], hi: ["तंबाकू के पत्तों को 5 लीटर पानी में 30 मिनट तक उबालें", "ठंडा करके छान लें", "5 लीटर पानी के साथ पतला करें, साबुन डालकर अच्छी तरह मिला लें"], mr: ["तंबाखूची पाने 5 L पाण्यात 30 मिनिटे उकळा", "थंड करून गाळा", "5 L पाण्यासोबत पातळ करा, साबण घालून चांगले मिसळा"] }, usage: { en: ["Spray in the evening to avoid leaf burn, once every 10 days"], hi: ["पत्ती जलने से बचने के लिए शाम को स्प्रे करें, हर 10 दिन में एक बार"], mr: ["पाने जळू नयेत म्हणून संध्याकाळी फवारणी करा, दर 10 दिवसांनी एकदा"] }, cost: 150 },
294 |     { id: 5, name: { en: "Cow Urine Fungicide", hi: "गाय का मूत्र कवकनाशी", mr: "गोमूत्र बुरशीनाशक" }, targets: { en: ["Fungal diseases", "bacterial spots"], hi: ["फंगल रोग", "बैक्टीरियल स्पॉट"], mr: ["बुरशीजन्य रोग", "बॅक्टेरियल स्पॉट्स"] }, where: { en: ["All crops"], hi: ["सभी फसलें"], mr: ["सर्व पिके"] }, ingredients: { en: ["5 L cow urine", "5 L water"], hi: ["5 लीटर गाय का मूत्र", "5 लीटर पानी"], mr: ["5 L गोमूत्र", "5 L पाणी"] }, procedure: { en: ["Ferment cow urine in a closed container for 5–7 days", "Dilute with equal water before spraying"], hi: ["गाय के मूत्र को 5-7 दिनों के लिए एक बंद कंटेनर में किण्वित करें", "स्प्रे करने से पहले बराबर पानी मिलाकर पतला करें"], mr: ["गोमूत्र 5-7 दिवसांसाठी बंद भांड्यात आंबवा", "फवारणी करण्यापूर्वी समान प्रमाणात पाणी घालून पातळ करा"] }, usage: { en: ["Spray every 7–10 days during high humidity"], hi: ["अधिक नमी के दौरान हर 7-10 दिन में स्प्रे करें"], mr: ["जास्त आर्द्रतेच्या वेळी दर 7-10 दिवसांनी फवारणी करा"] }, cost: 50 },
295 |     { id: 6, name: { en: "Buttermilk Spray", hi: "छाछ स्प्रे", mr: "ताक स्प्रे" }, targets: { en: ["Powdery mildew"], hi: ["पाउडरी फफूंदी"], mr: ["पावडरी मिल्ड्यू"] }, where: { en: ["Cucurbits", "grapes", "roses"], hi: ["कद्दू वर्ग", "अंगूर", "गुलाब"], mr: ["काकडीवर्गीय", "द्राक्षे", "गुलाब"] }, ingredients: { en: ["1 L sour buttermilk", "5 L water"], hi: ["1 लीटर खट्टी छाछ", "5 लीटर पानी"], mr: ["1 L आंबट ताक", "5 L पाणी"] }, procedure: { en: ["Mix buttermilk with water", "Stir well before spraying"], hi: ["छाछ को पानी के साथ मिलाएं", "स्प्रे करने से पहले अच्छी तरह हिलाएं"], mr: ["ताक पाण्यात मिसळा", "फवारणी करण्यापूर्वी चांगले ढवळून घ्या"] }, usage: { en: ["Spray on affected leaves every 5 days until control is achieved"], hi: ["प्रभावित पत्तियों पर हर 5 दिन में स्प्रे करें जब तक नियंत्रण न हो जाए"], mr: ["नियंत्रण मिळेपर्यंत प्रत्येक 5 दिवसांनी प्रभावित पानांवर फवारणी करा"] }, cost: 40 },
296 |     { id: 7, name: { en: "Aloe Vera Extract", hi: "एलोवेरा का अर्क", mr: "कोरफड अर्क" }, targets: { en: ["Mites", "thrips"], hi: ["माइट्स", "थ्रिप्स"], mr: ["माइट्स", "थ्रिप्स"] }, where: { en: ["Chilli", "tomato", "brinjal"], hi: ["मिर्च", "टमाटर", "बैंगन"], mr: ["मिरची", "टोमॅटो", "वांगी"] }, ingredients: { en: ["1 kg aloe vera leaves", "5 L water"], hi: ["1 किलो एलोवेरा के पत्ते", "5 लीटर पानी"], mr: ["1 किलो कोरफड पाने", "5 L पाणी"] }, procedure: { en: ["Grind aloe vera leaves into paste", "Mix with water and filter"], hi: ["एलोवेरा के पत्तों को पीसकर पेस्ट बना लें", "पानी के साथ मिलाएं और छान लें"], mr: ["कोरफड पाने वाटून पेस्ट करा", "पाण्यात मिसळा आणि गाळा"] }, usage: { en: ["Spray early morning or late evening every 7 days"], hi: ["हर 7 दिन में सुबह या देर शाम स्प्रे करें"], mr: ["दर 7 दिवसांनी सकाळी किंवा संध्याकाळी उशिरा फवारणी करा"] }, cost: 80 },
297 |     { id: 8, name: { en: "Asafoetida Solution", hi: "हींग का घोल", mr: "हिंग द्रावण" }, targets: { en: ["Termites", "soil grubs"], hi: ["दीमक", "मिट्टी के कीड़े"], mr: ["वाळवी", "मातीतील अळ्या"] }, where: { en: ["Sugarcane", "groundnut", "turmeric"], hi: ["गन्ना", "मूंगफली", "हल्दी"], mr: ["ऊस", "भुईमूग", "हळद"] }, ingredients: { en: ["50 g asafoetida", "10 L water"], hi: ["50 ग्राम हींग", "10 लीटर पानी"], mr: ["50 ग्रॅम हिंग", "10 L पाणी"] }, procedure: { en: ["Dissolve asafoetida in water", "Apply to soil near roots"], hi: ["हींग को पानी में घोलें", "जड़ों के पास मिट्टी पर लगाएं"], mr: ["हिंग पाण्यात विरघळवा", "मुळांजवळ मातीवर लावा"] }, usage: { en: ["Use 1 L per plant base every 15 days"], hi: ["हर 15 दिन में प्रति पौधे की जड़ में 1 लीटर उपयोग करें"], mr: ["प्रत्येक 15 दिवसांनी प्रति रोपाच्या मुळाजवळ 1 L वापरा"] }, cost: 200 },
298 |     { id: 9, name: { en: "Pongamia Oil Spray", hi: "पोंगामिया तेल स्प्रे", mr: "पोंगॅमिया तेल स्प्रे" }, targets: { en: ["Aphids", "leaf miners"], hi: ["एफिड्स", "पत्ती खोदक"], mr: ["मावा", "लीफ माइनर"] }, where: { en: ["Vegetables", "fruits", "pulses"], hi: ["सब्जियां", "फल", "दालें"], mr: ["भाज्या", "फळे", "कडधान्ये"] }, ingredients: { en: ["200 ml pongamia oil", "20 ml soap solution", "10 L water"], hi: ["200 मिली पोंगामिया तेल", "20 मिली साबुन का घोल", "10 लीटर पानी"], mr: ["200 मिली पोंगॅमिया तेल", "20 मिली सौम्य साबण द्रावण", "10 L पाणी"] }, procedure: { en: ["Mix soap and water", "Add oil slowly while stirring"], hi: ["साबुन और पानी मिलाएं", "हिलाते हुए धीरे-धीरे तेल डालें"], mr: ["साबण आणि पाणी मिसळा", "ढवळत असताना हळूहळू तेल घाला"] }, usage: { en: ["Spray 150 L per acre every 10 days"], hi: ["प्रति एकड़ 150 लीटर स्प्रे करें हर 10 दिन में"], mr: ["दर 10 दिवसांनी प्रति एकर 150 L फवारणी करा"] }, cost: 160 },
299 |     { id: 10, name: { en: "Turmeric-Ginger Spray", hi: "हल्दी-अदरक स्प्रे", mr: "हळद-आले स्प्रे" }, targets: { en: ["Fungal infections"], hi: ["फंगल संक्रमण"], mr: ["बुरशीजन्य संक्रमण"] }, where: { en: ["Paddy", "turmeric", "vegetables"], hi: ["धान", "हल्दी", "सब्जियां"], mr: ["भात", "हळद", "भाज्या"] }, ingredients: { en: ["500 g turmeric rhizome", "500 g ginger", "10 L water"], hi: ["500 ग्राम हल्दी का कंद", "500 ग्राम अदरक", "10 लीटर पानी"], mr: ["500 ग्रॅम हळदीचा कंद", "500 ग्रॅम आले", "10 L पाणी"] }, procedure: { en: ["Grind turmeric and ginger into paste", "Boil in water for 30 minutes", "Cool, filter, and use"], hi: ["हल्दी और अदरक को पीसकर पेस्ट बना लें", "पानी में 30 मिनट तक उबालें", "ठंडा करके छान लें और उपयोग करें"], mr: ["हळद आणि आले वाटून पेस्ट करा", "30 मिनिटे पाण्यात उकळा", "थंड करा, गाळा आणि वापरा"] }, usage: { en: ["Spray weekly during rainy season"], hi: ["बरसात के मौसम में साप्ताहिक स्प्रे करें"], mr: ["पावसाळ्यात साप्ताहिक फवारणी करा"] }, cost: 140 },
300 |     { id: 11, name: { en: "Jaggery-Sulphur Solution", hi: "गुड़-सल्फर घोल", mr: "गूळ-गंधक द्रावण" }, targets: { en: ["Mites", "thrips", "powdery mildew"], hi: ["माइट्स", "थ्रिप्स", "पाउडरी फफूंदी"], mr: ["माइट्स", "थ्रिप्स", "पावडरी मिल्ड्यू"] }, where: { en: ["Grapes", "vegetables"], hi: ["अंगूर", "सब्जियां"], mr: ["द्राक्षे", "भाज्या"] }, ingredients: { en: ["1 kg jaggery", "1 kg sulphur powder", "5 L water"], hi: ["1 किलो गुड़", "1 किलो सल्फर पाउडर", "5 लीटर पानी"], mr: ["1 किलो गूळ", "1 किलो गंधक पावडर", "5 L पाणी"] }, procedure: { en: ["Mix jaggery and sulphur powder", "Add water and boil for 30 minutes", "Cool and store"], hi: ["गुड़ और सल्फर पाउडर मिलाएं", "पानी डालें और 30 मिनट तक उबालें", "ठंडा करके स्टोर करें"], mr: ["गूळ आणि गंधक पावडर मिसळा", "पाणी घालून 30 मिनिटे उकळा", "थंड करून साठवा"] }, usage: { en: ["Dilute 100 ml of solution in 10 L of water for spraying"], hi: ["स्प्रे करने के लिए 100 मिली घोल को 10 लीटर पानी में पतला करें"], mr: ["फवारणीसाठी 10 L पाण्यात 100 मिली द्रावण पातळ करा"] }, cost: 180 },
301 |     { id: 12, name: { en: "Neem Cake Soil Application", hi: "नीम केक मिट्टी में डालना", mr: "कडुलिंब केक मातीत वापरणे" }, targets: { en: ["Nematodes", "soil-borne pathogens"], hi: ["नेमाटोड", "मिट्टी से पैदा होने वाले रोगजनक"], mr: ["नेमाटोड", "मातीतून होणारे रोग"] }, where: { en: ["Horticultural crops"], hi: ["बागवानी फसलें"], mr: ["बागायती पिके"] }, ingredients: { en: ["Neem cake powder"], hi: ["नीम केक पाउडर"], mr: ["कडुलिंब केक पावडर"] }, procedure: { en: ["Mix neem cake powder with soil around the plant"], hi: ["पौधे के चारों ओर नीम केक पाउडर को मिट्टी के साथ मिलाएं"], mr: ["रोपाच्या भोवती कडुलिंब केक पावडर मातीत मिसळा"] }, usage: { en: ["Apply 200 g per plant once every 2 months"], hi: ["हर 2 महीने में प्रति पौधे 200 ग्राम लगाएं"], mr: ["प्रत्येक 2 महिन्यांनी प्रति रोपासाठी 200 ग्रॅम लावा"] }, cost: 100 },
302 |     { id: 13, name: { en: "Fermented Rice Water Spray", hi: "किण्वित चावल का पानी स्प्रे", mr: "आंबवलेले तांदळाचे पाणी स्प्रे" }, targets: { en: ["Fungal diseases"], hi: ["फंगल रोग"], mr: ["बुरशीजन्य रोग"] }, where: { en: ["Paddy", "garden plants"], hi: ["धान", "बगीचे के पौधे"], mr: ["भात", "बागेतील झाडे"] }, ingredients: { en: ["Rice water (after washing rice)", "1 L water"], hi: ["चावल का पानी (चावल धोने के बाद)", "1 लीटर पानी"], mr: ["तांदळाचे पाणी (तांदूळ धुतल्यानंतर)", "1 L पाणी"] }, procedure: { en: ["Let rice water ferment for 3-4 days", "Dilute with 1 L of clean water"], hi: ["चावल के पानी को 3-4 दिनों के लिए किण्वित होने दें", "1 लीटर साफ पानी के साथ पतला करें"], mr: ["तांदळाचे पाणी 3-4 दिवस आंबवा", "1 L स्वच्छ पाण्यासोबत पातळ करा"] }, usage: { en: ["Spray on leaves every week to prevent fungal growth"], hi: ["फंगल वृद्धि को रोकने के लिए हर हफ्ते पत्तियों पर स्प्रे करें"], mr: ["बुरशीची वाढ रोखण्यासाठी प्रत्येक आठवड्यात पानांवर फवारणी करा"] }, cost: 10 },
303 |     { id: 14, name: { en: "Eucalyptus Oil Spray", hi: "नीलगिरी तेल स्प्रे", mr: "निलगिरी तेल स्प्रे" }, targets: { en: ["Caterpillars", "aphids"], hi: ["इल्ली", "एफिड्स"], mr: ["अळ्या", "मावा"] }, where: { en: ["Ornamental plants"], hi: ["सजावटी पौधे"], mr: ["शोभेची झाडे"] }, ingredients: { en: ["10-15 drops eucalyptus oil", "1 tsp soap", "1 L water"], hi: ["10-15 बूंद नीलगिरी का तेल", "1 चम्मच साबुन", "1 लीटर पानी"], mr: ["10-15 थेंब निलगिरी तेल", "1 चमचा साबण", "1 L पाणी"] }, procedure: { en: ["Mix soap and water", "Add eucalyptus oil and shake well"], hi: ["साबुन और पानी मिलाएं", "नीलगिरी का तेल डालें और अच्छी तरह हिलाएं"], mr: ["साबण आणि पाणी मिसळा", "निलगिरी तेल घालून चांगले हलवा"] }, usage: { en: ["Spray on plants weekly, avoid direct sun"], hi: ["पौधों पर साप्ताहिक स्प्रे करें, सीधे धूप से बचें"], mr: ["दर आठवड्यात रोपांवर फवारणी करा, थेट सूर्यप्रकाशात टाळा"] }, cost: 60 },
304 |     { id: 15, name: { en: "Chilli-Kerosene Spray", hi: "मिर्च-केरोसिन स्प्रे", mr: "मिरची-रॉकेल स्प्रे" }, targets: { en: ["Caterpillars", "beetles"], hi: ["इल्ली", "बीटल"], mr: ["अळ्या", "भुंगेरे"] }, where: { en: ["Cotton", "brinjal", "chilli"], hi: ["कपास", "बैंगन", "मिर्च"], mr: ["कापूस", "वांगी", "मिरची"] }, ingredients: { en: ["500 g red chillies", "200 ml kerosene", "10 L water"], hi: ["500 ग्राम लाल मिर्च", "200 मिली केरोसिन", "10 लीटर पानी"], mr: ["500 ग्रॅम लाल मिरच्या", "200 मिली रॉकेल", "10 L पाणी"] }, procedure: { en: ["Grind chillies, soak in kerosene for 24 hrs", "Dilute with water before spraying"], hi: ["मिर्च को पीसें, 24 घंटे के लिए केरोसिन में भिगो दें", "स्प्रे करने से पहले पानी के साथ पतला करें"], mr: ["मिरच्या वाटून 24 तास रॉकेलमध्‍ये भिजवा", "फवारणी करण्यापूर्वी पाण्यासोबत पातळ करा"] }, usage: { en: ["Spray in evening to prevent leaf scorch"], hi: ["पत्ती जलने से बचाने के लिए शाम को स्प्रे करें"], mr: ["पाने जळू नयेत म्हणून संध्याकाळी फवारणी करा"] }, cost: 170 },
305 |     { id: 16, name: { en: "Onion-Garlic Extract", hi: "प्याज-लहसुन का अर्क", mr: "कांदा-लसूण अर्क" }, targets: { en: ["Aphids", "thrips", "mites"], hi: ["एफिड्स", "थ्रिप्स", "माइट्स"], mr: ["मावा", "थ्रिप्स", "माइट्स"] }, where: { en: ["Vegetables", "flowers"], hi: ["सब्जियां", "फूल"], mr: ["भाज्या", "फुले"] }, ingredients: { en: ["500 g onion", "500 g garlic", "10 L water"], hi: ["500 ग्राम प्याज", "500 ग्राम लहसुन", "10 लीटर पानी"], mr: ["500 ग्रॅम कांदा", "500 ग्रॅम लसूण", "10 L पाणी"] }, procedure: { en: ["Grind onion & garlic, soak in water overnight", "Filter before use"], hi: ["प्याज और लहसुन को पीसें, रात भर पानी में भिगो दें", "उपयोग से पहले छान लें"], mr: ["कांदा आणि लसूण वाटून रात्रभर पाण्यात भिजवा", "वापरण्यापूर्वी गाळा"] }, usage: { en: ["Spray weekly for pest prevention"], hi: ["कीटों से बचाव के लिए साप्ताहिक स्प्रे करें"], mr: ["कीटक प्रतिबंधासाठी साप्ताहिक फवारणी करा"] }, cost: 130 },
306 |     { id: 17, name: { en: "Lantana Leaf Extract", hi: "लंटाना पत्ती का अर्क", mr: "लंटाना पानांचा अर्क" }, targets: { en: ["Caterpillars", "leaf miners"], hi: ["इल्ली", "पत्ती खोदक"], mr: ["अळ्या", "लीफ माइनर"] }, where: { en: ["Paddy", "vegetables"], hi: ["धान", "सब्जियां"], mr: ["भात", "भाज्या"] }, ingredients: { en: ["2 kg lantana leaves", "10 L water"], hi: ["2 किलो लंटाना के पत्ते", "10 लीटर पानी"], mr: ["2 किलो लंटाना पाने", "10 L पाणी"] }, procedure: { en: ["Crush leaves, soak overnight, strain"], hi: ["पत्तों को कुचलें, रात भर भिगो दें, छान लें"], mr: ["पाने कुस्करून रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray 100–150 L/acre every 7 days"], hi: ["हर 7 दिन में प्रति एकड़ 100–150 लीटर स्प्रे करें"], mr: ["दर 7 दिवसांनी प्रति एकर 100–150 L फवारणी करा"] }, cost: 50 },
307 |     { id: 18, name: { en: "Calotropis Leaf Decoction", hi: "कैलोट्रोपिस पत्ती का काढ़ा", mr: "रुईच्या पानांचा काढा" }, targets: { en: ["Aphids", "mealybugs"], hi: ["एफिड्स", "मीलीबग्स"], mr: ["मावा", "पिठ्या ढेकूण"] }, where: { en: ["Cotton", "pulses"], hi: ["कपास", "दालें"], mr: ["कापूस", "कडधान्ये"] }, ingredients: { en: ["2 kg calotropis leaves", "10 L water"], hi: ["2 किलो कैलोट्रोपिस के पत्ते", "10 लीटर पानी"], mr: ["2 किलो रुईची पाने", "10 L पाणी"] }, procedure: { en: ["Boil leaves in water for 30 min, cool, strain"], hi: ["पत्तों को पानी में 30 मिनट तक उबालें, ठंडा करें, छान लें"], mr: ["पाणी 30 मिनिटे उकळा, थंड करा, गाळा"] }, usage: { en: ["Spray 10% solution on crops"], hi: ["फसलों पर 10% घोल स्प्रे करें"], mr: ["पिकांवर 10% द्रावण फवारणी करा"] }, cost: 60 },
308 |     { id: 19, name: { en: "Lemon Peel Extract", hi: "नींबू के छिलके का अर्क", mr: "लिंबाच्या सालीचा अर्क" }, targets: { en: ["Ants", "aphids", "fungal spores"], hi: ["चींटियाँ", "एफिड्स", "फंगल बीजाणु"], mr: ["मुंग्या", "मावा", "बुरशीचे बीजाणू"] }, where: { en: ["Vegetables", "fruit trees"], hi: ["सब्जियां", "फलों के पेड़"], mr: ["भाज्या", "फळांची झाडे"] }, ingredients: { en: ["Peels from 2 kg lemons", "10 L water"], hi: ["2 किलो नींबू के छिलके", "10 लीटर पानी"], mr: ["2 किलो लिंबाच्या साली", "10 L पाणी"] }, procedure: { en: ["Boil peels in water 30 min, cool, strain"], hi: ["छिलके को पानी में 30 मिनट तक उबालें, ठंडा करें, छान लें"], mr: ["साली 30 मिनिटे पाण्यात उकळा, थंड करा, गाळा"] }, usage: { en: ["Spray fortnightly"], hi: ["हर पंद्रह दिन में स्प्रे करें"], mr: ["पंधरावड्याने फवारणी करा"] }, cost: 40 },
309 |     { id: 20, name: { en: "Papaya Leaf Extract", hi: "पपीते की पत्ती का अर्क", mr: "पपईच्या पानांचा अर्क" }, targets: { en: ["Mites", "leaf curl virus carriers"], hi: ["माइट्स", "पत्ती कर्ल वायरस वाहक"], mr: ["माइट्स", "लीफ कर्ल व्हायरस वाहक"] }, where: { en: ["Chilli", "tomato", "okra"], hi: ["मिर्च", "टमाटर", "भिंडी"], mr: ["मिरची", "टोमॅटो", "भेंडी"] }, ingredients: { en: ["1 kg papaya leaves", "5 L water"], hi: ["1 किलो पपीते के पत्ते", "5 लीटर पानी"], mr: ["1 किलो पपईची पाने", "5 L पाणी"] }, procedure: { en: ["Grind leaves, soak overnight, filter"], hi: ["पत्तों को पीसें, रात भर भिगो दें, छान लें"], mr: ["पाने वाटून रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray every 10 days"], hi: ["हर 10 दिन में स्प्रे करें"], mr: ["दर 10 दिवसांनी फवारणी करा"] }, cost: 30 },
310 |     { id: 21, name: { en: "Custard Apple Seed Extract", hi: "सीताफल बीज अर्क", mr: "सीताफळ बियांचा अर्क" }, targets: { en: ["Leaf miners", "aphids"], hi: ["पत्ती खोदक", "एफिड्स"], mr: ["लीफ माइनर", "मावा"] }, where: { en: ["Vegetables", "fruits"], hi: ["सब्जियां", "फल"], mr: ["भाज्या", "फळे"] }, ingredients: { en: ["1 kg custard apple seeds", "5 L water"], hi: ["1 किलो सीताफल के बीज", "5 लीटर पानी"], mr: ["1 किलो सीताफळाच्या बिया", "5 L पाणी"] }, procedure: { en: ["Grind seeds, soak overnight, strain"], hi: ["बीजों को पीसें, रात भर भिगो दें, छान लें"], mr: ["बिया वाटून रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray 5% solution weekly"], hi: ["5% घोल साप्ताहिक स्प्रे करें"], mr: ["5% द्रावण साप्ताहिक फवारणी करा"] }, cost: 100 },
311 |     { id: 22, name: { en: "Bitter Gourd Leaf Extract", hi: "करेला पत्ती का अर्क", mr: "कारल्याच्या पानांचा अर्क" }, targets: { en: ["Whiteflies", "aphids"], hi: ["सफेद मक्खियाँ", "एफिड्स"], mr: ["पांढऱ्या माश्या", "मावा"] }, where: { en: ["Vegetables"], hi: ["सब्जियां"], mr: ["भाज्या"] }, ingredients: { en: ["2 kg bitter gourd leaves", "10 L water"], hi: ["2 किलो करेले के पत्ते", "10 लीटर पानी"], mr: ["2 किलो कारल्याची पाने", "10 L पाणी"] }, procedure: { en: ["Crush leaves, soak 24 hrs, strain"], hi: ["पत्तों को कुचलें, 24 घंटे भिगो दें, छान लें"], mr: ["पाने कुस्करून 24 तास भिजवा, गाळा"] }, usage: { en: ["Spray fortnightly"], hi: ["हर पंद्रह दिन में स्प्रे करें"], mr: ["पंधरावड्याने फवारणी करा"] }, cost: 50 },
312 |     { id: 23, name: { en: "Marigold Flower Extract", hi: "गेंदा फूल अर्क", mr: "झेंडू फुलांचा अर्क" }, targets: { en: ["Nematodes", "whiteflies"], hi: ["नेमाटोड", "सफेद मक्खियाँ"], mr: ["नेमाटोड", "पांढऱ्या माश्या"] }, where: { en: ["Vegetables", "pulses"], hi: ["सब्जियां", "दालें"], mr: ["भाज्या", "कडधान्ये"] }, ingredients: { en: ["2 kg marigold flowers", "10 L water"], hi: ["2 किलो गेंदा फूल", "10 लीटर पानी"], mr: ["2 किलो झेंडूची फुले", "10 L पाणी"] }, procedure: { en: ["Boil flowers 30 min, cool, strain"], hi: ["फूलों को 30 मिनट तक उबालें, ठंडा करें, छान लें"], mr: ["फुले 30 मिनिटे उकळा, थंड करा, गाळा"] }, usage: { en: ["Spray 100–150 L/acre"], hi: ["प्रति एकड़ 100–150 लीटर स्प्रे करें"], mr: ["प्रति एकर 100–150 L फवारणी करा"] }, cost: 80 },
313 |     { id: 24, name: { en: "Drumstick Leaf Extract", hi: "सहजन पत्ती का अर्क", mr: "शेवग्याच्या पानांचा अर्क" }, targets: { en: ["Caterpillars", "mites"], hi: ["इल्ली", "माइट्स"], mr: ["अळ्या", "माइट्स"] }, where: { en: ["Vegetables", "pulses"], hi: ["सब्जियां", "दालें"], mr: ["भाज्या", "कडधान्ये"] }, ingredients: { en: ["2 kg drumstick leaves", "10 L water"], hi: ["2 किलो सहजन के पत्ते", "10 लीटर पानी"], mr: ["2 किलो शेवग्याची पाने", "10 L पाणी"] }, procedure: { en: ["Grind leaves, soak overnight, filter"], hi: ["पत्तों को पीसें, रात भर भिगो दें, छान लें"], mr: ["पाने वाटून रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 60 },
314 |     { id: 25, name: { en: "Aloe-Turmeric Spray", hi: "एलो-हल्दी स्प्रे", mr: "कोरफड-हळद स्प्रे" }, targets: { en: ["Fungal infections", "mites"], hi: ["फंगल संक्रमण", "माइट्स"], mr: ["बुरशीजन्य संक्रमण", "माइट्स"] }, where: { en: ["Vegetables", "fruits"], hi: ["सब्जियां", "फल"], mr: ["भाज्या", "फळे"] }, ingredients: { en: ["1 kg aloe vera", "200 g turmeric", "5 L water"], hi: ["1 किलो एलोवेरा", "200 ग्राम हल्दी", "5 लीटर पानी"], mr: ["1 किलो कोरफड", "200 ग्रॅम हळद", "5 L पाणी"] }, procedure: { en: ["Grind aloe & turmeric, mix with water, strain"], hi: ["एलोवेरा और हल्दी को पीसें, पानी के साथ मिलाएं, छान लें"], mr: ["कोरफड आणि हळद वाटून घ्या, पाण्यात मिसळा, गाळा"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 90 },
315 |     { id: 26, name: { en: "Rice Water Spray", hi: "चावल का पानी स्प्रे", mr: "तांदळाचे पाणी स्प्रे" }, targets: { en: ["Aphids", "mites"], hi: ["एफिड्स", "माइट्स"], mr: ["मावा", "माइट्स"] }, where: { en: ["Paddy", "vegetables"], hi: ["धान", "सब्जियां"], mr: ["भात", "भाज्या"] }, ingredients: { en: ["5 L leftover rice water", "5 L clean water"], hi: ["5 लीटर बचे हुए चावल का पानी", "5 लीटर स्वच्छ पानी"], mr: ["5 L शिल्लक तांदळाचे पाणी", "5 L स्वच्छ पाणी"] }, procedure: { en: ["Mix both waters, use fresh"], hi: ["दोनों पानी को मिलाएं, ताज़ा उपयोग करें"], mr: ["दोन्ही पाणी मिसळा, ताजे वापरा"] }, usage: { en: ["Spray within 24 hrs"], hi: ["24 घंटे के भीतर स्प्रे करें"], mr: ["24 तासांच्या आत फवारणी करा"] }, cost: 0 },
316 |     { id: 27, name: { en: "Sugarcane Juice Spray", hi: "गन्ने का रस स्प्रे", mr: "ऊस रस स्प्रे" }, targets: { en: ["Mealybugs", "aphids"], hi: ["मीलीबग्स", "एफिड्स"], mr: ["पिठ्या ढेकूण", "मावा"] }, where: { en: ["Sugarcane", "vegetables"], hi: ["गन्ना", "सब्जियां"], mr: ["ऊस", "भाज्या"] }, ingredients: { en: ["1 L sugarcane juice", "10 L water"], hi: ["1 लीटर गन्ने का रस", "10 लीटर पानी"], mr: ["1 L ऊस रस", "10 L पाणी"] }, procedure: { en: ["Dilute juice, mix well"], hi: ["रस को पतला करें, अच्छी तरह मिलाएं"], mr: ["रस पातळ करा, चांगले मिसळा"] }, usage: { en: ["Spray fortnightly"], hi: ["हर पंद्रह दिन में स्प्रे करें"], mr: ["पंधरावड्याने फवारणी करा"] }, cost: 40 },
317 |     { id: 28, name: { en: "Banana Stem Extract", hi: "केले का तना अर्क", mr: "केळीच्या खोडाचा अर्क" }, targets: { en: ["Caterpillars", "mites"], hi: ["इल्ली", "माइट्स"], mr: ["अळ्या", "माइट्स"] }, where: { en: ["Vegetables", "banana fields"], hi: ["सब्जियां", "केले के खेत"], mr: ["भाज्या", "केळीच्या बागा"] }, ingredients: { en: ["5 kg banana stem", "10 L water"], hi: ["5 किलो केले का तना", "10 लीटर पानी"], mr: ["5 किलो केळीचे खोड", "10 L पाणी"] }, procedure: { en: ["Chop, grind, soak overnight, strain"], hi: ["काटें, पीसें, रात भर भिगो दें, छान लें"], mr: ["चिरून, वाटून, रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray every 10 days"], hi: ["हर 10 दिन में स्प्रे करें"], mr: ["दर 10 दिवसांनी फवारणी करा"] }, cost: 20 },
318 |     { id: 29, name: { en: "Guava Leaf Decoction", hi: "अमरूद पत्ती का काढ़ा", mr: "पेरूच्या पानांचा काढा" }, targets: { en: ["Aphids", "bacterial blight"], hi: ["एफिड्स", "जीवाणु झुलसा"], mr: ["मावा", "बॅक्टेरियल ब्लाइट"] }, where: { en: ["Vegetables", "guava"], hi: ["सब्जियां", "अमरूद"], mr: ["भाज्या", "पेरू"] }, ingredients: { en: ["2 kg guava leaves", "10 L water"], hi: ["2 किलो अमरूद के पत्ते", "10 लीटर पानी"], mr: ["2 किलो पेरूची पाने", "10 L पाणी"] }, procedure: { en: ["Boil leaves 30 min, cool, strain"], hi: ["पत्तों को 30 मिनट तक उबालें, ठंडा करें, छान लें"], mr: ["पाने 30 मिनिटे उकळा, थंड करा, गाळा"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 30 },
319 |     { id: 30, name: { en: "Holy Basil (Tulsi) Extract", hi: "पवित्र तुलसी का अर्क", mr: "पवित्र तुळशीचा अर्क" }, targets: { en: ["Fungal infections", "aphids"], hi: ["फंगल संक्रमण", "एफिड्स"], mr: ["बुरशीजन्य संक्रमण", "मावा"] }, where: { en: ["Vegetables", "medicinal plants"], hi: ["सब्जियां", "औषधी पौधे"], mr: ["भाज्या", "औषधी वनस्पती"] }, ingredients: { en: ["1 kg tulsi leaves", "5 L water"], hi: ["1 किलो तुलसी के पत्ते", "5 लीटर पानी"], mr: ["1 किलो तुळशीची पाने", "5 L पाणी"] }, procedure: { en: ["Grind, soak overnight, strain"], hi: ["पीसें, रात भर भिगो दें, छान लें"], mr: ["वाटून, रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray every 7 days"], hi: ["हर 7 दिन में स्प्रे करें"], mr: ["दर 7 दिवसांनी फवारणी करा"] }, cost: 40 },
320 |     { id: 31, name: { en: "Clove Oil Spray", hi: "लौंग तेल स्प्रे", mr: "लवंग तेल स्प्रे" }, targets: { en: ["Aphids", "mites"], hi: ["एफिड्स", "माइट्स"], mr: ["मावा", "माइट्स"] }, where: { en: ["Vegetables", "flowers"], hi: ["सब्जियां", "फूल"], mr: ["भाज्या", "फुले"] }, ingredients: { en: ["50 ml clove oil", "10 L water", "20 ml soap"], hi: ["50 मिली लौंग का तेल", "10 लीटर पानी", "20 मिली साबुन"], mr: ["50 मिली लवंग तेल", "10 L पाणी", "20 मिली साबण"] }, procedure: { en: ["Mix soap with water, add oil slowly"], hi: ["साबुन को पानी में मिलाएं, तेल धीरे-धीरे डालें"], mr: ["साबण पाण्यात मिसळा, तेल हळूहळू घाला"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 300 },
321 |     { id: 32, name: { en: "Curry Leaf Extract", hi: "कड़ी पत्ता अर्क", mr: "कढीपत्त्याचा अर्क" }, targets: { en: ["Caterpillars", "mites"], hi: ["इल्ली", "माइट्स"], mr: ["अळ्या", "माइट्स"] }, where: { en: ["Vegetables", "spices"], hi: ["सब्जियां", "मसाले"], mr: ["भाज्या", "मसाले"] }, ingredients: { en: ["2 kg curry leaves", "10 L water"], hi: ["2 किलो कड़ी पत्ते", "10 लीटर पानी"], mr: ["2 किलो कढीपत्ता", "10 L पाणी"] }, procedure: { en: ["Crush leaves, soak overnight, strain"], hi: ["पत्तों को कुचलें, रात भर भिगो दें, छान लें"], mr: ["पाने कुस्करून रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray every 7 days"], hi: ["हर 7 दिन में स्प्रे करें"], mr: ["दर 7 दिवसांनी फवारणी करा"] }, cost: 50 },
322 |     { id: 33, name: { en: "Mint Leaf Spray", hi: "पुदीना पत्ती स्प्रे", mr: "पुदीन्याच्या पानांचा स्प्रे" }, targets: { en: ["Aphids", "whiteflies"], hi: ["एफिड्स", "सफेद मक्खियाँ"], mr: ["मावा", "पांढऱ्या माश्या"] }, where: { en: ["Vegetables", "herbs"], hi: ["सब्जियां", "जड़ी-बूटियाँ"], mr: ["भाज्या", "वनस्पती"] }, ingredients: { en: ["1 kg mint leaves", "5 L water"], hi: ["1 किलो पुदीने के पत्ते", "5 लीटर पानी"], mr: ["1 किलो पुदीन्याची पाने", "5 L पाणी"] }, procedure: { en: ["Crush leaves, soak overnight, strain"], hi: ["पत्तों को कुचलें, रात भर भिगो दें, छान लें"], mr: ["पाने कुस्करून रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray every 10 days"], hi: ["हर 10 दिन में स्प्रे करें"], mr: ["दर 10 दिवसांनी फवारणी करा"] }, cost: 60 },
323 |     { id: 34, name: { en: "Fenugreek Seed Spray", hi: "मेथी बीज स्प्रे", mr: "मेथी दाणे स्प्रे" }, targets: { en: ["Powdery mildew", "aphids"], hi: ["पाउडरी फफूंदी", "एफिड्स"], mr: ["पावडरी मिल्ड्यू", "मावा"] }, where: { en: ["Vegetables", "fruits"], hi: ["सब्जियां", "फल"], mr: ["भाज्या", "फळे"] }, ingredients: { en: ["500 g fenugreek seeds", "5 L water"], hi: ["500 ग्राम मेथी के बीज", "5 लीटर पानी"], mr: ["500 ग्रॅम मेथीचे दाणे", "5 L पाणी"] }, procedure: { en: ["Soak seeds overnight, grind, dilute"], hi: ["बीजों को रात भर भिगो दें, पीसें, पतला करें"], mr: ["दाणे रात्रभर भिजवा, वाटून, पातळ करा"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 70 },
324 |     { id: 35, name: { en: "Coriander Leaf Spray", hi: "धनिया पत्ती स्प्रे", mr: "कोथिंबीर पाला स्प्रे" }, targets: { en: ["Aphids", "mites"], hi: ["एफिड्स", "माइट्स"], mr: ["मावा", "माइट्स"] }, where: { en: ["Vegetables", "spices"], hi: ["सब्जियां", "मसाले"], mr: ["भाज्या", "मसाले"] }, ingredients: { en: ["1 kg coriander leaves", "5 L water"], hi: ["1 किलो धनिया पत्ती", "5 लीटर पानी"], mr: ["1 किलो कोथिंबीर पाला", "5 L पाणी"] }, procedure: { en: ["Grind, soak overnight, strain"], hi: ["पीसें, रात भर भिगो दें, छान लें"], mr: ["वाटून, रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 60 },
325 |     { id: 36, name: { en: "Betel Leaf Extract", hi: "पान पत्ती अर्क", mr: "नागवेलीच्या पानांचा अर्क" }, targets: { en: ["Caterpillars", "fungal infections"], hi: ["इल्ली", "फंगल संक्रमण"], mr: ["अळ्या", "बुरशीजन्य संक्रमण"] }, where: { en: ["Vegetables", "flowers"], hi: ["सब्जियां", "फूल"], mr: ["भाज्या", "फुले"] }, ingredients: { en: ["500 g betel leaves", "5 L water"], hi: ["500 ग्राम पान के पत्ते", "5 लीटर पानी"], mr: ["500 ग्रॅम नागवेलीची पाने", "5 L पाणी"] }, procedure: { en: ["Grind leaves, soak 12 hrs, strain"], hi: ["पत्तों को पीसें, 12 घंटे भिगो दें, छान लें"], mr: ["पाने वाटून, 12 तास भिजवा, गाळा"] }, usage: { en: ["Spray every 10 days"], hi: ["हर 10 दिन में स्प्रे करें"], mr: ["दर 10 दिवसांनी फवारणी करा"] }, cost: 150 },
326 |     { id: 37, name: { en: "Aloe-Cow Urine Mix", hi: "एलो-गोमूत्र मिश्रण", mr: "कोरफड-गोमूत्र मिश्रण" }, targets: { en: ["Fungal and bacterial diseases"], hi: ["फंगल और बैक्टीरियल रोग"], mr: ["बुरशीजन्य आणि बॅक्टेरियल रोग"] }, where: { en: ["Vegetables", "fruits"], hi: ["सब्जियां", "फल"], mr: ["भाज्या", "फळे"] }, ingredients: { en: ["1 kg aloe vera", "1 L cow urine", "5 L water"], hi: ["1 किलो एलोवेरा", "1 लीटर गाय का मूत्र", "5 लीटर पानी"], mr: ["1 किलो कोरफड", "1 L गोमूत्र", "5 L पाणी"] }, procedure: { en: ["Grind aloe, mix with cow urine and water"], hi: ["एलोवेरा को पीसें, गाय के मूत्र और पानी के साथ मिलाएं"], mr: ["कोरफड वाटून, गोमूत्र आणि पाण्यात मिसळा"] }, usage: { en: ["Spray every 7 days"], hi: ["हर 7 दिन में स्प्रे करें"], mr: ["दर 7 दिवसांनी फवारणी करा"] }, cost: 60 },
327 |     { id: 38, name: { en: "Tamarind Leaf Extract", hi: "इमली पत्ती अर्क", mr: "चिंचेच्या पानांचा अर्क" }, targets: { en: ["Caterpillars", "aphids"], hi: ["इल्ली", "एफिड्स"], mr: ["अळ्या", "मावा"] }, where: { en: ["Vegetables", "pulses"], hi: ["सब्जियां", "दालें"], mr: ["भाज्या", "कडधान्ये"] }, ingredients: { en: ["2 kg tamarind leaves", "10 L water"], hi: ["2 किलो इमली के पत्ते", "10 लीटर पानी"], mr: ["2 किलो चिंचेची पाने", "10 L पाणी"] }, procedure: { en: ["Boil leaves 30 min, cool, strain"], hi: ["पत्तों को 30 मिनट तक उबालें, ठंडा करें, छान लें"], mr: ["पाने 30 मिनिटे उकळा, थंड करा, गाळा"] }, usage: { en: ["Spray fortnightly"], hi: ["हर पंद्रह दिन में स्प्रे करें"], mr: ["पंधरावड्याने फवारणी करा"] }, cost: 50 },
328 |     { id: 39, name: { en: "Eucalyptus Leaf Spray", hi: "नीलगिरी पत्ती स्प्रे", mr: "निलगिरी पानांचा स्प्रे" }, targets: { en: ["Mites", "aphids"], hi: ["माइट्स", "एफिड्स"], mr: ["माइट्स", "मावा"] }, where: { en: ["Vegetables", "orchards"], hi: ["सब्जियां", "बाग"], mr: ["भाज्या", "बागा"] }, ingredients: { en: ["1 kg eucalyptus leaves", "5 L water"], hi: ["1 किलो नीलगिरी के पत्ते", "5 लीटर पानी"], mr: ["1 किलो निलगिरीची पाने", "5 L पाणी"] }, procedure: { en: ["Grind leaves, soak overnight, strain"], hi: ["पत्तों को पीसें, रात भर भिगो दें, छान लें"], mr: ["पाने वाटून, रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 80 },
329 |     { id: 40, name: { en: "Ginger-Garlic Mix", hi: "अदरक-लहसुन मिश्रण", mr: "आले-लसूण मिश्रण" }, targets: { en: ["Fungal and bacterial spots"], hi: ["फंगल और बैक्टीरियल स्पॉट"], mr: ["बुरशीजन्य आणि बॅक्टेरियल स्पॉट्स"] }, where: { en: ["Vegetables", "fruits"], hi: ["सब्जियां", "फल"], mr: ["भाज्या", "फळे"] }, ingredients: { en: ["250 g ginger", "250 g garlic", "5 L water"], hi: ["250 ग्राम अदरक", "250 ग्राम लहसुन", "5 लीटर पानी"], mr: ["250 ग्रॅम आले", "250 ग्रॅम लसूण", "5 L पाणी"] }, procedure: { en: ["Grind, soak overnight, strain"], hi: ["पीसें, रात भर भिगो दें, छान लें"], mr: ["वाटून, रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray every 7 days"], hi: ["हर 7 दिन में स्प्रे करें"], mr: ["दर 7 दिवसांनी फवारणी करा"] }, cost: 90 },
330 |     { id: 41, name: { en: "Ash Solution", hi: "राख का घोल", mr: "राख द्रावण" }, targets: { en: ["Aphids", "beetles"], hi: ["एफिड्स", "बीटल"], mr: ["मावा", "भुंगेरे"] }, where: { en: ["Vegetables", "cotton"], hi: ["सब्जियां", "कपास"], mr: ["भाज्या", "कापूस"] }, ingredients: { en: ["1 kg wood ash", "10 L water"], hi: ["1 किलो लकड़ी की राख", "10 लीटर पानी"], mr: ["1 किलो लाकडाची राख", "10 L पाणी"] }, procedure: { en: ["Mix ash in water, leave overnight, filter"], hi: ["राख को पानी में मिलाएं, रात भर छोड़ दें, छान लें"], mr: ["राख पाण्यात मिसळा, रात्रभर ठेवा, गाळा"] }, usage: { en: ["Spray or dust directly on plants"], hi: ["पौधों पर सीधे स्प्रे या धूल दें"], mr: ["रोपांवर थेट फवारणी किंवा धूळ टाका"] }, cost: 10 },
331 |     { id: 42, name: { en: "Rice Husk Ash Spray", hi: "धान की भूसी की राख स्प्रे", mr: "भाताच्या तुसाची राख स्प्रे" }, targets: { en: ["Beetles", "caterpillars"], hi: ["बीटल", "इल्ली"], mr: ["भुंगेरे", "अळ्या"] }, where: { en: ["Paddy", "vegetables"], hi: ["धान", "सब्जियां"], mr: ["भात", "भाज्या"] }, ingredients: { en: ["1 kg rice husk ash", "10 L water"], hi: ["1 किलो धान की भूसी की राख", "10 लीटर पानी"], mr: ["1 किलो भाताच्या तुसाची राख", "10 L पाणी"] }, procedure: { en: ["Mix, strain before spraying"], hi: ["मिलाएं, स्प्रे करने से पहले छान लें"], mr: ["मिसळा, फवारणी करण्यापूर्वी गाळा"] }, usage: { en: ["Spray every 15 days"], hi: ["हर 15 दिन में स्प्रे करें"], mr: ["दर 15 दिवसांनी फवारणी करा"] }, cost: 5 },
332 |     { id: 43, name: { en: "Jaggery-Trap Spray", hi: "गुड़-जाल स्प्रे", mr: "गूळ-जाळे स्प्रे" }, targets: { en: ["Fruit flies", "moths"], hi: ["फल मक्खियाँ", "पतंगे"], mr: ["फळ माश्या", "पतंग"] }, where: { en: ["Orchards", "vegetables"], hi: ["बाग", "सब्जियां"], mr: ["बागा", "भाज्या"] }, ingredients: { en: ["250 g jaggery", "5 L water"], hi: ["250 ग्राम गुड़", "5 लीटर पानी"], mr: ["250 ग्रॅम गूळ", "5 L पाणी"] }, procedure: { en: ["Dissolve jaggery in water, use in traps"], hi: ["गुड़ को पानी में घोलें, जालों में उपयोग करें"], mr: ["गूळ पाण्यात विरघळवा, जाळ्यांमध्ये वापरा"] }, usage: { en: ["Hang traps in field"], hi: ["खेत में जाल लटकाएं"], mr: ["शेतात जाळे लटकवा"] }, cost: 30 },
333 |     { id: 44, name: { en: "Fermented Rice Wash", hi: "किण्वित चावल धोना", mr: "आंबवलेले तांदूळ धुतलेले पाणी" }, targets: { en: ["Aphids", "mites"], hi: ["एफिड्स", "माइट्स"], mr: ["मावा", "माइट्स"] }, where: { en: ["Vegetables", "fruits"], hi: ["सब्जियां", "फल"], mr: ["भाज्या", "फळे"] }, ingredients: { en: ["5 L rice wash water", "1 L cow urine"], hi: ["5 लीटर चावल धोना पानी", "1 लीटर गाय का मूत्र"], mr: ["5 L तांदूळ धुतलेले पाणी", "1 L गोमूत्र"] }, procedure: { en: ["Ferment mixture for 3 days"], hi: ["मिश्रण को 3 दिनों के लिए किण्वित करें"], mr: ["मिश्रण 3 दिवसांसाठी आंबवा"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 20 },
334 |     { id: 45, name: { en: "Mustard Seed Extract", hi: "सरसों बीज अर्क", mr: "मोहरीचे दाणे अर्क" }, targets: { en: ["Caterpillars", "fungal spores"], hi: ["इल्ली", "फंगल बीजाणु"], mr: ["अळ्या", "बुरशीचे बीजाणू"] }, where: { en: ["Vegetables", "pulses"], hi: ["सब्जियां", "दालें"], mr: ["भाज्या", "कडधान्ये"] }, ingredients: { en: ["500 g mustard seeds", "5 L water"], hi: ["500 ग्राम सरसों के बीज", "5 लीटर पानी"], mr: ["500 ग्रॅम मोहरीचे दाणे", "5 L पाणी"] }, procedure: { en: ["Grind seeds, soak overnight, strain"], hi: ["बीजों को पीसें, रात भर भिगो दें, छान लें"], mr: ["दाणे वाटून, रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray fortnightly"], hi: ["हर पंद्रह दिन में स्प्रे करें"], mr: ["पंधरावड्याने फवारणी करा"] }, cost: 70 },
335 |     { id: 46, name: { en: "Black Pepper Spray", hi: "काली मिर्च स्प्रे", mr: "काळी मिरी स्प्रे" }, targets: { en: ["Aphids", "mites"], hi: ["एफिड्स", "माइट्स"], mr: ["मावा", "माइट्स"] }, where: { en: ["Vegetables", "flowers"], hi: ["सब्जियां", "फूल"], mr: ["भाज्या", "फुले"] }, ingredients: { en: ["200 g black pepper", "5 L water"], hi: ["200 ग्राम काली मिर्च", "5 लीटर पानी"], mr: ["200 ग्रॅम काळी मिरी", "5 L पाणी"] }, procedure: { en: ["Grind, soak 12 hrs, strain"], hi: ["पीसें, 12 घंटे भिगो दें, छान लें"], mr: ["वाटून, 12 तास भिजवा, गाळा"] }, usage: { en: ["Spray every 10 days"], hi: ["हर 10 दिन में स्प्रे करें"], mr: ["दर 10 दिवसांनी फवारणी करा"] }, cost: 150 },
336 |     { id: 47, name: { en: "Aloe-Neem Spray", hi: "एलो-नीम स्प्रे", mr: "कोरफड-कडुलिंब स्प्रे" }, targets: { en: ["Mites", "sucking pests"], hi: ["माइट्स", "चूसने वाले कीट"], mr: ["माइट्स", "शोषक कीटक"] }, where: { en: ["Vegetables", "fruits"], hi: ["सब्जियां", "फल"], mr: ["भाज्या", "फळे"] }, ingredients: { en: ["1 kg aloe vera", "200 ml neem oil", "5 L water"], hi: ["1 किलो एलोवेरा", "200 मिली नीम का तेल", "5 लीटर पानी"], mr: ["1 किलो कोरफड", "200 मिली कडुलिंब तेल", "5 L पाणी"] }, procedure: { en: ["Grind aloe, mix with oil and water"], hi: ["एलोवेरा को पीसें, तेल और पानी के साथ मिलाएं"], mr: ["कोरफड वाटून, तेल आणि पाण्यात मिसळा"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 120 },
337 |     { id: 48, name: { en: "Lemon Grass Oil Spray", hi: "नींबू घास तेल स्प्रे", mr: "लेमन ग्रास तेल स्प्रे" }, targets: { en: ["Aphids", "mites"], hi: ["एफिड्स", "माइट्स"], mr: ["मावा", "माइट्स"] }, where: { en: ["Vegetables", "flowers"], hi: ["सब्जियां", "फूल"], mr: ["भाज्या", "फुले"] }, ingredients: { en: ["50 ml lemongrass oil", "10 L water", "20 ml soap solution"], hi: ["50 मिली नींबू घास का तेल", "10 लीटर पानी", "20 मिली साबुन का घोल"], mr: ["50 मिली लेमन ग्रास तेल", "10 L पाणी", "20 मिली साबण द्रावण"] }, procedure: { en: ["Mix soap with water, add oil"], hi: ["साबुन को पानी में मिलाएं, तेल डालें"], mr: ["साबण पाण्यात मिसळा, तेल घाला"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 200 },
338 |     { id: 49, name: { en: "Aloe-Castor Oil Mix", hi: "एलो-अरंडी तेल मिश्रण", mr: "कोरफड-एरंडेल तेल मिश्रण" }, targets: { en: ["Aphids", "mites"], hi: ["एफिड्स", "माइट्स"], mr: ["मावा", "माइट्स"] }, where: { en: ["Vegetables", "fruits"], hi: ["सब्जियां", "फल"], mr: ["भाज्या", "फळे"] }, ingredients: { en: ["1 kg aloe vera", "200 ml castor oil", "5 L water"], hi: ["1 किलो एलोवेरा", "200 मिली अरंडी का तेल", "5 लीटर पानी"], mr: ["1 किलो कोरफड", "200 मिली एरंडेल तेल", "5 L पाणी"] }, procedure: { en: ["Grind aloe, mix with oil and water"], hi: ["एलोवेरा को पीसें, तेल और पानी के साथ मिलाएं"], mr: ["कोरफड वाटून, तेल आणि पाण्यात मिसळा"] }, usage: { en: ["Spray weekly"], hi: ["साप्ताहिक स्प्रे करें"], mr: ["साप्ताहिक फवारणी करा"] }, cost: 130 },
339 |     { id: 50, name: { en: "Tamarind Seed Extract", hi: "इमली बीज अर्क", mr: "चिंचेच्या बियांचा अर्क" }, targets: { en: ["Caterpillars", "aphids"], hi: ["इल्ली", "एफिड्स"], mr: ["अळ्या", "मावा"] }, where: { en: ["Vegetables", "pulses"], hi: ["सब्जियां", "दालें"], mr: ["भाज्या", "कडधान्ये"] }, ingredients: { en: ["500 g tamarind seeds", "5 L water"], hi: ["500 ग्राम इमली के बीज", "5 लीटर पानी"], mr: ["500 ग्रॅम चिंचेच्या बिया", "5 L पाणी"] }, procedure: { en: ["Grind seeds, soak overnight, strain"], hi: ["बीजों को पीसें, रात भर भिगो दें, छान लें"], mr: ["बिया वाटून, रात्रभर भिजवा, गाळा"] }, usage: { en: ["Spray fortnightly"], hi: ["हर पंद्रह दिन में स्प्रे करें"], mr: ["पंधरावड्याने फवारणी करा"] }, cost: 60 }
340 | ];
341 |         
342 | // Seed data per acre for the calculator
343 | const seedData = {
344 |     'groundnut': { en: "Groundnut", hi: "मूंगफली", mr: "भुईमूग", amount: 80 }, // kg per acre
345 |     'corn': { en: "Corn", hi: "मक्का", mr: "मका", amount: 20 }, // kg per acre
346 |     'rice': { en: "Rice", hi: "चावल", mr: "भात", amount: 25 }, // kg per acre
347 |     'wheat': { en: "Wheat", hi: "गेहूं", mr: "गहू", amount: 40 }, // kg per acre
348 | };
349 | 
350 | // Pesticide data per acre for the calculator
351 | const pesticideData = {
352 |     'neem-oil': { en: "Neem Oil Emulsion", hi: "नीम तेल इमल्शन", mr: "कडुलिंब तेल इमल्शन", amount: 150 }, // L per acre
353 |     'garlic-chilli': { en: "Garlic-Chilli Spray", hi: "लहसुन-मिर्च स्प्रे", mr: "लसूण-मिरची स्प्रे", amount: 100 }, // L per acre
354 |     'tobacco': { en: "Tobacco Decoction", hi: "तंबाकू का काढ़ा", mr: "तंबाखूचा काढा", amount: 150 }, // L per acre
355 | };
356 | 
357 | // This array will store the conversation history for the chatbot
358 | let chatHistory = [];
359 | let isWaitingForResponse = false;
360 | 
361 | // This function handles the "routing" for the different sections
362 | function showSection(sectionId) {
363 |     // Remove active class from all sections
364 |     document.querySelectorAll('.section').forEach(section => {
365 |         section.classList.remove('active');
366 |     });
367 | 
368 |     // Add active class to the selected section
369 |     const activeSection = document.getElementById(sectionId);
370 |     if (activeSection) {
371 |         activeSection.classList.add('active');
372 |     }
373 | 
374 |     // Remove active class from all nav links
375 |     document.querySelectorAll('.nav-links a').forEach(link => {
376 |         link.classList.remove('active');
377 |     });
378 | 
379 |     // Add active class to the clicked nav link
380 |     const activeLink = document.querySelector(`.nav-links a[data-section="${sectionId}"]`);
381 |     if (activeLink) {
382 |         activeLink.classList.add('active');
383 |     }
384 |     
385 |     // On a mobile device, this closes the navigation menu after a link is clicked
386 |     const navMenu = document.getElementById('nav-menu');
387 |     if (navMenu.classList.contains('active')) {
388 |         toggleNav();
389 |     }
390 | 
391 |     // If the recipes section is activated, render the recipes with a slight delay for the animation
392 |     if (sectionId === 'recipes-section') {
393 |         renderRecipes(recipes);
394 |     }
395 | }
396 | 
397 | // Toggles the mobile navigation menu
398 | function toggleNav() {
399 |     const navMenu = document.getElementById('nav-menu');
400 |     navMenu.classList.toggle('active');
401 | }
402 | 
403 | // This function renders the recipes to the page
404 | function renderRecipes(list) {
405 |     const container = document.getElementById('recipe-container');
406 |     const lang = document.getElementById('language-selector').value;
407 |     if (!container) return;
408 |     container.innerHTML = ''; // Clear the container first
409 | 
410 |     // If no recipes are found, display a message
411 |     if (list.length === 0) {
412 |         container.innerHTML = `<p class="col-span-full text-center text-gray-500 text-lg">${translations[lang].recipes_no_found}</p>`;
413 |         return;
414 |     }
415 | 
416 |     // Loop through each recipe and create an HTML card for it
417 |     list.forEach((recipe, index) => {
418 |         const card = document.createElement('div');
419 |         card.className = 'recipe-card';
420 |         card.style.animationDelay = `${index * 0.1}s`; // Staggered animation
421 |         card.innerHTML = `
422 |             <h2 class="text-2xl font-bold text-green-600 mb-2">${recipe.name[lang]}</h2>
423 |             <p class="text-sm text-gray-500 mb-4">ID: ${recipe.id}</p>
424 |             <div class="mb-3"><strong>${translations[lang].recipes_card_targets}</strong> <span class="text-gray-700">${recipe.targets[lang].join(', ')}</span></div>
425 |             <div class="mb-3"><strong>${translations[lang].recipes_card_where}</strong> <span class="text-gray-700">${recipe.where[lang].join(', ')}</span></div>
426 |             <div class="mb-3"><strong>${translations[lang].recipes_card_ingredients}</strong>
427 |                 <ul class="list-disc list-inside mt-1">${recipe.ingredients[lang].map(i=>`<li>${i}</li>`).join('')}</ul>
428 |             </div>
429 |             <div class="mb-3"><strong>${translations[lang].recipes_card_procedure}</strong>
430 |                 <ol class="list-decimal list-inside mt-1">${recipe.procedure[lang].map(p=>`<li>${p}</li>`).join('')}</ol>
431 |             </div>
432 |             <div class="mb-3"><strong>${translations[lang].recipes_card_usage}</strong>
433 |                 <ul class="list-disc list-inside mt-1">${recipe.usage[lang].map(u=>`<li>${u}</li>`).join('')}</ul>
434 |             </div>
435 |             <div><strong>${translations[lang].recipes_card_cost}</strong> <span class="text-gray-700">₹${recipe.cost}</span></div>
436 |         `;
437 |         container.appendChild(card);
438 |     });
439 | }
440 | 
441 | // This function filters the recipes based on the search input
442 | function filterRecipes() {
443 |     const keyword = document.getElementById('search').value.toLowerCase();
444 |     const lang = document.getElementById('language-selector').value;
445 |     const filtered = recipes.filter(r => {
446 |         const name = r.name[lang] ? r.name[lang].toLowerCase() : '';
447 |         const targets = r.targets[lang] ? r.targets[lang].join(' ').toLowerCase() : '';
448 |         const where = r.where[lang] ? r.where[lang].join(' ').toLowerCase() : '';
449 |         return name.includes(keyword) || targets.includes(keyword) || where.includes(keyword);
450 |     });
451 |     renderRecipes(filtered);
452 | }
453 | 
454 | // Sowing Seeds Calculator function
455 | function calculateSeeds() {
456 |     const landSize = parseFloat(document.getElementById('land-size-seeds').value);
457 |     const seedType = document.getElementById('seed-type').value;
458 |     const seedDataForType = seedData[seedType];
459 |     const resultElement = document.getElementById('seed-result');
460 |     const lang = document.getElementById('language-selector').value;
461 | 
462 |     // Reset animation
463 |     resultElement.classList.remove('show');
464 |     void resultElement.offsetWidth; // Trigger reflow
465 |     
466 |     if (landSize && seedDataForType) {
467 |         const requiredAmount = landSize * seedDataForType.amount;
468 |         const seedName = seedDataForType[lang];
469 |         resultElement.innerHTML = translations[lang].calc_seeds_result(requiredAmount, seedName, landSize);
470 |         resultElement.classList.remove('hidden');
471 |         resultElement.classList.add('show');
472 |     } else {
473 |         resultElement.innerHTML = translations[lang].calc_seeds_error;
474 |         resultElement.classList.remove('hidden');
475 |         resultElement.classList.add('show');
476 |     }
477 | }
478 | 
479 | // Spreading Pesticides Calculator function
480 | function calculatePesticides() {
481 |     const landSize = parseFloat(document.getElementById('land-size-pesticide').value);
482 |     const pesticideType = document.getElementById('pesticide-type').value;
483 |     const pesticideDataForType = pesticideData[pesticideType];
484 |     const resultElement = document.getElementById('pesticide-result');
485 |     const lang = document.getElementById('language-selector').value;
486 |     
487 |     // Reset animation
488 |     resultElement.classList.remove('show');
489 |     void resultElement.offsetWidth; // Trigger reflow
490 |     
491 |     if (landSize && pesticideDataForType) {
492 |         const requiredAmount = landSize * pesticideDataForType.amount;
493 |         const pesticideName = pesticideDataForType[lang];
494 |         resultElement.innerHTML = translations[lang].calc_pesticides_result(requiredAmount, pesticideName, landSize);
495 |         resultElement.classList.remove('hidden');
496 |         resultElement.classList.add('show');
497 |     } else {
498 |         resultElement.innerHTML = translations[lang].calc_pesticides_error;
499 |         resultElement.classList.remove('hidden');
500 |         resultElement.classList.add('show');
501 |     }
502 | }
503 | 
504 | // This function sends a message to the AI chatbot and handles the response
505 | async function sendMessage() {
506 |     const input = document.getElementById('chatbot-input');
507 |     const messages = document.getElementById('chatbot-messages');
508 |     const typingIndicator = document.getElementById('typing-indicator');
509 |     const userMessage = input.value.trim();
510 |     const lang = document.getElementById('language-selector').value;
511 | 
512 |     if (!userMessage || isWaitingForResponse) return;
513 | 
514 |     // Display user message
515 |     messages.innerHTML += `<p class="text-right text-green-700 font-semibold mb-2">${translations[lang].chatbot_user_label} ${userMessage}</p>`;
516 |     messages.scrollTop = messages.scrollHeight;
517 |     input.value = '';
518 | 
519 |     // Show typing indicator
520 |     isWaitingForResponse = true;
521 |     typingIndicator.classList.remove('hidden');
522 | 
523 |     // Add the user's message to the chat history
524 |     chatHistory.push({ role: "user", parts: [{ text: userMessage }] });
525 | 
526 |     // Define the API payload
527 |     const payload = { contents: chatHistory };
528 |     const apiKey = ""; 
529 |     const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
530 | 
531 |     try {
532 |         // Send the request to the Gemini API
533 |         const response = await fetch(apiUrl, {
534 |             method: 'POST',
535 |             headers: { 'Content-Type': 'application/json' },
536 |             body: JSON.stringify(payload)
537 |         });
538 | 
539 |         if (!response.ok) {
540 |             throw new Error(`HTTP error! status: ${response.status}`);
541 |         }
542 | 
543 |         const result = await response.json();
544 |         
545 |         // Extract the bot's response
546 |         const botResponse = result.candidates[0].content.parts[0].text;
547 | 
548 |         // Add the bot's message to the chat history
549 |         chatHistory.push({ role: "model", parts: [{ text: botResponse }] });
550 | 
551 |         // Display bot message
552 |         messages.innerHTML += `<p class="text-left text-gray-500 mb-2">${translations[lang].chatbot_bot_label} ${botResponse}</p>`;
553 |         messages.scrollTop = messages.scrollHeight;
554 |     } catch (error) {
555 |         console.error("Error fetching from Gemini API:", error);
556 |         messages.innerHTML += `<p class="text-left text-red-500 italic mb-2">${translations[lang].chatbot_error}</p>`;
557 |     } finally {
558 |         // Hide typing indicator and enable input
559 |         isWaitingForResponse = false;
560 |         typingIndicator.classList.add('hidden');
561 |         messages.scrollTop = messages.scrollHeight;
562 |     }
563 | }
564 | 
565 | // Initial render of the home section and setting the language
566 | window.onload = function() {
567 |     showSection('home-section');
568 |     renderRecipes(recipes);
569 |     document.getElementById('language-selector').value = currentLang;
570 |     updateTextContent(currentLang);
571 | };
572 | 
573 | 
574 | 


--------------------------------------------------------------------------------
/style.css:
--------------------------------------------------------------------------------
  1 | /* Custom styles to define a consistent, clean font and a background color */
  2 | body {
  3 |     font-family: 'Inter', sans-serif;
  4 |     background-color: #f0fdf4; /* A light, fresh green for a farming theme */
  5 | }
  6 | 
  7 | /* Utility for consistent container width and spacing */
  8 | .container {
  9 |     max-width: 1200px;
 10 |     margin: auto;
 11 |     padding: 2rem 1rem;
 12 | }
 13 | 
 14 | /* Styling for the recipe cards with subtle animations */
 15 | .recipe-card {
 16 |     background-color: #ffffff; /* Use a solid white background for the recipe cards */
 17 |     border-radius: 15px;
 18 |     padding: 1.5rem;
 19 |     box-shadow: 0 4px 8px rgba(0,0,0,0.1);
 20 |     margin-bottom: 1.5rem;
 21 |     opacity: 0; /* Initially hidden for staggered animation */
 22 |     transform: translateY(20px);
 23 |     animation: card-appear 0.6s ease-out forwards;
 24 |     position: relative;
 25 |     overflow: hidden;
 26 | }
 27 | 
 28 | /* Pop-up effect on hover */
 29 | .recipe-card:hover {
 30 |     transform: translateY(-5px) scale(1.02);
 31 |     box-shadow: 0 8px 16px rgba(0,0,0,0.2);
 32 | }
 33 | 
 34 | /* Keyframes for the card appearance animation */
 35 | @keyframes card-appear {
 36 |     to {
 37 |         opacity: 1;
 38 |         transform: translateY(0);
 39 |     }
 40 | }
 41 | 
 42 | /* Basic styling for section management */
 43 | .section {
 44 |     display: none; /* Hide all sections by default */
 45 |     animation: fadeIn 0.8s ease-in-out;
 46 | }
 47 | .section.active {
 48 |     display: block; /* Show the active section */
 49 | }
 50 | 
 51 | /* Fade-in animation for page transitions */
 52 | @keyframes fadeIn {
 53 |     from { opacity: 0; }
 54 |     to { opacity: 1; }
 55 | }
 56 | 
 57 | /* Styling for the Home section with a background image */
 58 | #home-section {
 59 |     position: relative;
 60 |     display: flex;
 61 |     align-items: center;
 62 |     justify-content: center;
 63 |     min-height: 100vh;
 64 |     overflow: hidden;
 65 |     background-image: url('https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-222549-2165688.jpg&fm=jpg');
 66 |     background-size: cover;
 67 |     background-position: center;
 68 | }
 69 | 
 70 | /* Responsive navigation menu styling */
 71 | .nav-links {
 72 |     display: flex;
 73 |     gap: 1.5rem; /* Equivalent to space-x-6 in Tailwind */
 74 | }
 75 | 
 76 | /* Responsive design for mobile navigation */
 77 | @media (max-width: 768px) {
 78 |     .nav-links {
 79 |         display: none; /* Hide nav links on smaller screens by default */
 80 |         flex-direction: column;
 81 |         position: absolute;
 82 |         top: 60px;
 83 |         left: 0;
 84 |         width: 100%;
 85 |         background-color: white;
 86 |         padding: 1rem;
 87 |         box-shadow: 0 4px 8px rgba(0,0,0,0.1);
 88 |     }
 89 |     .nav-links.active {
 90 |         display: flex; /* Show nav links when menu is toggled */
 91 |     }
 92 | }
 93 | 
 94 | /* Active link styling */
 95 | .nav-links a.active {
 96 |     color: #166534; /* Darker green for active link */
 97 |     border-bottom: 2px solid #166534;
 98 | }
 99 | 
100 | /* Button press animation */
101 | .btn-press:active {
102 |     transform: scale(0.95);
103 | }
104 | 
105 | /* Result box animation */
106 | .result-box.show {
107 |     animation: slide-down 0.5s ease-out forwards;
108 | }
109 | 
110 | @keyframes slide-down {
111 |     from { opacity: 0; transform: translateY(-20px); }
112 |     to { opacity: 1; transform: translateY(0); }
113 | }
114 | 
115 | 
116 | 


--------------------------------------------------------------------------------
