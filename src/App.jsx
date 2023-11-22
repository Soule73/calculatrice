
import { useRef, useState } from 'react'
import './App.css'
import BorderSlate from './components/BorderSlate';

import OutPut from './components/sections/OutPut';
import BtnActionSection from './components/sections/BtnActionSection';
import BtnSlateSection from './components/sections/BtnSlateSection';
import BtnGreenSection from './components/sections/BtnGreenSection';
import {
  // eslint-disable-next-line no-unused-vars
  MathD,
  replaceVal, pgcdOrPpcm, factorielle, handleDelete
} from './utils/fonction';

function App() {
  const [value, setValue] = useState("")
  const [reult, setResult] = useState("")
  const [shift, setShift] = useState(false)
  const [onOff, setOnOff] = useState(false)
  const [isRadian, setIsRadian] = useState("R")

  const [cacheValue, setCacheValue] = useState([])
  const [inctremente, setInctremente] = useState(1);

  const previewVal = async () => {
    if (cacheValue.length > 0) {
      const v = cacheValue.length > inctremente
      v && setInctremente(prev => prev + 1)
      const x = cacheValue.length - inctremente

      setValue(cacheValue[x])

    }
  }

  const nextVal = async () => {

    if (cacheValue.length > 0) {
      inctremente > 0 && setInctremente(prev => prev - 1)
      const x = cacheValue.length - inctremente
      setValue(cacheValue[x])


    }
  }
  const handleChangeRadian = () => setIsRadian(isRadian === "R" ? "D" : "R")

  const handleValue = async (val, shiftVal) => {



    if (onOff) {
      const value = shift ? shiftVal : val
      setValue((prev => prev + value))
      setShift(false)
      valueRef.current.focus()
      valueRef.current.focus()
    }
  }
  const arrayVal = [

    { val: "%", rep: "" },
    { val: "Abs(", rep: "Math.abs(" },


    { val: "³√(", rep: "Math.cbrt(" },
    { val: "√(", rep: "Math.sqrt(" },
    { val: "²", rep: "**2" },
    { val: "³", rep: "**3" },

    { val: "^", rep: "**" },
    { val: "^√(", rep: "Math.cbrt(" },

    // PGCD
    { val: "Calc(", rep: "(" },

    // PPCM
    { val: "Y", rep: "" },

    { val: ":", rep: "" },
    { val: "=", rep: "" },

    { val: "x", rep: "" },
    { val: "ax10^", rep: "" },

    { val: "log(", rep: "Math.log10(" },
    // 10^

    { val: "ln(", rep: "Math.log(" },
    { val: "exp(", rep: "Math.exp(" },

    // (-) , >Simp
    // |- ,Décomp
    // /

    { val: "sin(", rep: isRadian ? "Math.sin(" : "MathD.sin(" },
    { val: "sin-¹(", rep: "MathD.asin(" },

    { val: "cos(", rep: isRadian ? "Math.cos(" : "MathD.cos(" },
    { val: "cos-¹(", rep: "MathD.acos(" },

    { val: "tan(", rep: isRadian ? "Math.tan(" : "MathD.tan(" },
    { val: "tan-¹(", rep: "MathD.atan(" },

    // RCL , STO
    // °,,, <--

    // (
    { val: "-¹", rep: "**-1" },

    // ) , !
    // S<=>D , a+b/c+d/c
    // M+ , M-
    //7, 8, 9, supp, AC

    // 4, 5, 6
    { val: "×", rep: "*" },
    { val: "÷", rep: "/" },

    // 1, 2, 3, +, -

    // 0, x10, Rép, EXE
    { val: "π", rep: "Math.PI" },
    { val: ",", rep: "." },
  ]



  const handleResult = async () => {
    if (onOff && value) {
      let res = value;

      // PGCD
      if (res.includes("PGCD(")) {
        res = pgcdOrPpcm(res)
      }
      if (res.includes("PPCM(")) {
        res = pgcdOrPpcm(res, true)
      }

      res = await replaceVal(res, arrayVal);
      if (res.includes("!")) {
        res = factorielle(eval(res.split("!")[0]))
      }
      try {

        const e = eval(res);

        setResult(e)
        setCacheValue(prev => [...prev, value])
      } catch (e) {
        if (e.name === "SyntaxError") {
          setResult("ERREUR Syntax")
        } else {
          setResult(e.name)
          if (import.meta.env.VITE_NODE_ENV === "local") {

            console.error((e.name))
          }
        }
      }
    }

  }
  const clearVal = () => {
    if (onOff) {
      setValue('')
      setResult("")
    }
  }



  const del = async () => setValue(await handleDelete(value, arrayVal))

  const valueRef = useRef();

  return (
    <>
      <div className="neoDiv  select-none border-b-8 border-t border-x-4 border-slate-900 rounded-t-xl rounded-b-[45px] min-h-max relative overflow-hidden max-w-[350px]">
        <OutPut onOff={onOff} shift={shift} value={value} isRadian={isRadian} valueRef={valueRef} reult={reult} />
        <BtnActionSection
          setOnOff={setOnOff}
          setShift={setShift}
          handleChangeRadian={handleChangeRadian}
          handleValue={handleValue}
          previewVal={previewVal}
          nextVal={nextVal}
        />
        <div className=" h-max px-3 ">
          <BorderSlate />
          <BorderSlate right />
          <BtnSlateSection
            handleValue={handleValue} />
          <BtnGreenSection
            handleDelete={del}
            shift={shift}
            setOnOff={setOnOff}
            handleResult={handleResult}
            handleValue={handleValue}
            clearVal={clearVal} />
          <div className=" font-extrabold text-xl py-1 w-full text-center text-slate-900 sds-text-shadow">Collége 2D+</div>
        </div>
      </div>
      {/* {
        import.meta.env.VITE_NODE_ENV === "local" ? <div dangerouslySetInnerHTML={{ __html: value }} className=' text-lg' /> : ""
      } */}

    </>
  )
}

export default App
