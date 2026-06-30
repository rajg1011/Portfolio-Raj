export default function BlogLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111113]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-accent animate-spin" />
        <p className="text-zinc-600 text-sm tracking-wide">Loading</p>
      </div>
    </div>
  )
}
