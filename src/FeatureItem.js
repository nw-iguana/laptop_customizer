import React from 'react'

export default function FeatureItem(props) {
  return (
    <li key={props.key} className="feature__item">
                <div className={props.featureClass}
                  
                  onClick={e => props.updateFeature(props.featureKey, props.item)}>
                    { props.item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(props.item.cost) })
                </div>
              </li>
  )
}
