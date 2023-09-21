import { FaceSmileIcon } from "@heroicons/react/24/solid"

function Thanks() {
  return (
    <>
    <div className ='w-full my-2 overflow-hidden'>
        <div className ='text-center flex items-center justify-center flex-col'>
            <h1 className ='text-green-500 tracking-wider text-xl font-bold text-center leading-7'><span className ='text-white'>Thanks</span> for your <span className ='text-white'>Support!</span></h1>
            <FaceSmileIcon className ='text-green-500 mt-2 h-8 mb-5' />
            </div></div></>
  )
}

export default Thanks