export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col">
        {["Name", "Email", "Password"].map((person, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="size-7 bg-blue-400 rounded-full" />
            <span className="text-lg font-medium">{person}</span>
            <div className="size-5 bg-red-500 text-white flex items-center justify-center rounded-full">
              <span>{index}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
