"use client";

import { PhoneSpecs } from "@/lib/phones";

interface SpecRowProps {
  label: string;
  value: React.ReactNode;
  children?: React.ReactNode;
}

function SpecRow({ label, value, children }: SpecRowProps) {
  return (
    <div className="grid grid-cols-[1fr_2fr] gap-4 py-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</dt>
      <dd className="text-sm text-gray-900 dark:text-white flex items-center gap-2">
        {value}
        {children && <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">{children}</span>}
      </dd>
    </div>
  );
}

interface CameraSpecsProps {
  cameras: PhoneSpecs["camera"]["rear"];
  title: string;
}

function CameraSpecs({ cameras, title }: CameraSpecsProps) {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{title}</h4>
      <div className="space-y-2">
        {cameras.map((cam, i) => (
          <div key={i} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium text-gray-900 dark:text-white">
                {cam.mp}MP {cam.type}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{cam.aperture}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {cam.features.map((f, i) => (
                <span key={i} className="px-2 py-0.5 text-xs bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded text-gray-700 dark:text-gray-300">
                  {f}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface PhoneSpecsTableProps {
  phone: PhoneSpecs;
}

export default function PhoneSpecsTable({ phone }: PhoneSpecsTableProps) {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Display
        </h3>
        <dl className="space-y-0">
          <SpecRow label="Size" value={phone.display.size} />
          <SpecRow label="Resolution" value={phone.display.resolution} />
          <SpecRow label="Type" value={phone.display.type} />
          <SpecRow label="Refresh Rate" value={`${phone.display.refreshRate}Hz`} />
          <SpecRow label="Protection" value={phone.display.protection} />
        </dl>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Processor
        </h3>
        <dl className="space-y-0">
          <SpecRow label="Chipset" value={phone.processor.name} />
          <SpecRow label="CPU" value={phone.processor.cpu} />
          <SpecRow label="GPU" value={phone.processor.gpu} />
          <SpecRow label="Process" value={phone.processor.process} />
        </dl>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Memory & Storage
        </h3>
        <dl className="space-y-0">
          <SpecRow label="RAM Options" value={phone.memory.ram.join(", ")} />
          <SpecRow label="Storage Options" value={phone.memory.storage.join(", ")} />
        </dl>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Camera
        </h3>
        <CameraSpecs cameras={phone.camera.rear} title="Rear Cameras" />
        <div className="pt-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Front Camera</h4>
          <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium text-gray-900 dark:text-white">
                {phone.camera.front.mp}MP
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{phone.camera.front.aperture}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {phone.camera.front.features.map((f, i) => (
                <span key={i} className="px-2 py-0.5 text-xs bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded text-gray-700 dark:text-gray-300">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Video Recording</h4>
          <div className="flex flex-wrap gap-2">
            {phone.camera.video.map((v, i) => (
              <span key={i} className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 rounded-full">
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Battery & Charging
        </h3>
        <dl className="space-y-0">
          <SpecRow label="Capacity" value={`${phone.battery.capacity.toLocaleString()} mAh`} />
          <SpecRow label="Wired Charging" value={phone.battery.charging.wired} />
          {phone.battery.charging.wireless && (
            <SpecRow label="Wireless Charging" value={phone.battery.charging.wireless} />
          )}
          {phone.battery.charging.reverse && (
            <SpecRow label="Reverse Wireless" value={phone.battery.charging.reverse} />
          )}
        </dl>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Software
        </h3>
        <dl className="space-y-0">
          <SpecRow label="Launch OS" value={phone.os.launch} />
          <SpecRow label="Current OS" value={phone.os.current} />
        </dl>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Dimensions & Weight
        </h3>
        <dl className="space-y-0">
          <SpecRow label="Height" value={`${phone.dimensions.height} mm`} />
          <SpecRow label="Width" value={`${phone.dimensions.width} mm`} />
          <SpecRow label="Thickness" value={`${phone.dimensions.thickness} mm`} />
          <SpecRow label="Weight" value={`${phone.dimensions.weight} g`} />
        </dl>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Build
        </h3>
        <dl className="space-y-0">
          <SpecRow label="Frame" value={phone.build.frame} />
          <SpecRow label="Back" value={phone.build.back} />
          {phone.build.ipRating && (
            <SpecRow label="IP Rating" value={phone.build.ipRating} />
          )}
        </dl>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Connectivity
        </h3>
        <dl className="space-y-0">
          <SpecRow label="Network" value={phone.connectivity.network.join(", ")} />
          <SpecRow label="Wi-Fi" value={phone.connectivity.wifi} />
          <SpecRow label="Bluetooth" value={phone.connectivity.bluetooth} />
          <SpecRow label="NFC" value={phone.connectivity.nfc ? "Yes" : "No"} />
          <SpecRow label="USB" value={phone.connectivity.usb} />
          <SpecRow label="3.5mm Jack" value={phone.connectivity.audioJack ? "Yes" : "No"} />
        </dl>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Features
        </h3>
        <dl className="space-y-0">
          <SpecRow label="Biometrics" value={phone.features.biometrics.join(", ")} />
          <SpecRow label="Sensors" value={phone.features.sensors.join(", ")} />
          <SpecRow label="Colors" value={phone.features.colors.join(", ")} />
        </dl>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Price
        </h3>
        <dl className="space-y-0">
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
        </dl>
      </section>
    </div>
  );
}