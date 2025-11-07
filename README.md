# Auth Modular — React Router + Tailwind (Mock)

Fluxo de autenticação modular com páginas separadas e React Router v6.
Sem tema externo; tudo em Tailwind com cores neutras.

## Rotas
- `/login` → Login
- `/register` → Criação de conta
- `/forgot` → Esqueci minha senha
- `/otp/:mode` → OTP (mode: `login`, `register`, `recovery`)
- `/done` → Sucesso (mock)
- `/` redireciona para `/login`

## Rodar localmente
```bash
npm i
npm run dev
# ou
yarn && yarn dev
```
Acesse: http://localhost:5173

## Observações
- Todos os fluxos são **mockados** (qualquer user/senha/OTP funciona).
- Conecte os formulários às suas APIs quando estiver pronto.
