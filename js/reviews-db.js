/**
 * ===========================================================================
 * SCOOP N BREW — HUMANIZED REVIEWS ENGINE v3.0 (MASSIVE UNIQUE POOL)
 * Authentic Reviews across English, Hinglish & Hindi with Anti-Repetition
 * Curated from Official Menu:
 * - Ice Creams: Hocco Cones (Nutty/Berry), Boss Bar, Scoops
 * - Waffles: Nutella (₹99), White Chocolate (₹99), Chocolate (₹99) + Ice Cream (+₹20)
 * - Shakes: Oreo (₹79), Chocolate (₹79), Butterscotch (₹69), Strawberry (₹69), Blueberry (₹69)
 * - Pancakes: Mini Pancakes (₹59)
 * - Breads & Buns: Veg Burger (₹79), Veg Sandwich (₹69)
 * - Fries: Loaded Cheesy Fries (₹79), Peri Peri Fries (₹69)
 * - Mojitos & Coolers: Watermelon, Mint, Blueberry, Bubblegum, Peach Tea (₹69)
 * - Hot & Cold Brews: Cold Coffee (₹69), Hot Coffee (₹29), Kesar Chai (₹25), Masala Chai (₹20)
 * ===========================================================================
 */

const REVIEWS_DB = {
    "ENGLISH": {
        "combos": {
            "ICE_CREAM": [
                "Scoop n Brew has the best ice cream in Clement Town! We loved the Hocco Nutty Chocolate cone and Boss Bar — rich, velvety ice cream in a super fresh crispy wafer cone. The perfect sweet treat on a sunny day!",
                "If you love ice creams, you need to check out their Hocco counter! Tried the Strawberry Cheesecake cone and it was absolute perfection. Fresh, creamy, and so satisfying.",
                "Top-tier ice creams right near GEHU Gate 1. Authentic Hocco cones, generous scoops, and kept perfectly chilled. My go-to dessert spot!",
                "Stopped by after lectures for a Hocco Nutty cone and it completely made my day. The chocolate coating inside the wafer cone stays crunchy till the very last bite!",
                "Finally a place near Graphic Era that serves genuine Hocco ice creams! The Boss Bar is super decadent and the cones are always fresh and crisp.",
                "Tried the Hocco Strawberry Cheesecake cone at Scoop n Brew and honestly couldn't stop at just one. Creamy texture, real berry flavor, and super pocket-friendly!",
                "Best late-evening ice cream run in Clement Town! Whether you want a crunchy nutty cone or a rich chocolate bar, their freezer is always stocked with the best flavors.",
                "Love grabbing a chilled Hocco cone here while walking back from college. Super creamy, zero ice crystals, and the wafer cone is always crunchy.",
                "We tried three different Hocco flavors with friends today and every single one was a 10/10. Smooth, rich, and way better than regular frozen desserts!",
                "Nothing beats sitting under the pink neon lights at Scoop n Brew with a Hocco Nutty Chocolate cone in hand. Pure dessert bliss at student-friendly prices!",
                "The Hocco ice cream selection here is fantastic. Real dairy richness, super crunchy cones, and served at the exact right temperature.",
                "Came for a quick sweet bite opposite Pratap Cricket Turf and fell in love with their Strawberry Cheesecake ice cream cone. Sweet, tangy, and ultra-creamy!",
                "My favorite spot for an instant mood boost near GEHU! Their Hocco Boss Bar has the thickest chocolate crackle layer and the creamiest center.",
                "If you have a sweet tooth, Scoop n Brew is heaven. The Hocco cones are always fresh, never soggy, and packed with rich flavor right to the bottom tip.",
                "Brought my cousins here for evening ice cream and everyone loved the Hocco range. Great variety, clean freezer, and super polite service!",
                "Hands down the most refreshing ice cream parlor around Clement Town. The nutty chocolate cone has the perfect balance of roasted nuts and creamy chocolate.",
                "Quick service, cute pink vibes, and the creamiest Hocco ice cream cones in Dehradun. A solid 5-star dessert stop!",
                "Every time we finish a match at Pratap Cricket Turf, our whole squad heads straight to Scoop n Brew for chilled Hocco cones and Boss Bars!",
                "The quality of Hocco ice cream they serve here is unmatched. Super velvety mouthfeel and authentic flavors that taste truly premium.",
                "Affordable, delicious, and always fresh! Grabbed two Hocco cones after class and the crunch of the wafer cone was spot on."
            ],
            "WAFFLES": [
                "Their freshly pressed Nutella waffle for ₹99 is unmatched! Warm, golden-crisp on the outside with melting chocolate inside. Adding a scoop of ice cream on top (+₹20) made it pure dessert bliss!",
                "Best Belgian waffles near Graphic Era! Super airy and crispy with generous chocolate drizzle. The mini pancakes (₹59) are also soft, fluffy, and decadent.",
                "Ordered the chocolate waffle with ice cream and warm mini pancakes with friends. Crispy, fresh, and pocket-friendly for students. 10/10 recommendation!",
                "The aroma of freshly baked waffles hits you the moment you walk into Scoop n Brew! Golden brown, crunchy edges, and loaded with real Nutella.",
                "Getting a freshly baked Belgian waffle for just ₹99 near GEHU Gate 1 feels like a steal. Topped it with vanilla ice cream for ₹20 and it was heaven!",
                "Tried their White Chocolate and Nutella waffles today — baked fresh to order, super crispy without being dry, and drizzled generously with melted chocolate.",
                "Honestly the best waffle spot in Clement Town! They don't skimp on the Nutella filling at all, and the batter is light, airy, and perfectly toasted.",
                "Whenever chocolate cravings hit after evening classes, their ₹99 chocolate overload waffle is my ultimate comfort food. Served piping hot every time!",
                "We shared a plate of ₹59 mini pancakes and a Nutella Belgian waffle. Both were warm, freshly made right in front of us, and ridiculously tasty!",
                "Love how crispy their waffles stay even with warm melted chocolate and a cold scoop of ice cream on top. Texture and taste are both 10/10!",
                "Tried the Belgian dark & white chocolate waffle at Scoop n Brew and it beat cafes charging twice the price. Student-friendly and genuinely gourmet!",
                "The mini pancakes at ₹59 are bite-sized clouds of happiness! Fluffy, warm, and generously topped with rich chocolate sauce.",
                "If you haven't tried Scoop n Brew's Nutella waffle with an extra ₹20 ice cream scoop, you're missing out on the best dessert deal in Dehradun!",
                "Freshly pressed on the waffle iron right when you order — you can taste the freshness in every warm, crunchy bite. Easily 5 stars!",
                "Perfect crispness on the outside, soft and warm on the inside, and overflowing with chocolate. Best dessert cafe near GEHU!",
                "Stopped by for a quick sweet treat and ordered the White Chocolate waffle. Not overly sweet, super creamy topping, and baked to golden perfection.",
                "Our daily post-lecture ritual is sharing a Nutella waffle and mini pancakes here. Consistent quality, generous toppings, and zero long wait!",
                "The combination of warm crispy Belgian waffle and melted Nutella at ₹99 is unbeatable in Clement Town. Worth every single rupee!",
                "Fluffy mini pancakes drizzled with chocolate and a crunchy Nutella waffle — everything came out piping hot and looked super Instagrammable!",
                "You can tell they use great batter and quality chocolate. No burnt edges, just pure golden-brown crunch in every bite!"
            ],
            "SHAKES": [
                "The Oreo thick shake at ₹79 is hands down the best in Dehradun! Ultra-thick, creamy, and blended with real ice cream rather than thin syrups. Best thick shake place in town.",
                "Tried both their chocolate and strawberry thick shakes — rich, chilled, and presented so aesthetically. Definitely our favorite hangout after lectures!",
                "Super thick gourmet shakes for under ₹80! The Oreo shake with chocolate drizzle inside the glass was simply divine. Highly recommended!",
                "Finally a cafe near GEHU that actually makes THICK shakes! My ₹79 Oreo shake was so rich and creamy you could almost eat it with a spoon.",
                "Ordered the Blueberry and Butterscotch thick shakes at ₹69 each — super refreshing, blended smooth with real ice cream, and served ice cold!",
                "Their Chocolate Thick Shake (₹79) is pure liquid gold for chocolate lovers. Rich cocoa flavor, velvety texture, and topped with crunchy bits!",
                "Best value thick shakes in Clement Town! At ₹69–₹79, the portion size and thickness easily beat big franchise shake bars.",
                "Tried the Strawberry shake on a warm afternoon and it was chilled to perfection. Creamy, fruity, and not artificially sugary at all.",
                "The Oreo shake here has the best crunch-to-cream ratio! Blended with generous Oreo cookies and rich vanilla ice cream.",
                "Watched them blend our shakes live at the counter with scoops of real ice cream and gourmet Barisco syrups. Taste and quality are 10/10!",
                "Butterscotch thick shake for ₹69 is my new obsession at Scoop n Brew! Creamy, caramel-like sweetness with a super smooth finish.",
                "If you want a heavy, filling, decadent milkshake after college, go straight for their ₹79 Chocolate or Oreo thick shake. Total paisa vasool!",
                "Loved the presentation of the shakes with chocolate swirl inside the cup and a wide straw. Tastes even better than it looks!",
                "We ordered four different shakes for our group — Oreo, Chocolate, Blueberry, and Strawberry — and everyone finished their glass to the last drop!",
                "Super chilled, velvety thick shakes that instantly cool you down after walking from GEHU Gate 1. Unbeatable student pricing!",
                "The Blueberry shake at ₹69 was a wonderful surprise! Fruity, vibrant, and blended super thick with creamy ice cream.",
                "No watery milkshakes here — Scoop n Brew serves proper, indulgent thick shakes that keep you full and happy for hours.",
                "Hands down the best ₹79 Oreo shake in Dehradun. Rich, frosty, and loaded with cookie crumbles in every sip!",
                "Great variety of shakes and coolers! The chocolate thick shake is my personal favorite — decadent, smooth, and perfectly chilled.",
                "Every sip of their thick shake feels like a dessert in itself. Clean blender station, fresh milk, and generous ice cream scoops!"
            ],
            "FOOD": [
                "The loaded cheesy fries for ₹79 are next level! Crispy golden fries smothered in creamy cheese sauce and served piping hot. The veg burger is also crunchy and delicious.",
                "Best peri peri fries around Clement Town! Hot, fiery, and extra crispy. Paired with their grilled veg sandwich, it's the ultimate comfort lunch.",
                "Ordered loaded fries, peri peri fries, and crispy burgers for the whole group. Fresh, savory, and very budget-friendly for students!",
                "Their ₹79 Veg Burger has the crunchiest golden patty, fresh veggies, and creamy house sauces inside a soft toasted bun. So filling and tasty!",
                "Craving savory snacks near GEHU? Their grilled veg sandwich (₹69) and peri peri fries (₹69) make the best budget-friendly combo in town!",
                "The Loaded Cheesy Fries are generously drizzled with rich cheese sauce and seasoning — stays crispy even under all that melted goodness!",
                "Everything is fried and grilled fresh to order! The peri peri fries had the exact right kick of spice and arrived steaming hot at our table.",
                "Tried the grilled veg sandwich for ₹69 and was blown away by how well-stuffed and crispy it was. Perfect quick bite between classes!",
                "Scoop n Brew isn't just great at desserts — their savory menu is a total winner too! The veg burger and loaded fries hit the spot every time.",
                "Shared two plates of loaded cheesy fries and grilled sandwiches with friends. Huge portions for the price and super fresh ingredients!",
                "The seasoning on their ₹69 Peri Peri Fries is addictive! Crispy outside, fluffy potato inside, and served hot straight from the fryer.",
                "Best evening snack spot opposite Pratap Cricket Turf! A ₹79 crispy veg burger and cheesy fries easily satisfy big hunger pangs.",
                "Loved how non-greasy and crunchy the fries were. The cheese blend on the loaded fries is super creamy and flavorful!",
                "Their grilled sandwich is toasted to golden perfection with a generous, flavorful veggie filling. Unbeatable at just ₹69!",
                "Whether you want spicy peri peri fries or a hearty veg burger, the food comes out fast, piping hot, and full of flavor.",
                "Student budget friendly and super delicious! You can get a loaded burger and fries here for less than what a single item costs elsewhere.",
                "The crunch on that veg burger patty is unreal! Fresh lettuce, tangy mayo, and soft buns — easily a 5-star burger experience.",
                "Ordered a mix of savory snacks — grilled sandwich, veg burger, and cheesy fries. Every single item was hot, fresh, and 10/10 on taste!",
                "Great place to grab a savory snack before diving into waffles! The loaded fries are cheesy, tangy, and irresistible.",
                "Clean kitchen, fresh oil, and crisp golden fries! The ₹79 loaded fries are a must-order whenever you visit Scoop n Brew."
            ],
            "BEVERAGES": [
                "Their refreshing mint and watermelon mojitos (₹69) are so revitalizing! Served icy cold with striped straws in cute cups. Great cold coffee as well!",
                "Tried their creamy cold coffee (₹69) and hot Kesar chai (₹25). Incredible taste and quality at tapri prices. Best beverage value near GEHU!",
                "Crisp fizzy coolers and rich brews! The iced blueberry cooler was delightfully refreshing and looked so aesthetic in photos.",
                "Where else in Dehradun do you get aromatic Kesar Chai for ₹25 and Masala Chai for ₹20 inside a cute air-conditioned pink cafe?! Total gem!",
                "The Bubblegum and Watermelon mojitos (₹69) are super fizzy, icy, and bursting with flavor. Best thirst-quenchers after a sunny walk!",
                "Their ₹69 Cold Coffee is strong, frothy, and perfectly sweetened. My daily caffeine fix right outside GEHU Gate 1!",
                "Tried the Peach Iced Tea (₹69) today and loved how smooth, chilled, and refreshing it was. Not too sweet, just crisp peachy goodness!",
                "Hot Coffee at ₹29 and Kesar Chai at ₹25 make Scoop n Brew our favorite rainy-day hangout in Clement Town. Amazing aroma and taste!",
                "Love watching the barista craft colorful mojitos using gourmet Barisco syrups! The Mint Mojito is zesty, cool, and super fresh.",
                "Whether you're in the mood for a ₹20 kadak Masala Chai or a fancy ₹69 Blueberry Mojito, their beverage menu covers every craving!",
                "The Cold Coffee here has that thick cafe-style froth on top and a rich roasted coffee kick. Easily the best ₹69 cold coffee around!",
                "Ordered the Watermelon Mojito and Peach Iced Tea with friends — both looked super vibrant in the cute cups and tasted ultra-refreshing!",
                "Their Kesar Chai for ₹25 has a lovely saffron aroma and comforting warmth. Unbelievable that such a pretty cafe has ₹20–₹29 hot brews!",
                "The Bubblegum cooler is so fun and nostalgic! Bright, fizzy, ice-cold, and looks great in Instagram stories.",
                "Stopped by for a quick evening chai and ended up trying their cold coffee too. Both were brewed fresh and served at the perfect temperature!",
                "Best summer coolers near Graphic Era! Mint, Watermelon, and Blueberry mojitos at ₹69 each are an absolute lifesaver on hot afternoons.",
                "Their ₹29 Hot Coffee is frothy, rich, and hits the spot during exam prep evenings. Great cozy atmosphere to sip and relax!",
                "Every drink on the menu is priced so thoughtfully for students. ₹20 chai to ₹69 craft mojitos — 10/10 for both taste and value!",
                "Fresh mint leaves, zesty lime, and chilled fizz make their Virgin Mint Mojito an instant refresher. Highly recommend!",
                "If you love cafe-style cold coffee without spending ₹200+, Scoop n Brew's ₹69 Cold Coffee will make you a regular customer!"
            ],
            "SERVICE": [
                "The staff at Scoop n Brew is exceptionally polite, warm, and fast! Orders are prepared fresh right in front of you with genuine hospitality.",
                "Super fast service and spotless clean counters. The crew always greets you with a bright smile. 10/10 customer care!",
                "Loved the quick turnaround and courteous behavior of the team. They truly take pride in serving fresh food.",
                "Even when the cafe is packed with college students during break hours, the team stays calm, cheerful, and gets orders out quickly!",
                "Really impressed by how hygienic and well-organized the live counter is. The staff wears a warm smile and customizes toppings happily.",
                "Great hospitality! We weren't sure which shake and waffle to pick, and the person at the counter gave us spot-on recommendations.",
                "Fast billing, zero confusion with group orders, and everything was served hot and fresh to our table. Truly professional young team!",
                "You feel genuinely welcomed the moment you step in. The staff treats every student customer with respect and warmth.",
                "Clean tables, spotless waffle irons and blenders, and super prompt service. They maintain high hygiene standards all day long!",
                "Asked for a little extra chocolate drizzle on our mini pancakes and they obliged with the biggest smile. Little gestures like this win hearts!",
                "Quickest snack and dessert service near GEHU Gate 1! Ideal when you only have a 20-minute break between lectures.",
                "The owners and staff put real love into this cafe. Courteous communication, honest pricing, and quick preparation.",
                "Every item on our order arrived together, freshly made, and neatly presented. Couldn't ask for smoother service!",
                "Super friendly baristas who know how to make customers feel at home. One of the most welcoming cafes in Clement Town!",
                "Five stars for the hygiene and politeness alone! The counter sparkles and the food is handled with utmost care."
            ],
            "AMBIENCE": [
                "Such an Instagrammable pink cafe! The glowing illuminated arches, pastel decor, and cozy velvet seating make it the prettiest spot opposite Pratap Cricket Turf.",
                "Obsessed with the cute pink aesthetic and chill background music! Cozy, vibrant, and filled with great college energy near GEHU Gate 1.",
                "Stunning ambiance with photogenic neon lighting. Perfect cozy spot for dates, casual hangout, and aesthetic photos.",
                "The candy-pink brick wall with cute dessert quotes and the glowing triple arches make every corner of Scoop n Brew a photo booth!",
                "Love the outdoor green turf seating in the evening when the warm mood lights come on! Best hangout vibe in Clement Town.",
                "Whether you sit inside by the plush pink velvet booth or outside on the green turf, the ambiance is super relaxing and cheerful.",
                "Hands down the prettiest cafe near Graphic Era! The pink-and-gold neon aesthetic looks straight out of a Pinterest board.",
                "Great music playlist, comfortable seating, and bright cheerful lighting. It's our favorite place to unwind after a long day of classes!",
                "Such a cute spot for birthday treats and casual dates! The backlit pink arch seating makes every picture look effortlessly aesthetic.",
                "The combination of vibrant pink walls, framed ice cream quotes, and warm glowing counter arches gives this cafe a unique personality.",
                "Cozy, clean, and super inviting! Even a quick ₹20 chai break feels special because the interior is designed so thoughtfully.",
                "Right opposite Pratap Cricket Turf, the storefront looks magical at night with its glowing signage and lively student crowd.",
                "Every detail of the decor — from the cute wall frames to the illuminated bar counter — creates such a happy, uplifting vibe!",
                "If you love aesthetic cafes for Instagram reels and snaps with friends, Scoop n Brew is an absolute must-visit in Dehradun.",
                "A breath of fresh air in Clement Town! Bright, modern, cozy pink interiors that instantly put you in a good mood."
            ],
            "ALL": [
                "Scoop n Brew is hands-down the best dessert cafe near GEHU Gate 1! Creamy Hocco ice creams, crispy Nutella waffles, thick Oreo shakes, and budget prices starting at ₹20. Cute pink aesthetic and 10/10 service. Must visit!",
                "Everything from the sweet waffles to the loaded cheesy fries and courteous staff was 10/10. Definitely coming back regularly with friends!",
                "Our new regular hangout! Incredible ice creams, delicious waffles, thick shakes, and wonderful pink vibes. 5 stars all the way!",
                "What a gem in Clement Town! You get ₹20 chai, ₹59 mini pancakes, ₹79 loaded fries, and ₹99 Nutella waffles under one roof with the cutest pink decor.",
                "Visited Scoop n Brew with my college group and we tried almost the whole menu — Hocco cones, Oreo shake, peri peri fries, and Belgian waffles. Every single item was a hit!",
                "Best student-friendly cafe opposite Pratap Cricket Turf! Unbeatable prices, generous portions, aesthetic pink seating, and super fast service.",
                "Rarely do you find a cafe that nails both aesthetics and budget pricing! Scoop n Brew serves 5-star quality waffles, shakes, and snacks without burning a hole in your pocket.",
                "From a quick ₹25 Kesar Chai in the morning to a decadent ₹99 Nutella waffle at night, Scoop n Brew is the heartbeat of GEHU Gate 1!",
                "Loved everything about this place — the glowing pink arches, the friendly staff, the crunchy Hocco cones, and the piping hot cheesy fries. 10/10 experience!",
                "If you're around Graphic Era or Clement Town, do yourself a favor and visit Scoop n Brew. Great food, infectious college energy, and super sweet hospitality!",
                "Five stars across the board! Delicious savory snacks, mouthwatering waffles, thick shakes made with real ice cream, and the prettiest selfie wall in town.",
                "My favorite discovery in Dehradun this semester! Pocket-friendly menu, spotless hygiene, cozy outdoor & indoor seating, and top-notch taste.",
                "Whether you're craving sweet Hocco ice cream, fluffy mini pancakes, or spicy peri peri fries with a cold mojito, this cafe delivers perfection every time!",
                "Great food brings people together, and Scoop n Brew proves it! Our entire friend circle hangs out here almost every evening after class.",
                "Top quality ingredients, cute presentation, zero waiting hassle, and prices that students actually love. Easily the best cafe in Clement Town!",
                "Everything here is crafted with care — crispy waffles, frothy cold coffee, loaded burgers, and warm smiles from the staff. Highly recommended!",
                "Came for the aesthetic pink interiors, stayed for the incredible ₹99 Nutella waffle and ₹79 Oreo shake! Will definitely be a regular here.",
                "The ultimate all-rounder cafe near GEHU! Sweet treats, savory bites, refreshing coolers, and cozy vibes — all at 10/10 quality.",
                "Took my friends here for a birthday treat and everyone was blown away by both the taste and how affordable the bill was. Full 5 stars!",
                "Scoop n Brew hits every single checkbox: tasty food, thick shakes, authentic Hocco ice cream, aesthetic lighting, and humble staff!"
            ],
            "HOCCO": [
                "Loved that Scoop n Brew is an official Hocco ice cream spot! The Nutty Chocolate cone and Boss Bar were super rich, creamy, and fresh.",
                "Their Hocco Strawberry Cheesecake cone is out of this world! Crisp wafer cone filled to the bottom tip with velvety ice cream.",
                "Best place near GEHU Gate 1 to grab authentic Hocco cones and ice cream bars! Always kept at the perfect sub-zero temperature.",
                "The Hocco Nutty cone here has the crunchiest roasted nuts and thickest chocolate topping. My favorite quick dessert after college!",
                "Tried the Hocco Boss Bar and Strawberry Cheesecake cone with friends — 100% real dairy creaminess and super affordable!",
                "Nothing beats a chilled Hocco ice cream cone from Scoop n Brew on a sunny afternoon in Clement Town. Fresh, crunchy, and delicious!"
            ],
            "MINI_PANCAKES": [
                "The warm mini pancakes for just ₹59 at Scoop n Brew are an absolute steal! Bite-sized, super fluffy, and generously drizzled with rich chocolate.",
                "Obsessed with their ₹59 mini pancakes stack! Light, airy, cooked fresh on order, and loaded with melted chocolate sauce.",
                "If you want the cutest and tastiest dessert under ₹60 near GEHU, get their warm mini pancakes! Adding a ₹20 ice cream scoop makes it even better.",
                "Our daily after-lecture snack is a plate of ₹59 mini pancakes at Scoop n Brew. Soft, pillowy, warm, and chocolatey in every bite!",
                "Freshly flipped mini pancakes served piping hot with generous chocolate drizzle — easily the best ₹59 dessert in Clement Town!",
                "Shared two plates of mini pancakes with my friends and everyone loved how soft, golden, and decadent they were!"
            ],
            "PANCAKES": [
                "The warm mini pancakes for just ₹59 at Scoop n Brew are an absolute steal! Bite-sized, super fluffy, and generously drizzled with rich chocolate.",
                "Obsessed with their ₹59 mini pancakes stack! Light, airy, cooked fresh on order, and loaded with melted chocolate sauce.",
                "If you want the cutest and tastiest dessert under ₹60 near GEHU, get their warm mini pancakes! Adding a ₹20 ice cream scoop makes it even better.",
                "Our daily after-lecture snack is a plate of ₹59 mini pancakes at Scoop n Brew. Soft, pillowy, warm, and chocolatey in every bite!"
            ],
            "FRIES": [
                "The ₹79 Loaded Cheesy Fries at Scoop n Brew are insane! Piping hot, extra crispy golden fries drenched in creamy cheese sauce.",
                "Best Peri Peri Fries (₹69) near GEHU Gate 1! Perfectly spiced, super crunchy, and fried fresh right when you order.",
                "Ordered both the Loaded Cheesy Fries and Peri Peri Fries for our table — generous portions, zero greasiness, and 10/10 flavor!",
                "If you love cheesy snacks, their ₹79 loaded fries are a must-try in Clement Town. Crispy till the last fry and loaded with sauce!",
                "Hot, crispy, and addictive! Their ₹69 peri peri fries have the best spicy tang and pair wonderfully with any cold drink.",
                "Hands down the crunchiest and cheesiest fries opposite Pratap Cricket Turf! Student-friendly pricing and big portion size."
            ],
            "BURGERS_SANDWICHES": [
                "Their ₹79 Veg Burger and ₹69 Grilled Sandwich are the ultimate budget comfort meals near GEHU! Crispy patty, fresh veggies, and flavorful sauces.",
                "Tried the Grilled Veg Sandwich (₹69) today — toasted golden brown, super crunchy, and generously stuffed with seasoned filling!",
                "The Veg Burger at ₹79 is hearty, fresh, and has a super crispy herb-crusted patty inside soft toasted buns. Worth every rupee!",
                "Ordered a grilled sandwich and veg burger for lunch between lectures. Served piping hot, super filling, and delicious!",
                "Best pocket-friendly burgers and sandwiches in Clement Town! Freshly prepared on order with great sauces and crunch.",
                "Love how well-toasted and flavorful their ₹69 veg sandwich is. Pair it with fries or chai for the best evening snack!"
            ],
            "SANDWICHES": [
                "Tried the Grilled Veg Sandwich (₹69) at Scoop n Brew — toasted golden brown, super crunchy, and generously stuffed with fresh filling!",
                "Their ₹69 grilled sandwich is my go-to lunch bite near GEHU Gate 1. Crisp bread, flavorful veggies, and creamy dressing!",
                "Hot, crispy, and super satisfying! The grilled sandwich and ₹79 veg burger here beat places charging double the price.",
                "Freshly grilled to order with zero soggy bread — their ₹69 sandwich is crispy on the outside and deliciously saucy inside!"
            ],
            "MOJITOS": [
                "Their ₹69 mojitos and coolers are the most refreshing drinks in Clement Town! Tried the Mint and Watermelon mojitos — icy, fizzy, and zesty!",
                "Loved the Blueberry and Bubblegum coolers (₹69)! Served ice-cold in cute cups with striped straws — super photogenic and refreshing.",
                "The Peach Iced Tea and Virgin Mint Mojito at ₹69 each are our favorite afternoon thirst-quenchers near GEHU Gate 1!",
                "Crafted with gourmet Barisco syrups, fresh mint, and plenty of ice — their ₹69 mojitos taste like high-end mocktails at student prices!",
                "Watermelon Mojito at Scoop n Brew is an instant heat-buster! Crisp fizz, balanced sweetness, and served super chilled.",
                "Tried the Mint Mojito and Blueberry Cooler after a game at Pratap Cricket Turf — instantly revitalizing and 10/10 on presentation!"
            ],
            "COFFEE_CHAI": [
                "Creamy Cold Coffee at ₹69 and aromatic Kesar Chai at ₹25 — Scoop n Brew has the best brew prices in all of Clement Town!",
                "Where else can you sit in a gorgeous pink neon cafe and enjoy kadak Masala Chai for ₹20 or Hot Coffee for ₹29?! Absolute gem near GEHU!",
                "Their ₹69 Cold Coffee is rich, frothy, and perfectly chilled, while the ₹25 Kesar Chai is pure warmth in a cup!",
                "Our daily evening adda for ₹20 Masala Chai and ₹25 Kesar Chai! Great tea, cozy seating, and super friendly vibes.",
                "Tried both the ₹29 Hot Coffee and ₹69 Cold Coffee — smooth roasted flavor, thick froth, and unbeatable value for money!",
                "The Kesar Chai (₹25) has such a lovely authentic saffron note. Best chai and coffee hangout opposite Pratap Cricket Turf!"
            ],
            "COFFEE": [
                "Their ₹69 Cold Coffee is thick, frothy, and has the perfect caffeine kick! Best cold coffee deal near GEHU Gate 1.",
                "Tried the ₹69 Cold Coffee and ₹29 Hot Coffee at Scoop n Brew — rich, creamy, and brewed to perfection!",
                "Love that you can get cafe-quality frothy cold coffee for ₹69 and hot kesar chai for ₹25 here. Total student paradise!",
                "Smooth, chilled, and topped with rich coffee froth — their Cold Coffee is a 10/10 refresher any time of day!"
            ],
            "ICE_CREAM,WAFFLES": [
                "Warm crispy Nutella waffle paired with a scoop of chilled Hocco ice cream is absolute heaven! The contrast between hot chocolate waffle and cold velvety ice cream was magical.",
                "Ordered the Belgian chocolate waffle and topped it with a scoop of ice cream. Crispy, gooey, and cold all at once — the ultimate dessert pairing!",
                "Waffles + Hocco ice cream here is an unbeatable combination. Freshly pressed, warm, and delightfully sweet.",
                "Had the ₹99 Nutella waffle with a +₹20 vanilla ice cream scoop and a Hocco Nutty cone on the side. Best dessert feast near GEHU!",
                "The hot-and-cold magic of their freshly baked Belgian waffle with creamy Hocco ice cream melting on top is pure 5-star indulgence!",
                "We ordered warm mini pancakes (₹59), a White Chocolate waffle (₹99), and Hocco Strawberry Cheesecake cones. Every bite was dessert perfection!"
            ],
            "ICE_CREAM,SHAKES": [
                "Ultimate dessert heaven! Enjoyed a crunchy Hocco ice cream cone alongside their thick Oreo shake. Pure sweet satisfaction at super affordable prices.",
                "Tried the Strawberry Cheesecake cone and chocolate shake — thick, rich, and made with real quality ingredients. 10/10 treat!",
                "Because they use real ice cream in their ₹79 Oreo thick shakes AND serve authentic Hocco cones, this is the #1 dairy dessert spot in Clement Town!",
                "Grabbed a Hocco Boss Bar and a Butterscotch thick shake (₹69) after lectures. Rich, frosty, and totally worth it!",
                "Double the chill! A crunchy Hocco Nutty Chocolate cone paired with a velvety Oreo shake made for the best afternoon treat."
            ],
            "WAFFLES,SHAKES": [
                "Freshly pressed Nutella waffle and an Oreo thick shake for under ₹180! Crisp waffle texture, rich chocolate shake, and unbeatable value near GEHU.",
                "Crispy golden waffle with warm chocolate paired with a chilled thick shake. The best post-lecture snack combo!",
                "Paired their ₹59 fluffy mini pancakes and ₹99 Belgian waffle with a ₹79 Chocolate thick shake — ultimate chocolate lover's dream!",
                "Warm crunchy Nutella waffle in one hand and an ice-cold Oreo shake in the other. Easily the best cafe combo in Clement Town!",
                "The contrast of a piping hot white chocolate waffle and a frosty blueberry thick shake (₹69) was super delicious and filling!"
            ],
            "FOOD,SHAKES": [
                "Hot peri peri fries with melted cheese paired with a chilled chocolate thick shake. Savory spicy crunch followed by rich sweet sips — pure comfort food!",
                "Crispy veg burger, loaded cheesy fries, and a thick Oreo shake. Totally satisfying comfort meal with friends at student-friendly prices.",
                "Nothing beats dipping crispy ₹69 peri peri fries while sipping on a ₹79 Oreo thick shake! My favorite meal combo near GEHU Gate 1.",
                "Ordered a ₹69 grilled veg sandwich, ₹79 loaded cheesy fries, and a ₹69 butterscotch thick shake — super filling, fresh, and pocket-friendly!",
                "A crunchy ₹79 veg burger paired with a thick strawberry shake feels like a classic diner meal right here in Clement Town!"
            ],
            "FOOD,BEVERAGES": [
                "Crispy toasted veg sandwich and spicy loaded fries paired with an ice-cold mint mojito. Perfectly seasoned and wonderfully refreshing!",
                "Great savory bite! The crunchy burger and chilled watermelon cooler made the perfect afternoon lunch combo.",
                " ₹69 grilled sandwich + ₹25 hot Kesar chai is our daily evening snack ritual at Scoop n Brew! Unbeatable taste and budget.",
                "Had the ₹79 loaded cheesy fries and ₹79 veg burger washed down with a ₹69 frothy cold coffee. 10/10 comfort meal!",
                "Spicy peri peri fries paired with a fizzy blueberry mojito (₹69) hit all the right savory and refreshing notes!"
            ],
            "ICE_CREAM,FOOD": [
                "Started with piping hot loaded cheesy fries and finished with a crunchy Hocco Nutty cone. Best of both savory and sweet worlds!",
                "Hot, crispy savory snacks followed by rich creamy ice cream scoops. Perfect balance of flavors!",
                "Had a crispy ₹79 veg burger and peri peri fries for lunch, then wrapped it up with a Hocco Strawberry Cheesecake cone. Total satisfaction!",
                "Grilled veg sandwich first, Hocco Boss Bar for dessert! Scoop n Brew makes it so easy to enjoy a full meal and dessert on a student budget."
            ],
            "WAFFLES,BEVERAGES": [
                "Warm chocolate waffle with a refreshing iced cooler. The warm crispiness paired with a fizzy chilled beverage was fantastic!",
                "Enjoyed their Nutella waffle with a rich cold coffee. Great sweetness, smooth brew, and lovely pink ambiance.",
                "Fluffy ₹59 mini pancakes and a ₹69 frothy cold coffee is my favorite evening study-break combo at Scoop n Brew!",
                "A freshly baked ₹99 Belgian waffle paired with a ₹29 hot coffee cuts the sweetness just right. Pure cafe perfection!"
            ],
            "ICE_CREAM,AMBIENCE": [
                "Enjoying chilled creamy Hocco ice cream under the cute pink neon lights was such a vibe! Super cozy, aesthetic seating, and chill music.",
                "Prettiest spot in Clement Town for ice cream lovers! The pink arches and sweet treats make for great photos.",
                "Sitting on the outdoor green turf opposite Pratap Cricket Turf with a Hocco Nutty cone in hand is the best evening mood!",
                "The candy-pink brick wall with ice cream quotes is the cutest selfie backdrop while holding a Hocco Strawberry Cheesecake cone!"
            ],
            "WAFFLES,AMBIENCE": [
                "The warm sweet aroma of freshly baking waffles filling this pink cafe is heavenly! Gorgeous decor, relaxed seating, and 5-star waffles.",
                "Aesthetic pink interior, lovely illuminated arches, and the best warm waffles near GEHU Gate 1.",
                "Took the prettiest food photos of our ₹99 Nutella waffle and ₹59 mini pancakes against the neon pink arch seating!",
                "Cozy velvet booths, warm lighting, and a freshly pressed Belgian waffle — ideal date and hangout spot in Clement Town."
            ],
            "SHAKES,AMBIENCE": [
                "Chilling with a thick Oreo shake in this gorgeous pink cafe is the best afternoon break. Super photogenic neon backdrop!",
                "Loved sipping thick shakes while soaking in the cozy, vibrant pink aesthetic. A true gem near Graphic Era.",
                "The chocolate-drizzled shake glasses look straight out of Pinterest against the pink brick quotes wall! Great vibe and music."
            ],
            "SERVICE,AMBIENCE": [
                "Top-tier hospitality and the prettiest pink cafe interior! Staff greets you warmly, orders arrive super fast, and the vibe is spotless.",
                "Warm, welcoming staff and super aesthetic pink seating. Perfect place to relax and unwind after college classes.",
                "Spotless clean tables, glowing neon arches, and a super polite team behind the live counter. 10/10 cafe experience!"
            ],
            "ICE_CREAM,SERVICE": [
                "Super quick and friendly service at the counter! The team helped us pick the best Hocco ice cream flavors and served everything with a smile.",
                "Prompt service, clean counter, and delicious ice creams served fresh and cold. Great customer experience!"
            ],
            "WAFFLES,SERVICE": [
                "Fresh waffles made on order right in front of you and served piping hot in minutes. Attentive, polite staff that cares about quality!",
                "Fast, courteous service and warm crispy waffles served with generous toppings. Couldn't ask for better!"
            ]
        },
        "openings": [
            "Visited Scoop n Brew near GEHU Gate 1 today and loved every moment!",
            "Such a delightful experience at Scoop n Brew in Clement Town!",
            "Finally checked out Scoop n Brew opposite Pratap Cricket Turf and it exceeded all expectations!",
            "If you're near Graphic Era Hill University, this sweet pink cafe is an absolute must-visit!",
            "Had the best time hanging out with friends at Scoop n Brew today!",
            "Stopped by Scoop n Brew after lectures and it instantly became my favorite spot!",
            "Hands down the cutest and most pocket-friendly dessert cafe in Clement Town!",
            "Dropped in for a quick bite at Scoop n Brew and ended up loving everything we ordered!",
            "Whenever cravings hit near GEHU Gate 1, Scoop n Brew is the ultimate destination!",
            "Such a vibrant, welcoming cafe with the best student-friendly menu in Dehradun!",
            "We celebrated a friend's birthday at Scoop n Brew today and had a 10/10 experience!",
            "Found our new daily college hangout spot right opposite Pratap Cricket Turf!",
            "From the moment you step into Scoop n Brew, the sweet aroma and pink vibes win you over!",
            "Tried Scoop n Brew for the first time this evening and I'm already a fan!",
            "Looking for great desserts and snacks on a budget? Scoop n Brew nails it completely!",
            "Spent a super relaxing evening at Scoop n Brew in Clement Town!",
            "Nothing beats an after-class treat at Scoop n Brew with the college squad!",
            "Every visit to Scoop n Brew near GEHU feels fresh, cheerful, and totally worth it!",
            "Seriously impressed by how Scoop n Brew combines aesthetic cafe vibes with tapri-friendly prices!",
            "Took a break between classes at Scoop n Brew and had the most satisfying treat!"
        ],
        "bridges": [
            "On top of that,",
            "Also,",
            "Not to mention,",
            "To make things even better,",
            "What really stood out was that",
            "Plus,",
            "Along with that,",
            "Even better,",
            "We also loved that",
            "Another highlight was that",
            "Beyond that,",
            "To top it all off,"
        ],
        "categories": {
            "ICE_CREAM": [
                "the Hocco ice cream cones were crunchy, creamy, and 100% authentic.",
                "the Strawberry Cheesecake and Nutty Chocolate Hocco cones were top tier.",
                "their Hocco Boss Bar had the richest chocolate crackle and velvety ice cream center.",
                "every scoop of Hocco ice cream was served super fresh in a crisp wafer cone.",
                "the variety of chilled Hocco cones and bars satisfied our sweet tooth completely.",
                "having an official Hocco ice cream counter right near GEHU is a total blessing."
            ],
            "WAFFLES": [
                "the ₹99 Belgian Nutella waffle was warm, golden-brown, and delightfully crisp.",
                "adding a ₹20 ice cream scoop on top of the hot chocolate waffle was pure heaven.",
                "their ₹59 mini pancakes were super fluffy, warm, and loaded with melted chocolate.",
                "the freshly pressed White Chocolate and Nutella waffles had the best crunch.",
                "every waffle is baked fresh on order and overflowing with rich chocolate drizzle.",
                "both the crispy Belgian waffles and soft mini pancakes tasted genuinely gourmet."
            ],
            "SHAKES": [
                "the ₹79 Oreo thick shake was ultra-rich, creamy, and blended with real ice cream.",
                "their Chocolate and Butterscotch thick shakes had the thickest, smoothest consistency.",
                "the Blueberry and Strawberry shakes at ₹69 were frosty, fruity, and indulgent.",
                "the chocolate-drizzled shake glass looked aesthetic and tasted even better.",
                "unlike watery shakes elsewhere, their thick shakes are heavy, filling, and decadent.",
                "every sip of the Oreo thick shake was packed with crunchy cookie bits and cream."
            ],
            "FOOD": [
                "the ₹79 loaded cheesy fries were piping hot, crispy, and drenched in cheese sauce.",
                "the crispy ₹79 veg burger and ₹69 grilled sandwich were hearty, fresh, and flavorful.",
                "their ₹69 peri peri fries had the perfect spicy kick and crunch.",
                "all the savory snacks came out steaming hot and freshly prepared to order.",
                "the grilled veg sandwich was toasted golden brown with a generous, tasty filling.",
                "pairing the crunchy veg burger with cheesy loaded fries made for the ultimate comfort meal."
            ],
            "BEVERAGES": [
                "the ₹69 chilled mint and watermelon mojitos were crisp, fizzy, and bursting with freshness.",
                "their ₹69 creamy cold coffee and ₹25 aromatic kesar chai were brewed to perfection.",
                "getting ₹20 masala chai and ₹29 hot coffee inside such a pretty cafe is unbeatable value.",
                "the Peach Iced Tea and Blueberry cooler at ₹69 were super refreshing on a warm afternoon.",
                "the Bubblegum mojito served with a striped straw looked super cute and tasted great.",
                "their frothy cafe-style cold coffee at ₹69 easily beats expensive coffee chains."
            ],
            "SERVICE": [
                "the staff was super courteous, friendly, and quick with our order.",
                "everything was prepared fresh at the spotless live counter with a warm smile.",
                "the team handled our group order smoothly and served everything piping hot.",
                "the hygiene at the counter and genuine hospitality of the staff were 10/10.",
                "the quick turnaround time makes it perfect even during short college breaks."
            ],
            "AMBIENCE": [
                "the candy-pink brick walls and glowing illuminated arches are super Instagrammable.",
                "the plush pink seating, cute dessert quotes, and outdoor green turf create a great vibe.",
                "the ambient neon lighting and chill music make it the best hangout spot near GEHU.",
                "every corner of the cafe is photogenic and thoughtfully decorated.",
                "sitting opposite Pratap Cricket Turf under the warm evening lights was so relaxing."
            ],
            "ALL": [
                "the entire menu from ₹20 chai to ₹99 Nutella waffles offers unbeatable student value.",
                "the whole sweet treat vibe, food quality, and friendly service were spot on.",
                "everything we tried — waffles, Hocco cones, shakes, and cheesy fries — was a solid 10/10.",
                "it's rare to find a place that nails taste, hygiene, aesthetics, and budget pricing all at once."
            ]
        },
        "closings": [
            "Will definitely be coming back after college regularly!",
            "Highly recommend Scoop n Brew to everyone in Dehradun!",
            "Already planning our next visit with friends. 5 stars!",
            "Easily one of the sweetest and most affordable cafes in Clement Town!",
            "Can't wait to try the rest of the menu soon!",
            "10/10 experience — a true gem right outside GEHU Gate 1!",
            "Total value for money and guaranteed good vibes every time!",
            "If you haven't visited Scoop n Brew yet, you're seriously missing out!",
            "Five stars all the way for taste, presentation, and pocket-friendly prices!",
            "Our official go-to spot for evening snacks and desserts in Dehradun!",
            "Worth every single rupee — keep up the amazing work, team Scoop n Brew!",
            "Whether for a quick chai or a full waffle feast, this place never disappoints!"
        ]
    },
    "HINGLISH": {
        "combos": {
            "ICE_CREAM": [
                "Scoop n Brew ki ice cream Clement Town me sabse best hai! Hocco cones ekdum creamy aur fresh the, especially Nutty Chocolate aur Boss Bar. Crispy wafer cone aur velvety ice cream ka maza hi alag hai!",
                "GEHU ke paas best ice cream counter! Inka Strawberry Cheesecake cone try kiya jo super fresh aur delicious tha. College ke baad sweet cravings ke liye best place.",
                "Hocco ice cream lovers ke liye heaven hai! Ekdum chilled, crunchy waffle cone aur pocket-friendly price. 10/10 treat!",
                "Lectures ke baad doston ke saath Hocco Nutty Chocolate cone khaya — wafer cone last bite tak ekdum crunchy tha aur chocolate layer bohot rich thi!",
                "Graphic Era Gate 1 ke paas official Hocco ice cream milna best baat hai! Boss Bar ka chocolate crackle aur creamy center ekdum top notch hai.",
                "Aaj Scoop n Brew me Hocco Strawberry Cheesecake cone try kiya aur dil khush ho gaya! Real berry flavor, super creamy texture aur full paisa vasool.",
                "Pratap Cricket Turf pe match khelne ke baad thandi-thandi Hocco ice cream cone khane ka maza hi kuch aur hai! Best dessert stop in Clement Town.",
                "Inke Hocco cones hamesha fresh aur super crispy rehte hain, bilkul bhi soggy nahi hote. Nutty cone aur Boss Bar dono must-try hain!",
                "Garmi ki dopahar me GEHU se nikalte hi Scoop n Brew ki chilled Hocco ice cream best relief hai! Creamy, smooth aur authentic dairy taste.",
                "Sweet cravings ke liye hum hamesha yahan aate hain. Hocco ice cream ki variety kamaal ki hai aur pink neon lights ke neeche baith kar khane ki vibe hi alag hai!",
                "Clement Town me aisi premium quality ice cream itne pocket-friendly rates me kahin nahi milti. Strawberry Cheesecake cone is a solid 10/10!",
                "Raat ko dinner ke baad sweet dish ke liye Scoop n Brew best adda hai! Hocco Nutty cone aur Boss Bar dono hi super decadent hain.",
                "Ice cream bilkul सही temperature pe chilled serve hoti hai aur har bite me rich creaminess feel hoti hai. Full 5 stars!",
                "Friends group ke saath alag-alag Hocco cones try kiye — sabhi flavors ekdum fresh, authentic aur mouthwatering the!",
                "Bच्चों se lekar college students tak sabke liye best ice cream parlor hai. Clean freezer, polite staff aur super tasty Hocco cones!",
                "Ek baar inka Hocco Nutty Chocolate cone try karoge toh regular frozen desserts bhool jaoge. Proper rich ice cream with crunchy roasted nuts!",
                "Cute pink cafe ke andar baith kar ठंडी Hocco cone enjoy karna best evening break hai. Taste aur vibe dono 10 on 10!",
                "Har baar jab bhi kuch meetha khane ka mann hota hai, Scoop n Brew ke Hocco cones kabhi disappoint nahi karte. Always fresh & crunchy!",
                "Boss Bar ka thick chocolate coating aur andar ki velvety ice cream ekdum lajawab hai. GEHU students ka favorite sweet spot!",
                "Pocket-friendly price, zero waiting time aur Dehradun ki sabse tasty Hocco ice cream cones — definitely a must-visit!"
            ],
            "WAFFLES": [
                "Yahan ka Nutella waffle sirf ₹99 me best hai! Freshly pressed, bahar se super crispy aur andar se chocolatey. ₹20 extra me ice cream scoop add karke pure bliss ban gaya!",
                "Graphic Era ke paas best Belgian waffles! Waffle ki crispiness aur generous Nutella drizzle top notch thi. Mini pancakes (₹59) bhi super soft aur fluffy the.",
                "Friends ke saath chocolate waffle with ice cream aur mini pancakes try kiye. Garma-garam, crispy aur student-friendly budget me. Must try!",
                "Cafe me enter karte hi taaza bake hote hue waffles ki jo sweet khushbu aati hai, wahi bhookh badha deti hai! ₹99 me itna loaded Nutella waffle steal deal hai.",
                "Inka Belgian waffle bahar se एकदम golden-crisp hota hai aur andar se soft. Upar se ₹20 wala ice cream scoop rakhwa lo toh swaad double ho jata hai!",
                "Aaj White Chocolate aur Nutella dono waffles try kiye — kanjoosi bilkul nahi karte chocolate filling me! Har bite me rich melted chocolate aati hai.",
                "Sirf ₹59 me garma-garam fluffy Mini Pancakes milte hain yahan! Chocolate drizzle ke saath bite-sized pancakes khane me bohot hi addictive hain.",
                "Clement Town me ₹99 me isse badhiya Belgian waffle kahin nahi mil sakta! Order dene ke baad live counter pe fresh bake karke dete hain.",
                "Evening lectures ke baad hamari daily craving Scoop n Brew ka Chocolate Waffle aur ₹59 wale Mini Pancakes hain. Taste hamesha consistent rehta hai!",
                "Hot crispy waffle ke upar thandi vanilla ice cream melt hote hue khane ka experience ekdum heavenly tha! Best dessert near GEHU Gate 1.",
                "Bade cafes me jo waffle ₹200+ ka milta hai, wahi exact gourmet taste aur crunch yahan sirf ₹99 me mil jata hai. Student budget ke liye वरदान hai!",
                "Mini pancakes itne soft aur pillowy the ki munh me jaate hi ghul gaye! Upar se generous chocolate sauce ne maza dugauna kar diya.",
                "White Chocolate Belgian waffle try kiya — sweetness ekdum balanced thi aur waffle ka crunch last bite tak barkaraar raha. 10/10!",
                "Agar aap chocolate lover ho toh Scoop n Brew ka Nutella waffle with extra ice cream scoop miss mat karna. Pure chocolate overload!",
                "Doston ke saath birthday treat pe waffles aur mini pancakes mangwaye — presentation itna aesthetic tha ki pehle sabne Instagram stories daali!",
                "Waffle batter ekdum light aur airy hai, bilkul bhi chewy ya heavy nahi lagta. Perfectly toasted golden-brown waffles every single time!",
                "₹59 me Mini Pancakes aur ₹99 me Nutella Waffle — college students ke liye isse behtar aur sasta dessert option poore Dehradun me nahi hai!",
                "Garma-garam waffle, melted Nutella aur cute pink cafe ki vibe — shaam ki outing ekdum yaadgaar ban gayi!",
                "Live counter pe apni aankhon ke saamne fresh waffle bante dekhna aur turant garma-garam khana — freshness aur taste dono unbeatable hain!",
                "Humne teen plates mini pancakes aur do Nutella waffles order kiye poore group ke liye — sabne ungliyan chaat kar khaya. Full 5 stars!"
            ],
            "SHAKES": [
                "Oreo thick shake sirf ₹79 me ekdum thick aur rich tha! Real ice cream se blend kiya hua hai, koi patla syrup nahi. Clement Town ka best shake spot!",
                "Chocolate aur Oreo thick shakes dono hi bohot creamy aur chilled the. Glass me chocolate drizzle ka presentation bhi super aesthetic tha.",
                "Super thick gourmet shakes for under ₹80! Sips lete hi maza aa gaya. Afternoon college break ke liye perfect choice.",
                "Aksar cafes me thick shake ke naam pe patla doodh de dete hain, par Scoop n Brew ka ₹79 Oreo Shake sach me ULTRA THICK aur creamy hai!",
                "₹69 me Butterscotch aur Strawberry thick shakes try kiye — real ice cream scoops daal kar blend karte hain, taste ekdum rich aur refreshing hai!",
                "Chocolate Thick Shake (₹79) chocolate lovers ke liye jannat hai! Heavy, chocolaty, chilled aur upar se crunchy toppings ke saath.",
                "GEHU Gate 1 ke bahar garmi me ek glass chilled Blueberry ya Oreo thick shake pi lo toh saari thakaan utar jaati hai! Best shakes in town.",
                "Inke ₹69–₹79 wale thick shakes ki quantity aur quality easily ₹180 wale cafes ko takkar deti hai. Proper student-friendly luxury!",
                "Oreo shake me crushed Oreos ka crunch aur creamy vanilla ice cream ka blend ekdum spot on tha. Last sip tak maza aaya!",
                "Blueberry shake (₹69) ka color aur fruity taste dono bohot kamaal the! Cute cup aur wide straw ke saath presentation 10/10 hai.",
                "Live bar counter pe premium Barisco syrups aur real ice cream se shakes bante hain. Hygiene aur taste dono me koi compromise nahi!",
                "Butterscotch shake sirf ₹69 me itna creamy aur flavorful tha ki humne ek aur glass repeat order kar liya!",
                "College ke baad agar kuch filling aur thanda peena ho toh inka ₹79 Oreo ya Chocolate thick shake best meal replacement hai!",
                "Char doston ne char alag shakes mangwaye — Oreo, Chocolate, Strawberry aur Butterscotch — aur charo hi ek se badhkar ek nikle!",
                "Glass ke andar chocolate syrup ki swirling aur upar tak bhara hua frosty shake dekh kar hi dil khush ho jata hai. Super Instagrammable!",
                "Strawberry thick shake (₹69) bilkul bhi artificial nahi laga — super smooth, creamy aur bilkul sahi meetha!",
                "Dehradun me ₹79 me isse thick aurloaded Oreo milkshake milna namumkin hai. Har घूंट me Oreo crumbs aate hain!",
                "Thanda-thanda thick shake haath me lekar pink neon arch ke neeche baithna — best college hangout feeling!",
                "Quantity bharpoor hai aur shake itna gaadha hai ki peene ke baad pet bhar jata hai. Total paisa vasool experience!",
                "Shakes ki freshness aur thickness hamesha top class rehti hai. Scoop n Brew is officially our group's shake headquarters!"
            ],
            "FOOD": [
                "₹79 wali loaded cheesy fries ekdum next level hain! Piping hot crispy fries aur upar se creamy cheese sauce. Veg burger aur sandwich bhi bohot crispy aur tasty the.",
                "Clement Town me best peri peri fries! Garam, crunchy aur spicy seasoning. Veg burger ke saath proper budget meal ban gaya.",
                "Loaded fries, peri peri fries aur crispy burger sab kuch fresh aur hot serve hua. Students ke liye super pocket-friendly comfort food!",
                "Inka ₹79 wala Veg Burger bohot hi filling aur crunchy hai! Andar ki crispy herb patty, fresh veggies aur creamy sauces kaafi tasty hain.",
                "Sirf ₹69 me Grilled Veg Sandwich aur ₹69 me Peri Peri Fries — GEHU students ke liye lunch aur evening snacks ka sabse best combo!",
                "Loaded Cheesy Fries (₹79) ke upar itni saari creamy cheese sauce aur seasoning hoti hai ki har ek fry me double swaad aata hai!",
                "Order dene ke baad fresh fry karte hain, isliye fries ekdum garma-garam aur super crispy aati hain, bilkul bhi oily nahi lagtin!",
                "Grilled Veg Sandwich (₹69) bahar se एकदम golden-crisp toasted tha aur andar stuffing bharpoor thi. Choti bhookh ke liye best item!",
                "Scoop n Brew sirf meetha hi nahi, namkeen snacks me bhi champion hai! Burger, sandwich aur cheesy fries teeno 10/10 hain.",
                "Pratap Cricket Turf pe khelne ke baad ₹79 wali loaded fries aur crispy veg burger khana hamara roz ka fix routine ban gaya hai!",
                "Peri Peri Fries ka masala ekdum chatpata aur addictive hai! Crispy golden fries ke saath spicy seasoning ka maza hi alag hai.",
                "Doston ke saath share karne ke liye 2 plate Loaded Cheesy Fries aur Grilled Sandwiches mangwaye — portion size kaafi generous tha!",
                "₹79 ke Veg Burger me bun ekdum soft aur toasted tha, aur patty ka crunch lajawab tha. Bade burger chains se kahin zyada fresh!",
                "Jab lectures ke beech 20 minute ka break hota hai, toh yahan ka ₹69 sandwich aur peri peri fries best aur fastest snack hai.",
                "Cheese lovers ke liye ₹79 Loaded Fries heaven hain! Melted cheese drizzle ke baavajood fries neeche tak crispy rehti hain.",
                "Sabhi snacks bilkul fresh oil me bante hain aur garma-garam serve hote hain. Quality aur hygiene dekh kar maza aa gaya!",
                "Meethe waffles se pehle thoda chatpata khana ho toh inki Peri Peri Fries aur Veg Sandwich zaroor try karo — perfect savory start!",
                "Itne kam budget me itna tasty aur filling cafe food Clement Town me aur kahin nahi milta. Solid 5-star snacks!",
                "Veg Burger, Grilled Sandwich aur Loaded Fries teeno table pe bhaap nikalte hue aaye — har bite me freshness feel hui!",
                "Pocket-friendly rates aur 10/10 crunch! Scoop n Brew ka snacks menu college crowd ke hisaab se ekdum perfect banaya gaya hai."
            ],
            "BEVERAGES": [
                "Chilled mint aur watermelon mojito (₹69) ekdum refreshing the! Striped straw aur custom cup me presentation bhi bohot cute tha. Cold coffee bhi super rich thi.",
                "Creamy cold coffee ₹69 me aur hot Kesar chai sirf ₹25 me — itna badhiya taste aur cafe ambience tapri prices par! Best value near GEHU.",
                "Fizzy coolers aur chilled brews bohot invigorating the. Blueberry cooler garmi me ekdum fresh feel karwa deta hai.",
                "Socho itne sundar AC pink cafe me baith kar sirf ₹20 me Masala Chai aur ₹25 me Kesar Chai milti hai! GEHU students ke liye best adda.",
                "Inकी ₹69 wali Cold Coffee ekdum thick, frothy aur strong hai! महंगे cafes ki ₹200 wali cold coffee ko aaram se fail karti hai.",
                "Garmi ki dopahar me ₹69 wala Virgin Mint Mojito ya Watermelon Mojito pi lo toh rooh tak thandak pahunch jaati hai!",
                "Peach Iced Tea (₹69) aur Bubblegum Cooler dono hi super refreshing aur aesthetic the! Cute cups me photos bhi bohot achhi aati hain.",
                "₹29 ki Hot Coffee aur ₹25 ki Kesar Chai baarish ya shaam ke mausam me doston ke saath gup-shup ke liye perfect hain!",
                "Kesar Chai me asli kesar ki mehak aur elaichi ka swaad aata hai — sirf ₹25 me aisi chai milna kamaal ki baat hai!",
                "Blueberry Mojito aur Mint Mojito me fresh mint leaves, lemon aur Barisco syrups ka balance ekdum 10/10 tha. Super fizzy!",
                "Roz shaam ko classes ke baad hamari ₹20 wali chai ya ₹69 wali cold coffee Scoop n Brew pe hi pakki hoti hai!",
                "Bubblegum Mojito (₹69) ka flavor bohot unique aur fun hai! Thanda, fizzy aur dekhne me ekdum vibrant.",
                "Chahe aapko ₹20 ki kadak chai chahiye ho ya ₹69 ka fancy cafe cooler, yahan har pocket aur har mood ke liye drink available hai!",
                "Cold coffee ke upar jo thick foam aata hai aur roasted coffee ka strong punch milta hai, usne mujhe yahan ka daily regular bana diya!",
                "Watermelon cooler aur Peach Iced Tea dono hi bilkul sahi meethi aur super chilled thin. Garmi ka best ilaj near GEHU Gate 1!",
                "₹29 me itni frothy aur garma-garam Hot Coffee poore Clement Town me kisi cafe me nahi milti. Exam days me best energy booster!",
                "Live beverage counter pe barista jis safai aur style se mojitos aur cold coffee banate hain, dekh kar hi maza aa jata hai.",
                "Tapri ke daam me luxury pink cafe ki seating aur शानदार chai-coffee! Isse behtar deal students ke liye ho hi nahi sakti.",
                "Mint Mojito ka zesty punch aur Cold Coffee ki creaminess — dono hi apne price point pe unbeatable hain!",
                "Har drink fresh banti hai aur presentation me striped straw aur clean cups ka dhyan rakha jata hai. Full 5 stars!"
            ],
            "SERVICE": [
                "Staff ka behavior bohot sweet, polite aur quick tha! Order bohot jaldi prepare hua aur sab kuch fresh serve kiya gaya. 10/10 service!",
                "Super fast service aur spotless clean counters. Counter par team hamesha smiling face ke saath welcome karti hai.",
                "Team bohot courteous hai aur genuine hospitality ke saath serve karti hai. Bohot achha laga yahan aakar!",
                "College break me jab bheed hoti hai tab bhi staff bina kisikan ke bohot pyaar se aur jaldi order ready karke deta hai!",
                "Live counter ki safai dekh kar dil khush ho gaya! Waffle maker, blender aur tables sab kuch ekdum neat & clean rehta hai.",
                "Bhaiya aur poori team ka nature bohot humble aur friendly hai. Har customer ko VIP jaisa welcome milta hai!",
                "Humne group me kaafi saara सामान ek saath order kiya tha, phir bhi bina kisi galti ke sab kuch garma-garam aur time pe aa gaya!",
                "Menu choose karne me staff ne bohot achhe se guide kiya aur unke suggest kiye hue Nutella waffle aur Oreo shake best nikle!",
                "Hygiene aur fast service ke maamle me Scoop n Brew Clement Town ka number 1 cafe hai. Zero attitude, 100% sweetness!",
                "Chota sa ₹20 ki chai ka order ho ya bada party order, staff sabke saath ek jaisa polite aur respectful rehta hai.",
                "Mini pancakes pe thoda extra chocolate drizzle maanga toh smiling face ke saath bina mana kiye daal diya. Dil jeet liya!",
                "Fast billing, clean kitchen aur hamesha muskurata hua staff — aisi service ki wajah se hi hum roz yahan aate hain!"
            ],
            "AMBIENCE": [
                "Pink theme aur glowing illuminated arches ke saath bohot cute aesthetic cafe hai! Velvet seating aur chill music se vibe bohot relaxing banti hai.",
                "Cute pink aesthetic aur photogenic neon lighting! Instagram stories aur reels ke liye Clement Town ka best cafe opposite Pratap Turf.",
                "Super cozy aur vibrant college energy! Doston ke saath chill karne aur photos lene ke liye perfect spot.",
                "Candy-pink brick wall jispe cute ice cream quotes lage hain, wahan har photo ekdum DSLR jaisi aesthetic aati hai!",
                "Shaam ke waqt bahar green turf pe baithna jab warm lights jal jaati hain — Clement Town ki sabse peaceful aur pyari vibe!",
                "Andar ka backlit pink arch aur plush velvet sofa seating dates aur birthday celebrations ke liye ekdum dreamy lagta hai.",
                "GEHU Gate 1 ke paas sabse सुंदर aur photogenic cafe! Pink aur warm gold lights ka combination aankhon ko bohot sukoon deta hai.",
                "Background me halka chill music, thanda AC, aur cute pink interiors — lectures ki saari thakaan yahan baith kar gayab ho jaati hai!",
                "Pratap Cricket Turf ke bilkul saamne raat ko jab Scoop n Brew ki lights chamakti hain toh storefront bohot hi premium lagta hai.",
                "Chota sa par itna thoughtfully designed cafe hai ki har corner Pinterest जैसा lagta hai! Reels aur selfies ke liye best jagah.",
                "Indoor pink booth seating bhi cozy hai aur outdoor turf seating bhi khuli aur hawa-daar hai — dono taraf ka माहौल 10/10 hai!",
                "Positive youth energy, clean tables aur aesthetic wall frames — doston ke saath ghanto baithne ka mann karta hai yahan!"
            ],
            "ALL": [
                "Scoop n Brew GEHU Gate 1 ke paas best hangout spot hai! Creamy Hocco ice cream, crispy Nutella waffle, thick Oreo shake aur ₹20 se shuru hone wale budget prices. Pink vibe aur friendly staff ke saath 10/10 experience!",
                "Waffles se lekar loaded cheesy fries aur polite staff tak sab kuch 10 on 10 tha. Definitely regular aayenge!",
                "Hamara naya regular hangout spot! Great sweet treats, chill pink aesthetic aur super affordable menu. Full 5 stars!",
                "Clement Town ka sabse best all-rounder cafe! ₹20 ki chai se lekar ₹59 mini pancakes, ₹79 loaded fries aur ₹99 Nutella waffle tak sab kuch lajawab hai.",
                "Aaj poore college gang ke saath Scoop n Brew aaye — Hocco cones, Oreo thick shake, peri peri fries aur Belgian waffle sab try kiya. Ek bhi item aisa nahi tha jo 10/10 na ho!",
                "Pratap Cricket Turf ke saamne students ke liye isse badhiya adda koi nahi hai! Pocket-friendly menu, aesthetic pink decor aur super fast service.",
                "Itne kam budget me itना sundar cafe aur itna tasty khana Dehradun me bohot rare hai! Scoop n Brew ne dil jeet liya.",
                "Subah ki ₹25 Kesar Chai ho, dopahar ka ₹69 Mint Mojito aur Sandwich ho, ya raat ki ₹99 Nutella Waffle — har waqt ke liye best place!",
                "Taste, hygiene, presentation, ambiance aur price — paancho cheezon me Scoop n Brew ko poore 5 stars milne chahiye!",
                "Agar aap Graphic Era ya Clement Town ke aas-paas ho aur Scoop n Brew try nahi kiya, toh aap Dehradun ka cutest dessert cafe miss kar rahe ho!",
                "Meethe me Hocco ice cream aur waffles, namkeen me cheesy fries aur burger, aur peene me thick shakes — sab kuch ek hi chhat ke neeche mil jata hai!",
                "Birthday treats aur doston ki party ke liye best jagah! Bill bhi bohot kam aata hai aur pet aur mann dono bhar jaate hain.",
                "Pink brick wall pe photos khinchwayi, ₹99 wala crispy Nutella waffle khaya aur ₹79 ka Oreo shake piya — best evening ever!",
                "Yahan ki har cheez fresh banti hai aur staff itne pyaar se serve karta hai ki baar-baar aane ka mann karta hai. Highly recommended!",
                "Quality ingredients, zero मिलावट, real Hocco ice cream aur student-friendly rates — Scoop n Brew is truly the pride of Clement Town!",
                "Humne first time visit kiya tha par ab yeh hamara daily spot ban chuka hai. Fluffy mini pancakes aur cold coffee toh roz ki aadat ban gayi hai!",
                "Aesthetic vibes + tasty comfort food + pocket-friendly prices = Scoop n Brew! Poore group ki taraf se 100/100 marks!",
                "Chahe date pe jana ho ya doston ke saath chill karna ho, is pink cafe ki vibe aur menu dono hi har mood me fit baithte hain!"
            ],
            "HOCCO": [
                "Scoop n Brew pe official Hocco ice cream milti hai! Nutty Chocolate cone aur Boss Bar dono hi super creamy aur crunchy the.",
                "Inka Hocco Strawberry Cheesecake cone ekdum lajawab hai! Wafer cone neeche tak chocolate aur ice cream se bhara hua tha.",
                "GEHU Gate 1 ke paas authentic Hocco cones aur bars ke liye best jagah! Hamesha properly chilled aur fresh milte hain.",
                "Hocco Nutty cone ka crunch aur rich chocolate flavor har baar mood fresh kar deta hai. Best quick dessert!",
                "Friends ke saath Hocco Boss Bar aur Strawberry Cheesecake cone khaya — असली dairy ice cream ka swaad hi alag hota hai!"
            ],
            "MINI_PANCAKES": [
                "Sirf ₹59 me garma-garam Mini Pancakes! Ekdum soft, fluffy aur upar se bharpoor melted chocolate drizzle — total steal deal!",
                "Scoop n Brew ke ₹59 wale mini pancakes hamara daily after-college snack ban chuke hain! Bite-sized aur super chocolaty.",
                "₹60 ke andar isse tasty aur cute dessert poore Clement Town me nahi milega! ₹20 me ice cream scoop add karke maza double ho gaya.",
                "Taaza bane hue warm mini pancakes jab chocolate sauce me doobے hue aate hain toh dekh kar hi munh me paani aa jata hai!",
                "Soft, pillowy aur freshly flipped! ₹59 Mini Pancakes har sweet lover ko zaroor try karne chahiye."
            ],
            "PANCAKES": [
                "Sirf ₹59 me garma-garam Mini Pancakes! Ekdum soft, fluffy aur upar se bharpoor melted chocolate drizzle — total steal deal!",
                "Scoop n Brew ke ₹59 wale mini pancakes hamara daily after-college snack ban chuke hain! Bite-sized aur super chocolaty.",
                "₹60 ke andar isse tasty aur cute dessert poore Clement Town me nahi milega! ₹20 me ice cream scoop add karke maza double ho gaya."
            ],
            "FRIES": [
                "₹79 wali Loaded Cheesy Fries ekdum bawal cheez hai! Crispy golden fries ke upar bhar-bhar ke creamy cheese sauce daalte hain.",
                "Clement Town ki sabse crispy aur chatpati Peri Peri Fries (₹69)! Masala ekdum kadak hai aur fries bilkul fresh fry hoti hain.",
                "Loaded Cheesy Fries aur Peri Peri Fries dono table pe garma-garam aayin — quantity aur taste dono 10 on 10!",
                "Cheese lovers ke liye inki ₹79 loaded fries must-try hain! Melted cheese ke saath crispy fries ka combo unbeatable hai.",
                "Pratap Cricket Turf ke saamne shaam ko ₹69 wali spicy peri peri fries khane ka maza hi alag hai!"
            ],
            "BURGERS_SANDWICHES": [
                "₹79 ka crispy Veg Burger aur ₹69 ka Grilled Veg Sandwich — student budget me sabse filling aur tasty lunch!",
                "Inka Grilled Sandwich (₹69) bahar se golden-crisp toasted hota hai aur andar fresh veggies aur sauces ki bharpoor stuffing hoti hai!",
                "Veg Burger (₹79) ki patty super crunchy thi aur bun ekdum fresh. Is price me itna badhiya burger milna kamaal hai!",
                "Lectures ke beech bhookh lagi toh Veg Burger aur Grilled Sandwich mangwaya — garma-garam, fresh aur full paisa vasool!",
                "Breads & Buns section me ₹69 sandwich aur ₹79 burger dono hi top-notch hain. Fresh preparation aur great sauces!"
            ],
            "SANDWICHES": [
                "Inka Grilled Veg Sandwich sirf ₹69 me super crispy aur well-stuffed hota hai! Golden toasted bread aur tasty filling.",
                "GEHU ke paas quick bite ke liye ₹69 wala grilled sandwich best option hai — garma-garam, crunchy aur delicious!",
                "Grilled sandwich aur ₹79 veg burger dono hi fresh bante hain aur taste me bade cafes ko peeche chhod dete hain!"
            ],
            "MOJITOS": [
                "₹69 me Mint aur Watermelon Mojito ekdum chilled aur refreshing the! Cute cup aur striped straw ke saath look bhi 10/10 tha.",
                "Blueberry aur Bubblegum coolers (₹69) garmi me best thirst-quencher hain! Fizzy, icy aur gourmet Barisco syrups se bane hue.",
                "Peach Iced Tea aur Virgin Mint Mojito (₹69) dopahar ke lectures ke baad turant energy aur freshness de dete hain!",
                "Fresh pudina, lemon aur chilled soda ka punch inke ₹69 Mint Mojito me ekdum perfect aata hai. Must try!",
                "Watermelon aur Blueberry mojitos dekhne me jitne colorful aur aesthetic hain, peene me usse bhi zyada refreshing hain!"
            ],
            "COFFEE_CHAI": [
                "₹69 me frothy Cold Coffee aur sirf ₹25 me Kesar Chai — Scoop n Brew ke beverage prices poore Clement Town me unbeatable hain!",
                "Itne cute pink cafe me baith kar ₹20 ki Masala Chai aur ₹29 ki Hot Coffee peene ka sukoon hi alag hai!",
                "Inki ₹69 Cold Coffee ekdum creamy aur strong hai, aur ₹25 wali Kesar Chai me asli kesar ki khushbu aati hai!",
                "Shaam ki chai-coffee ke liye GEHU Gate 1 ke paas sabse best adda! ₹20–₹29 me hot brews aur ₹69 me cold coffee.",
                "Frothy Hot Coffee (₹29) aur Kesar Chai (₹25) ne mausam bana diya! Taste aur budget dono me 10/10."
            ],
            "COFFEE": [
                "₹69 wali Cold Coffee ekdum thick, frothy aur chilled thi! GEHU ke paas best cold coffee spot.",
                "₹69 Cold Coffee aur ₹29 Hot Coffee dono hi strong, creamy aur freshly brewed hain. Coffee lovers ke liye best deal!",
                "Mehange cafes chhodo, Scoop n Brew ki ₹69 frothy Cold Coffee try karo — ek baar piyoge toh fan ho jaoge!"
            ],
            "ICE_CREAM,WAFFLES": [
                "Garam crispy Nutella waffle ke saath thandi Hocco ice cream — ultimate combo! Hot aur cold ka contrast mind-blowing tha.",
                "Belgian chocolate waffle with chilled ice cream scoop — crunch aur creaminess dono ek saath. Sweet lovers ke liye pure delight!",
                "₹99 Nutella waffle ke upar ₹20 ka ice cream scoop aur saath me Hocco Nutty cone — best dessert party near GEHU!",
                "Garma-garam ₹59 mini pancakes aur ठंडी Hocco Strawberry Cheesecake cone ka combination dil khush kar gaya!"
            ],
            "ICE_CREAM,SHAKES": [
                "Crunchy Hocco cone aur thick Oreo shake — sweet cravings ke liye best combination! Student budget me itni quality unbelievable hai.",
                "Strawberry Cheesecake cone aur chocolate shake dono hi top tier the. Full dessert satisfaction!",
                "Real ice cream se bana ₹79 Oreo thick shake aur saath me Hocco Boss Bar — dairy dessert lovers ke liye jannat hai yeh jagah!",
                "Ek haath me Hocco Nutty cone aur doosre me ₹69 Butterscotch thick shake — Clement Town ki sabse sweet sham!"
            ],
            "WAFFLES,SHAKES": [
                "Fresh warm Nutella waffle aur chilled Oreo shake ka combo bohot mast laga! Super crisp waffle aur thick shake for such budget prices.",
                "Crispy golden waffle aur thick chocolate shake — post-lecture college treat ke liye best duo!",
                "₹99 Belgian waffle + ₹79 Oreo thick shake = ₹180 ke andar poore Dehradun ka sabse heavy aur tasty dessert combo!",
                "Garma-garam ₹59 mini pancakes ke saath thanda-thanda Blueberry shake (₹69) bohot hi lajawab laga!"
            ],
            "FOOD,SHAKES": [
                "Crispy peri peri fries with cheese aur saath me chilled Oreo shake! Savory spicy crunch ke baad sweet thick sip — totally satisfying meal.",
                "Veg burger, loaded fries aur chocolate shake ka combo pure comfort food hai. Friends ke saath hangout sorted!",
                "₹79 Loaded Cheesy Fries khate hue ₹79 Oreo Thick Shake peena hamara favorite after-class combo hai!",
                "₹69 Grilled Sandwich, ₹69 Peri Peri Fries aur ₹69 Butterscotch Shake — super pocket-friendly aur pet bharne wala meal!"
            ],
            "FOOD,BEVERAGES": [
                "Crispy grilled sandwich aur loaded fries ke saath thanda mint mojito maza aa gaya. Value for money aur taste dono top class!",
                "Crunchy burger aur chilled watermelon cooler afternoon lunch ke liye best combination raha.",
                "₹69 Grilled Veg Sandwich ke saath ₹25 wali garma-garam Kesar Chai — shaam ki bhookh ka sabse best ilaj!",
                "₹79 Veg Burger aur Loaded Fries ke saath ₹69 wali frothy Cold Coffee ekdum cafe-style feast ban gayi!"
            ],
            "ICE_CREAM,FOOD": [
                "Pehle hot cheesy loaded fries khayi aur baad me chilled Hocco cone — ekdum balanced aur satisfying treat!",
                "Savory spicy fries ke baad sweet creamy ice cream scoops — perfect ending to our hangout!",
                "Pehle ₹79 Veg Burger aur Peri Peri Fries se pet bhara, phir Hocco Boss Bar se munh meetha kiya. 10/10 combo!"
            ],
            "WAFFLES,BEVERAGES": [
                "Chocolate waffle ke saath chilled drink bohot refreshing combo bana. Warm crispiness aur fizzy sip ka perfect blend!",
                "Nutella waffle aur creamy cold coffee ka combination bohot soothing tha. Great taste and cute vibes.",
                "₹59 Mini Pancakes aur ₹69 Cold Coffee — shaam ko doston ke saath baithne ke liye best budget combo!"
            ],
            "ICE_CREAM,AMBIENCE": [
                "Pink illuminated cafe me chilled Hocco ice cream enjoy karne ka maza hi alag hai! Photos ke liye Dehradun ka cutest cafe.",
                "Cute pink seating, illuminated arches aur delicious ice cream cones — overall vibe bohot aesthetic thi.",
                "Pink brick quotes wall ke saamne Hocco cone pakad kar jo photos aayin, woh Instagram pe sabko bohot pasand aayin!"
            ],
            "WAFFLES,AMBIENCE": [
                "Taaza bante hue waffles ki khushbu aur pink cafe ka aesthetic vibe dono dil khush kar dete hain! Super photogenic interior.",
                "Warm waffles aur cozy pink lighting — doston ke saath baithne ke liye best ambiance.",
                "Backlit pink arch wali velvet seat pe baith kar garma-garam ₹99 Nutella waffle khana ekdum royal feel deta hai!"
            ],
            "SHAKES,AMBIENCE": [
                "Oreo shake haath me aur pink neon background — perfect Instagram story material! Chill vibe and great college energy.",
                "Cozy seating me baith kar thick shake sip karna bohot relaxing tha. Bohot pyara cafe hai."
            ],
            "SERVICE,AMBIENCE": [
                "Staff ka behavior bohot sweet tha aur cafe ka interior bohot clean aur cozy hai. Full positive vibes!",
                "Warm hospitality aur photogenic pink decor — college ke baad relax karne ke liye best place."
            ]
        },
        "openings": [
            "Aaj Scoop n Brew GEHU Gate 1 visit kiya aur maza aa gaya!",
            "Scoop n Brew Clement Town me bohot hi accha experience raha!",
            "Finally Scoop n Brew try kiya aur expectations se bhi badhiya nikla!",
            "Agar Graphic Era ke paas ho toh yeh cute pink cafe zaroor visit karo!",
            "Aaj doston ke saath Scoop n Brew me bohot badhiya time spend kiya!",
            "Pratap Cricket Turf ke bilkul saamne Scoop n Brew hamara naya favorite adda ban gaya hai!",
            "Lectures ke baad thकान mitane ke liye Scoop n Brew se behtar jagah poore Clement Town me nahi hai!",
            "Aaj college gang ke saath Scoop n Brew gaye the aur har ek cheez खा कर dil khush ho gaya!",
            "Dehradun me student budget ke hisaab se sabse cute aur tasty dessert cafe mil gaya!",
            "Jab bhi GEHU Gate 1 ke paas kuch meetha ya chatpata khane ka mann ho, Scoop n Brew best hai!",
            "Pehli baar Scoop n Brew aaye the par ab hum yahan ke pakke regular ban gaye hain!",
            "Itne pocket-friendly prices aur itna aesthetic pink cafe — Scoop n Brew ekdum steal deal hai!",
            "Shaam ki outing ke liye doston ke saath Scoop n Brew aaye aur 10/10 maza aaya!",
            "Cafe ke andar kadam rakhte hi waffles ki khushbu aur pink neon lights mood bana deti hain!",
            "Birthday treat ke liye Scoop n Brew choose kiya aur sabhi doston ne khoob tareef ki!",
            "Clement Town me tasty waffles, thick shakes aur Hocco ice cream ka sabse best ठिकाना!",
            "Chota break ho ya lambi gup-shup, Scoop n Brew ki vibe aur menu dono kamaal ke hain!",
            "Saste daam me 5-star cafe jaisa taste aur presentation chahiye toh Scoop n Brew zaroor aao!",
            "Aaj dopahar ke break me Scoop n Brew try kiya aur har bite paisa vasool nikli!",
            "Graphic Era ke students ke liye Scoop n Brew kisi blessing se kam nahi hai!"
        ],
        "bridges": [
            "Iske alawa,",
            "Saath hi,",
            "Aur toh aur,",
            "Sabse acchi baat yeh thi ki",
            "Ek aur cheez jo standout hui,",
            "Upar se,",
            "Itna hi nahi,",
            "Saath me humne dekha ki",
            "Maza tab aur badh gaya jab",
            "Plus,",
            "Iske saath-saath,",
            "Aur sabse badiya baat,"
        ],
        "categories": {
            "ICE_CREAM": [
                "Hocco ice cream cones super crunchy, creamy aur fresh the.",
                "Strawberry Cheesecake aur Nutty Chocolate cones ka taste ekdum authentic tha.",
                "Hocco Boss Bar ki thick chocolate layer aur creamy ice cream lajawab thi.",
                "har Hocco cone bilkul sahi chilled temperature pe crispy wafer ke saath serve hua.",
                "official Hocco ice cream ki variety dekh kar sweet tooth poori tarah satisfy ho gaya.",
                "crispy cone ke andar neeche tak bhari hui creamy ice cream ne maza dugauna kar diya."
            ],
            "WAFFLES": [
                "₹99 wala Belgian Nutella waffle ekdum fresh, warm aur bahar se super crispy tha.",
                "waffle ke upar ₹20 wala ice cream scoop add karne se hot & cold ka best combo ban gaya.",
                "₹59 wale mini pancakes super soft, fluffy aur melted chocolate se loaded the.",
                "White Chocolate aur Nutella waffles dono me chocolate filling bharpoor thi.",
                "order dene par live counter pe taaza bake kiya hua garma-garam waffle mila.",
                "waffle ka crunch aur mini pancakes ki softness dono hi 10 on 10 the."
            ],
            "SHAKES": [
                "₹79 wala Oreo thick shake super rich, creamy aur real ice cream se bana hua tha.",
                "Oreo aur Chocolate shake ki consistency ekdum thick aur decadent thi.",
                "₹69 me Butterscotch, Strawberry aur Blueberry shakes full paisa vasool aur frosty the.",
                "glass ke andar chocolate drizzle ke saath shake ka presentation bohot aesthetic tha.",
                "bina paani milaye proper thick milkshake serve kiya jo peete hi pet bhar gaya.",
                "Oreo shake ke har sip me crunchy cookie bits aur creamy ice cream ka swaad aaya."
            ],
            "FOOD": [
                "₹79 wali loaded cheesy fries ekdum hot, crispy aur creamy cheese sauce se bhari thi.",
                "₹79 ka veg burger aur ₹69 ka grilled sandwich super fresh, crunchy aur filling the.",
                "₹69 wali peri peri fries ka chatpata masala aur crunch ekdum addictive tha.",
                "saare savory snacks order dene par fresh fry aur grill karke garma-garam laye gaye.",
                "grilled veg sandwich bahar se golden-crisp aur andar se tasty stuffing se loaded tha.",
                "burger ki crispy herb patty aur cheesy fries ne bhookh ekdum shant kar di."
            ],
            "BEVERAGES": [
                "₹69 wala chilled mint aur watermelon mojito bohot fizzy aur refreshing tha.",
                "₹69 ki frothy cold coffee aur ₹25 ki kesar chai ka taste ekdum spot on tha.",
                "itne sundar cafe me ₹20 ki masala chai aur ₹29 ki hot coffee milna kamaal hai.",
                "Peach Iced Tea aur Blueberry cooler (₹69) garmi me ekdum thandak dene wale the.",
                "Bubblegum mojito cute cup aur striped straw ke saath dekhne aur peene dono me best tha.",
                "₹69 wali cold coffee apni creaminess aur strong coffee kick me bade cafes ko piche chhodti hai."
            ],
            "SERVICE": [
                "staff bohot polite, quick aur attentive tha.",
                "service bohot tezi se aur warm smile ke saath di gayi.",
                "live counter ekdum saaf-suthra tha aur hygiene ka poora dhyan rakha gaya.",
                "bheed hone ke baavajood hamara group order bina kisi delay ke garma-garam table pe aa gaya.",
                "bhaiya aur team ka humble behavior har customer ko apna bana leta hai."
            ],
            "AMBIENCE": [
                "candy-pink brick walls aur glowing illuminated arches bohot Instagrammable lagte hain.",
                "plush velvet seating, cute quotes aur outdoor green turf ne vibe ko super cozy bana diya.",
                "neon lighting aur chill background music ke saath baithne me bohot sukoon mila.",
                "cafe ka har ek corner photos aur Instagram reels ke liye ekdum perfect hai.",
                "Pratap Cricket Turf ke saamne shaam ki warm lights me baithने ka maza hi alag tha."
            ],
            "ALL": [
                "overall experience shuru se end tak 10 on 10 tha.",
                "vibe, food, hygiene aur student-friendly prices sab kuch ekdum perfect tha.",
                "₹20 ki chai se lekar ₹99 ke waffle tak poora menu hi super pocket-friendly aur tasty hai.",
                "meetha, namkeen aur thanda — teeno cheezon me Scoop n Brew poore Clement Town me best hai."
            ]
        },
        "closings": [
            "College ke baad yahan regular aane ka plan pakka hai!",
            "Dehradun me sabko Scoop n Brew zaroor recommend karunga!",
            "Doston ke saath next visit already decide ho gaya hai. 5 stars!",
            "Clement Town ka sabse cute aur pocket-friendly cafe hai yeh!",
            "Jald hi baaki menu bhi try karenge!",
            "Full paisa vasool experience — GEHU Gate 1 ke paas best jagah!",
            "10/10 for taste, ambiance and humble staff. Must visit!",
            "Agar abhi tak Scoop n Brew try nahi kiya toh aaj hi doston ke saath jao!",
            "Har ek item worth every rupee hai — keep shining team Scoop n Brew!",
            "Hamare poore friend circle ki taraf se poore 5 stars!",
            "Choti bhookh ho ya badi dessert craving, yeh jagah kabhi disappoint nahi karti!",
            "Definitely my new favorite hangout spot in Dehradun!"
        ]
    },
    "HINDI": {
        "combos": {
            "ICE_CREAM": [
                "स्कूप एन ब्रू की आइसक्रीम क्लेमेंट टाउन में सबसे बेहतरीन है! हॉक्को की नटी चाकलेट कोन और बॉस बार बेहद मलाईदार और ताज़ा थी। कुरकुरी वेफर कोन और ठंडी आइसक्रीम का अनोखा स्वाद है!",
                "हॉक्को आइसक्रीम के शौकीनों के लिए यह सबसे अच्छी जगह है। स्ट्रॉबेरी चीज़केक कोन बहुत ही ताज़ा और स्वादिष्ट था। कॉलेज के बाद मीठे के लिए परफेक्ट जगह।",
                "ग्राफिक एरा गेट 1 के पास सबसे बढ़िया आइसक्रीम पार्लर। ताज़ा हॉक्को कोन, शानदार स्वाद और बहुत ही वाजिब दाम।",
                "गर्मी के मौसम में यहाँ की ठंडी-ठंडी हॉक्को नटी कोन और बॉस बार खाकर मन खुश हो गया! हर बाइट में असली आइसक्रीम का गाढ़ा स्वाद मिलता है।",
                "दोस्तों के साथ अलग-अलग हॉक्को फ्लेवर्स चखे — सभी कोन एकदम कुरकुरे और ताज़ा थे। पूरे 5 स्टार!"
            ],
            "WAFFLES": [
                "यहाँ का न्यूटेला वॉफल सिर्फ ₹99 में बहुत ही लाजवाब है! बाहर से कुरकुरा और अंदर से गर्म चाकलेट से भरा हुआ। ₹20 में आइसक्रीम का स्कूप जोड़कर मज़ा दोगुना हो गया!",
                "बेल्जियन वॉफल्स बहुत ही कुरकुरे और ताज़ा थे। मिनी पैनकेक्स (₹59) भी बहुत ही मुलायम और चाकलेट से भरपूर थे। छात्रों के लिए सबसे बढ़िया डेसर्ट!",
                "दोस्तों के साथ चाकलेट वॉफल और मिनी पैनकेक्स खाए। गरमा-गरम, कुरकुरा और बेहद स्वादिष्ट। 10/10 अनुभव!",
                "ऑर्डर देने पर तुरंत ताज़ा बेक किया हुआ व्हाइट चाकलेट और न्यूटेला वॉफल परोसा गया। इतना स्वादिष्ट वॉफल इतने कम दाम में और कहीं नहीं मिलता!",
                "₹59 के मिनी पैनकेक्स इतने नरम और चाकलेट से लबरेज़ थे कि खाते ही मुंह में घुल गए!"
            ],
            "SHAKES": [
                "यहाँ का ओरियो थिक शेक सिर्फ ₹79 में बहुत ही गाढ़ा और स्वादिष्ट है! असली आइसक्रीम से बना हुआ यह शेक हर घूंट में ताजगी देता है।",
                "चाकलेट और ओरियो थिक शेक दोनों ही बहुत गाढ़े और ठंडे थे। ग्लास में चाकलेट की सजावट भी बहुत सुंदर थी।",
                "बेहतरीन शेक्स इतने कम दाम में मिलना बहुत मुश्किल है। कॉलेज के बाद दोस्तों के साथ बैठने के लिए सबसे बढ़िया जगह।",
                "₹69 में बटरस्कॉच, स्ट्रॉबेरी और ब्लूबेरी थिक शेक का स्वाद लाजवाब था! असली आइसक्रीम के साथ ब्लेंड किया हुआ गाढ़ा शेक।"
            ],
            "FOOD": [
                "₹79 वाली लोडेड चीज़ी फ्राइज बहुत ही कुरकुरी और गरमा-गरम चीज़ सॉस से भरी हुई थीं। वेज बर्गर और ग्रिल्ड सैंडविच भी बहुत स्वादिष्ट और ताज़ा था।",
                "पेरी पेरी फ्राइज बहुत ही कुरकुरी और चटपटी थीं। वेज बर्गर के साथ यह छात्रों के लिए एकदम सही और किफायती भोजन है।",
                "लोडेड फ्राइज, पेरी पेरी फ्राइज और कुरकुरा बर्गर सब कुछ बहुत ताज़ा और गरमा-गरम परोसा गया।",
                "₹69 का ग्रिल्ड वेज सैंडविच और ₹79 का बर्गर बहुत ही ताज़ा, कुरकुरा और पेट भरने वाला था!"
            ],
            "BEVERAGES": [
                "ठंडा पुदीना और तरबूज मोजिटो (₹69) बहुत ही ताज़ा और मन को खुश कर देने वाला था। सुंदर कप और स्ट्रॉ के साथ इसका प्रेजेंटेशन भी प्यारा था।",
                "मलाईदार कोल्ड कॉफी (₹69) और गरमा-गरम केसर चाय (₹25) का स्वाद भी बहुत उम्दा था। कम दामों में कैफ़े जैसी गुणवत्ता!",
                "ठंडे ड्रिंक्स और मोजिटो बहुत ही ताज़ा थे। हर घूंट में ताजगी का एहसास हुआ।",
                "इतने खूबसूरत गुलाबी कैफ़े में मात्र ₹20 में मसाला चाय, ₹25 में केसर चाय और ₹29 में हॉट कॉफी मिलना वाकई कमाल है!"
            ],
            "SERVICE": [
                "यहाँ का स्टाफ बहुत ही विनम्र, सहयोगी और फुर्तीला है। आर्डर बहुत तेज़ी से तैयार हुआ और सब कुछ मुस्कुराते हुए परोसा गया।",
                "बेहद तेज़ सेवा और साफ़-सुथरा काउंटर। ग्राहक सेवा में यह कैफ़े 10 में से 10 अंक पाने का हकदार है।",
                "स्टाफ का व्यवहार बहुत ही आत्मीय और मददगार था। यहाँ आकर बहुत अच्छा लगा।"
            ],
            "AMBIENCE": [
                "गुलाबी थीम और प्यारी रोशनी के साथ यह बहुत ही खूबसूरत और शांत कैफ़े है। आरामदायक बैठने की व्यवस्था और मधुर संगीत।",
                "तस्वीरें लेने के लिए क्लेमेंट टाउन का सबसे खूबसूरत कैफ़े! मनमोहक गुलाबी दीवारें और शानदार इंटीरियर।",
                "दोस्तों के साथ फुर्सत के पल बिताने के लिए सबसे शांत और सुंदर माहौल।"
            ],
            "ALL": [
                "स्कूप एन ब्रू ग्राफिक एरा के पास सबसे बेहतरीन आइसक्रीम और डेसर्ट कैफ़े है! स्वादिष्ट हॉक्को आइसक्रीम, न्यूटेला वॉफल, ओरियो शेक और किफायती दाम। गुलाबी माहौल और शानदार सेवा के साथ 5 स्टार अनुभव!",
                "वॉफल से लेकर लोडेड फ्राइज और विनम्र स्टाफ तक सब कुछ बहुत उम्दा था। हम यहाँ बार-बार आना पसंद करेंगे!",
                "हमारा नया पसंदीदा ठिकाना! स्वादिष्ट व्यंजन, खूबसूरत माहौल और बहुत ही किफायती दाम।",
                "क्लेमेंट टाउन में ₹20 की चाय से लेकर ₹99 के न्यूटेला वॉफल तक सब कुछ एक ही छत के नीचे बेहतरीन स्वाद के साथ मिलता है!"
            ],
            "ICE_CREAM,WAFFLES": [
                "गरम कुरकुरे न्यूटेला वॉफल के साथ ठंडी हॉक्को आइसक्रीम का मेल अद्भुत था! गरम और ठंडे का संगम बेहद स्वादिष्ट लगा।",
                "बेल्जियन चाकलेट वॉफल और ठंडी आइसक्रीम का स्कूप — मीठे के शौकीनों के लिए यह सबसे बेहतरीन जोड़ी है।"
            ],
            "ICE_CREAM,SHAKES": [
                "कुरकुरी हॉक्को कोन और गाढ़ा ओरियो शेक — दोनों बहुत ही लाजवाब थे। वाजिब दामों में इतनी शानदार गुणवत्ता अद्भुत है।",
                "स्ट्रॉबेरी चीज़केक कोन और चाकलेट शेक दोनों का स्वाद बहुत ही लाजवाब था।"
            ],
            "WAFFLES,SHAKES": [
                "गरमा-गरम न्यूटेला वॉफल और ठंडा ओरियो शेक — दोनों बहुत ही स्वादिष्ट और किफायती थे। हर बाइट में मज़ा आ गया!",
                "कुरकुरा वॉफल और गाढ़ा चाकलेट शेक कॉलेज के बाद की सबसे बेहतरीन ट्रीट है।"
            ],
            "FOOD,SHAKES": [
                "कुरकुरी पेरी पेरी फ्राइज और गाढ़ा ओरियो शेक — नमकीन और मीठे का बेहतरीन संगम था। बहुत ही तृप्त कर देने वाला भोजन!",
                "वेज बर्गर, लोडेड फ्राइज और ठंडा शेक दोस्तों के साथ खाने के लिए एकदम सही है।"
            ],
            "FOOD,BEVERAGES": [
                "ग्रिल्ड सैंडविच, लोडेड फ्राइज और ठंडा मिंट मोजिटो — स्वाद और ताजगी से भरपूर था।",
                "कुरकुरा बर्गर और ठंडा वाटरमेलन कूलर दोपहर के स्नैक्स के लिए सबसे बढ़िया साबित हुआ।"
            ],
            "ICE_CREAM,FOOD": [
                "पहले गरमा-गरम लोडेड फ्राइज और फिर ठंडी हॉक्को आइसक्रीम — दोनों का स्वाद बहुत ही उम्दा और संतुलित था!",
                "चटपटे स्नैक्स के बाद ठंडी मलाईदार आइसक्रीम ने दिन बना दिया।"
            ],
            "WAFFLES,BEVERAGES": [
                "गरम चाकलेट वॉफल और ठंडा मोजिटो — दोनों का मेल बहुत ही स्वादिष्ट और ताजगी भरा था।",
                "न्यूटेला वॉफल के साथ कोल्ड कॉफी का संगम बहुत ही सुखद रहा।"
            ],
            "ICE_CREAM,AMBIENCE": [
                "गुलाबी रोशनी और प्यारे माहौल में ठंडी आइसक्रीम का आनंद लेना बेहद सुखद था। तस्वीरें लेने के लिए बहुत सुंदर जगह है।",
                "खूबसूरत गुलाबी इंटीरियर और स्वादिष्ट आइसक्रीम कोन — माहौल बहुत ही दिलकश था।"
            ],
            "WAFFLES,AMBIENCE": [
                "ताज़ा बनते वॉफल्स की खुशबू और गुलाबी कैफ़े का खूबसूरत माहौल मन को मोह लेता है!",
                "गरमा-गरम वॉफल और शांत गुलाबी माहौल दोस्तों के साथ बैठने के लिए सबसे उपयुक्त है।"
            ],
            "SHAKES,AMBIENCE": [
                "प्यारे गुलाबी कैफ़े में बैठकर गाढ़े ओरियो शेक का मज़ा लेना बहुत अच्छा लगा। बेहद आरामदायक माहौल!",
                "आरामदायक सोफों पर बैठकर शेक की चुस्कियां लेना बहुत ही सुकून भरा अनुभव था।"
            ],
            "SERVICE,AMBIENCE": [
                "स्टाफ का व्यवहार बहुत ही अच्छा था और कैफ़े का माहौल बेहद साफ़-सुथरा और सुकून देने वाला है।",
                "विनम्र सेवा और खूबसूरत गुलाबी सजावट — कॉलेज के बाद आराम करने की सबसे अच्छी जगह।"
            ],
            "HOCCO": [
                "स्कूप एन ब्रू की आइसक्रीम क्लेमेंट टाउन में सबसे बेहतरीन है! हॉक्को की नटी चाकलेट कोन और बॉस बार बेहद मलाईदार और ताज़ा थी।",
                "हॉक्को आइसक्रीम के शौकीनों के लिए यह सबसे अच्छी जगह है। स्ट्रॉबेरी चीज़केक कोन बहुत ही ताज़ा और स्वादिष्ट था।"
            ],
            "MINI_PANCAKES": [
                "यहाँ के ₹59 वाले मिनी पैनकेक्स बहुत ही मुलायम और चाकलेट से भरपूर थे। छात्रों के लिए सबसे बढ़िया डेसर्ट!",
                "गरमा-गरम मिनी पैनकेक्स और न्यूटेला वॉफल का स्वाद बेहद लाजवाब था।"
            ],
            "PANCAKES": [
                "यहाँ के ₹59 वाले मिनी पैनकेक्स बहुत ही मुलायम और चाकलेट से भरपूर थे। छात्रों के लिए सबसे बढ़िया डेसर्ट!"
            ],
            "FRIES": [
                "₹79 वाली लोडेड चीज़ी फ्राइज और ₹69 वाली पेरी पेरी फ्राइज बहुत ही कुरकुरी और स्वादिष्ट थीं!"
            ],
            "BURGERS_SANDWICHES": [
                "₹79 का वेज बर्गर और ₹69 का ग्रिल्ड सैंडविच बहुत ही ताज़ा और कुरकुरा था!"
            ],
            "SANDWICHES": [
                "₹69 का ग्रिल्ड सैंडविच बहुत ही कुरकुरा और स्वादिष्ट था!"
            ],
            "MOJITOS": [
                "ठंडा पुदीना और तरबूज मोजिटो (₹69) बहुत ही ताज़ा और मन को खुश कर देने वाला था!"
            ],
            "COFFEE_CHAI": [
                "मलाईदार कोल्ड कॉफी (₹69) और गरमा-गरम केसर चाय (₹25) का स्वाद बहुत उम्दा था!"
            ],
            "COFFEE": [
                "मलाईदार कोल्ड कॉफी (₹69) और हॉट कॉफी (₹29) का स्वाद बेहद लाजवाब था!"
            ]
        },
        "openings": [
            "आज ग्राफिक एरा गेट 1 के पास स्कूप एन ब्रू में जाकर बहुत अच्छा लगा!",
            "स्कूप एन ब्रू क्लेमेंट टाउन में हमारा अनुभव बहुत ही शानदार रहा।",
            "आखिरकार स्कूप एन ब्रू जाने का मौका मिला और यह हमारी उम्मीदों से भी बेहतर निकला!",
            "अगर आप क्लेमेंट टाउन में हैं तो इस प्यारे कैफ़े में ज़रूर जाएं!",
            "आज दोस्तों के साथ स्कूप एन ब्रू में बहुत ही बेहतरीन समय बीता।",
            "प्रताप क्रिकेट टर्फ के सामने स्थित स्कूप एन ब्रू छात्रों के लिए सबसे बेहतरीन कैफ़े है!",
            "शाम की हल्की भूख और मीठे के लिए स्कूप एन ब्रू से अच्छी जगह कोई नहीं है!"
        ],
        "bridges": [
            "इसके साथ ही,",
            "यही नहीं,",
            "और तो और,",
            "सबसे अच्छी बात यह थी कि",
            "एक और बात जिसने दिल जीत लिया,"
        ],
        "categories": {
            "ICE_CREAM": [
                "हॉक्को आइसक्रीम कोन बेहद कुरकुरी, मलाईदार और ताज़ा थी।",
                "स्ट्रॉबेरी चीज़केक और नटी कोन का स्वाद बहुत ही लाजवाब था।",
                "हॉक्को बॉस बार की चाकलेट परत और मलाईदार आइसक्रीम अद्भुत थी।"
            ],
            "WAFFLES": [
                "बेल्जियन न्यूटेला वॉफल ताज़ा, गरम और बेहद कुरकुरा था।",
                "वॉफल पर चाकलेट और आइसक्रीम का स्कूप बहुत ही स्वादिष्ट लगा।",
                "₹59 वाले मिनी पैनकेक्स बहुत ही नरम और चाकलेट सॉस से भरपूर थे।"
            ],
            "SHAKES": [
                "थिक शेक बहुत ही गाढ़ा, मलाईदार और असली आइसक्रीम से बना हुआ था।",
                "ओरियो शेक का गाढ़ापन और स्वाद बहुत ही उम्दा था।",
                "बटरस्कॉच और स्ट्रॉबेरी शेक बेहद ठंडे और ताज़ा थे।"
            ],
            "FOOD": [
                "लोडेड चीज़ी फ्राइज गरमा-गरम और स्वादिष्ट चीज़ सॉस से भरपूर थीं।",
                "वेज बर्गर और ग्रिल्ड सैंडविच बहुत ही ताज़ा और कुरकुरा था।",
                "पेरी पेरी फ्राइज का चटपटा मसाला बहुत ही लाजवाब था।"
            ],
            "BEVERAGES": [
                "ठंडा मिंट मोजिटो बहुत ही ताज़ा और मन को तरोताज़ा कर देने वाला था।",
                "कोल्ड कॉफी और केसर चाय का स्वाद बहुत ही संतुलित था।",
                "मात्र ₹20 में मसाला चाय और ₹69 में कोल्ड कॉफी मिलना बहुत किफायती है।"
            ],
            "SERVICE": [
                "स्टाफ बहुत ही विनम्र, सहयोगी और फुर्तीला था।",
                "सेवा बहुत तेज़ी से और मुस्कुराहट के साथ दी गई।"
            ],
            "AMBIENCE": [
                "गुलाबी दीवारें और जगमगाती आर्च लाइट्स बहुत ही सुंदर लगती हैं।",
                "सुंदर लाइटिंग और आरामदायक बैठने की जगह ने माहौल को प्यारा बना दिया।"
            ],
            "ALL": [
                "शुरू से अंत तक पूरा अनुभव 10 में से 10 था।",
                "यहाँ का माहौल, खाना और संगीत सब कुछ बहुत ही उम्दा था।"
            ]
        },
        "closings": [
            "कॉलेज के बाद यहाँ बार-बार आने का मन करेगा!",
            "देहरादून में सभी को स्कूप एन ब्रू ज़रूर जाना चाहिए!",
            "दोस्तों के साथ अगली मुलाकात यहीं होगी। पूरे 5 स्टार!",
            "शहर का सबसे प्यारा और किफायती कैफ़े है यह!",
            "जल्द ही बाकी का मेनू भी आज़माएंगे!",
            "स्वाद, स्वच्छता और दाम — तीनों में 10 में से 10 अंक!"
        ]
    }
};

if (typeof window !== 'undefined') {
    window.REVIEWS_DB = REVIEWS_DB;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { REVIEWS_DB };
}
