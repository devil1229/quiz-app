export default function Ready() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="">
            <div className="flex mb-10 items-center justify-center">
                <img src='logo.png' alt="img" height={40} width={40}/>
                <p className="text-4xl font-bold ml-3">BountyMeter</p>
            </div>
            <div className="flex items-center justify-center">
            <img src='avatar.jpg' alt="img" height={180} width={180} className="rounded-full border"/>  
            </div>
            <div className="mt-10 flex flex-col items-center justify-center">
                <p className="text-sm font-thin m-2">Question 1 of 3</p>
                <p className="text-2xl font-semibold">Get Ready to Play Joe Ninja!</p>
                <p className="text-md font-light m-2">Answer fast to get more points!</p>
            </div>
        </div>
      </main>
    )
  }