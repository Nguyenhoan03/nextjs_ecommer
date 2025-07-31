'use client'
import React, { useState } from 'react'
import TabsCustom from './TabsCustom'
import CardLeatest from './CardLeatest'
import '@/styles/unauth/homepage/CardLeatest.scss'


type Props = {
  dataLeatest: HomeProductResponse['leatest'];
}

const TAB_KEYS = ['new_arrival', 'best_seller', 'featured', 'special_offer']
const TAB_LABELS = ['New Arrival', 'Best Seller', 'Featured', 'Special Offer']

const LeatestProductsClient = ({ dataLeatest }: Props) => {
  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  const selectedKey = TAB_KEYS[tabValue]
  const selectedProducts = dataLeatest[selectedKey] || []

  return (
    <div className="leatest_product mt-4">
      <h2 className="text-center mb-4 leatest-products__title">Leatest Products</h2>
      <TabsCustom
        tabs={TAB_LABELS}
        value={tabValue}
        onChange={handleTabChange}
        className="tabs-center mb-4"
      />
      <div className="row mt-5">
        {selectedProducts.map((item: Product, idx: number) => (
          <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={idx}>
            <CardLeatest item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeatestProductsClient
