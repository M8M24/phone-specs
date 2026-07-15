"use client";

import Link from "next/link";
import { PhoneSpecs } from "@/lib/phones";

interface Props {
  phone: PhoneSpecs;
}

function SpecRow({ label, value, colSpan = 1 }: { label: string; value: React.ReactNode; colSpan?: number }) {
  return (
    <>
      <dt className="text-muted font-medium py-3 px-4 border-b border-border {colSpan > 1 ? 'col-span-2' : ''}">
        {label}
      </dt>
      <dd className="text-fg py-3 px-4 border-b border-border {colSpan > 1 ? 'col-span-2' : ''}">
        {value}
      </dd>
    </>
  );
}

function SpecSection({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="neu-section mb-8">
      <div className="px-6 py-4 border-b border-border">
        <h3 className="text-lg font-semibold text-fg flex items-center gap-2">
          <span className="neu-badge" style={{ padding: '6px 10px', fontSize: '0.75rem' }}>{icon}</span>
          {title}
        </h3>
      </div>
      <dl className="grid grid-cols-2 gap-0 p-2">
        {children}
      </dl>
    </div>
  );
}

function Chip({ children, className = "", href }: { children: React.ReactNode; className?: string; href?: string }) {
  const content = (
    <span className={`neu-chip ${className}`}>
      {children}
    </span>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline">{content}</a> : content;
}

function ScoreBar({ label, score, color = "blue" }: { label: string; score: number; color?: string }) {
  const colors: Record<string, string> = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
  };
  const bgColor = colors[color] || colors.blue;
  
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium text-muted">{label}</span>
        <span className="font-bold text-fg">{score}/100</span>
      </div>
      <div className="h-2 bg-border rounded-full overflow-hidden">
        <div className={`${bgColor} h-full rounded-full transition-all duration-500`} style={{ width: `${score}%` }}></div>
      </div>
    </div>
  );
}

export default function PhoneDetail({ phone }: Props) {
  const mainCamera = phone.camera.rear[0];
  const startingPrice = phone.price.launch.usd;

  return (
    <div className="min-h-screen bg-bg py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-muted">
            <li><Link href="/" className="neu-link">Home</Link></li>
            <li>/</li>
            <li><Link href="/phones" className="neu-link">Phones</Link></li>
            <li>/</li>
            <li><Link href={`/phones/${phone.brand.toLowerCase()}`} className="neu-link capitalize">{phone.brand}</Link></li>
            <li>/</li>
            <li className="text-fg font-medium truncate max-w-xs">{phone.name}</li>
          </ol>
        </nav>

        {/* Scores Section */}
        {phone.scores && (
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-fg mb-4 pb-2 border-b border-border flex items-center gap-2">
              <span className="neu-badge" style={{ padding: '6px 10px', fontSize: '0.75rem', background: 'var(--purple)', color: 'white', boxShadow: '3px 3px 6px rgba(155,89,182,0.4), -3px -3px 6px rgba(155,89,182,0.2)' }}>⭐</span>
              Performance Scores (NanoReview)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="neu-card p-5">
                <ScoreBar label="Overall" score={phone.scores.overall || 0} color="purple" />
                <ScoreBar label="Performance" score={phone.scores.performance || 0} color="blue" />
                <ScoreBar label="Gaming" score={phone.scores.gaming || 0} color="orange" />
              </div>
              <div className="neu-card p-5">
                <ScoreBar label="Camera" score={phone.scores.camera || 0} color="green" />
                <ScoreBar label="Display" score={phone.scores.display || 0} color="yellow" />
                <ScoreBar label="Battery" score={phone.scores.battery || 0} color="red" />
              </div>
              <div className="neu-card p-5 text-sm text-muted">
                <p className="font-medium text-fg mb-2">Score Breakdown</p>
                <p>Scores from <a href={phone.sources?.nanoreview} target="_blank" rel="noopener noreferrer" className="neu-link">NanoReview</a> based on benchmarks, camera tests, battery life, and display measurements.</p>
                <p className="mt-2">Higher is better. 100 = theoretical maximum.</p>
              </div>
            </div>
          </section>
        )}

        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <span className="neu-chip-accent">{phone.brand}</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-fg mt-2">{phone.name}</h1>
              <p className="text-muted mt-1">
                Released {new Date(phone.releaseYear, phone.releaseMonth - 1).toLocaleString("default", { month: "long", year: "numeric" })}
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-fg">${startingPrice.toLocaleString()}</p>
              <p className="text-sm text-muted">Starting price at launch</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <QuickStat label="Display" value={phone.display.size} sub={`${phone.display.type}, ${phone.display.refreshRate}Hz`} />
            <QuickStat label="Processor" value={phone.processor.name} sub={`${phone.processor.process}`} />
            <QuickStat label="RAM / Storage" value={`${phone.memory.ram[0]} / ${phone.memory.storage[0]}`} sub={phone.memory.storage.length > 1 ? `+${phone.memory.storage.length - 1} more` : ""} />
            <QuickStat label="Battery" value={`${phone.battery.capacity} mAh`} sub={phone.battery.charging.wired} />
            <QuickStat label="Main Camera" value={`${mainCamera.mp} MP`} sub={mainCamera.type} />
            <QuickStat label="Front Camera" value={`${phone.camera.front.mp} MP`} sub={phone.camera.front.aperture} />
            <QuickStat label="OS" value={phone.os.launch} sub={phone.os.current} />
            <QuickStat label="Weight" value={`${phone.dimensions.weight}g`} sub={`${phone.dimensions.thickness}mm thick`} />
          </div>
        </header>

        <div className="space-y-8">
          <SpecSection title="Display" icon="📱">
            <SpecRow label="Size" value={phone.display.size} />
            <SpecRow label="Resolution" value={phone.display.resolution} />
            <SpecRow label="Type" value={phone.display.type} />
            <SpecRow label="Refresh Rate" value={`${phone.display.refreshRate}Hz`} />
            <SpecRow label="Protection" value={phone.display.protection} />
            <SpecRow label="Colors" value={<div className="flex flex-wrap gap-1.5">{phone.features.colors.map(c => <Chip key={c}>{c}</Chip>)}</div>} colSpan={2} />
          </SpecSection>

          <SpecSection title="Performance" icon="⚡">
            <SpecRow label="Chipset" value={phone.processor.name} />
            <SpecRow label="CPU" value={phone.processor.cpu} />
            <SpecRow label="GPU" value={phone.processor.gpu} />
            <SpecRow label="Process" value={phone.processor.process} />
            <SpecRow label="RAM Options" value={<div className="flex flex-wrap gap-1.5">{phone.memory.ram.map(r => <Chip key={r}>{r}</Chip>)}</div>} colSpan={2} />
            <SpecRow label="Storage Options" value={<div className="flex flex-wrap gap-1.5">{phone.memory.storage.map(s => <Chip key={s}>{s}</Chip>)}</div>} colSpan={2} />
          </SpecSection>

          <SpecSection title="Camera" icon="📷">
            <SpecRow label="Rear Cameras" value={
              <div className="space-y-2">
                {phone.camera.rear.map((cam, i) => (
                  <div key={i} className="flex flex-wrap gap-1.5">
                    <span className="font-medium">{cam.mp}MP {cam.type}</span>
                    <Chip>{cam.aperture}</Chip>
                    {cam.features.map(f => <Chip key={f}>{f}</Chip>)}
                  </div>
                ))}
              </div>
            } colSpan={2} />
            <SpecRow label="Front Camera" value={`${phone.camera.front.mp}MP ${phone.camera.front.aperture}`} />
            <SpecRow label="Front Features" value={<div className="flex flex-wrap gap-1.5">{phone.camera.front.features.map(f => <Chip key={f}>{f}</Chip>)}</div>} colSpan={2} />
            <SpecRow label="Video Recording" value={<div className="flex flex-wrap gap-1.5">{phone.camera.video.map(v => <Chip key={v}>{v}</Chip>)}</div>} colSpan={2} />
          </SpecSection>

          <SpecSection title="Battery & Charging" icon="🔋">
            <SpecRow label="Capacity" value={`${phone.battery.capacity} mAh`} />
            <SpecRow label="Wired Charging" value={phone.battery.charging.wired} />
            {phone.battery.charging.wireless && <SpecRow label="Wireless Charging" value={phone.battery.charging.wireless} />}
            {phone.battery.charging.reverse && <SpecRow label="Reverse Charging" value={phone.battery.charging.reverse} />}
          </SpecSection>

          <SpecSection title="Software" icon="💻">
            <SpecRow label="Launch OS" value={phone.os.launch} />
            <SpecRow label="Current OS" value={phone.os.current} />
          </SpecSection>

          <SpecSection title="Design & Build" icon="🎨">
            <SpecRow label="Dimensions" value={`${phone.dimensions.height} × ${phone.dimensions.width} × ${phone.dimensions.thickness} mm`} />
            <SpecRow label="Weight" value={`${phone.dimensions.weight}g`} />
            <SpecRow label="Frame" value={phone.build.frame} />
            <SpecRow label="Back" value={phone.build.back} />
            {phone.build.ipRating && <SpecRow label="IP Rating" value={phone.build.ipRating} />}
            <SpecRow label="Colors" value={<div className="flex flex-wrap gap-1.5">{phone.features.colors.map(c => <Chip key={c}>{c}</Chip>)}</div>} colSpan={2} />
          </SpecSection>

          <SpecSection title="Connectivity" icon="📡">
            <SpecRow label="Network" value={<div className="flex flex-wrap gap-1.5">{phone.connectivity.network.map(n => <Chip key={n}>{n}</Chip>)}</div>} colSpan={2} />
            <SpecRow label="Wi-Fi" value={phone.connectivity.wifi} />
            <SpecRow label="Bluetooth" value={phone.connectivity.bluetooth} />
            <SpecRow label="NFC" value={phone.connectivity.nfc ? "Yes" : "No"} />
            <SpecRow label="USB" value={phone.connectivity.usb} />
            <SpecRow label="3.5mm Jack" value={phone.connectivity.audioJack ? "Yes" : "No"} />
          </SpecSection>

          <SpecSection title="Features" icon="✨">
            <SpecRow label="Biometrics" value={<div className="flex flex-wrap gap-1.5">{phone.features.biometrics.map(b => <Chip key={b}>{b}</Chip>)}</div>} colSpan={2} />
            <SpecRow label="Sensors" value={<div className="flex flex-wrap gap-1.5">{phone.features.sensors.map(s => <Chip key={s}>{s}</Chip>)}</div>} colSpan={2} />
          </SpecSection>

          <SpecSection title="Pricing" icon="💰">
            <SpecRow label="Launch Price (USD)" value={`$${phone.price.launch.usd.toLocaleString()}`} />
            <SpecRow label="Launch Price (EUR)" value={`€${phone.price.launch.eur.toLocaleString()}`} />
            <SpecRow label="Launch Price (GBP)" value={`£${phone.price.launch.gbp.toLocaleString()}`} />
            {phone.price.current && (
              <>
                <SpecRow label="Current Price (USD)" value={`$${phone.price.current.usd.toLocaleString()}`} />
                <SpecRow label="Current Price (EUR)" value={`€${phone.price.current.eur.toLocaleString()}`} />
                <SpecRow label="Current Price (GBP)" value={`£${phone.price.current.gbp.toLocaleString()}`} />
              </>
            )}
          </SpecSection>
        </div>

        {/* Sources Section */}
        {phone.sources && (
          <section className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-fg mb-4 flex items-center gap-2">
              <span className="neu-badge" style={{ padding: '6px 10px', fontSize: '0.75rem' }}>🔗</span>
              Data Sources
            </h3>
            <div className="neu-section p-4">
              <dl className="space-y-2 text-sm">
                {phone.sources.nanoreview && (
                  <dt className="flex items-center gap-2">
                    <span className="font-medium text-muted">NanoReview Scores:</span>
                    <a href={phone.sources.nanoreview} target="_blank" rel="noopener noreferrer" className="neu-link text-sm truncate flex-1">{phone.sources.nanoreview}</a>
                    <span className="text-xs text-muted">Benchmarks & scores</span>
                  </dt>
                )}
                {phone.sources.gsmarena && (
                  <dt className="flex items-center gap-2">
                    <span className="font-medium text-muted">GSMArena Specs:</span>
                    <a href={phone.sources.gsmarena} target="_blank" rel="noopener noreferrer" className="neu-link text-sm truncate flex-1">{phone.sources.gsmarena}</a>
                    <span className="text-xs text-muted">Full specs & reviews</span>
                  </dt>
                )}
                {phone.sources.official && (
                  <dt className="flex items-center gap-2">
                    <span className="font-medium text-muted">Official Site:</span>
                    <a href={phone.sources.official} target="_blank" rel="noopener noreferrer" className="neu-link text-sm truncate flex-1">{phone.sources.official}</a>
                    <span className="text-xs text-muted">Manufacturer specs</span>
                  </dt>
                )}
                {phone.sources.notebookcheck && (
                  <dt className="flex items-center gap-2">
                    <span className="font-medium text-muted">NotebookCheck Review:</span>
                    <a href={phone.sources.notebookcheck} target="_blank" rel="noopener noreferrer" className="neu-link text-sm truncate flex-1">{phone.sources.notebookcheck}</a>
                    <span className="text-xs text-muted">In-depth reviews</span>
                  </dt>
                )}
                {phone.sources.other && phone.sources.other.length > 0 && (
                  <dt className="flex items-center gap-2">
                    <span className="font-medium text-muted">Other Sources:</span>
                    <div className="flex flex-wrap gap-2">
                      {phone.sources.other.map((url, i) => (
                        <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="neu-link text-sm truncate max-w-xs">{url}</a>
                      ))}
                    </div>
                  </dt>
                )}
              </dl>
              <p className="mt-3 text-xs text-muted">
                Scores from NanoReview are based on synthetic benchmarks (AnTuTu, GeekBench, 3DMark), camera tests, battery life tests, and display measurements. 
                Actual real-world performance may vary.
              </p>
            </div>
          </section>
        )}

        <footer className="mt-12 pt-8 border-t border-border text-center text-muted">
          <p>Data sourced from manufacturer specifications, NanoReview benchmarks, and GSMArena. Prices may vary by region and retailer.</p>
          <p className="mt-1 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
        </footer>
      </div>
    </div>
  );
}

function QuickStat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="neu-stat">
      <p className="text-xs font-medium text-muted uppercase tracking-wider">{label}</p>
      <p className="text-lg font-semibold text-fg mt-1">{value}</p>
      {sub && <p className="text-xs text-muted mt-0.5">{sub}</p>}
    </div>
  );
}