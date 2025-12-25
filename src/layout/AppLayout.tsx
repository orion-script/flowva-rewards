import { type ReactNode } from "react";
// import LogoutButton from "../components/LogoutButton";
import UserSidebarProfile from "../components/UserSidebarProfile";

const SIDEBAR_WIDTH = 260;

const navItemStyle = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: "12px 14px",
  borderRadius: 12,
  cursor: "pointer",
  fontSize: 16,
};

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Sidebar (FIXED) */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: SIDEBAR_WIDTH,
          background: "#ffffff",
          borderRight: "1px solid #eee",
          padding: "24px 20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ color: "#7c3aed", fontWeight: 700 }}>flowva</h2>
        </div>

        {/* Navigation */}
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div style={navItemStyle}>Home</div>
          <div style={navItemStyle}>Discover</div>
          <div style={navItemStyle}>Library</div>
          <div style={navItemStyle}>Tech Stack</div>
          <div style={navItemStyle}>Subscriptions</div>

          {/* Active */}
          <div
            style={{
              ...navItemStyle,
              background: "#ede9fe",
              color: "#7c3aed",
              fontWeight: 600,
            }}
          >
            Rewards Hub
          </div>

          <div style={navItemStyle}>Settings</div>
        </nav>

        {/* Bottom profile + logout */}
        <div style={{ marginTop: "auto", paddingTop: 24 }}>
          <UserSidebarProfile />
          {/* <LogoutButton /> */}
        </div>
      </aside>

      {/* Main content (SCROLLABLE) */}
      <main
        style={{
          marginLeft: SIDEBAR_WIDTH,
          minHeight: "100vh",
          background: "#fafafa",
          padding: 32,
          overflowY: "auto",
        }}
      >
        {children}
      </main>
    </div>
  );
}
