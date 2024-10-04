import React from "react";

export default function Nav(){
return <nav className="flex justify-between  min-h-[11vh] items-center px-5 text-white fixed w-full">
<h1 className="font-semibold text-2xl">Coffee</h1>
<ul className="flex gap-3 font-semibold text-lg">
    <li>Home</li>
    <li>Portfolio</li>
    <li>Contact</li>
</ul>

    </nav>;
}