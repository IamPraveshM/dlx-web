import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Lenis from 'lenis'
import Home from './pages/Home.jsx'
import About from './components/About.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'

export default function App() {
	useEffect(() => {
		const lenis = new Lenis({
			smoothWheel: true,
			smoothTouch: false,
		})

		// expose Lenis instance so other parts (ScrollToTop) can use it
		if (typeof window !== 'undefined') window.lenis = lenis

		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)

		return () => {
			lenis.destroy()
			if (typeof window !== 'undefined' && window.lenis === lenis) delete window.lenis
		}
	}, [])

	return (
		<div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
			<Navbar />
			<ScrollToTop />
			<Outlet />
			<Footer />
			<FloatingWhatsApp />
		</div>
	)
}


