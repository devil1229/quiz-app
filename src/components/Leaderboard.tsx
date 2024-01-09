
const Users = [
    {
        name : "Ambriel",
        point: 1000,
        color: "",
        avatar: ""
    },
    {
        name : "Ambriel",
        point: 1000,
        color: "",
        avatar: ""
    },
    {
        name : "Ambriel",
        point: 1000,
        color: "",
        avatar: ""
    },
    {
        name : "Ambriel",
        point: 1000,
        color: "",
        avatar: ""
    },
    {
        name : "Ambriel",
        point: 1000,
        color: "",
        avatar: ""
    },
    {
        name : "Ambriel",
        point: 1000,
        color: "",
        avatar: ""
    },
    {
        name : "Ambriel",
        point: 1000,
        color: "",
        avatar: ""
    },
    {
        name : "Ambriel",
        point: 1000,
        color: "",
        avatar: ""
    },
    {
        name : "Ambriel",
        point: 1000,
        color: "",
        avatar: ""
    },
    {
        name : "Ambriel",
        point: 1000,
        color: "",
        avatar: ""
    },
]


export default function Leaderboard() {
    const elements = [];
    for (let i = 0; i < 10; i++) {
        elements.push(<div key={i} className="flex mt-3 w-[660px]">
        <p className="mr-2 pt-0.5 w-[60px]">1000 p</p>
        <div className="w-[75%] flex rounded-e-full">
            <div className="bg-blue-800 w-full animate-jiggle"></div>
            <div className="bg-blue-800 rounded-e-full">
                <img src="avatar.jpg" alt="avatar" width={40} className="rounded-full border"/>
            </div>
            <p className="ml-3 pt-0.5 text-center">Ambriel</p>
        </div>    
    </div>);
    }

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-6">
        <div className="">
            <div className="flex items-center justify-center">
                <img src='logo.png' alt="img" height={25} width={25}/>
                <p className="text-2xl font-medium ml-3">BountyMeter</p>
            </div>
            <p className="mt-5 mb-10 -ml-6 text-4xl">Leaderboard</p>
            {elements}         
        </div>
      </main>
    )
  }