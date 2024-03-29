import React from 'react'
import Threat from '/assets/threat.gif'

function Navbar() {
    return (
        <header className="bg-wine text-creme flex items-center justify-center p-4 sticky top-0">
            <h1 className="flex items-center justify-center text-2xl font-bold">CHOOSE WISELY..<img src={Threat} className="w-8 h-8"/></h1>
        </header>
    );
}

export default Navbar