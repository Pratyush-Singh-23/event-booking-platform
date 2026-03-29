# 📅 Event Booking Platform – Implementation Guide

This document outlines the step-by-step implementation phases for the Event Booking Platform. It provides a detailed breakdown of tasks for two developers collaborating on the project.

---

## 🛠️ Phase 1: Initial Setup

### For Both Developers

1. **Clone the Repository**
2. **Install Local Dependencies**
   * Dependencies are listed in `Requirements.txt`. These should be downloaded directly inside the project folder (`d:\event booking platform`), strictly avoiding global installations:
     ```bash
     npm install
     ```
3. **Set Up Git Workflow**
   Each developer will work on their respective branches:
   ```bash
   git init
   git add .
   git commit -m "Initial project setup"
   git branch -M main
   # Add your remote repository when ready:
   # git remote add origin <repo-url>
   ```

---

## 👨‍💻 Phase 2: Role-based Development

### Developer A (Frontend + Auth)

**Git Setup (Developer A):**
```bash
git checkout main
git pull origin main
git checkout -b feature/frontend-auth
```

**Tasks:**
1. **Routing & UI Foundation**: Setup main layout, navbar, footer, and basic routing using Next.js App Router.
2. **Styling & Components**: Build reusable UI components (Buttons, Inputs, Modals, EventCards) using Tailwind CSS.
3. **Authentication Pages**: Build `/login` and `/register` pages.
4. **Auth Integration**: Connect the frontend with NextAuth.js to handle session state (`useSession` / `SessionProvider`).
5. **Main Pages**:
   - `/events` (browse all events)
   - `/events/[id]` (event detail and RSVP page)
   - `/dashboard` (view booked events / admin dashboard)

### Developer B (Backend + Database) - *Your Role*

**Git Setup (Developer B):**
```bash
git checkout main
git pull origin main
git checkout -b feature/backend-api
```

**Connecting Local PostgreSQL Database:**
1. Download and install PostgreSQL locally if not installed.
2. Open PGAdmin or your local `psql` terminal and create a new database:
   ```sql
   CREATE DATABASE event_db;
   ```
3. Create an `.env` file at the root of the project with your local PostgreSQL URI:
   ```env
   DATABASE_URL="postgresql://<username>:<password>@localhost:5432/event_db"
   RESEND_API_KEY="your_resend_api_key"
   NEXTAUTH_SECRET="your_nextauth_secret"
   ```
4. Run Prisma commands to sync your DB with the schema:
   ```bash
   npx prisma generate
   npx prisma db push
   # For initial migrations: 
   npx prisma migrate dev --name init
   ```

**Tasks:**
1. **Database Schema**: Configure Prisma schema (`prisma/schema.prisma`) for `User`, `Event`, and `Booking` models.
2. **Authentication Backend**: Finalize NextAuth.js credentials provider and password hashing (e.g., using bcrypt).
3. **API Endpoints (Events)**:
   - `POST /api/events` (Create Event)
   - `GET /api/events` (Read Events)
   - `PUT /api/events/[id]` (Update Event)
   - `DELETE /api/events/[id]` (Delete Event)
4. **API Endpoints (Bookings)**:
   - `POST /api/book` (RSVP, implement capacity checking logic)
5. **Email Service Integration**:
   - Utilize Resend SDK to dispatch confirmation emails to the user upon a successful RSVP.

---

## 🔄 Phase 3: Integration and Merging

Once developers have completed their respective feature branches, follow this workflow to safely integrate the codebase.

### Step 1: Merging Feature Branches

**Developer B (Backend) merges first:**
```bash
git checkout main
git pull origin main
# Ensure you handle any potential conflicts locally before issuing PR or merging
git merge feature/backend-api
git push origin main
```

**Developer A (Frontend) merges next:**
```bash
git checkout main
git pull origin main
# Merge main changes (Developer B's API) before merging frontend logic
git merge feature/frontend-auth
git push origin main
```

### Step 2: Full System Testing
1. Both developers pull the latest `main` branch.
2. Run database migrations to ensure everyone's local DB is synced.
3. Start the application:
   ```bash
   npm run dev
   ```
4. Perform end-to-end local tests: Registration -> Login -> Browse Event -> RSVP -> Check Email.

> 📝 **Note on Deployment:** The deployment phase (Vercel/NeonDB) is explicitly scheduled for a future milestone and is not necessary now.
