# MDBC ReactJS Demo

This repository provides an example implementation for embedding MDBC using an iframe in a ReactJS application.

---

## 🚨 Security Note

To prevent information leaks, authentication and sensitive logic should always be handled on the **server side**.

```js
const GetAuthorizationCode = (e) => { /* Implement securely on server */ };
const GetAccessToken = (e) => { /* Implement securely on server */ };
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer recommended)
- [npm](https://www.npmjs.com/)

### Installation

Clone this repository:

```bash
git clone https://github.com/terus-technology/mdbc-reactjs-demo.git
cd mdbc-reactjs-demo
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## 📽️ Demo Video

[Demo Video](https://github.com/terus-technology/mdbc-reactjs-demo/assets/25432146/b75d9b21-a3fc-40a5-91d4-0b747f87c44a)

---

## 📝 Project Structure

```
mdbc-reactjs-demo/
├── public/
├── src/
│   ├── components/
│   ├── App.js
│   └── ...
├── package.json
└── README.md
```

- `src/` contains the React app source code.
- `public/` contains static assets.

---

## ⚙️ Features

- Example of securely embedding MDBC via iframe.
- Demonstrates secure handling of authentication tokens.
- Easy to customize for your own integration needs.

---

## 🙏 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

[MIT](LICENSE)

---

## 📫 Contact

For support or business inquiries, please open an issue or contact the maintainers.
