import spinner from '../assets/spinner.gif'

function Spinner() {
  return (
    <div className='loadingSpinnerContainer'>
        <img src={spinner} alt='Loading...' style={{width: '100px', margin: 'auto', display: 'block'}} />
    </div>
  )
}

export default Spinner
