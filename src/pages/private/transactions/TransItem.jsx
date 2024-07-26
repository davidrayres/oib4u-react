import Card from '../../../components/Card'

function TransItem({transaction, i}) {
  console.log(transaction)
  return (
    <Card>
      <div className='row'>
        <div className='description'>{transaction.description}</div>
        <div className='amount'>{transaction.amount}</div>
      </div>
      <div className='category'>{transaction.category}</div>
    </Card>
  )
}

export default TransItem
