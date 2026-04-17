# 🎸 MJD Instrumentos Musicais — E-commerce Premium

Este repositório contém o código completo do projeto MJD Instrumentos Musicais, um MVP de e-commerce premium com foco em experiência do usuário cinematográfica.

## 🚀 Tecnologias

- **Frontend:** React + Vite + Tailwind CSS
- **Design:** Glassmorphism, Bebas Neue Typography, Animações Framer-like
- **Backend/DB:** Supabase (PostgreSQL + Auth)
- **Deploy:** Vercel

---

## 🛠️ Como Rodar Localmente

### 1. Clonar o projeto
```bash
git clone https://github.com/Celaodefato/MJD.git
cd MJD
```

### 2. Configurar o Frontend
Vá para a pasta `frontend`, instale as dependências e configure as variáveis de ambiente.

```bash
cd frontend
npm install
cp .env.example .env.local
```

Abra o arquivo `.env.local` e preencha com suas chaves do Supabase:
```text
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anon_do_supabase
```

### 3. Iniciar o site
```bash
npm run dev
```

---

## ☁️ Deploy em Produção (Vercel)

O site está configurado para deploy automático na Vercel a cada push na branch `main`.

1. Conecte seu repositório GitHub à Vercel.
2. Nas **Environment Variables** do projeto na Vercel, adicione:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_SITE_URL` (URL da Vercel ou domínio próprio)

---

## 🗄️ Banco de Dados (Supabase)

Para configurar o banco de dados no Supabase:
1. Crie um novo projeto no [Supabase](https://supabase.com).
2. Vá em **SQL Editor** e execute o conteúdo do arquivo `supabase/schema.sql` que está na raiz deste repositório.
3. Isso criará as tabelas de `categories`, `products`, `orders` e `order_items`.

---

## 🌐 Domínio Próprio (Futuro)

Para adicionar um domínio como `mjdinstrumentos.com.br`:
1. Na Vercel, vá em **Settings > Domains** e adicione o domínio.
2. Siga as instruções de DNS da Vercel.
3. Atualize a variável `VITE_SITE_URL` para o novo domínio no painel da Vercel.

---

## 📁 Estrutura do Projeto

- `/frontend`: Aplicação React (Vite).
- `/backend`: Backend Express (referência original, substituído por Supabase no frontend).
- `/supabase`: Scripts SQL para o banco de dados.
- `README.md`: Este arquivo.

---
MJD Instrumentos — Desenvolvido com paixão por música.
