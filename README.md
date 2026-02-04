# ACMT - A Conference Management Toolkit

A specialized CMT system for research management.

## 🏗 Project Architecture

This project follows a **Next.js 15+** architecture with a `src/` directory and **Route Groups** for logical separation.

```text
ACMT/
├── apps/                 # Future-proofing for monorepo scale
├── src/
│   ├── app/
│   │   ├── (auth)/       # Authentication routes (login, register)
│   │   ├── (dashboard)/  # Internal management tools (Sidebar, Tables)
│   │   ├── (marketing)/  # Public-facing landing pages (Home)
│   │   ├── api/          # Serverless API routes
│   │   ├── globals.css   # Tailwind Global styles
│   │   └── layout.tsx    # Root App Shell
│   └── components/       # Reusable UI components
├── public/               # Static assets (images, icons)
├── Dockerfile            # Multi-stage Linux build
└── docker-compose.yml    # Development environment orchestration

## 🚀 Getting Started

### Prerequisites
* **Docker Desktop** installed on your Mac.
* **Node.js 20+** (if running locally without Docker).

### Development Environment (Docker)
The project is configured to run on **Port 3001.

**Start the containers:**
   ```bash
   docker compose up --build
### Access the application:
- **App:** [http://localhost:3001](http://localhost:3001)

### Key Docker Commands
* **Stop containers:** `docker compose stop`
* **Shut down & clean networks:** `docker compose down`
* **Hard reset (Clear cache/DB):** `rm -rf .next && docker compose down -v`

---

## 🛠 Tech Stack
* **Framework:** Next.js 16 (Turbopack)
* **Styling:** Tailwind CSS
* **Database:** PostgreSQL (Alpine 15)
* **ORM:** Prisma
* **Runtime:** Node.js 20 (Alpine)

---

## 📁 Directory Roles
* **`(marketing)`**: Routes that use the public landing page layout.
* **`(dashboard)`**: Routes that require the authenticated Sidebar/Navbar layout.
* **`(auth)`**: Logic for user sign-in/sign-up.

---

## ⚙️ Dynamic Features & Architecture

ACMT is modeled after enterprise-grade conference toolkits, utilizing a dynamic architecture to manage the complex lifecycle of academic and industry events.

### 1. Dynamic Workflow States
Unlike static apps, the interface and permissions adapt dynamically based on the conference timeline:
* **Submission Phase:** Authors can upload; Reviewers are locked out.
* **Review Phase:** Submissions are frozen; Dynamic assignment logic distributes papers to reviewers.
* **Decision Phase:** Real-time analytics for Chairs to aggregate scores and send notifications.

### 2. Role-Based Dynamic Routing
We use Next.js **Dynamic Segments** and Middleware to verify user roles on every request:
* `src/app/(dashboard)/[conference-id]/[role]` → The UI adapts dynamically whether the user is an **Author**, **Reviewer**, or **Chair**.

### 3. Dynamic Submission Handling
* **Schema Flexibility:** Metadata for submissions (abstracts, keywords, file types) is handled dynamically to support different conference tracks.
* **Real-time Status Tracking:** Paper statuses (Pending, Under Review, Accepted) update across the dashboard without full page reloads.

### 4. Live Environment Sync
The **Docker Volume** mapping ensures that as you develop new review algorithms or submission logic, the changes are dynamically reflected in the running container via Hot Module Replacement (HMR).