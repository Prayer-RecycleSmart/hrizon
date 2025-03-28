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
# For production, set your site URL
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
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
3. Configure environment variables in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
   - `NEXT_PUBLIC_SITE_URL`: Your production domain (e.g., https://your-app.vercel.app)
4. Deploy!

### Important Production Setup Steps

1. **Configure Supabase Authentication**:
   - Go to your Supabase project dashboard
   - Navigate to Authentication > URL Configuration
   - Update the Site URL to match your production domain
   - Add additional redirect URLs for your production domain (e.g., https://your-app.vercel.app/auth/callback)

2. **Update Environment Variables**:
   - Make sure `NEXT_PUBLIC_SITE_URL` is set to your production URL in your Vercel project settings

## License

[MIT](LICENSE)

## Acknowledgements

Created by [Your Name] based on the HRizon concept by Ben Tanswell, Josh Hill, and Luca Marzorati.