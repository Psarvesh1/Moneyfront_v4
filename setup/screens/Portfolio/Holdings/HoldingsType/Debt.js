import React, {useContext} from 'react'
import styled from 'styled-components'
import HoldingsCard from '../../../../components/HoldingsCard'
import { useNavigation } from '@react-navigation/native'
import HoldingsNoData from '../HoldingsNoData'
import UserContext from '../../../../context/UserContext'
const Debt = () => {
  const navigation = useNavigation()
  let {debtHolding, holdingData} = useContext(UserContext)
  
  const HoldingData = () => {
    return(
      <Container>
          {debtHolding ? debtHolding.map((item) => (
          <HoldingsCard SchemeName={item.SchemeName} AssetType = {item.AssetType}
            CATEGORY = {item.CATEGORY} Risk = {item.Risk} CurrentValue = {item.MarketValue}
           InvestedAmount = {item.Current_Invested_Amount} item = {item} navigation={navigation}/>
          )) : null
          }
    </Container>
    )
  }
    if(holdingData === null){
      return <HoldingsNoData/>
    }else {
      return <HoldingData/>
    }
    
}

const Container = styled.View`
    flex: 1;
    padding: 10px 10px;
`

export default Debt