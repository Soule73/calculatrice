/* eslint-disable react/prop-types */
const OutPut = ({ onOff, shift, value, isRadian, reult, valueRef }) => (
    <div className=" border-x-2 border-gray-400 pt-1 mx-1 px-1 pb-3">

        <div className="grid grid-cols-2 w-full h-[65px]">
            <div className="sds-text-shadow-inset grid text-slate-600 w-full h-full uppercase font-semibold pb-2 pl-5 text-lg">
                <span className=" font-extrabold">Casio</span>
                <span className=" text-red-800 italic font-serif lowercase ">fx-92</span>

            </div>


            <div className=" grid m-auto text-xl text-center">
                <span className="sds-text-shadow-inset"></span>
                <span className=" font-bold text-[13px]"><span className=" italic">Powered by </span><span
                    className=" text-blue-700 font-serif">SDS</span></span>
            </div>

        </div>

        <div className="resulDiv pb-2 px-[3px] rounded">

            <div>
                <div className="resul bg-[#99a883] rounded-md  min-w-full h-[120px] ">


                    {onOff ?
                        <>
                            <span className={` ${shift ? " " : "hidden"} ml-10 mt-[1px] px-[1.7px] bg-black text-[#99a883]  absolute w-auto`}
                                style={{ fontSize: "9px" }}>S</span>
                            <span className=" ml-20 mt-[1px] px-[1.7px] bg-black text-[#99a883] block absolute w-auto"
                                style={{ fontSize: "9px" }}>{isRadian} </span>
                            <input readOnly type="text" value={value} ref={valueRef} onChange={() => { }} placeholder="0"
                                className=" rounded-tl-md bg-inherit  rounded-tr-md px-1 text-black placeholder:text-black  mx-auto w-[94.99%] text-xl h-1/2  hover:outline-none focus:outline-none" />
                            <input type="text" value={reult} readOnly
                                className="  rounded-bl-md bg-inherit  rounded-br-md px-1 text-black placeholder:text-black  hover:outline-none focus:outline-none text-right w-[95.99%] h-1/2 bottom-0 pt-2 text-2xl" />
                        </> :
                        <div className=" grid place-items-center w-full h-full text-slate-900">
                            <div className=" flex items-end ">
                                <span className=" text-6xl font-extrabold">CASIO</span>
                                <span className=" font-bold text-2xl" dangerouslySetInnerHTML={{ __html: "&reg" }} />
                            </div>
                        </div>

                    }
                </div>
            </div>

        </div>

    </div>
)

export default OutPut;