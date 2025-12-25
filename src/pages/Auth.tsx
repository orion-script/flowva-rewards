import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAuth = async () => {
    setLoading(true);
    setError(null);

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        style={{
          width: 380,
          background: "#ffffff",
          borderRadius: 16,
          padding: 32,
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        }}
      >
        {/* Header */}
        <h2
          style={{
            textAlign: "center",
            marginBottom: 8,
            color: "#6d28d9",
          }}
        >
          {mode === "login" ? "Log in to flowva" : "Create your account"}
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            fontSize: 14,
            marginBottom: 24,
          }}
        >
          Log in to receive personalized recommendations
        </p>

        {/* Email */}
        <label style={{ fontSize: 14, fontWeight: 500, color: "#000" }}>
          Email
        </label>
        <input
          placeholder="user@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginTop: 6,
            marginBottom: 16,
            borderRadius: 10,
            border: "1px solid #e5e7eb",
          }}
        />

        {/* Password */}
        <label style={{ fontSize: 14, fontWeight: 500, color: "#000" }}>
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginTop: 6,
            borderRadius: 10,
            border: "1px solid #e5e7eb",
          }}
        />

        {/* Forgot password */}
        {/* {mode === "login" && (
          <div style={{ textAlign: "right", marginTop: 8 }}>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#7c3aed",
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </button>
          </div>
        )} */}

        {/* Error */}
        {error && (
          <p
            style={{
              color: "#dc2626",
              fontSize: 14,
              marginTop: 12,
            }}
          >
            {error}
          </p>
        )}

        {/* Primary button */}
        <button
          disabled={loading}
          onClick={handleAuth}
          style={{
            width: "100%",
            marginTop: 20,
            padding: 14,
            borderRadius: 999,
            border: "none",
            background: "#7c3aed",
            color: "#ffffff",
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Please wait…" : mode === "login" ? "Sign in" : "Sign up"}
        </button>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            margin: "24px 0",
            color: "#9ca3af",
            fontSize: 13,
          }}
        >
          <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
          or
          <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
        </div>

        {/* Switch mode */}
        <p
          style={{
            textAlign: "center",
            fontSize: 14,
            marginTop: 20,
            color: "#6b7280",
          }}
        >
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setMode("signup")}
                style={{
                  background: "none",
                  border: "none",
                  color: "#7c3aed",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setMode("login")}
                style={{
                  background: "none",
                  border: "none",
                  color: "#7c3aed",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Log in
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
