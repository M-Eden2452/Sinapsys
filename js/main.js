const menu = document.querySelector(".menu__body"),
	menuBtn = document.querySelector(".menu__icon"),
	body = document.body;
menu && menuBtn && (menuBtn.addEventListener("click", (e => {
	menu.classList.toggle("active"), menuBtn.classList.toggle("active"), body.classList.toggle("lock")
})), menu.addEventListener("click", (e => {
	e.target.classList.contains("menu__body") && (menu.classList.remove("active"), menuBtn.classList.remove("active"), body.classList.remove("lock"))
})), menu.querySelectorAll(".menu__link").forEach((e => {
	e.addEventListener("click", (() => {
		menu.classList.remove("active"), menuBtn.classList.remove("active"), body.classList.remove("lock")
	}))
})));
const openModalBtn = document.getElementById("submitButton"),
	submitButtonAction = document.getElementById("submitButtonAction"),
	modalOverlay = document.getElementById("modalOverlay"),
	modal = document.getElementById("modal"),
	closeModal = document.getElementById("closeModal");
openModalBtn.addEventListener("click", (function() {
	modalOverlay.classList.add("active"), modal.classList.add("active")
})), closeModal.addEventListener("click", (function() {
	modalOverlay.classList.remove("active"), modal.classList.remove("active")
})), modalOverlay.addEventListener("click", (function(e) {
	e.target === modalOverlay && (modalOverlay.classList.remove("active"), modal.classList.remove("active"))
})), openModalBtn.addEventListener("click", (function() {
	modalOverlay.classList.add("active"), modal.classList.add("active")
})), closeModal.addEventListener("click", (function() {
	modalOverlay.classList.remove("active"), modal.classList.remove("active")
})), modalOverlay.addEventListener("click", (function(e) {
	e.target === modalOverlay && (modalOverlay.classList.remove("active"), modal.classList.remove("active"))
}));
const form = document.querySelector("#order-form"),
	thankYouModal = document.querySelector("#thankYouModal"),
	successModalClose = document.getElementById("successModalClose"),
	successModalOverlay = document.getElementById("success-modalOverlay"),
	submitButton = document.querySelectorAll(".submit-btn");
form.addEventListener("submit", (e => {
	e.preventDefault();
	const t = new FormData(form);
	fetch(form.action, {
		method: "POST",
		body: t
	}).then((e => {
		e.ok && (form.reset(), modalOverlay.classList.remove("active"), modal.classList.remove("active"), successModalOverlay.style.display = "block", thankYouModal.style.display = "block")
	})).catch((e => {
		console.error("Ошибка отправки формы", e)
	}))
})), successModalClose.addEventListener("click", (function() {
	successModalOverlay.style.display = "none", thankYouModal.style.display = "none"
})), successModalOverlay.addEventListener("click", (function(e) {
	e.target === successModalOverlay && (successModalOverlay.style.display = "none", thankYouModal.style.display = "none")
}));
const notification = document.getElementById("cookie-notification"),
	acceptButton = document.getElementById("cookie-accept"),
	rejectButton = document.getElementById("cookie-notice-close");

function setCookie(e, t, o) {
	let n = "";
	if (o) {
		const e = new Date;
		e.setTime(e.getTime() + 24 * o * 60 * 60 * 1e3), n = "; expires=" + e.toUTCString()
	}
	document.cookie = e + "=" + (t || "") + n + "; path=/"
}

function getCookie(e) {
	const t = e + "=",
		o = document.cookie.split(";");
	for (let e = 0; e < o.length; e++) {
		let n = o[e];
		for (;
			" " == n.charAt(0);) n = n.substring(1, n.length);
		if (0 == n.indexOf(t)) return n.substring(t.length, n.length)
	}
	return null
}
getCookie("cookieAccepted") || (notification.style.display = "block"), acceptButton.addEventListener("click", (function() {
	setCookie("cookieAccepted", "true", 365), console.log(document.cookie), notification.style.display = "none"
})), rejectButton.addEventListener("click", (function() {
	setCookie("cookieAccepted", "false", 365), notification.style.display = "none"
}));
const cookieAccepted = getCookie("cookieAccepted");
notification.style.display = null === cookieAccepted ? "block" : "none";
const languageSelector = document.querySelector(".language-selector");
languageSelector.addEventListener("mouseenter", (() => {
	languageSelector.classList.add("open")
})), languageSelector.addEventListener("mouseleave", (() => {
	languageSelector.classList.remove("open")
})), languageSelector.addEventListener("click", (() => {
	languageSelector.classList.toggle("open")
}));
var url = window.location.pathname,
	parts = url.split("/").filter(Boolean),
	breadcrumbsArray = [{
		url: "/",
		title: "Главная"
	}, {
		url: "cloud_services.html",
		title: "Облачные сервисы"
	}],
	breadcrumbsElement = document.querySelector(".breadcrumbs");
breadcrumbsElement.innerHTML = "";
for (var i = 0; i < breadcrumbsArray.length; i++) {
	var breadcrumb = breadcrumbsArray[i],
		linkElement = document.createElement("a");
	if (linkElement.href = breadcrumb.url, linkElement.textContent = breadcrumb.title, breadcrumbsElement.appendChild(linkElement), i < breadcrumbsArray.length - 1) {
		var separatorElement = document.createElement("span");
		separatorElement.classList.add("separator"), separatorElement.innerHTML = '<img src="/images/breadcrumbs.svg" alt="" />', breadcrumbsElement.appendChild(separatorElement)
	}
}
var currentPageElement = document.querySelector(".current-page");
currentPageElement.innerHTML = "";
var currentPageTitle = parts.length > 0 ? parts[0] : "Главная";
currentPageElement.textContent = currentPageTitle;

const accordionItems = document.querySelectorAll(".accordion__item");
accordionItems.forEach((c => {
	c.querySelector(".accordion__button").addEventListener("click", (() => {
		const e = c.classList.contains("rotage");
		accordionItems.forEach((c => {
			c.classList.remove("rotage"), c.querySelector(".accordion__content").style.maxHeight = null
		})), e || (c.classList.add("rotage"), c.querySelector(".accordion__content").style.maxHeight = c.querySelector(".accordion__content").scrollHeight + "px")
	}))
}));
const sections = document.querySelectorAll(".slide"),
	navLinks = document.querySelectorAll(".navigation__link"),
	container = document.querySelector(".common__container");
let hideNavigationTimeout;

function setActiveLink() {
	const e = container.getBoundingClientRect();
	e.top >= 0 && e.bottom <= window.innerHeight && 0 === e.top ? document.querySelector(".navigation").classList.add("active") : document.querySelector(".navigation").classList.remove("active");
	for (let e = 0; e < sections.length; e++) {
		const t = sections[e],
			i = navLinks[e],
			n = navLinks[e].querySelector(".navigation__element"),
			o = t.getBoundingClientRect();
		if (o.top >= 0 && o.bottom <= window.innerHeight) {
			if (!i.classList.contains("active")) {
				i.classList.add("active"), n.classList.add("active");
				for (let t = 0; t < navLinks.length; t++) e !== t && (navLinks[t].classList.remove("active"), navLinks[t].querySelector(".navigation__element").classList.remove("active"))
			}
			break
		}
	}
	"true" !== document.documentElement.getAttribute("data-scrolling") ? document.querySelector(".navigation").classList.contains("active") || "true" === document.documentElement.getAttribute("data-scrolling") ? clearTimeout(hideNavigationTimeout) : hideNavigationTimeout = setTimeout((() => {
		document.querySelector(".navigation").classList.remove("active"), setActiveLink()
	}), 4e3) : (document.querySelector(".navigation").classList.add("active"), hideNavigationTimeout && (clearTimeout(hideNavigationTimeout), hideNavigationTimeout = null))
}
window.addEventListener("scroll", (() => {
	setActiveLink(), document.documentElement.setAttribute("data-scrolling", "true")
})), window.addEventListener("scroll", (() => {
	clearTimeout(window.scrollTimeout), window.scrollTimeout = setTimeout((() => {
		document.documentElement.removeAttribute("data-scrolling")
	}), 100)
}));
var MainSwiper = new Swiper(".MainSwiper", {
		spaceBetween: 30,
		centeredSlides: !0,
		autoplay: {
			delay: 5e3,
			disableOnInteraction: !1
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: !0,
			renderExternal: function(e) {
				const i = document.querySelector(".main-slider__pagination");
				i && (i.innerHTML = e)
			}
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
	}),
	AboutSwiper = new Swiper(".AboutSwiper", {
		slidesPerView: 3,
		spaceBetween: 27,
		centeredSlides: !0,
		pagination: {
			el: ".swiper-pagination",
			clickable: !0,
			dynamicBullets: !0
		},
		initialSlide: 1,
		loop: !0
	});