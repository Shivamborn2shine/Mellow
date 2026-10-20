/**
 * ===========================================================================
 * SCOOP N BREW — HUMANIZED REVIEWS ENGINE v2.0
 * ===========================================================================
 * Curated, authentic reviews tailored for Scoop n Brew (Gelato, Waffles & Brews)
 * ===========================================================================
 */

const REVIEWS_DB = {
    "ENGLISH": {
        "combos": {
            "GELATO": [
                "Hands down the best artisanal gelato in Dehradun! Super creamy, rich authentic flavours, and not overly sweet. Tried the Belgian Dark Chocolate and Blueberry Cheesecake scoops — absolute perfection. Beautiful cozy vibe too!",
                "Scoop n Brew has completely raised the bar for ice cream in town. Every scoop is dense, silky, and bursting with fresh flavor. The waffle cone was freshly made and delightfully crispy. 10/10 recommendation!",
                "If you love real gelato, this is the place to be. You can genuinely taste the premium quality ingredients in every spoonful. Staff let us sample different flavors with a smile. Will definitely be a regular here!",
                "Such rich and velvety gelato! Far better than commercial ice creams. The texture is so smooth and the flavors are natural. Perfect sweet tooth fix."
            ],
            "WAFFLES": [
                "The Belgian waffles here are on another level! Freshly pressed, golden-crisp on the outside, light and fluffy inside, topped with generous scoops of gelato and melted chocolate drizzle. Easily the best waffle spot in town.",
                "Ordered their signature warm waffle with a scoop of Madagascar vanilla and Nutella. Absolute heavenly combination! Perfect crispiness and portion size. A must-visit dessert cafe.",
                "Fresh, hot, and delightfully crunchy! You can smell the waffle batter the moment you step in. Paired it with fresh berries and chocolate — truly delicious."
            ],
            "SHAKES": [
                "Their thick shakes are truly thick, decadent, and packed with flavor! Loved the Lotus Biscoff milkshake — rich without being overwhelmingly heavy. Great place to chill with friends.",
                "Best milkshakes around Rajpur Road! Thick, creamy, and made with real ice cream rather than just milk and syrups. Fantastic presentation as well.",
                "Super thick gourmet shake! The flavor was spot on and served chilled to perfection. Will definitely try other flavors next time."
            ],
            "COFFEE": [
                "Great surprise! Not only is the gelato top tier, but their coffee is surprisingly serious and well-crafted. Ordered an iced Americano and a cappuccino — smooth extraction with great crema. Perfect spot to read or work.",
                "The cold brew here is bold, smooth, and refreshing. Paired it with a warm waffle and it made my afternoon. Love the aesthetic neon cafe vibe!",
                "Really good coffee roasts! Balanced, aromatic, and not acidic. It is so rare to find a place that excels at both specialty coffee and artisanal desserts."
            ],
            "SUNDAES": [
                "Their signature sundae bowls are loaded with goodness! Multiple scoops, crunchy brownies, roasted nuts, and hot fudge. A total visual and taste treat.",
                "Ordered the monster sundae with friends and we finished every last bit. Generous toppings and high quality gelato. Pure indulgence!"
            ],
            "BITES": [
                "Great savory bites to balance all the sweetness! The loaded fries and grilled sandwich were hot, fresh, and well-seasoned. Perfect snack combo.",
                "Surprisingly good savory snacks! The garlic bread and crispy bites were fresh and tasty. Great menu all around."
            ],
            "GELATO,COFFEE": [
                "The ultimate affogato and coffee experience! Having a rich shot of hot espresso poured over their authentic gelato is pure bliss. Cozy aesthetic interior, friendly staff, and fantastic music.",
                "Best combo ever — rich artisan coffee followed by creamy gelato scoops! The contrast of hot coffee and chilled dessert is unmatched. My new favorite hangout spot in Dehradun."
            ],
            "WAFFLES,COFFEE": [
                "Crisp warm Belgian waffles paired with hot artisanal coffee — honestly the best combo you could ask for in Dehradun. The ambiance is warm and welcoming. Highly recommended!",
                "Warm waffle drizzled with chocolate accompanied by a velvety latte. Everything tasted freshly prepared and made with care."
            ],
            "GELATO,WAFFLES": [
                "Freshly baked golden waffle topped with two generous scoops of artisanal gelato. The crunch of the waffle and creaminess of the gelato was downright addictive!",
                "Warm waffle meeting cold melting gelato is pure culinary happiness. Easily one of the finest dessert places in the city."
            ],
            "SERVICE": [
                "The team at Scoop n Brew is exceptionally courteous and warm. They patiently let us sample flavors and served everything with a bright smile. Excellent customer care!",
                "Super fast and polite service! The staff is attentive, knowledgeable about all the flavors, and keeps the whole place spotless."
            ],
            "AMBIENCE": [
                "Such an Instagram-worthy, vibrant cafe aesthetic! Beautiful lighting, comfortable seating, and a lovely chill vibe. Perfect spot for dates, family treats, or hanging out with friends.",
                "Aesthetic interiors, cozy seating, and great music in the background. It feels modern, relaxed, and cheerful from the moment you step in."
            ],
            "VALUE": [
                "Super generous scoop portions, premium artisanal quality, and very fair pricing for the experience they provide. Totally worth every single rupee!",
                "Great value for money considering the rich taste, fresh ingredients, and generous portions. You definitely get what you pay for."
            ],
            "ALL": [
                "Scoop n Brew is an absolute gem in Dehradun! Exceptional artisanal gelato, delicious crisp waffles, great coffee, and a wonderful youthful vibe. 5 stars all the way!",
                "Everything about Scoop n Brew was top notch — from the welcoming staff to the mouth-watering desserts and cozy interior. Can't wait to visit again!",
                "Found our new favorite dessert and coffee destination! Every single item we tried was delicious, fresh, and beautifully served. Highly recommend to everyone in town."
            ]
        },
        "openings": [
            "Visited Scoop n Brew today and was blown away!",
            "Such a delightful experience at Scoop n Brew.",
            "Finally checked out Scoop n Brew and it exceeded all expectations!",
            "If you're in Dehradun, Scoop n Brew is an absolute must-visit spot.",
            "Had the best time hanging out at Scoop n Brew!"
        ],
        "bridges": [
            "On top of that,",
            "Also,",
            "Not to mention,",
            "To make things even better,",
            "What really stood out was that"
        ],
        "categories": {
            "GELATO": [
                "their artisanal gelato is so rich, smooth, and naturally flavored.",
                "the scoop quality is noticeably better than standard ice creams.",
                "the freshly rolled waffle cones added that perfect crunch."
            ],
            "WAFFLES": [
                "the Belgian waffles were warm, golden-brown, and delightfully crisp.",
                "the waffle toppings and sauces were super generous and fresh."
            ],
            "SHAKES": [
                "their milkshakes are decadently thick and crafted with real ice cream.",
                "the shakes have the perfect creamy consistency and rich taste."
            ],
            "COFFEE": [
                "their coffee roast is exceptionally smooth, aromatic, and rich.",
                "the cold brew was bold, smooth, and served ice cold."
            ],
            "SERVICE": [
                "the staff was extremely warm, courteous, and prompt.",
                "the service was lightning fast and served with genuine smiles."
            ],
            "AMBIENCE": [
                "the ambiance is cozy, aesthetic, and great for photos.",
                "the vibrant decor and chill music make for a fantastic vibe."
            ],
            "VALUE": [
                "the portion sizes are very generous for the price.",
                "it offers amazing quality and value for money."
            ],
            "ALL": [
                "the overall experience was simply outstanding from start to finish.",
                "everything from the treats to the atmosphere was top tier."
            ]
        },
        "closings": [
            "Will definitely be coming back again and again!",
            "Highly recommend visiting Scoop n Brew to everyone!",
            "Already planning my next trip back. 5 stars!",
            "Easily one of the best dessert and cafe parlours in town!",
            "Can't wait to bring more friends here next weekend!"
        ]
    }
};

if (typeof window !== 'undefined') {
    window.REVIEWS_DB = REVIEWS_DB;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { REVIEWS_DB };
}
