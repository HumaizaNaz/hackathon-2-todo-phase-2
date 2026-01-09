// frontend/src/components/TestimonialCard.tsx

export default function TestimonialCard({ quote, name, title }: { quote: string; name: string; title: string }) {
  return (
    <div className="neon-card p-6 h-full">
      <div className="text-[color:var(--neon-yellow)] text-4xl mb-2">"</div>
      <p className="text-[color:var(--text-primary)] italic mb-4">{quote}</p>
      <div className="border-t border-[color:var(--border-neon)] pt-4">
        <p className="font-bold text-[color:var(--neon-cyan)]">{name}</p>
        <p className="text-sm text-[color:var(--text-secondary)]">{title}</p>
      </div>
    </div>
  );
}