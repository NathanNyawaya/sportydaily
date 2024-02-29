import React from 'react'

const SubscribeNewsletter = () => {
    return (
        <div className="bg-gray-500 rounded px-1 flex items-center justify-between">
            <div className="flex items-center gap-x-2">
                <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-newsletter-gamification-flaticons-lineal-color-flat-icons.png" alt="newsletter" className="h-[35px] w-[35px] animate-bounce" />
                <p className="font-bold tracking-wide text-[0.8rem] text-gray-200"> Newsletter</p>
            </div>
            <div className="flex h-full bg-gray-800">
                <p className="text-[0.8rem] h-full font-medium cursor-pointer hover:bg-gray-700 text-center   rounded-r m-1 px-2 text-gray-50">
                    Join
                </p>
            </div>
        </div>
    )
}

export default SubscribeNewsletter