import React from 'react'
import PropTypes from 'prop-types'


const Order = props =>
  <div className='order'>
    <ul>
      <li>{props.cone ? 'Cone' : 'Cup'}</li>
      <li>{props.size}</li>
      <li>{props.scoops.length} scoops: {props.scoops.join(', ')}</li>
      <li>
        Ordered by {props.orderInfo.customerName} at {props.orderInfo.orderedAt}.
      </li>
    </ul>
  </div>

Order.propTypes = {
  cone: PropTypes.bool,
  size: PropTypes.string,
  scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
  orderInfo: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.number.isRequired
  })
}

Order.defaultProps = {
  cone: true,
  size: 'regular',
  scoops: [1,2,3],
  orderInfo: {
    customerName: null,
    orderedAt: null
  }
}

export default Order