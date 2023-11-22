import BtnRotate from "./BtnRotate";

// eslint-disable-next-line react/prop-types
const BtnRound = ({ nextVal = () => { }, previewVal = () => { } }) => (
    <div className="  rounded-[50px] h-28 pt-2 pb-1 border-gray-400 px-1 border-b-2">

        <div className="bg-green-900 sds-rounded_center grid grid-rows-3 w-full h-full rounded-full ">

            <div className="mx-auto">
                <BtnRotate action={previewVal} rotate={" pt-1"} />
            </div>
            <div className=" flex justify-between items-center px-1">
                <BtnRotate rotate={"-rotate-[90deg]"} />
                <span className="m-auto sds-text-shadow-inset text-green-900/50 text-center uppercase col-span-2 text-[13px]">
                    Replay
                </span>
                <BtnRotate rotate={"rotate-[90deg]"} />
            </div>
            <div className=" flex items-end justify-center pb-2">
                <BtnRotate action={nextVal} rotate={"rotate-[180deg]"} />
            </div>

        </div>

    </div>
)

export default BtnRound;