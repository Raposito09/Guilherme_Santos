# 🌐 Guilherme Santos — Portfólio Pessoal

Site portfólio pessoal desenvolvido com **React**, **TypeScript**, **Tailwind CSS** e **Vite**.

## ✨ Funcionalidades

- 🎨 Design moderno com tema escuro e animações com Framer Motion (https://motion.dev)
- 🌍 Suporte a 3 idiomas (Português, English, Español) - facilitando o acesso a página para pessoas de diferentes países (https://react.i18next.com)
- 📄 Download automático de currículo — basta colocar um PDF na pasta `public/resumes/`
- 📬 Formulário de contato funcional com EmailJS - envio de emails para Guilherme Santos (https://emailjs.com)
- 📱 Layout totalmente responsivo - adaptando-se a diferentes tamanhos de tela (https://tailwindcss.com/docs/responsive-design)
  
## 🚀 Como Rodar o Projeto

```bash 
# Instalar dependências do projeto
npm install

# Rodar em modo de desenvolvimento (localhost:5173)
npm run dev

# Gerar build de produção (dist/)
npm run build
```

## 📄 Como Atualizar o Currículo do Projeto

1. Coloque seu arquivo `.pdf` na pasta `public/resumes/`
2. Reinicie o servidor de desenvolvimento (`npm run dev`)
3. O botão **"Baixar Currículo"** no Hero banner já puxa o PDF automaticamente

> Não precisa editar código — o site detecta o PDF sozinho, a pasta foi pensada para pegar o primeiro PDF que encontrar. 

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| [React](https://react.dev) | Interface do usuário |
| [TypeScript](https://typescriptlang.org) | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com) | Estilização |
| [Vite](https://vite.dev) | Build e dev server |
| [Framer Motion](https://motion.dev) | Animações |
| [Lucide React](https://lucide.dev) | Ícones |
| [EmailJS](https://emailjs.com) | Envio de emails |

## 📁 Estrutura do Projeto

```
src/
├── components/     # Componentes da página (Hero, About, Contact, etc.)
├── i18n/           # Traduções (PT, EN, ES)
├── App.tsx         # Componente principal
└── main.tsx        # Ponto de entrada
public/
└── resumes/        # PDFs de currículo (detectados automaticamente)
```

## 📝 Licença

Desenvolvido por **Guilherme Santos**.

Disponível para uso livre e comercial. 



