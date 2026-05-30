import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import TermsAndConditions from './components/TermsAndConditions.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import RefundPolicy from './components/RefundPolicy.tsx';
import BlogPage from './components/BlogPage.tsx';
import FacebookAdsCampaignAnalysis from './components/blog/FacebookAdsCampaignAnalysis.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/terms',
    element: <TermsAndConditions />,
  },
  {
    path: '/privacy',
    element: <PrivacyPolicy />,
  },
  {
    path: '/refund',
    element: <RefundPolicy />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/blog/facebook-ads-campaign-analysis',
    element: <FacebookAdsCampaignAnalysis />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
);
