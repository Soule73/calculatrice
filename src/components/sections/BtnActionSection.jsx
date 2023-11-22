/* eslint-disable react/prop-types */
import BtnEmpyGreen from "../BtnEmpyGreen";
import BtnRound from "../BtnRound";
import BtnSlate from "../BtnSlate";

const BtnActionSection = ({ nextVal = () => { }, previewVal = () => { }, setShift, setOnOff = () => { }, handleChangeRadian = () => { }, handleValue = () => { } }) => (
    <div className=" mb-1 grid grid-cols-3 h-max px-1 w-full mx-auto">

        <div className=" grid grid-rows-2 ">

            <div className=" p-1 grid grid-cols-2 gap-1 border-l-2 border-gray-400 rounded-bl-lg">

                <BtnEmpyGreen action={() => setShift(true)}>
                    <span className=' text-red-600'>Seconde</span>
                </BtnEmpyGreen>
                <BtnEmpyGreen action={handleChangeRadian}>
                    <span className=' text-red-800'>Alpha</span>
                </BtnEmpyGreen>

            </div>

            <div className=" gap-x-1 grid grid-cols-2 ml-[6px] border-t border-gray-400 rounded-tr-2xl">
                <BtnSlate
                    supL={`Abs`}
                    value={"%"}
                    action={() => handleValue("%", "Abs(")}

                />
                <BtnSlate
                    supL={`<span>&Sqrt;</span>&squarf;`}
                    value={"x²"}
                    action={() => handleValue("²", "√")}
                />

            </div>

        </div>

        <BtnRound previewVal={previewVal} nextVal={nextVal} />

        <div className=" grid grid-rows-2 ">

            <div className="p-1 grid grid-cols-2 gap-x-1 border-r-2 border-gray-400 rounded-br-lg">
                <BtnEmpyGreen size='8px'>
                    <span className=" mr-1 uppercase">Mode</span><span
                        className=" uppercase text-red-600">config</span>
                </BtnEmpyGreen>
                <BtnEmpyGreen action={() => setOnOff(true)} >ON</BtnEmpyGreen>

            </div>

            <div className=" gap-x-1 grid grid-cols-2 mr-[6px] border-t border-gray-400 rounded-tl-2xl">
                <BtnSlate
                    supL={`&sup3;&Sqrt;&squarf;`}//³√(
                    value={`x&sup3;`}
                    action={() => handleValue("³", "³√(")}

                />
                <BtnSlate
                    value={`x<sup>&squarf;</sup>`}
                    supL={`<sup class="text-[6px] sm:text-[10px]">&square;</sup>&Sqrt;&squarf;`}
                    action={() => handleValue("^", "^√(")}

                />

            </div>

        </div>

    </div>
)

export default BtnActionSection;