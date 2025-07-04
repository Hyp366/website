import Image from "next/image"

const certifications = [
  {
    name: "Spices Board India",
    img: "https://imgs.search.brave.com/gupx0uVD9GuTK0Jp6fZ4MQGsQQPfApsr3jlTFnLcPWo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5ncmVkaWVudHNu/ZXR3b3JrLmNvbS9j/MjQ5MjYwaW1nX1hM/LWNvbXAyNDkyNjAu/anBn",
  },
  {
    name: "APEDA",
    img: "https://imgs.search.brave.com/uBlwMou8bkCeXxAhYM929OVdUalEzMD8Vg-xyfSnPPE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzM1LzIvYXBlZGEt/bG9nby1wbmdfc2Vl/a2xvZ28tMzUyMTE5/LnBuZw",
  },
  {
    name: "FIEO",
    img: "https://www.fieo.org/images/logo.png",
  },
  {
    name: "FSSAI",
    img: "https://imgs.search.brave.com/8Bz-9k0kyF-D3pllWni1EfW8uadPJo7D2kOBaDBGI30/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mc3Nh/aS5nb3YuaW4vdXBs/b2FkL2tub3dsZWRn/ZV9odWIvMTExNzcw/NWI0MzM5ZmEzZTcy/MkZTU0FJLWxvZ28t/bWluK2xpbmUucG5n",
  },
  {
    name: "MSME",
    img: "https://imgs.search.brave.com/UMqsMe8vk177HZs2Wl0JlxrlZ-AB77LCPXujDcd936k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iYW5u/ZXIyLmNsZWFucG5n/LmNvbS8yMDE4MDUw/MS9zaGUva2lzc3Bu/Zy1taW5pc3RyeS1v/Zi1taWNyby1zbWFs/bC1hbmQtbWVkaXVt/LWVudGVycHJpc2Vz/LWdvLTVhZThjNDdj/ODU2OGUxLjI2ODkw/MDQ4MTUyNTIwNDA5/MjU0NjUuanBn",
  },
]

export default function CertificationsBar() {
  return (
    <section className="w-full py-10 bg-gradient-to-r from-red-600 to-red-700">
      <h2 className="text-center text-white text-2xl md:text-3xl font-bold mb-8 tracking-wide drop-shadow-lg">Our Certifications</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-110 cursor-pointer"
            title={cert.name}
          >
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full shadow-lg group-hover:shadow-2xl group-hover:ring-4 group-hover:ring-red-300/40 group-hover:bg-white/20 transition-all duration-300">
              <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <Image src={cert.img} alt={cert.name + ' Logo'} fill className="object-contain p-2" />
              </div>
              <span className="text-green-400 text-lg">✓</span>
              <span className="text-white font-bold text-base md:text-lg whitespace-nowrap drop-shadow-md">
                {cert.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 