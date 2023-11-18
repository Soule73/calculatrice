/* eslint-disable react/prop-types */
import BtnSlate from "../BtnSlate";

const BtnSlateSection = ({ handleValue = () => { } }) => {
    const BTN_SLATE_VAL = [
        {
            value: `Calc`, supL: `PGCD`,
            supR: "", action: () => handleValue("Calc(", "PGCD("), grid: ""
        },
        {
            value: `Y`, supL: `PPCM`,
            supR: "", action: () => handleValue("", "PPCM("), grid: ""
        },
        {
            value: `=`, supL: `:`,
            supR: "", action: () => { }, grid: ""
        },
        {
            value: `x`, supL: `ax10<sup>n</sup>`,
            supR: "", action: () => { }, grid: ""
        },
        {
            value: `log`, supL: `10<sup class="text-[10px] sm:text-[12px]">&squarf;</sup>`,
            supR: "", action: () => handleValue("log(", "10^"), grid: ""
        },
        {
            value: `ln`, supL: `&exponentiale;<sup class="text-[8px] sm:text-[10px]">&square;</sup>`,
            supR: "", action: () => handleValue("ln(", "exp("), grid: ""
        },
        { value: `Simp`, supL: "(-)", supR: "A", action: () => { }, grid: "" },

        {
            value: ` <span class=" text-xs z-[3] mt-[2px] ml-3">|</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" class="w-4 h-6  -ml-[4px]  stroke-[4]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15"></path>
                      </svg>
                    `, supL: "Décomp", supR: "B", action: () => handleValue("|-", "|-"), grid: "flex pt-1"
        },

        {
            value: `<span class=" -mt-[3.5px] sm:-mt-[6px] h-[3px] text-[6px] sm:text-[10px]">&square;</span>
                    <span class=" -mt-[7px] sm:-mt-[9px] mx-auto h-[1px]">_</span>
                    <span class=" mt-[5px] sm:mt-[1px] text-[12px] sm:text-[18px]">&squf;</span>`,
            supL: "&nbsp;", supR: "C", action: () => { }, grid: "grid"
        },
        { value: `sin`, supL: "sin-&sup1;", supR: "D", action: () => handleValue("sin(", "sin-¹("), grid: "" },
        { value: `cos`, supL: "cos-&sup1;", supR: "E", action: () => handleValue("cos(", "cos-¹("), grid: "" },
        { value: `tan`, supL: "tan-&sup1;", supR: "F", action: () => handleValue("tan(", "tan-¹("), grid: "" },
        { value: `STO`, supL: "RCL", supR: "", action: () => { }, grid: "" },
        {
            value: `<span class=" text-xl">&deg;</span><sup class=" text-xl">,,,</sup>`,
            supL: "&larr;", supR: "", action: () => { }, grid: ""
        },

        {
            value: "&#40;", supL: `<span class=" italic">x<sup>-1</sup></span>`, supR: "", action: () => handleValue("(", "-¹")
        },
        { value: "&#41;", supL: "x&#33;", supR: "", action: () => handleValue(")", "!"), grid: "" },

        {
            value: "S&harr;D",
            supL: `<span class=' text-[9px]'>a+<span class="diagonal-fractions">a/c</span>&harr;<span class="diagonal-fractions">d/c</span></span>`,
            supR: "", action: () => { }, grid: ""
        },
        { value: "M+", supL: "M-", supR: "M", action: () => { }, grid: "" },
    ]
    return (
        <div className=" gap-x-1 grid grid-cols-6">
            {

                BTN_SLATE_VAL.map(({ value, supL, supR, grid, action }, index) =>
                    <BtnSlate grid={grid} key={index} value={value} supL={supL} supR={supR} action={action} />)
            }
        </div>
    )
}

export default BtnSlateSection;