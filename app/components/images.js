import Image from "next/image";

const KaruraImage = ({ src, title }) => {
  return (
    <div className="border p-4 shadow-lg rounded-lg text-center">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <Image src={src} alt={title} width={500} height={400} className="rounded-md" />
    </div>
  );
};

export default KaruraImage;