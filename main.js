const next = document.getElementById('btn-next'),
	prev = document.getElementById('btn-prev'),
	slides = document.querySelectorAll('.slide'),
	dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = (n) => {
	for (slide of slides) {
		slide.classList.remove('active');
	}
	slides[n].classList.add('active');
}

const activeDot = (n) => {
	for (dot of dots) {
		dot.classList.remove('active');
	}
	dots[n].classList.add('active');
}

const nextSlide = () => {
	if (index == slides.length - 1) {
		index = 0;
		activeSlide(index);
		activeDot(index);
	} else {
		index++;
		activeSlide(index);
		activeDot(index);
	}
}

const prevSlide = () => {
	if (index == 0) {
		index = slides.length - 1;
		activeSlide(index);
		activeDot(index);
	} else {
		index--;
		activeSlide(index);
		activeDot(index);
	}
}

dots.forEach((item, indexDot) => {
	item.addEventListener('click', () => {
		index = indexDot;
		activeSlide(index);
		activeDot(index);
	})
})

let timer = 0;
makeTimer();
function makeTimer() {
	timer = setInterval(function () {
		if (index == slides.length - 1) {
			index = 0;
			activeSlide(index);
			activeDot(index);
		} else {
			index++;
			activeSlide(index);
			activeDot(index);
		}
	}, 5000);
}


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);



// ТАБЫ ========================

const tabs = document.getElementById('tabs');
const contents = document.getElementById('contents');

const contentBtn = document.getElementById('content-btns');
const contentOffer = document.querySelectorAll('.content-offer');




const changeClass = el => {
	for (i = 0; i < tabs.children.length; i++) {
		tabs.children[i].classList.remove('active');
	}
	el.classList.add('active');
}

const changeClassBtn = el => {
	for (i = 0; i < contentBtn.children.length; i++) {
		contentBtn.children[i].classList.remove('content-btn--active');
	}
	el.classList.add('content-btn--active');
}

contentBtn.addEventListener('click', (e) => {
	const currBtn = e.target.dataset.contentbtn;
	changeClassBtn(e.target);
	for (i = 0; i < contentOffer.length; i++) {
		contentOffer[i].classList.remove('content-offer--active');
		if (contentOffer[i].dataset.contentoffer === currBtn) {
			contentOffer[i].classList.add('content-offer--active');
		}
	}
})

tabs.addEventListener('click', (e) => {
	const currTab = e.target.dataset.btn;
	changeClass(e.target);
	for (i = 0; i < contents.children.length; i++) {
		contents.children[i].classList.remove('active');
		if (contents.children[i].dataset.content === currTab) {
			contents.children[i].classList.add('active');
		}
	}
})