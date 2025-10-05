import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 onClick={() => {
                props.setVehiclePanelOpen(false);
            }} className='p-1 text-center w-[93%] absolute top-0 z-[100]'><i className='ri-arrow-down-wide-line text-3xl z-[100]'></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
            <div onClick={
                () => {
                    props.setconfirmedridePanel(true);
                }
            } className='flex items-center border border-gray-800 rounded-xl p-4 my-3 justify-between'>
                <div className='flex items-center gap-3'>
                    <img
                        className='h-10'
                        src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTEwL3Jhd3BpeGVsb2ZmaWNlNF9mdWxsX3F1YXJ0ZXJfZnJvbnRfdmlld19waG90b19vZl9hX2dyZXlfbW9kZXJuX18yMGIxNDdhYy1hYzRjLTQ0NGQtODRkYS04YjllNzg4MWM3NmIucG5n.png"
                        alt="Uber Go"
                    />
                    <div>
                        <h4 className='font-semibold'>Uber Go <span className='ml-1 text-gray-500 text-sm'><i className='ri-user-3-fill'></i>4</span></h4>
                        <p className='text-sm text-gray-600'>Affordable, compact rides</p>
                    </div>
                </div>
                <div className='text-right'>
                    <h5 className='font-medium'>2 mins away</h5>
                    <h2 className='text-lg font-bold'>$190</h2>
                </div>
            </div>


            <div onClick={
                () => {
                    props.setconfirmedridePanel(true);
                }} className='flex items-center border border-gray-800 rounded-xl p-4 my-3 justify-between'>
                <div className='flex items-center gap-3'>
                    <img
                        className='h-10'
                        src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTEwL3Jhd3BpeGVsb2ZmaWNlNF9mdWxsX3F1YXJ0ZXJfZnJvbnRfdmlld19waG90b19vZl9hX2dyZXlfbW9kZXJuX18yMGIxNDdhYy1hYzRjLTQ0NGQtODRkYS04YjllNzg4MWM3NmIucG5n.png"
                        alt="Uber Go"
                    />
                    <div>
                        <h4 className='font-semibold'>Uber Go <span className='ml-1 text-gray-500 text-sm'><i className='ri-user-3-fill'></i>4</span></h4>
                        <p className='text-sm text-gray-600'>Affordable, compact rides</p>
                    </div>
                </div>
                <div className='text-right'>
                    <h5 className='font-medium'>2 mins away</h5>
                    <h2 className='text-lg font-bold'>$190</h2>
                </div>
            </div>
        </div>
    )
}

export default VehiclePanel
