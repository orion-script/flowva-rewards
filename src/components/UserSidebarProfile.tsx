import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function UserSidebarProfile() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setEmail(data.user?.email ?? null);
    });
  }, []);

  if (!email) return null;

  //   const initial = email.charAt(0).toUpperCase();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 14px",
        borderRadius: 12,
        background: "#f5f3ff",
        marginBottom: 12,
      }}
    >
      {/* Avatar */}
      {/* <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "#7c3aed",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
        }}
      >
        {initial}
      </div> */}

      {/* Email */}
      <div style={{ fontSize: 12 }}>
        {/* <div style={{ fontWeight: 600 }}>Logged in as</div> */}
        <div style={{ color: "#555" }}>{email}</div>
      </div>
    </div>
  );
}
