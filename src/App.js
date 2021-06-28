import { useState } from 'react'
 import Navigation from './components/header/Navigation/Navigation'
 import Hero from './components/header/Hero/Hero'
 import './App.css'
import LinkShortener from './components/Body/LinkShortener/LinkShortener';
import ShortenedLink from './components/Body/ResultsDiv/ShortenedLink';
import FooterCta from './components/Footer/FooterCta/FooterCta'
import Footer from './components/Footer/Footer/Footer'
import SalesPoint from './components/Body/SalesPoint/SalesPoint'
import IconBrandRecognation from './images/icon-brand-recognition.svg'
import IconDetailsRecord from './images/icon-detailed-records.svg'
import IconFullyCustomizable from './images/icon-fully-customizable.svg'

function App() {
  const [shortOutput, setShortOutput] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null)
  const [salesPointHeading] = useState({
    mainHeading: 'Advanced Statistics',
    subHeading: 'Track how your links are performing across the web with our advanced statistics dashboard.'
  })
  const [salesPointCards] = useState([
    {
      id: 1,
      cardImg: IconBrandRecognation,
      cardHeading: 'Brand Recognition',
      cardText: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
    },
    {
      id: 2,
      cardImg: IconDetailsRecord,
      cardHeading: 'Detailed Records',
      cardText: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
    },
    {
      id: 3,
      cardImg: IconFullyCustomizable,
      cardHeading: 'Fully Customizable',
      cardText: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
    },
  ])
   
  const urlShortenHandler = async (url) => {
    setLoading(true)

    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    const data = await res.json()
    if (!data.ok) {
      setError('Something went wrong')
      setLoading(false)
      return;
    }

    setShortOutput([{ originalLink: url, shortened: data.result.short_link, id: shortOutput.length + 1 }, ...shortOutput])
    setLoading(false)
    
  }


  return (
    <div className="app">
    <div className="container">
        <Navigation />
        <Hero />
        <LinkShortener urlShortenHandler={urlShortenHandler} error={error} setError={setError} loading={loading} />
        </div>
        <div className="body-gray-bg" style={{ paddingTop: '4.5em' }}>
        {shortOutput.length ? (<div className="container">
          {shortOutput.map(curShortenOutput => {
            return <ShortenedLink key={curShortenOutput.id} shortenOutput={curShortenOutput} />
          })}
        </div>) : ''}
        <SalesPoint salesPointCards={salesPointCards} salesPointHeading={salesPointHeading} />
      </div> 
      <FooterCta textContent="Boost your links today" btnPadding=".5em 2em" btnFontSize="1.25rem" />
      <Footer />
    
    </div>
  );
}

export default App;
