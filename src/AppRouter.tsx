import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import Otp, { type OtpMode } from "./pages/auth/Otp";
import ThemeToggle from "./components/ThemeToggle";

function OtpRouteWrapper() {
  const params = useParams();
  const navigate = useNavigate();
  const mode = (params.mode as OtpMode) || "login";
  return (
    <Frame>
      <Otp
        mode={mode}
        onBack={() => navigate(mode === "recovery" ? "/forgot" : mode === "register" ? "/register" : "/login")}
        onSuccess={() => navigate("/done")}
      />
    </Frame>
  );
}


function Frame({
  children,
  fullBleed = false,
}: {
  children: React.ReactNode;
  fullBleed?: boolean;
}) {
  return (
    <main
      className="
        min-h-screen
        bg-surface-light text-text-dark
        dark:bg-surface dark:text-text
        dark:bg-radial-brand
      "
    >
      <ThemeToggle />
      <div
        className={
          fullBleed
            ? // sem padding, sem max-width: 100% da viewport
              "min-h-screen w-full"
            : // layout padrão centralizado com padding
              "mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center p-6"
        }
      >
        {children}
      </div>
    </main>
  );
}



export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <Frame fullBleed>
              <Login
                goRegister={() => window.location.assign("/register")}
                goForgot={() => window.location.assign("/forgot")}
                goOtp={() => window.location.assign("/otp/login")}
              />
            </Frame>
          }
        />
        
        <Route
          path="/register"
          element={
            <Frame>
              <Register
                goLogin={() => window.location.assign("/login")}
                goOtp={() => window.location.assign("/otp/register")}
              />
            </Frame>
          }
        />
        <Route
          path="/forgot"
          element={
            <Frame>
              <Forgot
                goLogin={() => window.location.assign("/login")}
                goOtp={() => window.location.assign("/otp/recovery")}
              />
            </Frame>
          }
        />
        <Route path="/otp/:mode" element={<OtpRouteWrapper />} />
        <Route
          path="/done"
          element={
            <Frame>
              <div className="mx-auto w-full max-w-md text-center">
                <h2 className="mb-2 text-2xl font-bold">Sucesso ✅</h2>
                <p className="mb-6 text-zinc-600 dark:text-zinc-300">
                  Autenticado (mock). Aqui você redirecionaria para o dashboard.
                </p>
                <a
                  href="/login"
                  className="
                    inline-block rounded-xl px-4 py-3 text-sm font-semibold
                    text-white bg-brand-primary hover:bg-brand-dark shadow-brand-glow
                  "
                >
                  Sair
                </a>
              </div>
            </Frame>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
