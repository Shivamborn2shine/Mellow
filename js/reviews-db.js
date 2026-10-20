/**
 * ===========================================================================
 * SCOOP N BREW — HUMANIZED REVIEWS ENGINE v2.0
 * Curated for: Waffles (Nutella ₹99), Mini Pancakes (₹59), Hocco Cones, Shakes & Fries
 * ===========================================================================
 */

const REVIEWS_DB = {
    "ENGLISH": {
        "combos": {
            "WAFFLES": [
                "The Nutella waffle here is absolutely divine! Freshly pressed, golden-crisp on the outside, and warm chocolate melting in every bite for just ₹99. Adding a scoop of ice cream on top (+₹20) made it pure bliss!",
                "Best Belgian waffles in Clement Town! Crisp, airy, and topped with generous Nutella drizzle. For under ₹100, the quality beats high-end cafes.",
                "Ordered the chocolate waffle with ice cream with my college friends. Super crisp, warm, and delicious. 10/10 recommendation!"
            ],
            "MINI_PANCAKES": [
                "The mini pancakes stack for ₹59 is an absolute steal! Warm, soft, fluffy, and drizzled with rich chocolate sauce. Perfect sweet tooth fix near GEHU Gate 1.",
                "Freshly made mini pancakes that melt in your mouth. Best affordable dessert in Clement Town!",
                "We order the mini pancakes almost every evening after lectures. Consistent, warm, and delicious every single time."
            ],
            "HOCCO": [
                "So glad Scoop n Brew carries official Hocco ice creams! The Strawberry Cheesecake cone and Boss Bar are top-tier treats. Crispy wafer cone and velvety ice cream.",
                "The Hocco Nutty Chocolate cone was loaded with crunchy nuts and chocolate. Nothing beats grabbing a chilled Hocco cone here on a warm day!",
                "Great selection of Hocco ice creams right by the counter. Always fresh and perfectly chilled."
            ],
            "SHAKES": [
                "Their Oreo thick shake is seriously thick, rich, and delicious for ₹79! Loved the chocolate drizzle inside the glass. Best shake place in Clement Town.",
                "Tried both the chocolate and Oreo thick shakes — thick, creamy, and made with real ice cream rather than just syrups. Fantastic presentation!",
                "Super thick gourmet shake! Served chilled and perfectly sweet. Definitely our favorite hangout spot after college."
            ],
            "FRIES": [
                "The loaded cheesy fries are next level! Smothered in creamy cheese sauce, seasoned to perfection, and served piping hot. At ₹79 it's unbeatable.",
                "Best peri peri fries around Clement Town! Extra crispy in the basket and fiery seasoning. Perfect snack combo.",
                "Ordered both peri peri and cheesy loaded fries with friends. We wiped out the bowl in minutes! Super fresh and crispy."
            ],
            "BURGERS_SANDWICHES": [
                "Loved their veg burger for ₹79 and grilled sandwich for ₹69! Crispy toasted buns, fresh veggie patty, and delicious house sauces. Great budget lunch for students.",
                "The grilled sandwich was hot, crunchy, and packed with flavor. Really filling and pocket friendly."
            ],
            "MOJITOS": [
                "Tried their mint and watermelon mojitos — crisp, fizzy, and very refreshing! Best beverage option for ₹69 near GEHU.",
                "The iced cooler in their custom cup with the striped straw is so aesthetic! Fresh mint flavor and super chilled."
            ],
            "COFFEE_CHAI": [
                "Hot coffee for ₹29 and Kesar chai for ₹25 — where else in Dehradun do you get cafe-level ambience at tapri prices?! Outstanding value.",
                "Their cold coffee at ₹69 is rich and creamy, while the hot coffee gives that perfect caffeine kick between college hours."
            ],
            "WAFFLES,HOCCO": [
                "Hot crisp Nutella waffle paired with a chilled Hocco ice cream cone — the ultimate dessert heaven! Cozy pink cafe aesthetic and super quick service.",
                "Waffles + Hocco ice cream is the best combination ever. Generous portions, incredible taste, and super pocket friendly."
            ],
            "MINI_PANCAKES,SHAKES": [
                "Mini pancakes and an Oreo thick shake made my whole afternoon! Aesthetic pink walls and neon arches look amazing in pictures.",
                "Fluffy pancakes and rich shake for under ₹140 total. You simply cannot beat Scoop n Brew's value!"
            ],
            "FRIES,BURGERS_SANDWICHES": [
                "Crispy veg burger with a side of loaded cheesy fries. Hot, fresh, and totally satisfying comfort food after classes.",
                "Best savory combo near GEHU Gate 1. Quick service, clean seating, and polite staff."
            ],
            "SERVICE": [
                "The staff at Scoop n Brew is exceptionally polite and quick! They take orders with a warm smile and serve everything fresh and piping hot.",
                "Super fast service and spotless clean counters. The team genuinely cares about customer satisfaction."
            ],
            "AMBIENCE": [
                "Such an Instagrammable cafe! The pink brick wall with illuminated arches and velvet seating looks stunning in photos. Perfect hangout spot opposite Pratap Cricket Turf.",
                "Love the neon arch lighting and chill music in the background. Cozy, vibrant, and very youthful college energy."
            ],
            "VALUE": [
                "Unbeatable value for money! Menu starts at just ₹20 for chai, ₹59 for pancakes, and ₹99 for waffles. You can feast with friends without burning a hole in your pocket.",
                "Pocket-friendly prices without any compromise on taste or quality. Truly savings sorted for students!"
            ],
            "ALL": [
                "Scoop n Brew is an absolute gem near GEHU Gate 1! Delicious waffles, mini pancakes, Hocco ice cream, thick shakes, and an aesthetic pink vibe. 5 stars all the way!",
                "Everything from the food to the illuminated arches and courteous staff was 10/10. Definitely coming back with more friends!",
                "Found our new regular college hangout! Great food, awesome cool vibes, and super affordable. Highly recommended to everyone in Dehradun."
            ]
        },
        "openings": [
            "Visited Scoop n Brew near GEHU Gate 1 today and loved it!",
            "Such a great experience at Scoop n Brew Clement Town.",
            "Finally checked out Scoop n Brew and it exceeded all expectations!",
            "If you're near Graphic Era Hill University, this cafe is a must-visit!",
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
            "WAFFLES": [
                "the Belgian Nutella waffle was warm, golden-brown, and delightfully crisp.",
                "the waffle toppings were super generous and the ice cream scoop was a great touch."
            ],
            "MINI_PANCAKES": [
                "the mini pancakes were golden, fluffy, and loaded with chocolate.",
                "the pancake stack at ₹59 is an absolute steal."
            ],
            "HOCCO": [
                "the Hocco ice cream cones were crunchy, rich, and authentic.",
                "the Strawberry Cheesecake and Nutty cones were top quality."
            ],
            "SHAKES": [
                "the thick shake was rich, creamy, and made with real ice cream.",
                "their Oreo shake consistency was super thick and decadent."
            ],
            "FRIES": [
                "the loaded fries were smothered in cheese and served piping hot.",
                "the peri peri fries were extra crispy and full of flavor."
            ],
            "BURGERS_SANDWICHES": [
                "the veg burger was crispy, fresh, and full of flavor.",
                "the grilled sandwich was toasted to golden perfection."
            ],
            "MOJITOS": [
                "the mojito was cool, fizzy, and bursting with fresh mint flavor.",
                "the iced cooler drink was delightfully refreshing and crisp."
            ],
            "COFFEE_CHAI": [
                "the hot coffee and kesar chai were brewed to perfection.",
                "the cold coffee was rich, creamy, and refreshing."
            ],
            "SERVICE": [
                "the staff was super courteous, friendly, and prompt.",
                "the service was quick and served with genuine warmth."
            ],
            "AMBIENCE": [
                "the pink brick walls and illuminated arches are super Instagrammable.",
                "the ambient lighting and comfortable velvet seating create a great vibe."
            ],
            "VALUE": [
                "the prices are so student-friendly and affordable.",
                "you get amazing quality and generous portions for the price."
            ],
            "ALL": [
                "the overall experience was top tier from start to finish.",
                "the whole vibe, food, and music were simply spot on."
            ]
        },
        "closings": [
            "Will definitely be coming back after college regularly!",
            "Highly recommend Scoop n Brew to everyone in Dehradun!",
            "Already planning our next visit with friends. 5 stars!",
            "Easily one of the coolest and most affordable cafes in town!",
            "Can't wait to try the rest of the menu soon!"
        ]
    }
};

if (typeof window !== 'undefined') {
    window.REVIEWS_DB = REVIEWS_DB;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { REVIEWS_DB };
}
