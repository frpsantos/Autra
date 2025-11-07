import React, { useEffect, useState } from "react";
import { Button, Card, OtpInputs, Title } from "../../components/ui";

export type OtpMode = "login" | "register" | "recovery";

export default function Otp({ mode, onBack, onSuccess }: { mode: OtpMode; onBack: () => void; onSuccess: () => void }) {
  const [otpSeconds, setOtpSeconds] = useState<number>(30);
  const [otpLocked, setOtpLocked] = useState<boolean>(false);

  useEffect(() => {
    if (otpSeconds <= 0) return;
    const t = setInterval(() => setOtpSeconds((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [otpSeconds]);

  const subtitleByMode: Record<OtpMode, string> = {
    login: "Código de login válido por 30s (mock)",
    register: "Confirme seu cadastro com o código (mock)",
    recovery: "Informe o código enviado ao seu e-mail (mock)",
  };

  return (
    <Card>
      <Title subtitle={subtitleByMode[mode]}>Digite o código de 6 dígitos</Title>
      <OtpInputs length={6} onComplete={onSuccess} isDisabled={otpSeconds === 0 || otpLocked} />
      <div className="mb-4 text-center text-sm text-zinc-300">
        {otpSeconds > 0 ? `Expira em ${otpSeconds}s` : "Código expirado."}
      </div>
      <div className="flex gap-3">
        <Button variant="ghost" onClick={onBack}>Voltar</Button>
        <Button
          onClick={() => {
            setOtpLocked(true);
            setTimeout(() => {
              setOtpSeconds(30);
              setOtpLocked(false);
            }, 500);
          }}
          disabled={otpSeconds > 0}
        >
          Reenviar código
        </Button>
      </div>
    </Card>
  );
}
