// src/pages/auth/Login.tsx
import React, { useState } from "react";
import { Button, Card, Input, Label, LinkButton, Title } from "../../components/ui";

export default function Login({
  goRegister,
  goOtp,
  goForgot,
}: {
  goRegister: () => void;
  goOtp: () => void;
  goForgot: () => void;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="relative w-screen min-h-[100svh] overflow-hidden">
      {/* Fundo */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-login.jpg')" }}
        aria-hidden
      />

      {/* Escurecimento leve */}
      <div className="absolute inset-0 z-10 bg-black/15 dark:bg-black/25" aria-hidden />

      {/* Logo translúcida fixa e responsiva */}
      <img
        src="/images/AutraTransparente.png"
        alt=""
        className="
          absolute z-20 pointer-events-none object-contain c1-rise
          /* posição */
          left-1/2 -translate-x-1/2 md:translate-x-[12%]
          bottom-10 md:bottom-[120px] lg:bottom-[150px]
          /* opacidade */
          opacity-50 md:opacity-45 lg:opacity-40
        "
        /* tamanho responsivo com clamp: nunca menor que 180px, nem maior que 440px */
       // style={{ width: "clamp(260px, 25vw, 480px)", height: "auto" }}
        aria-hidden
        />

      {/* Conteúdo */}
      <div
        className="
          relative z-30 flex min-h-[100svh] w-full items-center
          justify-center md:justify-start
          px-5 md:px-12
        "
      >
        <div
          className="
            w-full max-w-md md:w-[420px] lg:w-[440px]
            bg-white/90 dark:bg-zinc-900/70 backdrop-blur
            border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl
            /* desloca o card à esquerda só em md+ */
            md:ml-8 lg:ml-16 xl:ml-24 2xl:ml-32
          "
        >
          <Title subtitle="Use qualquer usuário e senha por enquanto (mock)">
            Entrar
          </Title>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              goOtp();
            }}
          >
            <div>
              <Label htmlFor="user">Usuário ou e-mail</Label>
              <Input
                id="user"
                placeholder="seu@exemplo.com"
                value={username}
                onChange={setUsername}
                autoFocus
              />
            </div>
            <div>
              <Label htmlFor="pass">Senha</Label>
              <Input
                id="pass"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={setPassword}
              />
            </div>
            <Button type="submit">Continuar</Button>
          </form>

          <div className="mt-6 flex flex-wrap gap-3 justify-between">
            <LinkButton onClick={goRegister}>Registrar novo usuário</LinkButton>
            <LinkButton onClick={goForgot}>Esqueci minha senha</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
