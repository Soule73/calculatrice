/* eslint-disable react/prop-types */
const BtnRotate = ({ rotate, action = () => { } }) => {
    return <div onClick={action} className={` border-x-8 border-b-[14px] border-b-green-700 border-x-transparent w-0 h-0 cursor-pointer ${rotate} `}>
    </div>
}
export default BtnRotate;