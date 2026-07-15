"use client";

import { PhoneSpecs } from "@/lib/phones";

interface Props {
  phone: PhoneSpecs;
}

function SpecRow({ label, value, colSpan = 1 }: { label: string; value: React.ReactNode; colSpan?: number }) {
  return (
    <>
      <dt className="text-gray-500 dark:text-gray-400 font-medium py-3 px-4 border-b border-gray-200 dark:border-gray-700 {colSpan > 1 ? 'col-span-2' : ''}">
        {label}
      </dt>
      <dd className="text-gray-900 dark:text-white py-3 px-4 border-b border-gray-200 dark:border-gray-700 {colSpan > 1 ? 'col-span-2' : ''}">
        {value}
      </dd>
    </>
  );
}

function SpecSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm">📱</span>
        {title}
      </h3>
      <dl className="grid grid-cols-2 gap-0 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        {children}
      </dl>
    </div>
  );
}

function Chip({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 ${className}`}>
      {children}
    </span>
  );
}

export default function PhoneDetail({ phone }: Props) {
  const mainCamera = phone.camera.rear[0];
  const startingPrice = phone.price.launch.usd;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <li><a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
            <li>/</li>
            <li><a href="/phones" className="hover:text-blue-600 dark:hover:text-blue-400">Phones</a></li>
            <li>/</li>
            <li><a href={`/phones/${phone.brand.toLowerCase()}`} className="hover:text-blue-600 dark:hover:text-blue-400 capitalize">{phone.brand}</a></li>
            <li>/</li>
            <li className="text-gray-900 dark:text-white font-medium truncate max-w-xs">{phone.name}</li>
          </ol>
        </nav>

        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-2">
                {phone.brand}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">{phone.name}</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Released {new Date(phone.releaseYear, phone.releaseMonth - 1).toLocaleString("default", { month: "long", year: "numeric" })}
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">${startingPrice.toLocaleString()}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Starting price at launch</p>
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
          <SpecSection title="Display">
            <SpecRow label="Size" value={phone.display.size} />
            <SpecRow label="Resolution" value={phone.display.resolution} />
            <SpecRow label="Type" value={phone.display.type} />
            <SpecRow label="Refresh Rate" value={`${phone.display.refreshRate}Hz`} />
            <SpecRow label="Protection" value={phone.display.protection} />
            <SpecRow label="Features" value={<div className="flex flex-wrap gap-1.5">{phone.features.colors.map(c => <Chip key={c}>{c}</Chip>)}</div>} colSpan={2} />
          </SpecSection>

          <SpecSection title="Performance">
            <SpecRow label="Chipset" value={phone.processor.name} />
            <SpecRow label="CPU" value={phone.processor.cpu} />
            <SpecRow label="GPU" value={phone.processor.gpu} />
            <SpecRow label="Process" value={phone.processor.process} />
            <SpecRow label="RAM Options" value={<div className="flex flex-wrap gap-1.5">{phone.memory.ram.map(r => <Chip key={r}>{r}</Chip>)}</div>} colSpan={2} />
            <SpecRow label="Storage Options" value={<div className="flex flex-wrap gap-1.5">{phone.memory.storage.map(s => <Chip key={s}>{s}</Chip>)}</div>} colSpan={2} />
          </SpecSection>

          <SpecSection title="Camera">
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

          <SpecSection title="Battery & Charging">
            <SpecRow label="Capacity" value={`${phone.battery.capacity} mAh`} />
            <SpecRow label="Wired Charging" value={phone.battery.charging.wired} />
            {phone.battery.charging.wireless && <SpecRow label="Wireless Charging" value={phone.battery.charging.wireless} />}
            {phone.battery.charging.reverse && <SpecRow label="Reverse Charging" value={phone.battery.charging.reverse} />}
          </SpecSection>

          <SpecSection title="Software">
            <SpecRow label="Launch OS" value={phone.os.launch} />
            <SpecRow label="Current OS" value={phone.os.current} />
          </SpecSection>

          <SpecSection title="Design & Build">
            <SpecRow label="Dimensions" value={`${phone.dimensions.height} × ${phone.dimensions.width} × ${phone.dimensions.thickness} mm`} />
            <SpecRow label="Weight" value={`${phone.dimensions.weight}g`} />
            <SpecRow label="Frame" value={phone.build.frame} />
            <SpecRow label="Back" value={phone.build.back} />
            {phone.build.ipRating && <SpecRow label="IP Rating" value={phone.build.ipRating} />}
            <SpecRow label="Colors" value={<div className="flex flex-wrap gap-1.5">{phone.features.colors.map(c => <Chip key={c}>{c}</Chip>)}</div>} colSpan={2} />
          </SpecSection>

          <SpecSection title="Connectivity">
            <SpecRow label="Network" value={<div className="flex flex-wrap gap-1.5">{phone.connectivity.network.map(n => <Chip key={n}>{n}</Chip>)}</div>} colSpan={2} />
            <SpecRow label="Wi-Fi" value={phone.connectivity.wifi} />
            <SpecRow label="Bluetooth" value={phone.connectivity.bluetooth} />
            <SpecRow label="NFC" value={phone.connectivity.nfc ? "Yes" : "No"} />
            <SpecRow label="USB" value={phone.connectivity.usb} />
            <SpecRow label="3.5mm Jack" value={phone.connectivity.audioJack ? "Yes" : "No"} />
          </SpecSection>

          <SpecSection title="Features">
            <SpecRow label="Biometrics" value={<div className="flex flex-wrap gap-1.5">{phone.features.biometrics.map(b => <Chip key={b}>{b}</Chip>)}</div>} colSpan={2} />
            <SpecRow label="Sensors" value={<div className="flex flex-wrap gap-1.5">{phone.features.sensors.map(s => <Chip key={s}>{s}</Chip>)}</div>} colSpan={2} />
          </SpecSection>

          <SpecSection title="Pricing">
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

        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
          <p>Data sourced from manufacturer specifications. Prices may vary by region and retailer.</p>
          <p className="mt-1 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
        </footer>
      </div>
    </div>
  );
}

function QuickStat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center">
      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{label}</p>
      <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{value}</p>
      {sub && <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{sub}</p>}
    </div>
  );
}