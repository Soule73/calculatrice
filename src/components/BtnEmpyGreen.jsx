/* eslint-disable react/prop-types */
const BtnEmpyGreen = ({ children, size = "9px", action = () => { } }) => (
    <div className=" grid grid-rows-3 h-full">
        <div className=" text-center uppercase font-bold" style={{ fontSize: size }}>
            {children}
        </div>
        <button onClick={action} className="bg-green-900 w-10 sm:w-12 btn row-span-2 rounded-2xl "></button>
    </div>
)

export default BtnEmpyGreen;