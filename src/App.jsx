import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import Input from './components/Input'

function App() {
  const [amt, setAmt] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmt, setConvertedAmt] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const convert = () => setConvertedAmt(amt * currencyInfo[to])
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmt(amt)
    setAmt(convertedAmt)
  }
  const submitHandler = e => {
    e.preventDefault()
    setConvertedAmt(amt * currencyInfo[to])
  }
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url()' }}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={submitHandler}>
            <div className="w-full mb-1">
              <Input amt={amt} label={'from'} onAmtChange={a => setAmt(a)} currencyOptions={options} onCurrencyChange={c => setFrom(c)} selectedCurrency={from}  />
            </div>
            <div className="relative w-full h-0.5">
              <button onClick={swap} className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'>
                Swap
              </button>
            </div>
            <div className="w-full mb-1">
              <Input amt={convertedAmt} label={'to'} onAmtChange={a => setConvertedAmt(a)} currencyOptions={options} onCurrencyChange={c => setTo(c)} selectedCurrency={to} amtDisabled />
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div >
  )
}

export default App