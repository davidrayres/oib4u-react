import TransItem from './TransItem'
import {Timestamp} from 'firebase/firestore'
import dayjs from 'dayjs'

function TransDay({day, transactions}) {
  const trans = transactions.filter(trans => trans.date.seconds === day)
  console.log(trans)
  return (
    <div className='day'>
      <div className='title'>{dayjs(new Timestamp(day, 0).toDate()).format('M/D/YY')}</div>
      <div className='transaction-container'>
        {trans.map(transaction => (
          <TransItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  )
}

export default TransDay
