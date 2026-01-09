# 🎯 EventHub – Event Management System 

EventHub is a backend system designed to manage events where organizers can create and manage events, and users can discover and register for them.
The project focuses on building a **secure, scalable, and well-structured backend** using modern backend engineering practices.

This repository currently contains the **backend implementation only**.
Frontend integration will be added in future iterations.

## 🚀 Core Capabilities

### Authentication & Authorization

* User registration and login
* JWT-based authentication
* Role-based access control (`organizer`, `attendee`)
* Secure protected routes using middleware

---

### User Management

* View own profile
* Update basic profile details (name, email)
* Secure handling of sensitive data (hashed passwords, hidden fields)

---

### Event Management

* Create events (organizer only)
* View all public events
* View detailed information of a single event
* Update event details
* Manually update event status (`upcoming`, `past`, `cancelled`)
* Delete events

---

### Event Registration

* Users can register for events
* Prevent duplicate registrations (database-level enforcement)
* Prevent organizers from registering for their own events
* Prevent registrations for past or cancelled events
* View all events a user has registered for

## 🧠 System Design Principles

* **Separation of Concerns**
  Routes, controllers, models, and middleware are clearly separated.

* **JWT-Based Security**
  Stateless authentication with role and ownership checks.

* **Ownership Enforcement**
  Only event creators can update or delete their events.

* **Soft Delete Strategy**
  Data is preserved for auditability and future analysis.

* **Database-Level Constraints**
  Critical business rules (like duplicate registration prevention) are enforced at the database level to avoid race conditions.

## 🗂️ Backend Project Structure

```
server/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── eventController.js
│   ├── registrationController.js
│   └── userController.js
│
├── middlewares/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── models/
│   ├── User.js
│   ├── Event.js
│   └── Registration.js
│
├── routes/
│   ├── authRoutes.js
│   ├── eventRoutes.js
│   ├── registrationRoutes.js
│   └── userRoutes.js
│
├── app.js
├── index.js
└── .env
```

## 🔐 API Endpoints Overview

### Authentication

* `POST /api/auth/register`
* `POST /api/auth/login`

### Users

* `GET /api/users/me`
* `PUT /api/users/me`

### Events

* `POST /api/events`
* `GET /api/events`
* `GET /api/events/:id`
* `PUT /api/events/:id`
* `PATCH /api/events/:id/status`
* `DELETE /api/events/:id` (soft delete)
* `DELETE /api/events/:id/hard` (hard delete)

### Registrations

* `POST /api/events/:id/register`
* `GET /api/registrations/my`

## 🛠️ Tech Stack (Backend)

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Tokens)
* bcrypt


## 🧩 Frontend Integration (Planned)

> Frontend implementation will be added later.
> This backend is designed to support a clean and scalable frontend architecture with proper API contracts and authentication handling.

## 📌 Future Enhancements

* Frontend application
* Event capacity limits
* Pagination and filtering
* Admin-level access
* Email notifications
* Password reset and verification flows

## 👤 Author

**Herika Rajput**
Backend-focused developer with an interest in system design, clean architecture, and real-world application development.

## 📄 License

This project is intended for learning, portfolio, and demonstration purposes.
