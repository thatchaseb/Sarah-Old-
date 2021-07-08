import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './pages/News';
import About from './pages/About';
import Videos from './pages/Videos';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>

				 <Header />
				 <Route path="/" exact component={News} />
				 <Route path="/about" exact component={About} />
				 <Route path="/videos" exact component={Videos} />
				 <Route path="/gallery" exact component={Gallery} />
				 <Route path="/resume" exact component={Resume} />
				 <Route path="/contact" exact component={Contact} />

				</div>
				<br/> 

				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;