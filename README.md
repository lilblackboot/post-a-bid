# Post-a-Bid

This repository contains the codebase for **Post-a-Bid**, an online auction platform built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). The platform enables users to host and participate in real-time online auctions effortlessly.

## Features

- **User Authentication**
  - Secure login and signup functionality.
  - Password encryption for enhanced security.
- **Auction Management**
  - Create, edit, and delete auctions.
  - Set start and end times for auctions.
  - Add item details, including images and descriptions.
- **Bidding System**
  - Real-time bidding updates using WebSockets.
  - Notification system for bid status.
- **Responsive Design**
  - Fully optimized for both desktop and mobile devices.
- **Dashboard**
  - Personalized user dashboard showing active, upcoming, and completed auctions.

## Tech Stack

### Frontend:
- **React.js** with Tailwind CSS for styling.
- **React Router** for navigation.

### Backend:
- **Node.js** with **Express.js**.
- **WebSocket** for real-time communication.

### Database:
- **MongoDB** with Mongoose for database management.

### Additional Tools:
- **Cloudinary** for image upload and storage.
- **JWT (JSON Web Tokens)** for authentication.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lilblackboot/post-a-bid.git
   cd post-a-bid
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `backend` directory and add the following:
   ```env
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_URL=your_cloudinary_url
   PORT=5000
   ```

4. Start the development server:
   ```bash
   # Start the backend server
   cd backend
   npm start

   # Start the frontend server
   cd ../frontend
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Folder Structure

```
post-a-bid/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── public/
└── README.md
```

## Future Improvements

- Implement a payment gateway for finalizing auction transactions.
- Add email and SMS notifications for auction updates.
- Introduce admin features for managing auctions and users.
- Enhance SEO and accessibility.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Added new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to reach out for any queries or feedback regarding this project!

