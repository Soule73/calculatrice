/* eslint-disable react/prop-types */
const BtnGreen = ({ action = () => { }, value, supL = "", supR = "", bg = null }) => {
    return <div className="grid grid-rows-3 w-full h-full ">
        <div className={` text-center ${supL && supR && "flex justify-between px-[2px] "}  font-bold text-[10px]`}>
            <span className=" text-red-500" dangerouslySetInnerHTML={{ __html: supL }} />
            <span className=" text-red-800"
                dangerouslySetInnerHTML={{ __html: supR }}
            />
        </div>
        <div className=" row-span-2 mx-1">
            <button id="btnZero" onClick={action} value={value} className={`btn ${bg || "bg-green-900 text-lg"} font-bold  rounded-t-lg rounded-b-xl text-white text-center py-1 w-full h-full`}
                dangerouslySetInnerHTML={{ __html: value }}
            />
        </div>
    </div>
}

export default BtnGreen;