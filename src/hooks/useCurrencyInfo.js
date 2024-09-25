import { useEffect, useState } from "react"

const useCurrencyInfo = c => {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${c}.json`)
            .then(res => res.json())
            .then(res => setData(res[c]))
            .catch(err => console.log(err))
    }, [c])
    return data
}

export default useCurrencyInfo