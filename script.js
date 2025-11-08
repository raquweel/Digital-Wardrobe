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
      "./addOns/addOn11.png",
      "./addOns/addOn12.png",
      "./addOns/addOn13.png",
      "./addOns/addOn14.png",
      "./addOns/addOn15.png",
      "./addOns/addOn16.png",
      "./addOns/addOn17.png",
      "./addOns/addOn18.png",
      "./addOns/addOn19.png",
    ],
    index: 0,
    element: document.getElementById("addOns"),
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
      "./tops/top16.png",
      "./tops/top17.png",
      "./tops/top18.png",
      "./tops/top19.png",
      "./tops/top20.png",
      "./tops/top21.png",
      "./tops/top22.png",
      "./tops/top23.png",
      "./tops/top24.png",
      "./tops/top25.png",
      "./tops/top26.png",
      "./tops/top27.png",
      "./tops/top28.png",
      "./tops/top29.png",
      "./tops/top30.png",
      "./tops/top31.png",
      "./tops/top32.png",
    ],
    index: 0,
    element: document.getElementById("tops"),
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
      "./bottoms/bottom11.png",
      "./bottoms/bottom12.png",
      "./bottoms/bottom13.png",
      "./bottoms/bottom14.png",
      "./bottoms/bottom15.png",
      "./bottoms/bottom16.png",
      "./bottoms/bottom17.png",
      "./bottoms/bottom18.png",
      "./bottoms/bottom19.png",
      "./bottoms/bottom20.png",
      "./bottoms/bottom21.png",
      "./bottoms/bottom22.png",
      "./bottoms/bottom23.png",
      "./bottoms/bottom24.png",
    ],
    index: 0,
    element: document.getElementById("bottoms"),
  },
};

function updateImage(cat) {
  const category = categories[cat];
  category.element.src = category.images[category.index];
};

function next(type, btn) {
    const category = categories[type];
    btn.addEventListener("click", () => {
      category.index = (category.index + 1) % category.images.length;
      updateImage(type);
    });
};

function prev(type, btn) {
    const category = categories[type];
    btn.addEventListener("click", () => {
        category.index = (category.index - 1 + category.images.length) % category.images.length;
        updateImage(type);
    });
};

const nextAddOns = document.getElementById('nextBtn-addOns');
next('addOns', nextAddOns);
const prevAddOns = document.getElementById('prevBtn-addOns');
prev('addOns', prevAddOns);

const nextTops = document.getElementById('nextBtn-tops');
next('tops', nextTops);
const prevTops = document.getElementById('prevBtn-tops');
prev('tops', prevTops);

const nextBottoms = document.getElementById('nextBtn-bottoms');
next('bottoms', nextBottoms);
const prevBottoms = document.getElementById('prevBtn-bottoms');
prev('bottoms', prevBottoms);

function randomize() {
  for (const cat in categories) {
    const category = categories[cat];
    category.index = Math.floor(Math.random() * category.images.length);
    updateImage(cat);
  }
};

document.getElementById("random-btn").addEventListener("click", randomize);

for (const cat in categories) {
  updateImage(cat);
};