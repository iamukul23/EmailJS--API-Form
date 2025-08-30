 📧 EmailJS API Form

A simple contact form project built with **Vite + JavaScript/React** that integrates with **EmailJS** to send emails directly from the client-side without requiring a backend.

---

## 🚀 Features
- EmailJS integration for sending form data as emails.
- Lightweight and fast setup using **Vite**.
- Easy to customize and deploy.

---

## 📂 Project Structure
EmailJS--API-Form/
│-- src/ # Main source code
│-- index.html # Entry HTML file
│-- package.json # Project dependencies & scripts
│-- vite.config.js # Vite configuration
│-- eslint.config.js # ESLint configuration
│-- .gitignore # Ignored files


## ⚡ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/iamukul23/EmailJS--API-Form.git
cd EmailJS--API-Form
2️⃣ Install dependencies



npm install
3️⃣ Run the development server



npm run dev
Then open http://localhost:5173 in your browser.

📬 Setup EmailJS
Create an account at EmailJS.

Get your Service ID, Template ID, and Public Key.

Replace the placeholders in your code (inside src/) with your credentials:

emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formRef.current, "YOUR_PUBLIC_KEY");
🛠️ Build for Production
bash
Copy code
npm run build
📜 License
This project is licensed under the MIT License.
