# 💼 **Job Portal – README**

## 📖 **Overview**

The **Job Portal** is a complete recruitment platform that bridges the gap between **Job Seekers** 👩‍💻 and **Employers** 🏢.
It’s designed for real-time hiring processes, secure profile management, and smooth communication between applicants and recruiters.
Built using **Spring Boot** ⚙️ on the backend and **Angular** 🎨 on the frontend, this portal delivers a fast, secure, and user-friendly experience.

---

## ✨ **Key Features**

### 👩‍💻 **For Job Seekers**

* 📝 Create and update personal profiles
* 📂 Upload and manage resumes/CVs
* 🔍 Search jobs by **title, skills, category, location, salary**
* 📅 Apply for jobs instantly
* 📊 Track your applications' status in real-time

### 🏢 **For Employers**

* 🏷️ Create & customize company profiles
* 🗂️ Post, update, and delete job openings
* 📜 View applications for posted jobs
* 🏆 Shortlist & manage candidates
* 📈 Monitor recruitment progress

### 🛡️ **For Admins**

* 👥 Manage all users (employers, seekers)
* 🚫 Approve or reject job listings
* 🔍 Monitor system activity logs
* ⚙️ Perform maintenance tasks

---

## 🛠 **Tech Stack**

**Backend** ⚙️

* Java 21 ☕
* Spring Boot 3.x 🚀
* Spring Data JPA + Hibernate 🗄️
* Spring Security + JWT 🔐
* MySQL 🛢️
* Maven 📦

**Frontend** 🎨

* Angular 16+ 🅰️
* TypeScript 📜
* Bootstrap 5 🎯 / Angular Material 🎨
* RxJS ⚡

**Other Tools**

* Postman (API testing) 📮
* Git & GitHub (Version control) 🐙
* MySQL Workbench (Database management) 🖥️

---

## 📂 **Project Structure**

```
job-portal/
│
├── backend/                # Spring Boot backend
│   ├── controller/         # REST Controllers
│   ├── entity/             # JPA Entities
│   ├── repository/         # Data Access Layer
│   ├── service/            # Business Logic
│   ├── security/           # JWT Authentication
│   └── application.properties
│
└── frontend/               # Angular frontend
    ├── components/         # UI Components
    ├── services/           # API calls
    ├── models/             # TypeScript interfaces
    └── assets/             # Images & CSS
```

---

## ⚙️ **Setup & Installation**

### 🖥️ **Backend**

1. **Navigate** to backend folder:

   ```bash
   cd backend
   ```
2. **Configure Database** in `application.properties`:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/job_portal
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   ```
3. **Run the Application**:

   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

---

### 🌐 **Frontend**

1. **Navigate** to frontend folder:

   ```bash
   cd frontend
   ```
2. **Install Dependencies**:

   ```bash
   npm install
   ```
3. **Run Development Server**:

   ```bash
   ng serve
   ```
4. **Open Browser**:

   ```
   http://localhost:4200
   ```

---

## 🔗 **Sample API Endpoints**

| Method | Endpoint            | Description     |
| ------ | ------------------- | --------------- |
| GET    | `/api/jobs`         | Get all jobs    |
| POST   | `/api/jobs`         | Post a job      |
| PUT    | `/api/jobs/{id}`    | Update job      |
| DELETE | `/api/jobs/{id}`    | Delete job      |
| POST   | `/api/applications` | Apply for a job |

---

## 🚀 **Future Upgrades**

* 🤖 AI-powered job recommendations
* 📩 Email/SMS job alerts
* 💬 Real-time chat between candidates & recruiters
* 📊 Analytics dashboard for hiring trends

---

## 📸 **Screenshots**

(Place your screenshots here for **Login Page**, **Job Listing Page**, **Employer Dashboard**, etc.)

---

## 📜 **License**

This project is licensed under the **MIT License** – free to use and modify.

---
