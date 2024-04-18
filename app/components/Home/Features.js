function Features() {
  return (
    <div className="bg-slate-100">
        <section className="flex h-[80vh] p-24 max-w-1440 mx-auto space-x-28 items-center relative">
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
                    <li><strong>Personalized Meal Plans:</strong> Tailored to your specific goals and preferences for effortless, enjoyable eating.</li>
                    <li><strong>AI-Powered Recommendations:</strong> Our intelligent AI learns from your interactions to suggest the best food options for you.</li>
                    <li><strong>Easy Ingredient Analysis:</strong> Scan grocery receipts or snap a photo of your fridge to discover recipes using ingredients you already have.</li>
                    <li><strong>Reduce Food Waste:</strong> Utilize leftover ingredients effectively and minimize food wastage with our recipe suggestions.</li>
                    <li><strong>Save Time and Money:</strong> Say goodbye to decision fatigue and costly meal planning mistakes – let our AI do the work for you.</li>
                </ul>
            </div>
        </section>
    </div>

  )
}

export default Features