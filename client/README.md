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