
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
            <div className="flex mt-10 w-[650px]">
                <p className="mr-2 w-[60px]">1000 p</p>
                <div className="w-[75%] flex rounded-e-full">
                    <div className="bg-blue-800 w-full"></div>
                    <div className="bg-blue-800 justify-end rounded-e-full">
                        <img src="avatar.jpg" alt="avatar" width={35} height={35} className="rounded-full border"/>
                    </div>
                    
                </div>
                <p className="ml-2">Ambriel</p>
            </div>
        </div>
      </main>
    )
  }