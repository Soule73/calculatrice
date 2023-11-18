/* eslint-disable react/prop-types */
const BtnSlate = ({ value, supL = "", supR = "", grid, action = () => { } }) => {
    return <div className="grid grid-rows-3 w-full h-full ">
        <div className={`${supL && supR ? " justify-between text-[9px]" : "text-[10px] justify-center "} flex items-center text-center text-red-500 font-bold `}>
            <span
                dangerouslySetInnerHTML={{ __html: supL }}
            />
            <span
                className={`" text-red-800  text-[9px]`} dangerouslySetInnerHTML={{ __html: supR }} />
        </div>
        <div className=" row-span-2 ">
            <button id="btnMPlus"
                onClick={action}
                className={`btn py-[1px] sm:text-[15px] text-[12px] ${grid} sds-btn-bg-slate-700 w-full h-full`}
                style={{ fontSize: "15px" }}
                dangerouslySetInnerHTML={{ __html: value }}
            />
        </div>
    </div>
}

export default BtnSlate;