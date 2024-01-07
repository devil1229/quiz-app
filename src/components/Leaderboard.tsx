
const Users = [
    {
        name : "Ambriel",
        point: 1000,
        color: "",
        avatar: ""
    }
]


export default function Leaderboard() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-6">
        <div className="">
            <div className="flex items-center justify-center">
                <img src='logo.png' alt="img" height={25} width={25}/>
                <p className="text-2xl font-medium ml-3">BountyMeter</p>
            </div>
            <p>Leaderboard</p>
            <div className="flex mt-10 w-[620px]">
                <p className="mr-2">1000 p</p>
                <div className="w-[75%] flex border">
                    <div className="w-4/5 bg-blue-800"></div>
                    <img src="avatar.jpg" alt="avatar" width={30} height={30} className="rounded-full border"/>
                </div>
                <p className="ml-2">Ambriel</p>
            </div>
        </div>
      </main>
    )
  }