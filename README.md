# HRizon - HR Compliance Platform

HRizon is an HR compliance platform designed to help scaling companies maintain HR compliance while building great workplace cultures. This is an MVP implementation created with Next.js, Tailwind CSS, and Supabase.

## Features

- 🔒 **Authentication System**: Role-based access (admin, manager, employee) with email/password and social login options
- 📊 **Dashboard**: Company compliance overview, metrics, recent activity, and notifications
- 📝 **Policy Management**: Library of policies with search, versioning, and update notifications
- 📈 **Compliance Monitoring**: Visual dashboard showing organizational compliance, risk areas, and reports
- 👥 **Employee Directory**: Employee profiles and organizational chart visualization
- 🤖 **AI Assistant**: Simple policy query functionality (simulated for MVP)

## Tech Stack

- **Frontend**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Backend**: Supabase for authentication, database, and storage
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/hrizon.git
cd hrizon
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your Supabase project details
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

5. Start the development server
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
hrizon/
├── public/           # Static assets
├── src/
│   ├── app/          # Next.js App Router
│   │   ├── api/      # API routes
│   │   ├── auth/     # Auth-related routes
│   │   ├── dashboard/# Dashboard pages
│   │   └── ...
│   ├── components/   # React components
│   │   ├── dashboard/# Dashboard-specific components
│   │   ├── ui/       # Reusable UI components
│   │   └── ...
│   ├── contexts/     # React contexts
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utility functions
│   ├── styles/       # Global styles
│   ├── types/        # TypeScript types
│   └── utils/        # Helper utilities
└── ...
```

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Create a new project on Vercel
3. Configure environment variables
4. Deploy!

## License

[MIT](LICENSE)

## Acknowledgements

Created by [Your Name] based on the HRizon concept by Ben Tanswell, Josh Hill, and Luca Marzorati.