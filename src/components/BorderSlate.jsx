/* eslint-disable react/prop-types */
const BorderSlate = ({ right }) => (
    <div
        className={`h-full w-2 max-h-[405px] bg-slate-900 absolute ${right ? "right-0 -mr-1" : "left-0 -ml-1"} border border-gray-500 rounded-full`}>
    </div>
);

export default BorderSlate;