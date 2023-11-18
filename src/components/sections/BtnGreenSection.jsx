/* eslint-disable react/prop-types */
import BtnGreen from "../BtnGreen";

const BtnGreenSection = ({ handleDelete = () => { }, shift, setOnOff = () => { }, handleValue = () => { }, clearVal = () => { }, handleResult = () => { } }) => {
    const BTN_GREEN_RED = [
        { value: 7, supL: "", supR: "", bg: null, action: () => handleValue(7, 7) },
        { value: 8, supL: "", supR: "", bg: null, action: () => handleValue(8, 8) },
        { value: 9, supL: "EFF", supR: "", bg: null, action: () => handleValue(9, 9) },
        { value: "<span class=' text-[11px] sm:text-[14px]'>SUPPR</span>", supL: "EFF", supR: "", bg: "bg-red-800 text-sm", action: handleDelete },
        { value: "AC", supL: "OFF", supR: "", bg: "bg-red-800 text-sm", action: shift ? () => setOnOff(false) : clearVal },

        { value: 4, supL: "", supR: "", bg: null, action: () => handleValue(4, 4) },
        { value: 5, supL: "", supR: "", bg: null, action: () => handleValue(5, 5) },
        { value: 6, supL: "", supR: "", bg: null, action: () => handleValue(6, 6) },
        { value: "×", supL: "Ent", supR: "", bg: null, action: () => handleValue("×", "×") },
        { value: "÷", supL: "EntEx", supR: "", bg: null, action: () => handleValue("÷", "÷") },

        { value: 1, supL: "<span>|<sup>&minus;STAT&minus;</sup>|</span>", supR: "", bg: null, action: () => handleValue(1, 1) },
        { value: 2, supL: "<span>|<sup>&minus;VERIFY&minus;</sup>|</span>", supR: "", bg: null, action: () => handleValue(2, 2) },
        { value: 3, supL: ";", supR: "", bg: null, action: () => handleValue(3, ";") },
        { value: "+", supL: "Pol", supR: "", bg: null, action: () => handleValue("+", "+") },
        { value: "-", supL: "Rec", supR: "", bg: null, action: () => handleValue("-", "-") },
        { value: 0, supL: "<span  class='text-[9px] sm:text-[10px]'>Rnd</span>", supR: "<span  class='text-[9px] sm:text-[10px]'>Arond</span>", bg: null, action: () => handleValue(0, 0) },
        { value: ",", supL: "<span  class='text-[9px] sm:text-[10px]'>Ran#</span>", supR: "<span  class=' text-[9px] sm:text-[10px]'>RanInt</span>", bg: null, action: () => handleValue(",", ",") },
        { value: "x10<sup>x</sup>", supL: "&pi;", supR: "", bg: null, action: () => handleValue("", "π") },
        { value: "Rép", supL: "DRG", supR: "", bg: null, action: () => { } },
        { value: "EXE", supL: "", supR: "", bg: null, action: handleResult },

    ]
    return (
        <div className=' gap-y-[1px] grid grid-cols-5'>
            {
                BTN_GREEN_RED.map(({ value, supL, supR, bg, action }, index) => <BtnGreen
                    key={index}
                    value={value}
                    supL={supL}
                    supR={supR}
                    action={action}
                    bg={bg}
                />)
            }
        </div>
    )
}

export default BtnGreenSection;