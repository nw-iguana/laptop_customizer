import React from 'react'


export default function SummaryItem(props) {
    console.log(props.selected);
    console.log(props.name);
  return (
        <div className="summary__option" key={props.name}>
        <div className="summary__option__label">{props.name}  </div>
        <div className="summary__option__value">{props.selected[props.name].name}</div>
        <div className="summary__option__cost">
        { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(props.selected[props.name].cost) }
        </div>
        </div>
  )
}
