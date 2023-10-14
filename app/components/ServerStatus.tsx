"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

let img = "data:image/png;base64,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"



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
                    www.minecraft.adithyakrishnan.com/14060
                </div>
                
            </div>}




        </div>










    );
}

export default ServerStatus;

