import Header from '../../../components/Header'
import Transaction from './TransItem'

export default function Transactions() {
  return (
    <>
      <Header text={'Transactions'} />
      <main>
        <Transaction/>
      </main>
    </>
  )
}
