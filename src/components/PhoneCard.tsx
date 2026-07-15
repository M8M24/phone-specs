"use client";

import Link from "next/link";
import { PhoneSpecs } from "@/lib/phones";

interface Props {
  phone: PhoneSpecs;
}

function MiniScore({ label, score, color }: { label: string; score: number; color: string }) {
  const colors: Record<string, string> = {
    purple: "bg-purple-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500",
    orange: "bg-orange-500",
  };
  return (
    <div className="flex items-center gap-1.5" title={`${label}: ${score}/100`}>
      <span className="text-xs text-muted">{label}</span>
      <div className="w-16 h-1.5 bg-border rounded-full overflow-hidden">
        <div className={`${colors[color] || colors.blue} h-full rounded-full`} style={{ width: `${score}%` }}></div>
      </div>
      <span className="text-xs font-bold text-fg w-8 text-right">{score}</span>
    </div>
  );
}

export default function PhoneCard({ phone }: Props) {
  const startingPrice = phone.price.launch.usd;
  const displaySizes = phone.memory.storage.join(", ");
  const ramSizes = phone.memory.ram.join(", ");

  return (
    <Link
      href={`/phones/${phone.id}`}
      className="neu-card-hover group block"
    >
      <div className="relative aspect-[4/3] bg-card rounded-t-2xl overflow-hidden flex items-center justify-center">
        <span className="text-6xl opacity-30">📱</span>
        <div className="absolute top-3 right-3">
          <span className="neu-badge">{phone.brand}</span>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="neu-badge">{phone.releaseYear}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-fg text-lg mb-1 group-hover:text-accent transition-colors">
          {phone.name}
        </h3>
        <p className="text-sm text-muted mb-4">{phone.display.size} • {phone.processor.name}</p>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div>
            <p className="text-muted">RAM</p>
            <p className="font-medium text-fg">{ramSizes}</p>
          </div>
          <div>
            <p className="text-muted">Storage</p>
            <p className="font-medium text-fg truncate">{displaySizes}</p>
          </div>
          <div>
            <p className="text-muted">Battery</p>
            <p className="font-medium text-fg">{phone.battery.capacity} mAh</p>
          </div>
          <div>
            <p className="text-muted">Main Camera</p>
            <p className="font-medium text-fg">{phone.camera.rear[0].mp} MP</p>
          </div>
        </div>

        {phone.scores && (
          <div className="space-y-2 mb-4 pt-3 border-t border-border">
            <MiniScore label="Overall" score={phone.scores.overall || 0} color="purple" />
            <MiniScore label="Perf" score={phone.scores.performance || 0} color="blue" />
            <MiniScore label="Camera" score={phone.scores.camera || 0} color="green" />
            <MiniScore label="Battery" score={phone.scores.battery || 0} color="red" />
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-border mt-auto">
          <span className="font-bold text-xl text-fg">${startingPrice.toLocaleString()}</span>
          <span className="text-sm text-accent font-medium">View Specs →</span>
        </div>
      </div>
    </Link>
  );
}