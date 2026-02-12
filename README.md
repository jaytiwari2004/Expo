# Next.js + Tailwind CSS Project

This is a modern Next.js project configured with Tailwind CSS v4 and JSX file extensions.

## 🚀 Features

- ✅ **Next.js 16.1.6** - Latest version with App Router
- ✅ **Tailwind CSS v4** - Modern utility-first CSS framework
- ✅ **JSX File Extensions** - All components use `.jsx` instead of `.tsx`
- ✅ **ESLint** - Code linting configured
- ✅ **React Compiler** - Enabled for better performance
- ✅ **Path Aliases** - Use `@/` to import from `src/` directory
- ✅ **Dark Mode Support** - Built-in dark mode theming

## 📁 Project Structure

```
my-nextjs-app/
├── src/
│   ├── app/
│   │   ├── layout.jsx       # Root layout component
│   │   ├── page.jsx         # Home page
│   │   └── globals.css      # Global styles with Tailwind
│   └── components/
│       ├── Button.jsx       # Sample button component
│       └── Card.jsx         # Sample card component
├── public/                  # Static assets
├── next.config.js          # Next.js configuration
├── jsconfig.json           # JavaScript configuration
├── tsconfig.json           # TypeScript configuration (for type checking)
├── postcss.config.mjs      # PostCSS configuration
└── package.json            # Dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

The project is already set up! Just run:

```bash
npm run dev
```

This will start the development server at [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Creating Components

All components should use `.jsx` extension. Here's an example:

```jsx
// src/components/MyComponent.jsx
export default function MyComponent({ title }) {
  return (
    <div className="p-4 bg-blue-500 text-white rounded-lg">
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}
```

### Using Path Aliases

You can import components using the `@/` alias:

```jsx
import Button from '@/components/Button';
import Card from '@/components/Card';
```

## 🎨 Tailwind CSS

Tailwind CSS v4 is configured and ready to use. You can use all Tailwind utility classes in your JSX components.

### Custom Theme

Edit `src/app/globals.css` to customize your theme:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

## 🌙 Dark Mode

Dark mode is automatically supported. The theme switches based on system preferences.

## 📦 Sample Components

Two sample components are included:

### Button Component
```jsx
import Button from '@/components/Button';

<Button variant="primary" onClick={() => console.log('Clicked!')}>
  Click Me
</Button>
```

### Card Component
```jsx
import Card from '@/components/Card';

<Card title="My Card" description="This is a sample card">
  <p>Card content goes here</p>
</Card>
```

## 🔧 Configuration Files

### next.config.js
- Configured to support both `.jsx` and `.tsx` files
- React Compiler enabled

### jsconfig.json
- Provides IntelliSense for JSX files
- Path aliases configured (`@/*` → `./src/*`)

### tsconfig.json
- Kept for type checking support
- Configured to recognize `.jsx` files

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 🚢 Deployment

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com):

```bash
npm run build
```

Then deploy the `.next` folder to your hosting provider.

## 💡 Tips

1. **File Extensions**: Always use `.jsx` for components
2. **Styling**: Use Tailwind utility classes for styling
3. **Components**: Create reusable components in `src/components/`
4. **Pages**: Add new pages in `src/app/` directory
5. **Static Assets**: Place images and files in `public/` directory

---

Happy coding! 🎉
