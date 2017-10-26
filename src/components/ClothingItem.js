import React from 'react';

const Item = (props) => {
  return (
    <div className="flex-parent">
      { props.items.map((item) =>
        <div className="flex-child">
          <p>
            <img
              className="item-img"
              src={require(`../assets/img/${ item.img }`)}
              alt={ item.type }/>
          </p>
          <p className="item-desc">
            <b>{ item.title }</b>
          </p>
        </div>
      )}
    </div>
  )
}

export default Item;