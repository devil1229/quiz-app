export default function Landing() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="">
            <div className="flex mb-10 items-center justify-center">
                <img src='logo.png' alt="img" height={40} width={40}/>
                <p className="text-4xl font-bold ml-3">BountyMeter</p>
            </div>
            <div className="text-center">
                <p className="text-3xl">Enter the code to join</p>
                <p className="font-thin pt-3">It's on the screen in front of you</p>
            </div>
            <div className="mt-10 w-full">
                <input type="text" className="w-full py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="1234 5658"/>
                <button type="button" className="mt-8 ml-[37%] bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Join</button>
            </div>
        </div>
      </main>
    )
  }