"use client"
import { useEffect, useState } from "react";

export default function Home() {

  const [initData, setInitData] = useState('')
  const [userId, setUserId] = useState('')
  const [startParam, setStartParam] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    const initWebApp = async () => {
      if (typeof window !== 'undefined') {
        const WebApp = (await import('@twa-dev/sdk')).default;
        WebApp.ready();
        setInitData(WebApp.initData);
        setUserId(WebApp.initDataUnsafe.user?.id.toString() || '');
        setStartParam(WebApp.initDataUnsafe.start_param || '');
      }
    };

    initWebApp();
  }, [])


  return (
    <>
      <div className="flex w-100">
        <p><b>USER ID:</b> {userId}</p>
        <p><b>INIT DATA:</b> {initData}</p>
        <p><b>START PARAM:</b> {startParam}</p>
      </div>

      <div>
        <p><b>C</b> {count}</p>
      </div>

      <div onClick={() => setCount(count + 1)} style={{width: '200px', height: '200px', borderRadius: "50%", border: '2px solid red', backgroundColor: "blueviolet"}}>

      </div>
    </>
  );
}
