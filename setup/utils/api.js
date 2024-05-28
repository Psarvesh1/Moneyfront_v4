import axios from "axios";
import Encrypt from "../constant/Encrypt";
import api from "./axiosInstance";

export const snapshotApi = async ({id, sessionId}) => {

    const data = `${id}|${sessionId}`

    const encryptedData = Encrypt(data, process.env.key)

    console.log(encryptedData)

    const url = `${process.env.API_BASE_URL}/api/ClientReports/SnapShot`

    const bodyParameters = {
        ParamValue : encryptedData
    }
    
    let result = null
    await api.post(
        url,
        bodyParameters,
        // config
    ).then(function(response){
        result  = response.data;
        // console.log(result)
        // result.AmountInvested = data.AmountInvested
        // result.CurrentValue = data.CurrentValue
        // result.DividendReinvest = data.DividendReinvest
        // result.DividendPaidOut = data.DividendPaidOut
        // result.DaysGainPercentage = data.DaysGainPercentage
        // result.DaysGainValue = data.DaysGainValue
        // result.AbsoluteReturn = data.AbsoluteReturn
        // result.AnnualisedReturn = data.AnnualisedReturn
        // result.RealisedGainLoss = data.RealisedGainLoss
        // result.UnRealisedGainLoss = data.UnRealisedGainLoss
        // result.AnnualSavings = data.AnnualSavings
        // result.CumulativeSavings = data.CumulativeSavings
        
    }).catch(function(error){
        console.log(error.message)
    })
    // console.log('dada'+ result.AbsoluteReturn)
    return result
}

// export const holdingsApi = async 

export const holdingsApi = async ({id, sessionId}) => {

    const data = `${id}|${sessionId}`

    const encryptedData = Encrypt(data, process.env.key)

    console.log(encryptedData)

    const url = `${process.env.API_BASE_URL}/api/ClientReports/GetClientHoldings`

    const bodyParameters = {
        ParamValue : encryptedData
    }
    
    let result = null
    await api.post(
        url,
        bodyParameters,
        // config
    ).then(function(response){
        result  = response.data;
        // console.log(result)
        // result.AmountInvested = data.AmountInvested
        // result.CurrentValue = data.CurrentValue
        // result.DividendReinvest = data.DividendReinvest
        // result.DividendPaidOut = data.DividendPaidOut
        // result.DaysGainPercentage = data.DaysGainPercentage
        // result.DaysGainValue = data.DaysGainValue
        // result.AbsoluteReturn = data.AbsoluteReturn
        // result.AnnualisedReturn = data.AnnualisedReturn
        // result.RealisedGainLoss = data.RealisedGainLoss
        // result.UnRealisedGainLoss = data.UnRealisedGainLoss
        // result.AnnualSavings = data.AnnualSavings
        // result.CumulativeSavings = data.CumulativeSavings
        
    }).catch(function(error){
        console.log(error.message)
    })
    // console.log('dada'+ result.AbsoluteReturn)
    return result
}

export const getClientData = async ({id, sessionId}) => {
    const data = `${id}|${sessionId}`

    const encryptedData = Encrypt(data, process.env.key)

    console.log(encryptedData)

    const url = `${process.env.API_BASE_URL}/api/ClientOnboard/GetOnboardData`

    const bodyParameters = {
        ParamValue : encryptedData
    }
    
    let result = null
    await api.post(
        url,
        bodyParameters,
        // config
    ).then(function(response){
        result  = response.data;
        console.log(response) 
    }).catch(function(error){
        console.log(error.message)
    })
    // console.log('dada'+ result.AbsoluteReturn)
    return result
}

export const getPortfolioSummary = async ({id, sessionId, freshDate}) => {
    let type= 'AMC'
    let date = '2024-05-22'
    const data = `${id}|${sessionId}|${type}|${freshDate}|${process.env.ProjectID}`;

    const encryptedData = Encrypt(data, process.env.key)

    const url = `${process.env.API_BASE_URL}/api/ClientReports/GetPortfolioSummaryReport`

    const bodyParameters = {
        ParamValue : encryptedData
    }
    
    let result = null
    await api.post(
        url,
        bodyParameters,
        // config
    ).then(function(response){
        result  = response.data;
        console.log(response) 
    }).catch(function(error){
        console.log(error.message)
    })
    // console.log('dada'+ result.AbsoluteReturn)
    return result
}