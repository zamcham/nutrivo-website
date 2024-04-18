const {appFeatures} = require('../../data/features')
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

function Features() {
  return (
    <div className="bg-slate-100 w-full flex items-center justify-center">
        <section className="flex h-[100vh] max-w-1440 p-20 space-x-28 items-center relative">
            <div className="space-y-7">
                <h2>Unlock your nutrition potential</h2>
                <p>Discover how our app's innovative features can revolutionize your approach to eating healthier</p>
                <div className="flex space-x-10">
                    <div className="flex flex-col text-center">
                        <span className="text-3xl font-semibold text-green-500">2.3M</span>
                        <span className="text-[1.2rem] font-light">Recipes</span>
                    </div>
                    <div className="flex flex-col text-center">
                        <span className="text-3xl font-semibold text-green-500">800K</span>
                        <span className="text-[1.2rem] font-light">Food Items</span>
                    </div>
                </div>
            </div>
            <div>
                <ul>
                    {appFeatures.map((feature) => (
                        <li key={feature.title} className="flex space-x-5">
                            <div className="i-container bg-gradient-to-r from-gray-600 to-gray-950 flex-2 rounded-md">
                                <FontAwesomeIcon icon={feature.icon} />
                            </div>
                            <div className='flex-1 space-y-1 mb-5'>
                                <h3 className='font-semibold leading-none'>{feature.title}</h3>
                                <p className='leading-5'>{feature.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </div>

  )
}

export default Features