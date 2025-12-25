# Flowva Rewards Hub – React & Supabase

This project is a recreation of the **Flowva Rewards Hub** built as part of a technical assessment for the **React Full-Stack Developer** role.

The objective was to accurately reproduce the Rewards page UI and functionality while demonstrating real-world usage of **React** and **Supabase** for authentication, database operations, and state management.

---

## 🚀 Features

### Authentication
- Email & password signup
- Email & password login
- Google OAuth (login & signup)
- Forgot password with email recovery
- Password reset flow handled without routing

### Rewards Hub
- Earn Points & Redeem Rewards views
- Points balance with progress tracking
- Daily streak system (+5 points per day)
- Featured tool spotlight
- Earn more points (referrals & sharing)
- Refer & Earn section with referral link and copy action
- Rewards filtering:
  - All rewards
  - Unlocked
  - Locked
  - Coming soon

### Data & Logic
- Supabase authentication and session handling
- PostgreSQL database via Supabase
- Automatic profile creation using database triggers
- Real-time points updates after user actions
- Proper loading, empty, and error states

### UI & UX
- Pixel-accurate recreation of the Flowva Rewards UI
- Fixed sidebar with scrollable main content
- Clean, modern dashboard layout
- Clear visual hierarchy and spacing

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Backend & Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth + Google OAuth
- **Styling:** Inline styles (UI-focused assessment)

---

## 📂 Project Structure (Simplified)
