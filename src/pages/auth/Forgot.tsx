import React, { useState } from "react";
import { Button, Card, Input, Label, LinkButton, Title } from "../../components/ui";

export default function Forgot({ goLogin, goOtp }: { goLogin: () => void; goOtp: () => void }) {
  const [email, setEmail] = useState("");

  return (
    <Card>
      <Title subtitle="Enviaremos um código para o seu e-mail (mock)">Recuperar senha</Title>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          goOtp(); // segue para OTP de recuperação
        }}
      >
        <div>
          <Label htmlFor="emailRec">E-mail</Label>
          <Input id="emailRec" type="email" placeholder="seu@exemplo.com" value={email} onChange={setEmail} autoFocus />
        </div>
        <Button type="submit">Enviar código</Button>
      </form>
      <div className="mt-6 text-center">
        <LinkButton onClick={goLogin}>Voltar para login</LinkButton>
      </div>
    </Card>
  );
}
