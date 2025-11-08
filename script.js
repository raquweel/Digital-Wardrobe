const categories = {
    addOns: {
        images: [
            "./addOns/addOn1.png",
            "./addOns/addOn2.png",
            "./addOns/addOn3.png",
            "./addOns/addOn4.png",
            "./addOns/addOn5.png",
            "./addOns/addOn6.png",
            "./addOns/addOn7.png",
            "./addOns/addOn8.png",
            "./addOns/addOn9.png",
            "./addOns/addOn10.png",
            "./addOns/addOn11.png"
        ],
        index: 0,
        element: document.getElementById('addOns'),
        nextBtn: 'nextBtn',
        prevBtn: 'prevBtn',
    },
    tops: {
        images: [
            "./tops/top1.png",
            "./tops/top2.png",
            "./tops/top3.png",
            "./tops/top4.png",
            "./tops/top5.png",
            "./tops/top6.png",
            "./tops/top7.png",
            "./tops/top8.png",
            "./tops/top9.png",
            "./tops/top10.png",
            "./tops/top11.png",
            "./tops/top12.png",
            "./tops/top13.png",
            "./tops/top14.png",
            "./tops/top15.png",
            "./tops/top16.png"
        ],
        index: 0,
        element: document.getElementById('tops'),
        nextBtn: 'nextBtn',
        prevBtn: 'prevBtn',
    },
    bottoms: {
        images: [
            "./bottoms/bottom1.png",
            "./bottoms/bottom2.png",
            "./bottoms/bottom3.png",
            "./bottoms/bottom4.png",
            "./bottoms/bottom5.png",
            "./bottoms/bottom6.png",
            "./bottoms/bottom7.png",
            "./bottoms/bottom8.png",
            "./bottoms/bottom9.png",
            "./bottoms/bottom10.png",
            "./bottoms/bottom11.png"
        ],
        index: 0,
        element: document.getElementById('bottoms'),
        nextBtn: 'nextBtn',
        prevBtn: 'prevBtn',
    }

}

function updateImage(cat) {
    const category = categories[cat];
    category.element.src = category.images[category.index];
}

function setupButtons(){
    for (const cat in categories) {
        const category = categories[cat];
        document.getElementById(category.nextBtn).addEventListener('click', () => {
            category.index = (category.index + 1) % category.images.length;
            updateImage(cat);
        });
        document.getElementById(category.prevBtn).addEventListener('click', () => {
            category.index = (category.index + 1) % category.images.length;
            updateImage(cat);
        });
    }
}

function randomize() {
    for (const category in categories) {
        const category = categories[cat];
        category.index = Math.floor(Math.random() * category.images.length);
        updateImage(cat);
    }
    createConfetti();
}



document.getElementById("random-btn").addEventListener("click", randomize);

for (const cat in categories) {
    updateImage(cat);
}

setupButtons();