import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons"

function CaseStudies() {
  return (
    <div className="my-5">
        <section className="flex justify-between h-[40vh] max-w-1440 mx-auto mx-16 overflow-hidden relative space-x-5">
            <div className='bg-slate-200 w-1/2 rounded-bl-[50px] p-5'>
                <div className="i-container bg-gray-500">
                    <FontAwesomeIcon icon={faBriefcaseMedical} />
                </div>
                <h6>AI Nutrition management for Health-conscious individuals</h6>
                <p>Our app simplifies tracking and offers tailored guidance to make informed choices, including sugar intake for conditions like diabetes. </p>
            </div>
            <div className='bg-slate-200 w-1/2 rounded-br-[50px]'>
                <p>two</p>
            </div>
        </section>
    </div>
  )
}

export default CaseStudies