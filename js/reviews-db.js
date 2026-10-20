/**
 * ===========================================================================
 * BLUE DOOR CAFE & BAKES — HUMANIZED REVIEWS ENGINE v2.0
 * ===========================================================================
 * 
 * Expert-curated, human-sounding review templates designed to feel like
 * genuine customer reviews — not AI-generated text.
 *
 * ARCHITECTURE:
 *   1. COMBO REVIEWS  — Full pre-written reviews for common chip combos & specific menu items
 *   2. OPENINGS       — Warm, personality-driven intro sentences
 *   3. BRIDGES        — Natural transition phrases between ideas
 *   4. CATEGORIES     — Deep, specific detail phrases per food/dish/experience
 *   5. CLOSINGS       — Authentic sign-off lines
 *
 * Each review is designed to pass as a genuine Google review.
 * ===========================================================================
 */

const REVIEWS_DB = {
    "ENGLISH": {
        "combos": {
            "COFFEE": [
                "Stopped by Blue Door for a quick coffee and ended up staying for two hours! Their specialty brew is hands down the best I've had in Dehradun — rich, smooth, and perfectly roasted. The barista really knows their craft. If you're a coffee lover, you need to try this place.",
                "I'm pretty picky about my coffee, and Blue Door genuinely impressed me. The aroma hits you the moment you walk in. Ordered a cappuccino and it was velvety, not bitter at all. Perfect coffee spot when you need a break from the usual chains.",
                "Found my new go-to coffee place! Blue Door's cold brew is dangerously addictive — bold yet smooth. The cafe itself has such a warm, welcoming vibe. Sat there working on my laptop for a while and nobody rushed me. Love this place.",
                "The coffee here is something else! Perfectly balanced, aromatic, and you can tell they use quality beans. I had the latte and my friend got the cold brew — both were excellent. Staff was super friendly too. Will be coming back for sure."
            ],
            "BAKES": [
                "If you haven't tried the bakes at Blue Door, you're seriously missing out! Everything is baked fresh daily and you can taste the difference. The croissants are flaky and buttery, and the pastries in their display just look gorgeous. Real European-style bakery vibes in Dehradun!",
                "I'm obsessed with Blue Door's fresh bakes! Walked in and the smell of freshly baked croissants literally stopped me in my tracks. Tried their Danish pastry and a chocolate croissant — both were absolute perfection. You can tell they use real butter, not the usual shortcuts.",
                "The bakery counter at Blue Door is dangerous — everything looks so good it's hard to choose! I ended up trying the almond croissant and a slice of their orange cake. Both were super fresh and not overly sweet, which I loved. Definitely my new favorite bakery in town."
            ],
            "FOOD": [
                "Had lunch at Blue Door today and the food was genuinely delicious! The portions are generous and everything tasted fresh. Their pasta was cooked perfectly — not mushy like some places. The sandwich was loaded with fillings too. Really impressed with the quality for the price.",
                "Blue Door isn't just about coffee and cakes — their savory menu is seriously underrated! Tried the pasta and a wrap, both were packed with flavor. Fresh ingredients, proper seasoning, and clearly made with care. This is my kind of place.",
                "The food at Blue Door blew me away honestly. I wasn't expecting much from a cafe but their savory options are restaurant-quality. The sandwich was amazing and my friend's pasta was perfectly spiced. Great portion sizes too. We left very happy and very full!"
            ],
            "COFFEE,SERVICE": [
                "Blue Door is what happens when great coffee meets great people! The barista recommended their house special and it was absolutely perfect — smooth, rich, no bitterness. And the staff is so warm and attentive without being overbearing. Felt like visiting a friend's cozy living room.",
                "Two things I'll always remember about Blue Door — the incredible coffee and the sweetest staff ever. They took their time explaining the different brews and helped me pick the perfect one. The cappuccino was easily one of the best I've had. Such genuine hospitality!"
            ],
            "COFFEE,BAKES": [
                "Coffee and croissants at Blue Door = absolute happiness! Their specialty brew paired with a warm, flaky butter croissant is the perfect morning combo. Everything is made fresh and you can taste the quality in every bite and sip. This is how a cafe should be.",
                "Found the perfect coffee-and-pastry combo at Blue Door! The latte was smooth and aromatic, and their freshly baked almond croissant was buttery perfection. Honestly felt like I was sitting in a European cafe. Will be making this my regular weekend ritual.",
                "Started my morning at Blue Door with a cappuccino and their chocolate croissant, and honestly, it set the tone for my entire day. The coffee is rich without being overpowering, and the croissant was warm, flaky, and just the right amount of sweet. Pure bliss."
            ],
            "COFFEE,FOOD": [
                "Had a great lunch-and-coffee experience at Blue Door today! The pasta was perfectly cooked with fresh herbs, and I followed it up with their specialty cold brew. Such a satisfying combo. The cafe has this cozy, laid-back vibe that makes you want to stay longer.",
                "Blue Door is becoming my go-to for the full meal experience. Started with a latte, ordered their sandwich for lunch (absolutely loaded and delicious), and finished with another coffee because I wasn't ready to leave. The food quality is so consistent here."
            ],
            "COFFEE,BAKES,SERVICE": [
                "I don't usually write reviews but Blue Door deserves it! The coffee is beautifully crafted — rich and aromatic. The fresh bakes are next level — tried the butter croissant and a Danish, both were incredible. And what really sets this place apart is the staff — genuinely warm, helpful, and always smiling. This place has my whole heart!",
                "Everything about Blue Door just feels right. Walked in to the most amazing aroma of fresh bakes and coffee. The staff greeted us warmly and helped us pick from their pastry display. The cappuccino was perfect, the croissants were flaky heaven. This is how hospitality should feel."
            ],
            "COFFEE,VALUE": [
                "I can't believe the quality you get for the price at Blue Door! Their specialty coffee rivals expensive chains but costs way less. And it actually tastes better because they clearly use premium beans. Total value for money. This is now my regular coffee spot.",
                "Blue Door proves you don't need to spend a fortune for great coffee. Their brews are smooth, aromatic, and properly made — not the watered-down stuff you get elsewhere. Pricing is super reasonable for the quality. Highly recommend!"
            ],
            "BAKES,FOOD": [
                "Blue Door is a total foodie paradise! Had their pasta for lunch and grabbed some fresh bakes to take home. Everything was delicious — the pasta had great flavor with fresh herbs, and the croissants and pastries were soft, buttery, and obviously made with love. Can't pick a favorite!",
                "Whether you're in the mood for a proper meal or just want to grab some fresh bakery items, Blue Door has you covered. The savory food is genuinely delicious and the bakes counter is like walking into a French boulangerie. Everything is made fresh daily. Total gem!"
            ],
            "BAKES,SERVICE": [
                "The staff at Blue Door made my experience so special! They patiently showed me all the fresh bakes, gave recommendations, and even packed my pastries beautifully. The croissants were warm and perfectly flaky. It's rare to find such genuine hospitality paired with such amazing food.",
                "Visited Blue Door for their famous bakes and wasn't disappointed! The pastries are clearly made with real butter and baked fresh. What surprised me even more was how friendly the staff was — they treated us like regulars from the first visit. Lovely place."
            ],
            "FOOD,SERVICE": [
                "Had an amazing meal at Blue Door! The food quality is top-notch — fresh ingredients, great flavors, and generous portions. But what really stood out was the service. The staff was incredibly warm and attentive, checked on us multiple times, and made us feel so welcome. 10/10 experience!",
                "Two words for Blue Door — delicious food, wonderful people! The pasta was perfectly seasoned, the sandwich was huge and tasty, and the staff was just lovely throughout. They're clearly passionate about what they do and it shows in everything. Coming back for sure."
            ],
            "COFFEE,BAKES,FOOD": [
                "Blue Door is the real deal! Had a full spread — started with their smooth cappuccino, ordered the pasta for lunch (perfectly cooked with amazing flavors), and couldn't leave without trying a fresh croissant from their bakery counter. Everything was exceptional. This place does it all and does it well!",
                "I'm genuinely impressed by how Blue Door nails everything they serve. The coffee is specialty-grade, the savory food is restaurant-quality, and the fresh bakes are European-level good. Tried a bit of everything and honestly couldn't find a single thing to complain about. Rare gem in Dehradun!"
            ],
            "COFFEE,BAKES,VALUE": [
                "Can we talk about the value you get at Blue Door? Premium specialty coffee, freshly baked croissants with real butter, and the most beautiful pastry counter — all at genuinely reasonable prices. Most places charge double for half the quality. This is my happy place and my wallet agrees too!",
                "Blue Door is honestly the best bang for your buck in Dehradun's cafe scene. The coffee is rich and perfectly brewed, the bakes are clearly made with premium ingredients, and the prices are so fair. You get quality that rival expensive chains at a fraction of the cost."
            ],
            "COFFEE,BAKES,FOOD,SERVICE": [
                "This is easily a 5-star experience from start to finish! The coffee was smooth and aromatic, the fresh pastries were buttery and warm, we had pasta for lunch and it was packed with flavor, and through it all, the staff was just wonderful — attentive, friendly, and genuinely caring. Blue Door, you've won a loyal customer!",
                "I don't hand out 5 stars easily, but Blue Door earns every single one. The coffee is craft-level quality. The baked goods are fresh, real-butter perfection. The food menu surprised me with how delicious everything was. And the cherry on top? The staff treats you like family. Can't recommend this place enough."
            ],
            "FOOD,VALUE": [
                "Great food at honest prices — that's Blue Door in a nutshell! The portions are generous, everything tastes fresh, and you won't feel like you're overpaying. We ordered pasta and sandwiches for the whole group and the bill was surprisingly reasonable for the quality we got. Coming back!",
                "Blue Door proves that good food doesn't have to be expensive. Had their pasta and a sandwich — both were packed with flavor and generously portioned. The quality of ingredients is clearly premium but the prices are super accessible. Total value for money!"
            ],
            "BAKES,VALUE": [
                "The bakery at Blue Door offers incredible quality at really fair prices! Their croissants rival what you'd get at a premium bakery, but the cost is so reasonable. Everything is made fresh with real butter — you can taste the difference. Best bakery value in town, hands down.",
                "I was pleasantly surprised by how affordable the fresh bakes are at Blue Door! The croissants, the pastries, the cakes — everything is top quality and reasonably priced. You're getting genuine European-style bakery goods without the premium markup. Absolutely love this place."
            ],
            "SERVICE,VALUE": [
                "What I love about Blue Door is the complete package — great hospitality and fair pricing. The staff is incredibly warm and makes sure you have a wonderful time, and you don't get hit with an outrageous bill at the end. Quality service and quality food at honest prices. That's how you build loyal customers!",
                "Blue Door gets the basics so right! Friendly, attentive staff who genuinely care about your experience, paired with really fair pricing for the quality they offer. No pretentious vibes, just genuine warmth and good value. Refreshing to find a place like this."
            ],
            "VALUE": [
                "Blue Door offers the best value for money cafe experience in Dehradun, bar none! High-end specialty coffee and artisanal bakes without the crazy pricing you see at most hipster spots. The quality is top tier and portion sizes are generous. Definitely my go-to spot now!",
                "Honestly surprised at how affordable everything is given the premium quality. Whether it's their freshly brewed coffee or their delicious food menu, you get so much more than what you pay for. Total value for money and wonderful vibes!",
                "Great food, top-tier coffee, and prices that don't hurt your wallet. Blue Door gets the value proposition completely right. A must-visit if you appreciate good quality at honest prices."
            ],
            "ALL,VALUE": [
                "Hands down one of the best cafe experiences in Dehradun! Blue Door gets everything right — the coffee is rich, the fresh bakes are heavenly, the food is delicious, and the prices are surprisingly reasonable for the quality. Clean, aesthetic space with warm vibes. Total value for money!",
                "What an absolute gem! Everything about Blue Door exceeded my expectations. Top-quality brews, freshly baked pastries, delicious food, and warm hospitality — all at very fair prices. 5 stars all the way!"
            ],
            "ALL": [
                "Hands down one of the best cafe experiences I've had! Blue Door gets everything right — the coffee is rich and smooth, the fresh bakes are heavenly, the food is delicious, and the staff makes you feel right at home. Clean, aesthetic space with great vibes. This place truly has it all. Five stars, no question!",
                "What a gem of a place! Everything about Blue Door exceeded my expectations. The specialty coffee was perfectly brewed, the pastries were clearly freshly baked with real butter, the savory food was restaurant-quality, and the staff was incredibly warm. Clean, cozy, and beautifully done. Can't wait to come back!",
                "If I could give Blue Door more than 5 stars, I would! From the amazing coffee and fresh bakes to the delicious food and warm hospitality — they've thought of everything. The place is spotless, the ambience is perfect, and the prices are honestly very fair for what you get. A must-visit for everyone in Dehradun!"
            ],
            "CROISSANTS": [
                "The croissants at Blue Door are in a league of their own! Warm, golden, and incredibly flaky with layers of pure buttery goodness. You can tell they bake them fresh from scratch daily. Easily the best croissant in Dehradun!",
                "If you love croissants, you simply have to visit Blue Door! Took one bite of their freshly baked croissant and was blown away by how light and airy it was. Genuine European bakery perfection right here.",
                "Came in specifically for their croissants and they exceeded every expectation. Warm, buttery, and flaky to absolute perfection. You can taste the real butter in every bite. 10/10!"
            ],
            "CAKES": [
                "Their cakes and pastries are absolute works of art! Super moist, rich in flavor, and not overwhelmingly sugary. Tried a fresh slice from their display and every single bite was heavenly. You can taste the premium quality.",
                "The cake counter at Blue Door is irresistible! We ordered a slice of their fresh cake and a pastry — both were incredibly soft, decadent, and perfectly balanced. Hands down the best pastry spot in town.",
                "Hands down the best cakes in Dehradun! Ordered their pastry slice and it literally melted in my mouth. Freshly baked, beautifully presented, and just the right amount of sweetness."
            ],
            "PASTA": [
                "The pasta here completely blew me away! Cooked perfectly al dente with a rich, flavorful sauce and fresh herbs. You expect great coffee from a cafe, but their Italian pasta is genuinely restaurant-quality. Delicious and super comforting!",
                "Had their pasta today and it was easily one of the best Italian dishes I've had in Dehradun! Rich, well-seasoned sauce, authentic texture, and very generous portions. Absolutely loved it.",
                "Blue Door's pasta is pure comfort food perfection! Perfectly cooked pasta tossed in a velvety, herb-infused sauce. Generous portion and full of authentic flavor. Highly recommended!"
            ],
            "SANDWICHES": [
                "Their sandwiches and wraps are packed with fresh fillings and so much flavor! The bread was perfectly grilled and crunchy, and the ingredients tasted super fresh. Extremely satisfying and generous portions!",
                "Grabbed a grilled sandwich and wrap here and it was top notch! Generously loaded with fresh veggies and spreads, toasted to a golden crisp. The perfect hearty meal. Highly recommended!",
                "Best sandwiches in town! Freshly made with artisan bread, toasted to crunchy perfection, and loaded with savory fillings. You won't leave hungry, that's for sure!"
            ],
            "DESSERTS": [
                "The desserts here are the ultimate treat! Beautifully plated, wonderfully balanced, and not overly sweet. You can tell real culinary passion goes into every dessert they craft. You simply cannot leave without ordering dessert!",
                "Blue Door's dessert menu is pure bliss! Every spoonful was rich, velvety, and delightfully fresh. The perfect sweet ending to our visit. Can't wait to come back for more.",
                "Unbelievable desserts! We tried their signature dessert and were completely hooked. Creamy, rich, and made with top-shelf ingredients. A dessert lover's paradise in Dehradun!"
            ],
            "BEVERAGES": [
                "Their beverage selection is so refreshing and unique! Tried their chilled drinks and it was the perfect crisp cooler — vibrant flavors, beautifully presented, and so rejuvenating.",
                "Loved the beverages here! Perfectly balanced, ice cold, and bursting with refreshing flavor. The presentation was gorgeous and it was the exact refresher I needed.",
                "Super refreshing beverages! Not overly sweet, beautifully garnished, and made with fresh ingredients. The perfect companion for a relaxing afternoon at the cafe."
            ],
            "COFFEE,CROISSANTS": [
                "Coffee and croissants at Blue Door are a match made in heaven! Their specialty artisanal brew paired with a warm, flaky, buttery croissant made for the most delightful morning. Everything is baked fresh and you can taste the quality in every bite and sip.",
                "Started my day at Blue Door with a hot cappuccino and their fresh butter croissant, and it set the tone for my whole weekend! The coffee was smooth and rich, and the croissant had those delicate, flaky buttery layers you only find in authentic bakeries. Pure bliss!",
                "The ultimate breakfast duo — specialty coffee and freshly baked croissants! The aroma hits you the moment you walk in. The croissant was warm and flaky, and the coffee was velvety with no bitterness. This is my new regular ritual."
            ],
            "CAKES,COFFEE": [
                "Pairing their rich specialty coffee with a fresh, decadent slice of cake was pure bliss! The aroma of the brew complemented the moist, melt-in-your-mouth pastry beautifully. Best coffee and cake spot in town!",
                "Coffee and cake at Blue Door is an unmatched combination. Their cappuccino was velvety and bold, and the cake was deliciously soft, rich, and not overly sweet. Loved every moment here!"
            ],
            "COFFEE,PASTA": [
                "Had a wonderful meal at Blue Door today! The pasta was cooked perfectly al dente with a rich, savory sauce, followed by their signature smooth coffee. The combination of comforting Italian food and craft coffee is unbeatable.",
                "Delicious pasta and fantastic coffee! The pasta was flavorful with fresh herbs, and the specialty brew rounded off the meal delightfully. Cozy vibes and great food — will definitely be back!"
            ],
            "COFFEE,SANDWICHES": [
                "A crispy, loaded sandwich paired with their specialty coffee — absolute lunchtime perfection! The sandwich was toasted golden with fresh ingredients, and the coffee was rich and smooth. Very satisfying meal!",
                "Ordered their grilled sandwich with a cold brew, and it was the ideal meal! Hearty, flavorful food and top-tier coffee that rivals any specialty roastery. Highly recommended!"
            ],
            "COFFEE,DESSERTS": [
                "Nothing beats specialty coffee paired with a rich dessert at Blue Door! The velvety coffee balanced the decadent sweetness of the dessert in the most exquisite way. A 5-star treat from start to finish.",
                "The dessert and coffee combo here is out of this world! Rich, aromatic brews paired with luxurious, creamy dessert. Treat yourself to this combo, you won't regret it!"
            ],
            "DESSERTS,PASTA": [
                "The ultimate savory-to-sweet experience! Started with their incredible pasta cooked al dente in a rich savory sauce, and wrapped up with their heavenly dessert. Pure perfection on a plate!",
                "Had their pasta for lunch and followed it with their signature dessert — both were restaurant-quality and made from scratch. Left with a very happy tummy!"
            ],
            "CAKES,CROISSANTS": [
                "Total bakery heaven! The croissants were warm, flaky, and buttery, and the cakes were rich, moist, and decadently fresh. Blue Door's baking team is truly world-class.",
                "If you love baked goods, Blue Door is a must-visit! The butter croissant was flaky and light, while the cake slice was moist and richly flavorful. Best bakery goods in Dehradun!"
            ],
            "BEVERAGES,SANDWICHES": [
                "The loaded grilled sandwich paired with their refreshing iced beverage was the ultimate combo! Crispy, savory satisfaction followed by an invigorating, crisp cooler. 10/10 lunch spot!",
                "Sandwich was packed with fresh fillings and toasted to perfection, and the chilled beverage was vibrant and refreshing. The ideal lunchtime refresh!"
            ],
            "BEVERAGES,PASTA": [
                "Had their delicious pasta paired with a chilled beverage and it was so satisfying! The rich Italian sauce complemented the crisp, cooling drink perfectly. Great portion sizes too!",
                "Comforting pasta full of flavor, washed down with a refreshing chilled drink. Delicious food, great drinks, and cozy atmosphere!"
            ],
            "BEVERAGES,CROISSANTS": [
                "A fresh flaky butter croissant paired with a refreshing chilled beverage — such a lovely light meal! The croissant was warm and buttery, and the drink was crisp and delicious.",
                "Loved the combination of their warm buttery croissant and refreshing beverage. Fresh, light, and full of flavor!"
            ],
            "CROISSANTS,PASTA": [
                "Blue Door nails both their bakery and their savory menu! The pasta was rich and perfectly seasoned, and grabbing a fresh buttery croissant on the side was the best decision ever. Exceptional quality!",
                "Had their pasta for lunch and couldn't resist a fresh croissant from the counter — both were extraordinary. Savory comfort food meets artisanal baking perfection!"
            ],
            "DESSERTS,SANDWICHES": [
                "Started with their loaded, crispy grilled sandwich and finished with their indulgent dessert. From hearty crunch to velvety sweet finish, everything was sensational!",
                "Great sandwich followed by an even better dessert! Hearty, fresh ingredients and top-notch presentation. Definitely coming back for this exact meal."
            ],
            "BEVERAGES,DESSERTS": [
                "Their decadent dessert paired with a crisp, refreshing beverage made for the sweetest afternoon break! The dessert was velvety and rich, and the beverage was wonderfully light and cooling.",
                "Wonderful dessert and beverage pairing! Sweet, creamy indulgence balanced by a fresh, fruity cooler. Pure happiness in every sip and bite."
            ],
            "CAKES,PASTA": [
                "Savory pasta followed by a slice of their fresh cake — hands down the best meal combo! The pasta was comforting and seasoned to perfection, and the cake was soft, moist, and heavenly.",
                "Had an amazing pasta lunch and treated ourselves to a slice of fresh cake afterwards. Both were exceptional quality and made with obvious care."
            ],
            "PASTA,SANDWICHES": [
                "Had a feast with their pasta and grilled sandwiches! The pasta was rich with herbs and cooked al dente, while the sandwich was packed with fresh fillings and golden crunch. Generous, hearty, and delicious!",
                "Both the pasta and sandwiches are top tier here! Generous portion sizes, premium fresh ingredients, and incredible flavors. Perfect spot for foodies."
            ],
            "BEVERAGES,CAKES": [
                "The iced refreshing beverage paired with a fresh, decadent slice of cake was pure bliss! The cooling drink balanced the rich, moist cake slice delightfully. A sweet and refreshing afternoon treat!",
                "Loved their chilled beverages and fresh cakes! The pastry was super soft and richly flavored, while the cooler was crisp and invigorating. Fantastic combination!"
            ],
            "BEVERAGES,COFFEE": [
                "Tried both their specialty hot coffee and their signature chilled beverages — both were top tier! The cappuccino was velvety and aromatic, and the cold drink was crisp and revitalizing. Great drink menu all around!",
                "Whether you're craving a rich hot brew or a refreshing chilled cooler, Blue Door delivers on all fronts. Exceptional coffee craftsmanship and wonderful iced beverages."
            ],
            "CAKES,DESSERTS": [
                "Blue Door is a paradise for sweet tooth lovers! We ordered a fresh slice of cake and their signature dessert — both were decadently rich, beautifully presented, and made with top-quality ingredients. Pure sweet indulgence!",
                "The cakes and handcrafted desserts here are simply unmatched in Dehradun! Super moist cake slice and a heavenly, velvety dessert. You cannot leave without trying both!"
            ],
            "CAKES,SANDWICHES": [
                "Started with their loaded, crispy grilled sandwich and followed it up with a slice of their fresh artisan cake. The perfect balance of savory crunch and melt-in-the-mouth sweetness! Generous portions and incredible quality.",
                "Delicious grilled sandwich packed with fresh fillings, rounded off with a fresh, moist slice of pastry. Blue Door nails both the savory and sweet sides of their menu!"
            ],
            "CROISSANTS,DESSERTS": [
                "The warm, flaky butter croissant paired with their velvety dessert was out of this world! You can taste authentic European baking craftsmanship in every flaky layer and every spoonful of dessert. Absolutely divine!",
                "From the fresh, golden croissant to their decadent signature dessert, everything was top-shelf quality. The croissant had perfect buttery layers and the dessert was pure indulgence."
            ],
            "CROISSANTS,SANDWICHES": [
                "Blue Door's baking and sandwich game is unbeatable! The grilled sandwich was crunchy and loaded with savory flavor, and the freshly baked butter croissant was warm, light, and flaky. Very hearty and satisfying meal!",
                "Ordered their crispy sandwich along with a fresh butter croissant — both were extraordinarily fresh and flavorful. Real butter, artisan bread, and generous fillings make all the difference!"
            ]
        },
        "openings": [
            "Visited Blue Door Café & Bakes for the first time today and I'm already planning my next trip!",
            "I've been hearing so much about Blue Door and it totally lived up to the hype.",
            "Stumbled upon Blue Door while exploring Clement Town and what a find!",
            "A friend dragged me here saying I'd love it, and honestly? They were so right.",
            "Blue Door has quickly become my favorite spot in Dehradun and here's why.",
            "I don't usually write reviews but Blue Door genuinely impressed me enough to share.",
            "If you're looking for a place that does everything well, Blue Door is it.",
            "Came here for a quick bite and ended up staying for hours because the vibe was just that good.",
            "Just had the most lovely experience at Blue Door Café & Bakes!",
            "This cozy little cafe in Clement Town is an absolute hidden gem."
        ],
        "bridges": [
            "And that's not even the best part —",
            "What really stood out though was",
            "On top of that,",
            "But honestly, what I loved most was",
            "Adding to the great experience,",
            "The cherry on top?",
            "To make things even better,",
            "I also have to mention",
            "Another thing worth mentioning —",
            "What surprised me the most was"
        ],
        "categories": {
            "ALL": [
                "the overall experience was genuinely excellent — from the food to the service to the ambience, everything just clicked perfectly.",
                "honestly couldn't find a single thing to complain about. Every detail felt thoughtfully done.",
                "it felt like visiting a friend's place who happens to make the most incredible food and coffee."
            ],
            "COFFEE": [
                "the coffee was absolutely incredible — rich, smooth, and clearly made with quality beans. You can tell the barista takes their craft seriously.",
                "their specialty coffee is the real deal. Not your average cafe coffee — this is properly roasted, perfectly brewed, and so aromatic. Best coffee I've had in a while.",
                "I ordered a cappuccino and it was perfection — velvety foam, bold espresso, not a hint of bitterness. Coffee lovers, trust me on this one.",
                "their cold brew was dangerously good — smooth, bold, and refreshing. I'm already craving another one as I write this.",
                "the latte art was beautiful and the coffee itself was even better. Rich, balanced, and made with obvious skill. This is coffee done right."
            ],
            "BAKES": [
                "the fresh bakes here are next level! The croissants are perfectly flaky and buttery — clearly made with real butter, not margarine. You can taste the quality.",
                "their bakery counter is like walking into a Parisian boulangerie. Everything is baked fresh daily and it shows — warm, fragrant, and perfectly golden.",
                "I tried the butter croissant and a chocolate Danish, and both were unreal. Flaky layers, rich butter flavor, and that fresh-from-the-oven warmth. Heaven!",
                "the pastry display genuinely made me stop and stare. Every item looked like it was made by someone who truly loves baking. And the taste matched the presentation perfectly.",
                "their artisanal bakes are the kind you take a bite of and immediately want to buy six more. Fresh, buttery, and made with so much love."
            ],
            "FOOD": [
                "the food was genuinely delicious — fresh ingredients, great seasoning, and generous portions. Not your typical cafe food at all.",
                "I had the pasta and it was perfectly al dente with a beautifully seasoned sauce. Could easily rival a proper Italian restaurant.",
                "the savory menu here is seriously underrated. Everything we ordered was packed with flavor and clearly made from scratch with fresh ingredients.",
                "my sandwich was loaded with fillings and tasted amazing. The bread was fresh and the combination of flavors was spot on. Very satisfying!",
                "the food quality honestly surprised me — this isn't just a cafe that serves basic snacks. The meals here are properly cooked, well-seasoned, and really filling."
            ],
            "SERVICE": [
                "the staff here is genuinely wonderful — warm, attentive, and always smiling. They made us feel welcome from the moment we walked in.",
                "the hospitality at Blue Door is something special. The team is polite, helpful with recommendations, and clearly passionate about what they do.",
                "what sets Blue Door apart is the people. The staff treats every customer like a friend. Quick service, warm vibes, and genuine care.",
                "the service was impeccable — they checked on us multiple times, were super patient with our questions, and packed our takeaway so carefully. Real professionals.",
                "I was so impressed by how friendly and attentive the staff was. They even remembered our order when we came back the next day. That personal touch means everything."
            ],
            "CLEANLINESS": [
                "the place is spotlessly clean — tables, kitchen, cutlery, everything gleams. You can tell hygiene is a top priority here.",
                "I noticed how clean and well-maintained everything was. From the seating to the washrooms to the kitchen — impeccable standards.",
                "really appreciated how tidy and sanitized the space was. In today's time, it's reassuring to see a place that takes hygiene this seriously."
            ],
            "AMBIENCE": [
                "the ambience is just perfect — cozy interiors, warm lighting, and soft music. Great for dates, catch-ups, or solo work sessions.",
                "the aesthetic of this place is gorgeous! Every corner is Instagram-worthy and the vibe is so relaxing. Could sit here for hours.",
                "the whole space has such a warm, inviting feel. It's not one of those pretentious cafes — it genuinely feels comfortable and welcoming."
            ],
            "VALUE": [
                "the prices are so reasonable for the quality you get. Premium ingredients, beautiful presentation, and generous portions — all at very fair prices. Total value for money!",
                "I was genuinely surprised by how affordable it was! The quality easily matches expensive chains but at a fraction of the price. Your wallet will thank you.",
                "great food, great coffee, beautiful ambience, and friendly service — all without breaking the bank. This is how you do value for money right."
            ],
            "CROISSANTS": [
                "the freshly baked croissants were warm, flaky, and rich with authentic butter layers.",
                "the croissants are genuinely French-bakery level — light, golden, and melt-in-the-mouth buttery.",
                "taking a bite of that warm, flaky croissant was pure bliss."
            ],
            "CAKES": [
                "the cakes and pastries were super moist, richly flavored, and freshly prepared.",
                "the cake slice was heavenly — beautifully frosted, not overly sweet, and so soft.",
                "the pastry display looked gorgeous and tasted even better than it looked."
            ],
            "PASTA": [
                "the pasta was cooked perfectly al dente in a rich, herb-infused Italian sauce.",
                "the pasta had restaurant-quality flavor and generous portions.",
                "their Italian pasta dishes are truly comforting and flavorful."
            ],
            "SANDWICHES": [
                "the sandwiches and wraps were generously loaded with fresh fillings and toasted to a golden crisp.",
                "the grilled sandwich had the perfect crunch and savory goodness in every bite.",
                "the sandwich bread was artisan-fresh and the fillings were flavorful and hearty."
            ],
            "DESSERTS": [
                "the desserts were melt-in-the-mouth velvety with the perfect touch of sweetness.",
                "every spoonful of their dessert was pure indulgence without feeling heavy.",
                "their handcrafted desserts are a work of culinary art."
            ],
            "BEVERAGES": [
                "the chilled beverages were thoroughly refreshing and beautifully presented.",
                "their unique coolers and iced drinks were crisp, vibrant, and invigorating.",
                "the beverages provided the exact refreshing lift needed on a cafe visit."
            ]
        },
        "closings": [
            "Will definitely be coming back — probably this weekend honestly!",
            "Highly recommend this place to anyone looking for great food and a lovely experience.",
            "If you haven't been yet, do yourself a favor and visit. You won't regret it!",
            "Already told all my friends about this place. Blue Door is a must-visit!",
            "Can't wait to bring my family here next time. They're going to love it!",
            "This has become my go-to spot and I'm not complaining one bit. See you soon, Blue Door!",
            "10/10 would recommend. One of the best discoveries I've made in Dehradun!",
            "Thank you Blue Door for such a wonderful experience. Coming back for sure!",
            "Five stars from me! Keep doing what you're doing, Blue Door. It's working perfectly.",
            "Do yourself a favor and visit Blue Door. Your taste buds (and your soul) will thank you!"
        ]
    },
    "HINGLISH": {
        "combos": {
            "COFFEE": [
                "Bhai Blue Door ki coffee ne toh dil jeet liya! Smooth, rich, aur ekdum perfect roast — aisi coffee Dehradun me aur kahi nahi mili. Barista bhi bahut skilled hai, ek dum cafe-style experience. Coffee lovers ko yahan zaroor aana chahiye, trust me on this one!",
                "Koi bhi coffee lover hai toh Blue Door miss mat karna. Cappuccino order kiya tha, velvety foam aur bold espresso ka perfect combo mila. Koi bitterness nahi, bas pure coffee goodness. Meri toh new favorite jagah ban gayi hai yeh.",
                "Blue Door ki cold brew try ki aur honestly, ab koi aur jagah ki coffee acchi nahi lagti. Bold yet smooth, ekdum refreshing. Cafe ki vibe bhi bohot chill hai. Laptop leke kaam karne ke liye perfect spot hai yeh."
            ],
            "BAKES": [
                "Blue Door ke bakes ka kya kehna! Croissants itne flaky aur buttery the ki laga jaise Paris me baith ke kha raha hoon. Sab kuch freshly baked milta hai daily, aur taste me zero compromise. Real butter use karte hain yeh log, woh wala authentic flavor aata hai!",
                "Main toh Blue Door ke pastry counter ke aage se hat hi nahi paya! Har cheez itni gorgeous aur tempting lagti hai. Almond croissant try kiya — muh me ghul gaya literally. Fresh bakes ka aroma jab andar jaate hi aata hai, woh feeling hi kuch aur hai.",
                "Agar Dehradun me fresh, European-style bakery chahiye toh Blue Door is the answer. Croissants, Danish pastries, cakes — sab kuch top notch hai. Aur best part? Prices bhi reasonable hain. Ab toh har weekend idhar aana fix hai!"
            ],
            "FOOD": [
                "Blue Door ka food genuinely impressive hai! Maine pasta order kiya tha aur perfectly al dente aaya with amazing sauce. Cafe food samajh ke gaye the but restaurant-quality mila. Portions bhi generous the, bilkul petbhar ke khaya!",
                "Yaar Blue Door ka savory menu seriously underrated hai. Sandwich bhi try kiya aur pasta bhi — dono mast the. Fresh ingredients, proper seasoning, aur taste mast tha. Bas cafe aur bakery nahi hai yeh, poora food destination hai!",
                "Lunch ke liye Blue Door gaye aur kya badhiya experience raha! Food quality top class thi — fresh, flavorful aur generous portions. Paise wasool ekdum. Highly recommend for a proper meal!"
            ],
            "COFFEE,BAKES": [
                "Blue Door ka coffee + croissant combo try karna life ka ek zaruri experience hai! Specialty brew itni smooth thi aur sath me warm, buttery croissant — perfect morning scene. Laga jaise kisi European cafe me baith ke breakfast kar rahe hain. Ab toh har weekend ka plan yahi hai!",
                "Coffee aur fresh bakes dono ek saath itne acche kahin nahi milte Dehradun me! Blue Door ki latte bhi smooth thi aur unka almond croissant bhi buttery perfection tha. Cafe ki vibe bhi ekdum cozy aur welcoming thi. Dil khush ho gaya!",
                "Subah Blue Door me cappuccino aur chocolate croissant ke saath start ki aur poora din accha gaya! Coffee rich thi without being overwhelming, aur croissant warm aur flaky tha — just the right sweetness. Pure bliss!"
            ],
            "COFFEE,BAKES,SERVICE": [
                "Main toh Blue Door ka fan ho gaya! Coffee craft-level quality ki hai, fresh bakes heaven hain — butter croissant aur Danish dono incredible the. Aur sabse badi baat — staff itna friendly aur caring hai ki mann nahi karta jaane ka. Yeh jagah truly special hai!",
                "Blue Door me sab kuch sahi hai. Andar jaate hi fresh bakes ki khushbu aati hai, coffee ki quality top-notch hai, aur staff aise greet karta hai jaise purane dost ho. Cappuccino perfect thi, croissants flaky the, aur hospitality dil ko chu gayi. Aise experience rare milte hain!"
            ],
            "COFFEE,FOOD": [
                "Blue Door me full meal experience liya aur maza aa gaya! Pehle latte li — smooth aur aromatic. Phir pasta order kiya — perfectly cooked with fresh herbs. Coffee ke baad food aur food ke baad coffee — dono next level. Cafe ki chill vibe me time kaise nikal gaya pata hi nahi chala!",
                "Blue Door sirf coffee nahi, proper food bhi serve karta hai aur dono mast hain! Sandwich bhi loaded tha aur tasty tha, aur cappuccino bhi top class. Lunch aur coffee dono ka perfect combo mil gaya yahan!"
            ],
            "COFFEE,BAKES,FOOD,SERVICE": [
                "Yeh easily 5-star experience hai start se end tak! Coffee smooth aur aromatic thi, fresh pastries warm aur buttery thin, lunch me pasta order kiya toh uska flavor bhi zabardast tha, aur staff toh itna pyaara tha — attentive, friendly, aur genuinely caring. Blue Door, tumne ek loyal customer jeet liya!",
                "Blue Door ne poori tarah se impress kar diya! Coffee exceptional thi, baked goods fresh aur perfection thin, food menu ne surprise kiya apne taste se, aur cherry on top? Staff family jaisa feel karta hai. Poora package ek jagah mil gaya. Can't recommend enough!"
            ],
            "FOOD,SERVICE": [
                "Blue Door me khana bhi mast aur log bhi mast! Pasta perfectly seasoned tha, sandwich bada aur tasty tha, aur staff poore time bohot lovely tha. Unhe jo bhi karte hain usse sach me pyaar hai, aur woh dikhta hai. Zaroor wapas ayenge!",
                "Amazing food + amazing service = Blue Door! Food quality top-notch hai — fresh ingredients, great flavors, generous portions. Aur staff itna warm aur attentive hai ki mann karta hai wapas aate raho. 10/10 experience raha!"
            ],
            "BAKES,FOOD": [
                "Blue Door me toh poora foodie paradise hai! Lunch me pasta khaaya — mazedaar tha, aur ghar ke liye fresh bakes bhi le gaye. Dono mast the — pasta me flavor sahi tha fresh herbs ke saath, aur croissants aur pastries soft, buttery, aur clearly made with love. Favorite pick nahi ho rahi dono me se!",
                "Chahe proper meal chahiye ya fresh bakery items — Blue Door dono me expert hai. Savory food genuinely delicious hai aur bakes counter French boulangerie jaisa lagta hai. Daily fresh banta hai sab. Total gem hai yeh jagah!"
            ],
            "VALUE": [
                "Blue Door me quality aur price ka combination sabse best hai! Itna accha taste aur fresh bakery items itne reasonable rates me milna mushkil hai Dehradun me. Portion size bhi badhiya hai. Total paisa vasool jagah!",
                "Honestly itna premium experience aur itne fair prices — Blue Door ne dil jeet liya! Coffee se lekar food tak sab kuch top quality ka hai aur bill dekhke khushi hoti hai. Highly recommended!",
                "Ekdum genuine cafe experience bina kisi unnecessary price hike ke. Khana zabardast, vibes super cozy aur prices bilkul pocket-friendly. Aise spots rare hote hain!"
            ],
            "ALL,VALUE": [
                "Kya baat hai — Blue Door me sab kuch ekdum perfect hai! Coffee, fresh bakes, savory food aur staff ka nature — sab 10/10. Aur sabse acchi baat yeh hai ki prices bilkul fair hain. Paisa vasool aur dil khush karne wala experience!",
                "Dehradun ka best all-rounder cafe! Ambience peaceful hai, food aur coffee premium hai, aur budget bhi bilkul nahi bigadta. Har kisi ko yahan zaroor aana chahiye!"
            ],
            "ALL": [
                "Kya bataun — Blue Door ne toh poora experience hi next level de diya! Coffee rich aur smooth thi, fresh bakes heaven the, food delicious tha, aur staff ne ekdum ghar jaisa feel karaya. Clean, aesthetic space with great vibes. Is jagah me sab kuch hai. 5 stars, no question!",
                "Yeh Dehradun ka best cafe experience hai hands down! Specialty coffee perfectly brewed thi, pastries clearly freshly baked thin real butter ke saath, savory food restaurant-quality thi, aur staff incredibly warm the. Clean, cozy, aur beautifully done. Can't wait to come back!",
                "Agar 5 se zyada stars de sakta toh de deta! Coffee se lekar bakes, food se lekar hospitality — sab kuch soch ke kiya hai. Jagah spotless hai, ambience perfect hai, aur prices bhi fair hain. Dehradun me sabko yahan zaroor aana chahiye!"
            ],
            "CROISSANTS": [
                "Blue Door ke croissants sach me unbelievable hain! Ekdum flaky, warm, aur pure butter ka swaad har bite me milta hai. Dehradun me aisa fresh croissant aur kahin nahi mila. Absolute must-try!",
                "Subah-subah yahan ka garam butter croissant try kiya aur dil khush ho gaya. Super fresh, flaky crust, aur bilkul soft inside. Croissant lovers ke liye yeh jagah jannat hai!",
                "Yahan ke croissants ekdum French bakery style hain! Flaky layers, real butter aroma aur fresh warm texture. 10/10 recommendation!"
            ],
            "CAKES": [
                "Blue Door ke cakes aur pastries ka koi comparison nahi hai! Itne soft, moist aur rich flavors hain ki har bite me maza aa jata hai. Meetha bilkul balanced hai, bilkul heavy nahi lagta. Best bakery in Clement Town!",
                "Yahan ki pastries aur cakes ekdum fresh aur delicious hain! Display counter dekhke hi muh me paani aa jata hai. Cake itna soft aur creamy tha ki melt ho gaya muh me. Definitely ordering cakes from here!",
                "Best cakes in Dehradun! Freshly baked, rich taste aur presentation bhi ekdum aesthetic. Har celebration ke liye yahi se pastry lena chahiye!"
            ],
            "PASTA": [
                "Blue Door ka pasta sach me lajawaab hai! Ekdum authentic Italian taste, pasta perfectly al dente cook hua tha aur sauce ka flavor bohot rich tha. Cafe me itna accha Italian khana milna rare hai. 10/10!",
                "Yahan ka pasta try kiya aur fan ho gaya! Generous portion size, fresh herbs aur sauce me proper balance. Italian food lovers ko yeh spot zaroor pasand aayega.",
                "Comfort food at its best — Blue Door ka pasta! Rich herb sauce, properly cooked pasta aur bohot hi tasty flavors. Khana ekdum satisfying tha!"
            ],
            "SANDWICHES": [
                "Blue Door ke sandwiches aur wraps ekdum fresh aur loaded hote hain! Bread perfectly grilled aur crispy thi, aur fillings bohot flavorful thin. Ekdum satisfying aur pet bharne wala meal tha!",
                "Yahan ka grilled sandwich try kiya — bohot tasty tha! Fresh veggies, rich spreads aur crunch ekdum perfect. Quick meal ya brunch ke liye best choice hai.",
                "Sandwiches aur wraps super fresh aur loaded the! Bread crispy thi aur fillings bohot tasty. Value for money aur full tummy guaranteed!"
            ],
            "DESSERTS": [
                "Blue Door ke desserts ekdum dil jeet lete hain! Har dessert itna tastefully banaya gaya hai — perfect sweetness, rich texture aur super fresh. Dessert lovers ko yahan zaroor aana chahiye!",
                "Yahan ka dessert try kiya aur maza hi aa gaya! Bilkul balanced meetha, super velvety aur fresh. Blue Door aakar dessert na khana gunah hai!",
                "Dessert lovers ke liye ultimate destination! Har bite me rich flavor aur freshness. Khana khane ke baad dessert zaroor order karna!"
            ],
            "BEVERAGES": [
                "Blue Door ke chilled beverages aur drinks bohot refreshing hain! Perfect blend, fresh flavors aur presentation bhi sundar. Ekdum thanda aur refreshing feel deta hai!",
                "Loved their chilled beverages! Perfectly balanced, ice cold, aur fresh taste. Garmi me ya chilling ke liye best refresher hai.",
                "Super refreshing drinks! Meetha bilkul balanced aur fresh ingredients. Cafe me baithke sip karne ke liye perfect companion hai."
            ],
            "COFFEE,CROISSANTS": [
                "Coffee aur croissant ka combo Blue Door me unmatched hai! Garam flaky butter croissant ke saath specialty coffee — subah ka mood ban gaya. Dono items fresh aur top-quality the!",
                "Blue Door ki smooth cappuccino aur unka freshly baked butter croissant — pure perfection! Croissant me real butter ka swaad hai aur coffee ekdum rich hai. Best breakfast combo in town!",
                "Agar yahan aao toh specialty coffee ke saath croissant zaroor try karna. Warm, flaky layers aur smooth aromatic brew. Dil khush ho gaya!"
            ],
            "CAKES,COFFEE": [
                "Specialty coffee ke saath fresh cake ki slice — best combination ever! Coffee bold aur smooth thi aur cake melt-in-the-mouth soft tha. Sweet tooth aur coffee lovers dono khush!",
                "Coffee aur cake pairing at Blue Door is next level! Cappuccino rich thi aur cake super moist aur fresh. Definitely coming back for this!"
            ],
            "COFFEE,PASTA": [
                "Blue Door me pasta aur coffee dono try kiye aur dono zabardast the! Pasta perfectly seasoned tha with authentic Italian herbs, aur coffee ne meal ko beautifully complete kiya. 10/10!",
                "Delicious pasta khane ke baad specialty brew sip karna — great experience! Savory comfort food aur top-notch coffee ka killer combo."
            ],
            "COFFEE,SANDWICHES": [
                "Crispy grilled sandwich ke saath cold brew — lunch ka perfect plan! Sandwich loaded aur crunchy tha aur coffee strong yet smooth. Highly recommended!",
                "Sandwich aur coffee combo bohot hi satisfying tha. Fresh ingredients, proper grilling aur specialty coffee. Pure value for money!"
            ],
            "COFFEE,DESSERTS": [
                "Specialty coffee ke saath rich dessert — kya combination hai! Velvety coffee aur creamy dessert ne poora mood bana diya. 5-star treat!",
                "Yahan ka dessert aur coffee dono world-class hain. Aromatic brew aur indulgent dessert — treat yourself to this combo!"
            ],
            "DESSERTS,PASTA": [
                "Pasta se shuru kiya aur dessert pe khatam — poora meal 10/10 tha! Pasta rich aur flavorful tha, aur dessert ne dil jeet liya. Perfect foodie lunch!",
                "Authentic Italian pasta ke baad inka fresh dessert try kiya. Savory se lekar sweet tak, sab kuch top notch tha!"
            ],
            "CAKES,CROISSANTS": [
                "Bakery lovers ke liye Blue Door jannat hai! Flaky butter croissants aur super fresh cakes — dono me European bakery quality feel aati hai. Unbeatable bakes!",
                "Croissants itne flaky aur cakes itne soft — Blue Door ke bakery items ka koi muqabla nahi. Fresh daily baking clearly shows in the taste!"
            ],
            "BEVERAGES,SANDWICHES": [
                "Loaded grilled sandwich aur chilled refreshing beverage — lunch me maza aa gaya! Crunchy sandwich ke saath thanda cooler ekdum hit combo hai.",
                "Sandwich bohot filling tha aur drink super refreshing. Quick satisfying bite ke liye best option hai yeh!"
            ],
            "BEVERAGES,PASTA": [
                "Hot flavorful pasta ke saath chilled drink ka combo bohot refreshing tha! Pasta authentic tha aur beverage ne taste buds ko refresh kar diya.",
                "Pasta aur chilled beverage combo was so good! Portion size generous tha aur flavors bilkul on point the."
            ],
            "BEVERAGES,CROISSANTS": [
                "Garam flaky croissant ke saath thandi refreshing drink — light aur tasty combo! Croissant butter se bhara tha aur drink crisp thi.",
                "Flaky croissants aur refreshing beverage pairing ne lunch light aur super enjoyable bana diya!"
            ],
            "CROISSANTS,PASTA": [
                "Blue Door me pasta bhi lajawaab hai aur croissants bhi! Savory lunch me pasta try kiya aur sath me fresh butter croissant — total foodie happiness!",
                "Italian pasta aur French bakery croissant ek hi jagah itne acche milna rare hai. Dono dishes outstanding thin!"
            ],
            "DESSERTS,SANDWICHES": [
                "Crispy loaded sandwich khane ke baad rich dessert enjoy kiya! Hearty savory khane ke baad sweet ending ekdum perfect rahi.",
                "Sandwich bohot filling tha aur dessert super velvety. Har cheez fresh aur flavorful thi!"
            ],
            "BEVERAGES,DESSERTS": [
                "Rich dessert aur chilled beverage ka pairing super delightful tha! Sweet indulgence ke saath fresh cooling drink — absolute bliss.",
                "Dessert velvety aur decadent tha aur beverage crisp aur refreshing. Perfect afternoon break combo!"
            ],
            "CAKES,PASTA": [
                "Pasta ke baad fresh cake slice — best lunch combo! Pasta flavorful tha aur cake super soft aur moist. Dono items top-grade the.",
                "Savory pasta aur fresh cake pairing was amazing. Portion size bhi accha tha aur taste bilkul authentic!"
            ],
            "PASTA,SANDWICHES": [
                "Pasta aur sandwich dono order kiye the group me — dono lajawaab the! Pasta perfectly al dente tha aur sandwich crispy aur loaded. Foodies zaroor try karein!",
                "Generous portions, fresh ingredients aur zabardast taste — pasta aur sandwich dono ne full satisfaction diya!"
            ],
            "BEVERAGES,CAKES": [
                "Chilled refreshing beverage ke saath fresh cake ki slice — shaandar combo! Cake super soft aur moist tha aur drink ekdum crisp aur cooling thi. Sweet tooth aur refreshment dono satisfy ho gaye!",
                "Blue Door ke chilled drinks aur unke fresh cakes dono zabardast hain! Pastry ka meetha bilkul balanced tha aur drink ne pura mood fresh kar diya."
            ],
            "BEVERAGES,COFFEE": [
                "Hot specialty coffee bhi try ki aur refreshing chilled beverage bhi — dono next level the! Coffee aromatic aur smooth thi aur iced cooler ekdum invigorating tha. Drink lovers ke liye best spot!",
                "Chahe hot brew ho ya thandi refreshing drink, Blue Door dono me expert hai. Quality of ingredients clearly shows in every sip!"
            ],
            "CAKES,DESSERTS": [
                "Dessert lovers ke liye Blue Door jannat hai! Fresh cake slice aur inka signature dessert dono order kiye — dono itne soft, velvety aur rich the ki muh me melt ho gaye. Unbeatable sweet treats!",
                "Yahan ke cakes aur desserts ka koi tod nahi hai! Har bite me fresh taste aur perfect sweetness. Dono dishes 10/10 thin!"
            ],
            "CAKES,SANDWICHES": [
                "Loaded crunchy grilled sandwich khane ke baad fresh cake ki slice try ki — savory aur sweet ka perfect combination! Sandwich hearty tha aur cake melt-in-the-mouth. Must-try meal combo!",
                "Sandwich super crispy aur flavorful tha aur cake slice super soft aur fresh. Blue Door dono savory aur bakery me full marks deserve karta hai!"
            ],
            "CROISSANTS,DESSERTS": [
                "Garam flaky butter croissant aur velvety rich dessert — kya zabardast pairing hai! Croissant me real butter layers thin aur dessert ne dil jeet liya. Pure luxury bakery experience!",
                "Subah ka fresh croissant aur sath me signature dessert — har bite me European bakery ka authentic flavor mila. Absolutely heavenly!"
            ],
            "CROISSANTS,SANDWICHES": [
                "Crispy grilled sandwich aur freshly baked flaky croissant — dono bohot hi tasty aur fresh the! Artisan bread, real butter aur generous fillings. Full meal satisfaction guaranteed!",
                "Sandwich crunchy aur loaded tha aur croissant warm aur flaky. Khana aur bakes dono me Blue Door Dehradun ka best cafe hai!"
            ]
        },
        "openings": [
            "Aaj pehli baar Blue Door Café & Bakes gaye aur next visit ka already plan bana liya!",
            "Blue Door ke baare me bahut suna tha aur woh saari hype 100% deserve karta hai.",
            "Clement Town me explore karte karte Blue Door mil gaya aur kya jackpot mili!",
            "Ek dost ne kaha tha try kar, aur sach me — bahut accha decision tha.",
            "Blue Door jaldi hi meri favorite jagah ban gayi Dehradun me, aur reason batata hoon.",
            "Normally review nahi likhta but Blue Door ne genuinely itna impress kiya ki share karna zaroori laga.",
            "Agar ek aisi jagah chahiye jahan sab kuch accha mile, Blue Door is it.",
            "Bas ek chhoti si visit ke liye gaye the aur ghanton baith gaye kyunki vibe hi itni acchi thi.",
            "Blue Door Café & Bakes me aaj ka experience bahut lovely raha!",
            "Clement Town ka yeh cozy sa cafe ek proper hidden gem hai."
        ],
        "bridges": [
            "Aur best part toh yeh tha ki —",
            "Jo cheez sabse zyada standout thi woh thi",
            "Upar se,",
            "But honestly, sabse zyada jo pasand aaya woh tha",
            "Aur experience aur bhi accha hua jab",
            "Cherry on top?",
            "Aur acchi baat yeh thi ki",
            "Ek aur cheez mention karni hai —",
            "Jo sabse zyada surprise kiya woh tha"
        ],
        "categories": {
            "ALL": [
                "poora experience genuinely excellent tha — food se lekar service tak, ambience se lekar taste tak — sab kuch ekdum click kiya.",
                "honestly ek bhi cheez complain karne layak nahi mili. Har detail soch samajh ke kiya hua tha.",
                "laga jaise kisi dost ke ghar gaye hain jahan amazing food aur coffee banti ho."
            ],
            "COFFEE": [
                "coffee bilkul incredible thi — rich, smooth, aur clearly quality beans use ki hain. Barista apna kaam seriously leta hai aur woh dikhta hai.",
                "yahan ki specialty coffee asli me real deal hai. Average cafe coffee nahi hai yeh — properly roasted, perfectly brewed, aur itni aromatic. Best coffee in a while!",
                "cappuccino order kiya aur perfection mili — velvety foam, bold espresso, bilkul bitterness nahi. Coffee lovers, mere pe trust karo is baar.",
                "cold brew dangerously good thi — smooth, bold, aur refreshing. Abhi yeh likh raha hoon aur craving ho rahi hai ek aur cup ki."
            ],
            "BAKES": [
                "fresh bakes next level the! Croissants perfectly flaky aur buttery the — clearly real butter use hota hai, woh wala shortcut nahi. Taste me quality dikhti hai.",
                "bakery counter dekh ke laga jaise Parisian boulangerie me aa gaye. Daily fresh bake hota hai aur woh dikhta bhi hai — warm, fragrant, aur perfectly golden.",
                "butter croissant aur chocolate Danish try kiye, dono unreal the. Flaky layers, rich butter flavor, aur woh fresh-from-the-oven warmth. Heaven!",
                "artisanal bakes aise hain ki ek bite lo aur turant 6 aur khareedne ka mann kare. Fresh, buttery, aur made with so much love."
            ],
            "FOOD": [
                "food genuinely delicious tha — fresh ingredients, great seasoning, aur generous portions. Typical cafe food bilkul nahi hai yeh.",
                "pasta perfectly al dente aaya beautifully seasoned sauce ke saath. Proper Italian restaurant ko easily takkar de sakta hai.",
                "savory menu seriously underrated hai yahan ka. Sab kuch flavor-packed tha aur clearly scratch se fresh banaya tha.",
                "sandwich loaded tha fillings se aur taste amazing tha. Bread fresh thi aur flavors ka combo ekdum perfect tha. Very satisfying!"
            ],
            "SERVICE": [
                "staff yahan genuinely wonderful hai — warm, attentive, aur hamesha smile ke saath. Walk-in karte hi welcome feel hua.",
                "Blue Door ki hospitality kuch special hai. Team polite hai, recommendations me helpful hai, aur clearly passionate hai apne kaam ke baare me.",
                "jo cheez Blue Door ko alag banati hai woh log hain. Staff har customer ko dost ki tarah treat karta hai. Quick service, warm vibes, genuine care.",
                "staff ki friendliness se bahut impressed hua. Agli baar aaye toh unhone order bhi yaad rakha. Woh personal touch means everything."
            ],
            "CLEANLINESS": [
                "jagah ekdum spotlessly clean thi — tables, kitchen, cutlery, sab chamak raha tha. Hygiene clearly top priority hai yahan.",
                "kitna clean aur well-maintained tha sab — seating se washroom tak kitchen tak — impeccable standards hain."
            ],
            "AMBIENCE": [
                "ambience bilkul perfect hai — cozy interiors, warm lighting, soft music. Date ho, friends meetup ho, ya solo work — sab ke liye ideal.",
                "cafe ka aesthetic gorgeous hai! Har corner Instagram-worthy hai aur vibe itni relaxing hai ki ghanton baith sakte ho."
            ],
            "VALUE": [
                "prices quality ke hisab se bahut reasonable hain. Premium ingredients, beautiful presentation, generous portions — sab fair prices pe. Total value for money!",
                "genuinely surprised tha ki itna affordable hai! Quality easily expensive chains ko match karti hai but fraction of the price pe. Wallet bhi khush, pet bhi khush."
            ],
            "CROISSANTS": [
                "croissants ekdum warm, flaky aur real butter se loaded the — maza aa gaya.",
                "subah ka fresh butter croissant khaakar dil khush ho gaya, pure French bakery vibe thi.",
                "croissant ki har layer flaky aur buttery thi, Dehradun me best!"
            ],
            "CAKES": [
                "cakes aur pastries itne soft aur fresh the ki muh me melt ho gaye.",
                "pastry ka meetha ekdum balanced tha, bilkul heavy nahi laga.",
                "freshly baked cakes ka taste aur presentation dono 10/10 the."
            ],
            "PASTA": [
                "pasta perfectly al dente cook hua tha with rich flavorful sauce.",
                "pasta me authentic Italian herbs aur taste tha, bohot satisfying laga.",
                "pasta ka portion size aur sauce ka balance ekdum spot on tha."
            ],
            "SANDWICHES": [
                "sandwiches aur wraps crispy grilled the aur fillings se loaded the.",
                "grilled sandwich me fresh crunch aur flavorful spreads ka maza aa gaya.",
                "sandwich bohot hearty aur satisfying tha, perfect comfort food."
            ],
            "DESSERTS": [
                "desserts itne velvety aur balanced the ki har bite me maza aaya.",
                "meetha ekdum balanced tha, fresh texture ke saath pure indulgence.",
                "dessert presentation aur taste dono me restaurant-grade tha."
            ],
            "BEVERAGES": [
                "chilled beverages bohot refreshing aur invigorating the.",
                "drinks me fresh flavors the, presentation bhi bohot aesthetic thi.",
                "beverages ne taste buds ko ekdum revive kar diya."
            ]
        },
        "closings": [
            "Zaroor wapas ayenge — probably is weekend bhi!",
            "Highly recommend karta hoon yeh jagah sabko.",
            "Agar abhi tak nahi gaye toh apna favor karo aur jao. Regret nahi hoga!",
            "Saare dosto ko bata diya hai. Blue Door must-visit hai!",
            "Agli baar family ko bhi le jaaunga. Unhe bhi bahut pasand aayega!",
            "Mera go-to spot ban gaya hai aur mujhe koi complaint nahi. See you soon Blue Door!",
            "10/10 recommend karta hoon. Dehradun ki best discoveries me se ek!",
            "Thank you Blue Door itne acche experience ke liye. Coming back for sure!",
            "Mere se 5 stars! Aise hi karte raho Blue Door, perfect chal raha hai!"
        ]
    },
    "HINDI": {
        "combos": {
            "COFFEE": [
                "ब्लू डोर की कॉफी ने दिल जीत लिया! स्मूथ, रिच और बिल्कुल परफेक्ट रोस्ट — ऐसी कॉफी देहरादून में और कहीं नहीं मिली। बरिस्ता भी बहुत कुशल है, एकदम कैफे-स्टाइल अनुभव मिला। कॉफी प्रेमियों को यहाँ ज़रूर आना चाहिए, भरोसा रखें!",
                "किसी भी कॉफी प्रेमी को ब्लू डोर ज़रूर आना चाहिए। कैपुचीनो ऑर्डर की थी — वेल्वेटी फोम और बोल्ड एस्प्रेसो का बेहतरीन कॉम्बिनेशन मिला। कोई कड़वाहट नहीं, बस शुद्ध कॉफी का आनंद। मेरी नई पसंदीदा जगह बन गई है।",
                "ब्लू डोर की कोल्ड ब्रू ट्राई की और सच कहूँ तो अब किसी और जगह की कॉफी अच्छी नहीं लगती। बोल्ड पर स्मूथ, एकदम ताज़गी भरी। कैफे का माहौल भी बहुत आरामदायक है। लैपटॉप लेकर काम करने के लिए बिल्कुल सही जगह है।"
            ],
            "BAKES": [
                "ब्लू डोर के बेक्स की क्या बात करें! क्रॉसों इतने फ्लेकी और बटरी थे कि लगा जैसे पेरिस में बैठकर खा रहे हों। सब कुछ रोज़ ताज़ा बेक होता है और स्वाद में कोई समझौता नहीं। असली मक्खन इस्तेमाल करते हैं, वो ऑथेंटिक फ्लेवर आता है!",
                "ब्लू डोर के पेस्ट्री काउंटर के सामने से हटने का मन ही नहीं किया! हर चीज़ इतनी सुंदर और लुभावनी दिखती है। बादाम क्रॉसों ट्राई किया — मुँह में घुल गया। ताज़े बेक्स की खुशबू अंदर जाते ही आती है, वो अनुभव ही कुछ और है।"
            ],
            "FOOD": [
                "ब्लू डोर का खाना सच में बहुत प्रभावशाली है! पास्ता ऑर्डर किया था और बिल्कुल अल डेंटे मिला शानदार सॉस के साथ। कैफे का खाना समझकर गए थे लेकिन रेस्टोरेंट-क्वालिटी मिला। पोर्शन भी भरपूर थे!",
                "ब्लू डोर का सेवरी मेन्यू गंभीरता से कम आंका जाता है। सैंडविच और पास्ता दोनों ट्राई किए — दोनों लाज़वाब थे। ताज़ा सामग्री, सही मसाले, और स्वाद बेमिसाल। सिर्फ कैफे और बेकरी नहीं, यह पूरा फूड डेस्टिनेशन है!"
            ],
            "COFFEE,BAKES": [
                "ब्लू डोर का कॉफी और क्रॉसों कॉम्बो ट्राई करना ज़िंदगी का एक ज़रूरी अनुभव है! स्पेशल्टी ब्रू इतनी स्मूथ थी और साथ में गर्म, बटरी क्रॉसों — बिल्कुल परफेक्ट सुबह का नज़ारा। लगा जैसे किसी यूरोपियन कैफे में बैठकर नाश्ता कर रहे हैं।",
                "कॉफी और ताज़े बेक्स दोनों एक साथ इतने अच्छे कहीं नहीं मिलते देहरादून में! ब्लू डोर की लाते स्मूथ थी और बादाम क्रॉसों बटरी परफेक्शन था। कैफे का माहौल भी एकदम आरामदायक था।"
            ],
            "COFFEE,BAKES,SERVICE": [
                "मैं तो ब्लू डोर का प्रशंसक बन गया! कॉफी शिल्प-स्तरीय गुणवत्ता की है, ताज़े बेक्स स्वर्ग हैं — बटर क्रॉसों और डैनिश दोनों अद्भुत थे। और सबसे बड़ी बात — स्टाफ इतना मित्रवत है कि जाने का मन ही नहीं करता। यह जगह सच में विशेष है!",
                "ब्लू डोर में सब कुछ सही है। अंदर जाते ही ताज़े बेक्स और कॉफी की खुशबू आती है। स्टाफ ने गर्मजोशी से स्वागत किया। कैपुचीनो बेहतरीन थी, क्रॉसों फ्लेकी स्वर्ग थे, और आतिथ्य ने दिल छू लिया।"
            ],
            "FOOD,SERVICE": [
                "ब्लू डोर में खाना भी शानदार और लोग भी! पास्ता बिल्कुल सही मसालेदार था, सैंडविच भरपूर और स्वादिष्ट था, और स्टाफ पूरे समय बहुत प्यारा था। उन्हें अपने काम से सच्चा प्यार है और वो दिखता है।",
                "बेहतरीन खाना और बेहतरीन सेवा — यही ब्लू डोर है! खाने की गुणवत्ता उत्कृष्ट है — ताज़ा सामग्री, शानदार स्वाद, भरपूर मात्रा। और स्टाफ इतना गर्मजोशी भरा है कि बार-बार आने का मन करता है।"
            ],
            "VALUE": [
                "ब्लू डोर में क्वालिटी और प्राइस का संतुलन सच में लाजवाब है! इतना बढ़िया स्वाद और ताज़ा बेक किया हुआ सामान इतने सही दाम में मिलना बहुत मुश्किल है। पोर्शन साइज भी बहुत अच्छा है। एकदम पैसा वसूल कैफे!",
                "सच में बहुत खुशी हुई कि इतना प्रीमियम कैफे अनुभव इतने वाजिब दामों में मिल रहा है। कॉफी से लेकर खाने तक सब कुछ बेहतरीन है। देहरादून के सबसे अच्छे कैफे में से एक!",
                "शानदार स्वाद, बेहतरीन माहौल और जेब पर भारी न पड़ने वाले दाम — ब्लू डोर ने पूरी तरह दिल जीत लिया। जब भी कुछ अच्छा खाने-पीने का मन हो, यहाँ ज़रूर आएं।"
            ],
            "ALL,VALUE": [
                "शुरुआत से लेकर आखिर तक एकदम 5-स्टार अनुभव! ब्लू डोर में सब कुछ सही है — बढ़िया कॉफी, ताज़ा पेस्ट्री, स्वादिष्ट खाना और बहुत ही सही कीमतें। देहरादून में ऐसा अनुभव मिलना बहुत दुर्लभ है!",
                "एकदम पैसा वसूल और दिल खुश करने वाला कैफे! खूबसूरत माहौल, लाजवाब स्वाद और बहुत ही विनम्र स्टाफ। पूरी तरह से संतुष्ट!"
            ],
            "ALL": [
                "क्या बताऊँ — ब्लू डोर ने तो पूरा अनुभव ही अगले स्तर का दे दिया! कॉफी रिच और स्मूथ थी, ताज़े बेक्स लाज़वाब थे, खाना स्वादिष्ट था, और स्टाफ ने घर जैसा अनुभव कराया। साफ-सुथरी, सुंदर जगह शानदार माहौल के साथ। इस जगह में सब कुछ है। पाँच सितारे, बिना किसी सवाल के!",
                "यह देहरादून का सबसे बेहतरीन कैफे अनुभव है! स्पेशल्टी कॉफी बेहतरीन ढंग से बनाई गई थी, पेस्ट्री ताज़ी बेक की हुई असली मक्खन के साथ, सेवरी खाना रेस्टोरेंट-क्वालिटी का, और स्टाफ अविश्वसनीय रूप से गर्मजोशी भरा। सब कुछ शानदार!"
            ],
            "CROISSANTS": [
                "ब्लू डोर के क्रॉसों सच में लाजवाब हैं! बिल्कुल गर्म, परतदार और असली मक्खन का बेहतरीन स्वाद हर बाइट में मिलता है। देहरादून में ऐसा ताज़ा क्रॉसों और कहीं नहीं मिलेगा। ज़रूर आज़माएं!",
                "यहाँ के ताज़ा बेक किए हुए क्रॉसों ने दिल जीत लिया। एकदम खस्ता, हल्के और मक्खन से भरपूर। अगर आपको बेकरी का खाना पसंद है, तो ब्लू डोर के क्रॉसों मिस मत करना!",
                "ब्लू डोर के बटर क्रॉसों का स्वाद बिल्कुल फ्रेंच बेकरी जैसा है! परतदार बनावट, ताज़ी खुशबू और असली मक्खन का स्वाद। 10/10 अनुभव!"
            ],
            "CAKES": [
                "ब्लू डोर के केक और पेस्ट्री सच में बहुत स्वादिष्ट हैं! बहुत ही सॉफ्ट, फ्रेश और बिल्कुल संतुलित मिठास। पेस्ट्री की हर बाइट में असली और ताज़ा सामग्री का स्वाद आता है। बेहतरीन बेकरी अनुभव!",
                "यहाँ का केक काउंटर देखकर ही मन खुश हो जाता है। जो पेस्ट्री हमने ट्राई की, वो इतनी ताज़ा और मलाईदार थी कि मुँह में घुल गई। शहर की सबसे बेहतरीन पेस्ट्री!",
                "देहरादून में सबसे अच्छे केक और पेस्ट्री! बिल्कुल ताज़ा, सुंदर सजावट और लाजवाब स्वाद। हर खुशी के मौके के लिए यहाँ से केक लेना बिल्कुल सही रहेगा।"
            ],
            "PASTA": [
                "ब्लू डोर का पास्ता सच में बहुत स्वादिष्ट है! बिल्कुल सही तरीके से पका हुआ, गाढ़ी और खुशबूदार सॉस के साथ। कैफे में इतना बेहतरीन इटैलियन खाना मिलना वाकई सुखद आश्चर्य रहा। बहुत ही बढ़िया!",
                "यहाँ का पास्ता ट्राई किया और बेहद पसंद आया! भरपूर मात्रा, ताज़ा मसाले और एकदम प्रामाणिक स्वाद। इटैलियन खाने के शौकीनों के लिए यह एकदम सही जगह है।",
                "सच्चा इटैलियन स्वाद — ब्लू डोर का पास्ता! ताज़ी जड़ी-बूटियों की खुशबू, सही मसाले और बहुत ही स्वादिष्ट सॉस। खाना खाकर मन तृप्त हो गया!"
            ],
            "SANDWICHES": [
                "ब्लू डोर के सैंडविच और रैप्स बहुत ही ताज़ा और भरपूर भरे हुए हैं! ब्रेड एकदम क्रिस्पी ग्रिल्ड थी और अंदर की स्टफिंग बेहद स्वादिष्ट थी। पेट और मन दोनों खुश हो गए!",
                "यहाँ का ग्रिल्ड सैंडविच खाकर मज़ा आ गया! ताज़ी सामग्री, बेहतरीन स्वाद और भरपूर पोर्शन। नाश्ते या हल्के लंच के लिए एकदम उत्तम विकल्प।",
                "सैंडविच और रैप्स बहुत ही ताज़ा और कुरकुरे थे। भरपूर भरावन और बहुत ही स्वादिष्ट मसाले। पैसे की पूरी कीमत वसूल!"
            ],
            "DESSERTS": [
                "ब्लू डोर के डेसर्ट सच में बहुत लाजवाब हैं! बिल्कुल संतुलित मिठास, बेहतरीन बनावट और बेहद ताज़ा स्वाद। खाने के बाद यहाँ का डेसर्ट ज़रूर ट्राई करें!",
                "यहाँ के मीठे व्यंजनों ने दिल खुश कर दिया! हर चम्मच में शुद्ध और ताज़ा स्वाद। डेसर्ट के शौकीनों के लिए यह एक स्वर्ग जैसा अनुभव है।",
                "बेहतरीन डेसर्ट अनुभव! मिठास बिल्कुल संतुलित, मलाईदार बनावट और लाजवाब स्वाद। यहाँ आकर मीठा ज़रूर खाएं!"
            ],
            "BEVERAGES": [
                "ब्लू डोर के पेय पदार्थ और ठंडे ड्रिंक्स बहुत ही ताज़गी भरे हैं! बेहतरीन स्वाद, सुंदर प्रस्तुति और मन को तरोताज़ा कर देने वाला अहसास।",
                "यहाँ के ठंडे ड्रिंक्स बहुत पसंद आए! बिल्कुल सही मिठास, ठंडे और ताज़गी से भरपूर। कैफे में बैठकर आराम से पीने के लिए एकदम सही।",
                "ताज़गी से भरपूर ड्रिंक्स! प्राकृतिक स्वाद और सुंदर प्रस्तुति। दोपहर के समय मन को खुश कर देने वाला अनुभव।"
            ],
            "COFFEE,CROISSANTS": [
                "कॉफी और क्रॉसों का संगम ब्लू डोर में सच में अद्भुत है! गर्म, परतदार बटर क्रॉसों के साथ यहाँ की स्पेशल्टी कॉफी — दिन की सबसे खूबसूरत शुरुआत। दोनों चीजें ताज़ा और बेहतरीन थीं!",
                "ब्लू डोर की स्मूथ कैपुचीनो और ताज़ा बेक किया हुआ बटर क्रॉसों — बिल्कुल परफेक्शन! क्रॉसों में असली मक्खन का स्वाद है और कॉफी की खुशबू बेमिसाल। नाश्ते के लिए सबसे बेहतरीन कॉम्बो!",
                "यहाँ आएं तो स्पेशल्टी कॉफी के साथ क्रॉसों ज़रूर ट्राई करें। खस्ता परतें और लाजवाब कॉफी — दिल खुश हो जाएगा!"
            ],
            "CAKES,COFFEE": [
                "स्पेशल्टी कॉफी के साथ ताज़ा केक की स्लाइस — सबसे बेहतरीन कॉम्बिनेशन! कॉफी रिच थी और केक मुँह में घुल जाने वाला सॉफ्ट। कॉफी और केक प्रेमियों के लिए बेस्ट जगह!",
                "कॉफी और केक की यह जोड़ी लाजवाब थी। सुगंधित कॉफी और ताज़ी, मलाईदार पेस्ट्री — हर बाइट में मज़ा आ गया!"
            ],
            "COFFEE,PASTA": [
                "ब्लू डोर में पास्ता और कॉफी दोनों आज़माए और दोनों बेमिसाल निकले! पास्ता स्वादिष्ट सॉस में पूरी तरह पका था, और कॉफी ने भोजन को पूरा किया। 10/10!",
                "स्वादिष्ट पास्ता और बेहतरीन कॉफी! पास्ता में ताज़ी सामग्री का स्वाद था और स्पेशल्टी कॉफी ने दिल जीत लिया।"
            ],
            "COFFEE,SANDWICHES": [
                "कुरकुरा ग्रिल्ड सैंडविच और साथ में कोल्ड ब्रू — लंच का सबसे सही विकल्प! सैंडविच भरपूर भरा हुआ था और कॉफी एकदम स्मूथ और ताजगी भरी।",
                "सैंडविच और कॉफी का यह कॉम्बो बहुत ही संतोषजनक रहा। ताज़ा सामग्री और बेहतरीन क्वालिटी!"
            ],
            "COFFEE,DESSERTS": [
                "स्पेशल्टी कॉफी के साथ लाजवाब डेसर्ट — क्या बात है! कॉफी की खुशबू और डेसर्ट की संतुलित मिठास ने पूरा अनुभव खास बना दिया।",
                "शानदार कॉफी और मखमली डेसर्ट का यह संगम बेहद स्वादिष्ट था। अपने आप को यह ट्रीट ज़रूर दें!"
            ],
            "DESSERTS,PASTA": [
                "पास्ता से शुरुआत की और डेसर्ट पर खत्म — पूरा खाना 10/10 था! पास्ता का स्वाद बेहतरीन था और मीठे ने दिल जीत लिया।",
                "स्वादिष्ट पास्ता के बाद यहाँ का ताज़ा डेसर्ट ट्राई किया। नमकीन से लेकर मीठे तक, सब कुछ लाजवाब रहा!"
            ],
            "CAKES,CROISSANTS": [
                "बेकरी के शौकीनों के लिए ब्लू डोर स्वर्ग है! खस्ता बटर क्रॉसों और बेहद ताज़ा केक — दोनों में विश्वस्तरीय बेकरी का स्वाद मिलता है।",
                "क्रॉसों इतने परतदार और केक इतना सॉफ्ट — ब्लू डोर की बेकरी का कोई मुकाबला नहीं है!"
            ],
            "BEVERAGES,SANDWICHES": [
                "भरपूर ग्रिल्ड सैंडविच और ठंडा ताज़गी भरा ड्रिंक — लंच में मज़ा आ गया! कुरकुरा सैंडविच और ठंडा कूलर बहुत बढ़िया जोड़ी है।",
                "सैंडविच बहुत ही स्वादिष्ट था और ड्रिंक ने मन तरोताज़ा कर दिया। हल्के भोजन के लिए सबसे अच्छा विकल्प!"
            ],
            "BEVERAGES,PASTA": [
                "गरमा-गरम पास्ता के साथ ठंडा ड्रिंक बहुत ही ताज़गी भरा लगा! पास्ता का स्वाद प्रामाणिक था और ड्रिंक ने मज़ा दोगुना कर दिया।",
                "स्वादिष्ट पास्ता और ठंडा रिफ्रेशिंग ड्रिंक — भरपूर मात्रा और बेमिसाल स्वाद!"
            ],
            "BEVERAGES,CROISSANTS": [
                "गर्म परतदार क्रॉसों के साथ ठंडा ताज़गी भरा पेय — हल्का और स्वादिष्ट भोजन! क्रॉसों मक्खन से भरपूर था और ड्रिंक लाजवाब।",
                "खस्ता क्रॉसों और ताज़गी भरे ड्रिंक की जोड़ी ने मन खुश कर दिया!"
            ],
            "CROISSANTS,PASTA": [
                "ब्लू डोर में पास्ता भी स्वादिष्ट है और क्रॉसों भी! इटैलियन पास्ता और साथ में ताज़ा बटर क्रॉसों — खाने का पूरा मज़ा आ गया।",
                "पास्ता और फ्रेंच क्रॉसों दोनों एक ही जगह इतने बेहतरीन मिलना मुश्किल है। दोनों व्यंजन अद्भुत थे!"
            ],
            "DESSERTS,SANDWICHES": [
                "कुरकुरा ग्रिल्ड सैंडविच खाने के बाद लाजवाब डेसर्ट का आनंद लिया! पेट भी भरा और मीठे का मज़ा भी मिला।",
                "सैंडविच बहुत स्वादिष्ट था और डेसर्ट एकदम मखमली। हर चीज़ ताज़ा और बेहतरीन थी!"
            ],
            "BEVERAGES,DESSERTS": [
                "लाजवाब डेसर्ट और ठंडे ड्रिंक की यह जोड़ी बेहद सुखद रही! संतुलित मिठास और ताज़गी का बेहतरीन संगम।",
                "मखमली डेसर्ट और ताज़ा ठंडा ड्रिंक — दोपहर के आराम के लिए बिल्कुल सही जोड़ी!"
            ],
            "CAKES,PASTA": [
                "पास्ता के बाद ताज़ा केक की स्लाइस — लंच का सबसे बढ़िया कॉम्बिनेशन! पास्ता भी स्वादिष्ट था और केक भी बेहद सॉफ्ट।",
                "स्वादिष्ट पास्ता और ताज़ा केक दोनों ही बेहतरीन क्वालिटी के थे। पूरा आनंद मिला!"
            ],
            "PASTA,SANDWICHES": [
                "पास्ता और सैंडविच दोनों ऑर्डर किए थे — दोनों ही लाजवाब थे! पास्ता एकदम सही पका हुआ था और सैंडविच कुरकुरा और भरपूर भरा हुआ।",
                "भरपूर मात्रा, ताज़ा सामग्री और शानदार स्वाद — पास्ता और सैंडविच दोनों ने पूरा संतोष दिया!"
            ],
            "BEVERAGES,CAKES": [
                "ताज़गी भरे ठंडे पेय के साथ ताज़ा केक की स्लाइस — बहुत ही लाजवाब कॉम्बिनेशन! केक बेहद सॉफ्ट और स्वादिष्ट था और ड्रिंक ने मन तरोताज़ा कर दिया।",
                "ठंडे ड्रिंक्स और ताज़े केक का यह कॉम्बो बेहद पसंद आया! पेस्ट्री में संतुलित मिठास थी और ड्रिंक एकदम ताज़गी देने वाला था।"
            ],
            "BEVERAGES,COFFEE": [
                "यहाँ की स्पेशल्टी हॉट कॉफी और ताज़गी भरा ठंडा ड्रिंक दोनों आज़माए — दोनों ही बेहतरीन थे! कॉफी सुगंधित और स्मूथ थी और ड्रिंक बहुत रिफ्रेशिंग।",
                "गर्म कॉफी हो या ठंडा रिफ्रेशिंग ड्रिंक, ब्लू डोर दोनों में माहिर है। हर घूंट में ताज़गी और बेहतरीन स्वाद का अहसास होता है।"
            ],
            "CAKES,DESSERTS": [
                "मीठे के शौकीनों के लिए ब्लू डोर स्वर्ग जैसा है! ताज़ा केक और इन-हाउस डेसर्ट दोनों ही बेहद मखमली, स्वादिष्ट और ताज़ा थे। मुँह में घुल जाने वाला स्वाद!",
                "यहाँ के केक और डेसर्ट्स का स्वाद सच में अद्भुत है! ताज़ा सामग्री, सुंदर प्रस्तुति और बिल्कुल संतुलित मिठास। 10/10 अनुभव!"
            ],
            "CAKES,SANDWICHES": [
                "भरपूर ग्रिल्ड सैंडविच खाने के बाद ताज़ा केक की स्लाइस का आनंद लिया — नमकीन और मीठे का बेहतरीन संतुलन! सैंडविच कुरकुरा था और केक बेहद सॉफ्ट।",
                "सैंडविच बहुत ही स्वादिष्ट और भरपूर भरा हुआ था, और ताज़ा केक मुँह में घुल गया। दोनों ही व्यंजन बहुत उच्च कोटि के थे!"
            ],
            "CROISSANTS,DESSERTS": [
                "गरमा-गरम परतदार बटर क्रॉसों और साथ में मखमली डेसर्ट — बहुत ही शानदार जोड़ी! क्रॉसों में असली मक्खन का स्वाद था और डेसर्ट ने दिल जीत लिया।",
                "ताज़ा बेक किया हुआ क्रॉसों और यहाँ का खास डेसर्ट दोनों ही लाजवाब थे। विश्वस्तरीय बेकरी जैसा अहसास!"
            ],
            "CROISSANTS,SANDWICHES": [
                "कुरकुरा ग्रिल्ड सैंडविच और ताज़ा परतदार क्रॉसों — दोनों ही बेहद स्वादिष्ट और ताज़ा थे! भरपूर भरावन और असली मक्खन की खुशबू। पेट और मन दोनों खुश हो गए!",
                "सैंडविच बहुत ही क्रिस्पी और भरपूर था और क्रॉसों एकदम हल्का और खस्ता। खाने और बेक्स दोनों में ब्लू डोर सबसे आगे है!"
            ]
        },
        "openings": [
            "आज पहली बार ब्लू डोर कैफे एंड बेक्स गए और अगली बार का प्लान पहले से बना लिया!",
            "ब्लू डोर के बारे में बहुत सुना था और वो सारी तारीफें 100% सही निकलीं।",
            "क्लेमेंट टाउन में घूमते-घूमते ब्लू डोर मिल गया और क्या शानदार खोज रही!",
            "एक दोस्त ने कहा था ट्राई करो, और सच में — बहुत अच्छा फैसला रहा।",
            "ब्लू डोर जल्दी ही देहरादून में मेरी पसंदीदा जगह बन गई है, और कारण बताता हूँ।",
            "आम तौर पर समीक्षा नहीं लिखता लेकिन ब्लू डोर ने सच में इतना प्रभावित किया कि बताना ज़रूरी लगा।",
            "ब्लू डोर कैफे एंड बेक्स में आज का अनुभव बहुत सुंदर रहा!",
            "क्लेमेंट टाउन का यह आरामदायक कैफे एक छिपा हुआ रत्न है।"
        ],
        "bridges": [
            "और सबसे अच्छी बात तो यह थी कि —",
            "जो चीज़ सबसे ज़्यादा अलग दिखी वो थी",
            "इसके अलावा,",
            "लेकिन सच कहूँ तो सबसे ज़्यादा जो पसंद आया वो था",
            "और अनुभव और भी बेहतर हुआ जब",
            "केक पर चेरी?",
            "एक और बात बताने लायक है —",
            "जो सबसे ज़्यादा चौंकाया वो था"
        ],
        "categories": {
            "ALL": [
                "पूरा अनुभव सच में उत्कृष्ट था — खाने से लेकर सेवा तक, माहौल से लेकर स्वाद तक — सब कुछ बिल्कुल सही था।",
                "ईमानदारी से एक भी शिकायत नहीं मिली। हर विवरण सोच-समझकर किया हुआ था।"
            ],
            "COFFEE": [
                "कॉफी बिल्कुल अद्भुत थी — रिच, स्मूथ, और साफ दिखता है कि गुणवत्ता वाली बीन्स इस्तेमाल होती हैं। बरिस्ता अपने काम को गंभीरता से लेता है।",
                "यहाँ की स्पेशल्टी कॉफी असली है। सामान्य कैफे की कॉफी नहीं — ठीक से भुनी हुई, बेहतरीन ढंग से बनी, और इतनी सुगंधित। काफी समय में सबसे अच्छी कॉफी!",
                "कैपुचीनो ऑर्डर की और परफेक्शन मिला — वेल्वेटी फोम, बोल्ड एस्प्रेसो, ज़रा भी कड़वाहट नहीं।"
            ],
            "BAKES": [
                "ताज़े बेक्स अगले स्तर के थे! क्रॉसों बिल्कुल फ्लेकी और बटरी — असली मक्खन इस्तेमाल होता है। गुणवत्ता स्वाद में दिखती है।",
                "बेकरी काउंटर देखकर लगा जैसे पेरिसियन बूलांजरी में आ गए। रोज़ ताज़ा बेक होता है और वो दिखता भी है — गर्म, सुगंधित, बिल्कुल सही।",
                "बटर क्रॉसों और चॉकलेट डैनिश ट्राई किए, दोनों अविश्वसनीय थे। फ्लेकी परतें, समृद्ध बटर फ्लेवर, और ओवन से निकली ताज़गी।"
            ],
            "FOOD": [
                "खाना सच में स्वादिष्ट था — ताज़ा सामग्री, बेहतरीन मसाले, और भरपूर मात्रा। सामान्य कैफे का खाना बिल्कुल नहीं है।",
                "पास्ता बिल्कुल अल डेंटे मिला बेहतरीन सॉस के साथ। किसी भी इटैलियन रेस्टोरेंट को आसानी से टक्कर दे सकता है।",
                "सैंडविच भरपूर था और स्वाद अद्भुत। ब्रेड ताज़ी थी और फ्लेवर्स का कॉम्बिनेशन बिल्कुल सही। बहुत संतोषजनक!"
            ],
            "SERVICE": [
                "यहाँ का स्टाफ सच में बहुत अच्छा है — गर्मजोशी भरा, ध्यान देने वाला, और हमेशा मुस्कुराता हुआ। अंदर आते ही स्वागत का अहसास हुआ।",
                "ब्लू डोर की आतिथ्य कुछ खास है। टीम विनम्र है, सुझाव देने में मददगार, और अपने काम के प्रति उत्साही।",
                "जो चीज़ ब्लू डोर को अलग बनाती है वो लोग हैं। स्टाफ हर ग्राहक को दोस्त की तरह व्यवहार करता है। तेज़ सेवा, गर्म माहौल।"
            ],
            "CLEANLINESS": [
                "जगह एकदम चमचमाती साफ थी — टेबल, रसोई, बर्तन, सब कुछ। साफ-सफाई स्पष्ट रूप से प्राथमिकता है।",
                "सब कुछ कितना साफ-सुथरा था — बैठने की जगह से लेकर वॉशरूम तक — उत्कृष्ट मानक।"
            ],
            "AMBIENCE": [
                "माहौल बिल्कुल सही है — आरामदायक इंटीरियर, गर्म रोशनी, मधुर संगीत। डेट, दोस्तों से मिलने या अकेले काम करने के लिए आदर्श।",
                "इस जगह का सौंदर्य अद्भुत है! हर कोना तस्वीर-योग्य है और माहौल इतना शांत कि घंटों बैठ सकते हैं।"
            ],
            "VALUE": [
                "गुणवत्ता के हिसाब से कीमतें बहुत उचित हैं। उत्तम सामग्री, सुंदर प्रस्तुति, भरपूर मात्रा — सब उचित दामों पर। पैसा वसूल!",
                "सच में हैरान था कि इतना किफायती है! गुणवत्ता महंगी चेन्स से बराबर है लेकिन आधी कीमत पर।"
            ],
            "CROISSANTS": [
                "ताज़ा बेक किए हुए क्रॉसों बिल्कुल गर्म, परतदार और असली मक्खन से भरपूर थे।",
                "क्रॉसों की हर परत खस्ता और मक्खन जैसी मुलायम थी, बेहद लाजवाब।",
                "गर्म बटर क्रॉसों का स्वाद सच में दिल को खुश कर देने वाला था।"
            ],
            "CAKES": [
                "केक और पेस्ट्री बहुत ही ताज़ा, मलाईदार और बिल्कुल संतुलित मिठास वाली थीं।",
                "पेस्ट्री इतनी मुलायम थी कि मुँह में जाते ही घुल गई।",
                "ताज़े केक का स्वाद और बनावट दोनों ही उत्कृष्ट थे।"
            ],
            "PASTA": [
                "पास्ता बिल्कुल सही तरीके से पका हुआ और स्वादिष्ट सॉस से भरपूर था।",
                "पास्ता में प्रामाणिक इटैलियन जड़ी-बूटियों की खुशबू और भरपूर स्वाद था।",
                "पास्ता की मात्रा और सॉस का संतुलन एकदम सही था।"
            ],
            "SANDWICHES": [
                "सैंडविच और रैप्स बहुत ही कुरकुरे और ताज़ी स्टफिंग से भरे हुए थे।",
                "ग्रिल्ड सैंडविच में कुरकुरापन और लाजवाब स्वाद का संगम था।",
                "सैंडविच बहुत ही पेट भरने वाला और स्वादिष्ट था।"
            ],
            "DESSERTS": [
                "डेसर्ट बहुत ही मखमली और संतुलित मिठास वाले थे।",
                "हर चम्मच में शुद्धता और ताज़गी का अनुभव हुआ।",
                "डेसर्ट का स्वाद सच में मन को तृप्त कर देने वाला था।"
            ],
            "BEVERAGES": [
                "ठंडे पेय पदार्थ बहुत ही ताज़गी भरे और स्वादिष्ट थे।",
                "ड्रिंक्स में प्राकृतिक स्वाद था और प्रस्तुति भी बहुत सुंदर थी।",
                "पेय पदार्थों ने पूरे अनुभव को तरोताज़ा कर दिया।"
            ]
        },
        "closings": [
            "ज़रूर वापस आएँगे — शायद इसी सप्ताहांत!",
            "सबको यह जगह अत्यधिक सुझाव देता हूँ।",
            "अगर अभी तक नहीं गए तो अपना भला करें और जाएँ। पछतावा नहीं होगा!",
            "सारे दोस्तों को बता दिया है। ब्लू डोर अवश्य जाएँ!",
            "अगली बार परिवार को भी ले जाऊँगा। उन्हें भी बहुत पसंद आएगा!",
            "मेरी पसंदीदा जगह बन गई है। जल्दी मिलते हैं ब्लू डोर!",
            "10 में से 10 सुझाव देता हूँ। देहरादून की सबसे अच्छी खोज में से एक!",
            "धन्यवाद ब्लू डोर इतने शानदार अनुभव के लिए। ज़रूर वापस आएँगे!"
        ]
    }
};

// Global export
if (typeof window !== 'undefined') {
    window.REVIEWS_DB = REVIEWS_DB;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { REVIEWS_DB };
}
