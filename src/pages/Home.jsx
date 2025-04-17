import { Motion } from "framer-motion"

export default function Home() {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="h-[calc(100vh-8rem)] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('src/assets/background.png')" }}
    >
      <div className="text-center bg-black/50 p-8 rounded-xl">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm [Joseff Mancilla]</h1>
        <p className="text-xl">Welcome to my portfolio!</p>
      </div>
    </motion.section>
  )
}
