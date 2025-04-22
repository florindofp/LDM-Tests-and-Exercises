# Code Feedback Summary

---

## ✅ Contributors

- **Vitos Parra, Adrián**
- **Sergio Prieto Paez**
- **Ruiz Muñoz, Ismael**
- **Mancebo Romero, Mario**

---

## 🧩 Code Snippets & Logic

### 🔸 *Toggle Italic Style*

**Author(s):** Vitos Parra, Adrián & Sergio Prieto Paez
```javascript
paragraph.style.fontStyle = paragraph.style.fontStyle === "italic" ? "normal" : "italic";
```
- **Purpose:** Toggles the font style between *italic* and *normal*.
- **Feedback:** Simple and effective ternary operation for toggling text style.

---

### 🔸 *Toggle Text Color to Red*

**Author:** Ruiz Muñoz, Ismael
```javascript
let isColorChanged = false;

colorButton.addEventListener("click", () => {
  if (isColorChanged) {
    textElement.style.color = ""; // Reset to initial color
  } else {
    textElement.style.color = "red"; // Set color to red
  }
  isColorChanged = !isColorChanged; // Toggle the state
});
```
- **Purpose:** Changes the text color to red on click, and resets it on the next click.
- **Feedback:** Logical use of a boolean flag to manage state. Consider defining the initial color for better clarity.

---

### 🔸 *Simplified Red/Black Toggle*

**Author:** Mancebo Romero, Mario
```javascript
let isRed = false;

colorBtn.addEventListener("click", () => {
  isRed = !isRed;
  text.style.color = isRed ? "red" : "black";
});
```
- **Purpose:** Alternates text color between red and black.
- **Feedback:** Cleaner toggle using ternary operator. Well-structured and easy to follow.

---
