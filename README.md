# NLW Return Impulse - Server

This is the backend for the NLW Return Impulse project, developed during the NLW (Next Level Week) event by Rocketseat.

## 🚀 Technologies Used

- **Node.js** - JavaScript runtime for building scalable applications.
- **Express.js** - Web framework for Node.js.
- **Prisma ORM** - Database access and management.
- **SQLite** - Lightweight database for development.
- **TypeScript** - Strongly typed JavaScript.
- **Nodemailer** - Email sending service.

## 📂 Project Structure

- **`src/server.ts`** → Main server entry point.
- **`src/routes.ts`** → API routes and endpoints.
- **`src/prisma`** → Database configuration using Prisma ORM.
- **`src/controllers`** → Handles business logic.

## 🛠️ How to Run Locally

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/victorfg21/nlw-return-impulse-server.git
cd nlw-return-impulse-server
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Run Migrations (if using SQLite)

```sh
npx prisma migrate dev
```

### 4️⃣ Start the Server

```sh
npm run dev
```

### 5️⃣ API Endpoints

- **GET /feedbacks** → Retrieve all feedbacks.
- **POST /feedbacks** → Submit a new feedback.

## 📜 License

This project is licensed under **MIT**. See the [LICENSE](LICENSE) file for details.
