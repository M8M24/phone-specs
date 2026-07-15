import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPhoneById, getAllPhones } from "@/lib/phones";
import PhoneDetail from "@/components/PhoneDetail";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const phones = getAllPhones();
  return phones.map((phone) => ({ id: phone.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const phone = getPhoneById(id);
  if (!phone) return { title: "Phone Not Found" };
  return {
    title: `${phone.name} Specifications | Phone Specs`,
    description: `Full specifications for the ${phone.name}: display, processor, camera, battery, pricing, and more.`,
    openGraph: {
      title: `${phone.name} Specifications`,
      description: `Full specifications for the ${phone.name}`,
      type: "website",
    },
  };
}

export default async function PhonePage({ params }: PageProps) {
  const { id } = await params;
  const phone = getPhoneById(id);

  if (!phone) notFound();

  return <PhoneDetail phone={phone} />;
}