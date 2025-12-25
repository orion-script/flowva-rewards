import { supabase } from "../lib/supabase";

export default function LogoutButton() {
  const logout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <button
      onClick={logout}
      style={{
        background: "#1f2547",
        color: "#e6e8ee",
      }}
    >
      Logout
    </button>
  );
}
