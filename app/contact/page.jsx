"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: 'Phone',
    description: '(+55) 21 99969-1455',
  },
  {
    icon: <FaEnvelope/>,
    title: 'Email',
    description: 'jh.terencio@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt/>,
    title: 'Addres',
    description: 'Rio de Janeiro, Brazil',
  },
]


const Contact = () => {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 1.8, duration: 0.4, ease: "easeIn"},}}
      className="py-6"
    >
      <div className="container max-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[70%] order-2 xl:order-none">
            <form className="flex flex-col gap-3 p-6 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="firstname" placeholder="Firstname"/>
                <Input type="lastname" placeholder="Lastname"/>
                <Input type="email" placeholder="Email Addres"/>
                <Input type="phone" placeholder="Phone Number"/>
              </div>
              {/* Select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Data Scientist</SelectItem>
                    <SelectItem value="vdg">RPA Developer</SelectItem>
                  </SelectGroup>
                </SelectContent>
                {/* TextArea */}
                <Textarea 
                  className="h-[50px]"
                  placeholder="Type your message here."
                />
                {/* Button */}
                <Button size="md" className="max-w-40">
                  Send message
                </Button>
              </Select>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) =>{
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[42px] h-[42px] xl:w-[62px] xl:h-[62px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[18px] xl:text-[24px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-md">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact