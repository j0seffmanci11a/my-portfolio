const projects = [
  { title: "Todo App", desc: "A React Native app for managing tasks.", link: "https://youtu.be/rm4-zfmUhFg", img: "src/assets/todo.png" },
  { title: "Exercise Tracker", desc: "Track your workouts using React.", link: "https://youtu.be/2ceuuEmhejI", img: "src/assets/exercise.png" },
  { title: "Quiz App", desc: "A basic exercise app with timers and rep counter.", link: "https://youtu.be/EX1hHGo-Oe8", img: "src/assets/quiz.png" },
]

export default function Projects() {
  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-sm mb-2">{p.desc}</p>
              <a href={p.link} className="text-green-500 underline">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
