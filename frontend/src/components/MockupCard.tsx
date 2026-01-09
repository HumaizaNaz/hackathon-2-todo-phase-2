// frontend/src/components/MockupCard.tsx

export default function MockupCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="neon-card p-6 text-center h-full">
      <div className="w-full h-48 bg-[color:var(--bg-card)] neon-border rounded-lg flex items-center justify-center mb-4">
        <p className="text-[color:var(--text-secondary)]">{title}</p>
      </div>
      <h3 className="text-xl font-bold mb-2 text-[color:var(--text-primary)]">{title}</h3>
      <p className="text-[color:var(--text-secondary)]">{description}</p>
    </div>
  );
}