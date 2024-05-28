import React, { Children } from 'react';
import { createContext, useState, useEffect } from 'react';

const UserContext = createContext()

export default UserContext

export const UserProvider = ({children}) => {
    const [portfolioSummary, setPortfolioSummary] = useState(null)
    const [portfolioTransactions, setPortfolioTransactions] = useState(null)
    const [holdingsData, setHoldingsData] = useState()
    const [cashHolding, setCashHolding] = useState()
    const [debtHolding, setDebtHolding] = useState()
    const [equityHolding, setEquityHolding] = useState()
    const [snapshot, setSnapshot] = useState(false)
    const [clientPortfolio, setClientPortfolio] = useState([])
    const [clientActualPortfolio, setClientActualPortfolio] = useState([])
    const [clientSuggestedPortfolio, setClientSuggestedPortfolio] = useState([])

    const removeUser = () => {
        setPortfolioSummary(null)
        setPortfolioTransactions(null)
        setHoldingsData()
        setCashHolding()
        setDebtHolding()
        setEquityHolding()
        setSnapshot(false)
        setClientActualPortfolio(null)
        setClientPortfolio(null)
        setClientSuggestedPortfolio(null)
    }
    let contextData = {
        portfolioSummary,
        setPortfolioSummary,
        portfolioTransactions,
        setPortfolioTransactions,
        holdingsData,
        setHoldingsData,
        cashHolding,
        debtHolding,
        equityHolding,
        setCashHolding,
        setDebtHolding,
        setEquityHolding,
        removeUser,
        clientActualPortfolio,
        clientPortfolio,
        clientSuggestedPortfolio,
        setClientPortfolio,
        setClientActualPortfolio,
        setClientSuggestedPortfolio,
        snapshot
    }
    
    return(
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    )
}