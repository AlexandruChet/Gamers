# 📌 Header Component

This component is responsible for the top of the site (**header**) with the logo, navigation menu, search and icons. **burger menu** for mobile devices is also implemented.

---

## 🔧 Technologies used

* **React (useState, useEffect)** – state and lifecycle management.
* **TypeScript** – additional types (`boolean` for menu state).
* **SCSS** – styling with a modular structure (BEM).
* **SVG icons** – for logo, profile, cart and badge.

---

## ⚙️ Component logic

### 🔹 Menu state

```tsx
const [burgerMenu, setBurgerMenu] = useState<boolean>(false);
```

* `burgerMenu` → `true` if the menu is open.
* `setBurgerMenu` → function to change the state.

---

### 🔹 Opening / closing the menu

```tsx
function toggleMenu() {
setBurgerMenu(!burgerMenu);
}
```

* Called when clicking on the burger button.
* If the menu was closed → opens.
* If open → closes.

---

### 🔹 Closing when clicking outside the menu

```tsx
useEffect(() => {
function handleClickOutside(event: MouseEvent) {
const menu = document.querySelector(".header__menu");
if (menu && !menu.contains(event.target as Node)) {
setBurgerMenu(false);
}
}

if (burgerMenu) {
document.addEventListener("mousedown", handleClickOutside);
}

return () => {
document.removeEventListener("mousedown", handleClickOutside);
};
}, [burgerMenu]);
```

* When the menu is open → a `mousedown` listener is added.
* If the click was **outside the menu**, it is closed.
* When the component is closed or unmounted, the listener is removed.

---

## 🖼️ Layout

### 🔹 Burger button

```tsx
<button
onClick={toggleMenu}
className={`header__burger-btn ${burgerMenu ? "active" : ""}`}
aria-label="Toggle menu"
>
<span></span>
<span></span>
<span></span>
</button>
```

* Consists of three `span` (three lines of the burger icon).
* When the menu is opened, the `.active` class is added.

---

### 🔹 Menu

Rendered only when `burgerMenu === true`:

```tsx
{burgerMenu && (
<div className="header__menu header__menu--open container">
...
</div>
)}
```

Includes:

1. **Logo** – image + text "GAMERS".
2. **Navigation** – list with items (`Home, Pages, Products...`).
3. **Search** – input with placeholder.
4. **Icons** – badge, profile, cart.

---

## 🎨 SCSS (main points)

* `.header__burger-btn` – burger button styling.
* `.header__menu--open` – open menu styling.
* `.header__nav-link:hover` – link hover effect.
* `.header__icons img` – styles for icons.

---

## ✅ Summary

* The component is **responsive** (burger menu for mobile).
* There is **closing when clicking outside the menu**.
* **React Hooks** are used (`useState`, `useEffect`).
* Logic is separated from styles (SCSS with BEM).

---

🚀 This `Header` can be easily extended:

* add **menu opening animations**,
* implement **autocomplete in search**,
* connect **React Router** for navigation.
---

# 📌 Footer Component

This component is responsible for the bottom of the site (**footer**) with social networks, payment information, application download buttons and copyright.
The footer **opens/closes** when clicking on the arrow button.

---

## 🔧 Technologies used

* **React (useState)** – to control the footer state (open/closed).
* **TypeScript** – state typing (`boolean`).
* **SCSS** – styling of footer elements.
* **SVG icons** – social networks, bank cards, application stores.

## ⚙️ Component logic

### 🔹 Footer state

```tsx
const [footerState, setFooterState] = useState<boolean>(false);
```

* `footerState` → `true` if the footer is open.
* `false` → footer is closed.

---

### 🔹 Open/close button

```tsx
<button onClick={toggleFooter} className="footer__toggle-btn">
^
</button>
```

* Arrow button.
* Calling `toggleFooter()` changes the state (`true ↔ false`).

---

### 🔹 Conditional rendering

```tsx
{footerState && (
<div className="footer__content">
...
</div>
)}
```

* If `footerState === true` → footer content is shown.
* If `false` → footer is hidden (only the button is visible).

---

## 🖼️ Footer Structure

### 🔹 Social Media

```tsx
<div className="footer__social">
<a href="#"><img src={twitter} alt="twitter" /></a>
<a href="#"><img src={facebook} alt="facebook" /></a>
<a href="#"><img src={youtube} alt="youtube" /></a>
<a href="#"><img src={instagram} alt="instagram" /></a>
<a href="#"><img src={linkedin} alt="linkedin" /></a>
</div>
```

* Clickable social media icons.
* Easily add new ones.

---

### 🔹 Main part

```tsx
<div className="footer__main">
<div className="footer__cards">
<img src={cards} alt="bank cards Visa" />
</div>

<div className="footer__download">
<h2 className="footer__download-title">DOWNLOAD THE APP</h2>
<img src={googlePlay} alt="google play" />
<img src={appStore} alt="app store" />
</div>
</div>

```

* Cards logo → info about available payment methods.
* **DOWNLOAD THE APP** block → buttons for Google Play and App Store.

---

### 🔹 Bottom part

```tsx
<div className="footer__bottom">
© 2022 Imagine Marketing Private Limited. All Rights Reserved.
</div>
```

* Text with copyright.
* Can contain any additional information (rules, policies).

---

## 🎨 SCSS (key points)

* `.footer__toggle-btn` – arrow to open/close the footer.
* `.footer__social-link:hover img` – zoom and highlight social media icons.
* `.footer__download-title:hover` – changes color and adds glow.
* `.footer__bottom` – thin line on top + smooth color change on hover.

---

## ✅ Summary

* **Responsive** component: the footer can be hidden/shown.
* **React useState** is used for conditional rendering.
* **Hover animations** are available for buttons and icons.
* Easy to extend (new social networks, links, sections).

---

🚀 It can be improved:

* make **expand animation** (e.g. smooth `max-height`).
* add **dark/light theme** of the footer.
* integrate **dynamic links** from the backend.