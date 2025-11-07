import React, { useState } from "react";
import { Button, Card, Input, Label, LinkButton, Title } from "../../components/ui";

export default function Register({ goLogin, goOtp }: { goLogin: () => void; goOtp: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Card>
      <Title subtitle="Mock: dados não são enviados ainda">Criar conta</Title>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          goOtp();
        }}
      >
        <div>
          <Label htmlFor="name">Nome completo</Label>
          <Input id="name" placeholder="Seu nome" value={name} onChange={setName} autoFocus />
        </div>
        <div>
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" placeholder="seu@exemplo.com" value={email} onChange={setEmail} />
        </div>
        <div>
          <Label htmlFor="pass2">Senha</Label>
          <Input id="pass2" type="password" placeholder="Crie uma senha" value={password} onChange={setPassword} />
        </div>
        <Button type="submit">Cadastrar</Button>
      </form>
      <div className="mt-6 text-center">
        <LinkButton onClick={goLogin}>Voltar para login</LinkButton>
      </div>
    </Card>
  );
}
