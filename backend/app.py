from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import requests
import smtplib
from email.mime.text import MIMEText
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

@app.route("/generate", methods=["POST"])
def generate_email():
    data = request.json
    prompt = data["prompt"]

    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json",
    }

    body = {
        "messages": [{"role": "user", "content": prompt}],
        "model": "llama3-8b-8192"
    }

    response = requests.post("https://api.groq.com/openai/v1/chat/completions", json=body, headers=headers)
    return jsonify(response.json()["choices"][0]["message"]["content"])


@app.route("/send", methods=["POST"])
def send_email():
    data = request.json
    recipients = data["recipients"]
    content = data["content"]
    subject = data.get("subject", "Generated Email")

    msg = MIMEText(content, "plain")
    msg["Subject"] = subject
    msg["From"] = os.getenv("SMTP_USER")
    msg["To"] = ", ".join(recipients)

    with smtplib.SMTP(os.getenv("SMTP_HOST"), int(os.getenv("SMTP_PORT"))) as server:
        server.starttls()
        server.login(os.getenv("SMTP_USER"), os.getenv("SMTP_PASS"))
        server.sendmail(msg["From"], recipients, msg.as_string())

    return jsonify({"message": "Email sent!"})


if __name__ == "__main__":
    app.run(debug=True)
