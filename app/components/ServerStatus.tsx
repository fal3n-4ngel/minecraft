"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';



function ServerStatus() {
    const [data, setData] = useState({
        description: 'loading', favicon: 'loading', latency: 'loading', players
            :
            { max: 0, online: 0, sample: Array(20) }
    });
    const [status, setStatus] = useState("Pinging");

    useEffect(() => {
        const pingWebsite = async () => {
            const fullUrl = 'https://api.minetools.eu/ping/waifunoweebs.aternos.me/14060';
            try {
                const response = await axios.get(fullUrl);
                setData(response.data);
                console.log(response.data)
                setStatus("Online")
                if (data.players.max == 0) {
                    setStatus("Offline")
                }
                if (response.data == "§7This server is currently starting.\n§7§lAD§r§7") {
                    setStatus("Starting..")
                }
                if (response.data.players.max != 20) {
                    console.log(data.players.max)
                    setStatus("Offline")
                }
                else {
                    setStatus("Online")
                    console.log("player:", data.players.sample)
                }

            } catch (error) {
                console.log("Error:", error);
                setStatus("Offline")
            }

        };

        pingWebsite();
        {

        }
    }, []);

    return (
        <div className="flex w-full h-full flex-col justify-center items-center md:p-10 p-10">




            {status == "Offline" ? <div className="flex w-full h-full flex-col justify-center items-center">
                <div className=" md:w-[200px] bg-red-600 p-3 mt-2 z-10 mb-[-10px] text-center rounded-xl text-sm">
                    Currently Offline
                </div>
                <div className=" bg-orange-600 md:p-5 p-2 text-center rounded-md md:text-xl">
                    www.minecraft.adithyakrishnan.com/14060
                </div>

            </div> : <div className="flex w-full h-full flex-col justify-center items-center">
            <div className=" md:w-[200px] bg-blue-600 p-3 mt-2 z-10 mb-[-10px] text-center rounded-xl text-sm">
            Online Players : {data.players.online}
                </div>
                <div className=" bg-green-500 md:p-5 p-2 text-center rounded-md md:text-xl">
                    www.minecraft.adithyakrishnan.com:14060
                </div>
                
            </div>}




        </div>










    );
}

export default ServerStatus;

