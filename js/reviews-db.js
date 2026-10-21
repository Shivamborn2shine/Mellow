/**
 * ===========================================================================
 * SCOOP N BREW — HUMANIZED REVIEWS ENGINE v2.5 (100% CURATED FOR ICE CREAM & CAFE)
 * Authentic Reviews across English, Hinglish & Hindi
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
                "Top-tier ice creams right near GEHU Gate 1. Authentic Hocco cones, generous scoops, and kept perfectly chilled. My go-to dessert spot!"
            ],
            "WAFFLES": [
                "Their freshly pressed Nutella waffle for ₹99 is unmatched! Warm, golden-crisp on the outside with melting chocolate inside. Adding a scoop of ice cream on top (+₹20) made it pure dessert bliss!",
                "Best Belgian waffles near Graphic Era! Super airy and crispy with generous chocolate drizzle. The mini pancakes (₹59) are also soft, fluffy, and decadent.",
                "Ordered the chocolate waffle with ice cream and warm mini pancakes with friends. Crispy, fresh, and pocket-friendly for students. 10/10 recommendation!"
            ],
            "SHAKES": [
                "The Oreo thick shake at ₹79 is hands down the best in Dehradun! Ultra-thick, creamy, and blended with real ice cream rather than thin syrups. Best thick shake place in town.",
                "Tried both their chocolate and strawberry thick shakes — rich, chilled, and presented so aesthetically. Definitely our favorite hangout after lectures!",
                "Super thick gourmet shakes for under ₹80! The Oreo shake with chocolate drizzle inside the glass was simply divine. Highly recommended!"
            ],
            "FOOD": [
                "The loaded cheesy fries for ₹79 are next level! Crispy golden fries smothered in creamy cheese sauce and served piping hot. The veg burger is also crunchy and delicious.",
                "Best peri peri fries around Clement Town! Hot, fiery, and extra crispy. Paired with their grilled veg sandwich, it's the ultimate comfort lunch.",
                "Ordered loaded fries, peri peri fries, and crispy burgers for the whole group. Fresh, savory, and very budget-friendly for students!"
            ],
            "BEVERAGES": [
                "Their refreshing mint and watermelon mojitos (₹69) are so revitalizing! Served icy cold with striped straws in cute cups. Great cold coffee as well!",
                "Tried their creamy cold coffee (₹69) and hot Kesar chai (₹25). Incredible taste and quality at tapping prices. Best beverage value near GEHU!",
                "Crisp fizzy coolers and rich brews! The iced blueberry cooler was delightfully refreshing and looked so aesthetic in photos."
            ],
            "SERVICE": [
                "The staff at Scoop n Brew is exceptionally polite, warm, and fast! Orders are prepared fresh right in front of you with genuine hospitality.",
                "Super fast service and spotless clean counters. The crew always greets you with a bright smile. 10/10 customer care!",
                "Loved the quick turnaround and courteous behavior of the team. They truly take pride in serving fresh food."
            ],
            "AMBIENCE": [
                "Such an Instagrammable pink cafe! The glowing illuminated arches, pastel decor, and cozy velvet seating make it the prettiest spot opposite Pratap Cricket Turf.",
                "Obsessed with the cute pink aesthetic and chill background music! Cozy, vibrant, and filled with great college energy near GEHU Gate 1.",
                "Stunning ambiance with photogenic neon lighting. Perfect cozy spot for dates, casual hangout, and aesthetic photos."
            ],
            "ALL": [
                "Scoop n Brew is hands-down the best dessert cafe near GEHU Gate 1! Creamy Hocco ice creams, crispy Nutella waffles, thick Oreo shakes, and budget prices starting at ₹20. Cute pink aesthetic and 10/10 service. Must visit!",
                "Everything from the sweet waffles to the loaded cheesy fries and courteous staff was 10/10. Definitely coming back regularly with friends!",
                "Our new regular hangout! Incredible ice creams, delicious waffles, thick shakes, and wonderful pink vibes. 5 stars all the way!"
            ],
            "ICE_CREAM,WAFFLES": [
                "Warm crispy Nutella waffle paired with a scoop of chilled Hocco ice cream is absolute heaven! The contrast between hot chocolate waffle and cold velvety ice cream was magical.",
                "Ordered the Belgian chocolate waffle and topped it with a scoop of ice cream. Crispy, gooey, and cold all at once — the ultimate dessert pairing!",
                "Waffles + Hocco ice cream here is an unbeatable combination. Freshly pressed, warm, and delightfully sweet."
            ],
            "ICE_CREAM,SHAKES": [
                "Ultimate dessert heaven! Enjoyed a crunchy Hocco ice cream cone alongside their thick Oreo shake. Pure sweet satisfaction at super affordable prices.",
                "Tried the Strawberry Cheesecake cone and chocolate shake — thick, rich, and made with real quality ingredients. 10/10 treat!"
            ],
            "WAFFLES,SHAKES": [
                "Freshly pressed Nutella waffle and an Oreo thick shake for under ₹180! Crisp waffle texture, rich chocolate shake, and unbeatable value near GEHU.",
                "Crispy golden waffle with warm chocolate paired with a chilled thick shake. The best post-lecture snack combo!"
            ],
            "FOOD,SHAKES": [
                "Hot peri peri fries with melted cheese paired with a chilled chocolate thick shake. Savory spicy crunch followed by rich sweet sips — pure comfort food!",
                "Crispy veg burger, loaded cheesy fries, and a thick Oreo shake. Totally satisfying comfort meal with friends at student-friendly prices."
            ],
            "FOOD,BEVERAGES": [
                "Crispy toasted veg sandwich and spicy loaded fries paired with an ice-cold mint mojito. Perfectly seasoned and wonderfully refreshing!",
                "Great savory bite! The crunchy burger and chilled watermelon cooler made the perfect afternoon lunch combo."
            ],
            "ICE_CREAM,FOOD": [
                "Started with piping hot loaded cheesy fries and finished with a crunchy Hocco Nutty cone. Best of both savory and sweet worlds!",
                "Hot, crispy savory snacks followed by rich creamy ice cream scoops. Perfect balance of flavors!"
            ],
            "WAFFLES,BEVERAGES": [
                "Warm chocolate waffle with a refreshing iced cooler. The warm crispiness paired with a fizzy chilled beverage was fantastic!",
                "Enjoyed their Nutella waffle with a rich cold coffee. Great sweetness, smooth brew, and lovely pink ambiance."
            ],
            "ICE_CREAM,AMBIENCE": [
                "Enjoying chilled creamy Hocco ice cream under the cute pink neon lights was such a vibe! Super cozy, aesthetic seating, and chill music.",
                "Prettiest spot in Clement Town for ice cream lovers! The pink arches and sweet treats make for great photos."
            ],
            "WAFFLES,AMBIENCE": [
                "The warm sweet aroma of freshly baking waffles filling this pink cafe is heavenly! Gorgeous decor, relaxed seating, and 5-star waffles.",
                "Aesthetic pink interior, lovely illuminated arches, and the best warm waffles near GEHU Gate 1."
            ],
            "SHAKES,AMBIENCE": [
                "Chilling with a thick Oreo shake in this gorgeous pink cafe is the best afternoon break. Super photogenic neon backdrop!",
                "Loved sipping thick shakes while soaking in the cozy, vibrant pink aesthetic. A true gem near Graphic Era."
            ],
            "SERVICE,AMBIENCE": [
                "Top-tier hospitality and the prettiest pink cafe interior! Staff greets you warmly, orders arrive super fast, and the vibe is spotless.",
                "Warm, welcoming staff and super aesthetic pink seating. Perfect place to relax and unwind after college classes."
            ],
            "ICE_CREAM,SERVICE": [
                "Super quick and friendly service at the counter! The team helped us pick the best Hocco ice cream flavors and served everything with a smile.",
                "Prompt service, clean counter, and delicious ice creams served fresh and cold. Great customer experience!"
            ],
            "WAFFLES,SERVICE": [
                "Fresh waffles made on order right in front of you and served piping hot in minutes. Attentive, polite staff that cares about quality!",
                "Fast, courteous service and warm crispy waffles served with generous toppings. Couldn't ask for better!"
            ],
            "HOCCO": [
                "Scoop n Brew has the best ice cream in Clement Town! We loved the Hocco Nutty Chocolate cone and Boss Bar — rich, velvety ice cream in a super fresh crispy wafer cone. The perfect sweet treat on a sunny day!",
                "If you love ice creams, you need to check out their Hocco counter! Tried the Strawberry Cheesecake cone and it was absolute perfection. Fresh, creamy, and so satisfying.",
                "Top-tier ice creams right near GEHU Gate 1. Authentic Hocco cones, generous scoops, and kept perfectly chilled. My go-to dessert spot!"
            ],
            "MINI_PANCAKES": [
                "Their freshly pressed Nutella waffle for ₹99 is unmatched! Warm, golden-crisp on the outside with melting chocolate inside. Adding a scoop of ice cream on top (+₹20) made it pure dessert bliss!",
                "Best Belgian waffles near Graphic Era! Super airy and crispy with generous chocolate drizzle. The mini pancakes (₹59) are also soft, fluffy, and decadent.",
                "Ordered the chocolate waffle with ice cream and warm mini pancakes with friends. Crispy, fresh, and pocket-friendly for students. 10/10 recommendation!"
            ],
            "PANCAKES": [
                "Their freshly pressed Nutella waffle for ₹99 is unmatched! Warm, golden-crisp on the outside with melting chocolate inside. Adding a scoop of ice cream on top (+₹20) made it pure dessert bliss!",
                "Best Belgian waffles near Graphic Era! Super airy and crispy with generous chocolate drizzle. The mini pancakes (₹59) are also soft, fluffy, and decadent.",
                "Ordered the chocolate waffle with ice cream and warm mini pancakes with friends. Crispy, fresh, and pocket-friendly for students. 10/10 recommendation!"
            ],
            "FRIES": [
                "The loaded cheesy fries for ₹79 are next level! Crispy golden fries smothered in creamy cheese sauce and served piping hot. The veg burger is also crunchy and delicious.",
                "Best peri peri fries around Clement Town! Hot, fiery, and extra crispy. Paired with their grilled veg sandwich, it's the ultimate comfort lunch.",
                "Ordered loaded fries, peri peri fries, and crispy burgers for the whole group. Fresh, savory, and very budget-friendly for students!"
            ],
            "BURGERS_SANDWICHES": [
                "The loaded cheesy fries for ₹79 are next level! Crispy golden fries smothered in creamy cheese sauce and served piping hot. The veg burger is also crunchy and delicious.",
                "Best peri peri fries around Clement Town! Hot, fiery, and extra crispy. Paired with their grilled veg sandwich, it's the ultimate comfort lunch.",
                "Ordered loaded fries, peri peri fries, and crispy burgers for the whole group. Fresh, savory, and very budget-friendly for students!"
            ],
            "SANDWICHES": [
                "The loaded cheesy fries for ₹79 are next level! Crispy golden fries smothered in creamy cheese sauce and served piping hot. The veg burger is also crunchy and delicious.",
                "Best peri peri fries around Clement Town! Hot, fiery, and extra crispy. Paired with their grilled veg sandwich, it's the ultimate comfort lunch.",
                "Ordered loaded fries, peri peri fries, and crispy burgers for the whole group. Fresh, savory, and very budget-friendly for students!"
            ],
            "MOJITOS": [
                "Their refreshing mint and watermelon mojitos (₹69) are so revitalizing! Served icy cold with striped straws in cute cups. Great cold coffee as well!",
                "Tried their creamy cold coffee (₹69) and hot Kesar chai (₹25). Incredible taste and quality at tapping prices. Best beverage value near GEHU!",
                "Crisp fizzy coolers and rich brews! The iced blueberry cooler was delightfully refreshing and looked so aesthetic in photos."
            ],
            "COFFEE_CHAI": [
                "Their refreshing mint and watermelon mojitos (₹69) are so revitalizing! Served icy cold with striped straws in cute cups. Great cold coffee as well!",
                "Tried their creamy cold coffee (₹69) and hot Kesar chai (₹25). Incredible taste and quality at tapping prices. Best beverage value near GEHU!",
                "Crisp fizzy coolers and rich brews! The iced blueberry cooler was delightfully refreshing and looked so aesthetic in photos."
            ],
            "COFFEE": [
                "Their refreshing mint and watermelon mojitos (₹69) are so revitalizing! Served icy cold with striped straws in cute cups. Great cold coffee as well!",
                "Tried their creamy cold coffee (₹69) and hot Kesar chai (₹25). Incredible taste and quality at tapping prices. Best beverage value near GEHU!",
                "Crisp fizzy coolers and rich brews! The iced blueberry cooler was delightfully refreshing and looked so aesthetic in photos."
            ]
        },
        "openings": [
            "Visited Scoop n Brew near GEHU Gate 1 today and loved it!",
            "Such a delightful experience at Scoop n Brew Clement Town.",
            "Finally checked out Scoop n Brew and it exceeded all expectations!",
            "If you're near Graphic Era Hill University, this sweet cafe is a must-visit!",
            "Had the best time hanging out at Scoop n Brew today."
        ],
        "bridges": [
            "On top of that,",
            "Also,",
            "Not to mention,",
            "To make things even better,",
            "What really stood out was that"
        ],
        "categories": {
            "ICE_CREAM": [
                "the Hocco ice cream cones were crunchy, creamy, and authentic.",
                "the Strawberry Cheesecake and Nutty chocolate cones were top tier."
            ],
            "WAFFLES": [
                "the Belgian Nutella waffle was warm, golden-brown, and delightfully crisp.",
                "the waffle toppings were super generous and the ice cream scoop was a great touch."
            ],
            "SHAKES": [
                "the thick shake was rich, creamy, and made with real ice cream.",
                "their Oreo shake consistency was super thick and decadent."
            ],
            "FOOD": [
                "the loaded cheesy fries were piping hot and seasoned to perfection.",
                "the crispy veg burger and sandwich were hearty, fresh, and flavorful."
            ],
            "BEVERAGES": [
                "the chilled mint mojito was crisp, fizzy, and bursting with freshness.",
                "the rich cold coffee and kesar chai were brewed to perfection."
            ],
            "SERVICE": [
                "the staff was super courteous, friendly, and prompt.",
                "the service was quick and served with genuine warmth."
            ],
            "AMBIENCE": [
                "the pink brick walls and illuminated arches are super Instagrammable.",
                "the ambient lighting and comfortable velvet seating create a great vibe."
            ],
            "ALL": [
                "the overall experience was top tier from start to finish.",
                "the whole sweet treat vibe, food, and music were simply spot on."
            ]
        },
        "closings": [
            "Will definitely be coming back after college regularly!",
            "Highly recommend Scoop n Brew to everyone in Dehradun!",
            "Already planning our next visit with friends. 5 stars!",
            "Easily one of the sweetest and most affordable cafes in town!",
            "Can't wait to try the rest of the menu soon!"
        ]
    },
    "HINGLISH": {
        "combos": {
            "ICE_CREAM": [
                "Scoop n Brew ki ice cream Clement Town me sabse best hai! Hocco cones ekdum creamy aur fresh the, especially Nutty Chocolate aur Boss Bar. Crispy wafer cone aur velvety ice cream ka maza hi alag hai!",
                "GEHU ke paas best ice cream counter! Inka Strawberry Cheesecake cone try kiya jo super fresh aur delicious tha. College ke baad sweet cravings ke liye best place.",
                "Hocco ice cream lovers ke liye heaven hai! Ekdum chilled, crunchy waffle cone aur pocket-friendly price. 10/10 treat!"
            ],
            "WAFFLES": [
                "Yahan ka Nutella waffle sirf ₹99 me best hai! Freshly pressed, bahar se super crispy aur andar se chocolatey. ₹20 extra me ice cream scoop add karke pure bliss ban gaya!",
                "Graphic Era ke paas best Belgian waffles! Waffle ki crispiness aur generous Nutella drizzle top notch thi. Mini pancakes (₹59) bhi super soft aur fluffy the.",
                "Friends ke saath chocolate waffle with ice cream aur mini pancakes try kiye. Garma-garam, crispy aur student-friendly budget me. Must try!"
            ],
            "SHAKES": [
                "Oreo thick shake sirf ₹79 me ekdum thick aur rich tha! Real ice cream se blend kiya hua hai, koi patla syrup nahi. Clement Town ka best shake spot!",
                "Chocolate aur Oreo thick shakes dono hi bohot creamy aur chilled the. Glass me chocolate drizzle ka presentation bhi super aesthetic tha.",
                "Super thick gourmet shakes for under ₹80! Sips lete hi maza aa gaya. Afternoon college break ke liye perfect choice."
            ],
            "FOOD": [
                "₹79 wali loaded cheesy fries ekdum next level hain! Piping hot crispy fries aur upar se creamy cheese sauce. Veg burger aur sandwich bhi bohot crispy aur tasty the.",
                "Clement Town me best peri peri fries! Garam, crunchy aur spicy seasoning. Veg burger ke saath proper budget meal ban gaya.",
                "Loaded fries, peri peri fries aur crispy burger sab kuch fresh aur hot serve hua. Students ke liye super pocket-friendly comfort food!"
            ],
            "BEVERAGES": [
                "Chilled mint aur watermelon mojito (₹69) ekdum refreshing the! Striped straw aur custom cup me presentation bhi bohot cute tha. Cold coffee bhi super rich thi.",
                "Creamy cold coffee ₹69 me aur hot Kesar chai sirf ₹25 me — itna badhiya taste aur cafe ambience tapri prices par! Best value near GEHU.",
                "Fizzy coolers aur chilled brews bohot invigorating the. Blueberry cooler garmi me ekdum fresh feel karwa deta hai."
            ],
            "SERVICE": [
                "Staff ka behavior bohot sweet, polite aur quick tha! Order bohot jaldi prepare hua aur sab kuch fresh serve kiya gaya. 10/10 service!",
                "Super fast service aur spotless clean counters. Counter par team hamesha smiling face ke saath welcome karti hai.",
                "Team bohot courteous hai aur genuine hospitality ke saath serve karti hai. Bohot achha laga yahan aakar!"
            ],
            "AMBIENCE": [
                "Pink theme aur glowing illuminated arches ke saath bohot cute aesthetic cafe hai! Velvet seating aur chill music se vibe bohot relaxing banti hai.",
                "Cute pink aesthetic aur photogenic neon lighting! Instagram stories aur reels ke liye Clement Town ka best cafe opposite Pratap Turf.",
                "Super cozy aur vibrant college energy! Doston ke saath chill karne aur photos lene ke liye perfect spot."
            ],
            "ALL": [
                "Scoop n Brew GEHU Gate 1 ke paas best hangout spot hai! Creamy Hocco ice cream, crispy Nutella waffle, thick Oreo shake aur ₹20 se shuru hone wale budget prices. Pink vibe aur friendly staff ke saath 10/10 experience!",
                "Waffles se lekar loaded cheesy fries aur polite staff tak sab kuch 10 on 10 tha. Definitely regular aayenge!",
                "Hamara naya regular hangout spot! Great sweet treats, chill pink aesthetic aur super affordable menu. Full 5 stars!"
            ],
            "ICE_CREAM,WAFFLES": [
                "Garam crispy Nutella waffle ke saath thandi Hocco ice cream — ultimate combo! Hot aur cold ka contrast mind-blowing tha.",
                "Belgian chocolate waffle with chilled ice cream scoop — crunch aur creaminess dono ek saath. Sweet lovers ke liye pure delight!"
            ],
            "ICE_CREAM,SHAKES": [
                "Crunchy Hocco cone aur thick Oreo shake — sweet cravings ke liye best combination! Student budget me itni quality unbelievable hai.",
                "Strawberry Cheesecake cone aur chocolate shake dono hi top tier the. Full dessert satisfaction!"
            ],
            "WAFFLES,SHAKES": [
                "Fresh warm Nutella waffle aur chilled Oreo shake ka combo bohot mast laga! Super crisp waffle aur thick shake for such budget prices.",
                "Crispy golden waffle aur thick chocolate shake — post-lecture college treat ke liye best duo!"
            ],
            "FOOD,SHAKES": [
                "Crispy peri peri fries with cheese aur saath me chilled Oreo shake! Savory spicy crunch ke baad sweet thick sip — totally satisfying meal.",
                "Veg burger, loaded fries aur chocolate shake ka combo pure comfort food hai. Friends ke saath hangout sorted!"
            ],
            "FOOD,BEVERAGES": [
                "Crispy grilled sandwich aur loaded fries ke saath thanda mint mojito maza aa gaya. Value for money aur taste dono top class!",
                "Crunchy burger aur chilled watermelon cooler afternoon lunch ke liye best combination raha."
            ],
            "ICE_CREAM,FOOD": [
                "Pehle hot cheesy loaded fries khayi aur baad me chilled Hocco cone — ekdum balanced aur satisfying treat!",
                "Savory spicy fries ke baad sweet creamy ice cream scoops — perfect ending to our hangout!"
            ],
            "WAFFLES,BEVERAGES": [
                "Chocolate waffle ke saath chilled drink bohot refreshing combo bana. Warm crispiness aur fizzy sip ka perfect blend!",
                "Nutella waffle aur creamy cold coffee ka combination bohot soothing tha. Great taste and cute vibes."
            ],
            "ICE_CREAM,AMBIENCE": [
                "Pink illuminated cafe me chilled Hocco ice cream enjoy karne ka maza hi alag hai! Photos ke liye Dehradun ka cutest cafe.",
                "Cute pink seating, illuminated arches aur delicious ice cream cones — overall vibe bohot aesthetic thi."
            ],
            "WAFFLES,AMBIENCE": [
                "Taaza bante hue waffles ki khushbu aur pink cafe ka aesthetic vibe dono dil khush kar dete hain! Super photogenic interior.",
                "Warm waffles aur cozy pink lighting — doston ke saath baithne ke liye best ambiance."
            ],
            "SHAKES,AMBIENCE": [
                "Oreo shake haath me aur pink neon background — perfect Instagram story material! Chill vibe and great college energy.",
                "Cozy seating me baith kar thick shake sip karna bohot relaxing tha. Bohot pyara cafe hai."
            ],
            "SERVICE,AMBIENCE": [
                "Staff ka behavior bohot sweet tha aur cafe ka interior bohot clean aur cozy hai. Full positive vibes!",
                "Warm hospitality aur photogenic pink decor — college ke baad relax karne ke liye best place."
            ],
            "HOCCO": [
                "Scoop n Brew ki ice cream Clement Town me sabse best hai! Hocco cones ekdum creamy aur fresh the, especially Nutty Chocolate aur Boss Bar. Crispy wafer cone aur velvety ice cream ka maza hi alag hai!",
                "GEHU ke paas best ice cream counter! Inka Strawberry Cheesecake cone try kiya jo super fresh aur delicious tha. College ke baad sweet cravings ke liye best place.",
                "Hocco ice cream lovers ke liye heaven hai! Ekdum chilled, crunchy waffle cone aur pocket-friendly price. 10/10 treat!"
            ],
            "MINI_PANCAKES": [
                "Yahan ka Nutella waffle sirf ₹99 me best hai! Freshly pressed, bahar se super crispy aur andar se chocolatey. ₹20 extra me ice cream scoop add karke pure bliss ban gaya!",
                "Graphic Era ke paas best Belgian waffles! Waffle ki crispiness aur generous Nutella drizzle top notch thi. Mini pancakes (₹59) bhi super soft aur fluffy the.",
                "Friends ke saath chocolate waffle with ice cream aur mini pancakes try kiye. Garma-garam, crispy aur student-friendly budget me. Must try!"
            ],
            "PANCAKES": [
                "Yahan ka Nutella waffle sirf ₹99 me best hai! Freshly pressed, bahar se super crispy aur andar se chocolatey. ₹20 extra me ice cream scoop add karke pure bliss ban gaya!",
                "Graphic Era ke paas best Belgian waffles! Waffle ki crispiness aur generous Nutella drizzle top notch thi. Mini pancakes (₹59) bhi super soft aur fluffy the.",
                "Friends ke saath chocolate waffle with ice cream aur mini pancakes try kiye. Garma-garam, crispy aur student-friendly budget me. Must try!"
            ],
            "FRIES": [
                "₹79 wali loaded cheesy fries ekdum next level hain! Piping hot crispy fries aur upar se creamy cheese sauce. Veg burger aur sandwich bhi bohot crispy aur tasty the.",
                "Clement Town me best peri peri fries! Garam, crunchy aur spicy seasoning. Veg burger ke saath proper budget meal ban gaya.",
                "Loaded fries, peri peri fries aur crispy burger sab kuch fresh aur hot serve hua. Students ke liye super pocket-friendly comfort food!"
            ],
            "BURGERS_SANDWICHES": [
                "₹79 wali loaded cheesy fries ekdum next level hain! Piping hot crispy fries aur upar se creamy cheese sauce. Veg burger aur sandwich bhi bohot crispy aur tasty the.",
                "Clement Town me best peri peri fries! Garam, crunchy aur spicy seasoning. Veg burger ke saath proper budget meal ban gaya.",
                "Loaded fries, peri peri fries aur crispy burger sab kuch fresh aur hot serve hua. Students ke liye super pocket-friendly comfort food!"
            ],
            "SANDWICHES": [
                "₹79 wali loaded cheesy fries ekdum next level hain! Piping hot crispy fries aur upar se creamy cheese sauce. Veg burger aur sandwich bhi bohot crispy aur tasty the.",
                "Clement Town me best peri peri fries! Garam, crunchy aur spicy seasoning. Veg burger ke saath proper budget meal ban gaya.",
                "Loaded fries, peri peri fries aur crispy burger sab kuch fresh aur hot serve hua. Students ke liye super pocket-friendly comfort food!"
            ],
            "MOJITOS": [
                "Chilled mint aur watermelon mojito (₹69) ekdum refreshing the! Striped straw aur custom cup me presentation bhi bohot cute tha. Cold coffee bhi super rich thi.",
                "Creamy cold coffee ₹69 me aur hot Kesar chai sirf ₹25 me — itna badhiya taste aur cafe ambience tapri prices par! Best value near GEHU.",
                "Fizzy coolers aur chilled brews bohot invigorating the. Blueberry cooler garmi me ekdum fresh feel karwa deta hai."
            ],
            "COFFEE_CHAI": [
                "Chilled mint aur watermelon mojito (₹69) ekdum refreshing the! Striped straw aur custom cup me presentation bhi bohot cute tha. Cold coffee bhi super rich thi.",
                "Creamy cold coffee ₹69 me aur hot Kesar chai sirf ₹25 me — itna badhiya taste aur cafe ambience tapri prices par! Best value near GEHU.",
                "Fizzy coolers aur chilled brews bohot invigorating the. Blueberry cooler garmi me ekdum fresh feel karwa deta hai."
            ],
            "COFFEE": [
                "Chilled mint aur watermelon mojito (₹69) ekdum refreshing the! Striped straw aur custom cup me presentation bhi bohot cute tha. Cold coffee bhi super rich thi.",
                "Creamy cold coffee ₹69 me aur hot Kesar chai sirf ₹25 me — itna badhiya taste aur cafe ambience tapri prices par! Best value near GEHU.",
                "Fizzy coolers aur chilled brews bohot invigorating the. Blueberry cooler garmi me ekdum fresh feel karwa deta hai."
            ]
        },
        "openings": [
            "Aaj Scoop n Brew GEHU Gate 1 visit kiya aur maza aa gaya!",
            "Scoop n Brew Clement Town me bohot hi accha experience raha.",
            "Finally Scoop n Brew try kiya aur expectations se bhi badhiya nikla!",
            "Agar Graphic Era ke paas ho toh yeh cute cafe zaroor visit karo!",
            "Aaj doston ke saath Scoop n Brew me bohot badhiya time spend kiya."
        ],
        "bridges": [
            "Iske alawa,",
            "Saath hi,",
            "Aur toh aur,",
            "Sabse acchi baat yeh thi ki",
            "Ek aur cheez jo standout hui,"
        ],
        "categories": {
            "ICE_CREAM": [
                "Hocco ice cream cones super crunchy aur creamy the.",
                "Strawberry Cheesecake aur Nutty cones ka taste ekdum authentic tha."
            ],
            "WAFFLES": [
                "Belgian Nutella waffle ekdum fresh, warm aur crispy tha.",
                "waffle ke toppings generous the aur ice cream scoop ne maza double kar diya."
            ],
            "SHAKES": [
                "thick shake super rich, creamy aur real ice cream se bana hua tha.",
                "Oreo shake ki consistency ekdum thick aur decadent thi."
            ],
            "FOOD": [
                "loaded cheesy fries ekdum hot, crispy aur flavorful thi.",
                "veg burger aur sandwich super fresh aur filling the."
            ],
            "BEVERAGES": [
                "chilled mint mojito bohot fizzy aur refreshing tha.",
                "cold coffee aur kesar chai ka taste ekdum perfect tha."
            ],
            "SERVICE": [
                "staff bohot polite, quick aur attentive tha.",
                "service bohot tezi se aur warm smile ke saath di gayi."
            ],
            "AMBIENCE": [
                "pink brick walls aur illuminated arches bohot aesthetic lagte hain.",
                "lighting aur comfortable seating ne vibe ko super cozy bana diya."
            ],
            "ALL": [
                "overall experience shuru se end tak 10 on 10 tha.",
                "vibe, food aur music sab kuch ekdum perfect tha."
            ]
        },
        "closings": [
            "College ke baad yahan regular aane ka plan pakka hai!",
            "Dehradun me sabko Scoop n Brew zaroor recommend karunga!",
            "Doston ke saath next visit already decide ho gaya hai. 5 stars!",
            "Town ka sabse cute aur pocket-friendly cafe hai yeh!",
            "Jald hi baaki menu bhi try karenge!"
        ]
    },
    "HINDI": {
        "combos": {
            "ICE_CREAM": [
                "स्कूप एन ब्रू की आइसक्रीम क्लेमेंट टाउन में सबसे बेहतरीन है! हॉक्को की नटी चाकलेट कोन और बॉस बार बेहद मलाईदार और ताज़ा थी। कुरकुरी वेफर कोन और ठंडी आइसक्रीम का अनोखा स्वाद है!",
                "हॉक्को आइसक्रीम के शौकीनों के लिए यह सबसे अच्छी जगह है। स्ट्रॉबेरी चीज़केक कोन बहुत ही ताज़ा और स्वादिष्ट था। कॉलेज के बाद मीठे के लिए परफेक्ट जगह।",
                "ग्राफिक एरा गेट 1 के पास सबसे बढ़िया आइसक्रीम पार्लर। ताज़ा हॉक्को कोन, शानदार स्वाद और बहुत ही वाजिब दाम।"
            ],
            "WAFFLES": [
                "यहाँ का न्यूटेला वॉफल सिर्फ ₹99 में बहुत ही लाजवाब है! बाहर से कुरकुरा और अंदर से गर्म चाकलेट से भरा हुआ। ₹20 में आइसक्रीम का स्कूप जोड़कर मज़ा दोगुना हो गया!",
                "बेल्जियन वॉफल्स बहुत ही कुरकुरे और ताज़ा थे। मिनी पैनकेक्स (₹59) भी बहुत ही मुलायम और चाकलेट से भरपूर थे। छात्रों के लिए सबसे बढ़िया डेसर्ट!",
                "दोस्तों के साथ चाकलेट वॉफल और मिनी पैनकेक्स खाए। गरमा-गरम, कुरकुरा और बेहद स्वादिष्ट। 10/10 अनुभव!"
            ],
            "SHAKES": [
                "यहाँ का ओरियो थिक शेक सिर्फ ₹79 में बहुत ही गाढ़ा और स्वादिष्ट है! असली आइसक्रीम से बना हुआ यह शेक हर घूंट में ताजगी देता है।",
                "चाकलेट और ओरियो थिक शेक दोनों ही बहुत गाढ़े और ठंडे थे। ग्लास में चाकलेट की सजावट भी बहुत सुंदर थी।",
                "बेहतरीन शेक्स इतने कम दाम में मिलना बहुत मुश्किल है। कॉलेज के बाद दोस्तों के साथ बैठने के लिए सबसे बढ़िया जगह।"
            ],
            "FOOD": [
                "₹79 वाली लोडेड चीज़ी फ्राइज बहुत ही कुरकुरी और गरमा-गरम चीज़ सॉस से भरी हुई थीं। वेज बर्गर और ग्रिल्ड सैंडविच भी बहुत स्वादिष्ट और ताज़ा था।",
                "पेरी पेरी फ्राइज बहुत ही कुरकुरी और चटपटी थीं। वेज बर्गर के साथ यह छात्रों के लिए एकदम सही और किफायती भोजन है।",
                "लोडेड फ्राइज, पेरी पेरी फ्राइज और कुरकुरा बर्गर सब कुछ बहुत ताज़ा और गरमा-गरम परोसा गया।"
            ],
            "BEVERAGES": [
                "ठंडा पुदीना और तरबूज मोजिटो (₹69) बहुत ही ताज़ा और मन को खुश कर देने वाला था। सुंदर कप और स्ट्रॉ के साथ इसका प्रेजेंटेशन भी प्यारा था।",
                "मलाईदार कोल्ड कॉफी (₹69) और गरमा-गरम केसर चाय (₹25) का स्वाद भी बहुत उम्दा था। कम दामों में कैफ़े जैसी गुणवत्ता!",
                "ठंडे ड्रिंक्स और मोजिटो बहुत ही ताज़ा थे। हर घूंट में ताजगी का एहसास हुआ।"
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
                "हमारा नया पसंदीदा ठिकाना! स्वादिष्ट व्यंजन, खूबसूरत माहौल और बहुत ही किफायती दाम।"
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
                "स्कूप एन ब्रू की आइसक्रीम क्लेमेंट टाउन में सबसे बेहतरीन है! हॉक्को की नटी चाकलेट कोन और बॉस बार बेहद मलाईदार और ताज़ा थी। कुरकुरी वेफर कोन और ठंडी आइसक्रीम का अनोखा स्वाद है!",
                "हॉक्को आइसक्रीम के शौकीनों के लिए यह सबसे अच्छी जगह है। स्ट्रॉबेरी चीज़केक कोन बहुत ही ताज़ा और स्वादिष्ट था। कॉलेज के बाद मीठे के लिए परफेक्ट जगह।",
                "ग्राफिक एरा गेट 1 के पास सबसे बढ़िया आइसक्रीम पार्लर। ताज़ा हॉक्को कोन, शानदार स्वाद और बहुत ही वाजिब दाम।"
            ],
            "MINI_PANCAKES": [
                "यहाँ का न्यूटेला वॉफल सिर्फ ₹99 में बहुत ही लाजवाब है! बाहर से कुरकुरा और अंदर से गर्म चाकलेट से भरा हुआ। ₹20 में आइसक्रीम का स्कूप जोड़कर मज़ा दोगुना हो गया!",
                "बेल्जियन वॉफल्स बहुत ही कुरकुरे और ताज़ा थे। मिनी पैनकेक्स (₹59) भी बहुत ही मुलायम और चाकलेट से भरपूर थे। छात्रों के लिए सबसे बढ़िया डेसर्ट!",
                "दोस्तों के साथ चाकलेट वॉफल और मिनी पैनकेक्स खाए। गरमा-गरम, कुरकुरा और बेहद स्वादिष्ट। 10/10 अनुभव!"
            ],
            "PANCAKES": [
                "यहाँ का न्यूटेला वॉफल सिर्फ ₹99 में बहुत ही लाजवाब है! बाहर से कुरकुरा और अंदर से गर्म चाकलेट से भरा हुआ। ₹20 में आइसक्रीम का स्कूप जोड़कर मज़ा दोगुना हो गया!",
                "बेल्जियन वॉफल्स बहुत ही कुरकुरे और ताज़ा थे। मिनी पैनकेक्स (₹59) भी बहुत ही मुलायम और चाकलेट से भरपूर थे। छात्रों के लिए सबसे बढ़िया डेसर्ट!",
                "दोस्तों के साथ चाकलेट वॉफल और मिनी पैनकेक्स खाए। गरमा-गरम, कुरकुरा और बेहद स्वादिष्ट। 10/10 अनुभव!"
            ],
            "FRIES": [
                "₹79 वाली लोडेड चीज़ी फ्राइज बहुत ही कुरकुरी और गरमा-गरम चीज़ सॉस से भरी हुई थीं। वेज बर्गर और ग्रिल्ड सैंडविच भी बहुत स्वादिष्ट और ताज़ा था।",
                "पेरी पेरी फ्राइज बहुत ही कुरकुरी और चटपटी थीं। वेज बर्गर के साथ यह छात्रों के लिए एकदम सही और किफायती भोजन है।",
                "लोडेड फ्राइज, पेरी पेरी फ्राइज और कुरकुरा बर्गर सब कुछ बहुत ताज़ा और गरमा-गरम परोसा गया।"
            ],
            "BURGERS_SANDWICHES": [
                "₹79 वाली लोडेड चीज़ी फ्राइज बहुत ही कुरकुरी और गरमा-गरम चीज़ सॉस से भरी हुई थीं। वेज बर्गर और ग्रिल्ड सैंडविच भी बहुत स्वादिष्ट और ताज़ा था।",
                "पेरी पेरी फ्राइज बहुत ही कुरकुरी और चटपटी थीं। वेज बर्गर के साथ यह छात्रों के लिए एकदम सही और किफायती भोजन है।",
                "लोडेड फ्राइज, पेरी पेरी फ्राइज और कुरकुरा बर्गर सब कुछ बहुत ताज़ा और गरमा-गरम परोसा गया।"
            ],
            "SANDWICHES": [
                "₹79 वाली लोडेड चीज़ी फ्राइज बहुत ही कुरकुरी और गरमा-गरम चीज़ सॉस से भरी हुई थीं। वेज बर्गर और ग्रिल्ड सैंडविच भी बहुत स्वादिष्ट और ताज़ा था।",
                "पेरी पेरी फ्राइज बहुत ही कुरकुरी और चटपटी थीं। वेज बर्गर के साथ यह छात्रों के लिए एकदम सही और किफायती भोजन है।",
                "लोडेड फ्राइज, पेरी पेरी फ्राइज और कुरकुरा बर्गर सब कुछ बहुत ताज़ा और गरमा-गरम परोसा गया।"
            ],
            "MOJITOS": [
                "ठंडा पुदीना और तरबूज मोजिटो (₹69) बहुत ही ताज़ा और मन को खुश कर देने वाला था। सुंदर कप और स्ट्रॉ के साथ इसका प्रेजेंटेशन भी प्यारा था।",
                "मलाईदार कोल्ड कॉफी (₹69) और गरमा-गरम केसर चाय (₹25) का स्वाद भी बहुत उम्दा था। कम दामों में कैफ़े जैसी गुणवत्ता!",
                "ठंडे ड्रिंक्स और मोजिटो बहुत ही ताज़ा थे। हर घूंट में ताजगी का एहसास हुआ।"
            ],
            "COFFEE_CHAI": [
                "ठंडा पुदीना और तरबूज मोजिटो (₹69) बहुत ही ताज़ा और मन को खुश कर देने वाला था। सुंदर कप और स्ट्रॉ के साथ इसका प्रेजेंटेशन भी प्यारा था।",
                "मलाईदार कोल्ड कॉफी (₹69) और गरमा-गरम केसर चाय (₹25) का स्वाद भी बहुत उम्दा था। कम दामों में कैफ़े जैसी गुणवत्ता!",
                "ठंडे ड्रिंक्स और मोजिटो बहुत ही ताज़ा थे। हर घूंट में ताजगी का एहसास हुआ।"
            ],
            "COFFEE": [
                "ठंडा पुदीना और तरबूज मोजिटो (₹69) बहुत ही ताज़ा और मन को खुश कर देने वाला था। सुंदर कप और स्ट्रॉ के साथ इसका प्रेजेंटेशन भी प्यारा था।",
                "मलाईदार कोल्ड कॉफी (₹69) और गरमा-गरम केसर चाय (₹25) का स्वाद भी बहुत उम्दा था। कम दामों में कैफ़े जैसी गुणवत्ता!",
                "ठंडे ड्रिंक्स और मोजिटो बहुत ही ताज़ा थे। हर घूंट में ताजगी का एहसास हुआ।"
            ]
        },
        "openings": [
            "आज ग्राफिक एरा गेट 1 के पास स्कूप एन ब्रू में जाकर बहुत अच्छा लगा!",
            "स्कूप एन ब्रू क्लेमेंट टाउन में हमारा अनुभव बहुत ही शानदार रहा।",
            "आखिरकार स्कूप एन ब्रू जाने का मौका मिला और यह हमारी उम्मीदों से भी बेहतर निकला!",
            "अगर आप क्लेमेंट टाउन में हैं तो इस प्यारे कैफ़े में ज़रूर जाएं!",
            "आज दोस्तों के साथ स्कूप एन ब्रू में बहुत ही बेहतरीन समय बीता।"
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
                "स्ट्रॉबेरी चीज़केक और नटी कोन का स्वाद बहुत ही लाजवाब था।"
            ],
            "WAFFLES": [
                "बेल्जियन न्यूटेला वॉफल ताज़ा, गरम और बेहद कुरकुरा था।",
                "वॉफल पर चाकलेट और आइसक्रीम का स्कूप बहुत ही स्वादिष्ट लगा।"
            ],
            "SHAKES": [
                "थिक शेक बहुत ही गाढ़ा, मलाईदार और असली आइसक्रीम से बना हुआ था।",
                "ओरियो शेक का गाढ़ापन और स्वाद बहुत ही उम्दा था।"
            ],
            "FOOD": [
                "लोडेड चीज़ी फ्राइज गरमा-गरम और स्वादिष्ट मसालों से भरपूर थीं।",
                "वेज बर्गर और सैंडविच बहुत ही ताज़ा और कुरकुरा था।"
            ],
            "BEVERAGES": [
                "ठंडा मिंट मोजिटो बहुत ही ताज़ा और मन को तरोताज़ा कर देने वाला था।",
                "कोल्ड कॉफी और केसर चाय का स्वाद बहुत ही संतुलित था।"
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
            "जल्द ही बाकी का मेनू भी आज़माएंगे!"
        ]
    }
};

if (typeof window !== 'undefined') {
    window.REVIEWS_DB = REVIEWS_DB;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { REVIEWS_DB };
}
