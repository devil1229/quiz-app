export default function Question() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-12">
        <div className="">
            <div className="flex items-center justify-center">
                <img src='logo.png' alt="img" height={40} width={40}/>
                <p className="text-4xl font-semibold ml-3">BountyMeter</p>
            </div>
            <div className="w-[700px]">
                <h3 className="mt-10 text-xl font-medium text-gray-900 dark:text-white">How much do you expect to use each month?</h3>
                <img src="question.jpg" alt="question img" className="w-full mt-5"/>
                <ul className="w-full">
                    <li className="my-5">
                        <input type="radio" id="option1" name="hosting" value="option1" className="hidden peer" required />
                        <label htmlFor="option1" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                            <div className="block">
                                <div className="w-full text-lg font-semibold">0-50 MB</div>
                                
                            </div>
                        </label>
                    </li>
                    <li className="my-5">
                        <input type="radio" id="option2" name="hosting" value="option2" className="hidden peer"/>
                        <label htmlFor="option2" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">500-1000 MB</div>
                            </div>
                        </label>
                    </li>
                    <li className="my-5">
                        <input type="radio" id="option3" name="hosting" value="option3" className="hidden peer"/>
                        <label htmlFor="option3" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">1000-5000 MB</div>
                            </div>
                        </label>
                    </li>
                    <li className="my-5">
                        <input type="radio" id="option4" name="hosting" value="option4" className="hidden peer"/>
                        <label htmlFor="option4" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">5000-10000 MB</div>
                            </div>
                        </label>
                    </li>
                </ul>
                <div className="flex pr-5">
                <button type="button" className="text-white ml-auto font-medium text-lg px-5 py-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit & Next</button>
                </div>
                
            </div>
        </div>
      </main>
    )
  }