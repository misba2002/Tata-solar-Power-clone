"use client";
import { motion, AnimatePresence } from "framer-motion";
import { footerColumns } from "@/Data/footerData";
import Link from "next/link";
import Image from "next/image";

export default function ExploreMenuOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const titleImages = [
    { title: "About Us", img: "/explore img/menu-about.jpg" },
    { title: "Sustainability", img: "/explore img/menu-sustain.jpg" },
    { title: "Projects", img: "/explore img/menu-project.jpg" },
    { title: "Manufacturing Edge", img: "/explore img/menu-manufacture.jpg" },
    { title: "Investors", img: "/explore img/menu-investors.jpg" },
    { title: "Media", img: "/explore img/menu-media.jpg" },
    { title: "Contact Us", img: "/explore img/menu-contact.jpg" },
    { title: "Working at Tata Power Solar", img: "/explore img/menu-working.jpg" },
    { title: "Solar Water Pumps", img: "/explore img/menu-product.jpg" },
    { title: "Rooftops", img: "/explore img/menu-rooftop.jpg" },
  ];

  const getImageForTitle = (title: string) => {
    const match = titleImages.find(
      (item) => item.title.toLowerCase() === title.toLowerCase()
    );
    return match?.img;
  };

  // ✅ Filter out "Follow Us" section entirely
  const filteredFooterColumns = footerColumns.map((col) => ({
    ...col,
    sections: col.sections.filter(
      (section) => section.title.toLowerCase() !== "follow us"
    ),
  }));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] mt-[80px] bg-[url('/menuBg.webp')] bg-cover bg-center text-white overflow-y-auto"
        >
          {/* ✅ 3-column layout with wider spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-12 max-w-7xl mx-auto">
            {filteredFooterColumns.map((col, i) => (
              <div key={i} className="flex flex-col space-y-10">
                {col.sections.map((section, j) => {
                  const img = getImageForTitle(section.title);
                  return (
                    <div
                      key={j}
                      className="flex items-start gap-6 border-b border-white/20 pb-5"
                    >
                      {/* Left image */}
                      {img && (
                        <div className="w-[100px] h-[100px] flex-shrink-0 overflow-hidden rounded-xl shadow-md">
                          <Image
                            src={img}
                            alt={section.title}
                            width={100}
                            height={100}
                            className="object-cover object-center hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}

                      {/* Right content */}
                      <div className="flex flex-col justify-start">
                        <h3 className="text-lg font-semibold mb-2">
                          {section.title}
                        </h3>
                        <ul className="space-y-1 text-sm">
                          {section.lists?.map((item, k) => (
                            <li key={k}>
                              <Link
                                href={item.link || "#"}
                                className="hover:text-[#ff8a00] transition-colors"
                              >
                                {item.label}
                              </Link>

                              {Array.isArray(item.sublink) &&
                                item.sublink.length > 0 && (
                                  <ul className="pl-4 mt-1 space-y-1 text-xs text-gray-300">
                                    {item.sublink.map((sub, l) => (
                                      <li key={l}>
                                        <Link
                                          href={sub.link || "#"}
                                          className="hover:text-[#ff8a00]"
                                        >
                                          {sub.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
