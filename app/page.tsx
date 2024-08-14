import { Button } from "@/components/ui/button";
import Link from 'next/link'
import Image from 'next/image'
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";

const features = [
  {
    name: "Store your PDF Documents",
    description:
      "Keep all your important research papers securely stored and easily accessible anytime, anywhere.",
    icon: GlobeIcon,
  },
  {
    name: "Blazing Fast Responses",
    description:
      "Experience lightning-fast answers to yur queries, ensuring you get the information you need instatnly.",
    icon: ZapIcon,
  },
  {
    name: "Chat Memorisation",
    description:
      "Our intelligent chatbot remembers previous interactions, providing a seamless and personalized experiance.",
    icon: BrainCogIcon,
  },
  {
    name: "Interactive PDF Viewer",
    description:
      "Engage with your PDFs like never before using our intuitive and interactive viewer.",
    icon: EyeIcon,
  },
  {
    name: "Responsive Access Devices",
    description:
      "Access and chat with your PDFs sesamlessly on any device, whether it's your desktop, tablet, or smartphone",
    icon: MonitorSmartphoneIcon,
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mx-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-violet-600"> Your Interactive Document Companion </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl">Transform The Boring Research Paper into Interactive Conversation</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">

            Introducing{" "}
            <span className="font-bold text-indigo-600">Fusion AI</span>
            <br />
            <br /> Upload your document, and our AI will answer questin, summarize content, and answer all your Qs. Ideal for researchers, <span className="text-indigo-600">Fusion AI</span>{" "}
            turns static documents into{" "}
            <span className="font-bold">dynamic conversations</span>, enhancing productivity 10x fold effortlessly.
            </p>
          </div>
          <Button asChild className="mt-10">
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Image 
                alt="App screenshot"
                src="https://i.imgur.com/VciRSTI.jpeg"
                width={2432}
                height={1442}
                className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-200/10"
              />
              <div aria-hidden="true" className="relativ">
                <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/75 pt-[5%]"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
