import React from "react";

export const Navbar = () => {
    
    return (
<nav class="bg-gradient-to-r from-black to-purple-900 p-6 shadow-lg">
    <div class="container mx-auto flex justify-between items-center">
        <div>
            <h1 class="text-white cursor-pointer  font-bold"><span className="text-3xl">H</span>amza <span className="text-3xl">M</span>andour</h1>
        </div>

        <div>
            <ul class="flex space-x-8 text-white font-semibold">
                <li class="hover:text-blue-300 transition duration-300 cursor-pointer">Home</li>
                <li class="hover:text-blue-300 transition duration-300 cursor-pointer">About</li>
                <li class="hover:text-blue-300 transition duration-300 cursor-pointer">Skills</li>
                <li class="hover:text-blue-300 transition duration-300 cursor-pointer">Projects</li>
                <li class="hover:text-blue-300 transition duration-300 cursor-pointer">Contact Me</li>
            </ul>
        </div>
    </div>
</nav>

)

}