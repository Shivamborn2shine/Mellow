/**
 * ===========================================================================
 * SCOOP N BREW — HUMANIZED REVIEWS ENGINE v2.0
 * Curated for: Mini Pancakes (@ ₹59), Loaded Fries, Shakes, Mojitos & Sandwiches
 * ===========================================================================
 */

const REVIEWS_DB = {
    "ENGLISH": {
        "combos": {
            "PANCAKES": [
                "The mini pancakes here are an absolute must-try! For just ₹59, you get a warm, fluffy stack loaded with chocolate drizzle. Unbelievable value near GEHU Gate 1!",
                "Hands down the best mini pancakes in Clement Town. Freshly made, warm, soft, and so chocolatey. Perfect sweet treat with friends!",
                "Ordered the mini pancakes on a friend's recommendation and was blown away. Golden, fluffy, and great toppings. 10/10 sweet tooth fix."
            ],
            "SHAKES": [
                "Their Oreo thick shake is seriously thick, rich, and delicious! Far better than what most cafes serve for ₹79. Loved the chocolate drizzle inside the glass.",
                "Tried the chocolate and Oreo thick shakes — both were thick, decadent, and made with real ice cream. Best shake spot in Clement Town!",
                "Super thick gourmet shake! Served chilled and perfectly sweet. Definitely my new go-to place after college."
            ],
            "FRIES": [
                "The loaded fries here are next level! Smothered in creamy cheese sauce, seasoned to perfection, and served piping hot. At ₹79 it's unbeatable.",
                "Best peri peri fries around Rajpur Road and Clement Town! Extra crispy in the basket and fiery seasoning. Perfect snack combo.",
                "Ordered both peri peri and cheesy loaded fries with friends. We wiped out the bowl in minutes! Super fresh and crispy."
            ],
            "SANDWICHES": [
                "Loved their grilled sandwich! Crispy golden toasted bread with rich filling and cheese. At ₹69, it's such an affordable, satisfying bite.",
                "The grilled sandwich was hot, crunchy, and packed with flavor. Great quick lunch spot for college students."
            ],
            "MOJITOS": [
                "The mint mojito here is so refreshing! Perfectly chilled with fresh lime and mint leaves. Ideal drink after a long day of lectures.",
                "Tried their mojitos — crisp, fizzy, and very refreshing. Best beverage option at ₹69!"
            ],
            "COFFEE": [
                "Great cold coffee! Smooth, rich, and not overly milky. Paired it with mini pancakes and it made my afternoon.",
                "Their coffee is aromatic and well-brewed. Whether you want an espresso kick or a cold coffee, they nail it."
            ],
            "PANCAKES,SHAKES": [
                "Warm mini pancakes paired with an Oreo thick shake is the ultimate sweet craving combo! Cozy pink cafe aesthetic and super quick service.",
                "Mini pancakes + chocolate thick shake = pure dessert heaven! Generous portions, incredible taste, and super pocket friendly."
            ],
            "FRIES,SHAKES": [
                "Crispy cheesy loaded fries with a chilled thick shake — honestly the best comfort food combo in Clement Town. Great hangout spot!",
                "The salty peri peri fries and sweet thick shake complement each other so well. Finished everything with friends!"
            ],
            "SANDWICHES,MOJITOS": [
                "Grilled sandwich and an iced mint mojito for under ₹140 total! You simply can't beat the taste and price near GEHU Gate 1.",
                "Crispy sandwich paired with a fizzy mojito. Fast service, clean seating, and very polite staff."
            ],
            "SERVICE": [
                "The staff at Scoop n Brew is exceptionally polite and quick! They took our order with a smile and served everything fresh and hot.",
                "Super fast service and spotless clean counters. The team genuinely cares about customer satisfaction."
            ],
            "AMBIENCE": [
                "Such an Instagrammable cafe! The pink brick wall with neon arches and velvet seating looks stunning in photos. Perfect hangout spot.",
                "Love the illuminated arch lighting and chill music in the background. Cozy, vibrant, and very youthful energy."
            ],
            "VALUE": [
                "Unbeatable value for money! Menu starts at just ₹59 and you can have a full feast with fries, sandwich, and shake under ₹200. Best student cafe in town!",
                "Pocket-friendly prices without any compromise on taste or quality. Truly savings sorted for students!"
            ],
            "ALL": [
                "Scoop n Brew is an absolute gem near GEHU Gate 1! Delicious mini pancakes, loaded fries, thick shakes, and an aesthetic pink vibe. 5 stars all the way!",
                "Everything from the food to the illuminated arches and courteous staff was 10/10. Definitely coming back with more friends!",
                "Found our new regular college hangout! Great food, awesome cool vibes, and super affordable. Highly recommended to everyone in Dehradun."
            ]
        },
        "openings": [
            "Visited Scoop n Brew near GEHU Gate 1 today and loved it!",
            "Such a great experience at Scoop n Brew Clement Town.",
            "Finally checked out Scoop n Brew and it exceeded expectations!",
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
            "PANCAKES": [
                "the mini pancakes were golden, fluffy, and loaded with chocolate.",
                "the pancake stack at ₹59 is an absolute steal."
            ],
            "SHAKES": [
                "the thick shake was rich, creamy, and made with real ice cream.",
                "their Oreo shake consistency was super thick and decadent."
            ],
            "FRIES": [
                "the loaded fries were smothered in cheese and served piping hot.",
                "the peri peri fries were extra crispy and full of flavor."
            ],
            "SANDWICHES": [
                "the grilled sandwich was toasted to perfection with tasty filling.",
                "the sandwich was hot, crispy, and super satisfying."
            ],
            "MOJITOS": [
                "the mojito was cool, fizzy, and bursting with fresh mint flavor.",
                "the drink was delightfully refreshing and crisp."
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
