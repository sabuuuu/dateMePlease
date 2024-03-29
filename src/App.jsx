import React,{ useState } from 'react'
import { motion } from "framer-motion";
import Love from '/assets/love.gif'
import Teddy from '/assets/teddy.gif'
import Down from '/assets/down.gif'
import Close from '/assets/close.png'
import Happy from '/assets/happy.gif'
import Navbar from './Navbar'

const Modal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 self-center justify-self-center bg-brown2 flex items-center justify-center text-creme z-50 w-2/5 h-2/4 rounded-xl border">
        <div className="modal-overlay  fixed inset-0 bg-black opacity-10"></div>
        <div className="modal  p-4 rounded-lg flex flex-col items-center justify-center">
          <button className="absolute top-4  right-4 text-black" onClick={onClose}>
            <img src={Close} className="w-8 h-8"/>
          </button>
          <p className='flex items-center justify-center'><img src={Happy} className="w-8 h-8"/>HE SAID YES LESSGOOOOOOOOOOOO <img src={Happy} className="w-8 h-8"/></p>
          <p>HIP HIP HOURRAY</p>
        </div>
      </div>
    )
  );
};
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(null); 
  const contents = ["Really??", "Why not", "bruh" ,"just think about it" ,"PLEASEEEEE" ,"give it a chance :(","you hate me right?","if that's what u want .." ,"why u still clicking?","what kinda sadistic mf r u","bro stop" ,"my misery is funny to u huh?" ,"go get a job","-.-","t'abuses frére"];
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const updateDisplay = () => {
    setClicked(true);
    setDisplayIndex((prevIndex) => (prevIndex === null ? 0 : (prevIndex + 1) % contents.length)); // If null, set to 0
  };
  return (  
    <div className="flex flex-col  min-h-screen h-full font-body font-semibold bg-brown2 text-creme">
      <Navbar />
      <motion.div  
        initial={{ opacity: 0.5 ,x: -100, rotate: 0}}
        animate={{x: 0, opacity: 1,}}
        transition={{ duration: 1, type: 'spring', stiffness: 90 }}
        className="w-1/2 h-full self-center overflow-x-auto flex flex-col py-16 mt-4 ml-4 mt-10 mr-4 items-center text-wine bg-pink border rounded-md border-creme">
        <h1 className="text-xl font-bold">Will you go out with me ?</h1>
        <img src={Teddy} className="w-32 h-32 mt-6"/>
        <div className="flex items-center justify-around w-1/2 mt-4 mb-4">
          <button className="text-m flex items-center justify-center border w-3/4 px-4 py-1 m-1 rounded font-bold font-body hover:bg-green hover:text-creme" onClick={openModal}>Yes<img src={Love} className="w-8 h-8"/></button>
          <button className="text-m flex items-center justify-center border w-1/3 px-4 py-1 m-1 rounded font-bold font-body hover:bg-red hover:text-creme " onClick={updateDisplay}>No<img src={Down} className="w-8 h-8"/></button>
        </div>
        <div className="mt-4">
        {displayIndex !== null && ( 
          <p className="font-bold border rounded-md p-2 px-12 border-creme bg-brown2 text-creme">{contents[displayIndex]}</p>
        )}
      </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </motion.div>
    </div>
  )
}

export default App
