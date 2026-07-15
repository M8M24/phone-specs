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
      <span className="text-xs text-gray-500 dark:text-gray-400">{label}</span>
      <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className={`${colors[color] || colors.blue} h-full rounded-full`} style={{ width: `${score}%` }}></div>
      </div>
      <span className="text-xs font-bold text-gray-900 dark:text-white w-8 text-right">{score}</span>
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
      className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-200 hover:shadow-lg flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-700 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500 text-6xl">
          📱
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">{phone.brand}</span>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">{phone.releaseYear}</span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {phone.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{phone.display.size} • {phone.processor.name}</p>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div>
            <p className="text-gray-500 dark:text-gray-400">RAM</p>
            <p className="font-medium text-gray-900 dark:text-white">{ramSizes}</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400">Storage</p>
            <p className="font-medium text-gray-900 dark:text-white truncate">{displaySizes}</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400">Battery</p>
            <p className="font-medium text-gray-900 dark:text-white">{phone.battery.capacity} mAh</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400">Main Camera</p>
            <p className="font-medium text-gray-900 dark:text-white">{phone.camera.rear[0].mp} MP</p>
          </div>
        </div>

        {phone.scores && (
          <div className="mb-4 pt-3 border-t border-gray-200 dark:border-gray-700 space-y-1.5">
            <MiniScore label="Overall" score={phone.scores.overall || 0} color="purple" />
            <MiniScore label="Perf" score={phone.scores.performance || 0} color="blue" />
            <MiniScore label="Camera" score={phone.scores.camera || 0} color="green" />
            <MiniScore label="Battery" score={phone.scores.battery || 0} color="red" />
            <MiniScore label="Gaming" score={phone.scores.gaming || 0} color="orange" />
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
          <span className="font-bold text-lg text-gray-900 dark:text-white">${startingPrice.toLocaleString()}</span>
          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">View Specs →</span>
        </div>
      </div>
    </Link>
  );
}