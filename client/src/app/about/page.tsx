"use client"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa'

export default function About() {

    const contents = [<Introduction/>, <Education/>, <Contact/>]

    return (
        <div className="flex flex-row items-start w-full pl-20 pr-20 gap-6">
            <img 
            className="fixed left-0 top-0 w-full h-full z-[-1] opacity-20 object-cover"
            src="/assets/BG3.jpg" 
            alt="No Background"/>
            <aside className="flex flex-col h-full w-1/4">
                <img 
                className="left-0 top-0 w-full h-full z-[-1] rounded-md"
                src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg" 
                alt="No Background"/>
            </aside>
            <article className="flex flex-col h-full w-full overflow-scroll gap-2">
                {contents.map((content, index) => (
                    <div key={index} className="w-auto h-auto">
                        {content}
                    </div>
                ))}
            </article>
        </div>
    )
}

const Introduction = () => {
    return (
        <div className="w-full h-full bg-[rgba(255,255,255,0.6)] p-4 rounded-md">
            <h1 className="text-xl pb-2"><b>About Me</b></h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae tincidunt mi, ut facilisis velit. Integer euismod, erat et lacinia tincidunt, eros justo suscipit odio, a iaculis eros arcu non nisi. Nam vel purus augue. Suspendisse potenti. Aenean aliquet libero nisi, sed congue eros iaculis sed. Mauris id elit a felis consequat fermentum. Ut laoreet, sem a consequat fermentum, urna orci tincidunt neque, non euismod elit velit sit amet augue. Nullam interdum, enim et malesuada lobortis, nunc justo eleifend libero, nec vulputate eros felis vel nunc. Integer vehicula arcu id ex mollis, ut auctor sem ultricies. Ut at suscipit eros. Nam varius, eros ut vehicula porttitor, ipsum arcu tincidunt justo, vel ullamcorper libero magna in elit. Quisque aliquam metus at ante euismod, eu rutrum sapien pretium. Aenean auctor, urna id scelerisque vehicula, nisi lorem lobortis nulla, id venenatis purus tortor ut eros. Ut sollicitudin metus nisi, a sodales risus gravida eget. In eu eros ac felis volutpat eleifend id a lacus. Fusce egestas feugiat nunc in cursus. Fusce euismod magna velit, ac luctus arcu auctor sed.
            </p>
        </div>
    )
}

const Education = () => {
    return (
        <div className="w-full h-full bg-[rgba(255,255,255,0.6)] p-4 rounded-md">
            <h1 className="text-xl pb-2"><b>Educations</b></h1>
            <div className="space-y-4">
                <div>
                    <span className="block text-lg font-medium text-gray-700">2005 - 2007</span>
                    <span className="text-sm text-gray-500">Elementary School</span>
                </div>
                <div>
                    <span className="block text-lg font-medium text-gray-700">2008 - 2011</span>
                    <span className="text-sm text-gray-500">Junior High School</span>
                </div>
                <div>
                    <span className="block text-lg font-medium text-gray-700">2012 - 2014</span>
                    <span className="text-sm text-gray-500">Senior High School</span>
                </div>
                <div>
                    <span className="block text-lg font-medium text-gray-700">2015 - 2019</span>
                    <span className="text-sm text-gray-500">University of Computer Science</span>
                </div>
            </div>
        </div>
    )
}


const Contact = () => {
    return (
        <div className="w-full h-full bg-[rgba(255,255,255,0.6)] p-4 rounded-md">
            <h1 className="text-xl pb-2"><b>Contact</b></h1>
            <div className="flex gap-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-600 hover:text-blue-800">
                    <FaFacebook/>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-400 hover:text-blue-600">
                    <FaTwitter/>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl text-pink-600 hover:text-pink-800">
                    <FaInstagram/>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-700 hover:text-blue-900">
                    <FaLinkedin/>
                </a>
                <p className="flex flex-row gap-2 items-center"><FaPhone/> 0812 3456 7890</p>
            </div>
        </div>
    )
}