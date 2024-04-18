import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons"

function UseCases() {
  return (
    <div className="my-5 w-full flex items-center justify-center">
        <section className="flex justify-between h-[40vh] max-w-1440 mx-20 overflow-hidden relative space-x-5">
            <div className='bg-slate-200 w-1/2 rounded-bl-[50px] p-7 space-y-3 flex flex-col justify-center'>
                <figure className="i-container-big bg-gradient-to-r from-gray-600 to-gray-950">
                    <FontAwesomeIcon icon={faBriefcaseMedical} />
                </figure>
                <h2 className="text-lg font-bold text-green-600">Use Case</h2>
                <h3>AI Nutrition management for Health-conscious individuals</h3>
                <p>Our app simplifies tracking and offers tailored guidance to make informed choices, including sugar intake for conditions like diabetes. </p>
            </div>
            <div className='bg-slate-200 w-1/2 rounded-br-[50px] p-7 space-y-3 flex flex-col justify-center'>
                <figure className="i-container-big bg-gradient-to-r from-gray-600 to-gray-950">
                    <FontAwesomeIcon icon={faBriefcaseMedical} />
                </figure>
                <h2 className="text-lg font-bold text-green-600">Use Case</h2>
                <h3>AI Nutrition management for Health-conscious individuals</h3>
                <p>Our app simplifies tracking and offers tailored guidance to make informed choices, including sugar intake for conditions like diabetes. </p>
            </div>
        </section>
    </div>
  )
}

export default UseCases