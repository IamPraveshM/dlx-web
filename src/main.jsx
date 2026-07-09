import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './style.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './components/About.jsx'
import Contact from './pages/Contact.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import RefundPolicy from './pages/RefundPolicy.jsx'
import TermsConditions from './pages/TermsConditions.jsx'
import IndustryPage from './pages/IndustryPage.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'about', element: <About /> },
			{ path: 'industries', element: <IndustryPage /> },
			{ path: 'contact', element: <Contact /> },
			{ path: 'privacy', element: <PrivacyPolicy /> },
			{ path: 'refunds', element: <RefundPolicy /> },
			{ path: 'terms', element: <TermsConditions /> },
		],
	},
])

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)


