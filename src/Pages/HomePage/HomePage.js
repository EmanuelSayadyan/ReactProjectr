import React,{useState} from "react";
import "./Homepage.css"

export default function HomePage(){
    const [count, setCount] = useState(false)
    const [nkar, setNkar] = useState(false)
    const [real, setReal] = useState(false)

    return <div>
        <div className="masin">
            <div className="as">
                <div className="xazachechoc" onClick={()=>setCount((e) => !e)}></div>
                {count && <div className="real" ><a className="a1" href="https://www.youtube.com/results?search_query=niva">niva</a></div>}
            </div>
            <div className="as">
                <div className="realakan" onClick={()=>setNkar((e) => !e)}></div>
                {nkar && <div className="real" ><a className="a1" href="https://hy.wikipedia.org/wiki/%D4%B1%D5%BC%D5%B5%D5%B8%D6%82%D5%AE">Lion</a></div>}
            </div>
            <div className="as">
                <div className="mshakuyt" onClick={()=>setReal((e) => !e)}></div>
                {real && <div className="real"><a className="a1" href="https://www.facebook.com/">Erk</a></div>}
            </div>

        </div>
    </div>
}