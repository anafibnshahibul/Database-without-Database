# 🚀 Database without Database
**A Complete Serverless & Installable Data Collection Template**

Welcome to **Database without Database**! This project is the ultimate solution for Graphic Designers, Digital Marketers, and Freelancers who want a fully functional Contact Form, Checkout Page, and Dynamic Invoice system **without** setting up any backend or traditional databases (like MySQL, MariaDB or MongoDB).

Everything runs on standard HTML, CSS, and JavaScript. The code is heavily commented so you can easily customize it even if you have zero coding experience!

---

## ✨ Features
- 🚫 **100% Serverless:** No need to buy database hosting or configure SQL/NoSQL.
- 📦 **Easily Installable:** Plug-and-play structure. Host it anywhere (GitHub Pages, Netlify, Vercel, or standard CPanel).
- 🔄 **Multi-Channel Routing:** Send your form data directly to **Google Sheets**, **Email**, or **WhatsApp**.
- 🛒 **Dynamic Checkout:** Automatically calculates product prices, totals, and generates order numbers.
- 📄 **Auto Invoice Generation:** Built-in dynamic 'Thank You' page with an option to print/save order memos.
- 🛠️ **Magic ID Finder:** Comes with a built-in custom tool URL to automatically extract Google Form Entry IDs without digging through code.
- 🎨 **Beginner Friendly:** Heavily commented code makes it super easy to edit and customize.
- 🔒 **Login System (only for GAS):** Users can only access certain pages after successful authentication.
---

## 🔓 Secure Auth System (Advanced Feature)
*This project includes a built-in Authentication system that uses Google Sheets as a User Database.*

- **Data Privacy:** Passwords are never stored in plain text; they are encrypted using **SHA-256 Hashing**.
- **Session Management:** Once logged in, the system uses `localStorage` to keep the user authenticated across pages.
- **Access Control:** Specific pages (like the User Dashboard) are protected and only accessible to logged-in users.

---

## 👥 Who is this for?
This project is tailor-made for:
- 🎨 **Graphic Designers:** To create order forms for logos, banners, or branding packages.
- 📱 **Digital Marketers:** To capture leads from Facebook or Google Ads campaigns.
- 💼 **Freelancers:** To build quick, professional portfolio contact pages.
- 🚀 **Beginner Developers:** Who want to learn how to handle data without needing a backend server.
- 🛍️ **Small Business Owners:** Who need a simple checkout system with WhatsApp or Email confirmation.

## 🛠️ Installation & Setup
This project is completely plug-and-play.

1. **Download:** Click the green `Code` button and select `Download ZIP`, or clone the repository.
2. **Extract:** Unzip the folder on your computer.
3. **Edit Configurations:** Open the `js/db-config.js` (or the respective script files) in any code editor (like VS Code or Notepad). Read the comments inside the code—they will tell you exactly where to paste your IDs.
4. **Host:** Upload the files to your hosting provider. Done!

---

## 📊 Google Form Integration (The Core Database)
*This is the most powerful feature. It turns a simple Google Form into your backend database, storing all orders and messages directly into a Google Sheet.*

### Step-by-Step Configuration:
1. **Create a New Form:** Go to [Create a Google Form](https://docs.google.com/forms/u/0/create) and start a blank form.
2. **Add Your Fields:** Create Short Answer fields for the data you want to collect (e.g., `Customer Name`, `Phone Number`, `Selected Plan`, `Total Amount`).
3. **Get the Form Action URL:** - Preview your Google Form.
   - Right-click and select `Inspect`.
   - Press `Ctrl+F` and search for `<form action="`.
   - Copy that URL (it usually ends with `/formResponse`). Paste it into your project's configuration file.
4. **Find the Entry IDs:** Every input field in Google Forms has a secret ID that looks like `entry.123456789`. 
   - **Gemini Ai:**  Inspect your form and paste these prompt on Google Gemini -<em>"Help me find the google form entry IDs from these codes. Code - {{paste your inspected source code}}"</em>
   - Just paste your Google Form's source code there, and it will automatically extract all the `entry.ID`s for you!
5. **Connect:** Paste these `entry.ID`s into the JavaScript file as instructed in the inline comments.

---

## ⚙️ Google Apps Script (Advanced Database API)
*This is the modern alternative to Google Forms. It allows for professional data handling, security, and multiple database tables (Sheets) within one script.*

### 📂 Script Location:
> **Backend Logic:** `gs/Code.gs`

### Step-by-Step Configuration:

1. **Prepare your Sheet:** - Create a Google Sheet.
   - Name your tabs (e.g., `Contacts` or `Orders`).

2. **Open Script Editor:** - From your Google Sheet, go to `Extensions` > `Apps Script`.

3. **Copy-Paste:** - Open `gs/Code.gs` from this project.
   - Copy the entire code and paste it into the Apps Script editor.

4. **Deploy as Web App:**
   - Click `Deploy` > `New Deployment`.
   - Select type: `Web App`.
   - Set **Execute as:** `Me`.
   - Set **Who has access:** `Anyone`.

5. **Authorize & Connect:**
   - Click `Deploy` and `Review Permissions`.
   - Copy the generated `Web App URL`.
   - Paste it into your `js/db-config.js` file:
   `const GAS_URL = "https://script.google.com/macros/s/YOUR_GAS_ID/exec";`

---

## 📧 EmailJS Integration (Direct to Inbox)
*If you prefer getting an email notification every time someone submits a form or buys a service, use this module.*

### Step-by-Step Configuration:
1. **Sign Up:** Create a free account at [EmailJS.com](https://www.emailjs.com/).
2. **Add Email Service:** Go to "Email Services" and connect your Gmail or Outlook account. You will get a `Service ID`.
3. **Create a Template:** Go to "Email Templates" and design how you want the email to look. Use variables like `{{name}}` or `{{phone}}`. Save it and copy the `Template ID`.
4. **Get Public Key:** Go to "Account" -> "API Keys" and copy your `Public Key`.
5. **Update the Code:** Open the EmailJS HTML/JS file in this project. Find the clearly marked section at the top and paste your `Service ID`, `Template ID`, and `Public Key`.

---

## WhatsApp Checkout Bridge
*Perfect for instant communication! This module takes the customer's order details and redirects them directly to your WhatsApp with a pre-typed message.*

### Step-by-Step Configuration:
1. **Find the WhatsApp Variables:** Open the WhatsApp configuration script in your editor.
2. **Set Your Number:** Look for the variable `const myWhatsAppNumber = "..."`. Enter your active WhatsApp number including the country code, but **without** any `+` or spaces (For example, for Bangladesh: `88017XXXXXXXX`).
3. **How it Works:** The JavaScript automatically grabs the input values (Name, Order ID, Price) and uses URL Encoding (e.g., turning spaces into `%20`) to create a secure `wa.me` link. 
4. **Testing:** No server needed! Just open the HTML file in your browser, fill in some dummy text, and click submit. It should immediately open WhatsApp Web or your mobile app.

---

## 💡 Troubleshooting & Help
Don't panic if something isn't working!
- **Read the Comments:** Every complex line of JavaScript has a `// comment` explaining what it does.
- **Check the Console:** Right-click on your webpage -> `Inspect` -> `Console`. If there is a red error (like an incorrect Entry ID), it will show up here.
- **Support:** Feel free to open an issue in this repository if you find a bug!

---
## 📜 License
This project is open-source and available under the **[MIT License](LICENSE)**. You are free to use it for personal, commercial, and client projects!