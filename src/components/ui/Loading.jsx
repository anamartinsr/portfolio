export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-[color:var(--color-secondary)] text-white">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[color:var(--color-primary)] mb-4"></div>
        <p className="text-lg">Carregando...</p>
      </div>
    </div>
  );
}
