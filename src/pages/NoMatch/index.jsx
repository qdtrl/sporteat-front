import './index.scss';

const NoMatch = () => {
	return (
		<section className="nomatch flex__center padding">
			<div>
				<h1>Erreur 404</h1>
				<p>Cette page n'existe pas !</p>
				<iframe src="https://giphy.com/embed/MarYoZ2BIJUimKydXa" title="patrick"  frameBorder="0" className="gif-no-match" ></iframe>
			</div>
		</section>
	)
}

export default NoMatch;