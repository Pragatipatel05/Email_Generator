# 📧 AI Email Generator

An AI-powered web application that helps you generate professional emails instantly using smart prompt-based input.

## ✨ Features

* Generate emails from simple prompts
* Dark mode user interface
* Copy-to-clipboard functionality
* Fast and minimal UI built in React
* Backend powered by Flask
* REST API integration

---

## 🖼️ Preview

![App Screenshot](https://via.placeholder.com/800x400.png?text=Email+Generator+App+Preview)

---

## 🧰 Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Fetch API

### Backend

* Python
* Flask
* Flask-CORS

---

## ⚔️ Getting Started

### 🔧 Prerequisites

* Node.js (v16+)
* Python (v3.7+)
* pip (Python package installer)

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/email-gen-project.git
cd email-gen-project
```

---

### 2. Backend Setup

```bash
cd email-gen-backend
pip install -r requirements.txt
python app.py
```

By default, backend will run at:
**[http://localhost:5000](http://localhost:5000)**

---

### 3. Frontend Setup

In a new terminal:

```bash
cd email-gen-ui
npm install
npm start
```

Frontend will run at:
**[http://localhost:3000](http://localhost:3000)**

---

## 🛠 API Usage

**Endpoint:** `POST /generate-email`

**Request Body:**

```json
{
  "prompt": "Schedule a meeting with the team"
}
```

**Response:**

```json
{
  "email": "Dear Team, I hope you're all well. I would like to schedule a meeting..."
}
```

---

## 🧪 Testing the App

1. Make sure both backend and frontend are running.
2. Go to [http://localhost:3000](http://localhost:3000)
3. Enter a prompt and click **Generate Email**
4. You should see the generated email below.

---

## 🐞 Troubleshooting

* If you get `Failed to fetch`, ensure your backend is running on the correct port and CORS is enabled.
* Run this to install Flask-CORS:

```bash
pip install flask-cors
```

And add this in `app.py`:

```python
from flask_cors import CORS
CORS(app)
```

---

## 📁 Folder Structure

```
email-gen-project/
|
├── email-gen-backend/      # Flask API
|   ├── app.py
|   └── requirements.txt
|
└── email-gen-ui/           # React frontend
    ├── src/
    ├── public/
    └── package.json
```

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

* OpenAI API (if used)
* Internshala Internship Project Prompt
* Flask & React Documentation
